package also

import java.io.File

fun main() {
    mkdir("./alsoTestMkdir")
}

fun mkdir(path: String) {
    path.let { File(path) }.also { it.mkdir() }
}