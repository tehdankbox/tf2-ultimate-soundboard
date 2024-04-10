<template>
  <q-item
    clickable
    @click="$emit('select', pageName)"
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
    }
  }
})
</script>
