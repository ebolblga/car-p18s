<script lang="ts" setup>
const { popupShown = false } = defineProps<{ popupShown: boolean }>()
</script>
<template>
  <div
    class="inline-block absolute z-10 w-64 ml-8 mt-[-40px] text-sm font-light rounded-lg border shadow-sm text-gray-400 border-gray-600 bg-gray-800"
    :class="{ hidden: !popupShown }">
    <div class="py-2 px-3 rounded-t-lg border-b border-gray-600 bg-gray-700">
      <h3 class="font-semibold text-white">
        <slot name="title"></slot>
      </h3>
    </div>
    <div class="py-2 px-3">
      <slot name="content"></slot>
    </div>
    <div data-popper-arrow></div>
  </div>
</template>