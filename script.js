function MyFunction1() {
    let answer = prompt("Answer1")
    if (answer == "yes") {
        alert("Correct!")
    } else {
        alert("Incorrect!")

    }
}
function MyFunction2() {
    let answer = prompt("Answer2")
    if (answer == "yes") {
        alert("Correct!")
    } else {
        alert("Incorrect!")

    }
}
function MyFunction3() {
    let answer = prompt("Answer3")
    if (answer == "no") {
        alert("Correct")

    } else {
        alert("Incorrect!")

    }
}
function MyFunction4() {
    let answer = prompt("Answer4")
    if (answer == "no") {
        alert("Correct!")

    } else {
        alert("Incorrect!")

    }
}
function MyFunction5() {
    let answer = prompt("Answer5")
    if (answer == "yes") {
        alert("Correct!")

    } else {
        alert("Incorrect")

    }
}
function MyFunction6() {
    let answer = prompt("Name?")
    alert("Thank you for getting to know me " + answer)
}

function MyFunction7() {
    number = prompt("Guess a number between 1 and 10")

    while (number != 7) {
        if (number < 7) {
            alert("Your answer is too low! Try again")
            number = prompt("Please guess number again!");
        } else if (number > 7) {
            alert("Your number is too high! Try again!");
            number = prompt("Please guess again");
        }
    }
    alert("You are correct!")
}

