
let divCard = document.querySelector('#divcard')
let divCardSimple = document.querySelectorAll('.right .card')
let lastItems = document.querySelectorAll('.last-item')


window.addEventListener('scroll', () => {
    var header = document.querySelector('header')
    var sticky = header.offsetTop

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
})


function moveRight1(){
    var lastItem = document.querySelector('#last-item1');
    lastItem.classList.add('move-right')
}

function goBack1(){
    var lastItem = document.querySelector('#last-item1');
    lastItem.classList.remove('move-right')
}

function moveRight2(){
    var lastItem = document.querySelector('#last-item2');
    lastItem.classList.add('move-right')
}

function goBack2(){
    var lastItem = document.querySelector('#last-item2');
    lastItem.classList.remove('move-right')
}

function moveRight3(){
    var lastItem = document.querySelector('#last-item3');
    lastItem.classList.add('move-right')
}

function goBack3(){
    var lastItem = document.querySelector('#last-item3');
    lastItem.classList.remove('move-right')
}

function moveRight4(){
    var lastItem = document.querySelector('#last-item4');
    lastItem.classList.add('move-right')
}

function goBack4(){
    var lastItem = document.querySelector('#last-item4');
    lastItem.classList.remove('move-right')
}


function cardAnimation(){
    var card1 = document.querySelector('#card1')
    card1.onmouseover = moveRight1
    card1.onmouseout = goBack1

    var card2 = document.querySelector('#card2')
    card2.onmouseover = moveRight2
    card2.onmouseout = goBack2

    var card3 = document.querySelector('#card3')
    card3.onmouseover = moveRight3
    card3.onmouseout = goBack3

    var card4 = document.querySelector('#card4')
    card4.onmouseover = moveRight4
    card4.onmouseout = goBack4
}
cardAnimation()

console.log("status")

