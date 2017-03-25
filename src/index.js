/**
 * !Vux
 *
 * @author yiwei
 * @data 2017-03-24
 */
import Tips from './components/tips';

const vux = {
    Tips
};

/**
 * 定义公开方法 install
 *
 *
 * @param Vue  Vue构造器
 * @param opts 可选对象
 */
const install = (Vue, opts = {}) => {
    /**
     * 注册全局组件
     */
    Object.keys(vux).forEach((key) => {
        Vue.component(key, vux[key]);
    });

    //添加 Vue 实例方法
    Vue.prototype.$Tips = Tips;
};

/**
 * 如果 Vue 是全局变量则自动调用 Vue.use()
 */
if (typeof window != void(0) && window.Vue) {
    install(window.Vue);
}

/**
 * export Vux
 * 定义 vux.install 方法, 模块化调用Vue.install(vux)时，会自动调用该方法
 *
 * @type {*}
 */
module.exports = Object.assign(vux, {install});

