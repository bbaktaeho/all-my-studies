# Android

### Layout

#### LinearLayout

- 위젯을 가로 또는 세로 한 줄로 배치하기 위한 레이아웃
- **orientation**
  - horizontal, vertical 설정
- **layout_weight**
  - 위젯의 크기를 비율로 나타냄
  - 정확한 비율을 나타내기 위해 width 또는 height를 0dp로 조정
- **gravity**
  - 레이아웃에 삽입되는 위젯을 gravity 속성에 설정된 방향으로 정렬
  - 내부 텍스트의 위치를 변경
- **layout gravity**
  - 속해있는 레이아웃을 기준으로 위치를 설정할 때 사용
  - 컴포넌트 전체가 변경

#### FrameLayout

- 입력되는 위치를 결정하기보다는 위젯을 중첩해서 사용하기 위한 레이아웃
- 처리속도가 빠르기 때문에 1개의 이미지만 화면에 보여줄 때 사용함

## 정리 필요

#### checkButton, toggleButton, switch

- CompoundButton 을 상속받아 사용하기 때문에 하나의 사용법만 익히면 동일한 리스너로 컨트롤 가능
