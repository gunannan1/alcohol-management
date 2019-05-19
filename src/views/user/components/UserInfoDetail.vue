<template>
  <div style="margin-top: 50px">
    <el-form :model="value" :rules="rules" ref="userInfoForm" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="Username：" prop="username">
        <el-input v-model="value.username"  :readonly=this.isEdit></el-input>
      </el-form-item>
      <el-form-item label="Password：" prop="password">
        <el-input v-model="value.password"></el-input>
      </el-form-item>
      <el-form-item label="First Name：" prop="firstName">
        <el-input v-model="value.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last Name：" prop="lastName">
        <el-input v-model="value.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Email: " prop="email">
        <el-input v-model="value.email"></el-input>
      </el-form-item>
      <el-form-item label="Sex: " prop="sex">
        <el-select
          v-model="value.sex"
          @change="handleSexChange"
          placeholder="Please choose your sex">
          <el-option
            v-for="item in sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model="value.age"></el-input>
      </el-form-item>
      <el-form-item label="Researcher ID" prop="researcherId">
        <el-input v-model="value.researcherId"></el-input>
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
        sexOptions: [{label: "Male", value: 0},{label: "Female", value: 1}],
        rules: {
          username: [
            {required: true, message: 'Please input username', trigger: 'blur'}
            ],
          password:[{required: true, message: 'Please input password', trigger: 'blur'}],
          firstName: [{required: true, message: 'Please input first name', trigger: 'blur'}],
          lastName: [{required: true, message: 'Please input last name', trigger: 'blur'}],
          email: [{required: true, message: 'Please input email address', trigger: 'blur'}],
          sex: [{required: true, message: 'Please input your age', trigger: 'blur'}],
          age: [{required: true, message: 'Please input email address', trigger: 'blur'}],
          researcherId: [{required: true, message: 'Please input researcher ID', trigger: 'blur'}],
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
      handleSexChange(val) {
        let sex = 0;
        for (let i = 0; i < this.sexOptions.length; i++) {
          if (this.sexOptions[i].value === val) {
            sex = this.sexOptions[i].value;
            break;
          }
        }
        this.value.sex = sex;
      }
    }
  }
</script>

<style scoped>
</style>
