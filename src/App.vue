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
    theme: "primary",
  },
  {
    time: "Week 2",
    title: "今晚，我想來點點簽",
    point: "Canvas",
    tag: "＃凱鈿行動科技",
    link: "#",
    theme: "warning",
  },
  {
    time: "Week 3",
    title: "Scrum 新手村",
    point: "JS draggable",
    tag: "＃鈦坦科技",
    link: "#",
    theme: "danger",
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
          <span
            class="text-point text-3.5xl font-bold before:w-[196px] before:bg-primary-100"
            ><span>Frontend</span></span
          >
          <span class="text-4xl font-bold">x</span>
          <span
            class="text-point text-3.5xl font-bold before:w-[196px] before:bg-warning-100"
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
              class="text-point mb-11 text-2xl font-bold before:w-[196px] before:bg-danger-100"
              ><span>前端工程師</span></span
            >
            <img src="public/images/block3/the-f2e.svg" alt="the-f2e" />
          </div>
          <div class="text-xl">x</div>
          <div class="flex flex-col items-center">
            <span
              class="text-point mb-11 text-2xl font-bold before:w-[196px] before:bg-warning-100"
              ><span>UI 設計師</span></span
            >
            <img src="public/images/block3/ui-designer.svg" alt="ui-designer" />
          </div>
        </div>
      </section>
      <section class="block-4 relative border-b-4 border-info-100">
        <img
          src="/public/images/block4/wave-yellow-top.svg"
          alt="block-4-top-bg"
          class="absolute inset-0"
        />
        <div class="block-4-title text-center text-4xl">
          年度最強合作，三大主題來襲
        </div>
        <div
          class="mx-auto mb-[62.5px] max-w-[853px] border-b-2 border-secondary-200 pb-10 text-center text-2xl text-secondary-200"
        >
          各路廠商強強聯手<br />
          共同設計出接地氣的網頁互動挑戰關卡
        </div>
        <ul class="flex flex-col px-32 pb-72">
          <li
            v-for="(level, idx) in levels"
            :key="idx"
            :class="{
              'mb-18': idx + 1 !== levels.length,
              'mx-auto': idx === 1,
              'ml-auto': idx === 2,
            }"
          >
            <div
              class="level-card relative w-[416px] rounded-xl border-2 border-secondary-100 bg-white p-7 text-secondary-100"
              :class="`level-card-${level.theme}`"
            >
              <div
                class="level-card-decoration absolute top-[-13px] right-[-66px] h-[50px] w-[150px] rotate-[225deg] bg-white after:block after:h-[8px] after:w-full after:rounded-[40px] after:content-['']"
              ></div>
              <div
                class="level-card-decoration absolute bottom-[-17px] left-[-65px] h-[50px] w-[150px] rotate-[45deg] bg-white after:block after:h-[8px] after:w-full after:rounded-[40px] after:content-['']"
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
                <span class="text-point text-xl"
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
      <section
        class="block-5 border-b-4 border-info-100 bg-[url('public/images/block5/water.svg')] bg-contain bg-bottom bg-no-repeat pt-[90.5px] pb-[84px]"
      >
        <div
          class="mb-[127px] text-center text-4xl font-bold text-secondary-100"
        >
          挑戰流程
        </div>
        <ul class="mb-[290px]">
          <li class="mb-9 flex w-fit flex-col items-center">
            <span
              class="text-point mb-5 text-2xl font-bold before:w-[306px] before:bg-warning-100"
            >
              <span>Sign up | 報名期間</span>
            </span>
            <span class="text-xl">10/3(四) 11:00</span>
            <span class="rotate-90 text-xl leading-4">~</span>
            <span class="mb-3 text-xl">11/6(日) 23:59</span>
            <span>＃截止前可修改報名組別</span>
          </li>
          <li class="ml-auto mb-9 flex w-fit flex-col items-center">
            <span
              class="text-point mb-5 text-2xl font-bold before:w-[306px] before:bg-warning-100"
            >
              <span>Start ! | 開賽時間</span>
            </span>
            <span class="mb-0.5 text-xl">10/31(一) UI、團體組開賽</span>
            <span class="text-xl">11/7(一) 前端組開賽</span>
          </li>
          <li class="mb-9 flex w-fit flex-col items-center">
            <span
              class="text-point mb-5 text-2xl font-bold before:w-[306px] before:bg-warning-100"
            >
              <span>Upload | 登錄作品</span>
            </span>
            <span class="text-xl">10/31(一) 中午12:00</span>
            <span class="rotate-90 text-xl leading-4">~</span>
            <span class="mb-3 text-xl">11/28(一) 中午12:00 </span>
            <span>＃依賽程登錄作品</span>
          </li>
          <li class="ml-auto flex w-fit flex-col items-center">
            <span
              class="text-point mb-5 text-2xl font-bold before:w-[306px] before:bg-warning-100"
            >
              <span>Stream | 線上直播</span>
            </span>
            <span class="mb-3 text-xl">11/3 ~ 11/24 (每週四)</span>
            <span>＃主題豐厚獎金等著你！</span>
          </li>
        </ul>
        <div>
          <div class="mb-3 flex items-center justify-center">
            <img
              src="public/images/block5/icon-alert.svg"
              alt="alert"
              class="mr-3"
            />
            <span class="text-2xl font-black text-info-100">Notice</span>
          </div>
          <p
            class="mx-auto mb-28 max-w-[856px] border-b border-info-200 pb-[30px] text-center text-xl tracking-widest text-info-100"
          >
            每個主題提供 <span class="font-bold">1 週開發時間</span> <br />
            未於 <span class="font-bold">隔週一中午12:00前</span> 登錄作品者
            <br />
            當週挑戰即為失敗！
          </p>
          <ul class="block-5-date-list flex justify-center">
            <li
              class="relative w-4/12 text-center before:mx-auto before:block before:h-[12px] before:w-[12px] before:rounded-full before:bg-info-200 before:content-['']"
            >
              <span
                class="absolute top-[-40px] -translate-x-1/2 text-xl font-bold text-info-100"
                >每週一中午12點</span
              >
              <div
                class="mx-auto mt-[22px] w-fit translate-x-1/2 rounded-xl bg-white bg-opacity-60 px-4 py-3 text-info-100"
              >
                <div class="mb-2 text-lg font-bold">獲得新主題</div>
                <ul>
                  <li class="text-center"># UI 組</li>
                  <li class="text-center"># 團體組</li>
                </ul>
              </div>
            </li>
            <li
              class="relative w-4/12 text-center before:mx-auto before:block before:h-[12px] before:w-[12px] before:rounded-full before:bg-info-200 before:content-[''] after:absolute after:left-[-50%] after:top-[4px] after:h-[3px] after:w-full after:bg-info-200 after:content-['']"
            >
              <span
                class="absolute top-[-40px] -translate-x-1/2 text-xl font-bold text-info-100"
                >隔週一中午12點</span
              >
              <div
                class="mx-auto mt-[22px] flex w-fit translate-x-2 rounded-xl bg-white bg-opacity-60 px-4 text-info-100"
              >
                <div class="py-3 pr-4">
                  <div class="mb-2 text-lg font-bold">登錄作品</div>
                  <ul>
                    <li class="text-center"># UI 組</li>
                    <li class="text-center"># 團體組</li>
                  </ul>
                </div>
                <div
                  class="border-l-2 border-dashed border-secondary-500 py-3 pl-3"
                >
                  <div class="mb-2 text-lg font-bold">領取設計稿</div>
                  <ul>
                    <li class="text-center"># 團體組</li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="relative w-4/12 text-center before:mx-auto before:block before:h-[12px] before:w-[12px] before:rounded-full before:bg-info-200 before:content-[''] after:absolute after:left-[-50%] after:top-[4px] after:h-[3px] after:w-full after:bg-info-200 after:content-['']"
            >
              <span
                class="absolute top-[-40px] -translate-x-1/2 text-xl font-bold text-info-100"
              >
                再隔週一中午12點
              </span>
              <div
                class="mx-auto mt-[22px] w-fit -translate-x-1/2 rounded-xl bg-white bg-opacity-60 px-4 py-3 text-info-100"
              >
                <div class="mb-2 text-lg font-bold">登錄作品</div>
                <ul>
                  <li class="text-center"># UI 組</li>
                  <li class="text-center"># 團體組</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="block-6 border-b-4 border-info-100 py-[88px]">
        <div
          class="mb-[88px] text-center text-4xl font-bold leading-[54px] tracking-king text-secondary-100"
        >
          區區修煉已經沒辦法滿足了嗎？<br />
          還有比賽等著你！
        </div>
        <div
          class="relative before:absolute before:top-[13px] before:left-[15px] before:z-[-1] before:block before:h-full before:w-full before:bg-primary-100 before:content-['']"
        >
          <div class="rounded-t-2xl bg-secondary-400 py-5 px-8">
            <div
              class="mr-4 inline-block h-4 w-4 rounded-full bg-danger-200"
            ></div>
            <div
              class="mr-4 inline-block h-4 w-4 rounded-full bg-warning-500"
            ></div>
            <div class="inline-block h-4 w-4 rounded-full bg-success-100"></div>
          </div>
          <div class="rounded-b-2xl border-[1px] bg-white p-8">
            <div class="mb-4 text-2xl font-bold tracking-widest">評審機制</div>
            <ul>
              <li class="mb-2 text-lg">
                初選 | 將由六角學院前端、UI 評審進行第一波篩選。
              </li>
              <li class="text-lg">
                決選 | 由六角學院與贊助廠商討論，進行最後篩選，並於12/30(五)
                由評審進行直播公布名單！
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
