"use strict";

const aboutUs = [
  "SECOND GENERATION",
  "DOING BUSINESS FOR OVER 30 YEARS",
  "FAMILY OWNED AND OPERATED",
];

document.getElementById("aboutUsBtn").addEventListener("click", function () {
  let ul = document.getElementById("us");

  let arrayList = ul.getElementsByTagName("li");

  for (let i = 0; i < aboutUs.length; i++) {
    if (arrayList[i]) {
      arrayList[i].textContent = aboutUs[i];
    }
  }
});
