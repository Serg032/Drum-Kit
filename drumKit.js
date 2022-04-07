// const keyTransform = () => {
//   key.classList.add("pressed");
// };

const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return;

  key.classList.add("pressed");
  audio.play();
  audio.currentTime = 0;
};

const keyNoClass = (event) => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.remove("pressed");
};

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", keyNoClass);

// const button = document.querySelector("button");

// const buttonTransform = () => {
//     button.classList.add("trans");
//   };

//   const buttonNoClass = () => {
//     button.classList.remove("trans");
//   };

//   button.addEventListener("mouseover", buttonTransform);
//   button.addEventListener("mouseout", buttonNoClass);
