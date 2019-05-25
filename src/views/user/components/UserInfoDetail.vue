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
      <el-form-item label="Gender: " prop="gender">
        <el-select
          v-model="value.gender"
          @change="handleGenderChange"
          placeholder="Choose your gender">
          <el-option
            v-for="item in genderOptions"
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
        genderOptions: [{label: "Male", value: 0},{label: "Female", value: 1}],
        rules: {
          username: [
            {required: true, message: 'Please input username', trigger: 'blur'}
            ],
          password:[{required: true, message: 'Please input password', trigger: 'blur'}],
          firstName: [{required: true, message: 'Please input first name', trigger: 'blur'}],
          lastName: [{required: true, message: 'Please input last name', trigger: 'blur'}],
          email: [{required: true, message: 'Please input email address', trigger: 'blur'}],
          gender: [{required: true, message: 'Please choose your gender', trigger: 'blur'}],
          age: [{required: true, message: 'Please input your age', trigger: 'blur'}],
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
      handleGenderChange(val) {
        let gender = 0;
        for (let i = 0; i < this.genderOptions.length; i++) {
          if (this.genderOptions[i].value === val) {
            gender = this.genderOptions[i].value;
            break;
          }
        }
        this.value.gender = gender;
      }
    }
  }
</script>

<style scoped>
</style>
