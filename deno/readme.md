# 🦕 deno

[Deno(바로가기)](https://deno.land/)<br>
[Deno/std(라이브러리)](https://deno.land/std)<br>
[Deno/x(프레임워크)](https://deno.land/x)<br>
[Deno/express(프레임워크)](https://github.com/NMathar/deno-express)

**타입스크립트, 자바스크립트 런타임**

**V8, Rust, Tokio, Typescript**

## 특징

1. ES Modules만을 유일하게 사용
2. Enhanced Security
    - `--arrow-read` : Allow file system read access
    - `--arrow-write` : Allow file system write access
    - `--arrow-net` : Allow network access
    - `--arrow-env` : Allow environment access
    - `--arrow-run` : Allow running subprocess
    - `--arrow-all` : Allow all permissions
3. 타입스크립트를 작성하기 위한 설정을 할 필요가 없습니당
4. Running a program with top level await (Top level await supported)

    ```typescript
    fow await (const req of s) {
        req.respond({body: 'hi'})
    }
    ```

5. 브라우저와 호환성

    - fetch 함수 내장
    - import/export(ES module) syntax

6. not node_modules
    - URL를 통해서 모듈 호출

## 매우 빠른 설치와 실행

-   **Mac**
    -   `brew install deno`
    -   `deno run https://deno.land/std/examples/welcome.ts`

## 디노(데노) 캐시는 어디에 있을까

URL import한 모듈은 내 컴퓨터에 캐시로 저장됨

-   **Mac**
    -   `$HOME/Library/Caches/deno`
-   **Windows**
    -   `%LOCALAPPDATA%/deno`

## Deno Framework & Library

-   **OAK**
    -   node.js framework인 express와 매우 비슷함
-   **express**
    -   내가 알던 express가 deno에서??
-   **Denon**
    -   node.js 의 nodemon!
    -   컴퓨터에 설치 후 `denon --init`
