<template>
	<div class="detail-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/baseinfo/goods_manage' }">商品管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>商品详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<div class="detail-item">
				<span class="item-title">产品编号：</span>
				<div class="item-content">customerNo</div>
			</div>
			<div class="detail-item">
				<span class="item-title">产品分类：</span>
				<div class="item-content">type</div>
			</div>
			<div class="detail-item">
				<span class="item-title">品牌：</span>
				<div class="item-content">name</div>
			</div>
			<div class="detail-item">
				<span class="item-title">批号/型号/货号：</span>
				<div class="item-content">contacts</div>
			</div>
			<div class="detail-item">
				<span class="item-title">产品名称：</span>
				<div class="item-content">tel</div>
			</div>
			<div class="detail-item">
				<span class="item-title">货主：</span>
				<div class="item-content">email</div>
			</div>
			<div class="detail-item">
				<span class="item-title">供应商：</span>
				<div class="item-content">fax</div>
			</div>
			<div class="detail-item">
				<span class="item-title">单位：</span>
				<div class="item-content">address</div>
			</div>
			<div class="detail-item">
				<span class="item-title">拣货区库存上限：</span>
				<div class="item-content">createdate</div>
			</div>
			<div class="detail-item">
				<span class="item-title">拣货区库存下限：</span>
				<div class="item-content">desc</div>
			</div>
			<div class="detail-item">
				<span class="item-title">总库存上限：</span>
				<div class="item-content">createdate</div>
			</div>
			<div class="detail-item">
				<span class="item-title">总库存下限：</span>
				<div class="item-content">desc</div>
			</div>
			<div class="detail-item">
				<span class="item-title">产品规格：</span>
				<div class="item-content">
					<el-button type="warning" size="small">一键打印</el-button>
					<div class="simple-grid">
			      		<el-table
						    :data="tableData"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      	prop="quantity"
						      	label="规格">
						    </el-table-column>
						    <el-table-column
						      	label="操作">
						      	<template scope="scope">
						      		<div class="action-column">
							        	<el-button
							          		type="text"
							          		size="small">
							          		打印
							        	</el-button>
						        	</div>
						      	</template>
						    </el-table-column>
						</el-table>
			      	</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  	export default {
	    data() {
	      	return {
	        	tableData: []
	        }
	    },
	    activated:function(){
	    	console.log(this.$route.params)
	    },
	    deactivated:function(){
	    	
	    },
	    methods: {
	      	
	    }
  	}
</script>

<style lang="less" scoped>
	.detail-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			padding: 15px;
			background: #fff;
			.detail-item{
				height: auto;
				overflow: hidden;
				line-height: 25px;
				padding-bottom: 15px;
				.item-title{
					display: inline-block;
					width: 140px;
					font-size: 14px;
					float: left;
					color: #333;
					text-align: right;
				}
				.item-content{
					margin-left: 150px;
					color:#999;
				}
			}
		}
		
	}
	.simple-grid{
		height: auto;
		overflow: hidden;
		padding: 10px 0;
	}
</style>