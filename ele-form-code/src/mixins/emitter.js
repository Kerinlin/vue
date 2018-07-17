function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      // var parent = this.$parent || this.$root;
      // var name = parent.$options.componentName;

      // while (parent && (!name || name !== componentName)) {
      //   parent = parent.$parent;

      //   if (parent) {
      //     name = parent.$options.componentName;
      //   }
      // }
      // if (parent) {
      //   parent.$emit.apply(parent, [eventName].concat(params));
      // }

      // 向上传递冒泡事件 $emit 只能向上传自定义事件 指定上级的某个组件，事件来执行 并拿到参数
      var parent=this.$parent;
      // console.log(parent);
      var name =parent.$options.componentName;
      // console.log(name);
      while(parent && name !== componentName || !name){
        parent = parent.$parent
      }
      // console.log(params);
      
      if(parent){
        parent.$emit.apply(parent,[eventName].concat(params));
      }   
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}
