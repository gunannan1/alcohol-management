<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>Search Users</span>
        <el-button
          style="float: right"
          @click="handleSearchList()"
          type="primary"
          size="small">
          Search
        </el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          Reset
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="By username: ">
            <el-input style="width: 203px" v-model="listQuery.username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item label="By first name: ">
            <el-input style="width: 203px" v-model="listQuery.firstName" placeholder="First Name"></el-input>
          </el-form-item>
          <el-form-item label="By last name: ">
            <el-input style="width: 203px" v-model="listQuery.lastName" placeholder="Last Name"></el-input>
          </el-form-item>
          <el-form-item label="By email: ">
            <el-input style="width: 203px" v-model="listQuery.email" placeholder="Email"></el-input>
          </el-form-item>
          <el-form-item label="By researcherId: ">
            <el-input style="width: 203px" v-model="listQuery.researcherId" placeholder="Researcher Id"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>User List</span>
      <el-button
        class="btn-add"
        @click="handleAddUser()"
        size="mini">
        Add
      </el-button>
    </el-card>

    <div class="table-container">
      <el-table ref="UserTable"
                :data="list"
                style="width: 100%"
                v-loading="listLoading"
                border>
        <el-table-column label="Id" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="Username" width="120" align="center">
          <template slot-scope="scope">{{scope.row.username}}</template>
        </el-table-column>
        <el-table-column label="FirstName" width="120" align="center">
          <template slot-scope="scope">{{scope.row.firstName}}</template>
        </el-table-column>
        <el-table-column label="LastName" width="120" align="center">
          <template slot-scope="scope">{{scope.row.lastName}}</template>
        </el-table-column>
        <el-table-column label="Age" width="120" align="center">
          <template slot-scope="scope">{{scope.row.age}}</template>
        </el-table-column>
        <el-table-column label="Gender" width="120" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.gender===1">
              Female
            </div>
            <div v-else>
              Male
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Email" align="center">
          <template slot-scope="scope">{{scope.row.email}}</template>
        </el-table-column>
        <el-table-column label="ResearcherId" width="100" align="center">
          <template slot-scope="scope">{{scope.row.researcherId}}</template>
        </el-table-column>
        <el-table-column label="Operation" width="160" align="center">
          <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleUpdateUser(scope.$index, scope.row)">Edit
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
              </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    fetchList,
    deleteUser
  } from '@/api/user'

  const defaultListQuery = {
    username: null,
    pageNum: 1,
    pageSize: 5,
    firstName: null,
    lastName: null,
    age:0,
    gender:0,
    email: null,
    researcherId: null
  };
  export default {
    name: "userList",
    data() {
      return {
        operateType: null,
        listQuery: Object.assign({}, defaultListQuery),
        list: null,
        total: null,
        listLoading: true,
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
        });
      },
      handleSearchList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleAddUser() {
        this.$router.push({path:'/addUser'});
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      handleResetSearch() {
        this.listQuery = Object.assign({}, defaultListQuery);
      },
      handleDelete(index, row){
        this.$confirm('Do you want to delete this User', 'Warning!', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          this.deleteUser(row.id);
        });
      },
      handleUpdateUser(index,row){
        this.$router.push({path:'/updateUser',query:{id:row.id}});
      },
      deleteUser(id) {
        let params = new URLSearchParams();
        params.append('id', id);
        deleteUser(params).then(response => {
          this.$message({
            message: 'Delete success',
            type: 'success'
          });
          this.handleResetSearch();
          this.handleSearchList();
        });
      }
    }
  }
</script>
<style></style>


