<template>
  <q-page class="flex flex-center">
    <q-btn
      color="primary"
      label="Dominated, you one-eyed cross-dresser."
      class="full-width"
      no-caps
      @click="playSound"
    />
    Soldier dominations list compilation
  </q-page>
</template>

<script>
import { playSound } from 'src/helpers/sound.js'

export default {
  name: 'SoldierDomination',

  methods: {
    playSound() {
      playSound('soldier/soldier_dominationdemoman01');
    },
  },
}
</script>

<style lang="scss">
  .test {
    width: 100%;
  }
</style>
