<!-- 每个页面的顶部导航栏 -->
<template>
  <div class="nav-bar">
    <div class="nav-image">
      <h2>{{ curItemInfo.tag }}</h2>
      <ul class="clearfix">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link :to="navInfo.path">{{ navInfo.tag }}</router-link>
        </li>
        <li>
          <router-link :to="curItemInfo.path">{{
            curItemInfo.tag
          }}</router-link>
        </li>
      </ul>
    </div>
    <ul class="nav-items container clearfix">
      <li
        v-for="barItem in navBarItems"
        :key="barItem.name"
        :class="{ selected: curItem === barItem.name }"
      >
        <router-link :to="barItem.path">{{ barItem.tag }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props:['navInfo','navBarItems'],
  data() {
    return {
    };
  },

  components: {},
  computed: {
      curItem(){
          return this.$route.name
      },
    curItemInfo() {
      return this.navBarItems.filter((item) => item.name === this.curItem)[0];
    },
  },
  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.nav-bar {
  border-bottom: 1px solid rgb(234, 234, 234);
  .nav-image {
    background: url("~@a/image/nav_image.png");
    background-size: cover;
    padding: 86px 0 82px 360px;
    color: white;
    h2 {
      font-size: 30px;
      margin-bottom: 17px;
    }
    li {
      float: left;
      text-align: center;
      &::after {
        content: ">";
        display: inline-block;
        margin: 0 5px;
      }
      &:last-child::after{
          display: none;
      }
    }
  }
  .nav-items {
    li {
      float: left;
      width: 92px;
      text-align: center;
      color: $ThemeColorBlack;
      margin-right: 12px;
      a {
        display: block;
        line-height: 49px;
      }
      &.selected {
        color: $ThemeColorCyan;
      }
    }
  }
}
</style>