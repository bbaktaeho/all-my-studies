# html & css

## html

---

> (Hyper Text Markup Language) 콘텐츠 구조를 담당하는 정적 언어로 웹의 시각적 표현을 담당

#### tag 종류

- 링크
- 이미지
- 목록
- 제목
- 레이아웃
  - header
  - section
  - nav
  - footer
  - aside

## css

---

> (Cascading Style Sheets) 웹의 시작적인 표현을 담당

#### css 상속의 개념

- 부모에 css 설정하고 자식 태그도 같게하는 개념
- 선언방식에 따른 차이
  - inline > internal > external
- css specificity
  - id > class > element

## Web Standard (W3C)

> 웹에서 사용되는 표준 기술이나 규칙

---

## 웹에서 사용하는 image

- 비트맵과 백터로 구분
- **비트맵(Bitmap)** : 픽셀이 모여 만들어진 정보의 집합으로 픽셀 단위로 렌더링
- **벡터(Vector)** : 수학적 정보(공식)의 형태들이 만들어낸 결과물
  - 이미지를 확대, 축소를 했을 경우 용량 변화가 없음
- **jpg** : 압축을 위해 만들어졌으며 압축률이 뛰어남
  - 손실 압축 방식 사용
  - 용량이 적음
- **png** : gif의 대체 포맷
  - 비손실 압축
  - 투명도 지원
  - W3C 권장 이미지 포멧

---

## 반응형

- @media : 다양한 미디어 유형이나 장치에 따라, 서로 다른 스타일 규칙을 적용

  ```css
  @media 미디어타입<all, screen, print> and (미디어특성<width, max-width, min-width, height, ..., orientation>) {
      CSS
  }
  ```

  ```css
  <!-- 예시 -- > @media screen and (max-width: 1200px) {
    body {
      color: red;
    }
  }
  ```
