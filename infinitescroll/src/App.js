import { memo, useCallback, useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Item from "./Item";
import Loader from "./Loader";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const App = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);
  const ref = useRef(1);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${ref.current}/comments`
    );
    ref.current++;
    setItemLists((itemLists) => [...itemLists, ...res.data]);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((v, i) => {
          return <Item number={i + 1} key={i} content={v} />;
        })}
        <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  );
};

export default memo(App);
