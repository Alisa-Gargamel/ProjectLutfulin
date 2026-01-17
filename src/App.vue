<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
// пока логики нет
</script>

<style scoped>
main {
  min-height: 90vh;
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  margin: 0%;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>

<style>
@font-face{
  font-family: "Montserrat-Medium";
  src: url("./assets/font/Montserrat-Medium.woff2") format("woff2");
  font-weight:400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-Regular";
  src: url("./assets/font/Montserrat-Regular.woff2") format("woff2");
  font-weight: 400;      /* regular */
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat-Light";
  src: url("./assets/font/Montserrat-Light.woff2") format("woff2");
  font-weight: 300;          /* light */
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-Bold";
  src: url("./assets/font/Montserrat-Bold.woff2") format("woff2");
  font-weight: 700;          /* bold */
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-SemiBold";
  src: url("./assets/font/Montserrat-SemiBold.woff2") format("woff2");
  font-weight: 600;        /* semi-bold */
  font-style: normal;
  font-display: swap;
}

:root {
  --font-regular: 'Montserrat-Regular', system-ui, -apple-system, sans-serif;
  --font-medium: 'Montserrat-Medium', system-ui, -apple-system, sans-serif;
  --font-light: 'Montserrat-Light', system-ui, -apple-system, sans-serif;
  --font-bold: "Montserrat-Bold", system-ui, -apple-system, sans-serif;
  --font-semiBold: "Montserrat-SemiBold", system-ui, -apple-system, sans-serif;

  /* ЦВЕТА */
  
  --color-button: rgba(15, 23, 42, 1);
  --color-text: rgba(0, 0, 0, 1);
  --color-tab-inactive: rgba(226, 232, 240, 1);
  --color-tab-inactive-text: rgba(100, 116, 139, 1);
  --color-grey-text: rgba(113, 113, 123, 1);
  --color-bg: rgba(255, 255, 255, 1);
  --color-shadow: rgba(0, 0, 0, 0.19);
}
</style>
