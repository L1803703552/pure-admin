<script setup lang="ts">
import { ref, reactive } from "vue";
import { message } from "@/utils/message";
import { useThrottleFn } from "@vueuse/core";
import { selCourseData, selectedData } from "./data";
import { ElTable } from "element-plus";

defineOptions({
  name: "selectCourseAll"
});

const isLoading = ref(false);
// 第一个card里面的表单数据
const formModel = reactive({
  curriculum: "全部",
  isMargin: "全部",
  courseOwner: "全部",
  courseCampus: "全部",
  classTime: "全部",
  courseName: ""
});
const currList = ["全部", "校公共选修课", "通识课程选修"];
const campusList = ["全部", "江宁校区", "幕府校区", "白下校区", "校外办学点"];
const classTimeList = [
  "全部",
  "周一第10,11,12节{第4-15周}",
  "周一第10,11,12节{第4-4周|双周};周一第10,11,12节{第5-10周};周一第10,11,12节{第11-15周}",
  "周二第10,11,12节{第4-15周}",
  "周四第10,11,12节{第4-15周}"
];

// 表格
const maxSel = 2; // 最多选课数量
let alSel = 0; // 之前已选数量
const multipleSelection = ref([]);
const handleSelChange = val => {
  multipleSelection.value = val;
};

// 按钮实现
const onSearch = () => {
  isLoading.value = true;
  console.log(formModel);
  isLoading.value = false;
};
const onSubmit = useThrottleFn(() => {
  // 节流操作⚠️
  if (multipleSelection.value.length + alSel > maxSel) {
    message(`选课数量不能超过${maxSel}门，你已选${alSel}门`, { type: "error" });
  } else {
    alSel += multipleSelection.value.length;
    message("提交成功", { type: "success" });
  }
}, 1000);
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
          <el-input type="text" v-model="formModel.courseName" clearable />
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
      <!-- 二次封装的table在使用:show-overflow-tooltip时会出错，直接用el-table -->
      <el-table
        :data="selCourseData"
        :loading="isLoading"
        max-height="500"
        size="small"
        @selection-change="handleSelChange"
        border
        stripe
      >
        <el-table-column type="selection" width="40" />
        <el-table-column property="courseName" label="课程名称" width="150" />
        <el-table-column property="courseNumber" label="课程代码" width="90" />
        <el-table-column property="teacherName" label="教师姓名" width="80" />
        <el-table-column
          property="classTime"
          label="上课时间"
          :show-overflow-tooltip="true"
          minWidth="150"
        />
        <el-table-column
          property="classLocation"
          label="上课地点"
          :show-overflow-tooltip="true"
          minWidth="150"
        />
        <el-table-column property="credit" label="学分" width="50" />
        <el-table-column property="weekHour" label="周学时" width="80" />
        <el-table-column
          property="startEndWeek"
          label="起始结束周"
          width="100"
        />
        <el-table-column property="count" label="容量" width="60" />
        <el-table-column property="margin" label="余量" width="50" />
        <el-table-column property="courseOwner" label="课程归属" width="120" />
        <el-table-column property="curriculum" label="课程性质" width="120" />
        <el-table-column property="campusNumber" label="校区代码" width="90" />
        <el-table-column property="college" label="开课学院" width="170" />
        <el-table-column property="examTime" label="考试时间" width="80" />
      </el-table>
    </el-card>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">已选课程</span>
      </template>
      <el-table
        :data="selectedData"
        :loading="isLoading"
        size="small"
        border
        stripe
      >
        <el-table-column property="courseName" label="课程名称" width="150" />
        <el-table-column property="teacherName" label="教师姓名" width="80" />
        <el-table-column property="credit" label="学分" width="50" />
        <el-table-column property="weekHour" label="周学时" width="80" />
        <el-table-column
          property="startEndWeek"
          label="起始结束周"
          width="100"
        />
        <el-table-column property="campus" label="校区" width="90" />
        <el-table-column
          property="classTime"
          label="上课时间"
          :show-overflow-tooltip="true"
          minWidth="150"
        />
        <el-table-column
          property="classLocation"
          label="上课地点"
          :show-overflow-tooltip="true"
          minWidth="150"
        />
        <el-table-column property="orderBook" label="教材" width="80" />
        <el-table-column property="courseOwner" label="课程归属" width="120" />
        <el-table-column property="curriculum" label="课程性质" width="120" />
        <el-table-column property="campusNumber" label="校区代码" width="90" />
      </el-table>
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
.tableContext {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
