<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ getPageTitle }}
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
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view
        @changeScreen="changeActiveScreen"
      />
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
