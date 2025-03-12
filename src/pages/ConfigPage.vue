<template>
  <q-page class="page-config">
    <div class="config-item">
      <div class="config-item-text">
        <q-input
          v-model="configStore.volume"
          filled
          label="Volume"
          mask="###"
          bg-color="white"
          dense
        />
      </div>

      <q-slider
        v-model="configStore.volume"
        snap
        :markers="10"
        :min="0"
        :max="100"
        track-color="grey"
        selection-color="white"
        thumb-color="white"
      />
    </div>

  </q-page>
</template>

<script setup>
import { useConfigStore } from 'src/stores/config'

const configStore = useConfigStore()
</script>
