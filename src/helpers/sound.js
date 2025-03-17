import { useConfigStore } from 'src/stores/config'
const configStore = useConfigStore()

const audioManager = new Audio()

export const playSound = (path) => {
  if (configStore.getAudioMode === 'individual') {
    let audio = new Audio(path);
    let volume = configStore.getVolume;

    audio.volume = (volume / 100) * 0.8;
    audio.play();
  } else {
    let volume = configStore.getVolume;

    audioManager.volume = (volume / 100) * 0.8;
    audioManager.src = path;
    audioManager.play();
  }
};
