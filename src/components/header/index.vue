<!-- main header -->
<template>
  <header id='main-header'>
      <div class="container clearfix">
          <div class="logo-wrap left">
              <h1><router-link to='home' class="logo"><img :src='require("@a/image/home.png")' alt="logo"></router-link></h1>
          </div>
          <div class="right">
              <ul class='top-menu clearfix'>
                  <div class="lang-bar">
                      中文
                      <i class="icon iconfont icon-RectangleCopy"></i>
                      <ul class="lang-menu">
                          <li>中文</li>
                          <li>英文</li>
                      </ul>
                  </div>
                  <li><a href="tel:0755-86566573">0755-86566573</a></li>
                  <li><router-link to='home'>朗朗口腔集团官网</router-link></li>
              </ul>
              <ul class="nav-bar">
                  <li>首页</li>
                  <li>走进朗朗
                      <ul class="menu-wrap">
                          <li><router-link to='home'>朗朗简介</router-link></li>
                          <li><router-link to='home'>朗朗优势</router-link></li>
                          <li><router-link to='home'>核心团队</router-link></li>
                          <li><router-link to='home'>朗朗历程</router-link></li>
                      </ul>
                  </li>
                  <li>资讯动态
                      <ul class="menu-wrap">
                          <li>朗朗简介</li>
                          <li>朗朗优势</li>
                          <li>核心团队</li>
                          <li>朗朗历程</li>
                      </ul>
                  </li>
                  <li>合作伙伴
                      <ul class="menu-wrap">
                          <li>朗朗简介</li>
                          <li>朗朗优势</li>
                          <li>核心团队</li>
                          <li>朗朗历程</li>
                      </ul>
                  </li>
                  <li>辅助功能
                      <ul class="menu-wrap">
                          <li>朗朗简介</li>
                          <li>朗朗优势</li>
                          <li>核心团队</li>
                          <li>朗朗历程</li>
                      </ul>
                  </li>
                  <li>联系我们</li>
              </ul>
          </div>
      </div>
      
  </header>
</template>

<script>
export default {
  name:'mainHeader',
  data () {
    return {
    };
  }
}

</script>
<style>
@import "//at.alicdn.com/t/font_2245784_6421zyt0pto.css";
</style>
<style lang='scss' scoped>

// 整个header的样式
#main-header{
    padding-top: 7px;
    .logo-wrap{
        padding-top: 25px;
        cursor: pointer;
    }
}
// 最右上方的菜单
.top-menu{
    line-height:22px;
    .lang-bar{
        position: relative;
        float:right;
        box-sizing: border-box;
        background-color: rgb(236,236,236);
        width: 52px;
        padding: 0 6px 0 8px;
        cursor: pointer;
        .icon{
            position: absolute;
            top:2px;
            right:2px;
            font-size: 20px;
        }
        &:hover {
            .lang-menu{
                display: block;
            }
        }
        .lang-menu{
            display: none;
            position: absolute;
            right: 0px;
            width: 95px;
            line-height: 28px;
            text-align: center;
            background-color: rgb(236,236,236);
            z-index: 10;
            li:hover{
                background-color:rgb(224,224,224);
                color: $ThemeColorCyan;
            }
        }
    }
    >li{
        float: right;
        position: relative;
        margin-right: 24px;
        &::after{
            content: '';
            display: block;
            height:12px;
            top:5px;
            right:-12px;
            border-left: 1px solid $FontColor;
            position: absolute;
        }
    }
}

//顶部导航条的样式
.nav-bar{
    display: flex;
    margin-right: -26px;
    >li{
        position: relative;
        width: 114px;
        line-height: 53px;
        text-align: center;
        color: $ThemeColorBlack;
        font-weight: bold;
        cursor: pointer;
        z-index: 0;
        &::after{
                content: '';
                position: absolute;
                display: block;
                box-sizing: border-box;
                left:50%;
                transform: translateX(-50%);
                border-top: 8px solid rgb(245,245,245);
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                visibility:hidden;
            }
        .menu-wrap{
            padding-top: 17px;
            width: 114px;
            position: absolute;
            visibility: hidden;
            li{
                background-color: rgb(245,245,245);
            }
            li:hover{
                background-color:rgb(234,234,234) ;
            }
        }
        &:hover{
            background-color: rgb(245,245,245);
            &::after{
                visibility:visible;
            }
            .menu-wrap{
                visibility:visible;
            }
        }
    }
}
</style>