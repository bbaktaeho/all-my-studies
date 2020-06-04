(function (window, document) {
    'use strict'; // 엄격한 자바스크립트 문법으로 작성하겠다

    const $toggles = document.querySelectorAll('.toggle'); // Nodelist
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            // off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, (toggle, i) => {
            toggle.classList.toggle('on'); // toggle 메서드는 on 이라는 클래스가 있다면 지워주고 없다면 만들어준다
        });
    }
    function offElements() {
        [].forEach.call($toggles, (toggle, i) => {
            toggle.classList.remove('on'); // toggle 메서드는 on 이라는 클래스가 있다면 지워주고 없다면 만들어준다
        });
    }
})(window, document);
