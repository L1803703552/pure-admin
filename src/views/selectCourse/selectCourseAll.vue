<script setup lang="ts">
import { ref, reactive } from "vue";
import { message } from "@/utils/message";

defineOptions({
  name: "selectCourseAll"
});

const formModel = reactive({
  curriculum: "全部",
  isMargin: "全部",
  courseOwner: "全部",
  courseCampus: "全部",
  classTime: "全部",
  courseName: ""
});

const isLoading = ref(false);
const currList = ["全部", "校公共选修课", "通识课程选修"];
const campusList = ["全部", "江宁校区", "幕府校区", "白下校区", "校外办学点"];
const classTimeList = [
  "全部",
  "周一第10,11,12节{第4-15周}",
  "周一第10,11,12节{第4-4周|双周};周一第10,11,12节{第5-10周};周一第10,11,12节{第11-15周}",
  "周二第10,11,12节{第4-15周}",
  "周四第10,11,12节{第4-15周}"
];
const columns: TableColumnList = [
  {
    type: "selection",
    width: 60
  },
  {
    label: "预定教材",
    prop: "orderBook",
    width: 80
  },
  {
    label: "课程名称",
    prop: "courseName",
    width: 130
  },
  {
    label: "课程代码",
    prop: "courseNumber",
    width: 90
  },
  {
    label: "教师姓名",
    prop: "teacherName",
    width: 80
  },
  {
    label: "上课时间",
    prop: "classTime",
    width: 120
  },
  {
    label: "上课地点",
    prop: "classLocation",
    width: 100
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
    label: "起始结束周",
    prop: "startEndWeek",
    width: 100
  },
  {
    label: "容量",
    prop: "count",
    width: 60
  },
  {
    label: "余量",
    prop: "margin",
    width: 50
  },
  {
    label: "课程归属",
    prop: "courseOwner",
    width: 120
  },
  {
    label: "课程性质",
    prop: "curriculum",
    width: 120
  },
  {
    label: "校区代码",
    prop: "campus",
    width: 90
  },
  {
    label: "开课学院",
    prop: "college",
    width: 170
  },
  {
    label: "考试时间",
    prop: "examTime",
    width: 80
  }
];
const columns2: TableColumnList = [];
const onSearch = () => {
  isLoading.value = true;
  console.log(formModel);
  isLoading.value = false;
};
const onSubmit = () => {
  // 防抖节流⚠️
  message("提交成功", { type: "success" });
};
</script>

<template>
  <div>
    <el-card class="mb-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">全校选修课</span>
      </template>
      <el-form :model="formModel" :inline="true">
        <el-form-item label="课程性质">
          <el-select v-model="formModel.curriculum">
            <el-option
              v-for="item in currList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="有无余量">
          <el-select v-model="formModel.isMargin">
            <el-option label="全部" value="全部" />
            <el-option label="有" value="有" />
            <el-option label="无" value="无" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程归属">
          <el-select v-model="formModel.courseOwner">
            <el-option label="全部" value="全部" />
            <el-option label="校公共选修课" value="校公共选修课" />
          </el-select>
        </el-form-item>
        <el-form-item label="上课校区">
          <el-select v-model="formModel.courseCampus">
            <el-option
              v-for="item in campusList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="上课时间">
          <el-select v-model="formModel.classTime">
            <el-option
              v-for="item in classTimeList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input type="text" v-model="formModel.courseName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">可选课程</span>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </div>
      </template>
      <pure-table
        :data="[]"
        :loading="isLoading"
        :columns="columns"
        size="small"
        border
        stripe
      />
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">已选课程</span>
      </template>
      <pure-table
        :data="[]"
        :loading="isLoading"
        :columns="columns2"
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
:deep() {
  label {
    font-weight: normal;
  }
}
</style>
