<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true">
			  	<el-form-item label="出库类型">
				    <el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="page-container">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			    <el-tab-pane label="汇总" name="summary">
			    </el-tab-pane>
			    <el-tab-pane label="明细" name="detailed">
			    </el-tab-pane>
			</el-tabs>
			<transition name="fade" mode="out-in">
	        	<router-view :value="value" @changeActiveName="changeActiveName"></router-view>
	      	</transition>
		</div>
	</div>
</template>
<script>
	import Store from 'store'
	export default {
	    name: 'view',
	    data:function(){
	    	return {
	    		activeName: 'summary',
	    		options: [{
		          	value: '选项1',
		          	label: '黄金糕'
		        }, {
		          	value: '选项2',
		          	label: '双皮奶'
		        }, {
		          	value: '选项3',
		          	label: '蚵仔煎'
		        }, {
		          	value: '选项4',
		          	label: '龙须面'
		        }, {
		          	value: '选项5',
		          	label: '北京烤鸭'
		        }],
		        value: ''
			}
	    },
	    mounted:function(){
	    	var path = Store.get('path');
	    	this.activeName = path[path.length-1];
	    },
	    methods: {
	    	handleClick(tab, event) {
	    		this.$router.push({ path: '/datachart/outstorage/'+this.activeName});
		    },
		    changeActiveName:function(activeName){
		    	this.activeName = activeName;
		    }
	    }
	};
</script>
<style lang="less" scoped>
	.page-container{
		position: relative;
		height: auto;
		overflow: hidden;
		padding: 10px;
		background: #fff;
	}
</style>