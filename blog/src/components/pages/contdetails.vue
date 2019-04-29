<template>
    <div id="contdetails">
        <div class="content">
            <h2 class="title">{{data.title}}</h2>
            <p class="othermenu">
                <span class="menu_lf">{{data.creatTime}}</span>
                <span class="menu_rf">
                    <span>作者:{{data.author}}</span>
                    <span>阅读量:{{data.author}}</span>
                    <span>点赞数:{{data.author}}</span>
                </span>
            </p>
            <p class="cont">
                {{data.content}}
            </p>
        </div>
    </div>
</template>
<script>

export default {
    props:['detailData'],
    name:'contdetails',
    data(){
        return {
            data:''
        }
    },
    mounted(){
        this.data = this.detailData
    },
    methods:{

    }
}
</script>
<style scoped>
h2,h3,h4,p{
    margin: 0;
    padding: 0;
}
#contdetails{
    height: 100%;
}
.content{
    height: 100%;
    padding: 0 60px;
}
.title{
    padding: 30px 0;
}
.othermenu{
    font-size: 13px;
    border-bottom: 1px solid #fff; 
}
.cont{
    padding-top:10px;
}
.menu_lf{
    display: inline-block;
    width: 200px;
}
.menu_rf{
    width: calc(100% - 200px);
    display: inline-block;
    text-align: right;
    float: right;
}
.menu_rf span{
    padding: 0 10px;
}
</style>

