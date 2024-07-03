let displayCount=document.getElementById("count");
let displayPrev=document.getElementById("prev")
let count=0;

function increment(){
    count=count+1;
    displayCount.innerText=count;
}
function save(){
    displayPrev.textContent+=count+" - "
}