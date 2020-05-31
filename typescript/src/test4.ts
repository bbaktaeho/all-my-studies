interface Person {
    name: string;
    say(msg: string): void;
}
interface Programmer {
    wrtieCode(requirment: string): string;
}

abstract class Korean implements Person {
    // 추상클래스는 인스턴스를 만들 수 없음
    public abstract personNum: number; // 상속받게되면 이 속성을 꼭 가지게 됨
    constructor(public name: string) {}

    say(msg: string) {
        console.log(msg);
    }
}

class KoreanProgrammer implements Korean, Programmer {
    constructor(public name: string, public personNum: number) {}
    say(msg: string): void {
        console.log(msg);
    }
    wrtieCode(requirment: string): string {
        return requirment + '!!!';
    }
}
const bbak = new KoreanProgrammer('bbak', 12341234);
