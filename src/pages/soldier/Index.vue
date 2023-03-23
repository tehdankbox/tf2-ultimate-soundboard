<template>
  <q-page class="flex flex-start">
    <div class="button-wrapper">
      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('scout')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('soldier')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('pyro')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('demoman')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('heavy')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('engineer')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('medic')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('sniper')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>

      <div class="button-container">
        <q-btn
          v-for="field in buttonValues('spy')"
          :key="field"
          :name="field.name"
          color="secondary"
          :label="field.label"
          class="full-width"
          no-caps
          @click="playSound(field.name)"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { findFile, findPath, loadAllFiles } from 'src/helpers/file/index.js';
import { playSound } from 'src/helpers/sound.js';

export default {
  name: 'SoldierIndex',

  data() {
    return {
      voiceClass: 'soldier',
      voiceCategory: 'domination',
    };
  },

  methods: {
    playSound(voiceName) {
      const filePath = findPath(this.voiceClass, voiceName);
      playSound(filePath);
    },

    buttonValues(voiceType) {
      const allFiles = loadAllFiles(this.voiceClass, `${this.voiceCategory}/${voiceType}`);

      let fields = [];
      Object.keys(allFiles).forEach((file) => {
        let obj = {
          name: file,
          label: allFiles[file]
        }
        fields.push(obj);
      })

      return fields;
    },
  },
};
</script>

<style lang='scss'>
.button-wrapper {
  background: $primary;

  .button-container {
    width: 100%;

    &:after {
      content: "";
      display: flex;
      background-color: $primary;
      color: white;
      width: 100%;
      height: 2rem;
    }
  }
}
</style>
