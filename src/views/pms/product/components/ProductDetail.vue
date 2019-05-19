<template> 
  <el-card class="form-container" shadow="never">
    <div class="add-new">Add Or Edit Researcher</div>
    <product-info-detail
      v-model="productParam" :is-edit="isEdit"
      @finishCommit="finishCommit">
    </product-info-detail>
  </el-card>
</template>
<script>
  import ProductInfoDetail from './ProductInfoDetail';
  import {createResearcher,getProduct,updateProduct} from '@/api/product';

  const defaultProductParam = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    researcherId:'',
    accessToken:''
  };
  export default {
    name: 'ProductDetail',
    components: {ProductInfoDetail},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: 0,
        productParam: Object.assign({}, defaultProductParam)
      }
    },
    created(){
      if(this.isEdit){
        getProduct(this.$route.query.id).then(response=>{
          this.productParam=response.data;
        });
      }
    },
    methods: {
      finishCommit(isEdit) {
        this.$confirm('Do you want to add this new researcher', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          if(isEdit){
            updateProduct(this.$route.query.id,this.productParam).then(response=>{
              this.$message({
                type: 'success',
                message: 'Success',
                duration:1000
              });
              this.$router.back();
            });
          }else{
            createResearcher(this.productParam).then(response=>{
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


