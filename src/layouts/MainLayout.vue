<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-icon
          class="toolbar-avatar"
          size="2rem"
          :name="'img:src/assets/avatar/' + getPageImage"
        />

        <q-toolbar-title>
          {{ getPageTitle }}
        </q-toolbar-title>


        <q-toolbar-title class="secondary-title">
          TF2 Ultimate Soundboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      class="text-primary-text bg-background"
    >
      <q-list>
        <PageMenu
          v-for="link in getDrawerOptions"
          :key="link.title"
          v-bind="link"
          @changeScreen="changeActiveScreen"
        />

        <q-item class="volume-item">
          <q-item-section avatar>
            <q-icon size="3rem" name="img:src/assets/emblem/Speech_voice_red.png" />
          </q-item-section>

          <q-item-section class="volume-text">
            <q-item-label>Volume {{ volume }}</q-item-label>
          </q-item-section>

          <q-item-section class="volume-slider">
            <q-slider
              v-model="volume"
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

<script>
import { defineComponent, ref } from 'vue';
import PageMenu from 'src/components/PageMenu.vue';
import { pageOptions } from 'src/helpers/pages.js';

export default defineComponent({
  name: 'MainLayout',

  components: {
    PageMenu
  },

  data() {
    return {
      activeScreen: 'scout',
      volume: 50,
    };
  },

  computed: {
    getDrawerOptions() {
      const mappedOptions = Object.keys(pageOptions).map((e) => {
        return pageOptions[e];
      });

      return mappedOptions;
    },

    getPageTitle() {
      return pageOptions[this.activeScreen].pageTitle;
    },

    getPageImage() {
      return pageOptions[this.activeScreen].pageImage;
    },
  },

  methods: {
    changeActiveScreen(screen) {
      this.activeScreen = screen;

      if (this.$q.platform.is.mobile) {
        this.leftDrawerOpen = false;
      }
    },
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
