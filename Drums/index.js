document.querySelectorAll(".drum")[0].addEventListener("click", function() {
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();  
});
document.querySelectorAll(".drum")[1].addEventListener("click", function() {
  var tom1 = new Audio("sounds/tom-2.mp3");
  tom1.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click", function() {
  var tom1 = new Audio("sounds/tom-3.mp3");
  tom1.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", function() {
  var tom1 = new Audio("sounds/tom-4.mp3");
  tom1.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", function() {
  var tom1 = new Audio("sounds/snare.mp3");
  tom1.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", function() {
  var tom1 = new Audio("sounds/crash.mp3");
  tom1.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", function() {
  var tom1 = new Audio("sounds/kick-bass.mp3");
  tom1.play();
});

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      var activeButton = document.querySelectorAll(".drum")[0];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      var activeButton = document.querySelectorAll(".drum")[1];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      var activeButton = document.querySelectorAll(".drum")[2];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      var activeButton = document.querySelectorAll(".drum")[3];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      var activeButton = document.querySelectorAll(".drum")[4];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      var activeButton = document.querySelectorAll(".drum")[5];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      var activeButton = document.querySelectorAll(".drum")[6];
      activeButton.classList.add("pressed");    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
      break;


    default: console.log(key);

  }
}



