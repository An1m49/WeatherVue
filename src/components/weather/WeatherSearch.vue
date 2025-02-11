<script setup lang="ts">
const searchValue = defineModel('search');

</script>

<template>
    <div class="search-wrapper">
        <input
            class="search outline-none text-xl"
            type="text"
            v-model="searchValue"
        >
    </div>
</template>

<style scoped>
.search-wrapper {
    font-size: 18px;
    padding: 10px;
    border-bottom: 3px solid #ececec;
    outline: none;
    position: relative;
}

.search-wrapper::before {
    content: '';
    display: block;
    position: absolute;
    background: #4d4d4d;
    width: 50px;
    height: 5px;
    border-radius: 15px;
    bottom: -4px;
    left: 0;
}
</style>