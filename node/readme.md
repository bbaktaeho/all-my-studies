# Node.js

## 이벤트 기반의 비동기 I/O 프레임워크

## HTTP StatusCode

-   200 : GET, PUT 성공
-   201 : 작성됨, POST
-   204 : 내용 없음, DELETE
-   400 : 잘못된 요청(Bad Request)
-   401 : 권한 없음
-   404 : 찾을 수 없음
-   409 : 충돌
-   500 : 서버 에러

## TDD

-   mocha, should, superTest 라이브러리를 사용하자
-   mocha : 테스트 코드를 돌려주는 테스트 러너
    -   테스트 수트 : 테스트 환경으로 모카에서는 describe()로 구현
    -   테스트 케이스 : 실제 테스트를 말하며 모카에서는 it()으로 구현
-   should : 노드 std asset 말고 서드파티 라이브러리

    -   should는 검증 라이브러리
    -   가독성 높은 테스트 코드 구현 가능

-   superTest : express 통합 테스트용 라이브러리
    -   단위테스트 : 함수의 기능 테스트
    -   통합테스트 : api 기능 테스트
    -   내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸 뒤 결과를 검증
