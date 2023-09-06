<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
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
const { setOptions, getInstance, resize } = useECharts(
  lineChartRef as Ref<HTMLDivElement>,
  {
    theme
  }
);

const xData = (() => {
  const data: any[] = [];
  for (let i = 1; i <= 31; i++) {
    data.push(`${i}日`);
  }
  return data;
})();

const yData = (() => {
  const data: number[] = [];
  for (let i = 1; i <= 31; i++) {
    data.push(Math.floor(Math.random() * 400) / 10);
  }
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
    right: "10px",
    left: "30px"
  },
  legend: {
    //@ts-expect-error
    right: true,
    data: ["度数"]
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
  dataZoom: [
    {
      type: "slider",
      show: false,
      realtime: true,
      startValue: 0,
      endValue: 24
    }
  ],
  series: [
    {
      name: "度数",
      type: "line",
      symbolSize: 8,
      symbol: "circle",
      color: "#53a7ff",
      data: yData
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

let a = 1;
useIntervalFn(() => {
  if (a === xData.length - 24) {
    a = 0;
  }
  getInstance()!.dispatchAction({
    type: "dataZoom",
    startValue: a,
    endValue: a + 24
  });
  a++;
}, 2000);
</script>

<template>
  <div ref="lineChartRef" style="width: 100%; height: 35vh" />
</template>
