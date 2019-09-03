"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  //Artwork 1
  for (let i = 100; i < 301; i += 20) {
    //create div
    let box = document.createElement("div");
    box.className = "box";

    //insert div
    document.querySelector("#artwork1").appendChild(box);

    //style div
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
  }

  //Artwork 2
  for (let i = 0; i <= 90; i += 10) {
    //create div
    let box = document.createElement("div");
    box.className = "box";

    //insert div
    document.querySelector("#artwork2").appendChild(box);

    //style div
    box.style.transform = `rotate(${i}deg)`;
  }

  //Artwork 3
  for (let i = 0; i <= 200; i += 10) {
    //create div
    let circle = document.createElement("div");
    circle.className = "circle";

    //insert div
    document.querySelector("#artwork3").appendChild(circle);

    //style div
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
  }

  //Artwork 4
  for (let i = -90; i <= 90; i += 20) {
    //create div
    let box = document.createElement("div");
    box.className = "box";

    //insert div
    document.querySelector("#artwork4").appendChild(box);

    //style div
    box.style.transform = `translate(${i}px,${i}px)`;
  }

  //Artwork 5
  for (let i = 1; i <= 512; i *= 2) {
    //create div
    let circle = document.createElement("div");
    circle.className = "circle";

    //insert div
    document.querySelector("#artwork5").appendChild(circle);

    //style div
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
  }

  //Artwork 6
  for (let i = -20; i <= 45; i += 5) {
    //create div
    let circle = document.createElement("div");
    circle.className = "circle";

    //insert div
    document.querySelector("#artwork6").appendChild(circle);

    //style div
    circle.style.transform = `translate(${i - 50}px)`;
    circle.style.transform = `rotate(${i * 4}deg)`;
  }

  //Artwork 7
  for (let i = 0; i <= 200; i += 10) {
    //create div
    let circle = document.createElement("div");
    circle.className = "circle";

    //insert div
    document.querySelector("#artwork7").appendChild(circle);

    //style div
    circle.style.transform = `translateX(${i}px) translateY(-${i / 2}px)`;
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
  }

  //Artwork 8
  for (let i = 50; i <= 200; i += 10) {
    //create div
    let box = document.createElement("div");
    box.className = "box";

    //insert div
    document.querySelector("#artwork8").appendChild(box);

    //style div
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    box.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
  }

  //Artwork 9
  for (let i = 50; i <= 200; i += 30) {
    //create div
    let box = document.createElement("div");
    box.className = "box";

    //insert div
    document.querySelector("#artwork9").appendChild(box);

    //style div
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;

    //create div
    let circle = document.createElement("div");
    circle.className = "circle";

    //insert div
    document.querySelector("#artwork9").appendChild(circle);

    //style div
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
  }
}
