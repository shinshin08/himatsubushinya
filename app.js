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

/* ===== Ver0.8 追加ここまで ===== */
