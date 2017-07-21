<template>
  <div class="column">
  
    <firstRow></firstRow>
    <!-- first-row -->
  
    <secondRow></secondRow>
    <!-- second-row -->
  
    <thirdRow></thirdRow>
    <!-- third-row -->
  
  </div>
</template>

<script>
  import firstRow from '~components/blogComp/blogFirstRow.vue'
  import secondRow from '~components/blogComp/blogSecondRow.vue'
  import thirdRow from '~components/blogComp/blogThirdRow.vue'
  export default {
    components: {firstRow, secondRow, thirdRow}
  }
</script>

<style>
 p, .title {
  color: white
} 
.is-ancestor {
  max-height: 10rem;
  padding: 0 2.5rem
}

 .subtitle a{
  color: #00ffff
}

 .gold {
  background-color: #b76e79;
}

.blue {
  background-color: #308014
}

.red {
 background-color: #DC143C
}  

</style>
