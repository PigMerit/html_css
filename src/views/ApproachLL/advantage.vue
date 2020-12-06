<!-- 朗朗优势 -->
<template>
  <div id="advantage">
    <div class="section-1 container">
      <div class="intro-wrap clearfix">
        <img
          :src="require('@a/image/advantage1.png')"
          class="left"
          alt="advantag1"
        />
        <div class="content pull-right">
          <p>朗朗医疗投资有限公司是一家从事口腔连锁医疗投资和经营管理的专业公司，立足深圳，面向全国，以“全心全意服务民众”为经营宗旨，立志成为中国最值得信赖的口腔行业品牌。旗下已创立高端口腔连锁品牌——朗朗口腔。作为一家大型医疗连锁机构，朗朗口腔集口腔诊疗、科研、预防、美容和保健为一体，并先后在上海、广东、辽宁、山东、福建、湖北、浙江、四川等全国主要省市自治区设立了口腔连锁省级公司，目前已达300多家合作医疗机构，合作机构呈现爆发式增长势头。朗朗口腔未来将以省公司为管理平台，成为覆盖全国的大型口腔连锁机构。</p><br/>
          <p>朗朗医疗投资有限公司位于深圳市南山区科技园，以朗朗口腔为统一品牌，坚守“格局、诚信、规则、感恩、成全、分享”企业核心价值观，联合国内优秀口腔医院和口腔门诊部，通过规范化和信息化管理，并引入互联网运作模式，实现连锁经营。集合规模化经验优势和优良的财务数据，在确保双方利益的前提下，实现整体上市的阶段性目标，使参与方获得双赢的高额回报与社会效益。</p>
        </div>
      </div>
      <div class="intro-wrap clearfix">
        <img
          :src="require('@a/image/advantage2.png')"
          class="right"
          alt="advantag1"
        />
        <div class="content pull-left">
          <p>朗朗口腔坚持“严谨求精、用心服务”的医疗服务理念，通过强大的资本整合能力，创建国内口腔行业的高效资本平台，以独创的“朗朗合伙人模式”为引导，用精湛的医疗技术与高品质的服务标准体系，全方位保障每一位国民的口腔健康。朗朗口腔将肩负起时代的责任，让医者回归尊荣，令客户信赖满意，引领中国口腔事业创新发展。</p><br/>
          
        </div>
      </div>
    </div>
    <div class="block-height-80"></div>
    <Section2/>
    <Section3/>
    <Section4/>
    
  </div>
</template>

<script>
import Section2 from 'views/ApproachLL/advantage/section_2.vue'
import Section3 from 'views/ApproachLL/advantage/section_3.vue'
import Section4 from 'views/ApproachLL/advantage/section_4.vue'
export default {
  name: "advantage",
  data() {
    return {};
  },

  components: {Section2,Section3,Section4},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.section-1 {
  .intro-wrap {
    position: relative;
    margin-top: 80px;
    .content {
      position: absolute;
      padding: 24px 35px 35px;
      min-height: 160px;
      line-height: 32px;
      color: white;
      width: 640px;
      text-indent: 2em;
      background-color: $ThemeColorCyan;
      &.pull-right {
        right: 0;
        top: 0;
        border-left: 30px solid white;
        border-bottom: 30px solid white;
      }
      &.pull-left {
        left: 0;
        top: 0;
        border-right: 30px solid white;
        border-bottom: 30px solid white;
      }
    }
  }
}
</style>