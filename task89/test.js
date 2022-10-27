let numberEl = document.getElementById("num-el");
let buttonEl = document.getElementById("button-el");
let outputEl = document.getElementById("output-el");

let stage = 2;


// stage = stageDecider();
// buttonEl.addEventListener('click', 'playGame()');

function playGame() {
    let output = numberEl.value;
    let str = '';
    output = Number(output);
    let randomNum = Math.floor((Math.random()*stage) + 1);
    if (output === randomNum){
        str = "Congratulations! You have qualified for stage " + stage+1;
        outputEl.textContent = str + " for STAGE " + stage;
        stage += 1;
    } else if (output < randomNum){
        str = "You guessed wrong. Your answer is lesser";
        outputEl.textContent = str + " for STAGE " + stage;
        stage = stage;
    } else {
        str = "You guessed wrong. Your answer is greater";
        outputEl.textContent = str + " for STAGE " + stage;
        stage = stage;
    }  

}

// function stageDecider(stage) {
//     let result = playGame();
//     while (stopGame != true){
       
//     }
   
//     return stage;
// }


// console.log(result);
// buttonEl.addEventListener('click', function() {
    
//     if (result == true){
//         console.log ("Congratulations");
//     }
// })
