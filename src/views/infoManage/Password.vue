<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance, type FormRules } from "element-plus";
import { message } from "@/utils/message";
import { reactive } from "vue";

defineOptions({
  name: "infoManagePassword"
});

const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  username: "2016222008",
  oldPassword: "",
  newPassword: "",
  newRePassword: ""
});

const checkRePwd = (rule: any, value: any, callback: any) => {
  if (value !== formModel.newPassword) {
    callback(new Error("两次输入密码不一致"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules>({
  oldPassword: [{ required: true, message: "请输入旧密码", trigger: "blur" }],
  newPassword: [
    { required: true, message: "请输入新密码", trigger: "blur" },
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{3,16}$/g,
      message: "密码长度为8-16位，由数字、字母、非空特殊字符组成",
      trigger: "change"
    }
  ],
  newRePassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    { validator: checkRePwd, trigger: "blur" }
  ]
});

const onClear = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const onSubmit = async (formEl: FormInstance | undefined) => {
  await formEl.validate().then(() => {
    message("修改成功", { type: "success" });
  });
  console.log(formModel);
};
</script>

<template>
  <el-card class="m-4 box-card" shadow="never">
    <template #header>
      <span class="font-medium">登录密码修改</span>
    </template>
    <el-form
      :model="formModel"
      :rules="rules"
      label-width="80px"
      ref="ruleFormRef"
    >
      <el-form-item label="用户名">
        <el-input autocomplete="off" v-model="formModel.username" disabled />
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input
          clearable
          show-password
          type="password"
          autocomplete="off"
          v-model="formModel.oldPassword"
        />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input
          clearable
          show-password
          type="password"
          autocomplete="off"
          v-model="formModel.newPassword"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="newRePassword">
        <el-input
          clearable
          show-password
          type="password"
          autocomplete="off"
          v-model="formModel.newRePassword"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)"
          >修改</el-button
        >
        <el-button @click="onClear(ruleFormRef)">清空</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
:deep() {
  label {
    font-weight: normal;
  }
  .el-input {
    width: 300px;
  }
}
</style>
