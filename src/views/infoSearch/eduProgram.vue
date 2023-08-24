<script setup lang="ts">
import { ref, reactive } from "vue";
import { eduProgramData } from "./data";

defineOptions({
  name: "eduProgram"
});

const columns: TableColumnList = [
  {
    label: "课程代码",
    prop: "courseNumber",
    width: 120
  },
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 150
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
    label: "考核方式",
    prop: "examType",
    width: 80
  },
  {
    label: "课程性质",
    prop: "curriculum",
    width: 120
  },
  {
    label: "课程类别",
    prop: "courseType",
    width: 120
  },
  {
    label: "建议修读学期",
    prop: "studyTerm",
    width: 100
  },
  {
    label: "课程信息",
    prop: "courseInfo",
    width: 80
  },
  {
    label: "辅修标识",
    prop: "isMinor",
    width: 80
  },
  {
    label: "专业方向",
    prop: "majorDirection",
    width: 80
  },
  {
    label: "组代码",
    prop: "groupNumber",
    width: 80
  },
  {
    label: "模块代码",
    prop: "moduleNumber",
    width: 80
  },
  {
    label: "通过情况",
    prop: "isPassed",
    width: 80
  },
  {
    label: "起始结束周",
    prop: "startEndWeek",
    width: 100
  },
  {
    label: "是否短学期",
    prop: "isShortTerm",
    width: 80
  }
];

const formModel = reactive({
  grade: "2020",
  college: "网络与通信工程学院",
  major: "光电信息科学与工程",
  studyTerm: "6",
  curriculum: "全部",
  isReplace: false
});

const isDisabled = ref(true);
const isLoading = ref(false);

const termList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const currList = [
  "全部",
  "必修课",
  "校公共选修课",
  "限选课",
  "任选课",
  "集中性实践",
  "课外培养必选",
  "课外培养任选",
  "通识课程必修",
  "通识课程选修"
];

const onSearch = () => {
  isLoading.value = true;
  console.log(formModel);
  isLoading.value = false;
};
</script>

<template>
  <div>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">培养计划</span>
        </div>
      </template>
      <el-form :model="formModel" :inline="true">
        <el-form-item label="年级">
          <el-select
            v-model="formModel.grade"
            :disabled="isDisabled"
            style="width: 80px"
          />
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="formModel.college" :disabled="isDisabled" />
        </el-form-item>
        <el-form-item label="专业">
          <el-select v-model="formModel.major" :disabled="isDisabled" />
        </el-form-item>
        <el-form-item label="建议修读学期">
          <el-select v-model="formModel.studyTerm" style="width: 80px">
            <el-option
              v-for="item in termList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="课程性质">
          <el-select v-model="formModel.curriculum" style="width: 150px">
            <el-option
              v-for="item in currList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="formModel.isReplace" label="可替换课程" />
        </el-form-item>
        <el-form-item>
          <el-button @click="onSearch" type="primary"> 查询 </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">第一专业教学计划</span>
        </div>
      </template>
      <pure-table
        max-height="300"
        :loading="isLoading"
        :data="eduProgramData"
        :columns="columns"
        size="small"
        border
        stripe
      />
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">第二专业教学计划</span>
        </div>
      </template>
      <pure-table
        max-height="300"
        :loading="isLoading"
        :data="[]"
        :columns="columns"
        size="small"
        border
        stripe
      />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
:deep() {
  label {
    font-weight: normal;
  }
}
</style>
