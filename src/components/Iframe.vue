<template>
  <div class="iframe">
    <div class="header_tab">
      <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
    </div>
    <!--<iframe :src="this.$route.query.srcUrl"></iframe>-->
  </div>
</template>

<script>
  export default {
    name: 'iframe',
    data () {
      return {
      }
    },
    methods: {
      getIframe: function () {
        // console.log(decodeURIComponent(this.$route.query.srcUrl))
        return decodeURIComponent(this.$route.query.srcUrl)
        // decodeURIComponent(this.$route.query.srcUrl)
      }
    }
  }
</script>

<style lang="less">
  .iframe{
    overflow:hidden;
    width:100%;
    height:100%;
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
  }

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
