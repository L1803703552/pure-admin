<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

setOptions({
  tooltip: {
    trigger: "item"
  },
  legend: {
    type: "scroll",
    icon: "circle",
    padding: 0,
    //@ts-expect-error
    right: true
  },
  series: [
    {
      name: "课程类型（学分）",
      type: "pie",
      top: "20%",
      radius: "80%",
      center: ["50%", "50%"],
      // color: ["#e6a23c", "#f56c6c", "#53a7ff"],
      data: [
        { value: 31, name: "必修课" },
        { value: 15, name: "集中性实践" },
        { value: 3.5, name: "任选课" },
        { value: 70.5, name: "通识课程必修" },
        { value: 11.5, name: "限选课" },
        { value: 6, name: "其他" },
        { value: 6, name: "校内公共选修课" }
      ]
    }
  ]
});

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 35vh" />
</template>
