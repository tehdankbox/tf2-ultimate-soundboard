export const playSound = (path) => {
  var audio = new Audio(path);
  audio.play();
};
