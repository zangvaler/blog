<template>
    <div id="heagder">
        <div class="head_top">
            <p class="head_lf">Zangval With Blog</p>
            <p class="head_rf">
                <span class="search">
                    <input type="text" class="input" v-model="searchVal">
                    <button class="search_btn" @click= "searchBtn">search</button>
                </span>
                <span class="btn">
                    <span v-if = "!signin" class="userName"> {{username}} </span>
                    <span v-if = "manage" class="returnUser" @click= "manageInfo">管理</span>
                    <span v-if = "signin" class="returnUser" @click= "returnUser">登录</span>
                    <span class="returnUser" @click= "returnUser">退出</span>
                </span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            signin:false,
            searchVal:'',
            manage:false,
        }
    },
    mounted(){
        var loginData = JSON.parse(sessionStorage['loginObj']);
        if(sessionStorage['loginObj'] != undefined){
            console.log(sessionStorage['loginObj'])
            this.username = loginData.username
        }else{
            this.signin = true;
            
        }
        if(loginData.admin == '1'){
            this.manage = true;
        }
    },
    methods: {
        returnUser(){
        sessionStorage.removeItem('loginObj');
        this.$router.push({ path:'/'})
        },
        searchBtn(){
            window.open('https://www.baidu.com/s?wd='+this.searchVal)
        },
        manageInfo(){
            this.$router.push({ path:'../managePage/manage'})
        }
    }
}
</script>

<style scoped>
#heagder{
    height: 100%;
}
.head_top{
     height: 100%;
}
.head_top p{
    height: 100%;
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 50px;
}
.head_rf{
    width: 650px;
    float:right;
}
.btn{
    float: right;
}
.returnUser{
    height: 20px;
    color: #fff;
    font-size: 13px;
    border:1px solid #ccc;
    margin: 0 5px;
    padding: 0 15px;
    border-radius: 13px;
}
.returnUser:hover{
    color: #3d89ee;
    border:1px solid #3d89ee;
}
.input{
    color: #fff;
    padding: 0;
    border: 1px solid #ccc;
    width: 200px;
    height: 20px;
    background: none;
}
.search_btn{
     height: 22px;
     /* padding: ; */
     background: none;
     color: #fff;
}
.search_btn:hover{
     color:#3d89ee;
       border:1px solid #3d89ee; 
}
</style>

