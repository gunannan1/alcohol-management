<template> 
  <el-card class="form-container" shadow="never">
    <div class="change-setting">Change App Setting</div>
    <setting-info-detail
      v-model="settingParam"
      @finishCommit="finishCommit">
    </setting-info-detail>
  </el-card>
</template>
<script>
  import SettingInfoDetail from './SettingnfoDetail';
  import {getSetting,updateSetting} from '@/api/setting';

  const defaultSettingParam = {
    showResult:''
  };
  export default {
    name: 'SettingDetail',
    components: {SettingInfoDetail},
    data() {
      return {
        active: 0,
        settingParam: Object.assign({}, defaultSettingParam)
      }
    },
    created(){
      getSetting().then(response=>{
        this.settingParam=response.data;
      });
    },
    methods: {
      finishCommit() {
        this.$confirm('Do you want change app setting?', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          updateSetting(this.settingParam).then(response=>{
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


