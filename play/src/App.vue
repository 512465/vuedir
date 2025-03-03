<template>
  <form v-verify:submit="rules" @submit="handleSubmit" @reset="handleReset">
    <div>
      <label for="username">用户名:</label>
      <input type="text" id="username" name="username" />
    </div>
    <div>
      <label for="password">密码:</label>
      <input type="password" id="password" name="password" />
    </div>
    <button type="submit">提交</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { vVerify } from "@cp-vuedir/core";

const rules = ref({
  username: [
    { required: true, message: '用户名不能为空' },
    { min: 3, max: 10, message: '用户名长度必须在 3 到 10 个字符之间' },
    {
      asyncValidator: (value: string) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(value !== 'admin' ? null : '用户名已存在');
          }, 1000);
        });
      },
    },
  ],
  password: [
    { required: true, message: '密码不能为空' },
    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: '密码必须包含字母和数字，且长度至少为 8 位' },
  ],
});

const handleSubmit = () => {
  console.log('表单已提交');
};

const handleReset = () => {
  console.log('表单已重置');
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>