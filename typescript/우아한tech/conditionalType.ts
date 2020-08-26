interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}

type Item1<T> = {
  id: T;
  container: any;
};

const item1: Item1<string> = {
  id: "aaaaaa",
  container: null,
};

type Item2<T> = {
  id: T;
  container: T extends string ? StringContainer : NumberContainer;
};

const item2: Item2<string> = {
  id: "aaaaaa",
  container: null, // Type 'null' is not assignable to type 'StringContainer'.
};

type Item3<T> = {
  id: T extends string | number ? T : never;
  container: T extends string ? StringContainer : T extends number ? NumberContainer : never;
};

const item3: Item3<boolean> = {
  id: true, // Type 'boolean' is not assignable to type 'never'.
  container: null, // Type 'null' is not assignable to type 'never'.
};

type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

// 1. string | number | string[] | number[]
// 2. never | never | string[] | number[]
//  결과는 3. string[] | number[]

interface Table {
  id: string;
  chairs: string[];
}

interface Dino {
  id: number;
  legs: number;
}

interface World {
  // 마치 제약처럼 동작하는 제네릭 선언부
  // string, number가 아니면 에러를 발생시킴
  getItem<T extends string | number>(id: T): T extends string ? Table : Dino;
}

let world: World = null as any;

const dino = world.getItem(10);
const what = world.getItem(true); // Error! Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

type Flatten<T> = T extends any[] ? T[number] : T extends object ? T[keyof T] : T;

const numbers = [1, 2, 3];
type NumbersArrayFlattened = Flatten<typeof numbers>;
// 1. number[]
// 2. number

const person = {
  name: "Mark",
  age: 38,
};

type SomeObjectFlattened = Flatten<typeof person>;
// 1. keyof T --> "name" | "age"
// 2. T["name" | "age"] --> T["name"] | T["age"] --> number | string

const isMale = true;
type SomeBooleanFlattened = Flatten<typeof isMale>;
// true

// ! infer
// ? 타입을 추론해주는 키워드
type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const promises = [Promise.resolve("Mark"), Promise.resolve(38)];

type Expected = UnpackPromise<typeof promises>; // string | number

// 함수의 리턴타입 알아내기
function plus1(seed: number): number {
  return seed + 1;
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type Id = MyReturnType<typeof plus1>;

lookupEntity(plus1(10));

function lookupEntity(id: Id) {
  // query DB for entity by ID
}

// Function 타입 찾기
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Person {
  id: number;
  name: string;
  hello(message: string): void;
}

type T1 = FunctionPropertyNames<Person>;
type T2 = NonFunctionPropertyNames<Person>;
type T3 = FunctionProperties<Person>;
type T4 = NonFunctionProperties<Person>;
