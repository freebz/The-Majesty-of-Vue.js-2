<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <router-link :to="{ name: 'hello' }" active-class="my-active-class" exact>
      Home
    </router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'stories.all' }">Stories</router-link>
    <!-- 라우트 아울렛 -->
    <transition enter-active-class="animated rollIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  import Stories from './components/Stories.vue'

  Vue.filter('capitalize', function (value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
  })
  
  export default {
    name: 'app',
    components: {
      Login,
      Register,
      Stories
    },
    data () {
      return {
	// 매번 렌더링할 페이지
	pages: [
	  'stories',
	  'register',
	  'login'
	],
	activePage: 'stories'
      }
    },
    methods: {
      setPage (newPage) {
	this.activePage = newPage
      },
      isActivePage (page) {
	return this.activePage === page
      }
    }
  }

</script>

<style type="text/css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .router-link-active {
    color: green;
  }

  .my-active-class {
    color: red;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter-to, .fade-leave {
    opacity: 0.8
  }
</style>
