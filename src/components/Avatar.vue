<template>
  <div class="avatar-maker-wrapper">
    <div class="avatar-meta-background">
      <span class="meta">256x256x</span>
      <div class="avatar-shape">
        <div class="avatar-background" :style="avatarStyle">
          <div class="avatar-wrapper" id="avatar">
            <!--
                <object :style="avatarBodyStyle" id="avatar-body"></object>
                <object id="avatar-head" data="src/assets/head.svg" style="margin-top: 100px" width="96" height="156"></object>
                <object id="avatar-hair" data="src/assets/hair.svg" style="margin-top: 100px" width="92" height="156"></object>
                <object id="avatar-mouth" data="src/assets/mouth.svg" style="margin-top: 162px" width="39" height="51"></object>
                <object :style="avatarEyesStyle" id="avatar-eyes"></object>
              -->
          </div>
        </div>
      </div>
    </div>
    <div class="piece-picker-wrapper">
      <PiecePicker @piece-picker-event="setPiece" v-for="module in LlamaMeta" :module="module"></PiecePicker>
    </div>
    <hr>
    <SwatchPicker :swatches="backgroundSwatch" @swatch-picker-event="setBackgroundColor" />
    <div id="test"></div>
  </div>
</template>
<script lang="ts" setup>
import LlamaMeta from './common/Llama/LlamaMeta'
</script>
<script lang="ts">
import PiecePicker from './PiecePicker.vue'
import SwatchPicker from './SwatchPicker.vue'
import SwatchBackground from './common/SwatchBackground'
import { type Swatch } from './common/Swatch'
import { AvatarModules } from './common/AvatarModules';
import { AvatarModule } from './common/AvatarModule';

export default {
  data() {
    return {
      avatarStyle: {
        backgroundColor: '#C38C8C',
        backgroundImage: ''
      },
      avatar: [] as AvatarModule[],
      backgroundSwatch: SwatchBackground
    }
  },
  mounted() {
    var target = document.getElementById('avatar');

    for (let i = 0; i < LlamaMeta.length; i++) {
      const piece = LlamaMeta[i];
      if (piece.data.length == 0) continue;

      const picked = new AvatarModule(piece.label, piece.data[0]);

      this.avatar.push(picked);

      var el = document.createElement('object');
      el.setAttribute('id', `avatar-${piece.label}`);
      target?.appendChild(el);

      this.loadAvatar();
    }
  },
  components: {
    SwatchPicker,
    PiecePicker
  },
  methods: {
    setBackgroundColor(swatch: Swatch) {
      this.avatarStyle.backgroundColor = '';
      this.avatarStyle.backgroundImage = '';

      if (!swatch.type) {
        this.avatarStyle.backgroundColor = swatch.color;
      } else {
        this.avatarStyle.backgroundImage = swatch.color;
      }
    },
    setPiece(part: AvatarModule, index: number) {
      for (let i = 0; i < this.avatar.length; i++) {
        if (this.avatar[i].label == part.label) this.avatar[i] = part;
      }

      this.loadAvatar();
    },
    loadAvatar() {
      for (let i = 0; i < this.avatar.length; i++) {
        const module = this.avatar[i];
        const el = document.getElementById(`avatar-${module.label}`);

        el.setAttribute('data', module.meta.src);
        el.setAttribute('style', `position: absolute; z-index: ${i + 1}; margin-top: ${module.meta.y}px`);
        el.setAttribute('width', String(module.meta.width));
        el.setAttribute('height', String(module.meta.height));
      }
    }
  }
}
</script>
<style scoped>
.avatar-maker-wrapper {
  display: flex;
  flex-flow: wrap;
}

.avatar-maker-wrapper hr {
  width: 100%;
}

.avatar-wrapper {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.avatar {
  position: absolute;
}

.avatar-body-wrapper {
  /*background-color: #b0ada3;
  background-color: #f5f5dc;*/
  width: 100%;
  height: 180px;
  outline: 1px solid gray;
}

span.meta {
  display: none;
  position: absolute;
}

.avatar-meta-background:hover span.meta {
  display: block;
}

.avatar-meta-background {
  background-color: gray;
  border: 1px solid gray;
}

.avatar-shape {
  width: 256px;
  height: 256px;
}

.avatar-background {
  width: 100%;
  height: 100%;
}

.piece-picker-wrapper {}
</style>