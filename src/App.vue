<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@c/header'
export default {
  name:'app',
  data () {
    return {
    };
  },
  components:{
    Header
  }

}
</script>
<style>
@import "//at.alicdn.com/t/font_2245784_mr1vvdhwyq.css";
</style>
<style lang="scss">

#app {

}

</style>
