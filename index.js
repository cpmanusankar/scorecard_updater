let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0


//home section
function addOneHome() {
    countHome += 1
    homeScore.textContent = countHome

}

function addTwoHome() {
    countHome += 2
    homeScore.textContent = countHome
    
}

function addThreeHome() {
    countHome += 3
    homeScore.textContent = countHome

}

// function resetHome() {
//     countHome = 0
//     homeScore.textContent = countHome
//  }




//Guest section

function addOneGuest() {
    countGuest += 1
    guestScore.textContent = countGuest

}

function addTwoGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
    
}

function addThreeGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

// function resetGuest() {
//    countGuest = 0
//    guestScore.textContent = countGuest
// }


//reset all fun

function reset() {
    countHome = 0
    homeScore.textContent = countHome
    countGuest = 0
    guestScore.textContent = countGuest

}