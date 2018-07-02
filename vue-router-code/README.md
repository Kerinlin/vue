Vue 用于开发SPA

页面/views 跟 router url 相匹配

router-link 取代a VueRouter提供的组件 vue.use(Vuerouter提供的组件)

route 前端路由 区分ngnix apache等配置的后端路由
前端路由解决的是SPA url切换，页面不会刷新

1.history API pushstate()  onPopState() 移除之前的组件，更新新的组件
他的格式和传统的后端URL是一样的（/foo）

缺点：兼容性

2.hash模式
在url后面加锚点 ie8以后不会刷新页面，同样可以得到事件
同一个页面，不同得状态（url）

