<script setup lang="ts">
import { ref } from "vue";
import { schoolYear, term } from "../data";

defineOptions({
  name: "Card"
});

const prop = defineProps({
  // 是否显示右上角选项
  showSel: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const emit = defineEmits(["changeSel"]);
const schoolYearValue = ref(schoolYear[0].value);
const termValue = ref(term[0].value);
const isLoading = ref(false);

// 选项改变时请求一次
const selectChange = () => {
  isLoading.value = true;
  // 请求数据
  emit("changeSel", schoolYearValue.value, termValue.value);
  isLoading.value = false;
};

// 页面载入时自动请求一次
if (prop.showSel) {
  selectChange();
}

// 暴露两个属性供于筛选成绩
defineExpose({
  schoolYearValue,
  termValue
});
</script>

<template>
  <div>
    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">{{ title }}</span>
          <div v-if="showSel">
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
            学年第
            <el-select
              style="width: 60px"
              @change="selectChange"
              v-model="termValue"
            >
              <el-option
                v-for="item in term"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            学期
          </div>
        </div>
      </template>
      <slot />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
