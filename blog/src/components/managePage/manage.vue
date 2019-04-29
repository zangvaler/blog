<template>
    <div id="manage">
       <div class="manage">
           <div class="tab_lf">
               <ul>
                   <li @click="tabChange(child1)">角色管理</li>
                   <li @click="tabChange(child2)">导航管理</li>
                   <li @click="tabChange(child3)">文章管理</li>

               </ul>
           </div>
           <div class="tab_rf">
                <div :is="currentView"></div>
           </div>
       </div>
    </div>
</template>
<script>
import child1 from './component/child1';
import child2 from './component/child2';
import child3 from './component/child3';
export default {
    data () {
    return {
       child1: 'child1',
       child2: 'child2',
       child3: 'child3',
       currentView: 'child1' 
    }
  },
  components: {
     child1,
     child2,
     child3
   },
  mounted(){
    
     
  }, 
  methods: {
     tabChange(tabItem) {
       this.currentView = tabItem;
     }
      
  }
}
</script>
<style scoped>
#manage{
    width: 100%;
    height: 100%;
}
.manage{
    width: 100%;
    height: 100%;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
.tab_lf{
    width: 150px;
    height: 100%;
    float: left;
}
.tab_lf li{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgb(27, 26, 26);
    padding: 10px 0;
}
.tab_rf{
    width: calc(100% - 151px);
     height: 100%;
    float: right;
    border-left: 1px solid rgb(27, 26, 26);
}
</style>

