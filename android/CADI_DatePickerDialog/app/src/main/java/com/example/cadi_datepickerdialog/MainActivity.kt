package com.example.cadi_datepickerdialog

import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.content.DialogInterface
import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListAdapter
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val items = mutableListOf<String>()
        items.add("Alert!")
        items.add("DatePicker!")
        items.add("TimePicker!")
        items.add("네이버")

        val adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, items)
        listView.adapter = adapter

        listView.setOnItemClickListener { parent, view, position, id ->
            val item = parent.getItemAtPosition(position)

            when (item.toString()) {
                "Alert!" -> showAlert()
                "DatePicker!" -> showDatePicker()
                "TimePicker!" -> showTimePicker()
                "네이버" -> showWeb()
            }
        }
    }

    private fun showAlert() {
        AlertDialog.Builder(this)
            .setTitle("앱 종료")
            .setPositiveButton("종료") { dialogInterface: DialogInterface, i: Int -> finish() }
            .setNegativeButton("취소") { dialogInterface: DialogInterface, i: Int -> }
            .show()
    }

    private fun showDatePicker() {
        val cal = Calendar.getInstance()
        DatePickerDialog(this, DatePickerDialog.OnDateSetListener { datePicker, y, m, d->
            Toast.makeText(this, "$y-$m-$d", Toast.LENGTH_SHORT).show()
        }, cal.get(Calendar.YEAR), cal.get(Calendar.MONTH), cal.get(Calendar.DATE)).show()
    }

    private fun showTimePicker() {
        val cal = Calendar.getInstance()
        TimePickerDialog(this, TimePickerDialog.OnTimeSetListener { timePicker, h, m ->
            Toast.makeText(this, "$h:$m", Toast.LENGTH_SHORT).show()
        }, cal.get(Calendar.HOUR), cal.get(Calendar.MINUTE), true).show()
    }

    private fun showWeb() {
        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://www.naver.com")))
    }
}