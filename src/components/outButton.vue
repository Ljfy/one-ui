<template>
  <button
    class="one-button"
    :class="[
      `one-button-${type}`,
      {
        'is-plain': plain,
        'is-around': around,
        'is-disabled': disabled,
      },
    ]"
    @click="handlClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`one-icon-${icon}`"></i>
    <!--如果没传入文本插槽,则不显示span内容  -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "oneButton",
  //此时对props值进行校验,值为string类型
  props: {
    around: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: String,
      default: "",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      // 默认值
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log(this.type);
  },
  methods: {
    handlClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
.one-button {
  display: inline-block;
  line-height: 1;
  white-space: none;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #606266;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  margin: 10px;
  transition: 0.1s;
  font-weight: 500;
  //禁止文字被选中
  -webkit-touch-callout: none;
  /*IOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.one-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background-color: #66b1ff;
    background: #66b1ff;
    color: #fff;
  }
}

.one-button-success {
  color: #fff;
  background-color: #2ecc71;
  border-color: #2ecc71;

  &:hover,
  &:focus {
    background-color: #2ecc71;
    background: #2ecc71;
    color: #fff;
  }
}

.one-button-info {
  color: #fff;
  background-color: #34495e;
  border-color: #34495e;

  &:hover,
  &:focus {
    background-color: #34495e;
    background: #34495e;
    color: #fff;
  }
}

.one-button-danger {
  color: #fff;
  background-color: #e74c3c;
  border-color: #e74c3c;

  &:hover,
  &:focus {
    background-color: #e74c3c;
    background: #e74c3c;
    color: #fff;
  }
}

.one-button-warning {
  color: #fff;
  background-color: #f39c12;
  border-color: #f39c12;
  &:hover,
  &:focus {
    background-color: #f39c12;
    background: #f39c12;
    color: #fff;
  }
}
.one-button-primary.is-plain {
  color: #409eff;
  background: #c8d7e7;
  &:hover,
  &:focus {
    border-color: #409eff;
    background: #409eff;
    color: #fff;
  }
}
.one-button-success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    border-color: #2ecc71;
    background: #2ecc71;
    color: #fff;
  }
}
.one-button-info.is-plain {
  color: #909399;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    border-color: #34495e;
    background: #34495e;
    color: #fff;
  }
}
.one-button-danger.is-plain {
  color: #909399;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    border-color: #e74c3c;
    background: #e74c3c;
    color: #fff;
  }
}
.one-button-warning.is-plain {
  color: #909399;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    border-color: #f39c12;
    background: #f39c12;
    color: #fff;
  }
}
.one-button.is-around {
  border-radius: 20px;
  padding: 10px 14px;
}
.one-button-primary.is-around {
  color: #409eff;
  background: #c8d7e7;
  &:hover,
  &:focus {
    border-color: #409eff;
    background: #409eff;
    color: #fff;
  }
}
.one-button [class*="one-icon-"] + span {
  margin-left: 5px;
}

.one-button.is-disabled {
  cursor: no-drop;
}
</style>
