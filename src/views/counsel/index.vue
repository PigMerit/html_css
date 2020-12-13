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
        tag: "资讯动态",
        path: "/counsel",
      },
      navBarItems: [
        {
          tag: "行业动态",
          path: "/counsel/hydt",
          name: "hydt",
        },
        {
          tag: "朗朗资讯",
          path: "/counsel/hydt",
          name: "llzx",
        },
        {
          tag: "媒体报道",
          path: "/counsel/gyhd",
          name: "mtbd",
        },
        {
          tag: "公益活动",
          path: "/approach/gyhd",
          name: "gyhd",
        },
      ],
    };
  },

  components: {NavBar},

  mounted(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>