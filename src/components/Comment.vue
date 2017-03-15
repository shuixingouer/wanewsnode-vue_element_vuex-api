<template>
  <div class="des_comment">
    <h4>网友评论</h4>
    <el-row :gutter="20" :key="item.id"  v-for="item in detailsCommentData">
      <router-link :to="{ path: '/CommentDetails?id=' + item.id }">
        <el-card :body-style="{ margin:'15px 0',padding:'0', overflow:'hidden', position:'relative' }">
          <el-col :span="4">
            <div class="author">
              <img v-lazy="item.commentUserImage" class="image1">
              <div class="image2" :style="{ backgroundImage:'url('+item.commentUserImage+')' }" v-show="no"></div>
            </div>
          </el-col>
          <el-col :span="18" :offset="2">
            <div class="title">{{item.commentNickName}}</div>
            <div class="des">{{item.content}}</div>
            <div class="bottom cf">
              <div class="time">{{item.commentDt}}</div>
              <div class="nums"><img class="logo" src="./../assets/images/message.png">{{item.commentNums}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<img class="logo" src="./../assets/images/like-gray.png">{{item.hasLike}}</div>
            </div>
          </el-col>
        </el-card>
      </router-link>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    data () {
      return {
        detailsCommentData: [],
        no: 'false',
        scrollWatch: true
      }
    },
    created () {
      this.getDetailsComment(this.$route.query.id)
    },
    methods: {
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
  .des_comment{
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
    .author{
      display:block;
      position:relative;
      background:#efefef;
      width:50px;
      height:50px;
      border-radius:50%;
      overflow:hidden;
      .image1{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        border-radius:50%;
      }
      .image2{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        border-radius:50%;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:top left;
      }
    }
    .title,.des{
      font-size:16px;
      color:#666;
      line-height:24px;
    }
    .bottom{
      margin:10px 0 0 0;
      font-size:12px;
      color:#aaa;
      line-height:24px;
      overflow:hidden;
      .time{
        float:left;
      }
      .nums{
        float:right;
        img{
          width:16px;
          margin:0 5px -3px 0;
        }
      }
    }
  }
</style>
