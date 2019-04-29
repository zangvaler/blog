<template>
    <div id="news">
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
            <ul>
                <li class="newsList" v-for="(item,index) in arr">
                    <p class="list_img"><img :src="item.imgsrc" alt=""></p>
                    <div class="list_cont">
                        <p class="list_tit">
                            <span >{{item.title}}</span>
                        </p> 
                        <p class="list_time">
                            <span>{{item.source}}</span>
                            <span>{{item.replyCount}}评论</span>
                            <span>{{item.votecount}}阅读</span>
                        </p>
                    </div>
                </li>
            </ul>
        </scroller>
        <!-- <button @click="dropDown">上一页</button>
        <span>{{pageNum}}</span>
        <button @click="pullUp">下一页</button> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageNum:'1',
            noDate:false,//这是一个判断是否加载的开关
            arr:[],               
            page:1,
            pageSize:10
        }
    },
    mounted(){
     this.newsData()
    },
    methods: {
        dropDown(){
            if(this.pageNum <= '1'){
                this.pageNum = '10'
            }else{
                this.pageNum--
            }
            this.newsData()
        },
        pullUp(){
            if(this.pageNum >= '10'){
                this.pageNum = '1'
            }else{
                this.pageNum++
            }
            this.newsData()
        },
        newsData(){
        var that=this;
        var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/'+(this.page-1)*10+'-'+this.page*10+'.html'
        console.log('url: ', url);
        
        this.$http.post('http://localhost:3000/news',{url:url})
　　　　    .then(function(data){
            console.log(data)
                if(that.page<=that.pageSize){
　　　　　　　　  //这一步是判断你当前请求的这一页数据是不是最后一页，如果是最后一页就不能请求了（这个根据后端给的接口判断，只要能判断出就行了，如果是最后一页给that.noDate=true）
                    that.noDate=false;
                    console.log('that.noDate: ', that.noDate);

                    // 判断是下拉刷新还是上拉加载（这一步也是比较巧妙的，当然也很好理解）
                    if(that.page==1){
                            that.arr=data.data.T1348647853363;
                    }else{
                            that.arr=that.arr.concat(data.data.T1348647853363)
                    }
                }else{
                    that.noDate=true;
                }
            })
        },
              // 下拉刷新
       refresh(){
          this.page=1;
          this.noDate=false;
          setTimeout(function(){
              this.newsData();
              this.$refs.myscroller.finishPullToRefresh();
          }.bind(this),1700)
          console.log("下拉刷新")
      },
   // 上拉加载
    infinite(done){
        if(this.noDate){
            this.$refs.myscroller.finishInfinite(true);
       }else{
            setTimeout(() => {
                  this.page++;
                  this.$refs.myscroller.finishPullToRefresh();
                  this.newsData();
                  done();
            }, 1500);
            console.log("上拉加载")
      }
    },
    }
}
</script>

<style scoped>
ul,li,p,h2,h3,h4,h5{
    margin: 0;
    padding: 0;
}
h2,h3,h4,h5{
    width: 180px;
   
}
#news{
    height: 100%;
    position: relative;
    overflow: auto;
}
.newsList{
    list-style: none;
    margin-bottom: 13px;
}
.list_img{
    display: inline-block;
    width: 100px;
    height: 80px;
    background: #ccc;
}
.list_img img{
    float: left;
    width: 100px;
    height: 70px;
}
.list_cont{
    display: inline-block;
    width: calc(100% - 100px);
    height: 80px;
    float: right;
}
.list_tit{
     display: inline-block;
     font-size: 14px;
     width: 200px;
     height: 55px;
     position: relative;
}
.list_tit span{
    display: inline-block;
    position: absolute;
    width: 180px;
    top: 50%;
    transform: translate(0%,-50%);
    padding-left: 5px;
}
.list_tit span:hover{
    color: rgb(185, 112, 16);
}
.list_time{
    width: 200px;
    height: 25px;
    font-size: 12px;
    display: inline-block;
    padding-left: 5px;
    box-sizing: border-box;
}
._v-container[data-v-ecaca2b0]{
    /* position: static;
    overflow: auto; */
}
</style>

