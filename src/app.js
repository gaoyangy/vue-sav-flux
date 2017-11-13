import Vue from 'vue'
import VueRouter from 'vue-router'
import {Flux, FluxVue} from 'sav-flux'
import routes from './router/index'
import storeModule from './store/index'
import Todo from './Todo.vue'

Vue.use(FluxVue)
let router = new VueRouter({routes})

let flux = new Flux({
	strict: true // enable this for promise action to resolve data copy
})
flux.declare(storeModule)

let app = new Vue({
	vaf: new FluxVue({
		flux,
    router,
		mixinActions: true
	}),
  router,
	el: '#app'
})

window.flux = flux

export default app
