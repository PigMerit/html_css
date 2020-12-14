<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
    <div>111</div>
  </div>
</template>

<script>
import Header from '@c/header'
import Footer from '@c/footer'
export default {
  name:'app',
  data () {
    return {
    };
  },
  components:{
    Header,
    Footer
  }

}
</script>
<style>
@import "//at.alicdn.com/t/font_2245784_wfvy4es5sc.css";
</style>
<style lang="scss">

#app {

}

</style>
