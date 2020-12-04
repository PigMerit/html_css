<!-- home -->
<template>
  <div id='home'>
      <MySwipper/>
      <div class="block-height-38"></div>
      <FirstSection/>
      <div class="block-height-90"></div>
      <SecondSection/>
      <div class="block-height-90"></div>
      <ThirdSection/>
  </div>
</template>

<script>
import MySwipper from './MySwiper'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
export default {
  name:'homeView',
  data () {
    return {
    };
  },
  components:{
      MySwipper,
      FirstSection,
      SecondSection,
      ThirdSection
  }
}

</script>
<style lang='scss' scoped>
</style>