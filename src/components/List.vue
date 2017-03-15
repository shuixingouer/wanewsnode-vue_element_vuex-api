<template>
  <div class="list">
    <div v-for="item in listData">
      <el-row :gutter="20" :key="item.id"  v-if=" item.showStyle == 0 ">
        <router-link :to="{ path: cooperateStatus(item.cooperateStatus, item) }">
          <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
            <el-col :span="24">
              <div v-html="item.title" :class="[item.type == 4 ? 'title_joke':'title']"></div>
              <div class="bottom clearfix">
                <div class="time">{{item.webName}}{{item.createdAt}}</div>
              </div>
            </el-col>
          </el-card>
        </router-link>
      </el-row>
      <el-row :gutter="20" :key="item.id"  v-if=" item.showStyle == 1 ">
        <router-link :to="{ path: cooperateStatus(item.cooperateStatus, item) }">
          <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
            <el-col :span="7">
              <div class="image image_ss1">
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
      <el-row :gutter="20" :key="item.id"  v-if=" item.showStyle == 2 ">
        <router-link :to="{ path: cooperateStatus(item.cooperateStatus, item) }">
          <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
            <el-col :span="24">
              <div class="title">{{item.title}}</div>
              <div class="bottom clearfix">
                <div class="time">{{item.webName}}{{item.createdAt}}</div>
              </div>
            </el-col>
            <el-col :span="24" :style="{ marginBottom:'30px' }">
              <div class="image image_ss2">
                <img v-lazy="item.images[0].imageUrl" class="image1">
                <div class="image2" :style="{ backgroundImage:'url('+item.images[0].imageUrl+')' }" v-show="no"></div>
              </div>
            </el-col>
          </el-card>
        </router-link>
      </el-row>
      <el-row :gutter="20" :key="item.id"  v-if=" item.showStyle == 3 ">
        <router-link :to="{ path: cooperateStatus(item.cooperateStatus, item) }">
          <el-card :body-style="{ margin:'20px 25px',padding:'0', overflow:'hidden', position:'relative' }">
            <el-col :span="24">
              <div class="title">{{item.title}}</div>
              <div class="bottom clearfix">
                <div class="time">{{item.webName}}{{item.createdAt}}</div>
              </div>
            </el-col>
            <el-col :span="24" :style="{ marginBottom:'30px' }">
              <el-col :span="7">
                <div class="image image_ss1">
                  <img v-lazy="item.images[0].imageUrl" class="image1">
                  <div class="image2" :style="{ backgroundImage:'url('+item.images[0].imageUrl+')' }" v-show="no"></div>
                </div>
              </el-col>
              <el-col :span="7" :offset="1">
                <div class="image image_ss1">
                  <img v-lazy="item.images[1].imageUrl" class="image1">
                  <div class="image2" :style="{ backgroundImage:'url('+item.images[1].imageUrl+')' }" v-show="no"></div>
                </div>
              </el-col>
              <el-col :span="7" :offset="1">
                <div class="image image_ss1">
                  <img v-lazy="item.images[2].imageUrl" class="image1">
                  <div class="image2" :style="{ backgroundImage:'url('+item.images[2].imageUrl+')' }" v-show="no"></div>
                </div>
              </el-col>
            </el-col>
          </el-card>
        </router-link>
      </el-row>
    </div>
    <div v-loading="loading" style="height:50px;"></div>
  </div>
</template>

<script>
  import { bus } from '../bus.js'
  import $ from 'webpack-zepto'
  export default {
    name: 'list',
    data () {
      return {
        listData: [],
        tip: '0',
        no: 'false',
        loading: true,
        scrollWatch: true,
        since: ''
      }
    },
    created () {
      var self = this
      self.getLists(0)
      bus.$on('tip', (text) => {
        self.getLists(text)
        self.tip = text
        $(window).scrollTop(0)
      })
      $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop()
        var scrollHeight = $(document).height()
        var windowHeight = $(this).height()
        if (self.scrollWatch) {
          if (scrollTop + windowHeight === scrollHeight) {
            if (self.tip === 0) {
              self.loadMore(0, self.since)
            } else {
              self.loadMore(self.tip, self.since)
            }
          }
        }
      })
      this.getImage()
    },
    methods: {
      getLists: function (id, since) {
        this.$http.post('/api/wap2/channel/' + id, {id: id}).then((response) => {
          this.listData = response.body.data.list
          this.since = response.body.data.since
        })
      },
      getImage: function () {
        setTimeout(function () {
          this.no = true
        }, 10000)
      },
      loadMore: function (id, since) {
        this.$http.post('/api/wap2/channel/' + id + '?since=' + since, {id: id, since: since}).then((response) => {
          this.listData = this.listData.concat(response.body.data.list)
          this.since = response.body.data.since
        })
      },
      cooperateStatus: function (status, item) {
        // console.log('ÒªÌø×ªÁË')
        if (status === 0 || status === 2 || status === 4) {
          return '/details?id=' + item.id + '&type=' + item.type
        } else if (status === 3) {
          return item.srcUrl
        } else if (status === 1) {
          return '/iframe?srcurl=' + encodeURIComponent(item.srcUrl)
          //  + '&id=' + item.id + '&type=' + item.type + 'cooperateStatus=' + item.cooperateStatus
        }
      }
    },
    destroyed () {
      this.scrollWatch = false
    }
  }
</script>

<style lang="less">
  .list{
    margin-top:100px;
    box-sizing:border-box;
    overflow-x:hidden;
  .el-card{
    border:none;
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
    color:#333;
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
  .title_joke{
    font-size:17px;
    color:#666;
    line-height:26px;
    margin-bottom:20px;
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
  .el-loading-spinner .circular{
    width:22px;
    height:22px;
  }
</style>
