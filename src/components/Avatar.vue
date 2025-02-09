<template>
  <div class="avatar-maker-wrapper">
    <div class="avatar-meta-background">
      <span class="meta">256x256x</span>
      <div class="avatar-shape">
        <div class="avatar-background" :style="avatarStyle">
          <div class="avatar-wrapper" id="avatar">
          </div>
        </div>
      </div>
    </div>
    <div class="piece-picker-wrapper">
      <PiecePicker @piece-picker-event="setPiece" v-for="module in Llama.modules" :module="module"></PiecePicker>
    </div>
    <hr>

    <div class="color-menu">
      <div>
        <label>background</label>
        <SwatchPicker :swatches="backgroundSwatch" @swatch-picker-event="setBackgroundColor" />
      </div>
      <hr>
      <div>
        <label>fur</label>
        <SwatchPicker :swatches="SwatchFur" @swatch-picker-event="setFurColor" />
      </div>
    </div>
    <div @click="randomize()">🔄</div>
    <div id="test">
    </div>
  </div>
</template>
<script lang="ts" setup>
import Llama from './common/Llama/Llama'
</script>
<script lang="ts">
import PiecePicker from './PiecePicker.vue'
import SwatchPicker from './SwatchPicker.vue'
import SwatchBackground from './common/SwatchBackground'
import SwatchFur from './common/SwatchFur'
import { type Swatch } from './common/Swatch'
import { AvatarModule } from './common/AvatarModule';

export default {
  data() {
    return {
      avatarStyle: {
        backgroundColor: '#C38C8C',
        backgroundImage: '',
        furColor: SwatchFur[0]
      },
      avatar: [] as AvatarModule[],
      backgroundSwatch: SwatchBackground
    }
  },
  mounted() {
    const targetElement = document.getElementById('avatar');

    for (let i = 0; i < Llama.modules.length; i++) {
      const module = Llama.modules[i];
      if (module.disabled) continue;
      if (module.data.length == 0) continue;

      const picked = new AvatarModule(module.label, module.data[0]);
      this.avatar.push(picked);

      var el = document.createElement('object');
      el.setAttribute('id', `avatar-${module.label}`);
      targetElement?.appendChild(el);
    }

    this.randomize();
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
    setFurColor(swatch: Swatch) {
      this.avatarStyle.furColor = swatch;
      this.loadAvatar();
    },
    setPiece(piece: AvatarModule) {
      for (let i = 0; i < this.avatar.length; i++) {
        if (this.avatar[i].label == piece.label) {
          this.avatar[i] = piece;
          break;
        }
      }

      this.loadAvatar();
    },
    loadAvatar() {
      for (let i = 0; i < this.avatar.length; i++) {
        const avatarModule = this.avatar[i];
        const el = document.getElementById(`avatar-${avatarModule.label}`);

        el.setAttribute('data', avatarModule.meta.src);
        el.setAttribute('style', `position: absolute; z-index: ${i + 1}; margin-top: ${avatarModule.meta.y}px`);
        el.setAttribute('width', String(avatarModule.meta.width));
        el.setAttribute('height', String(avatarModule.meta.height));
      }

      setTimeout(() => this.changeColor(), 300);
    },
    changeColor() {
      for (let i = 0; i < this.avatar.length; i++) {
        const avatarModule = this.avatar[i];
        const svg = document.getElementById(`avatar-${avatarModule.label}`).contentDocument;
        if (!svg) continue;

        var components = svg.getElementsByClassName(`${avatarModule.label}-primary`);
        if (components.length == 0) continue;

        for (let i = 0; i < components.length; i++) {
          components[i].setAttribute("fill", this.avatarStyle.furColor.color);
        }
      }
    },
    randomize() {
      for (let i = 0; i < Llama.modules.length; i++) {
        const module = Llama.modules[i];
        if (module.disabled) continue;
        if (module.data.length == 0) continue;

        const randomPiece = Math.floor(Math.random() * module.data.length);
        const picked = new AvatarModule(module.label, module.data[randomPiece]);

        this.avatar[i] = picked;
      }
      this.loadAvatar();
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

.color-menu {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>