"use strict";
const count = localStorage.getItem("count");
if (!count) {
  localStorage.setItem("count", "1");
  document.getElementById("numberCount").innerHTML = "Visitor Number: 1";
} else {
  document.getElementById("numberCount").innerHTML = `Visitor Number ${count}`;
}
