<template>
  <q-page class="flex content-start">
    <q-tabs
      v-model="currentTab"
      class="class-tabs"
      active-class="active-tab"
      mobile-arrows
      @update:model-value="resetTabScroll"
    >
      <q-tab
        v-for="(tab, index) in getClassTabs()"
        :key="index"
        :label="tab.name"
        :name="tab.filename"
      />
    </q-tabs>

    <VoiceLineTab
      class="voiceline-tab"
      :class-name="activeScreen"
      :tab="currentTab"
    />
  </q-page>
</template>

<script>
import { loadTabsFromClass } from 'src/helpers/file/index.js';

import VoiceLineTab from 'src/components/VoiceLineTab.vue';

export default {
  name: 'PageIndex',

  components: { VoiceLineTab },

  props: {
    activeScreen: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      currentTab: 'domination',
    };
  },

  watch: {
    activeScreen() {
      this.currentTab = loadTabsFromClass(this.activeScreen)[0].filename;
    }
  },

  methods: {
    getClassTabs() {
      return loadTabsFromClass(this.activeScreen);
    },

    resetTabScroll() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
  .class-tabs {
    background: $primary;
    color: white;
    width: 100vw;
    height: 3rem;
    position: sticky;
    top: 50px;
    z-index: 5;
    border-bottom: 1px solid $border1;

    & .active-tab {
      background: $secondary;
    }
  }

  .voiceline-tab {
    .voiceline-button-container {
      background: $primary;
      width: 100%;
      align-content: flex-start;

      & .voiceline-container-separator {
        background: $background1;
        color: $text-background1;
        padding: 0.25rem 1rem;
        font-size: 0.75rem;
      }

      & .voiceline-button {
        width: 100%;
        border-bottom: 1px solid $border1;
        max-width: 100vw;
        min-height: 2.5rem;
        padding-left: 1.5rem;

        & .q-btn__content .block {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      // &:after {
      //   content: "";
      //   display: flex;
      //   background-color: $primary;
      //   width: 100%;
      //   height: 1.25rem;
      //   border-bottom: 1px solid $border1;
      // }

      // &:last-child:after {
      //   height: 2.5rem;
      //   border-bottom-width: 0;
      // }

      &:last-child:after {
        content: "";
        display: flex;
        background-color: $background1;
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid $border1;
        border-bottom-width: 0;
      }
    }
  }
</style>
