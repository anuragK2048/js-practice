
let labelHourBtn = document.querySelector("#hourbtn");
let labelMinuteBtn = document.querySelector("#minutebtn");
let labelSecondBtn = document.querySelector("#secondbtn");

let labelStartBtn = document.querySelector("#startbtn");
let labelStopBtn = document.querySelector("#stopbtn");
let labelResetBtn = document.querySelector("#resetbtn");
let labelLapBtn = document.querySelector("#lapbtn");

let labelLapsHeading = document.querySelector(".lapshead")

let hour,minute,second;
let intervalId;
let newLapHTML;
labelStartBtn.addEventListener("click",function(){
    let startTime = new Date().getTime();
        intervalId = setInterval(function(startTime){
        let currentTime = new Date().getTime();
        let showTime = new Date(currentTime - startTime).toUTCString();
        hour = showTime.substring(17,19);
        minute = showTime.substring(20,22);
        second = showTime.substring(23,25);
        labelHourBtn.textContent = hour;
        labelMinuteBtn.textContent = minute;
        labelSecondBtn.textContent = second;
        newLapHTML = `<div class="lapsection">
<div class="lapno">#${count}</div>
<div class="laptime">${labelHourBtn.textContent}:${labelMinuteBtn.textContent}:${labelSecondBtn.textContent}</div>
</div>`
    },1000,startTime)
})

labelStopBtn.addEventListener("click",()=>{
    clearInterval(intervalId);
})

labelResetBtn.addEventListener("click",()=>{
    labelHourBtn.textContent = labelMinuteBtn.textContent = labelSecondBtn.textContent = "00";
    document.querySelector('.lapsection').remove();
    count = 1;
})

let count = 1;

labelLapBtn.addEventListener("click",function(){
    labelLapsHeading.insertAdjacentHTML("afterend",newLapHTML);
    count++;
})


