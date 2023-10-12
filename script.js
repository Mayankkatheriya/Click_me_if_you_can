let box = document.querySelector('.catch');
let playBtn = document.querySelector(".play");
let start = document.querySelector(".start");
let restart = document.querySelector(".restart");
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
    box.style.top = up
})
playBtn.addEventListener("click", ()=>{
    box.style.display = "block";
    start.style.display = "none"
})
box.addEventListener("click", ()=>{
    box.style.display = "none";
    restart.style.display = "flex";
})


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