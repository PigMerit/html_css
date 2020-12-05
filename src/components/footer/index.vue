<!-- main footer -->
<template>
  <div id="main-footer">
    <div class="content-wrap container clearfix">
      <address class="address-box left">
        <h5>朗朗医疗投资有限公司</h5>
        <p>
          集团总部热线 :
          <a href="tel:4000-890-608" title="4000-890-608">4000-890-608</a>
        </p>
        <p>集团总部地址：广东省深圳市南山区高新南一道3号富诚大厦三楼</p>
        <ul class="share-box clearfix">
          <li class="weibo">
            <i class="icon iconfont icon-weibo"></i>
            <div class="qr-code">
              <img :src="require('@a/image/qr_code.png')" alt="二维码" />
            </div>
          </li>
          <li class="weixin">
            <i class="icon iconfont icon-gongzhonghao"></i>
            <div class="qr-code">
              <img :src="require('@a/image/qr_code.png')" alt="二维码" />
            </div>
          </li>
        </ul>
      </address>
      <ul class="link-box right clearfix">
        <dl>
          <dt><a href="" title="走进朗朗">走进朗朗</a></dt>
          <dd><a href="" title="朗朗简介">朗朗简介</a></dd>
          <dd><a href="" title="朗朗优势">朗朗优势</a></dd>
          <dd><a href="" title="企业荣誉">企业荣誉</a></dd>
          <dd><a href="" title="团队风采">团队风采</a></dd>
        </dl>
        <dl>
          <dt>资讯动态</dt>
          <dd><a href="" title="行业动态">行业动态</a></dd>
          <dd><a href="" title="朗朗资讯">朗朗资讯</a></dd>
          <dd><a href="" title="媒体报道">媒体报道</a></dd>
          <dd><a href="" title="公益活动">公益活动</a></dd>
        </dl>
        <dl>
          <dt>资讯动态</dt>
          <dd><a href="" title="行业动态">行业动态</a></dd>
          <dd><a href="" title="朗朗资讯">朗朗资讯</a></dd>
        </dl>
        <dl>
          <dt>资讯动态</dt>
          <dd><a href="" title="行业动态">行业动态</a></dd>
          <dd><a href="" title="朗朗资讯">朗朗资讯</a></dd>
          <dd><a href="" title="媒体报道">媒体报道</a></dd>
        </dl>
        <dl>
          <dt>资讯动态</dt>
          <dd><a href="" title="行业动态">行业动态</a></dd>
          <dd><a href="" title="朗朗资讯">朗朗资讯</a></dd>
          <dd><a href="" title="媒体报道">媒体报道</a></dd>
          <dd><a href="" title="公益活动">公益活动</a></dd>
        </dl>
        <dl>
          <div class="weixin-code">
            <img :src="require('@a/image/qr_code.png')" alt="二维码" />
          </div>
          <p class="text-center">微信公众号</p>
        </dl>
      </ul>
    </div>
    <span class="container"></span>
    <p class="copywright container">
        © 2005 - 2016 朗朗口腔医疗投资有限公司 版权所有 粤ICP备08130115号-1
    </p>
  </div>
</template>

<script>
export default {
  name: "mainFooter",
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
#main-footer {
  color: rgb(209, 209, 209);
  padding: 74px 0 0 0;
  background-color: rgb(248, 248, 248);
  .content-wrap {
    margin-bottom: 50px;
  }
  span{
      display: block;
      height: 1px;
      background-color: rgb(243, 243, 243);
  }
  .copywright{
      line-height: 48px;
  }
}
.address-box {
  h5 {
    font-size: 24px;
    margin-bottom: 26px;
  }
  p {
    line-height: 23px;
  }
  ul {
    margin-top: 38px;
    li {
      position: relative;
      width: 30px;
      height: 30px;
      float: left;
      color: white;
      background-color: rgb(224, 224, 224);
      border-radius: 50px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      .qr-code {
        position: absolute;
        top: -90px;
        left: 50%;
        padding: 6px;
        border-radius: 6px;
        transform: translateX(-50%);
        background-color: white;
        visibility: hidden;
        &::after {
          content: "";
          box-sizing: border-box;
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 4px solid white;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }
      }
      &:hover {
        .qr-code {
          visibility: visible;
        }
      }
      &.weibo:hover {
        background: rgb(244, 185, 182);
      }
      &.weixin:hover {
        background: rgb(192, 230, 190);
      }
    }
  }
}
.link-box {
  dl {
    float: left;
    margin-right: 36px;
  }
  dt {
    line-height: 25px;
    &::after {
      content: "";
      display: block;
      height: 1px;
      margin: 14px 0;
      background-color: rgb(236, 236, 236);
    }
  }
  dd {
    line-height: 23px;
  }
  .weixin-code {
    padding: 6px;
    border-radius: 6px;
    margin-bottom: 8px;
    background-color: white;
  }
}
</style>