<template>
  	<div class="layout-index" id="waves_container">
    	<h1>layout-index</h1>
  	</div>
</template>

<script>
	  import waves from './js/cwaves'
	export default {
	  	name: 'index',
	  	mounted(){
      		waves.init('waves_container');
    	},
    	beforeDestroy(){
      		waves.removeEvent();
    	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.layout-index {
	    height: 100%;
	    width: 100%;
	    flex: 1;
	    background-image: linear-gradient(70deg, #2061c2 0, #0d0525 100%);
	}
	h1{
		font-size: 20px;
		text-align: center;
		padding: 20px;
	}
</style>