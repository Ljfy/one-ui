<template>
  <div id="app">
    <div class="row">
      <one-button>默认按钮</one-button>
      <one-button type="primary">primary按钮</one-button>
      <one-button type="success">成功按钮</one-button>
      <one-button type="info">info按钮</one-button>
      <one-button type="danger">danger按钮</one-button>
      <one-button type="warning">warning按钮</one-button>
      <one-button>朴素按钮</one-button>
      <one-button plain>primary按钮</one-button>
      <one-button plain type="success">成功按钮</one-button>
      <one-button plain type="info">info按钮</one-button>
      <one-button plain type="danger">danger按钮</one-button>
      <one-button plain type="warning">warning按钮</one-button>
      <one-button around>圆角按钮</one-button>
      <one-button around>primary按钮</one-button>
      <one-button around type="success">成功按钮</one-button>
      <one-button around type="info">info按钮</one-button>
      <one-button around type="danger">danger按钮</one-button>
      <one-button around type="warning">warning按钮</one-button>
      <one-button icon="bluetoothoff">蓝牙按钮</one-button>
      <one-button type="primary" icon="lanya">照相机</one-button>
      <one-button type="success" icon="hao">加号</one-button>
      <one-button type="info" icon="left">箭头</one-button>
      <one-button type="danger" icon="shouji">手机</one-button>
      <one-button type="warning" icon="sousuo">搜索</one-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="less">
.row {
  width: 700px;
  margin: 0 auto;
}
</style>
