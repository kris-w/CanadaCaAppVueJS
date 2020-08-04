<template>
  <div class="">
	<div class="alert alert-warning wb-dismissable"><p>This system will be down for extended maintenance July 10th -11th</p></div>
	<div class="row">
		<div class="col-md-4">
			<h3>Sign in to ALE</h3>
			<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, commodi consequatur?</p>
			<button type="button" class="btn btn-default center-block" v-on:click="continuelogin()">Sign in to ALE</button>
		</div>
		<div class="col-md-4">
			<h3>Get an ALE account</h3>
			<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, commodi consequatur?</p>
			<button type="button" class="btn btn-default center-block" v-on:click="continuelogin()">Create my account</button>
		</div>
		<div class="col-md-4">
			<h3>ALE User Guide</h3>
			<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, commodi consequatur?</p>
			<button type="button" class="btn btn-default center-block" v-on:click="continuelogin()">View User Guide</button>
		</div>
	</div>

  </div>
</template>

<script>
    export default {
        name: 'Main',
        data() {
            return {};
        },
        methods: {
            continuelogin() {
                this.$router.replace({ name: "login" });
            }
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
