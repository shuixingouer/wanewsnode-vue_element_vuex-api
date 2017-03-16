<template>
  <div class="channel-menu">
  {{channelMenu}}
  </div>
</template>

<script>
import { getChannelMenu } from '../vuex/actions'
import { channelMenu } from '../vuex/getters'
export default {
  name: 'channelmenu',
  vuex: {
    getters: {
      channelMenu: channelMenu
    },
    actions: {
      getChannelMenu
    }
  },
  route: {
    data (transition) {
    }
  },
  created () {
    this.getChannelMenu()
    console.log('/************************/')
  },
  data () {
    return {
    }
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
