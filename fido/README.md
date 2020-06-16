# FIDO Hackathon

_이 글은 2020 FIDO Hackathon에 참여 후 세션을 정리한 글입니다._

[2020 FIDO Hackathon](https://fidoalliance.org/2020-fido-hackathon-goodbye-password-challenge-in-korea-2/?lang=ko)

## FIDO ALLIANCE

#### Password is the problem

-   평균 60% 온라인 사용자가 공통된 비밀번호를 다양한 계정에서 사용
-   45% 가 평균적으로 쉬운 비밀번호 사용
-   56% 가 비밀번호를 종이나 파일에 기록해 놓고 사용
-   온라인 해킹 81% 가 비밀번호 탈취, 유추를 통해서 발생
-   온라인 사용자 5명 중 1명은 계정이 탈취된 경험을 했음

#### Focused scope to address the problem

-   온라인 인증에만 집중한 것이 성공의 핵심
-   우리의 비밀이 서버로 공유되지 않아야 하고(Not Shared), 인증장치에서(Authenticators) 다양한 인증 요소로 확인해야함(Multi-Factors)
    -   Not Shared : 패스워드 기반 온라인 로그인은 서버 내에 비밀이 공우되지만 FIDO는 내 인증장치에만 안전하게 보관
    -   Multi-Factors : 나 자신, 내가 가진 것, 내가 아는 것으로 인증
    -   Authenticators : Platform authenticators, Roaming authenticators

## 방향

> _사용성도 높이고 보안성도 높이는 최적의 방법을 찾는 것_
>
> > 다만 Sigle Gesture, Public key cryptography 을 중심으로 함

-   Sigle Gesture : POLICY 설정을 통해 두 개 이상의 FACTOR를 조합하여 확인하지만 사용자 입장에서는 편의성 향상
-   Power of Passwordless : 패스워드를 사용하지 않는 다중요소인증은 편리성과 보안성이라든 두 마리 토끼를 잡을 수 있음
-   사례와 이익
    -   구글 직원은 패스워드 없이 로그인 -> 패스워드와 아이디를 리셋해야하는 리소스 비용을 줄임
    -   sk텔레콤 t아이디, 비밀번호 없는 인증 지원 -> 크레덴셜 스터핑(일반적으로 사람들이 많이 쓰는 비밀번호라든지, 살 수 있는 비밀번호 디비를 사서 공격하는 것) 원천 차단

## Spec

-   **FIDO1**
    -   **FIDO UAF**
        -   단말에 탑재된 생체인식 기능을 이용한 온라인 인증 방식
    -   **FIDO U2F**
        -   패스워드 인증체계의 강화를 위해 별도의 인증을 추가하는 방식
        -   패스워드는 존재함
-   **FIDO2**
    -   클라이언트 보급문제 해소, 웹 생체인증 기능, UAF&U2F 통합

|             | 1.0            | FIDO2               |
| ----------- | -------------- | ------------------- |
| 표준단체    | FIDO           | W3C & FIDO          |
| 제공기능    | 등록,인증,폐지 | 등록,인증           |
| 제공방식    | 앱 방식        | 플랫폼API           |
| 프로토콜    | UAF 1.0        | None                |
| 운영체제    | 안드로이드     | 윈도우 & 안드로이드 |
| 웹 적용방식 | 플러그인       | 웹브라우저 지원     |
| 인증장치API | ASM            | CTAP                |

## Membership

#### LEVELS

-   **Board**
    -   전략 및 사업방향 설정
-   **Sponsor**
    -   워킹 그룹 참여를 통한 기술 개발과 시장확장 선도
-   **Associate**
    -   형성된 생태계에 참여하여 가치 및 사업영역 확장

## Why FIDO

> 사용성과 보안성을 잡기 위해서 사용
