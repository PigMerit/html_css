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

<style lang="scss">

#app {

}

</style>
