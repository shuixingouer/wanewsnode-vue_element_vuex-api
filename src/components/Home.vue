<template>
  <div class="home">
    <div class="header_menu">
      <img class="logo" src="./../assets/images/logo.png">
      <channel-menu :menus="channelMenus"></channel-menu>
    </div>
    <list></list>
  </div>
</template>

<script>
import list from './List'
import channelMenu from './ChannelMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      channelMenus: 'getChannelMenus'
    })
  },
  created () {
    this.$store.dispatch('setChannelMenus')
  },
  components: {
    channelMenu,
    list
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header_menu{
  position:fixed;
  overflow:hidden;
  width:100%;
  top:0;
  left:0;
  z-index:2;
  background:#fff;
  .logo{
    display:block;
    width:130px;
    margin:10px auto;
  }
}
</style>
