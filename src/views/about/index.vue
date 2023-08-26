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
        网站基于
        <el-link
          class="link"
          href="https://github.com/pure-admin/vue-pure-admin"
          target="_blank"
          >Pure-Admin</el-link
        >开发，弃用了<el-link
          class="link"
          href="https://getbootstrap.com/"
          target="_blank"
          >Bootstrap</el-link
        >、<el-link class="link" href="https://jquery.com/" target="_blank"
          >jQuery</el-link
        >，并骄傲的使用了<el-link
          class="link"
          href="https://cn.vuejs.org/"
          target="_blank"
          >Vue3</el-link
        >、<el-link class="link" href="https://cn.vitejs.dev/" target="_blank"
          >Vite</el-link
        >、<el-link
          class="link"
          href="https://www.tslang.cn/index.html"
          target="_blank"
          >TypeScript</el-link
        >、<el-link
          class="link"
          href="https://element-plus.org/zh-CN/"
          target="_blank"
          >Element-Plus</el-link
        >技术。 网站将ElMessage模块进行了二次封装，并将样式改成了<el-link
          class="link"
          href="https://ant-design.antgroup.com/index-cn"
          target="_blank"
          >Ant Design</el-link
        >风格
        <br />
        网站特色：响应式设计，兼容移动端（二次开发，尚未完全兼容）
      </span>
    </el-card>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">开发信息</span>
        </div>
      </template>
      <PureDescriptions :columns="columns" border :column="2" align="left" />
    </el-card>
  </div>
</template>
<style scoped>
.link {
  font-size: 15px;
}
</style>
