<script setup lang="ts">
import pic from "@/assets/user.jpg";
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
defineOptions({
  name: "infoManageUser"
});
const el = ref();
const col = ref(3);

useResizeObserver(el, entries => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  if (width <= 650) {
    col.value = 1;
  } else if (width <= 1100) {
    col.value = 2;
  } else if (width <= 1920) {
    col.value = 3;
  } else if (width <= 2560) {
    col.value = 4;
  } else {
    col.value = 5;
  }
});
</script>

<template>
  <div ref="el">
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">个人信息</span>
        </div>
      </template>
      <el-descriptions :column="col" border>
        <el-descriptions-item label="学号"> 2016222008 </el-descriptions-item>
        <el-descriptions-item label="姓名"> 刘亚星 </el-descriptions-item>
        <el-descriptions-item label="照片">
          <el-image style="width: 100px" :src="pic" fit="fill" />
        </el-descriptions-item>
        <el-descriptions-item label="曾用名" />
        <el-descriptions-item label="性别"> 男 </el-descriptions-item>
        <el-descriptions-item label="出生日期">
          2002.8.18
        </el-descriptions-item>
        <el-descriptions-item label="民族"> 汉 </el-descriptions-item>
        <el-descriptions-item label="籍贯"> 江苏省XX市 </el-descriptions-item>
        <el-descriptions-item label="政治面貌"> 共青团员 </el-descriptions-item>
        <el-descriptions-item label="来源地区">
          114514 霓虹
        </el-descriptions-item>
        <el-descriptions-item label="来源省" />
        <el-descriptions-item label="出生地" />
        <el-descriptions-item label="健康状况" />
        <el-descriptions-item label="学院">
          网络与通信工程学院
        </el-descriptions-item>
        <el-descriptions-item label="系" />
        <el-descriptions-item label="专业名称">
          光电信息科学与工程
        </el-descriptions-item>
        <el-descriptions-item label="教学班名称" />
        <el-descriptions-item label="行政班">
          20光电信息科学与工程（单）
        </el-descriptions-item>
        <el-descriptions-item label="学制"> 4 </el-descriptions-item>
        <el-descriptions-item label="学习年限" />
        <el-descriptions-item label="学籍状态"> 有 </el-descriptions-item>
        <el-descriptions-item label="当前所在级"> 2020 </el-descriptions-item>
        <el-descriptions-item label="考生号">
          1145141919810
        </el-descriptions-item>
        <el-descriptions-item label="学生证号" />
        <el-descriptions-item label="培养方向" />
        <el-descriptions-item label="专业方向"> 无方向 </el-descriptions-item>
        <el-descriptions-item label="入学日期"> 114514 </el-descriptions-item>
        <el-descriptions-item label="毕业中学">
          江苏省XXX学校
        </el-descriptions-item>
        <el-descriptions-item label="宿舍号">
          江宁校区 南区08B 306-1
        </el-descriptions-item>
        <el-descriptions-item label="电子邮箱">
          1803703552@qq.com
        </el-descriptions-item>
        <el-descriptions-item label="联系电话">
          13222222222
        </el-descriptions-item>
        <el-descriptions-item label="邮政编码"> 114514 </el-descriptions-item>
        <el-descriptions-item label="准考证号">
          1145141919
        </el-descriptions-item>
        <el-descriptions-item label="身份证号">
          1145141919810
        </el-descriptions-item>
        <el-descriptions-item label="学历层次"> 公办本科 </el-descriptions-item>
        <el-descriptions-item label="港澳台码" />
        <el-descriptions-item label="报到号" />
        <el-descriptions-item label="是否高水平运动员" />
        <el-descriptions-item label="英语等级" />
        <el-descriptions-item label="英语成绩"> 66 </el-descriptions-item>
        <el-descriptions-item label="录检表页码" />
        <el-descriptions-item label="特长" />
        <el-descriptions-item label="入党（团）时间">
          114514
        </el-descriptions-item>
        <el-descriptions-item label="火车终点站" />
        <el-descriptions-item label="学习形式"> 全日制 </el-descriptions-item>
        <el-descriptions-item label="手机类型" />
        <el-descriptions-item label="手机号码">
          13222222222
        </el-descriptions-item>
        <el-descriptions-item label="家庭邮编" />
        <el-descriptions-item label="家庭电话" />
        <el-descriptions-item label="父亲姓名" />
        <el-descriptions-item label="父亲单位" />
        <el-descriptions-item label="父亲身份证号" />
        <el-descriptions-item label="母亲姓名" />
        <el-descriptions-item label="母亲单位" />
        <el-descriptions-item label="母亲身份证号" />
        <el-descriptions-item label="父亲单位电话或手机" />
        <el-descriptions-item label="母亲单位电话或手机" />
        <el-descriptions-item label="家庭地址" />
        <el-descriptions-item label="家庭所在地（/省/县）" />
        <el-descriptions-item label="证明人" />
        <el-descriptions-item label="备注" />
      </el-descriptions>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>
