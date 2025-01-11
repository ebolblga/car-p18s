<script lang="ts" setup generic="T">

// eslint-disable-next-line vue/prefer-import-from-vue
import type { UnwrapRefSimple } from '@vue/reactivity';

const el = ref<HTMLElement | null>(null)
const { data } = defineProps<{
  data: T[],
}>();
const loadedData = ref<T[]>(data.slice(0, 30))
const totalDataLength = data.length;

const loadMore = () => {
  const start = loadedData.value.length;
  const end = Math.min(start + 30, totalDataLength);  // Загружаем максимум 30 элементов

  const nextData = data.slice(start, end);
  loadedData.value.push(...nextData as UnwrapRefSimple<T[]>);
};

useMyInfiniteScroll({
  loadMore,
  scrollingEl: window,
  throttleTime: 20,
  canLoadMore() {
    return loadedData.value.length < totalDataLength
  }
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
