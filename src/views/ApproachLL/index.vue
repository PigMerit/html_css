<!-- 走进朗朗 -->
<template>
  <div id='approach-ll'>
      <NavBar :navInfo='navInfo' :navBarItems='navBarItems'/>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@c/common/navBar.vue'
export default {
  name:'approachLL',
  data () {
    return {
        navInfo: {
        tag: "走进朗朗",
        path: "/approach",
      },
      navBarItems: [
        {
          tag: "朗朗简介",
          path: "/approach/abstract",
          name: "abstract",
        },
        {
          tag: "朗朗优势",
          path: "/approach/advantage",
          name: "advantage",
        },
        {
          tag: "企业荣誉",
          path: "/approach/abstract",
          name: "qyry",
        },
        {
          tag: "团队风采",
          path: "/approach/abstract",
          name: "tdfc",
        },
      ],
    };
  },

  components: {NavBar},

  mounted(){
      console.log(this.$route,this.$router)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>