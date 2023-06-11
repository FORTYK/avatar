<template>
    <div class="avatar-maker-wrapper">
      <div class="avatar-meta-background">
        <span class="meta">256x256x</span>
        <div class="avatar-shape">
          <div class="avatar-background" :style="avatarStyle">
            <div class="avatar-wrapper">
              <object id="avatar-ears" data="src/assets/ears.svg" style="margin-top: 30px" width="106" height="91"></object>
              <object :style="avatarBodyStyle" id="avatar-body"></object>
              <object id="avatar-head" data="src/assets/head.svg" style="margin-top: 100px" width="96" height="156"></object>
              <object id="avatar-hair" data="src/assets/hair.svg" style="margin-top: 100px" width="92" height="156"></object>
              <object id="avatar-mouth" data="src/assets/mouth.svg" style="margin-top: 162px" width="39" height="51"></object>
              <object :style="avatarEyesStyle" id="avatar-eyes"></object>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button @click="changeBody">body</button>
        <button @click="changeEyes">eyes</button>
      </div>
      <SwatchPicker :swatches="backgroundSwatch" @swatch-picker-event="setBackgroundColor"/>
    </div>
</template>
<script lang="ts">
import SwatchPicker from './SwatchPicker.vue'
import SwatchBackground from './common/SwatchBackground'

interface AvatarPiece{
  src: {
    type: String,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
}

const bodyPiece: AvatarPiece[] = 
[
  {
    src: 'src/assets/thumb.svg',
    y: 100,
    width: 92,
    height: 156
  },
  {
    src: 'src/assets/boll.svg',
    y: 100,
    width: 181,
    height: 181
  }
];

const eyePiece: AvatarPiece[] = 
[
  {
    src: 'src/assets/curious.svg',
    y: 129,
    width: 100,
    height: 33
  },
  {
    src: 'src/assets/angry.svg',
    y: 132,
    width: 124,
    height: 45
  },
  {
    src: 'src/assets/tired.svg',
    y: 129,
    width: 100,
    height: 42
  } 
];

export default {
  data() {
    return {
      bodyIndex: 0,
      eyeIndex: 0,
      avatarStyle: {
        backgroundColor: '#C38C8C',
        backgroundImage: ''
      },
      avatarBodyStyle: {
        marginTop: 0,
        marginLeft: 0
      },
      avatarEyesStyle: {
        marginTop: 0,
        marginLeft: 0
      },
      backgroundSwatch: SwatchBackground
    }
  },
  mounted() {
    const body = document.getElementById('avatar-body');
    const eyes = document.getElementById('avatar-eyes');
    this.loadAvatar(body, bodyPiece, this.bodyIndex);
    this.loadAvatar(eyes, eyePiece, this.eyeIndex);
  },
  components: {
    SwatchPicker,
  },
  methods: {
    setBackgroundColor(swatch: Swatch) {
      this.avatarStyle.backgroundColor = '';
      this.avatarStyle.backgroundImage = '';

      if(!swatch.type){
        this.avatarStyle.backgroundColor = swatch.color;
      } else {
        this.avatarStyle.backgroundImage = swatch.color;
      }
    },
    changeBody() {
      this.bodyIndex = ((this.bodyIndex + 1) % bodyPiece.length);
      const body = document.getElementById('avatar-body');
      this.avatarBodyStyle.marginTop = bodyPiece[this.bodyIndex].y + 'px';
      this.avatarBodyStyle.marginLeft = bodyPiece[this.bodyIndex].x + 'px';
      this.loadAvatar(body, bodyPiece, this.bodyIndex);
    },
    changeEyes() {
      this.eyeIndex = ((this.eyeIndex + 1) % eyePiece.length);
      const eye = document.getElementById('avatar-eyes');
      this.avatarEyesStyle.marginTop = eyePiece[this.eyeIndex].y + 'px';
      this.avatarEyesStyle.marginLeft = eyePiece[this.eyeIndex].x + 'px';
      this.loadAvatar(eye, eyePiece, this.eyeIndex);
    },
    loadAvatar(el: Element, piece: AvatarPiece, index: number) {
      el.setAttribute('data', piece[index].src);
      el.setAttribute('width', piece[index].width);
      el.setAttribute('height', piece[index].height);
    }
  }
}
</script>
<style scoped>
.avatar-maker-wrapper {
}

.avatar-wrapper{
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.avatar-wrapper > *{
  position:absolute;
}
.avatar{
  position:absolute;
}

.avatar-body-wrapper{
  /*background-color: #b0ada3;
  background-color: #f5f5dc;*/
  width: 100%;
  height: 180px;
  outline: 1px solid gray;
}

span.meta {
  display: none;
  position:absolute;
}

.avatar-meta-background:hover span.meta {
  display: block;
}

.avatar-meta-background {
  background-color: gray;
  border:1px solid gray;
}

.avatar-shape {
  width: 256px;
  height: 256px;
}

.avatar-background{
  width: 100%;
  height: 100%;
}
</style>