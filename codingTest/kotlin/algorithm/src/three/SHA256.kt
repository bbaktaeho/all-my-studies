package three
import java.security.MessageDigest
fun main() {
    println(encoding(readLine()!!))
}

fun encoding(param: String): String {
    val HEX_CHARS = "0123456789abcdef"
    val bytes = MessageDigest.getInstance("SHA-256").digest(param.toByteArray())
    val result = StringBuilder(bytes.size * 2)
    bytes.forEach {
        val i = it.toInt()
        result.append(HEX_CHARS[i shr 4 and 0x0f])
        result.append(HEX_CHARS[i and 0x0f])
    }
    return result.toString()
}

