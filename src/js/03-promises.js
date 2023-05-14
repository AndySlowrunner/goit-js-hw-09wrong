const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stepInput = form.querySelector('[name="step"]');
const amountInput = form.querySelector('[name="amount"]');

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });// Fulfill
            } else {
                reject({ position, delay });// Reject
            }
        }, delay);
    });
};

function createPromises(delay, step, amount) {
  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promiseDelay = delay + step * i;
    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);
  createPromises(delay, step, amount);
}

form.addEventListener('submit', handleSubmit);
