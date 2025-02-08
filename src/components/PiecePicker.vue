<template>
  <template v-if="module && module.data">
    <div class="piece-picker-wrapper">
      <div class="piece-picker">
        <button>
          <object :data="module.data[0].src" height="40" width="40"></object>
        </button>
        <div class="pieces">
          <div class="piece" v-for="(piece, index) in module.data">
            <object :data="piece.src" height="60px" width="60px"></object>
            <button @click="handleClick(index)"></button>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import { type PropType } from 'vue'
import { type AvatarModuleMeta } from './common/AvatarModuleMeta';
import { AvatarModules } from './common/AvatarModules';
import { AvatarModule } from './common/AvatarModule';

export default {
  props: {
    module: {
      type: AvatarModules
    }
  },
  mounted() {
  },
  emits: ['piece-picker-event'],
  methods: {
    handleClick(index: number) {
      const picked = this.module.data[index];
      this.$emit('piece-picker-event', new AvatarModule(this.module.label, picked));
    }
  }
}

</script>
<style scoped>
.piece-picker-wrapper {
  display: flex;
}

.piece-picker {
  display: flex;
}

.pieces {
  display: none;
  position: absolute;
  margin-left: 40px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px;
}

.piece-picker:hover .pieces {
  display: flex;
}

.piece {
  height: 60px;
  width: 60px;
}

.piece button {
  position: absolute;
  margin-left: -60px;
  height: 60px;
  width: 60px;
  opacity: 0;
}

.piece:hover {
  background-color: red;
}
</style>