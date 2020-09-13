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
    TextView txtExpression;
    TextView txtResult;
    List<String> expressionList;
    List<Integer> checkList; // 1 숫자, 0 연산자
    Stack<String> operatorStack; // 후위 표기법 저장
    List<String> resultList;
    String[] operatorWeight;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.init();
    }

    // 필드 및 액티비티 초기화
    void init() {
        txtExpression = findViewById(R.id.txt_expression);
        txtResult = findViewById(R.id.txt_result);
        expressionList = new ArrayList<>();
        checkList = new ArrayList<>();
        operatorStack = new Stack<>();
        resultList = new ArrayList<>();
        operatorWeight = new String[]{"-", "+", "%", "/", "X"};

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
        expressionList.clear();
        checkList.clear();
        txtExpression.setText("");
        txtResult.setText("");

        Log.d("expressionList", String.valueOf(expressionList));
        Log.d("checkList", String.valueOf(checkList));
    }

    // 지우기 버튼 이벤트 처리
    public void deleteClick(View v) {
        if (expressionList.size() != 0) {
            expressionList.remove(expressionList.size() - 1);
            checkList.remove(checkList.size() - 1);
            txtExpression.setText(TextUtils.join(" ", expressionList));
            Log.d("expressionList", String.valueOf(expressionList));
        }
    }

    void addNumber(String str) {
        checkList.add(1); // 숫자가 들어왔는지 체크리스트에 표시
        resultList.add(str); // 숫자는 결과리스트에 담아둠
        txtExpression.append(str); // UI
    }

    void addOperator(String str) {
        try {
            int i = -1;
            int weight = 0;
            if (checkList.isEmpty()) { // 처음 연산자 사용 막기
                Toast.makeText(getApplicationContext(), "연산자가 올 수 없습니다.", Toast.LENGTH_SHORT).show();
                return;
            } else if (checkList.get(checkList.size() - 1) == 0) { // 연산자 두 번 연속 사용 막기
                Toast.makeText(getApplicationContext(), "연산자가 올 수 없습니다.", Toast.LENGTH_SHORT).show();
                return;
            }
            checkList.add(0);
            if (!operatorStack.isEmpty()) {
                for (String s : operatorWeight) {
                    i++;
                    if (operatorStack.get(operatorStack.size()-1).equals(s)) {
                        weight = i;
                        break;
                    }
                }
            }else operatorStack.push(str);
            txtExpression.append(" " + str + " ");
        } catch (Exception e) {
            Log.e("addOperator ERROR", e.toString());
        }

    }

    // 표현식 변경
    public void insertExpression(String str) {
        try {
            txtExpression.append(Integer.parseInt(str) + "");
        } catch (Exception e) {
            // operator
            txtExpression.append(" " + str + " ");
            Collections.addAll(expressionList, txtExpression.getText().toString().split(" "));
        } finally {
            Log.e("expressionList", String.valueOf(expressionList));
        }
    }

    // 이콜 버튼 이벤트 처리
    public void equalClick(View v) {
        if (txtExpression.length() == 0) return;

        Collections.addAll(expressionList, txtExpression.getText().toString().split(" "));
        Log.i("expressionList", String.valueOf(expressionList));
    }

    // 연산자 우선순위 *,/,%,+,-
    void calculator() {
        int i = 0;
        int op1, op2;
        double result = 0.0;
        while (true) {
            while (!expressionList.get(i++).equals("X")) {
                if (expressionList.size() == i) break;
            }
            op1 = Integer.parseInt(expressionList.remove(i - 2));
            expressionList.remove(i - 2);
            op2 = Integer.parseInt(expressionList.get(i - 2));
            result = op1 * op2;
            expressionList.add(i - 2, String.valueOf(result));

        }
    }
}
