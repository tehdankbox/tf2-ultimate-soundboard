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

<script setup>
import { useConfigStore } from 'src/stores/config'
import { findPath, loadFilesFromTab, dupe } from 'src/helpers/file/file.js'
import { playSound } from 'src/helpers/sound.js'

const configStore = useConfigStore()

const props = defineProps({
  className: {
    type: String,
    required: true,
  },

  tab: {
    type: String,
    required: true,
  }
})

function findAndPlayFile(voiceName) {
  const filePath = findPath(props.className, voiceName)
  playSound(filePath, configStore.volume)
}

function getTabValues() {
  const tabFiles = loadFilesFromTab(props.className, props.tab)
  return tabFiles
}

function getCategoryValues(tab) {
  let category = []

  const tabObject = dupe(tab)

  Object.keys(tabObject).forEach((e) => {
    let obj = {
      name: e,
      label: tabObject[e]
    }
    category.push(obj)
  })

  console.log(category)
  return category
}
</script>
