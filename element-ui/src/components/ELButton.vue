<template>
  <button @click="handleClick" :type="nativeType" class="el-button" :disabled="buttonDisabled" :class="[type?'el-button--'+type:'',{'is-disabled':buttonDisabled,'is-loading':loading}]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon&&!loading"></i>
        <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'el-button',
    props: {
      disabled: Boolean,
      type: {
        type: String,
        default: 'default'
      },
      loading: Boolean,
      icon: {
        type: String,
        defalut: ''
      },
      nativeType:{
        type:String,
        default:'button'
      }
    },
    computed: {
      buttonDisabled() {
        return this.disabled;
      }
    },
    methods:{
      handleClick(evt){
        // console.log(evt);
        this.$emit('click',evt)
        
      }
    }
  }
</script>
<style>

</style>
