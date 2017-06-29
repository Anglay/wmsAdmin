<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/outstorage_action/wave_picking' }">波次拣货</el-breadcrumb-item>
			  	<el-breadcrumb-item>波次详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="波次详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>波次编号</span>
					  			<div>BC1705223</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>订单数</span>
					  			<div>21</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>sku数量</span>
					  			<div>42</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>商品数量</span>
					  			<div>150</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>拣货时间</span>
					  			<div>2017-06-20 11：22：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>创建时间</span>
					  			<div>2017-06-20 11：22：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>拣货人</span>
					  			<div>陈凯</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>状态</span>
					  			<div>待复核</div>
					  		</div>
					  	</el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="detail-content">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			    <el-tab-pane label="订单" name="order">
			    </el-tab-pane>
			    <el-tab-pane label="商品" name="goods">
			    </el-tab-pane>
			</el-tabs>
			<transition name="fade" mode="out-in">
	        	<router-view :waveId="waveId" @changeActiveName="changeActiveName"></router-view>
	      	</transition>
		</div>
	</div>
</template>

<script>
	import Store from 'store'
	export default {
	  	data() {
	      	return {
	      		activeName: 'order',
	      		waveId: this.$route.params.id
	        }
	    },
	    mounted :function(){
	    	var path = Store.get('path');
	    	this.activeName = path[path.length-1];
		},
	    methods: {
	    	handleClick(tab, event) {
	    		this.$router.push({ path: '/outstorage_action/wave_picking/detail/'+this.$route.params.id+'/'+this.activeName});
		    },
	    	changeActiveName:function(activeName){
		    	this.activeName = activeName;
		    }
	    }
  	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			height: auto;
			overflow: hidden;
			padding: 22px 15px;
			background: #fff;
			.detail-item{
				height: auto;
				overflow: hidden;
				line-height: 30px;
				font-size: 14px;
				padding-left: 30px;
				>span{
					display: inline-block;
					width: 110px;
					float: left;
					color: #333
				}
				>div{
					margin-left: 110px;
					color: #999;
				}
			}
		}
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
</style>