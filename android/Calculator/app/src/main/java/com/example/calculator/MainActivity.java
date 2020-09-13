package com.example.calculator;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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
    List<String> expressionList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ActionBar actionBar = getSupportActionBar();
        assert actionBar != null;
        actionBar.hide();

        this.init();
    }

    // 컴포넌트 초기화
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
        expressionList = new ArrayList<String>();
    }

    // 클리어, 지우기, 결과 버튼을 제외한 이벤트 처리 함수
    public void buttonClick(View v) {
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
            case R.id.btn_division: insertExpression("/"); break;
            case R.id.btn_mod: insertExpression("%"); break;
            case R.id.btn_multi: insertExpression("X"); break;
            case R.id.btn_plus: insertExpression("+"); break;
            case R.id.btn_minus: insertExpression("-"); break;
        }
    }

    // 클리어 버튼 이벤트 처리
    public void clearClick(View v) {
        expressionList.clear();
        txtExpression.setText("");
        txtResult.setText("");

        Log.e("expresstionList", String.valueOf(expressionList));
    }

    // 지우기 버튼 이벤트 처리
    public void deleteClick(View v) {
        if (expressionList.size() != 0) {
            expressionList.remove(expressionList.size()-1);

            Log.e("expressionList", String.valueOf(expressionList));
            txtExpression.setText(TextUtils.join(" ", expressionList));
            Log.e("expressionList", String.valueOf(expressionList));
        }else {
            txtExpression.setText("");
        }
    }

    // 표현식 변경
    public void insertExpression(String str) {
        try {
            txtExpression.append(Integer.parseInt(str)+"");
        }catch (Exception e) {
            // operator
            txtExpression.append(" "+str+" ");
            Collections.addAll(expressionList, txtExpression.getText().toString().split(" "));
        }finally {
            Log.e("expressionList", String.valueOf(expressionList));
        }
    }

    // 이콜 버튼 이벤트 처리
    public void equalClick(View v) {
        if (txtExpression.getText().toString().length() == 0) return;

        String last = txtExpression.getText().toString().split(" ")[expressionList.size()];
        if (!last.equals("X") && !last.equals("+") && !last.equals("-") && !last.equals("%") && !last.equals("/")) {
            expressionList.add(last);
        }
        Log.e("expressionList", String.valueOf(expressionList));


    }

    // 연산자 우선순위 *,/,%,+,-
    void calculator() {
        for (String item : expressionList) {
            if (item.equals("X")) {

            }
        }
    }
}
