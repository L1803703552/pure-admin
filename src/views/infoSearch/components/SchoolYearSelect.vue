<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "SchoolYearSelect"
});

interface obj {
  label: string;
  value: string;
}

const props = defineProps({
  schoolYear: {
    type: Array<obj>,
    required: true
  },
  term: {
    type: Array<obj>,
    required: true
  }
});

const subDisabled = ref(true);

const schoolYearValue = ref(props.schoolYear[0].value);
const termValue = ref(props.term[0].value);

if (termValue.value !== "all") {
  subDisabled.value = false;
}
// 选项改变时操作
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
  <div class="compSelect">
    <span>
      学年：
      <el-select
        style="width: 120px"
        @change="selectChange"
        v-model="schoolYearValue"
      >
        <el-option
          v-for="item in props.schoolYear"
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
          v-for="item in props.term"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.compSelect {
  display: flex;
  gap: 10px;
}
</style>
