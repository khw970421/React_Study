import { emojiMenus } from "./data";
import { useState, useRef } from "react";
import styled from "styled-components";
function App() {
  const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null,
    draggedTo: null,
    originalOrder: [],
    updatedOrder: [],
  });

  const [list, setList] = useState(emojiMenus);
  const refUlContainer = useRef();
  const onDragStart = (event) => {
    event.currentTarget.style.opacity = "0.4";
    const initialPosition = parseInt(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: list,
    });
  };

  const onDragEnter = (event) => {
    event.currentTarget.classList.add("over");
  };

  const onDragLeave = (event) => {
    event.currentTarget.classList.remove("over");
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom; // 드래그 되는 항목의 인덱스(시작)
    const draggedTo = parseInt(event.currentTarget.dataset.position); // 놓을 수 있는 영역의 인덱스(끝)
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      // draggedFrom(시작) 항목 제외한 배열 목록
      (item, index) => index !== draggedFrom
    );
    newList = [
      // 드래그 시작, 끝 인덱스를 활용해 새로운 배열로 반환해줌
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    if (draggedTo !== dragAndDrop.draggedTo) {
      // 놓을 수 있는 영역이 변경 되면 객체를 변경해줌
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  const onDragEnd = (event) => {
    event.currentTarget.style.opacity = "1";
    refUlContainer.current.childNodes.forEach((item) => {
      item.classList.remove("over");
    });
  };

  return (
    <div className="App">
      <DivContainer>
        <ul ref={refUlContainer}>
          {list.map((obj, index) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignids: "center",
                  width: "400px",
                  height: "100px",
                }}
                className="draggable"
                key={index}
                draggable={true} //  draggable => true이면 드래그가 가능합니다.
                data-position={index} //
                onDragStart={onDragStart} //  ex) event.currentTarget.dataset.position
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
              >
                <span>{obj.emoji}</span>
                <p>{obj.name}</p>
              </li>
            );
          })}
        </ul>
      </DivContainer>
    </div>
  );
}

const DivContainer = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: skyblue;
  margin: 10px;
`;

export default App;
