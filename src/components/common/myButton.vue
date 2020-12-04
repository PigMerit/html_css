<!-- my button -->
<template>
  <a class="my-button">查看更多<i class="icon iconfont icon-youjiantou"></i></a>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },

}

</script>
<style lang='scss' scoped>
.my-button{
    display: block;
    box-sizing: border-box;
    text-align: left;
    padding: 3px 10px;
    color: $ThemeColorBlack;
    background-color: transparent;;
    width: 94px;
    height: 31px;
    border: 1px solid #676767;
    cursor: pointer;
    i{
        font-size: 18px;
        position: relative;
        top:2px;
        left: 5px;
    }
}
</style>