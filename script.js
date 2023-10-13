let box = document.querySelector('.catch');
let playBtn = document.querySelector(".play");
let start = document.querySelector(".start");
let restart = document.querySelector(".restart");
let timer = document.querySelector(".timer")
let tag = document.querySelector("#tag")
console.log(restart.children[0].innerHTML);
function randomPos(min, max){
    min = Math.ceil(min) 
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}
box.addEventListener("mouseover" , ()=>{
    let screenHeight = window.innerHeight;
    let screenWidth = window.outerWidth;
    console.log(screenHeight, screenWidth);
    let boxHeight = box.offsetHeight;
    let boxWidth = box.offsetWidth;
    left = randomPos(boxWidth, (screenWidth-boxWidth)) + "px"
    up = randomPos(boxHeight, (screenHeight-boxHeight))+ "px"
    box.style.left = left
    box.style.top = up;

})
let countDown = 30;
let watch =null;
function updateTimer(){
    countDown--;
    timer.innerText = countDown;
    if(countDown==0){
        box.style.display = "none";
        restart.style.display = "flex";
        timer.style.display = "none"
        restart.children[0].innerHTML = `You Lose`
    }
}
function watchStart() {
    if(watch!==null){
        clearInterval(watch)
    }
    watch=setInterval(updateTimer,1000)
}
function watchStop() {
    clearInterval(watch)
}
playBtn.addEventListener("click", ()=>{
    box.style.display = "block";
    start.style.display = "none";
    timer.style.display = "block";
    tag.style.display = "none"
    watchStart()
})
box.addEventListener("click", ()=>{
    box.style.display = "none";
    restart.style.display = "flex";
    timer.style.display = "none"
    tag.style.display = "block"
    watchStop();
    if(parseInt(timer.innerText)<=20 && parseInt(timer.innerText)>10){
        restart.children[0].innerHTML = `Great!! <br>But You Can Do Better`
    }
    if(parseInt(timer.innerText)<=10 && parseInt(timer.innerText)>0){
        restart.children[0].innerHTML = `Nice <br>You Are a survivor`
    }
})

// let seconds = 0;
//         let minutes = 0;
//         let hours = 0;
//         let timer = document.getElementById('timer')
//         function startStopWatch(){
//             setInterval(updateStopWatch, 1000)
//         }
//         function updateStopWatch() {
//             seconds++;
//             if(seconds===60){
//                 minutes++;
//                 seconds=0;
//                 if(minutes===60){
//                     hours++;
//                     minutes=0;
//                 }
//             }
//             timer.innerText=`${hours} hr : ${minutes} min : ${seconds} sec`;
// var viewWidth = window.innerWidth;
// var viewHeight = window.innerHeight;


// btn.addEventListener("mouseover", function(event) {
//     var btnAttr = btn.getBoundingClientRect();
//     console.log(btnAttr);
    
//     var pos = getNewPosition(btnAttr.width, btnAttr.height);
//     console.log(pos);
    
//     btn.style.top = pos.y + "px";
//     btn.style.left = pos.x + "px";
// });



// function getNewPosition(btnWidth, btnHeight) {
    
//     // The btnWidth and btnHeight are subtracted so that they would not move out from the right and bottom direction
//     var newX = Math.floor((Math.random() * viewWidth)  - btnWidth);
//     var newY = Math.floor((Math.random() * viewHeight)  - btnHeight);
//     console.log(newX);
//     console.log(newY);

//     // These will satisfy that btn does not move go out in the top and left direction
//     if(newX < 0) {
//         newX = 0;
//     }
//     if(newY < 0) {
//         newY = 0;
//     }
    
//     return {x: newX, y: newY};
//      console.log(newX);
//     console.log(newY);
// }