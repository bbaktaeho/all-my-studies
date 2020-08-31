# css 속성 정리

- `font-size`

  - px, em 단위
  - em은 기본 px의 배수를 나타냄
  - 웹 표준 기본px은 16px

- `font-family`
  - 폰트 스타일을 변경할수 있음
  - , 로 여러 개의 폰트를 나열한다면 순서대로 지원되는지 확인 후 적용됨
- `position`

  - relative, static(default), fixed, absolute
  - 부모의 position에 영향을 받음
  - relative
    - 상대적인 위치
    - top과 left에 영향 받음
  - absolute
    - 기준점이 바뀜
    - static이 아닌 기준점을 찾음
  - fixed
    - 스크롤이 발생해도 고정값으로 존재

- `float`

  - 좌, 우 배치를 할 수 있음
  - 화면 크기에 따른 자동 반응형
  - 부모를 떠나게 됨
  - overflow: auto / hidden 속성을 줌으로서 다시 부모를 찾아오게함(부모 태그에 있어야하는 속성)
  - clear:left / right 속성으로 float라는 속성을 이해하고 곂치지 않게 함(float의 값이 맞춰서 left, right 함)

- `display: flex`

  - 반응형을 구현할 때 사용
  - flex-direction, justify-content, align-items
  - 하위 태그에서 적용
    - flex-grow

- `z-index`

  - position이 static값이 아닌 태그들은 겹칠 수 있음
  - 누가 위로 보이냐는 이슈(기본은 마지막에 만들어진 태그)
  - z-index를 큰 수로 설정하면 가장 위로 올림
  - stacking context

- `margin: 0px auto`

  - 중앙 정렬

- `transition`

  - 애니메이션 효과
  - 시간값으로 애니매이션 효과를 줄 수 있음
  - 속성을 , 로 구분함
  - all 옵션으로 여러 이벤트에 효과를 적용시킬 수 있음

- `transform`
  - 각도를 다룰 수 있음
  - translate() 으로 이동이 가능
  - 보통 translate3d() 를 활용함
  - gpu 연산으로 빠른 렌더링이 가능해짐
  - 모바일 웹에서 스와이프할 때 많이 사용
