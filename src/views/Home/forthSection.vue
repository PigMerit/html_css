<!-- section 4 资讯动态 -->
<template>
  <div id="forth-section" class="container">
    <SectionHeader :headerInfo="headerInfo" />
    <ul class="navbar clearfix" :style="{ width: `${navBar.length * 102}px` }">
      <li
        v-for="barItem in navBar"
        :key="barItem.id"
        :class="{ selected: barItem.id === curItem }"
        @click="curItem = barItem.id"
      >
        {{ barItem.tag }}
      </li>
    </ul>

    <ul class="content-box">
      <FigureBox
        v-for="item in curItemData"
        :key="item.title"
        :figureInfo="item"
      />
    </ul>
  </div>
</template>

<script>
import SectionHeader from "@c/common/SectionHeader";
import FigureBox from "@c/common/figureBox";
export default {
  name: "forthSection",
  data() {
    return {
      curItem: "hydt",
      headerInfo: {
        title: "资讯动态",
        introChi: "呵护牙齿健康  创造美好未来",
        introEng: "care for teeth to create a better future",
      },
      navBar: [
        {
          tag: "行业动态",
          id: "hydt",
        },
        {
          tag: "朗朗资讯",
          id: "llzx",
        },
        {
          tag: "媒体报道",
          id: "mtbd",
        },
        {
          tag: "公益活动",
          id: "gyhd",
        },
      ],
      content: {
        hydt: [
          {
            image: require("@a/image/section4_1.png"),
            title: "朗朗口腔“合赢未来，与资本共进退",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          },
          {
            image: require("@a/image/section4_2.png"),
            title: "你的牙齿健康吗？",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          },
          {
            image: require("@a/image/section4_3.png"),
            title: "重视乳牙的聪明妈妈 才能给孩子啊的撒发生",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          },
          {
            image: require("@a/image/section4_4.png"),
            title: "你的牙齿，藏着你想象不到的讯息",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          },
        ],
        mtbd: [
          {
            image: require("@a/image/section4_2.png"),
            title: "你的牙齿健康吗？",
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
            image: require("@a/image/section4_4.png"),
            title: "你的牙齿，藏着你想象不到的讯息",
            time: "2016-09-27",
            content:
              "朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站撒旦发射点发射点发",
          },
        ],
      },
    };
  },

  components: { SectionHeader, FigureBox },

  mounted() {},
  computed: {
    curItemData() {
      return this.content[this.curItem];
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.section-header {
  padding-bottom: 28px;
}
.navbar {
  margin: 0 auto 73px;
  li {
    box-sizing: border-box;
    border: 1px solid #c0b7b3;
    float: left;
    width: 95px;
    line-height: 34px;
    margin-right: 7px;
    text-align: center;
    &.selected {
      background-color: rgb(160, 160, 160);
      color: white;
    }
  }
}

.content-box {
  display: flex;
  figure {
    flex: 1;
    margin-right: 30px;
  }
}
</style>