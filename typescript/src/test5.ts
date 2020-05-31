function timeoutGeneric<T>(x: T, time: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, time);
    });
}

timeoutGeneric<string>('start', 1000).then((v) => console.log(v));

function createTuple<T, U>(v1: T, v2: U): [T, U] {
    return [v1, v2];
}
const tuple1 = createTuple('test1', 1);
const tuple2 = createTuple('test2', 2);

// 제네릭으로 클래스 정의
// 타입을 파라미터화 해서 여러 타입으로 지원하는 클래스가 생성됨
interface DB<T> {
    add(v: T): void;
    get(): T;
}

// 제네릭으로 정의된 인터페이스를 확장하려면 클래스를 선언할 때도 제네릭을 맞춰야한다
class LocalDB<T> implements DB<T> {
    constructor(private localStorageKey: string) {}
    add(v: T) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}

interface User {
    name: string;
}

const userDB = new LocalDB<User>('user');
userDB.add({ name: 'bbak' });
const userA = userDB.get();
