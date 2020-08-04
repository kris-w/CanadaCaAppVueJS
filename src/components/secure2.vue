<template>

  <div class="">
    <h2>Boring form.</h2>

<form action="#" method="get" id="fdbck-frm" novalidate="novalidate">
	<div class="form-group">
		<label for="user"><span class="field-name">Field1</span></label>
		<input class="form-control valid" type="text" id="field1" name="field1" size="45" maxlength="60" aria-invalid="false" v-model="boringform.field1">
	</div>
	<div class="form-group">
		<label for="user"><span class="field-name">Field2</span></label>
		<input class="form-control valid" type="text" id="field2" name="field2" size="45" maxlength="60" aria-invalid="false" v-model="boringform.field2">
	</div>
	<div class="form-group">
		<label for="user"><span class="field-name">Field3</span></label>
		<input class="form-control valid" type="text" id="field3" name="field3" size="45" maxlength="60" aria-invalid="false" v-model="boringform.field3">
	</div>	
	<p>boringform: {
	"field1": "{{ boringform.field1 }}","field2": "{{ boringform.field2 }}","field3": "{{ boringform.field3 }}"}</p>
	<button type="button" class="btn btn-default center-block">Submit</button>

</form>

  </div>
  
</template>

<script>
    export default {
        name: 'secure2',
        data() {
            return {
                boringform: {
                    field1: "",
                    field2: "",                    
                    field3: ""
                }
            }
        }
    }
</script>

<style scoped>

</style>