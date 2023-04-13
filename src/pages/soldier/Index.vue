<template>
  <q-page class="flex flex-start">
    <VoiceLineTab
      v-if="true"
      class="soldier"
      tab="domination"
    />
    <VoiceLineTab
      v-if="true"
      class="soldier"
      tab="payload"
    />
  </q-page>
</template>

<script>
import VoiceLineTab from 'src/components/VoiceLineTab.vue';

export default {
  name: 'SoldierIndex',
  components: { VoiceLineTab },
};
</script>
