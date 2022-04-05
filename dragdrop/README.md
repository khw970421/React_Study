# 드래그 드롭 구현

## 드래그용 데이터

```
const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null,
    draggedTo: null,
    originalOrder: [],
    updatedOrder: [],
  });
```

## 드래그 이벤트 6가지 (drag 제외)

📢 dragStart : 사용자가 요소를 드래그 시작하면 이벤트 발생

📢 dragEnter : 드래그 된 요소가 **드롭 대상에 들어갈 때** 발생

📢 dragLeave : 드래그 된 요소가 **드롭 타겟을 떠날 때** 발생

📢 dragOver : 드래그 된 요소가 **드롭 대상 위에 있을 때** 발생

📢 drop : 드래그 된 요소가 드롭 대상에 드롭될 때 이벤트 발생

📢 dragEnd : 사용자가 요소 드래그 끝내면 이벤트 발생

[관련 추가 내용](https://khw970421.notion.site/407400f3dc434a69be496facf6acb690)
