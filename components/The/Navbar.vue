<script setup>
const isPressed = ref(true)
const isActive = ref(0)
</script>

<template>
    <div>
        <nav class="bg-gray-900 px-2 sm:px-4 py-2.5">
            <div
                class="container flex flex-wrap justify-between items-center mx-auto">
                <NuxtLink
                    to="/"
                    class="flex items-center"
                    @click="isActive = 0">
                    <img src="/Logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" >
                </NuxtLink>
                <!-- <NuxtLink to="/" class="text-4xl rounded-lg border-black border-2 bg-white p-[2px] ml-3 road-numbers">
                    <div class="bg-white rounded-md text-black px-3 border-black border-[3px] pb-2">
                        <span>CAP-P18c</span>
                    </div>
                </NuxtLink> -->
                <div class="flex md:order-2">
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                        @click="isPressed = !isPressed">
                        <span class="sr-only">Открыть меню</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div
                    id="navbar-cta"
                    class="justify-between items-center w-full md:flex md:w-auto md:order-1"
                    :class="{ hidden: isPressed }">
                    <ul
                        class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <NuxtLink
                                to="/"
                                title="Генератор регистрационных номеров авто"
                                class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                                :class="{ selected: $route.name == 'index' }"
                                aria-current="page"
                                >Сгенерировать</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/db"
                                title="База данных всех существующих слов"
                                class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                                :class="{ selected: $route.name == 'db' }"
                                >База данных</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/about"
                                title="Подробная документация проекта"
                                class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                                :class="{ selected: $route.name == 'about' }"
                                aria-current="page"
                                >О проекте</NuxtLink
                            >
                        </li>
                        <!-- <li>
              <NuxtLink
                to="/test"
                title="Страничка для тестирования"
                class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                :class="{ selected: ($route.name=='test') }"
                >Тестирование</NuxtLink
              >
            </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.selected {
    --tw-bg-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
}

.selected:hover {
    color: #5f6aff;
}

.road-numbers {
    font-family: 'RoadNumbers', sans-serif;
    line-height: 0.6;
}
</style>
