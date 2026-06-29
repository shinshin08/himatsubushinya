const messages = [
  "今日は5問だけ遊ぶニャ♪",
  "復習するともっと強くなれるニャ！",
  "かのん、おかえり🌸",
  "一緒に頑張ろうニャ！",
  "疲れたら少し休憩ニャ☕"
];

const cat = document.getElementById("cat");
const message = document.getElementById("message");

cat.addEventListener("click", () => {

    cat.style.transform = "scale(1.15)";

    setTimeout(()=>{
        cat.style.transform = "scale(1)";
    },200);

    const random = Math.floor(Math.random()*messages.length);

    message.textContent = messages[random];

});
