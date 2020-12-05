<!-- figure box -->
<template>
  <figure class="figure-box">
    <img :src="figureInfo.image" :alt="figureInfo.title" />
    <figcaption>{{ figureInfo.title }}</figcaption>
    <time :datetime="figureInfo.time">{{ figureInfo.time }}</time>
    <span></span>
    <p>
      {{ figureInfo.content }}
    </p>
    <MyButton />
  </figure>
</template>

<script>
import MyButton from "@c/common/myButton";
export default {
  name: "figureBox",
  props: {
    figureInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  components:{MyButton}
};
</script>
<style lang='scss' scoped>
.figure-box {
  width: 250px;
  img {
    width: 100%;
    margin-bottom: 26px;
  }
  figcaption {
    font-size: 18px;
    @include ell(1);
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
    @include ell(2);
    margin-bottom: 17px;
  }
  .my-button {
    border-color: rgb(160, 160, 160);
    color: $FontColor;
  }
}
</style>