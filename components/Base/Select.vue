<script lang="ts" setup>
const value = defineModel()
const { options } = defineProps<{
    options: Record<string, string>
}>()
</script>
<template>
    <div>
        <select
            v-model="value"
            class="min-w-[220px] h-[40px] mb-5 text-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
            <option value="" disabled>Выберете базу данных</option>
            <option v-for="(value, key) in options" :value="key">
                {{ value }}
            </option>
        </select>
    </div>
</template>
