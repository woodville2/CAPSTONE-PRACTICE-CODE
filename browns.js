"use strict";

document.getElementById("customerSatBtn").addEventListener("click", () => {
  const count = localStorage.getItem("count");
  if (!count) {
    localStorage.setItem("count", "1");
  } else {
    const newCount = +count + 1;
    localStorage.setItem("count", newCount);
  }
  window.location.href = "browns.html";
});

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
