package `class`

private class Patient2(val name: String, var id: Int) {
    fun doctorList(d: Doctor2) {
        println("patient: $name, doctor name: ${d.name}")
    }
}

// 환자와 의존 관계
private class Doctor2(val name: String, val p: Patient2) {
    val customerId: Int = p.id
    fun patientList() {
        println("Doctor: $name, patient name: ${p.name}")
    }
}

fun main() {
    val patient = Patient2("taeho", 1234)
    val doc = Doctor2("sabu", patient)
    doc.patientList()
}