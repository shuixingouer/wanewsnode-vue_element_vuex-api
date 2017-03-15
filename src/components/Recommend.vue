<template>
  <div class="des_recommend">
    <h4>相关推荐</h4>
    <el-row :gutter="20" :key="item.id"  v-for="item in detailsRecommendData">
      <router-link :to="{ path: '/details?id=' + item.id }">
        <el-card :body-style="{ margin:'20px 0',padding:'0', overflow:'hidden', position:'relative' }">
          <el-col :span="7">
            <div class="image image_ss1" v-show="item.images!=''">
              <img v-lazy="item.images[0].imageUrl" class="image1">
              <div class="image2" :style="{ backgroundImage:'url('+item.images[0].imageUrl+')' }" v-show="no"></div>
            </div>
          </el-col>
          <el-col :span="16" :offset="1">
            <div class="title">{{item.title}}</div>
            <div class="bottom clearfix">
              <div class="time">{{item.webName}}{{item.createdAt}}</div>
            </div>
          </el-col>
        </el-card>
      </router-link>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data () {
      return {
        detailsRecommendData: [],
        no: 'false',
        scrollWatch: true
      }
    },
    created () {
      this.getDetailsRecommend(this.$route.query.id)
    },
    methods: {
      getDetailsRecommend: function (id) {
        this.$http.post('/api/wap2/dynamic/detail/' + id, {id: id}).then((response) => {
          this.detailsRecommendData = response.body.data.recommend
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="less">
  .des_recommend{
    padding:0 30px;
    h4{
      color:#333;
      font-size:16px;
      line-height:50px;
      font-weight:normal;
    }
    .el-card{
      border:none;
      border-top:1px solid #efefef;
      box-shadow:none;
      border-radius:0;
    }
    .image{
      display:block;
      position:relative;
      background:#efefef;
      width:100%;
      overflow:hidden;
    }
    .image_ss1{
      height:70px;
    }
    .image_ss2{
      height:230px;
    }
    .image1{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
    .image2{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-size:cover;
      background-repeat:no-repeat;
      background-position:top left;
    }
    .title{
      font-size:16px;
      color:#000;
      line-height:24px;
      max-height:48px;
      margin-bottom:20px;
      text-overflow:-o-ellipsis-lastline;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical
    }
    .bottom{
      position:absolute;
      bottom:0;
      right:0;
    }
    .time{
      color:#999;
      font-size:12px;
    }
  }
  /*内容详情页*/
  .articleTitle h1{font-size:20px;color:#212121;line-height:30pxpx;margin-bottom:10px;}
  .articleTitle .des span{float:left;font-size:13px;color:#9e9e9e;line-height:30px;}
  .articleTitle .logo{border-radius:50%;margin-right:20px;width:20px;height:20px;overflow:hidden;text-align:center;}
  .articleTitle .logo img{height:100%;}
  .articleTitle .author{margin-right:20px;}
  .articleTitle .into{float:right;font-size:13px;color:#00bcd4;}
  .content .article{font-size:15px;color:#757575;line-height:24px;overflow:hidden;margin-bottom:40px;}
  .openAddress{font-size:13px;color:#00bcd4;text-decoration:underline;padding:10px 0;display:inline-block;}
  .article p video{width:100%;height:auto;}

  .cf:before,
  .cf:after {
    content: "";
    display: table;
  }
  .cf:after {
    clear: both;
  }
  .cf {
    zoom: 1;
  }
</style>
