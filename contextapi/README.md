## NotUseContext
>ContextAPI를 사용하지 않고 App.js에서 props를 통해 name을
GrandParent -> Parent -> Child 순으로 전달하면서 state의 변경에 의해 리렌더링이 전부 진행된다.


## UseContext
>ContextAPI를 사용하여 App.js에서 props가 아닌 Child 컴포넌트에서 state를 자체적으로 필요한 부분을 받아서
부모인 GrandParent와 Parent가 불필요한 리렌더링이 진행되지 않는다.

## [설명링크](https://khw970421.notion.site/ContextAPI-fbf65387cdb1455e80d5a485ba0a2091)
