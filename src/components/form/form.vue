<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped></style>
