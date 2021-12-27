<template>
  <div>
    <input
      type="text"
      :value="current"
      @input="handelInput"
      @blur="handelBlur"
    />
  </div>
</template>

<script>
import Emitter from "../minxs/Enter.js";
export default {
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      current: this.value,
    };
  },
  watch: {
    value(val) {
      this.current = val;
    },
  },
  methods: {
    handelInput(event) {
      const value = event.target.value;
      this.current = event;
      this.$emit("input", value);
      this.dispath("iFormItem", "on-form-change", value);
    },
    handelBlur() {
      this.dispath("iFormItem", "on-form-blur", this.current);
    },
  },
};
</script>

<style lang="less" scoped></style>
