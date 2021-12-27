<template>
  <div>
    <label
      for=""
      v-if="label"
      :class="{ 'i-form-item-label-requied': isrequied }"
      >{{ label }}</label
    >
    <div>
      <slot></slot>
      <!-- <div v-if="validateState === error" class="i-form-message">
        {{ validateMessage }}
      </div> -->
    </div>
  </div>
</template>

<script>
// import AsyncValidator from "async-validator";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 是否必填
      isrequied: true,
      validateState: "", // 校验状态
      validateMessage: "", // 校验信息
    };
  },
  methods: {
    setRules() {},
  },
};
</script>

<style lang="less" scoped>
.i-form-item-label-requied:before {
  content: "";
  color: red;
}
.i-form-message {
  color: red;
}
</style>
