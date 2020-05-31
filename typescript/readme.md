# typescript

오픈소스 프로그래밍 언어

자바스크립트의 슈퍼셋, ECMASscript 최신 표준을 지원

정적 언어 (컴파일할 때 타입을 검사)

## 설치와 컴파일러 실행

1. node.js 설치하기
2. `npm install typescript (-g)`
3. `(npx) tsc 타입스크립트파일.ts`

## tsc

-   **타입스크립트 컴파일러**
-   **컴파일러에 옵션을 추가해서 다르게 컴파일 가능**
    -   `tsc 타입스크립트파일.ts --target es6` or `tsc 타입스크립트파일.ts --lib es2015,dom`
    -   module 옵션으로 node.js 에서 사용하는 commonjs module로 컴파일할 수 있게 한다.
    -   showconfig 옵션으로 어떤 컴파일 옵션을 줬는지 확인 가능하다.
-   **tsconfig.json**
    -   include:[] : 타입스크립트 컴파일러에 포함될 파일들을 정의
    -   exclude:[] : 타입스크립트 컴파일러에 제외될 파일들을 정의
    -   compilerOptions:{} : 컴파일러 옵션
        -   "module": "CommonJS", // node.js 에서 실행하기 위해 commonjs로 모듈 설정
        -   "rootDir": "src", // 컴파일할 타입스크립트의 루트 디렉터리
        -   "outDir": "dist", // 컴파일 후 js 파일이 오는 곳
        -   "target": "ES5",
        -   "sourceMap": true, // 컴파일 전 원본 코드를 보고싶을 때
        -   "removeComments": true, // 주석 제거
        -   "noImplicitAny": true // 암묵적으로 any 타입으로 주는 변수를 방지
    -   tsc --init : 컴파일러 옵션 자동 생성

## interface

-   인터페이스를 활용해서 하나의 타입을 생성

```typescript
interface TV {
    turnOn(): boolean;
    turnOff(): boolean;
}

const testTV: TV = {
    turnOn():boolean {return true}
    turnOff():boolean {return false}
}
```

## 공부

-   tuple 타입
    -   `let tupleType1: [number, string, object]`
    -   `let tupleType2: [boolean, any]`
-   함수 시그니쳐

    ```typescript
    interface Bag {
        a: string;
    }
    interface SideBag {
        b: string;
    }

    // 오버로드 시그니쳐
    function bag(type: '뒤'): Bag;
    function bag(type: '옆'): SideBag;

    function bag(type: '뒤' | '옆') {
        if (type === '뒤') return { a: '뒤로 매는 가방' };
        else if (type === '옆') return { b: '옆으로 매는 가방' };
        else throw new Error('unsupported type');
    }
    ```

-   열거형

```typescript
enum Grade {
    CHOBO,
    GOSU,
    LEHEND,
}

console.log(Grade.GOSU === 'GOSU'); // true
console.log(Grade['LEGEND']); // 2

function getGrade(g: Grade): string {
    switch (g) {
        case Grade.CHOBO:
            return '초보';
        case Grade.GOSU:
            return '고수';
        case Grade.LEGEND:
            return '전설';
    }
}
```
