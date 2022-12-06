let bg = document.getElementById('1');
let par = document.getElementById('2');

document.onmousemove = (e) =>{
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    bg.style.transform = "translate(-"+ x * 50 + "px,-"+ y * 50 +"px)";
    par.style.transform = "translate(-"+ x * 70 + "px,-"+ y * 70 +"px)";
};