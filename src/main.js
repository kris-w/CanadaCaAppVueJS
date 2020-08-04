import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/router.js'

Vue.use(VueRouter);

let router = new VueRouter({mode: 'history', routes });

Vue.config.productionTip = false

new Vue({
    el:'#app',
    router,
	render: h => h(App),
});

//new Vue({
//	router,
//	template: `
//    <div>TEST
//      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
//        <div class="collapse navbar-collapse" id="navbarNav">
//          <ul class="navbar-nav">
//            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
//            <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
//            <li class="nav-item"><router-link to="/secure" class="nav-link">Secure</router-link></li>
//          </ul>
//        </div>
//      </nav>
//      <router-view class="view"></router-view>
//    </div>
//  `
//}).$mount('#app');
	//render: h => h(App),
//})
