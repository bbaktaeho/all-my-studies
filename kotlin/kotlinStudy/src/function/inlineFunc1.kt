package function

fun main() {
    println("start main")
    test()
    lamdaFunc(10,20) {x,y ->
        if (x + y > 20) {
            println("합이 20보다 큼")
            return
        }
        println("lamdaFunc end")
    }
    println("main end")
}

inline fun test() {
    println("start pln")
}
inline fun lamdaFunc(a:Int,b:Int, lam: (Int, Int)->Unit){
    lam(a,b)
}
