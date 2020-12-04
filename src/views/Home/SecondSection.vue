<!-- second section -->
<template>
  <section class="container">
    <SectionHeader :headerInfo="headerInfo" />
    <ul class="content-wrap">
      <figure
        class="content-box"
        v-for="(item, index) in contentItems"
        :key="index"
      >
        <div
          class="bigbox"
          :style="{
            background:
              item.style[0] === 'big' ? `url(${item.image})` : item.style[2],
            color: item.style[3] ? item.style[3] : '#111',
          }"
        >
          <template v-if="item.style[0] !== 'big'">
            <figcaption>{{ item.title }}</figcaption>
            <time :datetime="item.time">{{ item.time }}</time>
            <span></span>
            <p v-if="item.content">
              {{ item.content }}
            </p>
            <MyButton/>
          </template>
        </div>
        <div
          class="smallbox"
          :style="{
            background: item.style[0] === 'small' ? `url(${item.image})` : item.style[2],
            color: item.style[3] ? item.style[3] : '#111',
            order: item.style[1]==='bottom'? -1:2,
          }"
        >
          <template v-if="item.style[0] === 'big'">
            <figcaption>{{ item.title }}</figcaption>
            <time :datetime="item.time">{{ item.time }}</time>
            <span></span>
            <p v-if="item.content">
              {{ item.content }}
            </p>
            <MyButton/>
          </template>
        </div>
      </figure>

      <!-- <figure class="content-box">
        <div
          class="bigbox"
          :style="{ background: `url(${require('@a/image/section2_1.png')})` }"
        ></div>
        <div class="smallbox" :style="{ backgroundColor: '#eae9e4' }">
          <figcaption>爱能养老院活动</figcaption>
          <time datetime="2016-09-17">2016-09-17</time>
          <span></span>
          <button class="mybutton">查看更多</button>
        </div>
      </figure>
      <figure class="content-box">
        <div class="bigbox">
          <figcaption>美吉姆早教义诊活动</figcaption>
          <time datetime="2016-09-17">2016-09-17</time>
          <span></span>
          <p>
            在“牙齿健康从娃娃抓起”大型美吉姆公益义诊活动现场，参与活动的朗朗口腔辽宁分公司儿童口腔专家王阳有着丰富的临床治疗经验，包括儿童龋病、儿童口腔外科、儿童错颌畸形早期矫治等，囊括了儿童口腔健康的各个方面。王医生现场对孩子们进行了细致的口腔检查
          </p>
          <button class="mybutton">查看更多</button>
        </div>
        <div
          class="smallbox"
          :style="{ background: `url(${require('@a/image/section2_2.png')})` }"
        ></div>
      </figure>
      <figure class="content-box">
        <div
          class="bigbox"
          :style="{ backgroundColor: '#e03854', color: '#f6f6f6' }"
        >
          <figcaption>商业城公益捐赠活动</figcaption>
          <time datetime="2016-09-17">2016-09-17</time>
          <span></span>
          <p>
            在“牙齿健康从娃娃抓起”大型美吉姆公益义诊活动现场，参与活动的朗朗口腔辽宁分公司儿童口腔专家王阳有着丰富的临床治疗经验，包括儿童龋病、儿童口腔外科、儿童错颌畸形早期矫治等，囊括了儿童口腔健康的各个方面。王医生现场对孩子们进行了细致的口腔检查
          </p>
          <button class="mybutton">查看更多</button>
        </div>
        <div
          class="smallbox"
          :style="{
            background: `url(${require('@a/image/section2_3.png')})`,
            order: -1,
          }"
        ></div>
      </figure> -->
    </ul>
  </section>
</template>

<script>
import SectionHeader from "@c/common/SectionHeader";
import MyButton from "@c/common/myButton";
export default {
  name: "secondSection",
  data() {
    return {
      headerInfo: {
        title: "朗朗公益",
        introChi: "呵护牙齿健康  创造美好未来",
        introEng: "care for teeth to create a better future",
      },
      contentItems: [
        {
          title: "爱能养老院活动",
          time: "2016-09-17",
          content: "",
          image: require("@a/image/section2_1.png"),
          style: ["big", "top", "#eae9e4"],
        },
        {
          title: "美吉姆早教义诊活动",
          time: "2016-09-17",
          image: require("@a/image/section2_2.png"),
          content:
            "在“牙齿健康从娃娃抓起”大型美吉姆公益义诊活动现场，参与活动的朗朗口腔辽宁分公司儿童口腔专家王阳有着丰富的临床治疗经验，包括儿童龋病、儿童口腔外科、儿童错颌畸形早期矫治等，囊括了儿童口腔健康的各个方面。王医生现场对孩子们进行了细致的口腔检查",
          style: ["small", "top", "#fff"],
        },
        {
          title: "商业城公益捐赠活动",
          time: "2016-09-17",
          image: require("@a/image/section2_3.png"),
          content:
            "朗朗口腔辽宁分公司于2016年9月17日在沈阳核心商圈中街商业城举办公益助残捐赠活动，本次共计为辽宁省残疾人福利基金会捐助善款184500元，朗朗口腔辽宁分公司CEO张显威、总经理杜忠华、原省委宣传部副部长葛本亮、辽宁省残联秘书长胡雅菊、商业城总经理刘丽",
          style: ["small", "bottom", "#e03854", "#f6f6f6"],
        },
      ],
    };
  },

  components: {
    SectionHeader,MyButton
  },

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.section-header {
  background-color: rgb(239, 239, 239);
}
.content-wrap {
  display: flex;
  .content-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: $ThemeColorBlack;
    .bigbox {
      box-sizing: border-box;
      height: 380px;
      padding: 50px 40px 0px;
      // background: url(~@a/image/section2_1.png);
    }
    .smallbox {
      box-sizing: border-box;
      height: 190px;
      padding: 36px 40px 0px;
    }
  }
  img {
    height: 100%;
  }
  figcaption {
    font-size: 24px;

    margin-bottom: 17px;
  }
  time {
    display: block;
    line-height: 9px;
    margin-bottom: 20px;
    color: $FontColor !important;
  }
  span {
    display: block;
    width: 38px;
    height: 1px;
    background-color: $ThemeColorGray;
    margin-bottom: 24px;
  }
  p {
    line-height: 24px;
    @include ell(5);
    margin-bottom: 17px;
  }
}
</style>