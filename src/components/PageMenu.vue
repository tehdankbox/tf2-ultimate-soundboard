<template>
  <q-item
    clickable
    @click="clickHandler"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
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
      if (!this.link) {
        this.$router.push({ path: `/index/${this.pageName}` });
      } else {
        this.$router.push({ path: this.link });
      }
    }
  }
})
</script>
