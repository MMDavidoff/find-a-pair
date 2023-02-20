let openCardIndex
let playerTurn = 0
let openCardCount  = 0 
let names = ["bmw.png", "halflife.png" , "hp.webp" , "ps.png" , "intel.png" , "wo.png" , "vs.png "]
let openCard = ""

let player1 = prompt("Name player 1")
let player2 = prompt("Name player 2")
let name1 = document.querySelector(".player1")
let name2 = document.querySelector(".player2")
name1.textContent = player1
name2.textContent = player2

let cardArr = document.querySelectorAll(".card")
let frontArr = document.querySelectorAll(".front")
let backArr = document.querySelectorAll(".back")
let scoreArr = document.querySelectorAll(".player-score")
let playerArr = document.querySelectorAll(".player-card")
playerArr[0].classList.add("now-play")
for (let index = 0; index < cardArr.length; index++) {
    cardArr[index].onclick = async function() { 
        if(openCardIndex == index) {
            return
        }
        openCardCount++
        if (openCardCount < 2) {
            showCard(index) 
            openCardIndex = index
        }
        if(openCardCount == 2){
            showCard(index)
            setTimeout(hideCard, 1500)
        }
        
    } 
}

function hideCard() { 
    openCardIndex = null
    for (let index = 0; index < cardArr.length; index++) {
        backArr[index].classList.remove("d-none")
        frontArr[index].classList.add("d-none")
    }
    for (let index = 0; index < playerArr.length; index++) {
        playerArr[index].classList.toggle("now-play")
        
    }
    openCardCount = 0
    openCard = ""
    if(playerTurn == 0) {
        playerTurn = 1
    } else {
        playerTurn = 0
    }
}

function showCard(index) {
    frontArr[index].classList.toggle("d-none")
    backArr[index].classList.toggle("d-none")
    if(openCard == frontArr[index].style.backgroundImage) {
        scoreArr[playerTurn].textContent ++
        setTimeout(function deleteCard() {
            console.log(index);
            console.log(openCardIndex);
            cardArr[index].classList.add('hide'),
            cardArr[openCardIndex].classList.add('hide')
        }, 1500)

    }
    openCard = frontArr[index].style.backgroundImage;
    
}

let reapedArr = []

for (let index = 0; index < frontArr.length;) {
    let randomNumber = getRandomInt(7)
    reapedArr.push(randomNumber)
    let reapedItem = reapedArr.filter(element => element == randomNumber)
    if (reapedItem && reapedItem.length <= 2) {
        frontArr[index].style.backgroundImage = `url("img/${names[randomNumber]}")`;
        index++
    }
    

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }