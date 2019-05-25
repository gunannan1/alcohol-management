<template>
  <div style="margin-top: 50px">
    <el-form :model="value" :rules="rules" ref="userInfoForm" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="Result display: " prop="showResult">
        <el-select
          v-model="value.showResult"
          @change="handleShowResultChange"
          placeholder="Show test Result?">
          <el-option
            v-for="item in showResultOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handleFinishCommit('userInfoForm')">Finish</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "UserInfoDetail",
    props: {
      value: Object,
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        hasEditCreated:false,
        showResultOptions: [{label: "Show", value: 0},{label: "Hide", value: 1}],
        rules: {
          showResult: [{required: true, message: 'Please choose whether wo show result to users. ', trigger: 'blur'}]
        }
      };
    },
    methods: {
      handleFinishCommit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('finishCommit',this.isEdit);
          } else {
            this.$message({
              message: 'Please fill the form',
              type: 'error',
              duration:1000
            });
            return false;
          }
        });
      },
      handleShowResultChange(val) {
        let showResult = 0;
        for (let i = 0; i < this.showResultOptions.length; i++) {
          if (this.showResultOptions[i].value === val) {
            showResult = this.showResultOptions[i].value;
            break;
          }
        }
        this.value.showResult = showResult;
      }
    }
  }
</script>

<style scoped>
</style>
