



const colorCode = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector(".btn");
const box = document.querySelector(".main");
btn.addEventListener("click", function() {
    let color = "#";

    for(let i = 0; i<6;  i++){
        color += colorCode[rundomNum()];
    }
    // document.querySelector(".main").style.backgroundColor = color;
    box.style.backgroundColor = color;
    document.querySelector(".colorName").innerText = color;
})

function rundomNum(){
    return Math.floor(Math.random()*colorCode.length);
}