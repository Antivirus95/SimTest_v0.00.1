// твій код
//знайти кнопку старту
let btn_start = document.querySelector('.btn-start')
btn_start.addEventListener("click", function(){
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
    anime({
        targets: btn_start,
        color: ['#FF876E', '#FFB2A1', '#FF6640'],
        scale: [1.2, 1, 1.2],
        rotate: [120, 240, 360],
        duration: 2000,
    }).finished.then(function(){
        window.location.replace("test.html")
    })
})
//