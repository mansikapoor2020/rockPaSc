console.log("in js file");
//Cache the DOM
const scoreBoard_div=document.querySelector("scoreBoard");
const userScore_span=document.querySelector("userScore");
const computerScore_span=document.querySelector("computerScore");
const results_div=document.querySelector("results");
const r_div=document.getElementById("r");
const p_div=document.getElementById("p");
const s_div=document.getElementById("s");

//Event listner on image click
function gameFunc(a){
    console.log("inside game "+ a);
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