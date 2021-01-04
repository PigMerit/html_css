<!-- 门诊列表 -->
<template>
  <div id='mzlb' class="container">
    <ul class="content-wrap">
      <figure v-for="(item,index) in contentItems" :key="index">
        <img :src="item.img" :alt="item.tag">
        <figcaption>{{item.tag}}</figcaption>
      </figure>
    </ul>
    <el-pagination class='container' background layout="pager" :total="80" :page-size='12'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'mzlb',
  data () {
    return {
      contentItems:[
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        },
        {
          tag:'北京彼岸医疗器械技术服务有限公司',
          img:require('@a/image/mzlb1.png')
        }
      ]
    };
  },

  components: {},

  mounted(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
#mzlb{
  padding-top: 95px;
}
.content-wrap{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  figure{
    opacity: 0.7;
    margin-bottom: 88px;
    img{
      border-radius: 6px;
      box-shadow:0 0 11px rgba(4,0,0,0.1);
      border: 1px solid transparent;
      margin-bottom: 34px;
    }
    figcaption{
      color: rgb(1,1,1);
      font-size: 12px;
      text-align: center;
    }
    &:hover{
      opacity: 1;
      img{
        border: 1px solid #e5e5e5;
        box-shadow:0 0 11px rgba(4,0,0,0.2);
      }
    }
  }
}

.el-pagination{
    padding: 0;
    text-align: center;
    margin-bottom: 120px;
    /deep/ .el-pager{
        .number{
            background-color: rgb(245, 245, 245);
            color: $FontColor;
            line-height: 35px;
            height: 35px;
            width: 35px;
            &.active{
                background-color: $ThemeColorCyan !important;
            }
        }
    }
}
</style>