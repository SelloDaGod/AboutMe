function MyFunction1() {
    let answer = "";
    for (let i = 0; i < 6; i++) {
        answer = prompt("Answer1");
        if (answer === "yes") {
            alert("Correct!");
           console.log(answer); 
           break;
        } else if (answer === "no") {
            alert("Incorrect!");
        }
    }
}
function MyFunction2() {
    let answer = "";
    for (let i = 0; i < 6; i++) {
        answer = prompt("Answer1");
        if (answer === "yes") {
            alert("Correct!");
           console.log(answer); 
           break;
        } else if (answer === "no") {
            alert("Incorrect!");
        }
    }
}
function MyFunction3() {
    let answer = "";
    for (let i = 0; i < 6; i++) {
        answer = prompt("Answer1");
        if (answer === "no") {
            alert("Correct!");
           console.log(answer); 
           break;
        } else if (answer === "yes") {
            alert("Incorrect!");
        }
    }
}
function MyFunction4() {
    let answer = "";
    for (let i = 0; i < 6; i++) {
        answer = prompt("Answer1");
        if (answer === "no") {
            alert("Correct!");
           console.log(answer); 
           break;
        } else if (answer === "yes") {
            alert("Incorrect!");
        }
    }
}
function MyFunction5() {
    let answer = "";
    for (let i = 0; i < 6; i++) {
        answer = prompt("Answer1");
        if (answer === "yes") {
            alert("Correct!");
           console.log(answer); 
           break;
        } else if (answer === "no") {
            alert("Incorrect!");
        }
    }
}
function MyFunction0() {
    let answer = prompt("Name?")
    alert("Thank you for getting to know me " + answer)
}



function MyFunction6() {
    number = prompt("Guess a number between 1 and 10")
    for (let i = 0; i < 6; i++) {
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

const array = ["A. $uicide Boy$", " B. Polo G", " C. Geto Boys", " D. Mac Miller", " Select All that apply! (Format: answer,answer)"];
const list = document.getElementById("list");

list.addEventListener("click", function () {
    alert("Answer Choices: " + array);
})

function MyFunction7() {
    let answer = prompt("Who are my favorite artist?")
    for (let i = 0; i < 6; i++){
    if (answer.toLowerCase() == "a,d" || answer.toLowerCase() == "d,a") {
        alert("You are correct!");
        document.getElementById("answer").innerHTML += answer;
        ;
    } else {
        alert("Incorrect!");
    }}
}
