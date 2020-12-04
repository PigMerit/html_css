<!-- 一个轮播图 -->
<template>
  <el-carousel height="510px" :autoplay='false' arrow="never" trigger="click">
    <el-carousel-item>
      <img :src="require('@a/image/swiper1.png')" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <h3 class="small">2</h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3 class="small">3</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "MySwipper",
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},

  directives: {},
};
</script>
<style lang='scss' scoped>
.el-carousel {
  background-color: turquoise;
  /deep/ .el-carousel__button{
    width: 8px;
    height: 3px;
  }
}
</style>