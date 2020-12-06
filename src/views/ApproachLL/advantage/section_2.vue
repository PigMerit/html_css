<!-- section 2 -->
<template>
  <div id="section_2">
    <div class="container header">
      <h2>朗朗优势</h2>
      <p>呵护牙齿健康 创造美好未来</p>
    </div>
    <div class="nav-bar">
      <ul class="clearfix">
        <li
          v-for="item in barItems"
          :key="item.id"
          class="left"
          :class="{ selected: curItem === item.id }"
          @click="curItem = item.id"
        >
          {{ item.tag }}
        </li>
      </ul>
    </div>
    <ul class="conten-wrap container clearfix">
      <li v-for="(data,index) in curData" :key='index'>
        <p>
          {{data.content}}
        </p>
        <img :src="data.imgPath" :alt="data.imgInfo" :class="'style'+data.style" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "section2",
  data() {
    return {
      curItem: "lspp",
      barItems: [
        {
          tag: "连锁品牌",
          id: "lspp",
        },
        {
          tag: "管理模式",
          id: "glms",
        },
        {
          tag: "资本动作",
          id: "zbdz",
        },
        {
          tag: "资源整合",
          id: "zyzh",
        },
        {
          tag: "网络信息化管理",
          id: "wlxxhgl",
        },
      ],
      contentData: {
        lspp: [
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_2.png"),
            style: "1",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_3.png"),
            style: "2",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_4.png"),
            style: "3",
            imgInfo: "qwe",
          },
        ],
        glms: [
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_2.png"),
            style: "1",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_3.png"),
            style: "1",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_4.png"),
            style: "1",
            imgInfo: "qwe",
          },
        ],
        zbdz: [
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_2.png"),
            style: "2",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_3.png"),
            style: "2",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_4.png"),
            style: "2",
            imgInfo: "qwe",
          },
        ],
        zyzh: [
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_2.png"),
            style: "3",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_3.png"),
            style: "3",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_4.png"),
            style: "3",
            imgInfo: "qwe",
          },
        ],
        wlxxhgl: [
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_2.png"),
            style: "1",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_3.png"),
            style: "2",
            imgInfo: "qwe",
          },
          {
            content:
              "通过信息化系统，朗朗的客户可以实现在国内就医的无缝对接，真正实现客户全国门店通兑治疗和客户资料共享。即使区域不同，诊疗医生不同，得到的是同样的高品质。",
            imgPath: require("@a/image/advantage2_4.png"),
            style: "3",
            imgInfo: "qwe",
          },
        ],
      },
    };
  },

  computed:{
      curData(){
          return this.contentData[this.curItem]
      }
  }
};
</script>
<style lang='scss' scoped>
#section_2 {
  padding: 84px 0 87px 0;
  color: white;
  background: url("~@a/image/advantage2_1.png") no-repeat;
  background-size: cover;
  .header {
    text-align: center;
    margin-bottom: 63px;
    h2 {
      margin-bottom: 15px;
      font-size: 40px;
      color: white;
    }
  }
  .nav-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 77px;
    li {
      padding: 0 35px;
      line-height: 50px;
      background-color: $ThemeColorBrown;
      position: relative;
      margin: 0 12px;
      &.selected {
        background-color: $ThemeColorCyan;
        &::after {
          visibility: visible;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 0px;
        visibility: hidden;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) translateY(100%);

        border-top: 7px solid $ThemeColorCyan;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
      }
    }
  }
  .conten-wrap {
    display: flex;
    justify-content: space-between;
    li {
      position: relative;
      box-sizing: border-box;
      font-size: 13px;
      width: 346px;
      height: 215px;
      padding: 25px 41px 0px;
      background-color: rgba(1, 1, 1, 0.5);
      line-height: 34px;
      text-align: center;
      p {
        position: relative;
        z-index: 10;
      }
      img {
        display: block;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 1;
        &.style1 {
          border-radius: 100%;
          border: 4px solid $ThemeColorBlack;
          transform: translateX(-50%) translateY(-50%);
        }
        &.style2 {
          border-radius: 100%;
          border: 8px solid white;
          transform: translateX(-50%);
        }
        &.style3 {
          border-radius: 100%;
          border: 8px solid white;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
  }
}
</style>