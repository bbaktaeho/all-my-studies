// 클래스
class SimpleThread : Thread() {
    override fun run() {
        println("Class Thread ${Thread.currentThread()}")
    }
}

// 인터페이스는 다중 상속의 장점이 있음
class SimpleRunnable : Runnable {
    override fun run() {
        println("Interface Thread ${Thread.currentThread()}")
    }

}

public fun thread(
    start: Boolean = true,
    isDaemon: Boolean = false,
    contextClassLoader: ClassLoader? = null,
    name: String? = null,
    priority: Int = -1,
    block: () -> Unit
): Thread {
    val thread = object : Thread() {
        public override fun run() {
            block()
        }
    }
    if (isDaemon) thread.isDaemon = true
    if (priority > 0) thread.priority = priority
    if(name != null) thread.name = name
    if (contextClassLoader != null) thread.contextClassLoader = contextClassLoader
    if (start) thread.start()
    return thread
}

fun main() {
//    val thread = SimpleThread()
//    thread.start()
//
//    val runnable = SimpleRunnable()
//    var thread2 = Thread(runnable)
//    thread2.start()
//
//    // 익명 객체
//    object : Thread() {
//        override fun run() {
//            println("Object Thread: ${Thread.currentThread()}")
//        }
//    }.start()
//
//    // 람다식
//    Thread {
//        println("Lambda Thread: ${Thread.currentThread()}")
//    }.start()
    thread(start = true) {
        println("Current Threads(Custom function): ${Thread.currentThread()}")
        println("Priority: ${Thread.currentThread().priority}")
        println("Name: ${Thread.currentThread().name}")
        println("IsDaemon: ${Thread.currentThread().isDaemon}")

    }
}
