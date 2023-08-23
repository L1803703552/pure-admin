<script setup lang="ts">
import { ref } from "vue";
import { schoolYear, term, scoreData } from "./data";

defineOptions({
  name: "scoreQuery"
});

const schoolYearValue = ref(schoolYear[0].value);
const termValue = ref(term[0].value);
const isLoading = ref(false);
const isHighest = ref(false);

const columns: TableColumnList = [
  {
    label: "学年",
    prop: "schoolYear",
    width: 100
  },
  {
    label: "学期",
    prop: "term",
    width: 50
  },
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
    label: "课程性质",
    prop: "curriculum",
    width: 120
  },
  {
    label: "课程归属",
    prop: "courseOwner",
    width: 120
  },
  {
    label: "学分",
    prop: "credit",
    width: 50
  },
  {
    label: "绩点",
    prop: "gp",
    width: 60
  },
  {
    label: "成绩",
    prop: "score",
    width: 60
  },
  {
    label: "辅修标记",
    prop: "isMinor",
    width: 80
  },
  {
    label: "补考成绩",
    prop: "makeUpScore",
    width: 80
  },
  {
    label: "重修成绩",
    prop: "reBuildScore",
    width: 80
  },
  {
    label: "学院名称",
    prop: "college",
    width: 170
  },
  {
    label: "备注",
    prop: "notes",
    width: 150
  },
  {
    label: "重修标记",
    prop: "isReBuild",
    width: 80
  },
  {
    label: "课程英文名称",
    prop: "courseEngName",
    width: 150
  }
];

const onSearch = () => {
  isLoading.value = true;
  // 请求数据
  console.log(schoolYearValue.value, termValue.value, isHighest.value);
  isLoading.value = false;
};
</script>

<template>
  <div>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">成绩查询</span>
          <el-button type="danger">打印</el-button>
        </div>
      </template>
      <div class="select">
        <span>
          学年：
          <el-select style="width: 120px" v-model="schoolYearValue">
            <el-option
              v-for="item in schoolYear"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </span>
        <span>
          学期：
          <el-select style="width: 80px" v-model="termValue">
            <el-option
              v-for="item in term"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </span>
        <el-checkbox
          v-model="isHighest"
          style="margin-left: 10px"
          label="最高成绩"
        />
        <el-button @click="onSearch" type="primary" style="margin-left: 25px"
          >查询</el-button
        >
      </div>
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">在校学习成绩</span>
      </template>
      <pure-table
        :data="scoreData"
        size="small"
        :columns="columns"
        max-height="500"
        border
        stripe
      />
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">至今未通过课程</span>
      </template>
      <pure-table
        :data="[]"
        size="small"
        :columns="columns"
        max-height="500"
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
