// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Hello from './components/Hello.vue'
import Login from './components/Login.vue'
import StoriesPage from './components/StoriesPage.vue'
import StoriesAll from './components/StoriesAll.vue'
import StoriesFamous from './components/StoriesFamous.vue'
import StoriesEdit from './components/StoriesEdit.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
	path: '/',
	name: 'hello',
	component: Hello
    },
    {
	path: '/login',
	name: 'login',
	component: Login
    },
    {
	path: '/stories',
	component: StoriesPage,
	children: [
	    {
		path: '',
		name: 'stories.all',
		component: StoriesAll
	    },
	    {
		path: 'famous',
		name: 'stories.famous',
		// '/famous'를 '/stories/famous'인 것처럼 매칭
		alias: '/famous',
		component: StoriesFamous
	    },
	    {
		path: ':id/edit',
		props: (route) => ({ id: Number(route.params.id) }),
		name: 'stories.edit',
		component: StoriesEdit
	    }
	]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'my-active-class',
    routes
})

// 더미 사용자 객체 생성
let User = {
    isAdmin: false
}

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !User.isAdmin) {
	// 관리자가 아니면 login 페이지로 리다이렉트
	next('/login')
    } else {
	// 인증된 사용자는 계속 진행
	next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
