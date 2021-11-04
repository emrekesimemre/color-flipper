const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const navBar = document.querySelector(".nav-bar");





btn.addEventListener("click", ()=>{
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
    navBar.style.backgroundColor = rColor();
    clockEl.style.color = rColor();
    

})

function randomColor() {
    return Math.floor(Math.random()*hex.length);
}
let rNumber = () => Math.floor(Math.random()*256);
let rColor = () => `rgb(${rNumber()},${rNumber()},${rNumber()})`;










let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let clockEl = document.querySelector(".clock");
let secondEl = document.querySelector(".second");

let time = () =>{
    let currenTime = new Date();
    let currentHour = currenTime.getHours();
    let currentMinute = currenTime.getMinutes()
    let currentSecond = currenTime.getSeconds()
    ;
    secondEl.textContent = currentSecond.toString().padStart(2,"0")
    hourEl.textContent = currentHour.toString().padStart(2,"0");
    minuteEl.textContent = currentMinute.toString().padStart(2,"0")
}
setInterval(time, 1000);