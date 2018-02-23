<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to dynamic Components!</h1>
    <ul class="nav nav-tabs">
      <!-- 조건에 따라 'active' 클래스를 설정 -->
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ''">
	<!-- 링크를 이용해 탭 사이를 이동 -->
	<a @click="setPage(page)">{{page | capitalize}}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
