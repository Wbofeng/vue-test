<template>
  <el-button type="text" @click="open">Select Region</el-button>
</template>

<script>
  export default {
    methods:{
      open() {
        this.$confirm('Welcome to Mi.com','Please select your country or region',{
          confirmButtonText:'Mainland China'
        }
        )
      }
    }
  }
</script>