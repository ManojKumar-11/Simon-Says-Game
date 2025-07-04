let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let buttons = ["red","yellow","green","violet"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started.")
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndex = Math.floor(Math.random()*3);
    let randColor = buttons[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    console.log(gameSeq);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("usrFlash");
    setTimeout(function(){
        btn.classList.remove("usrFlash");
    },250);
}
function checkAns(){
    let idx = userSeq.length-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! <b>Your score was ${level-1} </b> <br> press any key to start.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        resetAll();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    if(gameSeq.length>0)
        checkAns();
}
let btns = document.querySelectorAll('.btn');
for(let btn of btns){
    btn.addEventListener("click",btnPress);
}

function resetAll(){
    level = 0 ;
    userSeq = [];
    gameSeq = [];
    started = false;
}