let score = document.querySelector(".score");
let total = document.querySelector(".total");

// Отримуємо значення з cookie
let cookie = document.cookie.split(";");

// Ініціалізація змінних для score і total
let scoreValue = 0;
let totalValue = 0;

let answers = ""
// Парсимо cookie та отримуємо значення score та total
for (let i = 0; i < cookie.length; i++) {
    let [name, value] = cookie[i].split('=');
    if (name.trim() === 'score') {
        scoreValue = parseInt(value); // отримуємо кількість правильних відповідей
    }
    if (name.trim() === 'total') {
        totalValue = parseInt(value); // отримуємо загальну кількість питань
    }
    if (name.trim() === 'answers') {
        answers = value.split("/"); // отримуємо кількість правильних відповідей
    }
}

// Якщо score = 0, показуємо "0" замість порожнього значення
score.innerHTML = scoreValue === 0 ? "0" : scoreValue;
total.innerHTML = totalValue;

// Виводимо прогрес
let progress = document.querySelector(".progress-bar");
if (progress) {
    let percent = (scoreValue / totalValue) * 100;
    progress.style.width = `${percent}%`;
}
import { questions } from "./data.js";
setTimeout(function(){
    for (let i = 0; i < questions.length; i++) {
        let colors = []
        for (let k = 0; k < 4; k++) {
            if (questions[i].ans[k] == answers[i]){



        if (questions[i].correct == answers[i] ){
            colors.push( "#00FF00")
        }
        else{ colors.push ( "#FF0000")
        }    
        }
        else {colors.push("#E5E5E5")
        }
            }
        document.querySelector(".stats").innerHTML += `     
    <div class="card-qw">
      <div class="qw">${questions[i].qw}</div>
      <di class="answers">
        <div class="ans" style = "background:${colors[0]}">${questions[i].ans[0]}</div>
        <div class="ans" style = "background:${colors[1]}">${questions[i].ans[1]}</div>
        <div class="ans" style = "background:${colors[2]}">${questions[i].ans[2]}</div>
        <div class="ans" style = "background:${colors[3]}">${questions[i].ans[3]}</div>
      </di>
     </div>
    </div>`

    }
}, 1000)
