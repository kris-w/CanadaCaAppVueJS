<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--div id="nav">
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div-->
    <router-view @authenticated="setAuthenticated" />    
    <!--LoginComp LoginTitleEn="Login"/-->    
  </div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			authenticated: false,
			mockAccount: {
				username: "admin",
				password: "password"
			}
		}
	},
	mounted() {
		if(!this.authenticated) {
			this.$router.replace({ name: "main" });
		}
	},
	methods: {
		setAuthenticated(status) {
			this.authenticated = status;
		},
		logout() {
			this.authenticated = false;
		}
	}
}
</script>

<!--style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style-->
