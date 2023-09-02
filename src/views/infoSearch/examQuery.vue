<script setup lang="ts">
import { ref } from "vue";
import SchoolYearSelect from "./components/SchoolYearSelect.vue";
import { examData, schoolYear, term } from "./data";

defineOptions({
  name: "examQuery"
});

const selectRef = ref();
const isLoading = ref(false);
const columns: TableColumnList = [
  {
    label: "选课课号",
    prop: "selNumber",
    minWidth: 230
  },
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 180
  },
  {
    label: "姓名",
    prop: "name",
    minWidth: 100
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
    width: 80
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
        <span class="font-medium">考试详细信息</span>
        <div class="filterForm">
          <SchoolYearSelect
            :schoolYear="schoolYear"
            :term="term"
            ref="selectRef"
          />
          <el-button type="primary" @click="onSearch"> 查询 </el-button>
        </div>
      </div>
    </template>
    <pure-table
      :loading="isLoading"
      :data="examData"
      size="small"
      :columns="columns"
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
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
