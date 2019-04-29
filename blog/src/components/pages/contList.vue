<template>
    <div id="contList">
       <div class="content_top" v-for="(item,index) in data">
           <h3 class="cont_tit">{{item.title}}</h3>
           <p class="cont_acc">{{item.account}}<span class="read" @click="readMore(index)">阅读更多</span></p>
           <p class="other_menu">
               <span class="creatTime">{{item.creatTime}}</span>
               <span class="author">{{item.author}}</span>
               
               <span></span>
           </p>
       </div>
    </div>
</template>
<script>
export default {
    props:['navcode'],
    data(){
        return {
            data:[],
        }
    },
    mounted(){
         if(sessionStorage['loginObj'] != undefined){
            this.contInit(1);
        }
    },
    methods: {
       contInit(code){
          this.$http.post('http://localhost:3000/contList',{code:code
          }).then(res=>{
            this.data = res.data
          })
      },
      readMore(index){
          let detailsData = {
              detailType:false,
              data:this.data[index]
          }
        this.$emit("detailsInif", detailsData)  
      }

    },
    
}
</script>
<style scoped>
h3,p{
    margin: 0;
    padding: 0;
}
#contList{
    height: 100%;
    overflow: auto;
}
.content_top{
    /* height: 100%; */
    margin: 0px auto 10px;
    background: rgba(0, 0, 0, .6)
}
.cont_tit,.cont_acc,.other_menu{
    width: 90%;
    margin: 0 auto;
}
.cont_tit{
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #666;
}
.cont_acc{
     height: 150px;
}
.other_menu{
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #666;
}
.creatTime{
    font-size: 14px;
    color: #ccc;
}
.author{
    float: right;
    font-size: 14px;
    color: #ccc;
}
.read{
    cursor:pointer;
    text-decoration:underline;
    padding-left: 20px;
    color: blueviolet;

}
.read:hover{
    color: rgb(185, 112, 16);
}
</style>

