export {};

interface IUser {
  name: string;
}

interface IAction {
  do(): void;
}

// interaction type
function createIUserIAction(u: IUser, a: IAction): IUser & IAction {
  return { ...u, ...a };
}

const UA = createIUserIAction({ name: "bbak" }, { do() {} });

// functino overloading
// union type
function compare(x: string, y: string): number;
function compare(x: number, y: number): number;
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}

// 타입 가드
function isIAction(v: IUser | IAction): v is IAction {
  return (<IAction> v).do !== undefined;
}

function process(v: IAction | IUser) {
  if (isIAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
