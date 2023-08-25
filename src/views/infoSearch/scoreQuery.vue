<script setup lang="ts">
import { ref } from "vue";
import { scoreData, unPassCourse, creditState } from "./data";
import SchoolYearSelect from "./components/SchoolYearSelect.vue";

defineOptions({
  name: "scoreQuery"
});

const selectRef = ref();
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
const colums2: TableColumnList = [
  {
    label: "课程代码",
    prop: "courseNumber"
  },
  {
    label: "课程名称",
    prop: "courseName"
  },
  {
    label: "学分",
    prop: "credit"
  },
  {
    label: "课程性质",
    prop: "curriculum"
  },
  {
    label: "最高成绩",
    prop: "highestScore"
  },
  {
    label: "课程归属",
    prop: "courseOwner"
  }
];
const colums3: TableColumnList = [
  {
    label: "课程性质名称",
    prop: "curriculum"
  },
  {
    label: "学分要求",
    prop: "credit"
  },
  {
    label: "获得学分",
    prop: "creditGetted"
  },
  {
    label: "未通过学分",
    prop: "creditUnPassed"
  },
  {
    label: "还需学分",
    prop: "creditSub"
  }
];

const onPrint = () => {
  // 待优化
  window.print();
};

const onSearch = () => {
  isLoading.value = true;
  // 请求数据
  console.log(
    selectRef.value.schoolYearValue,
    selectRef.value.termValue,
    isHighest.value
  );
  isLoading.value = false;
};
</script>

<template>
  <div>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">成绩查询</span>
          <el-button @click="onPrint" type="danger">打印</el-button>
        </div>
      </template>
      <div class="card-header">
        <div class="filterForm">
          <SchoolYearSelect ref="selectRef" />
          <el-checkbox v-model="isHighest" label="最高成绩" />
          <el-button @click="onSearch" type="primary"> 查询 </el-button>
        </div>
        <div>
          <el-text type="primary">本专业共42人</el-text>
          <el-text type="primary">平均学分绩点：2.68</el-text>
          <el-text type="primary">学分绩点总和：392.00</el-text>
        </div>
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
        :loading="isLoading"
        border
        stripe
      />
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">至今未通过课程</span>
      </template>
      <pure-table
        :data="unPassCourse"
        :columns="colums2"
        max-height="300"
        size="small"
        border
        stripe
      />
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">学分修读情况</span>
      </template>
      <pure-table
        :data="creditState"
        :columns="colums3"
        size="small"
        show-summary
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
  flex-wrap: wrap;
}
.filterForm {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.el-text {
  margin: 0.25em 0.5em 0.25em 0;
  padding: 0.25em 0.5em 0.25em 0;
}
</style>
