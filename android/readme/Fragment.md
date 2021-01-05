## Fragment

액티비티는 화면을 표현하기 위한 기본 단위입니다. 액티비티가 너무 복잡하거나 또는
코드의 양이 많아졌거나 하는 이유로 화면의 부위별로 따로 동작시키고 싶을 때가 있
습니다. 그럴 때 각각의 화면을 분할해서 독립적인 코드로 구성할 수 있게 도와주는것
이 프래그먼트 입니다. <br> 프래그먼트는 서로 다른 크기의 화면을 가진 기기에서 하
나의 액티비티로 서로 다른 레이아웃을 구성할 수 있도록 설계되어 있습니다.

- **프래그먼트 구성**

  ```kotlin
  onCreateView() // 리사이클러뷰의 onCreateViewHolder() 처럼 동작
  ```

  - `onCreateView()` 메서드의 파라미터

    - inflater: 레이아웃 파일을 로드하기 위한 레이아웃 인플레이터를 기본으로 제
      공
    - container: 프래그먼트 레이아웃이 배치되는 부모 레이아웃
    - savedInstanceState: 상태값 저장을 위한 보조 도구

- **액티비티에 프래그먼트 추가**

  프래그먼트는 기본적으로 하나의 뷰로 동작하기 때문에 액티비티 안에 뷰를 삽입할
  수 있는 레이아웃을 준비해야 합니다. <br> 프래그먼트를 삽입하기 위한 전용 레이
  아웃으로 `fragment`와 `frameLayout`이 있습니다.<br> 화면 전환이 필요할 때는
  `frameLayout`을 사용하는 것이 좋습니다. `fragment`는 화면 전환 없이 프래그먼트
  하나만 화면에 표시할 때 사용합니다.

  1. 프래그먼트 만들기
  2. 프래그먼트를 띄울 액티비티 레이아웃에 `fragment` 컨테이너 또는
     `frameLayout` 레이아웃 배치
  3. 액티비티가 가지고 있는 프래그먼트 매니저를 통해 트랜잭션 시작

     ```kotlin
     val listFragment: ListFragment = ListFragment()
     val transaction = supportFragmentManager.beginTransaction()
     ```

  4. 트랜잭션 `add()` 메서드로 프래그먼트를 추가하고 `commit()` 메서드로 반영

     `add()`, `replace()`, `remove()` 메서드들로 프래그먼트를 화면에 삽입하거나
     교체, 제거를 담당합니다.

     ```kotlin
     transaction.add(R.id.frameLayout, listFragment)
     transaction.commit()
     ```

- **레이아웃에 프래그먼트 추가**

  `fragment` 컨테이너를 사용하면 소스 코드를 거치지 않고 레이아웃 파일에서도위젯
  처럼 프래그먼트를 추가할 수 있습니다. 하나의 프래그먼트를 화면 전환 없이사용하
  면 소스 코드에서 추가하는 것보다 레이아웃에서 추가하는 것이 훨씬 효율적입니다.
  <br> xml 파일에서 컨테이너에 `fragment`를 사용하면 어떤 프래그먼트를추가할지대
  화상자가 나타납니다.

- **프래그먼트 화면 전환**

  프래그먼트는 기본적으로 액티비티에 있으므로 화면 전환을 위한 기본적인 소스는액
  티비티에서 작성합니다. <br> 프래그먼트 화면을 전환하기 위해 먼저 두 개 이상의
  프래그먼트를 만들어 놓습니다.

  - `addToBackStack()`

    트랜잭션에 프래그먼트를 등록하고 `commit()` 하기 전에 `addToBackStack()` 메
    서드에 이름을 지정하고 등록합니다. 이렇게 하면 스마트폰의 뒤로가기 버튼을 사
    용할 수 있습니다. <br> (`addToBackStack()`) 을 사용하지 않은 채로 뒤로가기를
    하면 액티비티가 종료됩니다.

  - `onBackPressed()`

    `addToBackStack()` 으로 프래그먼트 트랜잭션을 백스택에 담았다면 액티비티 기
    본 메서드인 `onBackPressed()` 로 뒤로가기를 할 수 있습니다.

  - 주의

    프래그먼트는 하나의 레이아웃에 한 층씩 쌓이는 형태라서 기본 배경색을 설정하
    지 않으면 화면이 중첩된 채로 그려집니다. <br> 또한 프래그먼트가 중첩되었을대
    아래쪽 프래그먼트에 클릭 가능한 요소가 있다면 위쪽 프래그먼트를 통과해서클릭
    이 됩니다. 그래서 예상치 못한 이벤트가 발생할 수 있는데 이를 방지하기 위해서
    컨스트레인트 레이아웃의 `clickable` 속성을 true로 변경합니다.

- **프래그먼트 값 전달**

  프래그먼트로 값을 전달하는 방법에는 크게 두 가지가 있습니다. 하나는 프래그먼트
  생성 시에 값을 전달하는 것이고 또 하나는 이미 생성되어 있는 프래그먼트에 값을
  전달하는 것입니다.

  1. 프래그먼트 생성 시 값 전달

     프래그먼트를 생성하면서 값을 전달하는 방법으로 `arguments` 를 제공합니다.
     <br> `arguments` 는 프래그먼트의 기본 프로퍼티이기 때문에 선언 없이 사용할
     수 있습니다. <br> 액티비티에서 프래그먼트로 값을 전달하기 위해서 번들을 하
     나 생성한 후 전달할 값을 담습니다. <br> 그 다음에 값이 담긴 번들을 프래그먼
     트의 `arguments` 에 담습니다.

     ```kotlin
     val bundle = Bundle()
     val bundle = Bundle()
     bundle.putString("key", "message")

     val listFragment: ListFragment = ListFragment()
     listFragment.arguments = bundle
     ```

     그 다음 프래그먼트 소스코드로 넘어가서 `arguments` 를 꺼내 쓰면 됩니다.

     ```kotlin
     val message = arguments?.getString("key")
     ```

  2. 생성되여 화면에 보이는 프래그먼트에 값 전달

     액티비티에서 이미 생성되어 화면에 보이는 프래그먼트로 값을 전달하기 위해서
     는 프래그먼트에 메서드를 정의하고 직접 호출하면 됩니다.

     ```kotlin
     // Activity
     val detailFragment = DetailFragment()
     detailFragment.setValue("hello")

     // Fragment
     class ... {
        var value = ""
        ...
        ...
        fun setValue(value: String) {
            this.value = value
        }
     }
     ```

  3. 프래그먼트에서 프래그먼트로 값 전달

     프래그먼트끼리 값을 주고받기 위해서는 프래그먼트를 생성한 액티비티에 값을
     전달할 메서드를 미리 생성해두고 사용합니다.

     ```kotlin

     ```

## 화면이 하나만 필요할 때는 프래그먼트를 사용하지 않습니다.

프래그먼트는 2개 이상의 화면을 빠르게 이동한다던지 탭으로 구성된 화면의 자연스러
운 움직임을 구현할 때 주로 사용됩니다. 따라서 1개의 액티비티에 1개의 뷰만 필요한
구조라면 프래그먼트를 사용하지 않는 것이 바람직 합니다.
