<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">/About</router-link>
    <router-link to="/dashboard">/Dashboard</router-link>
    <router-link to="/login" v-if="show">/Login</router-link>
    <router-link to="/logout" v-if="!show" >/LogOut</router-link>
    <router-view/>
  </div>
</template>

<script>
import auth from '@/auth'
export default {
  name: 'App',
  data(){
    return{
      show:true
    }
  },
  beforeUpdate(){
    console.log(auth.loggedIn());
    
    if(auth.loggedIn()){
      this.show=false;
    }else{
      this.show=true;
    }
  },
  


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
