let num1 = 0

let homeScore = document.getElementById("home-score")
homeScore.textContent = num1

function addHomeOne() {
  num1 += 1
  homeScore.textContent = num1
}

function addHomeTwo() {
  num1 += 2
  homeScore.textContent = num1
}

function addHomeThree() {
  num1 += 3
  homeScore.textContent = num1
}

let num2 = 0

let guestScore = document.getElementById("guest-score")
guestScore.textContent = num2

function addGuestOne() {
  num2 += 1
  guestScore.textContent = num2
}

function addGuestTwo() {
  num2 += 2
  guestScore.textContent = num2
}

function addGuestThree() {
  num2 += 3
  guestScore.textContent = num2
}


