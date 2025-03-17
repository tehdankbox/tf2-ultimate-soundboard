import { defineStore } from 'pinia'

const STORE_NAME = 'tf2usb-config'

const getDefaultSettings = () => ({
  volume: 50,
  audioMode: 'individual',
})

const getSettings = () => {
  const settings = localStorage.getItem(STORE_NAME)

  return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useConfigStore = defineStore('config', {
  state: () => ({
    data: getSettings()
  }),
  getters: {
    getVolume: (state) => state.data.volume,
    getAudioMode: (state) => state.data.audioMode,
  },
  actions: {
    updateVolume(vol) {
      this.data.volume = vol

      localStorage.setItem(STORE_NAME, JSON.stringify(this.data))
    },

    updateAudioMode() {
      if (this.data.audioMode === 'individual')
        this.data.audioMode = 'shared'
      else {
        this.data.audioMode = 'individual'
      }

      localStorage.setItem(STORE_NAME, JSON.stringify(this.data))
    }
  },
})
