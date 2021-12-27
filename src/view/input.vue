<template>
  <div>
    <h3>具有数据校验功能的表单组件</h3>
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <Inputv></Inputv>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import iForm from "../components/form/form.vue";
import iFormItem from "../components/form/form-item.vue";
import Inputv from "../components/Input.vue";
export default {
  components: {
    iForm,
    iFormItem,
    Inputv,
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped></style>
