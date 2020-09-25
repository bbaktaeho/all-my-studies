## NestJS for beginner

Learning how to build Enterprise node.js applications using Nest.js

### Install

```bash
npm i -g @nestjs/cli
nest new
```

### NestJS

- NestJS는 typescript로 BE 개발을 바로 할 수 있음
- express 위에서 동작함
- 기본적으로 아키텍처가 적용되어있음
  - OOP
  - FP
  - FRP
- 데코레이터를 기본적으로 사용 (클래스에 함수 기능을 추가할 수 있음)
  ```typescript
  @Module({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
  })
  ```

### Architecture

#### Controller

컨트롤러는 URL를 통해 함수를 실행해주는 역할<br>
`@Controller(<Entry Point>)`로 만들어진 컨트롤러는 자동으로 Entry Point를 따라 라우팅할 수 있음

- `app.controller.ts`
  ```typescript
  @Controller()
  export class AppController {
    ...
    @Get("/hello")
    sayHello(): string {
      return "hello everyone"; // 비지니스 로직에서 구현해야함!
    }
  }
  ```

#### Service

비지니스 로직을 수행

- `app.service.ts`

  ```typescript
  @Injectable()
  export class AppService {
    getHello(): string {
      return 'Hello Nest';
    }

    getHi(): string {
      return 'Hi';
    }
  }
  ```

- `app.controller.ts`
  ```typescript
  @Controller()
  export class AppController {
    ...
    @Get("/hello")
    sayHello(): string {
      return this.appService.getHi(); // 비지니스 로직에서 구현해야함!
    }
  }
  ```

### CLI

```bash
nest
```

```bash
Usage: nest <command> [options]

Options:
  -v, --version                                   Output the current version.
  -h, --help                                      Output usage information.

Commands:
  new|n [options] [name]                          Generate Nest application.
  build [options] [app]                           Build Nest application.
  start [options] [app]                           Run Nest application.
  info|i                                          Display Nest project details.
  update|u [options]                              Update Nest dependencies.
  add [options] <library>                         Adds support for an external library to your project.
  generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    Available schematics:
      ┌───────────────┬─────────────┐
      │ name          │ alias       │
      │ application   │ application │
      │ class         │ cl          │
      │ configuration │ config      │
      │ controller    │ co          │
      │ decorator     │ d           │
      │ filter        │ f           │
      │ guard         │ gu          │
      │ interceptor   │ in          │
      │ interface     │ interface   │
      │ middleware    │ mi          │
      │ provider      │ pr          │
      │ resolver      │ r           │
      │ service       │ s           │
      │ library       │ lib         │
      │ sub-app       │ app         │
      │ resource      │ res         │
      └───────────────┴─────────────┘
```

- nest CLI를 사용해서 쉽게 구현 가능

### Execute

- package.json
  ```json
  // script
  ...
  "start:dev": "nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main",
  ```
  - 개발 : `npm run start:dev`
  - 디버깅 : `npm run start:debug`
  - 배포 : `npm run start:prod`
