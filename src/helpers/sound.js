export const playSound = (path) => {
  var audio = new Audio(path);
  audio.volume = 0.1;
  audio.play();
};
