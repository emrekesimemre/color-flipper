const colors = ["Green", "Red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
let buton = document.querySelector("#btn");
console.log(buton)

// let randomNumber = () => Math.floor(Math.random()*256)
// let randomColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`

buton.addEventListener("click", ()=>{
    // let result = document.querySelector(".color");
    // document.body.style.backgroundColor = randomColor();
    // result.textContent = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    // const randomNumber = () => Math.floor(Math.random()*colors.length);
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

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


