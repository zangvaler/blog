<template>
  <div id="index">
      <div class="header">
          <headerTop></headerTop>
      </div>
      <div class="nav">
          <navlist @navcodeinif="navcodeinif"></navlist>
      </div>
      <div class="content">
          <div v-if = "contShow" class="con_rf">
              <div class="con_list">
                  <contList ref="contlist" @detailsInif="detailsInif"></contList>
              </div>
              <div class="page">page</div>
          </div>
          <div v-if = "!contShow" class="contdetails">
              <contdetails :detailData="detailData"></contdetails>
          </div>
          <div class="con_lf">
              <news></news>
          </div>
      </div>
  </div>
</template>
<script>
import headerTop from './pages/headerTop'
import navlist from './pages/navlist'
import contList from './pages/contList'
import contdetails from './pages/contdetails'
import news from './pages/news'



export default {
    name: 'index',
    components:{   
    'headerTop':headerTop,
    'navlist':navlist,
    'contList':contList,
    'contdetails':contdetails,
    'news':news
  },
  data (){
      return {
          code:'',
          contShow:true,
          detailData:''
      }
  },
  methods: {
      navcodeinif(data){
          
          this.code = data
      },
      clickParent(num) {
          this.contShow = true;
          setTimeout(()=>{
              this.$refs.contlist.contInit(num);
          },20)
          
      
        
      },
      detailsInif(data){
          this.detailData = data.data
          this.contShow = data.detailType
      }
  },
  watch:{
    code(nval,oval){ 
        this.clickParent(nval)
    },
 }
}
</script>
<style scoped>
#index{
    color: #fff;
    height: 100%;
    background: url(https://up.enterdesk.com/edpic_source/95/7f/5c/957f5c857868869f3a04e38f81577097.jpg);
}
.header{
    height: 50px;
    background: #252f30;
}
.nav{
    height: 50px;
    background: rgba(0, 0, 0, .6);
    color:#fff;
    font-size: 16px;
    font-weight: 700;
}
.contdetails{
    background:rgba(0, 0, 0, .6);
}
.content{
    margin-top: 10px;
    height: calc(100% - 110px);
}
.con_rf,.contdetails{
    float: left;
    height: 100%;
    width: calc(100% - 310px);
}
.con_lf{
    float: right;
    height: 100%;
    width:300px;
    background:rgba(0, 0, 0, .6);
}
.con_list{
    height: calc(100% - 30px);
}
.page{
    height: 30px;
    width:100%;
    background:#252f30;
}
</style>

