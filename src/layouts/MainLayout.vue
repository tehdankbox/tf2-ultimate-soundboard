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
          @changeScreen="changeActiveScreen"
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
              v-model="configStore.volume"
              :min="0"
              :max="100"
              color="white"
              label
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
import { useQuasar } from 'quasar'

import { useConfigStore } from 'src/stores/config'
import PageMenu from 'src/components/PageMenu.vue'
import { pageOptions } from 'src/helpers/pages.js'

const configStore = useConfigStore()
const activeScreen = ref('scout')
const leftDrawerOpen = ref(false)
const $q = useQuasar()

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function getDrawerOptions() {
  const mappedOptions = Object.keys(pageOptions).map((e) => {
    return pageOptions[e]
  })

  return mappedOptions
}

function changeActiveScreen(screen) {
  activeScreen.value = screen

  if ($q.platform.is.mobile) {
    leftDrawerOpen.value = false
  }
}

function getPageTitle() {
  return pageOptions[activeScreen.value].pageTitle
}

function getPageImage() {
  return pageOptions[activeScreen.value].pageImage
}
</script>
