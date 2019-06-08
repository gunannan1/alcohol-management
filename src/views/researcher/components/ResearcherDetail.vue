<template> 
  <el-card class="form-container" shadow="never">
    <div class="add-new">Add Or Edit Researcher</div>
    <researcher-info-detail
      v-model="researcherParam" :is-edit="isEdit"
      @finishCommit="finishCommit">
    </researcher-info-detail>
  </el-card>
</template>
<script>
  import ResearcherInfoDetail from './ResearcherInfoDetail';
  import {createResearcher,getResearcher,updateResearcher} from '@/api/researcher';

  const defaultResearcherParam = {
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    researcherId:'',
    accessToken:''
  };
  export default {
    name: 'ResearcherDetail',
    components: {ResearcherInfoDetail},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: 0,
        researcherParam: Object.assign({}, defaultResearcherParam)
      }
    },
    created(){
      if(this.isEdit){
        getResearcher(this.$route.query.id).then(response=>{
          this.researcherParam=response.data;
        });
      }
    },
    methods: {
      finishCommit(isEdit) {
        this.$confirm('Do you want to add or edit the researcher', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          if(isEdit){
            updateResearcher(this.$route.query.id,this.researcherParam).then(response=>{
              this.$message({
                type: 'success',
                message: 'Success',
                duration:1000
              });
              this.$router.back();
            });
          }else{
            createResearcher(this.researcherParam).then(response=>{
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


