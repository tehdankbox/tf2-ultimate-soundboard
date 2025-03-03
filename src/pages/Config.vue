<template>
  <q-page class="page-config">
    <div class="config-item">
      <div class="config-item-text">
        <q-input
          v-model="volume"
          filled
          label="Volume (test)"
          mask="###"
          bg-color="white"
          dense
        />
      </div>

      <q-slider
        v-model="volume"
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

<script>
export default {
  name: 'PageConfig',
  data() {
    return {
      volume: 50,
    }
  },

  watch: {
    volume(value) {
      if (isNaN(value) || value > 100) {
        this.volume = 100;
      }
    }
  },
};
</script>
