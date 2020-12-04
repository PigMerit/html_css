<!-- 朗朗口腔 -->
<template>
  <section class="container">
    <SectionHeader :headerInfo="headerInfo" />
    <el-row type="flex" class="content-wrap">
      <el-col :span="7">
        <figure class="content-box">
          <img :src="require('@a/image/section1_1.png')" alt="section1_1" />
          <figcaption>朗朗口腔</figcaption>
          <span></span>
          <p>
            诊所内设有典雅舒适、风格各异的独立诊疗室，如奇趣可爱的儿童诊室、适应女性需求的Hello
            Kitty
          </p>
        </figure>
      </el-col>
      <el-col :span="7">
        <figure class="content-box">
          <img :src="require('@a/image/section1_1.png')" alt="section1_1" />
          <figcaption>朗朗口腔</figcaption>
          <span></span>
          <p>
            诊所内设有典雅舒适、风格各异的独立诊疗室，如奇趣可爱的儿童诊室、适应女性需求的Hello
            Kitty
          </p>
        </figure>
      </el-col>
      <el-col :span="7">
        <figure class="content-box">
          <img :src="require('@a/image/section1_1.png')" alt="section1_1" />
          <figcaption>朗朗口腔</figcaption>
          <span></span>
          <p>
            诊所内设有典雅舒适、风格各异的独立诊疗室，如奇趣可爱的儿童诊室、适应女性需求的Hello
            Kitty
          </p>
        </figure>
      </el-col>
    </el-row>
    <el-button round>查看更多</el-button>
  </section>
</template>

<script>
import SectionHeader from "@c/common/SectionHeader";
export default {
  name: "",
  data() {
    return {
      headerInfo: {
        title: "朗朗口腔",
        introChi: "呵护牙齿健康  创造美好未来",
        introEng: "care for teeth to create a better future",
      },
    };
  },
  components: {
    SectionHeader,
  },

};
</script>
<style lang='scss' scoped>
.content-wrap {
  justify-content: space-between;
  padding: 15px 70px 56px;
  img {
    width: 100%;
    margin-bottom: 14px;
  }
  figcaption {
    font-size: 18px;
    color: $ThemeColorBlack;
    line-height: 40px;
  }
  span {
    display: block;
    height: 1px;
    background-color: $ThemeColorGray;
    margin-bottom: 10px;
  }
  p {
    @include ell(2);
    line-height: 22px;
  }
}
button {
  display: block;
  margin: 0 auto;
  color: $FontColor;
  width: 110px;
  height: 37px;
  &:hover{
      background-color: $ThemeColorCyan;
      color: white;
  }
}
</style>