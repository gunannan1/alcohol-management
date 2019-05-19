<template> 
  <researcher-detail :is-edit='true'></researcher-detail>
</template>
<script>
  import ResearcherDetail from './components/ResearcherDetail'
  export default {
    name: 'updateResearcher',
    components: { ResearcherDetail }
  }
</script>
<style>
</style>
