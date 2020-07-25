package `class`

private class Patient(val name: String) {
    fun doctorList(d: Doctor) {
        println("patient name: $name , doctor name: ${d.name}")
    }
}

private class Doctor(val name: String) {
    fun patientList(p: Patient) {
        println("doctor name: $name , patient name: ${p.name}")
    }
}

fun main() {
    val patient = Patient("taeho")
    val doctor = Doctor("doc!")

    patient.doctorList(doctor)
    doctor.patientList(patient)
}