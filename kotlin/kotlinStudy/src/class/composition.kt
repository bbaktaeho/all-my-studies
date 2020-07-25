package `class`

// 엔진 클래스는 카 클래스의 구성품
// 엔진 클래스가 지워지면 카 클래스의 엔진도 지워짐
// 강한 관계
private class Car(val name: String, val power: String) {
    private var engine = Engine(power)

    fun startEngine() = engine.start()
    fun stopEngine() = engine.stop()
}

// 독립적으로 존재하기 힘든 클래스
private class Engine(power: String) {
    fun start() = println("Engine has been started")
    fun stop() = println("Engine has been stopped")
}