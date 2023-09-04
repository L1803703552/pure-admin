<script setup lang="ts">
import { ref } from "vue";
import {
  schoolYear,
  term,
  changeCourseData,
  practCourseData,
  unScheduledData,
  timeTableData
} from "./data";
import { clone } from "@pureadmin/utils";
import SchoolYearSelect from "./components/SchoolYearSelect.vue";
defineOptions({
  name: "timeTable"
});

const selectRef = ref();
const isLoading = ref(false);
const columns: TableColumnList = [
  {
    label: "时间",
    prop: "time",
    width: 30
  },
  {
    prop: "section",
    width: 60
  },
  {
    label: "星期一",
    prop: "Monday"
  },
  {
    label: "星期二",
    prop: "Tuesday"
  },
  {
    label: "星期三",
    prop: "Wednesday"
  },
  {
    label: "星期四",
    prop: "Thursday"
  },
  {
    label: "星期五",
    prop: "Friday"
  },
  {
    label: "星期六",
    prop: "Saturday"
  },
  {
    label: "星期日",
    prop: "Sunday"
  }
];
// 调、停（补）课信息
const columns2: TableColumnList = [
  {
    label: "编号",
    prop: "courseNumber",
    width: 100
  },
  {
    label: "课程名称",
    prop: "courseName",
    width: 220
  },
  {
    label: "原上课时间地点教师",
    prop: "oldInfo",
    minWidth: 200
  },
  {
    label: "现上课时间地点教师",
    prop: "newInfo",
    minWidth: 200
  },
  {
    label: "申请时间",
    prop: "applyTime",
    width: 180
  }
];
// 实践课(或无上课时间)信息
const columns3: TableColumnList = [
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 200
  },
  {
    label: "教师",
    prop: "teacherName",
    minWidth: 130
  },
  {
    label: "学分",
    prop: "credit",
    minWidth: 80
  },
  {
    label: "起止周",
    prop: "startEndWeek",
    minWidth: 100
  },
  {
    label: "上课时间",
    prop: "classTime",
    minWidth: 200
  },
  {
    label: "上课地点",
    prop: "classLocation",
    minWidth: 200
  }
];
// 实习课信息
const columns4: TableColumnList = [
  {
    label: "学年",
    prop: "schoolYear",
    minWidth: 100
  },
  {
    label: "学期",
    prop: "term",
    minWidth: 80
  },
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 200
  },
  {
    label: "实习时间",
    prop: "interTime",
    minWidth: 100
  },
  {
    label: "模块代号",
    prop: "moduleNumber",
    minWidth: 100
  },
  {
    label: "先修模块",
    prop: "placeModule",
    minWidth: 100
  },
  {
    label: "实习编号",
    prop: "interNumber",
    minWidth: 100
  }
];
// 未安排上课时间的课程
const columns5: TableColumnList = [
  {
    label: "学年",
    prop: "schoolYear",
    minWidth: 100
  },
  {
    label: "学期",
    prop: "term",
    minWidth: 80
  },
  {
    label: "课程名称",
    prop: "courseName",
    minWidth: 200
  },
  {
    label: "教师姓名",
    prop: "teacherName",
    minWidth: 130
  },
  {
    label: "学分",
    prop: "credit",
    minWidth: 80
  }
];
// 课表查询不存在“全部”选项，由于是从data里面导出的，在实际Ajax请求的时候要去掉
const schoolYearCopy = clone(schoolYear, true); // 深拷贝
const termCopy = clone(term, true);
if (schoolYearCopy[0].value === "all") {
  schoolYearCopy.shift();
  termCopy.shift();
}

// 课表合并
interface SpanMethodProps {
  row: any;
  column: any;
  rowIndex: number;
  columnIndex: number;
}
const timeTableSpanMethod = ({ rowIndex, columnIndex }: SpanMethodProps) => {
  // console.log(row, column, rowIndex, columnIndex);
  if (columnIndex === 0) {
    if (rowIndex === 0) {
      return [1, 2];
    } else if (rowIndex === 1) {
      return [4, 1];
    } else if (rowIndex === 5) {
      return [5, 1];
    } else if (rowIndex === 10) {
      return [3, 1];
    } else {
      return [0, 0];
    }
  }
};
const handerMethod = ({ row, columnIndex }) => {
  if (columnIndex === 1) {
    row[0].colSpan = 2;
    row[1].colSpan = 0;
    return {
      display: "none"
    };
  }
};

const onSearch = () => {
  isLoading.value = true;
  console.log(selectRef.value.schoolYearValue, selectRef.value.termValue);
  isLoading.value = false;
};
</script>

<template>
  <div>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">学生个人课程表</span>
          <div class="filterForm">
            <SchoolYearSelect
              :schoolYear="schoolYearCopy"
              :term="termCopy"
              ref="selectRef"
            />
            <el-button type="primary" @click="onSearch"> 查询 </el-button>
          </div>
        </div>
      </template>
      <pure-table
        alignWhole="center"
        :data="timeTableData"
        :columns="columns"
        size="small"
        :span-method="timeTableSpanMethod"
        :header-cell-style="handerMethod"
        border
      />
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">调、停（补）课信息</span>
      </template>
      <pure-table
        :data="changeCourseData"
        :columns="columns2"
        :showOverflowTooltip="true"
        border
        stripe
      />
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">实践课(或无上课时间)信息</span>
      </template>
      <pure-table :data="practCourseData" :columns="columns3" border stripe />
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">实习课信息</span>
      </template>
      <pure-table :data="[]" :columns="columns4" border stripe />
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <span class="font-medium">未安排上课时间的课程</span>
      </template>
      <pure-table :data="unScheduledData" :columns="columns5" border stripe />
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
  .filterForm {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
