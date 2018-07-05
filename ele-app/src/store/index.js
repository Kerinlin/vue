import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex);

// vuex管理vue大型项目中的数据流,小型项目中不用vuex, 
// vue项目分为两部分：
// vue+vue-router界面构建
// Vuex 数据流

export default new Vuex.Store({
    modules:{
        products,
        cart
    }
})