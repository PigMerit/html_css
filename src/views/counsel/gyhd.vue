<!-- 工业活动 -->
<template>
  <div id="gyhd">
    <ul class="container">
      <figure class="clearfix">
        <img :src="figureInfo.image" :alt="figureInfo.title" />
        <div class="content">
          <time :datetime="figureInfo.time">{{ figureInfo.time }}</time>
          <figcaption>{{ figureInfo.title }}</figcaption>
          <span></span>
          <p>
            {{ figureInfo.content }}
          </p>
          <MyButton />
        </div>
      </figure>
      <figure class="clearfix">
        <img :src="figureInfo.image" :alt="figureInfo.title" />
        <div class="content">
          <time :datetime="figureInfo.time">{{ figureInfo.time }}</time>
          <figcaption>{{ figureInfo.title }}</figcaption>
          <span></span>
          <p>
            {{ figureInfo.content }}
          </p>
          <MyButton />
        </div>
      </figure>
    </ul>
    <el-pagination
      class="container"
      background
      layout="pager"
      :total="28"
      :page-size="4"
    >
    </el-pagination>
  </div>
</template>

<script>
import MyButton from "@c/common/myButton";
export default {
  name: "gyhd",
  data() {
    return {
      figureInfo: {
        time: "2018-12-12",
        title: "商业城公益捐赠活动",
        image: require("@a/image/gyhd2.png"),
        content:
          "朗朗口腔辽宁分公司于2016年9月17日在沈阳核心商圈中街商业城举办公益助残捐赠活动，本次共计为辽宁省残疾人福利基金会捐助善款184500元，朗朗口腔辽宁分公司CEO张显威、总经理杜忠华、原省委宣",
      },
    };
  },

  components: { MyButton },

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
#gyhd {
  padding-top: 141px;
  padding-bottom: 120px;
  background-color: rgb(247, 247, 247);
}
figure {
  position: relative;
  margin-bottom: 95px;
  img {
    display: block;
    height: 410px;
    float: left;
  }
  .content {
    position: absolute;
    box-sizing: border-box;
    width: 650px;
    padding: 50px 50px 40px;
    bottom: 0;
    right: 0;
    background-color: white;
    time {
      display: block;
      margin-bottom: 14px;
      color: $FontColor !important;
    }
    figcaption {
      font-size: 24px;
      @include ell(1);
      margin-bottom: 21px;
    }
    span {
      display: block;
      width: 48px;
      height: 1px;
      background-color: $ThemeColorCyan;
      margin-left: 1px;
      margin-bottom: 32px;
    }
    p {
      line-height: 30px;
      @include ell(3);
      font-size: 14px;
      margin-bottom: 23px;
    }
    .my-button {
      border-color: rgb(160, 160, 160);
      color: $FontColor;
    }
  }
}
figure:nth-child(2n) {
  img {
    float: right;
  }
  .content {
    left: 0;
  }
}

.el-pagination {
  padding: 0;
  text-align: center;
  /deep/ .el-pager {
    .number {
      background-color: rgb(245, 245, 245);
      color: $FontColor;
      line-height: 35px;
      height: 35px;
      width: 35px;
      &.active {
        background-color: $ThemeColorCyan !important;
      }
    }
  }
}
</style>