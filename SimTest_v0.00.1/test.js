function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import { questions } from "./data.js"

//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll(".ans")  // кнопки відповідей
let qw_text = document.querySelector(".qw") // текст запитання
let div_img = document.querySelector(".img")
let img = div_img.querySelector("img")
let answers = []
// функція відображення запитання
let qw = ""
function showQuestion(){
    // отримуємо поточне запитання
     qw = questions[q_index]
    // відображаємо текст запитання
    qw_text.innerHTML = qw.qw
    // тасуємо відповіді
    let ans = shuffle(qw.ans)
    // тасуємо копію масиву відповідей
    ans = shuffle(ans)
   // відображаємо відповіді на кнопках відповідей
   for (let i =0; i < btn_ans.length; i++){
        btn_ans[i].innerHTML = ans[i]
   }

    
}
//відображаємо перше запитання
showQuestion()

// обробники кліків по кнопках відповідей
for (let i = 0; i<btn_ans.length; i++){
    btn_ans[i].addEventListener("click", function(){
        let ans = btn_ans[i].innerHTML
        answers.push(ans)
        if(ans == qw.correct){
            console.log('COCK')
            score ++
        }
        else{
            console.log('KNOCK KNOCK')
            
        }
      img.src = qw.img
      div_img.style.display = "block"
        anime({
            targets: ".img",
            translateY: ["-100%","-25%"], //добівити анімацію
            easing:"easeInCubic",
            duration: 2000
        }).finished.then(function(){
        q_index++
        div_img.style.display = "none"
        if(q_index == questions.length){
            document.cookie = `score=${score};max-age=86400`
            answers = answers.join("/")
            document.cookie = `total=${questions.length};max-age=86400`
            document.cookie = `answers=${answers};max-age=86400`
            window.location.replace("result.html")
        }
        else{
            showQuestion()
        }
        })
    })
}