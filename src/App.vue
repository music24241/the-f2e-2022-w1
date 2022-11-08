<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import { ref } from "vue";

const headerLinks = ref([
  { title: "關卡資訊", href: "https://2022.thef2e.com/news" },
  { title: "作品列表", href: "https://2022.thef2e.com/works" },
  { title: "攻略資源", href: "https://hexschool.tw/OsAcp" },
  { title: "求職專區", href: "https://2022.thef2e.com/jobs" },
]);
</script>

<template>
  <header class="header px-12.5 py-5 flex justify-between">
    <h1 class="bg-logo bg-cover bg-no-repeat bg-center">logo</h1>
    <nav class="mr-9">
      <a
        v-for="(headerLink, idx) in headerLinks"
        :key="headerLink.title"
        :href="headerLink.href"
        :class="{
          'pr-2 mr-2 border-r text-secondary-100 border-secondary-100 text-lg':
            headerLinks.length !== idx + 1,
        }"
      >
        {{ headerLink.title }}</a
      >
    </nav>
  </header>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
