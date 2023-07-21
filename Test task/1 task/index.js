const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let countdown;

function animateTimer(seconds) {
  const currentTime = Date.now(); //текущее время, выраженное в мс
  const endTime = currentTime + seconds * 1000; //время окончания

  createTimerAnimator(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000); //секунды, которые остаются до окончания работы таймера

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    createTimerAnimator(secondsLeft);
  }, 1000);
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function createTimerAnimator(seconds) {
  const hour = Math.floor(seconds / 3600);
  const remainderMinutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;

  const display = `${hour < 10 ? '0' : ''}${hour}:${
    remainderMinutes < 10 ? '0' : ''
  }${remainderMinutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerEl.textContent = display;
  //console.log({ hour, remainderMinutes, remainderSeconds });
}

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
