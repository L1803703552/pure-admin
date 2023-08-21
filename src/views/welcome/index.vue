<script setup lang="ts">
import { ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import TypeIt from "@/components/ReTypeit";
import Description from "./components/Description.vue";
import Line from "./components/Line.vue";
import Pie from "./components/Pie.vue";
import Bar from "./components/Bar.vue";

defineOptions({
  name: "Welcome"
});

const loading = ref<boolean>(true);
const { height } = useWindowSize();

setTimeout(() => {
  loading.value = !loading.value;
}, 800);

const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});
</script>

<template>
  <div>
    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-card
          shadow="never"
          :style="{ height: `calc(${height}px - 35vh - 250px)` }"
        >
          <template #header>
            <TypeIt
              :class="titleClass"
              :className="'type-it2'"
              :values="[`通知公告`]"
              :cursor="false"
              :speed="120"
            />
          </template>
          <div>注意：页面部分数据为测试数据，并非实际数据</div>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-card
          shadow="never"
          :style="{ height: `calc(${height}px - 35vh - 250px)` }"
        >
          <template #header>
            <TypeIt
              :class="titleClass"
              :className="'type-it1'"
              :values="['个人信息']"
              :cursor="false"
              :speed="120"
            />
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <el-scrollbar :height="`calc(${height}px - 35vh - 340px)`">
                <Description />
              </el-scrollbar>
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="8"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <TypeIt
              :class="titleClass"
              :className="'type-it4'"
              :values="['近学期综测排名']"
              :cursor="false"
              :speed="120"
            />
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Line />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="8"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <TypeIt
              :class="titleClass"
              :className="'type-it3'"
              :values="['已获学分分布']"
              :cursor="false"
              :speed="120"
            />
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Pie />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="8"
        :xl="8"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <TypeIt
              :class="titleClass"
              :className="'type-it5'"
              :values="['各类学分修读情况']"
              :cursor="false"
              :speed="120"
            />
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Bar />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}

.main-content {
  margin: 20px 20px 0 !important;
}
</style>
