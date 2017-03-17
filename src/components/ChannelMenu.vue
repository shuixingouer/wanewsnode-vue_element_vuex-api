<template>
  <div class="channel-menu">
  {{channelMenu}}
  </div>
</template>

<script>
export default {
  name: 'channelmenu',
  data () {
    return {
      channelMenu: []
    }
  },
  created () {
    if (this.$store.state.channelMenu.length === 0) {
      // 请求服务器获取数据
      this.$http.post('/api/wap2/channel/list').then(function (res) {
        this.$store.state.channelMenu = res.body
        console.log('/*******成功了吗*****************/')
      }, function (res) {
        // 请求失败处理
      })
    }
    console.log('/************************/')
  },
  mounted () {
    this.channelMenu = this.$store.getters.setChannelMenu
  },
  methods: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu{
    overflow:auto;
    height:44px;
    white-space:nowrap;
    box-sizing:border-box;
  }
  .el-menu--horizontal .el-menu-item{
    display:inline-block;
    float:none;
    font-size:15px;
    line-height:44px;
    height:44px;
    padding:0 10px;
  }
  .el-menu--horizontal > .el-menu-item:hover{
    border-width:3px;
  }
</style>
