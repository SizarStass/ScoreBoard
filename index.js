function addOnePoint(scoreEl){
    scoreEl.textContent = Number(scoreEl.textContent) + 1
}

function addTwoPoints(scoreEl){
    scoreEl.textContent = Number(scoreEl.textContent) + 2
}

function addThreePoints(scoreEl){
    scoreEl.textContent = Number(scoreEl.textContent) + 3
}

let homeScoreEl = document.getElementById("homeScore-el")
let guestScoreEl = document.getElementById("guestScore-el")

function resetPoints(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

function endGame(){
    let homeScore = Number(homeScoreEl.textContent)
    let guestScore = Number(guestScoreEl.textContent)
    if(homeScore > guestScore ){
        alert("Home team won")
    }
    else if(guestScore > homeScore){
        alert("Guest team won")
    }
    else{
        alert("It is a Tie")
    }
    resetPoints()
}