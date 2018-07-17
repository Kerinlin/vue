<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if="label||$slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="el-form-item__content">     
      <slot></slot>
    </div>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  props:{ 
    label:String,
    prop:String
  },
  mixins:[emitter],
  mounted(){
    // fields生成一下
    this.dispatch('ElForm','el.form.addField',[this]);
  },
  methods:{
    validate (trigger,callback){
      // 当前item 对应的rule是什么
      // el-input 值?
      const rules=this.form.rules;
      // const rules
      // console.log(rules);  
      const item_rule=rules[this.prop];
      console.log(item_rule);    
    }
  },
  computed: {
    form() {
      let parent=this.$parent;
      let parentName=parent.$options.componentName;
      while(parentName !== 'ElForm'){
        parent=parent.$parent;
        parentName=parent.$options.componentName;
      }
      return parent;
    }
  },
}
</script>

<style>

</style>
