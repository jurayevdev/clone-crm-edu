<template>
  <section :class="{ 'text-white': navbar.userNav }">
    <!-- Cards Section -->
    <div v-show="!store.PageProduct">
      <Placeholder1 />
    </div>
    <div v-show="store.PageProduct" class="rounded-lg pt-4">
      <!-- Cards -->
      <div
        class="cards grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:mb-0 mb-5 gap-5 px-2"
      >
        <div class="card" v-for="(i, index) in 4" :key="index">
          <div
            class="relative xl:mb-4 flex flex-col min-w-0 break-words shadow-soft-xl rounded-xl bg-clip-border"
            :class="{
              'bg-[#1e293b]': navbar.userNav,
              'bg-white': !navbar.userNav,
            }"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-row -mx-3">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                    >
                      {{ getCardTitle(index) }}
                    </p>
                    <h5 class="mb-0 font-bold">{{ getCardValue(index) }}</h5>
                  </div>
                </div>
                <div class="basis-1/3">
                  <div
                    class="w-14 h-12 float-right pr-2 flex justify-center items-center rounded-lg bg-gray-1000"
                  >
                    <img
                      v-for="img in getCardImages(index)"
                      :key="img"
                      class="bg-gray-200 h-14 object-cover rounded-lg"
                      :src="img"
                      :alt="'Card image ' + index"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts -->
      <div
        v-if="store.data"
        class="flex lg:flex-row flex-col gap-4 px-2 pb-4 items-center"
      >
        <div
          class="lg:w-1/2 w-full py-4 rounded-lg overflow-hidden"
          :class="{
            'bg-[#1e293b]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <ChartLine class="w-[90%] sm:h-[24rem] h-[16rem] mx-auto" />
        </div>
        <div
          class="lg:w-1/2 w-full py-4 rounded-lg overflow-hidden"
          :class="{
            'bg-[#1e293b]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <UserChart class="w-[90%] sm:h-[24rem] h-[16rem] mx-auto" />
        </div>
      </div>

      <!-- Table 1 -->
      <div v-if="store.data" class="flex lg:flex-row flex-col gap-4 px-2">
        <div
          class="relative overflow-x-auto rounded-lg lg:w-1/2 w-full"
          :class="{
            'bg-[#1e293b]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="flex justify-between items-center px-4 py-3">
            <h1 class="text-lg font-medium">Star Students</h1>
            <i
              class="bx bx-dots-vertical-rounded py-1 cursor-pointer rounded"
            ></i>
          </div>
          <table class="w-full text-sm text-left">
            <thead
              class="text-xs text-black uppercase"
              :class="{
                'bg-[#1e293b] text-white': navbar.userNav,
                'bg-gray-50 text-gray-900': !navbar.userNav,
              }"
            >
              <tr>
                <th scope="col" class="px-4 py-3">ID</th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Marks</th>
                <th scope="col" class="px-6 py-3">Percentage</th>
                <th scope="col" class="px-6 py-3">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in 5"
                :key="i"
                class="hover:bg-gray-50"
                :class="{
                  'bg-[#1e293b] text-white hover:bg-gray-700': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <td class="w-4 p-4">1000</td>
                <th
                  scope="row"
                  class="flex leading-6 items-center py-3 px-6 whitespace-nowrap"
                >
                  <img
                    class="w-10 h-10 rounded-full object-center object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMnibg5Lm3vtp0ILawiFJmrVXHf8I6g1VYQ&usqp=CAU"
                    alt="Neil Sims"
                  />
                  <div class="pl-3">
                    <p class="font-semibold text-sm">Neil Sims</p>
                    <p
                      class="font-normal text-gray-500"
                      :class="{ 'text-gray-200': navbar.userNav }"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </th>
                <td class="px-6 py-3">1185</td>
                <td class="px-6 py-3">
                  <p class="flex items-center">98%</p>
                </td>
                <td class="px-6 py-3">
                  <p class="font-medium text-blue-600 hover:underline">1998</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Student Activity -->
        <div
          class="relative overflow-x-auto rounded-lg lg:w-1/2 w-full"
          :class="{
            'bg-[#1e293b]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="flex justify-between items-center px-4 py-3">
            <h1 class="text-lg font-medium">Student Activity</h1>
            <i
              class="bx bx-dots-vertical-rounded py-1 cursor-pointer rounded"
            ></i>
          </div>
          <table class="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr
                v-for="i in 6"
                :key="i"
                class="flex justify-between pb-2 pl-5 pr-1 hover:bg-gray-50"
                :class="{
                  'bg-[#1e293b] hover:bg-gray-700 text-white': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <th
                  scope="row"
                  class="flex leading-7 items-center whitespace-nowrap"
                >
                  <img
                    class="w-10 h-9 bg-gray-100 rounded-md p-2 object-center object-cover"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/trophy-cup-5254444-4391008.png"
                    alt="Activity Image"
                  />
                  <div class="pl-3">
                    <p>1st place in "Chess”</p>
                    <p class="font-medium text-gray-500 text-xs">
                      John Doe won 1st place in "Chess"
                    </p>
                  </div>
                </th>
                <td class="p-4 mn-w-fit">
                  <div
                    class="flex items-center whitespace-nowrap truncate min-w-fit text-gray-900 bg-red-200 rounded px-2 py-1 text-xs"
                  >
                    1 day ago
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { useNavStore } from "../../stores/toggle";
import { useInfoStore } from "../../stores/dashboard";
import { useRouter } from "vue-router";
import UserChart from '@/components/UsersChart.vue';


const router = useRouter();
const navbar = useNavStore();
const info = useInfoStore();

const store = reactive({
  PageProduct: "",
  data: false,
  cards: ["Xodimlar", "O'quvchilar", "Guruhlar", "To'lovlar"],
});

const getCardTitle = (index) => {
  const titles = ["O'quvchilar", "Xodimlar", "Guruhlar", "To'lovlar"];
  return titles[index];
};

const getCardValue = (index) => {
  const values = [
    info.Students,
    info.Staff,
    info.Groups,
    info.Payment,
  ];
  return values[index];
};

const getCardImages = (index) => {
  const images = [
    "./talaba-icon.svg",
    "./staff-icon.png",
    "./group-icon.svg",
    "./tushum-icon.svg",
  ];
  return [images[index]];
};

const getGuard = async () => {
  if (localStorage.getItem("role") == "_ow_sch_") {
    store.data = true;
  }
};

onBeforeMount(() => {
  getGuard();
  setTimeout(function () {
    store.PageProduct = true;
  }, 500);
});
</script>

<style lang="scss" scoped></style>
