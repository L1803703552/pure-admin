<script setup lang="ts">
import Line from "./components/Line.vue";
defineOptions({
  name: "lifeService"
});
</script>

<template>
  <div>
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
      <el-card class="m-4 box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span class="font-medium">电费使用情况</span>
          </div>
        </template>
        <Line />
      </el-card>
    </el-col>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>
