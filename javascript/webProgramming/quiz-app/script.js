const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "16",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "what is the most used programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "2020",
    b: "1995",
    c: "1996",
    d: "none of the above",
    correct: "b",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// init
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  // 클래스를 모두 가져옴 (클래스는 . 붙이기)
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) answer = answerEl.id;
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const result = getSelected();
  if (result) {
    if (result == quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz >= quizData.length) {
      // html을 삽입함
      // location.reload를 통해서 홈페이지를 새로고침함
      quizEl.innerHTML = `
        <h2>You answered correctly at 
        ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    } else loadQuiz();
  } else alert("Please Check");
});
