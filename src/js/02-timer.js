import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const fields = document.querySelectorAll('.field');
const timer = document.querySelector('.timer');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

function disableBtn() {
  startBtn.disabled = true;
};
disableBtn();

timer.style.display = "flex";
fields.forEach(field => {
  field.style.display = "flex";
  field.style.flexDirection = "column";
  field.style.margin = "5px";
  field.style.textAlign = "center";
});

let userDate = 0;
let currentDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = options.defaultDate;
    userDate = selectedDates[0];
  
    if (userDate <= currentDate) {
        window.alert("Please choose a date in the future");
    }else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('input[type = "text"]', options);

// startBtn.addEventListener('click', () => {
//     const timerId = setInterval(onBtnClick, 1000);
// });

// function onBtnClick() {
    
// };

// const futureDate = pasteDate.getTime();
// console.log(daysLeft);

// function handleTimer() {
//     const timeDifference = userDate - currentDate;
//     const timeConvert = convertMs(timeDifference);
//     // console.log(timeConvert);
  
// };

// handleTimer();

//   renderTimer(timeConvert);
//   if (timeDifference <= 0) {
//     clearInterval(timerId);
//   }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// };
