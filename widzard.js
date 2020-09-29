console.log("in js file");
let userScore=0;
let computerScore=0;
//Cache the DOM
const scoreBoard_div=document.querySelector("scoreBoard");
const userScore_span=document.getElementById("userScore");
const computerScore_span=document.getElementById("computerScore");
const results_div=document.querySelector(".results>p");
const r_div=document.getElementById("r");
const p_div=document.getElementById("p");
const s_div=document.getElementById("s");

//Event listner on image click
function convert(a){
    switch(a){
    case 'r':
        return 'Rock';
        break;
    case 'p':
        return 'Paper';
        break;
    case 's':
        return 'Scissor';
        break;

    }

}

function computerChoice(){
    const choice = ['r','p','s'];
    let cch;
    cch = Math.floor(Math.random(0,2)*3);
    console.log('random computer choice '+choice[cch]);
    return choice[cch];

}
function win(uc,cc){
    userScore++;
    userScore_span.innerHTML= userScore;
    console.log(uc + cc);
    results_div.innerHTML= convert(uc) + ' beats ' + convert(cc) +'  You win!!!';

}
function loose(uc,cc){
   computerScore++;
   computerScore_span.innerHTML= computerScore; 
   console.log(uc + cc);
   results_div.innerHTML= convert(uc) + ' loose to ' + convert(cc) +' You loose!!!';
}
function draw(){
    console.log('there is a Draw');
    results_div.innerHTML=  ' There is a Tie !!!';
}
function gameFunc(a){
    console.log("inside game "+ a);
    var ch= computerChoice();
    switch(a+ch){
        case 'pr':
        case 'sp':
        case 'rs':
            win(a,ch);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            loose(a,ch);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw();
        break;

    }
}

 
    
function main(){

        r_div.addEventListener('click',function(){
            gameFunc('r');
        });
        p_div.addEventListener('click',function(){
            gameFunc('p');
        });
        s_div.addEventListener('click',function(){
            gameFunc('s');
        });
}

    //invoking main
    main();
    