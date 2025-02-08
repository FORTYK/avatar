<template>
  <div class="avatar-swatches">
    <button v-for="(swatch, index) in swatches" :title="swatch.label" class="swatch"
      :style="{ backgroundColor: swatch.color }" @click="handleClick(index)"></button>
  </div>
</template>
<script lang="ts">
import { type PropType } from 'vue'
import { type Swatch } from './common/Swatch'

export default {
  props: {
    swatches: {
      type: Array as PropType<Swatch[]>
    }
  },
  emits: ['swatch-picker-event'],
  methods: {
    handleClick(index: number) {
      if (this.swatches == undefined) return;
      this.$emit('swatch-picker-event', this.swatches[index]);
    }
  }
}
</script>

<style scoped>
.avatar-swatches {
  display: flex;
  width: auto;
  justify-content: flex-start;
  margin-top: 1rem;
  outline: 1px solid gray;
}

.swatch {
  display: flex;
  width: 16px;
  height: 16px;
  background-color: #ff00ff;

  outline: none;
  border: none;
}

.swatch+.swatch {
  margin-left: 1px;
}
</style>