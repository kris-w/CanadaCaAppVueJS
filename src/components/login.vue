<template>
  <div class="">
    <h2>{{ LoginTitleEn }}</h2>

<form action="#" method="get" id="fdbck-frm" novalidate="novalidate">
	<div class="form-group">
		<label for="user"><span class="field-name">Username</span>  <strong class="required">(required)</strong></label>
		<input class="form-control valid" type="text" id="user" name="user" size="45" maxlength="60" aria-invalid="false" v-model="input.username">
	</div>
	<div class="form-group">
		<label for="user"><span class="field-name">Password</span>  <strong class="required">(required)</strong></label>
		<input class="form-control valid" type="text" id="pass" name="pass" size="45" maxlength="60" aria-invalid="false" v-model="input.password">
	</div>
	
	<input type="submit" name="lgsbmt" id="lgsbmt" value="Login" class="btn btn-primary" v-on:click="login()">
</form>

  </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
			LoginTitleEn: String
		},
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
