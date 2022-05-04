# Pagination 구현하기
>주소 API를 이용하여 페이지네이션을 구현하기

* 주소 API의 경우 `.env` 파일로 `REACT_APP_SERVICE_KEY`를 처리했다. 

## Page 컴포넌트의 매개변수
1. clickAddress  : 부모컴포넌트에서 추후 해당 주소를 눌렀을때 처리할 동작을 정의한다.
2. currentPage : 페이지의 시작위치를 1로 처리해준다. (변경은 하지않도록한다.)
3. countPerPage : Page당 주소를 몇개 보여줄지를 정한다.
4. paginationCount : 페이지네이션의 Page를 몇개로 설정하여 클릭할 수 있게 만들지 처리한다. 

## 사용한 기술 스택
>react, react-icons, styled-components , http-proxy-middleware , axios

## 동작 영상 및 추가 설명 링크
[노션 링크](https://khw970421.notion.site/f4be5f4f1b6540c99dfaaf0c905aec6a)
해당 링크의 결과보기에서 동작 영상들을 추가로 확인할 수 있습니다. 

## 해당 컴포넌트의 효과
> countPerPage와 paginationCount를 설정하여 필요한 만큼의 주소결과와 page 갯수를 유동적으로 매개변수를 통해 바꿔서 처리할 수 있다. 
 
