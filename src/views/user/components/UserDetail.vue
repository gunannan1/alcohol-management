<template> 
  <el-card class="form-container" shadow="never">
    <div class="add-new">Add Or Edit User</div>
    <user-info-detail
      v-model="userParam" :is-edit="isEdit"
      @finishCommit="finishCommit">
    </user-info-detail>
  </el-card>
</template>
<script>
  import UserInfoDetail from './UserInfoDetail';
  import {createUser,getUser,updateUser} from '@/api/user';

  const defaultUserParam = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    sex:'',
    age:'',
    researcherId:''
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
      if(this.isEdit){
        getUser(this.$route.query.id).then(response=>{
          this.userParam=response.data;
        });
      }
    },
    methods: {
      finishCommit(isEdit) {
        this.$confirm('Do you want to add or edit the user', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          if(isEdit){
            updateUser(this.$route.query.id,this.userParam).then(response=>{
              this.$message({
                type: 'success',
                message: 'Success',
                duration:1000
              });
              this.$router.back();
            });
          }else{
            createUser(this.userParam).then(response=>{
              this.$message({
                type: 'success',
                message: 'Success',
                duration:1000
              });
              location.reload();
            });
          }
        })
      }
    }
  }
</script>
<style>
  .form-container {
    width: 800px;
  }
  .add-new{
    font-weight: 700;
    line-height: .86rem;
    text-align:center;

  }
</style>


