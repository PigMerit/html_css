<!-- 咨询动态的根页面 -->
<template>
  <div id='counsel'>
      <NavBar :navInfo='navInfo' :navBarItems='navBarItems'/>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@c/common/navBar.vue'
export default {
  name:'counsel',
  data () {
    return {
        navInfo: {
        tag: "合作伙伴",
        path: "/cooperation",
      },
      navBarItems: [
        {
          tag: "门诊列表",
          path: "/cooperation/mzlb",
          name: "mzlb",
        }
      ],
    };
  },

  components: {NavBar},
}

</script>
<style lang='scss' scoped>
</style>