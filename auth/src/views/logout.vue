<template>
    
    
        <router-link to="/">
        <span @click="out"> </span>
        </router-link>
   
    
</template>

<script>
export default {
    methods:{
    out(){
      console.log('dianji');
      
      localStorage.removeItem('token')
    }
  }
}
</script>

<style>

</style>
