<template> 
  <researcher-detail :is-edit='false'></researcher-detail>
</template>
<script>
  import ResearcherDetail from './components/ResearcherDetail'
  export default {
    name: 'addResearcher',
    components: { ResearcherDetail }
  }
</script>
<style>
</style>
