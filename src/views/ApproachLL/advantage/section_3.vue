<!-- section 3 -->
<template>
  <div id="section_3">
    <SectionHeader :headerInfo='headerInfo'/>
    <ul class='nav-btns clearfix'>
        <li :class="{selected:curItem==='qytd'}" @click="curItem='qytd'">区域团队</li>
        <li :class="{selected:curItem==='ystu'}" @click="curItem='ystu'">医生团队</li>
    </ul>
    <ul class="content-wrap container">
        <figure v-for='(data,index) in curData' :key='index'>
            <img :src="data.imgPath" alt="青岛">
            <figcaption>{{data.title}} <time :datetime="data.time">{{changeTime(data.time)}}</time>
            </figcaption>
            <p>{{data.content}}</p>
        </figure>
    </ul>
  </div>
</template>

<script>
import SectionHeader from "@c/common/SectionHeader";
export default {
  name: "section3",
  data() {
    return {
        headerInfo: {
        title: "团队风采",
        introChi: "呵护牙齿健康  创造美好未来",
        introEng: "care for teeth to create a better future",
      },
      dataItem:{
          qytd:[
              {
                 imgPath:require('@a/image/advantage3.png'),
                 title:'山东青岛',
                 time:'2017-12-06',
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
              {
                 imgPath:require('@a/image/advantage3.png'),
                 title:'贵州贵阳 ',
                 time:'2017-9-16', 
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
              {
                 imgPath:require('@a/image/advantage3.png'),
                 title:'福建厦门 ',
                 time:'2017-4-15', 
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
          ],
          ystu:[
              {
                 imgPath:require('@a/image/advantage2.png'),
                 title:'山东青岛',
                 time:'2017-12-06', 
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
              {
                 imgPath:require('@a/image/advantage3.png'),
                 title:'贵州贵阳 ',
                 time:'2017-9-16', 
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
              {
                 imgPath:require('@a/image/advantage3.png'),
                 title:'福建厦门 ',
                 time:'2017-4-15', 
                 content:'“同一个朗朗 金种子绩效升级系统”辅导大会第二期【青岛站】' 
              },
          ],
      },
      curItem:'qytd'
    };
  },

  components: { SectionHeader },
  computed:{
      curData(){
          return this.dataItem[this.curItem]
      }
  },

  methods: {
      changeTime(time){
          let timeSplit = time.split('-')
          let lastTime = timeSplit.pop()
          if(lastTime.split('')[0]==='0'){
               lastTime = lastTime.split('')[1]
          }
          timeSplit.push(lastTime)
          return timeSplit.join('.')
      }
  },
};
</script>
<style lang='scss' scoped>
#section_3{
    padding-bottom:66px;
    background-color: rgb(246, 246, 246);
    .section-header{
        padding: 90px 0 42px 0;
    }
    .nav-btns{
        width: 214px;
        margin: auto;
        margin-bottom:70px;
        li{
            float: left;
            color: $ThemeColorBlack;
            width: 95px;
            line-height: 34px;
            margin-right: 10px;
            text-align: center;
            border: 1px solid rgb(160, 160, 160);
            &.selected{
                background-color:rgb(160, 160, 160) ;
                color: white;
            }
        }
    }
    .content-wrap{
        display: flex;
        justify-content: space-between;
        text-align: center;
        img{
            max-width: 360px;
            width: 100%;
            margin-bottom: 31px;
        }
        figcaption{
            color: $ThemeColorBlack;
            font-size: 14px;
            margin-bottom: 18px;
        }
        p{
            @include ell(1)
        }
    }
}
</style>