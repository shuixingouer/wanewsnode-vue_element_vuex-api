<template>
  <div class="details">
    <div class="header_tab">
      <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
    </div>
    <div class="content_des">
      <div class="box">
        <div class="des_body" v-html="getCommentDetails.body">
        </div>
      </div>
      <div class="box">
        <comment></comment>
      </div>
    </div>
  </div>
</template>

<script>
  import comment from './Comment'
  export default {
    name: 'commentdetails',
    components: {
      comment
    },
    data () {
      return {
        getCommentDetails: [],
        no: 'false',
        scrollWatch: true
      }
    },
    created () {
      this.getCommentDetails(this.$route.query.id)
    },
    methods: {
      getCommentDetails: function (id) {
        this.$http.post('/api/comment/detail/' + id, {id: id}).then((response) => {
          this.getCommentDetails = response.body.data.recommend
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
</style>
