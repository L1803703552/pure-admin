<script setup lang="ts">
import Card from "./components/Card.vue";
import { courseSelData } from "./data";

defineOptions({
  name: "courseSelQuery"
});

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
    width: 130
  },
  {
    label: "课程性质",
    prop: "courseType",
    width: 80
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
    prop: "classTime"
  },
  {
    label: "上课地点",
    prop: "classLocation"
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
const onChange = (schoolYear, term) => {
  // 代码逻辑：调用此方法说明右上角的选项改变了，向网络请求新的内容
  // schoolYear: 学年，term: 学期
  console.log(schoolYear, term);
};
</script>

<template>
  <Card :showSel="true" title="选课信息" @changeSel="onChange">
    <template #default>
      <pure-table
        :data="courseSelData"
        size="small"
        :columns="columns"
        border
        stripe
      />
    </template>
  </Card>
</template>

<style lang="scss" scoped></style>
