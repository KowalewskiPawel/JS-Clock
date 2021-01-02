const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
const audio = document.querySelector(".audio");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  audio.play();
}

setInterval(setDate, 1000);
