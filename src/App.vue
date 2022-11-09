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

const questions = ref([
  {
    title: "羨慕別人的酷酷網頁動畫？",
    imgName: "rain",
    theme: "primary",
    class: "mr-auto",
  },
  {
    title: "滿足不了同事的許願？",
    imgName: "normal",
    theme: "warning",
    class: "mx-auto",
  },
  {
    title: "動畫技能樹太雜無從下手？",
    imgName: "question",
    theme: "danger",
    class: "ml-auto",
  },
]);

const levels = ref([
  {
    time: "Week 1",
    title: "The F2E 活動網站設計",
    point: "視差滾動",
    tag: "＃板塊設計",
    link: "#",
    theme: "primary-100",
  },
  {
    time: "Week 2",
    title: "今晚，我想來點點簽",
    point: "Canvas",
    tag: "＃凱鈿行動科技",
    link: "#",
    theme: "warning-100",
  },
  {
    time: "Week 3",
    title: "Scrum 新手村",
    point: "JS draggable",
    tag: "＃鈦坦科技",
    link: "#",
    theme: "danger-100",
  },
]);
</script>

<template>
  <header class="header flex items-center justify-between px-12.5 py-5">
    <h1
      class="text-unshow header-logo bg-m-logo bg-cover bg-center bg-no-repeat"
    >
      logo
    </h1>
    <nav class="mr-9 ml-auto">
      <a
        v-for="(headerLink, idx) in headerLinks"
        :key="headerLink.title"
        :href="headerLink.href"
        :class="{
          'mr-2 border-r border-secondary-100 pr-2 text-lg text-secondary-100':
            headerLinks.length !== idx + 1,
        }"
      >
        {{ headerLink.title }}</a
      >
    </nav>
    <button class="mr-5 rounded-4xl bg-warning-100 py-2 px-6 text-lg">
      註冊報名
    </button>
    <button class="rounded-4xl bg-warning-100 py-2 px-6 text-lg">登入</button>
  </header>
  <main class="pb-28 pt-27">
    <img src="public/images/logo/logo.svg" alt="logo" class="mx-auto mb-12" />
    <div class="rounded-5xl border-4 border-info-100">
      <section class="block-1 pt-24">
        <img
          src="public/images/block1/tv.svg"
          alt="logo"
          class="mx-auto mb-18"
        />
        <div class="block-1-title mb-25 flex justify-between">
          <span class="text-point text-3.5xl font-bold before:bg-primary-100"
            ><span>Frontend</span></span
          >
          <span class="text-4xl font-bold">x</span>
          <span class="text-point text-3.5xl font-bold before:bg-warning-100"
            ><span>UI Design</span></span
          >
        </div>
        <div class="marquee bg-warning-100 bg-opacity-70 py-4 px-7">
          <span class="mr-9">THE F2E</span>
          <span class="mr-9">You are more than what you think you are.</span>
        </div>
      </section>
      <section class="block-2">
        <div class="mb-17 text-center text-4xl">你是否也有以下困擾？</div>
        <ul class="question-card-list flex flex-col">
          <li
            v-for="(question, idx) in questions"
            :key="idx"
            :class="`${question.class}`"
          >
            <div class="question-card" :class="`${question.theme}`">
              <div class="question-card-title mb-4">
                {{ question.title }}
                <img src="public/images/block2/icon-search.svg" alt="search" />
              </div>
              <img
                :src="`public/images/block2/${question.imgName}.svg`"
                :alt="question.imgName"
                class="mx-auto"
              />
            </div>
          </li>
        </ul>
      </section>
      <section class="block-3 relative border-b-4 border-info-100">
        <img
          src="/public/images/block3/gray.svg"
          alt="block-3-title-bg"
          class="absolute inset-0"
        />
        <div class="block-3-title text-center text-4xl">
          你是否也有以下困擾？
        </div>
        <div class="block-3-content flex items-center justify-between">
          <div class="flex flex-col items-center">
            <span
              class="text-point mb-11 text-2xl font-bold before:bg-danger-100"
              ><span>前端工程師</span></span
            >
            <img src="public/images/block3/the-f2e.svg" alt="the-f2e" />
          </div>
          <div class="text-xl">x</div>
          <div class="flex flex-col items-center">
            <span
              class="text-point mb-11 text-2xl font-bold before:bg-warning-100"
              ><span>UI 設計師</span></span
            >
            <img src="public/images/block3/ui-designer.svg" alt="ui-designer" />
          </div>
        </div>
      </section>
      <section class="block-4 relative">
        <img
          src="/public/images/block4/wave-yellow-top.svg"
          alt="block-4-top-bg"
          class="absolute inset-0"
        />
        <div class="block-4-title text-center text-4xl">
          年度最強合作，三大主題來襲
        </div>
        <div
          class="border-b-2 border-secondary-200 pb-10 text-center text-2xl text-secondary-200"
        >
          各路廠商強強聯手<br />
          共同設計出接地氣的網頁互動挑戰關卡
        </div>
        <ul class="px-32 pb-72">
          <li
            v-for="(level, idx) in levels"
            :key="idx"
            :class="{ 'mb-18': idx + 1 !== levels.length }"
          >
            <div
              class="level-card relative w-[416px] rounded-xl border-2 border-secondary-100 bg-white p-7 text-secondary-100"
            >
              <div
                class="absolute h-[50px] w-[150px] bg-white after:top-[-16px] after:right-[-66px] after:block after:h-[8px] after:w-full after:rotate-[225deg] after:rounded-[40px] after:bg-primary-100 after:content-['']"
              ></div>
              <div
                class="absolute h-[50px] w-[150px] bg-white after:bottom-[-16px] after:left-[-66px] after:block after:h-[8px] after:w-full after:rotate-[45deg] after:rounded-[40px] after:bg-primary-100 after:content-['']"
              ></div>
              <div class="level-card-subtitle mb-1 text-xl">
                {{ level.time }}
              </div>
              <div
                class="level-card-title mb-5 border-b-2 border-black pb-5 text-2xl"
              >
                {{ level.title }}
              </div>
              <div
                class="level-card-content mb-5 flex items-center justify-between"
              >
                <span
                  class="text-point text-xl"
                  :class="`before:text-${level.theme}`"
                  ><span>{{ level.point }}</span></span
                >
                <span class="text-base">{{ level.tag }}</span>
              </div>
              <a
                :href="level.link"
                target="_blank"
                class="ml-auto block w-fit rounded-40 bg-info-100 py-2 px-4 text-white"
              >
                查看關卡細節
              </a>
            </div>
          </li>
        </ul>

        <img
          src="/public/images/block4/wave-yellow-bottom.svg"
          alt="block-4-bottom-bg"
          class="absolute left-0 bottom-0 right-0"
        />
      </section>
    </div>
  </main>
</template>

<style scoped></style>
