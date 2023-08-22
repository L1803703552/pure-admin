<script setup lang="ts">
import Card from "./components/Card.vue";
import { examData } from "./data";

defineOptions({
  name: "examQuery"
});

const columns: TableColumnList = [
  {
    label: "选课课号",
    prop: "selNumber",
    width: 280
  },
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 180
  },
  {
    label: "姓名",
    prop: "name",
    minWidth: 150
  },
  {
    label: "考试时间",
    prop: "examDate",
    minWidth: 280
  },
  {
    label: "考试地点",
    prop: "examAddress",
    minWidth: 180
  },
  {
    label: "考试形式",
    prop: "examType",
    width: 90
  },
  {
    label: "座位号",
    prop: "seatNumber",
    width: 70
  },
  {
    label: "校区",
    prop: "examCampus",
    width: 90
  }
];
const onChange = (schoolYear, term) => {
  // 代码逻辑：调用此方法说明右上角的选项改变了，向网络请求新的内容
  // schoolYear: 学年，term: 学期
  console.log(schoolYear, term);
};
</script>

<template>
  <Card :showSel="true" title="考试详细信息" @changeSel="onChange">
    <template #default>
      <pure-table :data="examData" :columns="columns" border stripe />
    </template>
  </Card>
</template>

<style lang="scss" scoped></style>
