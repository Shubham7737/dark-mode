const toggle = document.getElementById("icon");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode"); // body class
  if (toggle.classList.contains("ri-sun-line")) {
    toggle.classList.add("ri-moon-line");
    toggle.classList.remove("ri-sun-line");
    toggle.style.color = "white";
  } else {
    toggle.classList.remove("ri-moon-line");
    toggle.classList.add("ri-sun-line");
    toggle.style.color = "black";
  }
});

// Thank You CHAT+GPT

// const toggle = document.getElementById("togglebyid");

// Select the body element
// const body = document.querySelector("body");

// Add an event listener to the toggle icon
// toggle.addEventListener("click", () => {
// Toggle the dark-mode class on the body
// body.classList.toggle("dark-mode");

// Change the icon based on the current mode
//   if (body.classList.contains("dark-mode")) {
//     toggle.classList.remove("bi-brightness-high");
//     toggle.classList.add("bi-moon");
//     body.style.background = "black";
//     body.style.color = "white";
//     body.style.translate = "2s";
//   } else {
//     toggle.classList.remove("bi-moon");
//     toggle.classList.add("bi-brightness-high");
//     body.style.background = "white";
//     body.style.color = "black";
//     body.style.translate = "2s";
//   }
// });
