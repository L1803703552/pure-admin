<script setup lang="ts">
import { ref } from "vue";
import SchoolYearSelect from "./components/SchoolYearSelect.vue";
import { courseSelData } from "./data";

defineOptions({
  name: "courseSelQuery"
});

const selectRef = ref();
const isLoading = ref(false);
const columns: TableColumnList = [
  {
    label: "选课课号",
    prop: "selNumber",
    width: 130
  },
  {
    label: "课程代码",
    prop: "courseNumber",
    width: 90
  },
  {
    label: "课程名称",
    prop: "courseName",
    width: 150
  },
  {
    label: "课程性质",
    prop: "courseType",
    width: 100
  },
  {
    label: "是否选课",
    prop: "isSel",
    width: 80
  },
  {
    label: "教师姓名",
    prop: "teacherName",
    width: 80
  },
  {
    label: "学分",
    prop: "credit",
    width: 50
  },
  {
    label: "周学时",
    prop: "weekHour",
    width: 80
  },
  {
    label: "上课时间",
    prop: "classTime",
    minWidth: 170
  },
  {
    label: "上课地点",
    prop: "classLocation",
    minWidth: 170
  },
  {
    label: "教材",
    prop: "testBook",
    width: 50
  },
  {
    label: "修读标记",
    prop: "isStudy",
    width: 80
  },
  {
    label: "授课计划上传次数",
    prop: "teachPlanUploadCount",
    width: 80
  },
  {
    label: "授课计划最近上传时间",
    prop: "teachPlanUploadTime",
    width: 80
  },
  {
    label: "授课计划上传文件名",
    prop: "teachPlanUploadName",
    width: 80
  },
  {
    label: "授课计划下载",
    prop: "teachPlanDownload",
    width: 70
  }
];
const showTooltip = ref(false);
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
        <span class="font-medium">学生选课信息</span>
        <div class="filterForm">
          <SchoolYearSelect ref="selectRef" />
          <el-button type="primary" @click="onSearch"> 查询 </el-button>
          <el-switch v-model="showTooltip" active-text="显示完整内容" />
        </div>
      </div>
    </template>
    <pure-table
      :loading="isLoading"
      :data="courseSelData"
      :columns="columns"
      :show-overflow-tooltip="!showTooltip"
      size="small"
      border
      stripe
    />
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
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
