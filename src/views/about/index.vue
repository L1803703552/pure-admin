<script setup lang="ts">
import { useColumns } from "./columns";
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "about"
});
const { columns } = useColumns();
</script>

<template>
  <div>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">关于网站</span>
        </div>
      </template>
      <span style="font-size: 15px">
        网站基于<el-link
          class="link"
          href="https://github.com/pure-admin/vue-pure-admin"
          target="_blank"
          >Pure-Admin</el-link
        >开发，并骄傲的使用了Vue3、Vite、TypeScript、Element-Plus技术。
        <br />
        网站特色：响应式设计，兼容移动端
      </span>
    </el-card>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">开发信息</span>
        </div>
      </template>
      <PureDescriptions :columns="columns" border :column="3" align="left" />
    </el-card>
  </div>
</template>
<style scoped>
.link {
  font-size: 15px;
}
</style>
