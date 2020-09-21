package com.example.listandrecycler;

        import androidx.appcompat.app.AppCompatActivity;
        import androidx.recyclerview.widget.LinearLayoutManager;
        import androidx.recyclerview.widget.RecyclerView;

        import android.os.Bundle;
        import android.widget.ArrayAdapter;

        import java.lang.reflect.Array;
        import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    ArrayList<String> list;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        list = new ArrayList<>();
        list.add("아이템 1");
        list.add("아이템 2");
        list.add("아이템 3");
        list.add("아이템 4");
        list.add("아이템 5");
        list.add("아이템 6");

        Adapter adapter = new Adapter(list);
        RecyclerView recyclerView = findViewById(R.id.recyclerView);

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(adapter);
    }
}