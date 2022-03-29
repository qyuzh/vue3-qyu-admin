<script setup>
import { onMounted, ref } from 'vue'
import Player from 'xgplayer'
import poster from '@/assets/poster.png'
import { vIntersectionObserver } from '@vueuse/components'

const disabled = ref(true)
const videoRoot = ref(null)

onMounted(() => {
  new Player({
    id: 'mse',
    url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    fluid: true,
    poster,
    autoplay: true,
    loop: true,
    volume: 0,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
  })
})

function onIntersectionObserer([{ isIntersecting }]) {
  disabled.value = isIntersecting
}
</script>

<template>
  <div ref="videoRoot" class="video-root">
    <div id="vedioContainer">
      <teleport to="body" :disabled="disabled">
        <div :class="{ small: !disabled }">
          <div id="mse"></div>
        </div>
      </teleport>
    </div>

    <div
      id="anchor"
      v-intersection-observer="[onIntersectionObserer, { videoRoot }]"
    ></div>

    <div style="margin-top: 20px; height: 2000px">
      Teleport Usage: Scroll please!
    </div>
  </div>
</template>

<style lang="scss">
.small {
  position: fixed;
  right: 40px;
  bottom: 20px;
  width: 320px;
  height: 180px;
}

.video-root {
  padding: 8px;
  #vedioContainer {
    height: 450px;
    width: 800px;
  }
}
</style>
