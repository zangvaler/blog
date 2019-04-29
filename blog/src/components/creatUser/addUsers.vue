<template>
  <div class="addUser">
    <div>
      <span>用户名:</span><input type="text" name = "username" v-model="userName">
      <span>密码:</span><input type="text" name = "password" v-model="firstPwd">
      <span>确认密码:</span><input type="text" name = "password" v-model="scendPwd">
      <button @click= "addUsera">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addUser',
  data () {
    return {
      userName:'',
      firstPwd:'',
      scendPwd:''
    }
  },
  methods: {
    addUsera(){
      var name = this.userName;
      var Fpwd = this.firstPwd;
      var Spwd = this.scendPwd
      if(Fpwd == Spwd){
        this.$http.post('http://localhost:3000/users/creatUsers',{
          username: name,
          password: Spwd
        }).then(reslut=>{
        console.log(reslut.data.result)
        let data = JSON.stringify(reslut.data.result)
        if(reslut.data.result.code == 1){
           sessionStorage.loginObj = data
          this.$router.push({ path:'../pages/index'})
        }
      })
      }else{
        alert('两次密码不一致')
      }
      

    },
  }
}
</script>
<style scoped>

</style>
