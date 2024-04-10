<template>
  <div class="flex content-start">
    <div
      v-for="(category, categoryIndex) in getTabValues()"
      :key="categoryIndex"
      class="voiceline-button-container"
    >
      <div class="voiceline-container-separator">
        {{ category.index }}
      </div>

      <q-btn
        v-for="(voiceline, voicelineIndex) in getCategoryValues(category)"
        :key="voicelineIndex"
        :name="voiceline.name"
        color="secondary"
        :label="voiceline.label"
        class="voiceline-button"
        unelevated
        no-caps
        align="left"
        @click="findAndPlayFile(voiceline.name)"
      />
    </div>
  </div>
</template>

<script>
import { findPath, loadFilesFromTab, dupe } from 'src/helpers/file/index.js';
import { playSound } from 'src/helpers/sound.js';

export default {
  name: 'VoiceLineTab',

  props: {
    className: {
      type: String,
      required: true,
    },

    tab: {
      type: String,
      required: true,
    }
  },

  methods: {
    findAndPlayFile(voiceName) {
      const filePath = findPath(this.className, voiceName);
      playSound(filePath);
    },

    getTabValues() {
      const tabFiles = loadFilesFromTab(this.className, this.tab);
      return tabFiles;
    },

    getCategoryValues(tab) {
      let category = [];

      const tabObject = dupe(tab);

      Object.keys(tabObject).forEach((e) => {
        let obj = {
          name: e,
          label: tabObject[e]
        }
        category.push(obj);
      });

      return category;
    }
  },
};
</script>
