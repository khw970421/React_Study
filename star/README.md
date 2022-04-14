# 별점 컴포넌트

## 컴포넌트 종류

1. 사진을 이용한 소수점을 만들어 낼 수 있는 FixGrade 컴포넌트
2. react-icons를 이용하여 선택한만큼 별점이 만들어지는 NonFixGrade 컴포넌트

# FixGrade

> 매개변수로 size와 percent를 받아 별점 컴포넌트의 크기를 조정하고, percent만큼의 별점이 채워지게한다.
> -> 내부 계산은 사진(star.png)의 width height에 따라 계산 처리를 해주었다.

# NonFixGrade

> 매개변수로 clicked로 배열을 받은만큼 색칠 범위를 늘리고
> onClickCheck 이벤트가 발생할지 안할지에 대해 처리해주고 선택한 별점만큼의 clickGrade 이벤트를 해당 idx를 전달하여 처리하고 size를 받고 hoverAbled를 통해 hover를 통해서도 별점의 점수가 늘었다 줄었다를 하지 안할지 처리

> react-icons에서 color만으로 원하는 소수점만큼을 처리할 방법을 계속 찾아봤으나 실패하였다.
