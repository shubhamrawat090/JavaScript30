function removeTransition(e) {
  // NOTE: even though you used the shorthand in css 'background', you will refer to it as 'background-color' in JS because you only changed the color
  if (e.propertyName !== "background-color") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  // html element
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // audio element
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // proceed only if the mentioned key is pressed
  if (!audio) {
    return;
  }

  // reset the audio when key is pressed again
  audio.currentTime = 0;
  // play the audio file corresponding to it
  audio.play();
  // show the playing key different from others
  key.classList.add("playing");
}

const allKeys = Array.from(document.querySelectorAll(".key_card"));
allKeys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

// run the playSound(), as soon as a key is pressed
window.addEventListener("keydown", playSound);
