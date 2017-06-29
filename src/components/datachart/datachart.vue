<template>
  <div class="layout-main">
  	<v-navbar :subdata="subdata"></v-navbar>
  	<div class="layout-right-content">
  		<transition name="fade" mode="out-in">
  			<router-view></router-view>
  		</transition>
  	</div>
  </div>
</template>

<script>
	import Navbar from '@/components/common/Navbar'
	import Store from 'store'
	export default {
		data:function(){
			return {
				subdata:{},
				path:Store.get("path")
			}
		},
	  	props:["navdata"],
	  	created:function(){
	  		this.subdata = {};
	  		this.path = Store.get("path");
	  		for (var i = 0; i < this.navdata.length; i++) {
	  			if (this.navdata[i].module==this.path[1]) {
	  				this.subdata = this.navdata[i];
	  			}
	  		}
	  	},
	  	components:{
	  		"v-navbar":Navbar
	  	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.layout-container{
	  	position: absolute;
	  	right: 0;
	  	top: 50px;
	  	bottom: 0;
	  	left: 0;
	  	z-index: 9;
	  	.layout-right-content{
		  	position: absolute;
		  	top: 0;
		  	left: 160px;
		  	right: 0;
		  	bottom: 0;
		  	border-left: 1px solid #ced4d9;
		  	overflow-y: scroll;
		  	background: #f0f0f0;
	  	}
	}
</style>