<template>
  <div id="app">
    <!-- <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive> -->
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list/>
    <hr>
    <shopping-cart/>
  </div>
</template>

<script>
import ProductList from '@/components/product-list'
import ShoppingCart from '@/components/shopping-cart'
import {urlParse} from '@/common/js/util';
import Header from '@/components/header/header.vue'
// import shop from "@/api/shop";
const response = require('@/common/data/seller.json');
const ERR_OK = 0;
export default {
  name: 'App',
  data(){
    return{
       seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }, 
        // products:[]            
    }
  },
  components: {
    // 'v-header':Header
    ProductList,
    ShoppingCart
  },
  created() {
      // if (response.errno === ERR_OK) {
      //   this.seller = Object.assign({}, this.seller, response.data);
      // }


    //   shop.getProducts((res)=>{
    //   this.products = res
    // })


    
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // @import "./common/stylus/mixin.styl"
  // .tab
  //   display: flex
  //   width: 100%
  //   height: 40px
  //   line-height: 40px
  //   // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  //   border-1px(rgba(7, 17, 27, 0.1))
  //   .tab-item
  //     flex: 1
  //     text-align: center
  //     & > a
  //       display: block
  //       font-size: 14px
  //       color: rgb(77, 85, 93)
  //       &.active
  //         color: rgb(240, 20, 20)
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
