<script setup lang="ts">
import { ref } from "vue";
import Line from "./components/Line.vue";
defineOptions({
  name: "lifeService"
});
const cardBalance = ref(0);
const cardRecords = [
  {
    content: "消费100元",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "danger"
  },
  {
    content: "消费10元",
    timestamp: "2018-04-03 20:46",
    type: "danger"
  },
  {
    content: "充值150元",
    timestamp: "2018-04-03 20:46",
    type: "success"
  },
  {
    content: "消费50元",
    timestamp: "2018-04-03 20:46",
    type: "danger"
  },
  {
    content: "充值100元",
    timestamp: "2018-04-03 20:46",
    type: "success"
  }
] as any;
cardBalance.value = 114514;
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
        <el-card class="box-card" shadow="never">
          <template #header>
            <div>
              <span class="font-medium">电费使用情况</span>
            </div>
          </template>
          <Line />
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
        <el-card class="box-card" shadow="never">
          <template #header>
            <div class="card-header">
              <span class="font-medium">一卡通记录</span>
              <el-text type="primary">
                余额{{ cardBalance.toFixed(2) }}元</el-text
              >
            </div>
          </template>
          <el-scrollbar height="35vh">
            <el-timeline v-if="cardRecords?.length > 0">
              <el-timeline-item
                v-for="(activity, index) in cardRecords"
                :key="index"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
            <el-empty :image-size="100" v-else />
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 20px 20px 0 !important;
}
:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
