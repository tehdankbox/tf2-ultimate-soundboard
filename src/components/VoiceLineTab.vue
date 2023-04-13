<template>
  <q-page class="flex flex-start">
    <div
      v-for="(category, categoryIndex) in getTabValues()"
      :key="categoryIndex"
      class="voiceline-button-container"
    >
      <q-btn
        v-for="(voiceline, voicelineIndex) in getCategoryValues(category)"
        :key="voicelineIndex"
        :name="voiceline.name"
        color="secondary"
        :label="voiceline.label"
        class="voiceline-button"
        unelevated
        no-caps
        @click="findAndPlayFile(voiceline.name)"
      />
    </div>
  </q-page>
</template>

<script>
import { findPath, loadFilesFromTab } from 'src/helpers/file/index.js';
import { playSound } from 'src/helpers/sound.js';

export default {
  name: 'VoiceLineTab',

  props: {
    class: {
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
      const filePath = findPath(this.class, voiceName);
      playSound(filePath);
    },

    getTabValues() {
      const tabFiles = loadFilesFromTab(this.class, this.tab);
      return tabFiles;
    },

    getCategoryValues(tab) {
      let category = [];

      Object.keys(tab).forEach((e) => {
        let obj = {
          name: e,
          label: tab[e]
        }
        category.push(obj);
      });

      return category;
    }
  },
};
</script>

<style lang="scss">
  .voiceline-button-container {
    background: $primary;
    width: 100%;

    & .voiceline-button {
      width: 100%;
      border-bottom: 1px solid $border1;
      max-width: 100vw;
      min-height: 2.5rem;

      & .q-btn__content .block {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    &:after {
      content: "";
      display: flex;
      background-color: $primary;
      width: 100%;
      height: 1.25rem;
      border-bottom: 1px solid $border1;
    }

    &:last-child:after {
      height: 2.5rem;
      border-bottom-width: 0;
    }
  }
</style>
