<script setup lang="ts">
import { ref } from "vue";
import { schoolYear, term } from "./data";
import { clone } from "@pureadmin/utils";
import SchoolYearSelect from "./components/SchoolYearSelect.vue";
defineOptions({
  name: "timeTable"
});

const selectRef = ref();
const isLoading = ref(false);

// 课表查询不存在“全部”选项，由于是从data里面导出的，在实际Ajax请求的时候要去掉
const schoolYearCopy = clone(schoolYear, true);
const termCopy = clone(term, true);
if (schoolYearCopy[0].value === "all") {
  schoolYearCopy.shift();
  termCopy.shift();
}

const onSearch = () => {
  isLoading.value = true;
  console.log(selectRef.value.schoolYearValue, selectRef.value.termValue);
  isLoading.value = false;
};
</script>

<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">学生个人课程表</span>
        <div class="filterForm">
          <SchoolYearSelect
            :schoolYear="schoolYearCopy"
            :term="termCopy"
            ref="selectRef"
          />
          <el-button type="primary" @click="onSearch"> 查询 </el-button>
        </div>
      </div>
    </template>
    123
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .filterForm {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
