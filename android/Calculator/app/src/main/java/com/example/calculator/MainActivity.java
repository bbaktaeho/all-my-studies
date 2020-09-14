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

    // 필드 초기화
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

    // 클리어, 지우기, 결과 버튼을 제외한 이벤트 처리
    public void buttonClick(View v) {
        if (!checkList.isEmpty() && checkList.get(checkList.size()-1) == -1) {
            txtExpression.setText(txtResult.getText().toString());
            checkList.clear();
            checkList.add(1);
            txtResult.setText("");
        }
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
            case R.id.btn_dot:
                addNumber(".");
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
        if (txtExpression.length() != 0) {
            checkList.remove(checkList.size() - 1);
            String[] ex = txtExpression.getText().toString().split(" ");
            List<String> li = new ArrayList<String>();
            Collections.addAll(li, ex);
            li.remove(li.size()-1);
            // 마지막이 연산자일 때 " " 빈칸 추가
            if(li.size() > 0 && !isNumber(li.get(li.size()-1))) li.add(li.remove(li.size()-1)+" ");
            txtExpression.setText(TextUtils.join(" ", li));
        }
        txtResult.setText("");
    }

    // 숫자 버튼 이벤트 처리
    void addNumber(String str) {
        // (보류)
        if (str.equals(".")) {

        }
        checkList.add(1); // 숫자가 들어왔는지 체크리스트에 표시
        txtExpression.append(str); // UI
    }

    // 연산자 버튼 이벤트 처리
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
        checkList.add(-1);
        result();
    }

    // 연산자 가중치 (우선순위 *,/,%,+,-)
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

    // 숫자 판별
    boolean isNumber(String str) {
        boolean result = true;
        try {
            Double.parseDouble(str);
        } catch (NumberFormatException e) {
            result = false;
        }
        return result;
    }

    // 전위 -> 후위
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

    // 계산
    String calculate(String num1, String num2, String op) {
        double first = Double.parseDouble(num1);
        double second = Double.parseDouble(num2);
        Log.i("calculate", num1 + ',' + num2 + ',' + op);
        double result = 0.0;
        try {
            switch (op) {
                case "X":
                    result = first * second;
                    break;
                case "/":
                    result = first / second;
                    break;
                case "%":
                    result = first % second;
                    break;
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
            }
        } catch (Exception e) {
            Toast.makeText(getApplicationContext(), "연산할 수 없습니다.", Toast.LENGTH_SHORT).show();
        }
        return String.valueOf(result);
    }

    // 최종 결과
    void result() {
        int i = 0;
        prefixToPostfix();
        while (postfixList.size() != 1) {
            if (!isNumber(postfixList.get(i))) {
                postfixList.add(i - 2, calculate(postfixList.remove(i - 2), postfixList.remove(i - 2), postfixList.remove(i - 2)));
                Log.d("result while!!!!!!!", String.valueOf(postfixList));
                i = -1;
            }
            i++;
        }
        txtResult.setText(postfixList.remove(0));
        prefixList.clear();
        Log.i("operatorStack", String.valueOf(operatorStack));
        Log.i("postfixList", String.valueOf(postfixList));
    }
}
