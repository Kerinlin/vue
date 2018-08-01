<template>
  <div id="app">
    <!-- <h1>Basic</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/foo">Foo</router-link>
      </li>
    </ul>
    <router-view></router-view> -->
    <ele-alert title="成功提示的方案" center type="success" v-if="hasErr" @close="doAlertClose"></ele-alert>
  </div>
</template>

<script>
import EleAlert  from '@/components/el-alert'

export default {
  name: 'App',
  data(){
    return{
      hasErr:false
    }
  },
  components: {
    EleAlert
  },
  mounted(){
    setTimeout(() => {
      this.hasErr=true;
    }, 2000);
  },
  methods:{
      doAlertClose(){
        console.log('close');
      }
  }
}
</script>

<style>

</style>
