<template>
    <div id="nav">
        <nav class="navlist">
            <span class="list" v-for="(item,index) in navlist" :key="index" 
            :class="item.range_code == rangeCode ? 'btm-activex':''"
            @click="rangeClick(item.range_code,$event)">{{ item.name }}</span>
        </nav>
    </div>
</template>
<script>
export default {
    data () {
    return {
     navlist:[],
     rangeCode:'1',
    }
  },
  mounted(){
      this.dataInit();
     
  }, 
  methods: {
      dataInit(code){
          this.$http.post('http://localhost:3000/navlist',{
          
      }).then(res=>{
          this.navlist = res.data
      })
      },
      rangeClick(code){
        //   this.contInit(code)
          this.rangeCode = code; 
          this.$emit("navcodeinif", this.rangeCode) 
      },
      
  }
}
</script>
<style scoped>
#nav{
    height: 100%;
    position: relative;
}
.navlist{
    height: 60%;
    width: 70%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -1%;
    margin-left: -35%;
}
.list{
    cursor:pointer;
    display: inline-block;
    width: 100px;
    height: 100%;
    margin: 0 15px;
    line-height: 27px;
    text-align: center;
    border-radius: 15px;
}
.list:hover{
    text-decoration:underline;
}
.btm-activex{
   
    background: #252f30;
}
</style>

