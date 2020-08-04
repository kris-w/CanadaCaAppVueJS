<template>
	<div class="col-md-6 col-md-offset-3">
	<p>&nbsp;</p>
	<section class="panel panel-info">
		<header class="panel-heading">
			<h5 class="panel-title">Logged in!</h5>
		</header>
		<div class="panel-body">
			<p class="text-center">Last login date: 10-07-2020</p>
			<button type="button" class="btn btn-primary center-block" v-on:click="continuesecure()">Continue</button>
		</div>
	</section>
	</div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods: {
            continuesecure() {
                this.$router.replace({ name: "secure2" });
            }
        }

    }
</script>

<style scoped>

</style>