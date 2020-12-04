<!-- section header -->
<template>
  <header class="section-header">
      <h2>{{headerInfo.title}}</h2>
      <p class="intro">
          <i>{{headerInfo.introChi}}</i>
          <span></span>
          <i class="upper">{{headerInfo.introEng}}</i>
      </p>
  </header>
</template>

<script>
export default {
  name:'sectionHeader',
  props:{
      headerInfo:{
          type:Object,
          required:true
      }
  },
}

</script>
<style lang='scss' scoped>
.section-header{
    padding-top: 55px;
    padding-bottom:43px;
    text-align: center;
    h2{
        font-size:26px;
        color:$ThemeColorBlack;
    }
    span{
        display: inline-block;
        width:1px;
        height: 10px;
        margin: 0px 12px 0;
        background-color: $FontColor;
    }
    .intro{
        line-height: 35px;
    }
}
</style>