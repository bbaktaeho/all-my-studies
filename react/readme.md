# react

- 모든 걸 날리고 새로 생성
- virtual dom : 가상 돔
  - 메모리에 있는 돔을 통해 업데이트를 느리지 않게 함

## JSX

- 자바스크립트 문법
- xml 형태로 선언하면 babel 컴파일러가 자바스크립트 형태로 변환

## Hook

- useRef
  - 특정 DOM 선택(ref), DOM 포커스 변경
  - 어떠한 값을 바꿨을 때 재랜더링 할 필요가 없을 때
  - 컴포넌트가 재랜더링될 때마다 계속 기억할 수 있는 값을 관리할 때도 사용
  - setTimeput, setInterval을 사용할 때 주어지는 id 값을 기억할 때, 스크롤 위치를 알고있을 때
- useEffect
  - 파라미터에 함수와 배열을 받음
  - 등록한 함수에서 리턴을 하게되면 업데이트 되기 직전에 호출된다
  - 조회하고있는 상태나 프롭스가 있다면 배열에 넣어줘야하는 것이 규칙
  - 생명주기
  - 컴포넌트가 업데이트 될 때, 되기 전에도 작업할 수 있음
  - 인자로 함수를 받으면 컴포넌트가 마운트 될 때 함수가 실행되고 컴포넌트가 삭제될 때는 함수의 리턴이 실행됨
- useMemo
  - 성능 최적화할 때 사용
  - 특정 값이 바꼈을 때만 특정 함수를 실행, 만약 원하는 값이 바뀌지 않았다면 리랜더링할 때 이전에 만들었던 값을 재사용할 수 있게 함
- useCallback
  - 함수를 재사용할 때 사용
- useReducer
  - useState의 set 함수를 한 함수에서 여러 번 사용할 때 변경하면 좋을 듯

## 전역 관리

- Context API
  - hook
    - createContext, useContext

## Tools

- react devtools

## immer

- 불변성 관리 라이브러리
- 불변성을 해치는 코드를 작성해도 대신 불변성을 유지해줌
- 기본 사용법1

  ```javascript
  import produce from 'immer';

  const state = { number: 1, dontChangeMe: 2 };
  // 어떻게 바꿔줄 지?
  const nextState = produce(state, (draft) => {
    draft.number += 1;
  });
  console.log(nextState);
  ```

- 기본 사용법2

  ```javascript
  import produce from 'immer';

  const todo = {
    text: 'text',
    boole: false,
  };
  const updater = produce((draft) => {
    draft.boole = !draft.boole;
  });
  const nextTodo = updater(todo);

  console.log(nextTodo);
  ```

- 다소 느린 성능이지만 코드 가독성이 좋음

## class 컴포넌트

- 이전(?) 방법
- 생명주기 메서드
  [여기보기](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  1. 컴포넌트가 마운트될 때
     1. constructor
     2. render
     3. componentDidMount
  2. 업데이트될 때
     1. getDeriverdStateFromProps
     2. shouldComponentUpdate
     3. render
     4. getSnapshotBeforUpdate
     5. componentDidUpdate
  3. 제거할 때
     1. componentWillUnmount
  - componentDidCatch : 에러발생 시 잡아줌
    - sentry 라이브러리 사용해보기

## react style

- `npm install classnames`
- `npm install node-sass`
- sass
  1. .sass
  2. .scss
- cssModules : create-react-app 은 이미 적용되어 있음
  1. <이름>.module.css
  2. import 로 불러오면 객체로 바뀜
- css in js

  - emotion
  - styled-components : tagged template literals

    ```javascript
    const testValue = 'TEST';
    function tester(param1, ...param2) {
      cnosole.log(param1);
      cnosole.log(param2);
    }
    tester`123123 ${testValue}123123 123 ${testValue} 123123123`;
    ```

- polished

## api 요청 상태 관리

- react-async

## 라우팅

- SPA
  - 클라이언트에서 라우팅을 관리
  - 인터렉션이 많을 수록 SPA 가 강점이 돋보임
  - 서버쪽 자원을 아낄 수 있고 클라이언트에서는 더 나은 사용자 경험을 누릴 수 있음
  - 앱의 규모가 커지면 자바스크립트 파일이 커질 수 있음 -> CODE SPLITTING 으로 해결
  - 브라우저가 js 구동이 끝날 때 까지 웹을 볼 수 없음 -> SERVER SIDE RENDERING 으로 해결
  - react-router, next 라이브러리로 spa 구현
- react-router-dom

  - Router, WithRouter, MemoryRouter, HashRouter, Link, Switch, NavLink
  - Router 컴포넌트로 라우팅
    - exact 속성으로 경로가 완전 일치할 때 사용
  - Link 컴포넌트로 a 태그를 대체
    - a 태그는 페이지가 새로 로딩됨
  - url parameter 는 match 속성에서 사용 가능
  - 쿼리스트링은 location 속성에서 사용 가능 -> qs 모듈을 사용해서 파싱해줘야함
  - history 객체

## redux

- Action 객체
- Action 생성함수 : 액션 객체를 생성하는 함수
- Reducer : 변화를 이르키는 함수, 불변성 유지
- Store : 하나의 앱당 하나의 스토어가 있음
- Dispatch : 액션을 발생시킴, 스토어의 내장함수, 스토어에게 액션 전달
- Subscribe : 스토어의 내장함수, 파라미터로 특정함수를 넣어주면 디스패치될 때 마다 특정함수 호출
- `규칙`
  1. 하나의 앱엔 하나의 스토어만
  2. state는 readonly -> 불변성 유지
  3. 변화를 일으키는 함수는 순수함수만

### react-redux

- Provider : redux에서 createStore를 사용하여 store를 만들면 이를 Provider 컴포넌트의 props로 받음
- useSelector : Provider 안에 있는 컴포넌트에서 store에 state를 사용할 수 있게 하는 함수

### redux middleware

- 주로 비동기 처리할 때 사용
- redux-thunk
- redux-saga
- redux-observable
- redux-promise-mmiddleware

## typescript for react

- 설치

  ```
  npx create-react-app <이름> --typescript
  ```

- Reacr.FC

  - 함수형 컴포넌트를 생성할 때 사용되는 타입
  - generic 타입으로 props 셋팅
  - 기본적으로 props 에 children: React.ReactNode 을 제공함
  - function 키워드를 이용해서 컴포넌트를 선언하면 defaultProps 를 제대로 사용할 수 있음

- typesafe-actions 라이브러리

  -

## etc

- React.memo

  - 프롭스가 변경되었을 때만 재랜더링

- Snippet
