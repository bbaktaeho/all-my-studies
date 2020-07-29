package com.example.todolist

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import com.example.todolist.screens.MainActivity

class SplashScreenActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen)

        val NEW_INTENT = Intent(this, MainActivity::class.java)
        Handler().postDelayed({
            startActivity(NEW_INTENT)
            finish()
        }, 1500)
    }
}