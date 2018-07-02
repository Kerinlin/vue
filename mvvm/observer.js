// 响应式 观察者模式
function observer(value) {
    // 严格性校验
    if (!value || (typeof value !== 'object')) {
        return;
    } else {
        // 数据 _data 里的key:value都需要被definproperty
        // console.log(Object.keys(value));  遍历data中的key
        Object.keys(value).forEach((key) => {
            defineReactive(value, key, value[key]);
        })
    }
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            return val;
        },
        set: function reactiveSetter(newVal) {
            if(newVal==val) return;
            val=newVal;
            cb(val);
        }
    })
}
function cb(val) {
    console.log('更新,新值为'+val);  
}
class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data)
    }
}

// 发布订阅者模式是vue  数据响应的核心  一对多的关系
let o = new Vue({
    data: {
        test: 'I am test',
        name: 'zk'
    }
})

o._data.test = 'hello,test';
o._data.test = 'hello,test';