export {};

// index type 은 string or number 타입만 가능
interface Props {
  [key: string]: string;
}

const myProps: Props = {
  p1: "123",
  p2: "321",
};

// key 타입
let keys: keyof Props;

// 유저 예제
interface IUser {
  name: string;
  age: number;
  hello(msg: string): void;
}

// 타입을 가져옴
let keysOfUser: keyof IUser;
let helloMethod: IUser["hello"];
helloMethod = function (m: string) {};
