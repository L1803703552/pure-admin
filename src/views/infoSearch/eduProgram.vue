<script setup lang="ts">
import { ref } from "vue";
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

const grade = ref("2020");
const college = ref("网络与通信工程学院");
const major = ref("光电信息科学与工程");
const studyTerm = ref("6");
const curriculum = ref("全部");
const isReplace = ref(false);

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
  console.log(
    grade.value,
    college.value,
    major.value,
    studyTerm.value,
    curriculum.value,
    isReplace.value
  );
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
      <div class="text">
        年级：
        <el-select v-model="grade" disabled size="small" style="width: 80px" />
        学院：
        <el-select
          size="small"
          v-model="college"
          style="width: 170px"
          disabled
        />
        专业：
        <el-select size="small" v-model="major" disabled />
      </div>
      <div class="text">
        建议修读学期：
        <el-select size="small" style="width: 50px" v-model="studyTerm">
          <el-option
            v-for="item in termList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        课程性质：
        <el-select size="small" style="width: 115px" v-model="curriculum">
          <el-option
            v-for="item in currList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div style="display: flex; align-items: center; gap: 10px">
        <el-button @click="onSearch" type="primary" size="small"
          >查询</el-button
        >
        <el-checkbox v-model="isReplace" label="可替换课程" size="small" />
      </div>
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">第一专业教学计划</span>
        </div>
      </template>
      <pure-table
        max-height="300"
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
      <pure-table :data="[]" size="small" :columns="columns" border stripe />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
.text {
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 15px;
}
</style>
