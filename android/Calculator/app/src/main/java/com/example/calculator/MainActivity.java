package com.example.calculator;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    Button btnOne;
    Button btnTwo;
    Button btnThree;
    Button btnFour;
    Button btnFive;
    Button btnSix;
    Button btnSeven;
    Button btnEight;
    Button btnNine;
    Button btnZero;
    TextView txtExpression;
    TextView txtResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ActionBar actionBar = getSupportActionBar();
        assert actionBar != null;
        actionBar.hide();

        init();
    }

    void init() {
        btnOne = findViewById(R.id.btn_one);
        btnTwo = findViewById(R.id.btn_two);
        btnThree = findViewById(R.id.btn_three);
        btnFour = findViewById(R.id.btn_four);
        btnFive = findViewById(R.id.btn_five);
        btnSix = findViewById(R.id.btn_six);
        btnSeven = findViewById(R.id.btn_seven);
        btnEight = findViewById(R.id.btn_eight);
        btnNine = findViewById(R.id.btn_nine);
        btnZero = findViewById(R.id.btn_zero);
        txtExpression = findViewById(R.id.txt_expression);
        txtResult = findViewById(R.id.txt_result);
    }


    public void numberClick(View v) {
        switch (v.getId()) {
            case R.id.btn_one: insertExpression("1"); break;
            case R.id.btn_two: insertExpression("2"); break;
            case R.id.btn_three: insertExpression("3"); break;
            case R.id.btn_four: insertExpression("4"); break;
            case R.id.btn_five: insertExpression("5"); break;
            case R.id.btn_six: insertExpression("6"); break;
            case R.id.btn_seven: insertExpression("7"); break;
            case R.id.btn_eight: insertExpression("8"); break;
            case R.id.btn_nine: insertExpression("9"); break;
            case R.id.btn_zero: insertExpression("0"); break;
        }
    }


    public void insertExpression(String str) {
        txtExpression.append(str + " ");
    }

    String calculator() {

        return "";
    }

    public void clearClick(View v) {
        txtExpression.setText("");
        txtResult.setText("");
    }
}