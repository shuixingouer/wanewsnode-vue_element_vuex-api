<template>
  <div class="details">
    <div class="header_tab">
      <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
    </div>
    <div class="content_des">
      <div class="box">
        <div class="des_body" v-html="detailsData.body">
        </div>
      </div>
      <div class="box">
        <recommend></recommend>
      </div>
      <div class="box">
        <comment></comment>
      </div>
    </div>
  </div>
</template>

<script>
  import recommend from './Recommend'
  import comment from './Comment'
  export default {
    name: 'details',
    components: {
      recommend,
      comment
    },
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
      z-index:99;
      a{
        color:#2c3e50;
      }
    }
    .content_des{
      margin-top:50px;
      box-sizing:border-box;
      .box{
        background:#fff;
        width:100%;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        margin:20px 0 0;
      }
      .des_body{
        padding:20px 15px;
        font-size:16px;
        color:#666;
        line-height:28px;
      }
    }
  }
  /*内容详情页*/
  .articleTitle h1{font-size:20px;color:#212121;line-height:30px;margin-bottom:10px;}
  .articleTitle .des span{float:left;font-size:13px;color:#9e9e9e;line-height:30px;}
  .articleTitle .logo{border-radius:50%;margin-right:20px;width:20px;height:20px;overflow:hidden;text-align:center;}
  .articleTitle .logo img{height:100%;}
  .articleTitle .author{margin-right:20px;}
  .articleTitle .into{float:right;font-size:13px;color:#00bcd4;}
  .content .article{font-size:15px;color:#757575;line-height:24px;overflow:hidden;margin-bottom:40px;}
  .openAddress{font-size:13px;color:#00bcd4;text-decoration:underline;padding:10px 0;display:inline-block;}
  .article p video{width:100%;height:auto;}
</style>
