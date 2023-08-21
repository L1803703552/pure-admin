<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";
import { useAppStoreHook } from "@/store/modules/app";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(lineChartRef as Ref<HTMLDivElement>, {
  theme
});

const xData = (() => {
  const data: any[] = [
    "大一上",
    "大一下",
    "大二上",
    "大二下",
    "大三上",
    "大三下",
    "大四上",
    "大四下"
  ];
  return data;
})();

setOptions({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    bottom: "20px",
    right: "10px"
  },
  legend: {
    //@ts-expect-error
    right: true,
    data: ["名次"]
  },
  calculable: true,
  xAxis: [
    {
      triggerEvent: true,
      type: "category",
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: xData
    }
  ],
  yAxis: [
    {
      triggerEvent: true,
      type: "value",
      splitLine: {
        show: false
      },
      axisLine: {
        show: true
      }
    }
  ],
  series: [
    {
      name: "名次",
      type: "line",
      symbolSize: 10,
      symbol: "circle",
      color: "#53a7ff",
      data: [15, 8, 24, 16, 35, 4, 14, 18]
    }
  ],
  addTooltip: true
});

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="lineChartRef" style="width: 100%; height: 35vh" />
</template>
