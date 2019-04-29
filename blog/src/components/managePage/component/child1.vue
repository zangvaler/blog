<template>
  <div id="fristchild">
      <el-container>
        <el-header>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="用户等级">
              <el-select v-model="form.region" placeholder="请选择用户等级">
                <el-option label="管理员" value="0"></el-option>
                <el-option label="超级管理员" value="1"></el-option>
              </el-select>
            </el-form-item>
              <div class="btn">
							  <el-button type="primary" @click="revampData">修改</el-button>
                <el-button type="primary" @click="deleteData">删除</el-button>
              </div>
          </el-form>
        </el-header>
        <el-main>
          <el-table v-loading="loading" :data="tableData" highlight-current-row @current-change="checkRow" border style="width: 100%" ref="table">
            <el-table-column label="序号" type="index" width="50"  :index="indexMethod"></el-table-column>
            <el-table-column prop="a1" label="ID" :width="tableStyWidth*0.1"></el-table-column>
            <el-table-column prop="a2" label="用户名" :width="tableStyWidth*0.3"></el-table-column>
             <el-table-column prop="a2" label="用户等级" :width="tableStyWidth*0.3"></el-table-column>
              <el-table-column prop="a2" label="密码" :width="tableStyWidth*0.3"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
  </div>
</template>
<script> 
  export default {
    data() {
      return {
        loading:false,
        tableData:[],
        currentPage:1,
        tableStyWidth:0,
        form: {
          name: '',
          region: '',
          pwd: '',
        }
      }
    },
    mounted(){
      this.$nextTick(function () {
          let tableStyWidth = this.$refs.table.$el.clientWidth;
          this.tableStyWidth = Number(tableStyWidth)
      })
    },
    methods: {
      searchData(){

      },
      revampData(){

      },
      deleteData(){

      },
      checkRow(row){

      },
      indexMethod(index) {
    	return index+1+(this.currentPage-1)*100;
    },
    }
  }
</script>
<style scoped>
  .el-header{
    border-bottom:1px solid #000;
  }
  .el-form-item{
    width: 280px;
    display: inline-block;
  }
 .el-input >>> .el-input__inner{
	height: 25px !important;
}
.el-form-item >>> .el-input__inner{
  height: 25px !important;
}
.el-button--primary{
  height: 25px;
  line-height: 25px;
  padding: 0;
  width: 65px;
}
.btn{
  height: 40px;
  line-height: 40px;
  display: inline-block;
}
</style>
