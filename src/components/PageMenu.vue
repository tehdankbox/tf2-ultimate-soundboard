<template>
  <q-item
    clickable
    @click="clickHandler"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon size="3rem" :name="'img:src/assets/emblem/' + props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['changeScreen'])

const props = defineProps({
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
})

function clickHandler() {
  if (props.link) {
    emit('changeScreen', props.pageName)
    router.push({ path: props.link })
  }
}
</script>
