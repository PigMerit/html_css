<!-- third section -->
<template>
  <div id="third-section">
    <el-carousel height="265px" :autoplay="false" arrow="never" trigger="click" class='container'>
      <el-carousel-item>
        <div class="content-box clearfix">
            <div class="image-box left">
                <img :src="require('@a/image/section3_1.png')" alt="方晓珍">
                <span class="name">方晓珍</span>
            </div>
            <div class="content">
                <h4>牙周主诊医师</h4>
                <p>擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</p>
                <span></span>
                <p>国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                <MyButton/>
            </div>
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
import MyButton from "@c/common/myButton";
export default {
  name: "thirdSection",
  data() {
    return {};
  },

  components: {MyButton},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
#third-section {
  background-color: #f6f6f6;
  padding-bottom:15px;
}
.el-carousel {
    padding: 90px 0 45px;
  /deep/ .el-carousel__button{
    width: 8px;
    height: 3px;
    background-color: violet;
  }
}

.content-box{
    .image-box{
        position: relative;
        width: 500px;
        image{
            width: 100%;
        }
        .name{
            display: block;
            position: absolute;
            width: 111px;
            line-height: 48px;
            right:0px;
            top:50%;
            transform: translateY(-50%);
            color: white;
            text-align: center;
            background-color: rgba(01,01,01,.2);
        }
    }
    .content{
        margin-left: 500px;
        padding: 13px 10px 0 64px;
        h4{
            font-size: 18px;
            margin-bottom: 11px;
            color: $ThemeColorBlack;
        }
        span{
            display: block;
            height: 1px;
            width: 38px;
            background-color: #c5c5c5;
            margin-bottom: 26px;
        }
        p{
            line-height: 23px;
            margin-bottom: 13px;
        }
        .my-button{
            border: none;
            position: relative;
            left: -8px;
        }
    }
}

</style>