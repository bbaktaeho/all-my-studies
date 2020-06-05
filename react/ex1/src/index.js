const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
// querySelector -> 태그로 찾음

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
};
