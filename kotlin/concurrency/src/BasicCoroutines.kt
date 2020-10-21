import kotlinx.coroutines.*

fun main() { // 메인 스레드 문맥
    val job = GlobalScope.launch { // 새로운 코루틴을 백그라운드에서 실행 (non-blocking)
        // 해당 코루틴은 스레드 컨텍스트 문맥에 따라서 어디에 맡겨질지 정해짐
        delay(1000L)
        println("World!")
    }
    println("Hello, ")
    println("job: ${job.isActive}, ${job.isCompleted}")
    Thread.sleep(2000L) // 메인 스레드가 jvm에서 바로 종료되지 않게 2초 기다림
    println("job: ${job.isActive}, ${job.isCompleted}")
}