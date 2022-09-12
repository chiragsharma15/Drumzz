
// Detecting Button press

let btn = document.querySelectorAll(".drum");
var i =0;
while (i < btn.length) {
  btn[i].addEventListener("click", function() {
    let buttonInnerHtml = this.innerText;
    makeSound(buttonInnerHtml)

    buttonAnimation(buttonInnerHtml);
  });
  i++;
}


// Detecting Key press
document.addEventListener("keydown", function(event) {
  let keys = event.key;
  makeSound(keys);

  buttonAnimation(keys);
});


// Make Sound function

function makeSound(key) {
  switch (key) {

    case "w":
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

    case "a":
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;

    case "s":
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;

    case "d":
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;

    case "j":
    let snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;

    case "k":
    let crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;

    case "l":
    let kick_bass = new Audio('sounds/kick-bass.mp3');
    kick_bass.play();
      break;


    default: console.log(key);

  }
}



function buttonAnimation(currentkey){
  let activeButton = document.querySelector('.' + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  },120);
}
