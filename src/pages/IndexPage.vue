<template>
  <q-page class="flex content-start">
    <q-tabs
      v-model="currentTab"
      class="class-tabs"
      active-class="active-tab"
      mobile-arrows
      @update:model-value="resetTabScroll()"
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
      :class-name="props.activeScreen"
      :tab="currentTab"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { loadTabsFromClass } from 'src/helpers/file/file.js'
import VoiceLineTab from 'src/components/VoiceLineTab.vue'

const props = defineProps({
  activeScreen: {
    type: String,
    default: 'scout',
  }
})

const currentTab = ref('domination')

watch(() => props.activeScreen, () => {
  loadFirstTab()
})

onMounted(() => {
  loadFirstTab()
})

function loadFirstTab() {
  currentTab.value = loadTabsFromClass(props.activeScreen)[0].filename;
}

function getClassTabs() {
  return loadTabsFromClass(props.activeScreen)
}

function resetTabScroll() {
  document.documentElement.scrollTop = 0
}
</script>
