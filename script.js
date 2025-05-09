"use strict"

function setPhonePlaceholder() {
  let tels = document.querySelectorAll(".consultation__phone");
  tels.forEach(tel => {
    tel.addEventListener("input", () => {
      let placeholder = tel.nextElementSibling;
      if(tel.value == "") {
        placeholder.style = "display: block;";
      } else placeholder.style = "display: none;";
    })
  })
}

setPhonePlaceholder();

function setWorkingTime() {
  let data = new Date();

  let today = String(data.getFullYear()) + '-' +  
              String((data.getMonth() + 1)).padStart(2, 0) + '-' + 
              String(data.getDate()).padStart(2, 0);

  let workingTime = document.getElementsByTagName("time");

  workingTime[0].setAttribute("datetime", `${today}T09:00:00`);
  workingTime[1].setAttribute("datetime", `${today}T21:00:00`);
}

setWorkingTime();

let toggler = document.querySelector("#toggler");
let label = toggler.nextElementSibling;
let links = document.querySelectorAll(".contacts a");
links = [...links];

function checkToggler() {
  if(toggler.checked) {
    links.forEach(link => {
      link.setAttribute("tabindex", 0);
    });
  }
  else {
    links.forEach(link => {
      link.setAttribute("tabindex", -1);
    })
  }
}

toggler.addEventListener("change", checkToggler);

function setTabNav() {

  if(window.getComputedStyle(label).display == "none") {
    toggler.setAttribute("tabindex", -1);
    links.forEach(link => {
      link.setAttribute("tabindex", 0);
    })
  } 
  else {
    toggler.setAttribute("tabindex", 0);
    checkToggler();
  }
}

addEventListener("resize", setTabNav);

setTabNav();