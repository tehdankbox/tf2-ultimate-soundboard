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
        v-for="(tab, index) in currentClass"
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
import { computed, ref, watch } from 'vue'
import { loadTabsFromClass } from 'src/helpers/file/file.js'
import VoiceLineTab from 'src/components/VoiceLineTab.vue'

const props = defineProps({
  activeScreen: {
    type: String,
    default: 'scout',
  }
})

const currentClass = computed(() => {
  return loadTabsFromClass(props.activeScreen)
})
const currentTab = ref(currentClass.value[0].filename)

watch(() => props.activeScreen, () => {
  reloadFirstTab()
})

function reloadFirstTab() {
  currentTab.value = currentClass.value[0].filename;
}


function resetTabScroll() {
  document.documentElement.scrollTop = 0
}
</script>
