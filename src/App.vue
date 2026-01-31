<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
// Глобальные переменные и логика будут здесь при необходимости
</script>

<style scoped>
main {
  min-height: 90vh;
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
  font-family: var(--font-semiBold);
}
</style>
