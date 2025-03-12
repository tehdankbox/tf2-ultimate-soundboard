export const playSound = (path, volume) => {
  var audio = new Audio(path);
  audio.volume = (volume / 100) * 0.8;
  audio.play();
};
