<template>
  <form class="el-form" :class="[{'el-form--inline':inline},labelPosition?'el-form--label-'+labelPosition:'']">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name:'ElForm',
  componentName:'ElForm',
  data() {
    return {
      fields: []
    }
  },
  props:{
   model:Object,
   rules:Object,
   inline:Boolean,
   labelPosition:String
  },
  methods: {
    validate() {
      // console.log('validate');
      this.fields.forEach(field => {
        field.validate('',(message,field)=>{
          
        })
      });    
    }
  },
  created(){
    this.$on('el.form.addField',(field)=>{  
      this.fields.push(field);
    })
  }
}
</script>

<style>

</style>
