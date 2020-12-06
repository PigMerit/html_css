<!-- section 4 -->
<template>
  <div id="section_4">
    <SectionHeader :headerInfo="headerInfo" />
    <div class="news-tag">news</div>
    <p>质量就是我们的生命</p>
    <el-carousel
      height="259px"
      :autoplay="false"
      arrow="never"
      trigger="click"
      class="container"
    >
      <el-carousel-item>
        <div class="cert-box">
          <img :src="require('@a/image/advantage4.png')" alt="证书" />
          <img :src="require('@a/image/advantage4.png')" alt="证书" />
          <img :src="require('@a/image/advantage4.png')" alt="证书" />
          <img :src="require('@a/image/advantage4.png')" alt="证书" />
          <img :src="require('@a/image/advantage4.png')" alt="证书" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">2</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">3</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import SectionHeader from "@c/common/SectionHeader";
export default {
  name: "",
  data() {
    return {
      headerInfo: {
        title: "荣誉资质",
        introChi: "呵护牙齿健康  创造美好未来",
        introEng: "care for teeth to create a better future",
      },
    };
  },

  components: { SectionHeader },

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
#section_4 {
    padding-bottom: 72px;
  .section-header {
    padding: 77px 0 16px 0;
  }
  .news-tag {
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 17px;
    &::after,
    &::before {
      content: "";
      display: inline-block;
      height: 1px;
      width: 47px;
      background-color: rgb(218, 218, 218);
      margin: 0 16px 8px;
    }
  }
  p {
    text-align: center;
    margin-bottom: 16px;
  }
  .el-carousel {
    padding-bottom: 70px;
    /deep/ .el-carousel__indicator{
        padding: 0 2px;
        &.is-active .el-carousel__button{
            width: 10px;
        }
    }
    /deep/ .el-carousel__button {
      background-color: green;
      padding: 0;
      width: 6px;
      height: 6px;
      border-radius: 6px;
    }
  }
  .cert-box {
    padding: 0 59px;
    display: flex;
    justify-content: space-between;
    image {
      height: 100%;
    }
  }
}
</style>