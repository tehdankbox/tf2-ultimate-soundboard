<template>
  <q-page class="page-config">
    <div class="config-item">
      <div class="config-item-text">
        <q-input
          :model-value="configStore.getVolume"
          filled
          label="Volume"
          mask="###"
          bg-color="white"
          dense
          @change="configStore.updateVolume"
        />
      </div>

      <q-slider
        :model-value="configStore.getVolume"
        :min="0"
        :max="100"
        color="white"
        @change="configStore.updateVolume"
      />
    </div>
    <div class="config-item">
      Audio playback mode:
      <div>
        Individual
        <q-toggle
          :model-value="configStore.getAudioMode"
          color="white"
          false-value="individual"
          true-value="shared"
          @update:model-value="configStore.updateAudioMode"
        />
        Shared
      </div>
      Individual: voice lines will keep playing when another is played.
      <br>
      Shared: voice lines will be interrupted when another is played.
    </div>
  </q-page>
</template>

<script setup>
import { useConfigStore } from 'src/stores/config'

const configStore = useConfigStore()
</script>
