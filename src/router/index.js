import Vue from 'vue'
import VueRouter from 'vue-router'
//1.安装插件
Vue.use(VueRouter)
    //2.创建router
const routes = [

    ] //配置映射关系
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router