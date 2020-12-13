<!-- 行业动态 -->
<template>
  <div id="hydt">
    <div class="content-wrap container">
      <ul v-for="(item,index) in curDataItems" :key='index'>
        <FigureBox :figureInfo="data"  v-for="data in item" :key='data.title'/>
      </ul>
    </div>
    <el-pagination class='container' background layout="pager" :total="80" :page-size='12'>
    </el-pagination>
  </div>
</template>

<script>
import FigureBox from "@c/common/figureBox";
// figureInfo
/* {
            image: require("@a/image/section4_1.png"),
            title: "朗朗口腔“合赢未来，与资本共进退",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          }, */
export default {
  name: "hydt",
  data() {
    return {
      curDataItems: [
        [{
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        }],
        [{
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        },
        {
          image: require("@a/image/section4_1.png"),
          title: "朗朗口腔“合赢未来，与资本共进退",
          time: "2016-09-27",
          content:
            "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
        }]
      ],
    };
  },

  components: { FigureBox },

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
#hydt{
  padding-bottom: 120px;
}
.content-wrap {
  margin-top:40px;
  margin-bottom: 120px;
  ul {
    display: flex;
    margin-right: -30px;
    justify-content: space-between;
    figure {
      padding: 40px 0;
      flex: 1;
      margin-right: 30px;
      border-bottom: 1px solid rgb(241, 241, 241);
    }
  }
}
.el-pagination{
    padding: 0;
    text-align: center;
    margin-bottom: 120px;
    /deep/ .el-pager{
        .number{
            background-color: rgb(245, 245, 245);
            color: $FontColor;
            line-height: 35px;
            height: 35px;
            width: 35px;
            &.active{
                background-color: $ThemeColorCyan !important;
            }
        }
    }
}
</style>