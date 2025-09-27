let choice=document.querySelectorAll(".image-class");
let userScore=0;
let computerScore=0;
let generateComputerChoice=()=>
{
    let computerChoice=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    return computerChoice[index];

}
let player='A';
choice.forEach((element) => {
    element.addEventListener("click",(e)=>{
    const userChoice=element.getAttribute("id");
    let computerChoice=generateComputerChoice();
    if(userChoice===computerChoice)
    {
        document.getElementById("result").innerText="Match draw";

    }
    else if(userChoice==="rock")
    {
        if(computerChoice===paper){
            computerScore++;
            document.getElementById("result").innerText="you lose";
            document.getElementById("score2").innerText=computerScore;

        }
        else{
            userScore++;
            document.getElementById("result").innerText="you win";
            document.getElementById("score1").innerText=userScore;
        }
          
    }
    else if(userChoice==="paper"){
        if(computerChoice==="rock"){
            computerScore++;
            document.getElementById("result").innerText="you lose";
            document.getElementById("score2").innerText=computerScore;
        }
        else{
            userScore++;
            document.getElementById("result").innerText="you win";
            document.getElementById("score1").innerText=userScore;
        }
    }
    else{
        if(computerChoice==="rock"){
            computerScore++;
            document.getElementById("result").innerText="you lose";
            document.getElementById("score2").innerText=computerScore;
        }
        else{
            userScore++;
            document.getElementById("result").innerText="you win";
            document.getElementById("score1").innerText=userScore;
        }
    }
   


    })})