<script lang="ts" setup generic="T">

// eslint-disable-next-line vue/prefer-import-from-vue
import type { UnwrapRefSimple } from '@vue/reactivity';

const el = ref<HTMLElement | null>(null)
const { data,
  tableClass = "w-[86vw] sm:w-[50vw] text-gray-400",
  headClass = "text-xm bg-gray-700 text-gray-400",
  lineClass = "border-b border-gray-700",
  lineDynamicClass = (i) => i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
} = defineProps<{
  data: T[],
  tableClass?: string,
  headClass?: string,
  lineClass?: string,
  lineDynamicClass?: (i: number, line: UnwrapRefSimple<T>) => string
}>();
const loadedData = ref<T[]>(data.slice(0, 200))
const totalDataLength = data.length;

const loadMore = () => {
  const start = loadedData.value.length;
  const end = Math.min(start + 100, totalDataLength);  // Загружаем максимум 30 элементов

  const nextData = data.slice(start, end);
  loadedData.value.push(...nextData as UnwrapRefSimple<T[]>);
};

useMyInfiniteScroll({
  loadMore,
  scrollingEl: window,
  throttleTime: 10,
  distanceFromBottomForLoad: 1000,
  canLoadMore() {
    return loadedData.value.length < totalDataLength
  }
})
</script>
<template>
  <table :class="tableClass">
    <thead :class="headClass">
      <tr>
        <slot name="head" />
      </tr>
    </thead>
    <tbody ref="el">
      <tr v-for="(line, i) in loadedData" :key="i" :class="lineClass + ' ' + lineDynamicClass(i, line)">
        <slot name="line" :line="line" :i="i" />
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
