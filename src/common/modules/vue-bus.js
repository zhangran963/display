/**
 * 获取类型
 */
const type = (a) => Object.prototype.toString.call(a).slice(8, -1).toLowerCase();


export default function(Vue){
    Vue.prototype.$bus = new Vue({
        data() {
            return {
                funcMap: new Map(),
            }
        },
        methods: {
            emit(event, ...arg){
                this.$emit(event, ...arg);
            },
            /**
             * 绑定并缓存事件
             */
            on(event, callback){
                
                if(type(callback) === 'function'){
                    this.$on(event, callback);
                    // 添加绑定的事件
                    let oldFuncItems = this.funcMap.get(event)||[];
                    this.funcMap.set(event, oldFuncItems.concat(callback));
                }else{
                    throw Error(`请填写 ${event} 的绑定事件`)
                }
            },
            /**
             * 销毁事件 或 事件组
             */
            off(event=''){
                if(event){
                    this.offone(event);
                }else{
                    for(let key of this.funcMap.keys()){
                        this.offone(key)
                    }
                }
            },
            /**
             * 销毁事件
             */
            offone(event=''){
                let funcItems = this.funcMap.get(event)||[];
                funcItems.forEach(func => {
                    this.$off(event, func);
                })
            }
        }
    })
}