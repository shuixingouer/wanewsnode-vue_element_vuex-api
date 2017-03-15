<template>
  <div class="channel-menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in channel" :key="item.channelId" :index="item.channelId" @click="cutOff(item.channelId)">{{item.channelName}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { bus } from '../bus.js'
export default {
  name: 'channelmenu',
  data () {
    return {
      activeIndex: '0',
      isActive: 0,
      channel: []
    }
  },
  created () {
    this.getLists()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    cutOff: function (index) {
      this.isActive = index
      bus.$emit('tip', index)
    },
    getLists: function () {
      this.$http.post('/api/wap2/channel/list', {}).then((response) => {
        this.channel = response.body.data
      })
    }
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
