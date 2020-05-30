# html

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- 문서 정보 {meta, title, link, script} -->
    </head>
    <body>
        <!-- 문서 구조, 화면을 구성하는 요소들 -->
    </body>
</html>
```

## 웹 표준 검사

[W3C validator](https://validator.w3.org/)

## HTML

0. **TAG**
    - TAG.html
1. 블록 요소
    - `div`, `h1`, `p`, `header`, `footer`
    - 사용가능한 최대 가로범위를 사용함
    - 크기를 지정할 수 있음
    - 수직으로 생성
    - margin, padding 사용 가능
    - 레이아웃을 잡는 용도
2. 인라인 요소
    - `span`, `img`, `a`
    - 필요한만큼 가로범위를 사용함
    - 크기를 지정할 수 없음
    - 수평으로 생성
    - margin, padding 의 위, 아래는 사용 불가
    - 텍스트를 다룰 때 사용함
3. css display
    - 인라인을 블록으로 -> `display: block`
    - 블록을 인라인으로 -> `display: inline`
