<script setup lang="ts">
import { ref } from "vue";
import { schoolYear, term } from "../data";

defineOptions({
  name: "SchoolYearSelect"
});

const schoolYearValue = ref(schoolYear[0].value);
const termValue = ref(term[0].value);
const subDisabled = ref(true);

// 选项改变时通知父组件
const selectChange = val => {
  if (val === "all") {
    termValue.value = "all";
    subDisabled.value = true;
  } else {
    subDisabled.value = false;
  }
};

// 暴露两个属性供于筛选成绩
defineExpose({
  schoolYearValue,
  termValue
});
</script>

<template>
  <div class="select">
    <span>
      学年：
      <el-select
        style="width: 120px"
        @change="selectChange"
        v-model="schoolYearValue"
      >
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
      <el-select
        style="width: 80px"
        v-model="termValue"
        :disabled="subDisabled"
      >
        <el-option
          v-for="item in term"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.select {
  display: flex;
  gap: 10px;
}
</style>
