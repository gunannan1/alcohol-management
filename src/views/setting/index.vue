<template> 
  <el-card class="form-container" shadow="never">
    <div class="change-setting">Change App Setting</div>
    <user-info-detail
      v-model="userParam"
      @finishCommit="finishCommit">
    </user-info-detail>
  </el-card>
</template>
<script>
  import UserInfoDetail from './UserInfoDetail';
  import {getSetting,updateSetting} from '@/api/setting';

  const defaultUserParam = {
    showResult:''
  };
  export default {
    name: 'UserDetail',
    components: {UserInfoDetail},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: 0,
        userParam: Object.assign({}, defaultUserParam)
      }
    },
    created(){
      getSetting().then(response=>{
        this.userParam=response.data;
      });
    },
    methods: {
      finishCommit() {
        this.$confirm('Do you want change app setting?', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          updateSetting(this.userParam).then(response=>{
            this.$message({
              type: 'success',
              message: 'Success',
              duration:1000
            });
          });
        })
      }
    }
  }
</script>
<style>
  .form-container {
    width: 800px;
  }
  .change-setting{
    font-weight: 700;
    line-height: .86rem;
    text-align:center;

  }
</style>


