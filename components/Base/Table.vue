<script lang="ts" setup generic="T">

// eslint-disable-next-line vue/prefer-import-from-vue
import type { UnwrapRefSimple } from '@vue/reactivity';


const el = ref<HTMLElement | null>(null)
const { data, lineHeight = 75 } = defineProps<{
  data: T[],
  lineHeight: number
}>();
const loadedData = ref<T[]>(data.slice(0, 20))
let lastScrollTop = 0;
function onScroll() {
  const scrollDistance = window.innerHeight - 50;
  if (window.scrollY > lastScrollTop + scrollDistance) {
    const loadedCount = loadedData.value.length;
    if (loadedCount > data.length - 1) return null;
    lastScrollTop = window.scrollY;
    const needLoadCount = Math.ceil(window.innerHeight / lineHeight);
    loadedData.value.push(...data.slice(loadedCount, loadedCount + needLoadCount) as UnwrapRefSimple<T>[])
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
        <slot name="head" />
      </tr>
    </thead>
    <tbody ref="el">
      <tr v-for="(line, i) in loadedData" :key="i" class="border-b border-gray-700" :class="{
        'bg-gray-800': i % 2,
        'bg-gray-900': (i + 1) % 2,
      }">
        <slot name="line" :line="line" :i="i" />
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
