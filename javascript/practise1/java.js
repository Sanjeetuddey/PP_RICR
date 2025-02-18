function add() {
let a = Number(document.getElementById("h1").innerText);
a=a+1;
document.getElementById("h1").innerText=a;
}

function remove() {
    let a = Number(document.getElementById("h1").innerText);
    a=a-1;
    document.getElementById("h1").innerText=a;
    }


function reg (){
    document.getElementById("h1").innerText=0;
}