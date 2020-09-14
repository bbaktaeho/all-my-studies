package com.example.calculator;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Stack;

public class MainActivity extends AppCompatActivity {
    private TextView txtExpression;
    private TextView txtResult;
    private List<Integer> checkList; // -1: 이콜, 0: 연산자, 1: 숫자 / 예외 발생을 막는 리스트
    private Stack<String> operatorStack; // 연산자를 위한 스택
    private List<String> prefixList; // 전위 표기
    private List<String> postfixList; // 후위 표기

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.init();
    }

    void init() {
        txtExpression = findViewById(R.id.txt_expression);
        txtResult = findViewById(R.id.txt_result);
        checkList = new ArrayList<>();
        operatorStack = new Stack<>();
        prefixList = new ArrayList<>();
        postfixList = new ArrayList<>();

        ActionBar actionBar = getSupportActionBar();
        assert actionBar != null;
        actionBar.hide();
    }

    // 클리어, 지우기, 결과 버튼을 제외한 이벤트 처리 함수
    public void buttonClick(View v) {
        switch (v.getId()) {
            case R.id.btn_one:
                addNumber("1");
                break;
            case R.id.btn_two:
                addNumber("2");
                break;
            case R.id.btn_three:
                addNumber("3");
                break;
            case R.id.btn_four:
                addNumber("4");
                break;
            case R.id.btn_five:
                addNumber("5");
                break;
            case R.id.btn_six:
                addNumber("6");
                break;
            case R.id.btn_seven:
                addNumber("7");
                break;
            case R.id.btn_eight:
                addNumber("8");
                break;
            case R.id.btn_nine:
                addNumber("9");
                break;
            case R.id.btn_zero:
                addNumber("0");
                break;
            case R.id.btn_division:
                addOperator("/");
                break;
            case R.id.btn_mod:
                addOperator("%");
                break;
            case R.id.btn_multi:
                addOperator("X");
                break;
            case R.id.btn_plus:
                addOperator("+");
                break;
            case R.id.btn_minus:
                addOperator("-");
                break;
        }
    }

    // 클리어 버튼 이벤트 처리
    public void clearClick(View v) {
        prefixList.clear();
        checkList.clear();
        txtExpression.setText("");
        txtResult.setText("");
        operatorStack.clear();
        postfixList.clear();
    }

    // 지우기 버튼 이벤트 처리
    public void deleteClick(View v) {
        if (prefixList.size() != 0) {
            prefixList.remove(prefixList.size() - 1);
            checkList.remove(checkList.size() - 1);
            txtExpression.setText(TextUtils.join(" ", prefixList));
            Log.d("prefixList", String.valueOf(prefixList));
        }
    }

    void addNumber(String str) {
        checkList.add(1); // 숫자가 들어왔는지 체크리스트에 표시
        txtExpression.append(str); // UI
    }

    void addOperator(String str) {
        try {
            if (checkList.isEmpty()) { // 처음 연산자 사용 막기
                Toast.makeText(getApplicationContext(), "연산자가 올 수 없습니다.", Toast.LENGTH_SHORT).show();
                return;
            } else if (checkList.get(checkList.size() - 1) == 0) { // 연산자 두 번 연속 사용 막기
                Toast.makeText(getApplicationContext(), "연산자가 올 수 없습니다.", Toast.LENGTH_SHORT).show();
                return;
            }
            checkList.add(0);
            txtExpression.append(" " + str + " ");
        } catch (Exception e) {
            Log.e("addOperator ERROR", e.toString());
        }

    }

    // 이콜 버튼 이벤트 처리
    public void equalClick(View v) {
        if (txtExpression.length() == 0) return;

        Collections.addAll(prefixList, txtExpression.getText().toString().split(" "));
        result();
    }

    // 연산자 우선순위 *,/,%,+,-
    int getWeight(String operator) {
        int weight = 0;
        switch (operator) {
            case "X":
            case "/":
                weight = 5;
                break;
            case "%":
                weight = 3;
                break;
            case "+":
            case "-":
                weight = 1;
                break;
        }
        return weight;
    }

    boolean isNumber(String str) {
        boolean result = true;
        try {
            Double.parseDouble(str);
        } catch (NumberFormatException e) {
            result = false;
        }
        return result;
    }

    void prefixToPostfix() {
        for (String item : prefixList) {
            // 피연산자
            if (isNumber(item)) postfixList.add(String.valueOf(Double.parseDouble(item)));
                // 연산자
            else {
                if (operatorStack.isEmpty()) operatorStack.push(item);
                else {
                    if (getWeight(operatorStack.peek()) >= getWeight(item)) {
                        postfixList.add(operatorStack.pop());
                        operatorStack.push(item);
                    } else operatorStack.push(item);
                }
            }
        }
        while (!operatorStack.isEmpty()) postfixList.add(operatorStack.pop());

        Log.i("prefixList", String.valueOf(prefixList));
        Log.i("postfixList", String.valueOf(postfixList));
    }

    String calculate(String num1, String num2, String op) {
        Log.i("calculate", num1 + ',' + num2 + ',' + op);
        return "555";
    }

//    [1,1,+,1,+,1,5,x,-]

    void result() {
        int i = 0;
        prefixToPostfix();
        try {
            while (postfixList.size() != 1) {
                if (!isNumber(postfixList.get(i))) {
                    postfixList.add(i - 2, calculate(postfixList.remove(i - 2), postfixList.remove(i - 2), postfixList.remove(i - 2)));
                    Log.d("result while!!!!!!!", String.valueOf(postfixList));
                    i = -1;
                }
                i++;
            }
        } catch (Exception e) {
            Log.e("resultError", e.toString());
        }
        Log.i("operatorStack", String.valueOf(operatorStack));
        Log.i("postfixList", String.valueOf(postfixList));
    }
}
