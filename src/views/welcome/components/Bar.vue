<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";
import * as echarts from "echarts/core";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const barChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(barChartRef as Ref<HTMLDivElement>, {
  theme
});

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
    data: ["已修", "不及格", "未修"]
  },
  xAxis: [
    {
      triggerEvent: true,
      type: "category",
      data: [
        "必修课",
        "集中性实践",
        "任选课",
        "通识课程必修",
        "限选课",
        "其他",
        "校内公共选修课"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      triggerEvent: true
    }
  ],
  series: [
    {
      name: "已修",
      type: "bar",
      barWidth: "40%",
      stack: "total",
      emphasis: {
        focus: "series"
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#409EFF"
          },
          {
            offset: 1,
            color: "#53a7ff"
          }
        ])
      },
      data: [31, 15, 3.5, 70.5, 11.5, 6, 6]
    },
    {
      name: "不及格",
      type: "bar",
      barWidth: "40%",
      stack: "total",
      emphasis: {
        focus: "series"
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#f56c6c"
          },
          {
            offset: 1,
            color: "#f89898"
          }
        ])
      },
      data: [0, 0, 3, 0, 0, 0, 0]
    },
    {
      name: "未修",
      type: "bar",
      barWidth: "40%",
      stack: "total",
      emphasis: {
        focus: "series"
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#e6a23c"
          },
          {
            offset: 1,
            color: "#eebe77"
          }
        ])
      },
      data: [0, 20, 58.5, 2, 0, 0, 0]
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
  <div ref="barChartRef" style="width: 100%; height: 35vh" />
</template>
