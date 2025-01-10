<script lang="ts" setup generic="T">

const { data } = defineProps<{
  data: T[]
}>();

</script>
<template>
  <table class="w-[86vw] sm:w-[50vw] text-gray-400">
    <thead class="text-xm bg-gray-700 text-gray-400">
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody v-for="(line, i) in data">
      <tr class="border-b border-gray-700" :class="{
        'bg-gray-800': i % 2,
        'bg-gray-900': (i + 1) % 2,
      }">
        <slot name="line" :line="line" :i="i"></slot>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>