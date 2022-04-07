# Input 구현하기

> input창의 API 연동과 관련된 디바운스 화살표 키보드 클릭등을 처리한다.

## 디바운스

> onChange 이벤트를 통해 API의 비효율적인 요청을 막기 위해 사용

## arrowup arrowdown enter

> 검색 결과에 대해 화살표로 아래 위 옮기기와 enter 선택 및 마우스 클릭시 input 값으로 변경 가능

## App.js에서 onChange의 값을 다루는 방법

1. useRef를 이용해서 input에 value를 따로 지정하지 않고 `ref={inputRef}`를 이용하여 처리

2. useState를 이용하여 input에 value를 연결하여 `value={keyword}` 처리하고 해당 상태변화는 디바운스 내부에서 처리하지 않고 디바운스 밖에서 처리하여 정상적으로 동작시킨다.

### 우리가 문제가 발생하는 상황

> useState로 input value를 연결시켜놨는데 (2.상황) 해당 상태변화가 디바운스 안에서 동작한다면 제대로된 value를 인식하는 시기가 서로 충돌되며 값이 나타나지않는 상황은 절대 만들지 말아야한다.

# [관련 설명링크](https://khw970421.notion.site/70d6b37e2de44d35a85444c7d367293a)
