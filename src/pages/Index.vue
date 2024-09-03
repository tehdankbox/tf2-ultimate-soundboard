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
      default: 'scout',
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
      this.$emit('changeScreen', this.activeScreen);
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
