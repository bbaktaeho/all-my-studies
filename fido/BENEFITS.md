# What are the benefits of implementing FIDO protocols

이점을 알아보기 전에 어떤 문제점이 있는지부터 짚어보겠습니다.

우리는 보통 비밀번호를 생성할 때 새로운 비밀번호를 만들지 않고 기존에 사용하던 비밀번호를 재사용해서 온라인 계정을 만들어냅니다.
그 이유는 기억하기도 쉽고 새로 만들어내야 하는 번거로움이 없기 때문입니다. 즉, 사용성이 매우 편하기 때문입니다.
하지만 이러한 비밀번호는 많은 문제를 가지고 있습니다.

[내 비밀번호는 안전할까?](https://howsecureismypassword.net/) <br>
[비밀번호 탈취 확인하기](https://haveibeenpwned.com/)

## 문제점

1. **평균 60% 온라인 사용자가 공통된 비밀번호를 다양한 계정에서 사용**

    저도 약 2개의 비밀번호로 모든 온라인 계정을 관리하고 있습니다. 단 하나의 계정에서 비밀번호를 탈취당하면 많은 계정에 영향을 미칠 것입니다.

2. **온라인 이용자 45% 가 평균적으로 쉬운 비밀번호 사용**

    <center><img src="https://images.kbench.com/kbench/article/2019_12/k206109p1n1.jpg" width="400"></img></center>

    쉬운 비밀번호를 사용한다는 건 그만큼 많은 온라인 이용자들이 같은 비밀번호를 사용하고 있다고도 할 수 있습니다. [2019년 최악의 비밀번호](http://www.itworld.co.kr/howto/144212)에서 내가 사용하는 비밀번호가 있는지 확인해보고 있다면 수정하는 것이 좋을 것 같습니다.
    쉬운 비밀번호를 여러 사용자가 같이 사용하고 있다면 문제가 될 수밖에 없겠죠?

3. **온라인 이용자 56% 가 비밀번호를 종이나 파일에 기록 해놓고 사용**

    <center><img src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F7121a034-8fa8-11e6-a72e-b428cb934b78?fit=scale-down&source=next&width=700" width="200"></img>  <img src="https://www.gdatasoftware.com/fileadmin/_processed_/9/0/PasswordPostIt_Sized_f831e692fd.jpg" width="200"></img> <img src="https://blog.malwarebytes.com/wp-content/uploads/2019/10/PostIt_Passwords-900x506.jpg" width="200"></img></center>

    계정마다 비밀번호를 다르게 하다 보면 기억하기 어렵습니다. 이 때문에 비밀번호를 기록해서 가지고 있는데요, 저는 군대 행정반에서 이와 같은 문제를 접했습니다. 보안 감사 전날에 모두 정리했던 기억이 납니다. 실제 인터뷰 사진으로 공개된 비밀번호로 해킹 사례까지 있다고 하니 각별히 주의해야 할 것 같습니다.

4. **온라인 해킹 81% 가 비밀번호 탈취, 유추를 통해서 발생**

    여러 해킹 기법이 있지만 단순하게 비밀번호 탈취로 해킹이 일어나는 일이 더 빈번하다고 합니다.

5. **기업 비밀번호의 문제점**

    로그미인의 ID 및 액세스 관리 책임자 존 베넷은 “비밀번호는 전통적으로 기업의 최전방 방어선이었지만 지속적으로 불만족과 위험을 유발하고 있다. 게다가 대부분의 기업에서 비밀번호 공유 및 재사용이 보편적으로 발생하고 있으며 직원들은 하나의 비밀번호를 평균 13회 재사용하고 있다”라고 말했고, IT의 감독을 받지 않는 처음 보는 비밀번호가 등장하고 있다”라고 말했습니다. 자세한 내용은 [여기](http://www.itworld.co.kr/howto/144212)에서 확인하실 수 있습니다.

## FIDO Protocol 적용

비밀번호로 야기되는 문제를 해결하기 위해서 더 강하게 만드는 것은 올바른 해결 방법이 아닙니다.
어렵게 변경된 비밀번호는 사용성 면에서 많은 불편함이 있을 수 있습니다. <br>
기업에서는 비밀번호 관리자를 사용하는 방법, 비밀번호 사용자 교육, 정기적인 비밀번호 감사 등이 있는데 비밀번호가 없다면 이와 같은 비용이 발생하지 않을 것입니다. <br>
FIDO 프로토콜을 적용하게 된다면 비밀번호의 문제점을 해결할 수 있습니다.

> 매일 같은 일을 반복하면서 다른 결과를 바라는 것은 어리석은 일이다. -아이슈타인

_파이도는 이러한 철학을 바탕으로 합니다_

### FIDO 이점

FIDO의 목표는 `Simple`하고 `Strong`한 인증체계를 갖는 것인데요.
<br>기존 비밀번호를 버리고 고유한 생체 정보를 이용해서 간편하고 안전하게 온라인 인증을 하는 것입니다.
즉, 내 자신이 곧 비밀번호가 되고, 나만의 특징으로 소중한 나의 정보들을 지킬 수 있다는 것입니다.

기존 아이디, 비밀번호 방식에서 온라인 로그인은 서버로 아이디와 비밀번호가 공유되지만 FIDO 방식은 내 인증장치(Authenticator) 안에서만 안전하게 보관합니다. 서버로는 암호화된 공개 키만 보내서 인증하게 됩니다.

<center><img src="https://fidoalliance.org/wp-content/uploads/2014/12/graphic_StandardizationAll.png" width="350" ></center>

### 적용 사례와 이익

요기만 손보면 될 것 같음

구글 직원은 패스워드 없이 로그인 -> 패스워드와 아이디를 리셋해야하는 리소스 비용을 줄임

<https://www.zdnet.co.kr/view/?no=20180725093341&re=R_20181109220425>

sk텔레콤 t아이디, 비밀번호 없는 인증 지원 -> 크레덴셜 스터핑(일반적으로 사람들이 많이 쓰는 비밀번호라든지, 살 수 있는 비밀번호 디비를 사서 공격하는 것) 원천 차단

<https://www.zdnet.co.kr/view/?no=20190923174711>

구글 스마트락, fido2 적용 사례

[http://www.itworld.co.kr/news/141910](http://www.itworld.co.kr/news/141910)

라인 적용 사례

[https://engineering.linecorp.com/ko/blog/fido-at-line/](https://engineering.linecorp.com/ko/blog/fido-at-line/)

작년 해커톤

[https://fidoalliance.org/fido-hackathon-in-korea-meet-the-finalists/?lang=ko](https://fidoalliance.org/fido-hackathon-in-korea-meet-the-finalists/?lang=ko)
