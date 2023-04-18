/*============== dark mode ===================*/

const dayNight = document.querySelector(".mode");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});


// ************************* greetings *********************************
const currtime = new Date().getHours();
const greet = document.getElementsByClassName('greeting')[0];
if (currtime >= 1 && currtime < 12) {
  greet.innerHTML = 'Good Morning';
}
else if (currtime >= 12 && currtime < 16) {
  greet.innerHTML = 'Good Noon';
}
else if (currtime >= 16 && currtime < 19) {
  greet.innerHTML = 'Good Afternoon';
}
else if (currtime >= 19 && currtime <= 24 || currtime==0) {
  greet.innerHTML = 'Good Night';
}

