const examDate = new Date("2027-09-05"); // あとで試験日を変更できる
const today = new Date();

const diff = examDate - today;
const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

document.getElementById("days").textContent = days;

const messages = [
  "今日は5問だけ遊ぶニャ♪",
  "1問ずつで大丈夫ニャ🐾",
  "復習すると強くなるニャ！",
  "かのん、おかえり🌸",
  "今日も一緒に頑張ろう！",
  "いっぱいなでてニャ💕"
];

const cat = document.getElementById("cat");
const message = document.getElementById("message");

cat.addEventListener("click", () => {

  const random = Math.floor(Math.random() * messages.length);

  message.textContent = messages[random];

  cat.animate([
    { transform: "scale(1)" },
    { transform: "scale(1.15)" },
    { transform: "scale(1)" }
  ],{
    duration:250

        });

});

                     /* ===== Ver0.4 追加ここから ===== */

let solved = 0;

document.getElementById("play").addEventListener("click", () => {

    if(solved < 5){
        solved++;
    }

    const percent = solved * 20;

    document.getElementById("progressFill").style.width = percent + "%";

});

/* ===== Ver0.4 追加ここまで ===== */

/* ===== Ver0.5 追加ここから ===== */

const playButton = document.getElementById("play");
const quiz = document.getElementById("quiz");

playButton.addEventListener("click", () => {

    quiz.style.display = "block";

  　showQuestion(currentQuestion);

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

});

/* ===== Ver0.5 追加ここまで ===== */
  
/* ===== Ver0.6 追加ここから ===== */

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");

answers.forEach(button => {

    button.addEventListener("click", () => {

        if(button.dataset.answer === "1"){

            result.textContent = "🎉 正解！";
            result.style.color = "#2e8b57";

        }else{

            result.textContent = "❌ 不正解";
            result.style.color = "#e74c3c";

        }

        result.style.display = "block";

    });

});

/* ===== Ver0.6 追加ここまで ===== */

/* ===== Ver0.7 追加ここから ===== */

const nextButton = document.getElementById("nextQuestion");

answers.forEach(button => {

    button.addEventListener("click", () => {
        nextButton.style.display = "block";
    });

});

nextButton.addEventListener(() => {
    ...
    showQuestion(currentQuestion);
});

/* ===== Ver0.7 追加ここまで ===== */

/* ===== Ver0.8 追加ここから ===== */

const questions = [
  {
    question: "1 + 2 = ?",
    choices: ["2", "3", "4"],
    answer: 1
  },
  {
    question: "5 - 2 = ?",
    choices: ["3", "2", "1"],
    answer: 0
  },
  {
    question: "3 × 3 = ?",
    choices: ["6", "8", "9"],
    answer: 2
  }
];

let currentQuestion = 0;

function showQuestion(index){

    document.getElementById("question").textContent =
        questions[index].question;

    document.querySelectorAll(".answer").forEach((button,i)=>{
        button.textContent =
        ["① ","② ","③ "][i] + questions[index].choices[i];

        button.dataset.answer = i;
    });

    result.style.display = "none";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion >= questions.length){
        alert("🎉 全問クリア！");
        currentQuestion = 0;
    }

    showQuestion(currentQuestion);

});

/* ===== Ver0.8 追加ここまで ===== */
