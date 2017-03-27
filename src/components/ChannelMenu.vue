<template>
  <div class="channel-menu">
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--<el-menu-item v-for="item in channelMenu" :key="item.channelId" :index="item.channelId">{{item.channelName}}</el-menu-item>-->
    <!--</el-menu>-->
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="menu in menus" :key="menu" index="menu.channelId">{{menu.channelName}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'channelmenu',
    props: {
      menus: {
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
