const resOfFight = document.querySelector('.game-winer');
let scoreList = document.querySelector('.score');

const auto = document.querySelector('.auto-mode');
const reset = document.querySelector('.reset');
const scissorsBtn = document.querySelector('#scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');

if (!localStorage.getItem('data')){
   const lol = {
      win: 0,
      lose: 0,
      tie: 0
   }
   localStorage.setItem('data', JSON.stringify(lol))
}
props = JSON.parse(localStorage.getItem('data'));

console.log(localStorage.getItem('data'))

scissorsBtn.addEventListener("click", scissorsRes );
paperBtn.addEventListener("click", paperRes );
rockBtn.addEventListener("click", rockRes );
auto.addEventListener("click", plaAutoMode );
reset.addEventListener("click", updateScore );


resetScore()

function updateScore(){
   props.win = 0
   props.lose = 0
   props.tie = 0
   resetScore()
}
let interval;
function df (){
   interval = setInterval(function a(){
      const a = pickComputerRPS();
      if(a === "rock"){
         props.win++
         calculate("win")
      }else if(a === "paper"){
         props.lose++
         calculate("lose")
      }else {
         props.tie++
         calculate("tie")
      }
      resetScore();
   },1500);
}

function plaAutoMode(){
   if(auto.innerHTML === "auto play"){
      auto.innerHTML = "stop auto play"
      df();
   } else {
      auto.innerHTML = "auto play"
      clearInterval(interval)
   }
}

function calculate(resolt){
   resOfFight.innerHTML = resolt;
   removeClass();
   resOfFight.classList.add(resolt)
}

function pickComputerRPS() {
   const num = Math.random();
   if(num < 1/3){
      return "rock";
   }else if( num > 1/3 && num < 2/3)
   {
      return "paper";
   }else
   {
      return "scissors";
   }
}

function removeClass() {
   resOfFight.classList.remove("tie");
   resOfFight.classList.remove("win");
   resOfFight.classList.remove("lose");
}

function scissorsRes(){
   const compterRes = pickComputerRPS();
   if("scissors" === compterRes){
      props.tie++;
      calculate("tie")
   } else if ("paper" === compterRes){
      props.win++
      calculate("win")
   } else {
      props.lose++
      calculate("lose")
   }
   resetScore();
}

function rockRes(){
   const compterRes = pickComputerRPS();
   if("rock" === compterRes){
      props.tie++;
      calculate("tie")
   } else if ("scissors" === compterRes){
      props.win++;
      calculate("win")
   } else {
      props.lose++;
      calculate("lose")
   }
   resetScore();
}

function paperRes(){
   const compterRes = pickComputerRPS();
   if("paper" === compterRes){
      props.tie++;
      calculate("tie")
   } else if ("rock" === compterRes){
      props.win++;
      calculate("win")
   } else {
      props.lose++;
      calculate("lose")
   }
   resetScore();
}

function resetScore(){
   scoreList.innerHTML = `win: ${props.win},lose: ${props.lose},tie: ${props.tie}`;
   saveValues()
}

function saveValues(){
   localStorage.setItem('data', JSON.stringify(props))
}
JSON.parse(localStorage.getItem('data'));
