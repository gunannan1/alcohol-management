<template> 
  <user-detail :is-edit='false'></user-detail>
</template>
<script>
  import UserDetail from './components/UserDetail'
  export default {
    name: 'addUser',
    components: { UserDetail }
  }
</script>
<style>
</style>
