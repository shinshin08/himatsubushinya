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
/* ===== Ver0.4 追加ここから ===== */

let direction = 1;
let position = 0;

setInterval(() => {

    position += direction * 3;

    if(position > 60){
        direction = -1;
        cat.style.transform = "scaleX(-1)";
    }

    if(position < -60){
        direction = 1;
        cat.style.transform = "scaleX(1)";
    }

    cat.style.marginLeft = position + "px";

},150);

/* ===== Ver0.4 追加ここまで ===== */
});

