<script setup lang="ts">
import { gradeData } from "./data";

defineOptions({
  name: "gradeQuery"
});

const columns: TableColumnList = [
  {
    label: "学年",
    prop: "schoolYear"
  },
  {
    label: "学期",
    prop: "term",
    width: 60
  },
  {
    label: "等级考试名称",
    prop: "gradeName",
    minWidth: 120
  },
  {
    label: "准考证号",
    prop: "admissionNumber"
  },
  {
    label: "考试日期",
    prop: "date"
  },
  {
    label: "成绩",
    prop: "score"
  },
  {
    label: "听力成绩",
    prop: "listenScore"
  },
  {
    label: "阅读成绩",
    prop: "readScore"
  },
  {
    label: "写作成绩",
    prop: "writeScore"
  },
  {
    label: "综合成绩",
    prop: "mixScore"
  }
];
</script>

<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">等级考试详细信息</span>
        </div>
      </template>
      <pure-table
        :data="gradeData"
        size="small"
        :columns="columns"
        border
        stripe
      />
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
