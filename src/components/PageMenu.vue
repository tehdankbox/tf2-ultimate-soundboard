<template>
  <q-item
    clickable
    @click="clickHandler"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon size="3rem" :name="'img:src/assets/emblem/' + icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageMenu',
  props: {
    title: {
      type: String,
      required: true
    },

    pageName: {
      type: String,
      default: 'scout'
    },

    icon: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: undefined,
    },
  },

  methods: {
    clickHandler() {
      if (this.link) {
        this.$emit('changeScreen', this.pageName);
        this.$router.push({ path: this.link });
      }
    }
  }
})
</script>
