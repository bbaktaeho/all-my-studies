export {};

interface IUser {
  name: string;
}

interface IAction {
  do(): void;
}

type UserAction = IUser & IAction;
function createUserAction(): UserAction {
  return {
    do() {},
    name: "bbak",
  };
}

type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

// class implements
class UserImpl implements IUser {
  constructor(public name: string = "bbak") {}
}
