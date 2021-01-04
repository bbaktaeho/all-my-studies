## Container

위젯의 위치를 다룰 때 레이아웃을 사용했다면 위젯이나 다른 레이아웃에 데이터를 동
적으로 표현해줄 때 컨테이너를 사용합니다. 대표적으로 RecyclerView가 있습니다.

### Spinner

여러 개의 목록 중에 하나를 선택할 수 있는 선택 도구입니다.<br> 스피너는 어댑터라
는 연결 도구를 사용해 화면에 나타낼 데이터와 화면에 보여주는 스피너를 연결합니다
.<br> 여러 개의 데이터가 어댑터에 입력되면 1개의 데이터당 1개의 아이템 레이아웃
이 생성되어 화면에 목록 형태로 나타납니다.

- **Adapter**

  목록을 보여줄 뷰와 데이터를 받아서 어댑터를 생성합니다.

### RecyclerView

리싸이클러뷰도 스피너처럼 목록을 화면에 출력하는데 조금 더 확장된 형태입니다.
<br>

- **RecyclerView.Adapter**

  리사이클러뷰는 리사이클러 어댑터라는 메서드 어댑터를 사용해서 데이터를 연결합
  니다.<br> 리싸이클러뷰 어댑터는 개별 데이터에 대응하는 뷰홀더 클래스를 사용합
  니다. 상속하는 리사이클러뷰 어댑터에 뷰홀더 클래스를 제네릭으로 지정해야 하므
  로 뷰홀더 클래스를 먼저 만들고 나서 어댑터 클래스를 생성하는 것이 편합니다.

  ```kotlin
  class 어댑터: RecyclerView.Adapter<사용할 뷰홀더>() {}
  ```

  - 어댑터 클래스의 기본 구성

    어댑터가 정상적으로 동작하려면 미리 정의된 홀더 클래스를 제네릭으로 지정한후
    어댑터에 설계되어 있는 3개의 인터페이스를 반드시 구현해야 합니다.

    ```kotlin
    onCreateViewHolder()    // 한 화면에 그려지는 아이템 개수만큼 레이아웃 생성 (한 화면에 10줄 보이면 10번 호출됨)
    getItemCount()          // 목록에 보여줄 아이템의 개수
    onBindViewHolder()      // 생성된 아이템 레이아웃에 값 입력 후 목록에 출력 (스크롤 될 때마다 실제 화면에 데이터와 레이아웃을 연결)
    ```

  - LayoutInflater

    특정 xml 파일을 개발자가 직접 클래스로 변환할 수 있습니다. <br>
    LayoutInflater는 화면 요소이므로 컨텍스트가 필요하고, inflate() 메서드에 레
    이아웃을 지정해서 호출하면 클래스로 변환됩니다.

    ```kotlin
    val view = LayoutInflater.from(parent.context).inflate(R.layout.item_recycler, parent, false)
    ```

- **ViewHolder**

  뷰홀더 클래스는 아이템 레이아웃을 포함하고 있는데, 100개의 데이터가 있다고 가
  정했을 때 이것들을 모두 화면에 그리기 위해서 100개의 아이템 레이아웃을 생성하
  면 시스템 자원이 낭비되고, 심각할 경우 앱이 종료될 수 있습니다. <br> 뷰홀더는
  현재 화면에 보여지는 개수만큼만 생성되고 목록이 위쪽으로 스크롤 될 경우 가장위
  의 뷰홀더를 아래에서 재사용한 후 데이터만 바꿔주기 때문에 앱의 효율이 향상됩니
  다.

  ```kotlin
  class 홀더(아이템 레이아웃): RecyclerView.ViewHolder(아이템 레이아웃) {}
  ```

  ViewHolder 클래스의 생성자에는 다음에 만들 어댑터의 아이템 레이아웃을 넘겨줘야
  하므로 Holder 클래스를 생성할 때 생성자에게서 아이템 레이아웃을 넘겨받아야 합
  니다.

- **Layout Manager**

  리사이클러뷰를 화면에 보여주는 형태를 결정하는 레이아웃 매니저입니다. <br> 아
  래 코드는 리사이클러뷰를 리니어 레이아웃으로 나타내는 코드입니다.

  ```kotlin
  recyclerView.layoutManager = LinearLayoutManager(this)
  ```

  - 레이아웃 매니저의 종류

    - LinearLayoutManager
    - GridLayoutManager
    - StaggeredGridLayoutManager
