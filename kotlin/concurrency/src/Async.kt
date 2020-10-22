import jdk.nashorn.internal.objects.Global
import kotlinx.coroutines.*
import kotlin.system.measureTimeMillis

fun main() = runBlocking {
    val time = measureTimeMillis {
        val job = workInParallel()
        job.join()
    }
    println("메인 끝!: $time")
}

private fun workInParallel(): Job {
    val one = GlobalScope.async {// 동시성 실행을 위한 블록
        doOne()
    }
    val two = GlobalScope.async {// 동시성 실행을 위한 블록
        doTwo()
    }

    return GlobalScope.launch {
        val combined = one.await().toString() + "_" + two.await().toString()
        println("Combined: $combined")
    }
}

suspend fun doTwo(): String {
    delay(3000L)
    return "Two!!!"
}

suspend fun doOne(): String {
    delay(1000L)
    return "One!!!"
}
