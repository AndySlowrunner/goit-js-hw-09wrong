const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyStyle = document.body;
let timerId = null;

startBtn.addEventListener('click', bodyStyleChange);
stopBtn.addEventListener('click', stopChanging);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function bodyStyleChange() {
  timerId = setInterval(() => {
    bodyStyle.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
};

function stopChanging() {
  clearInterval(timerId);
  startBtn.disabled = false;
};
