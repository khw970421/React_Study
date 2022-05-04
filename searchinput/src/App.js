// 2. 상황 useRef를 사용하지 않고 value를 처리하는 방법  : 디바운스 밖에서 상태변화를 진행한다.
import styled from "styled-components";
import RecommendedSearch from "./RecommendedSearch";
import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [handleLoading, setHandleLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(-1);

  const searchClick = () => {
    alert(`검색할 내용은 ${keyword}입니다.`);
  };
  const pressKey = ({ key }) => {
    if (key === "Enter") {
      setKeyword(items[selected] ? items[selected].name : keyword);
    } else if (key === "ArrowDown") {
      setSelected((selected + 1) % items.length);
    } else if (key === "ArrowUp") {
      setSelected(
        selected - 1 >= 0
          ? (selected - 1) % items.length
          : selected - 1 + items.length
      );
    }
  };
  const writeSearchWord = async ({ target }) => {
    if (/[0-9]/.test(target.value)) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${target.value}/comments`
      );
      if (res.data) setItems(res.data);
      else setItems([]);
    } else setItems([]);
  };

  const debounce = (callback, delay) => {
    // callback => 일정 시간이 지난 후 실행되는 함수
    // delay => 지연 시간
    let timer;
    return (...args) => {
      // 실행할 함수(setTimeout())를 취소
      setHandleLoading(true);
      clearTimeout(timer);
      // delay가 지나면 callback 함수를 실행
      timer = setTimeout(() => {
        setHandleLoading(false);
        return callback(...args);
      }, delay);
    };
  };

  const change = (e) => {
    setKeyword(e.target.value);
    debounce(writeSearchWord, 500)(e);
  };
  return (
    <div className="App">
      <Search>
        <div>
          <IoIosSearch color="#000" size="23px" />
          <CustomInput
            type="text"
            onChange={change}
            placeholder="검색할 JSON 숫자를 입력해주세요"
            value={keyword}
            onKeyDown={pressKey}
          />
        </div>
        <button onClick={searchClick}>검색</button>
      </Search>
      <RecommendedSearch
        items={items}
        keyword={keyword}
        handleLoading={handleLoading}
        selected={selected}
        changeKeyword={(keyword) => {
          setKeyword(keyword);
        }}
      />
    </div>
  );
}
const Search = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto 10px;
  border-radius: 42px;
  overflow: hidden;
  border: 1px solid black;
  svg {
    margin-bottom: -5px;
  }
  div {
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 20px 24px;
    input {
      font-size: 1.125rem;
      width: 100%;
      border: none;
      line-height: 1.2;
      padding-left: 10px;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-weight: 600;
        color: #ccc;
      }
    }
  }
  button {
    padding: 18px 32px;
    width: 111px;
    border: none;
    background-color: #007be9;
    font-size: 1.125rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;
const CustomInput = styled.input``;
export default App;

/* 1. 상황 useRef를 사용하여 onChange를 처리

import styled from "styled-components";
import RecommendedSearch from "./RecommendedSearch";
import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

function App() {
  const inputRef = useRef();
  const [items, setItems] = useState([]);
  const [handleLoading, setHandleLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(-1);

  const searchClick = () => {
    alert(`검색할 내용은 ${inputRef.current.value}입니다.`);
  };
  const pressKey = ({ key }) => {
    if (key === "Enter") {
      inputRef.current.value = items[selected] ? items[selected].name : keyword;
    } else if (key === "ArrowDown") {
      setSelected((selected + 1) % items.length);
    } else if (key === "ArrowUp") {
      setSelected(
        selected - 1 >= 0
          ? (selected - 1) % items.length
          : selected - 1 + items.length
      );
    }
  };
  const writeSearchWord = async ({ target }) => {
    setKeyword(target.value);
    if (/[0-9]/.test(target.value)) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${target.value}/comments`
      );
      if (res.data) setItems(res.data);
      else setItems([]);
    } else setItems([]);
  };

  const debounce = (callback, delay) => {
    // callback => 일정 시간이 지난 후 실행되는 함수
    // delay => 지연 시간
    let timer;
    return (...args) => {
      // 실행할 함수(setTimeout())를 취소
      setHandleLoading(true);
      clearTimeout(timer);

      // delay가 지나면 callback 함수를 실행
      timer = setTimeout(() => {
        setHandleLoading(false);
        return callback(...args);
      }, delay);
    };
  };
  return (
    <div className="App">
      <Search>
        <div>
          <IoIosSearch color="#000" size="23px" />
          <CustomInput
            type="text"
            onChange={debounce(writeSearchWord, 500)}
            placeholder="검색할 JSON 숫자를 입력해주세요"
            ref={inputRef}
            onKeyDown={pressKey}
          />
        </div>
        <button onClick={searchClick}>검색</button>
      </Search>
      <RecommendedSearch
        items={items}
        keyword={keyword}
        handleLoading={handleLoading}
        selected={selected}
        changeKeyword={(keyword) => {
          setKeyword(keyword);
          inputRef.current.value = keyword;
        }}
      />
    </div>
  );
}
const Search = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto 10px;
  border-radius: 42px;
  overflow: hidden;
  border: 1px solid black;
  svg {
    margin-bottom: -5px;
  }
  div {
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 20px 24px;
    input {
      font-size: 1.125rem;
      width: 100%;
      border: none;
      line-height: 1.2;
      padding-left: 10px;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-weight: 600;
        color: #ccc;
      }
    }
  }
  button {
    padding: 18px 32px;
    width: 111px;
    border: none;
    background-color: #007be9;
    font-size: 1.125rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;
const CustomInput = styled.input``;
export default App;

*/
