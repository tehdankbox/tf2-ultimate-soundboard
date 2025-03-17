<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-icon
          class="toolbar-avatar"
          size="2rem"
          :name="'img:src/assets/avatar/' + getPageImage()"
        />

        <q-toolbar-title>
          {{ getPageTitle() }}
        </q-toolbar-title>


        <q-toolbar-title class="secondary-title">
          TF2 Ultimate Soundboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="text-primary-text bg-background"
    >
      <q-list>
        <PageMenu
          v-for="link in getDrawerOptions()"
          :key="link.title"
          v-bind="link"
        />

        <q-item class="volume-item">
          <q-item-section avatar>
            <q-icon size="3rem" name="img:src/assets/emblem/Speech_voice_red.png" />
          </q-item-section>

          <q-item-section class="volume-text">
            <q-item-label>Volume {{ configStore.volume }}</q-item-label>
          </q-item-section>

          <q-item-section class="volume-slider">
            <q-slider
              :model-value="configStore.getVolume"
              :min="0"
              :max="100"
              color="white"
              label
              @change="configStore.updateVolume"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import { useConfigStore } from 'src/stores/config'
import PageMenu from 'src/components/PageMenu.vue'
import { pageOptions } from 'src/helpers/pages.js'

const props = defineProps({
  activeScreen: {
    type: String,
    default: 'soldier',
  }
})

const configStore = useConfigStore()
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function getDrawerOptions() {
  const mappedOptions = Object.keys(pageOptions).map((e) => {
    return pageOptions[e]
  })

  return mappedOptions
}

function getPageTitle() {
  return pageOptions[props.activeScreen].pageTitle
}

function getPageImage() {
  return pageOptions[props.activeScreen].pageImage
}
</script>
