<template>
  <div class="details">
    <div class="header_tab">
      <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
    </div>
    <div class="content_des">
      <div class="des_body" v-html="detailsData.body">
      </div>
      <div class="des_recommend">
        <h4>相关推荐</h4>
        <el-row :gutter="20" :key="item.id"  v-for="item in detailsRecommendData">
          <router-link :to="{ path: '/details?id=' + item.id }">
            <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
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
      <div class="des_comment">
        <h4>网友评论</h4>
        <el-row :gutter="20" :key="item.id"  v-for="item in detailsCommentData">
          <router-link :to="{ path: '/details?id=' + item.id }">
            <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
              <el-col :span="7">
                <div class="image image_ss1">
                  <img v-lazy="item.commentUserImage" class="image1">
                  <div class="image2" :style="{ backgroundImage:'url('+item.commentUserImage+')' }" v-show="no"></div>
                </div>
              </el-col>
              <el-col :span="16" :offset="1">
                <div class="title">{{item.commentNickName}}</div>
                <div class="bottom clearfix">
                  <div class="time">{{item.content}}{{item.commentDt}}{{item.commentNums}}{{item.hasLike}}</div>
                </div>
              </el-col>
            </el-card>
          </router-link>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        detailsData: [],
        detailsRecommendData: [],
        detailsCommentData: [],
        no: 'false',
        scrollWatch: true
      }
    },
    created () {
      this.getDetails(this.$route.query.id)
      this.getDetailsRecommend(this.$route.query.id)
      this.getDetailsComment(this.$route.query.id)
    },
    methods: {
      getDetails: function (id) {
        this.$http.post('/api/wap2/static/detail/' + id, {id: id}).then((response) => {
          this.detailsData = response.body.data
          console.log(response)
        })
      },
      getDetailsRecommend: function (id) {
        this.$http.post('/api/wap2/dynamic/detail/' + id, {id: id}).then((response) => {
          this.detailsRecommendData = response.body.data.recommend
          console.log(response)
        })
      },
      getDetailsComment: function (id) {
        this.$http.post('/api/v2/comment/list/' + id + '?type=2', {id: id}).then((response) => {
          this.detailsCommentData = response.body.data
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="less">
  .details{
    background:#f1f0ee;
    overflow:hidden;
    width:100%;
    box-sizing:border-box;
    .header_tab{
      height:50px;
      line-height:50px;
      padding:0 15px;
      background:rgba(255,255,255,0.9);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .12), 0px 0px 6px 0px rgba(0, 0, 0, .04);
      position:fixed;
      top:0;
      width:100%;
      box-sizing:border-box;
      a{
        color:#2c3e50;
      }
    }
    .content_des{
      margin-top:50px;
      box-sizing:border-box;
      .des_body,.des_recommend,.des_comment{
        background:#fff;
      }
      .des_body{
        padding:20px 15px;
        font-size:16px;
        color:#666;
        line-height:28px;
      }
      .des_recommend,.des_comment{
        background:#fff;
        border-top:1px solid #efefef;
        border-bottom:1px solid #efefef;
        margin:20px 0 0;
        h4{
          color:#333;
          font-size:16px;
          line-height:50px;
          padding:0;
          margin:0;
          padding-left:20px;
          font-weight:normal;
        }
        .el-card{
          border:none;
        }
      }
      .des_recommend{
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
