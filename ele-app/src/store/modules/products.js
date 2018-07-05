import shop from '../../api/shop'


// Store里的一间库房 module
// 搬运 action 动作
// state 状态数据
// getters 获取状态的get方法
// mutation 改变 会计 记账

const state={
    all:[]
};

const getters={

};

const actions={
    getAllProducts({commit}){
        shop.getProducts(products=>{
            commit('setProducts',products)
        })
    },
    
};

const mutations={
    setProducts(state,products){
        state.all=products
    },
    decrementProductInventory(state, { id }) {
        const product=state.all.find(product=>product.id===id);
        product.inventory--;
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}