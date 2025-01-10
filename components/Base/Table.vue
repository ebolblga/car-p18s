<script lang="ts" setup generic="T">
import type { UnwrapRefSimple } from '@vue/reactivity';


const el = ref<HTMLElement | null>(null)
const { data } = defineProps<{
  data: T[]
}>();
const loadedData = ref<T[]>(data.slice(0, 20))
let lastScrollTop = 0;
function onScroll(e: Event) {
  console.log(el.value?.getBoundingClientRect().top! - window.screenY)
  const scrollDistance = window.innerHeight - 50;
  if (window.scrollY > lastScrollTop + scrollDistance) {
    if (loadedData.value.length > data.length - 1) return null;
    lastScrollTop = window.scrollY;
    // console.log(window.scrollY, lastScrollTop)
    loadedData.value.push(...data.slice(loadedData.value.length, loadedData.value.length + Math.ceil(window.innerHeight / 75 + 1)) as UnwrapRefSimple<T>[])
  }
}
onMounted(() => {
  document.addEventListener("scroll", onScroll);
})
onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
})

</script>
<template>
  <table class="w-[86vw] sm:w-[50vw] text-gray-400">
    <thead class="text-xm bg-gray-700 text-gray-400">
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody ref="el">
      <tr class="border-b border-gray-700" v-for="(line, i) in loadedData" :key="i" :class="{
        'bg-gray-800': i % 2,
        'bg-gray-900': (i + 1) % 2,
      }">
        <slot name="line" :line="line" :i="i"></slot>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>