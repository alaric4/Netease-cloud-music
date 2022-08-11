import vue from "vue"
import vueRouter from "vue-router"
import HelloWorld from '@/components/HelloWorld.vue'
vue.use(vueRouter)
export default new vueRouter({
    mode: "history",
    routes: [{
        path: '/helloworld',
        component: HelloWorld
    }]
})