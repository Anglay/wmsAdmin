<template>
	<div class="customer-detail">
		<div class="detail-sub">
			<el-row :gutter="10">
		  		<el-col :span="12">
			  		<div class="detail-item">
						<span class="item-title">移库编号：</span>
						<div class="item-content">YK1706003-->{{detail.id}}</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">完成移库时间：</span>
						<div class="item-content">2017-06-20 15:36:54</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">移库人：</span>
						<div class="item-content">陈凯</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">移库备注：</span>
						<div class="item-content">移库备注移库备注移库备注移库备注移库备</div>
					</div>
		  		</el-col>
		  	</el-row>
		</div>
		<el-tabs v-model="activeName" type="card">
		    <el-tab-pane label="sku信息" name="first">
		    	<el-row :gutter="10">
			  		<el-col :span="12">
				  		<div class="detail-item">
							<span class="item-title">商品条码：</span>
							<div class="item-content">SP2654412-003</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">批号/型号/货号：</span>
							<div class="item-content">YF7712</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">产品名称：</span>
							<div class="item-content">男士夏装韩式休闲</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">规格：</span>
							<div class="item-content">XXL红</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">单位：</span>
							<div class="item-content">件</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">库存数量：</span>
							<div class="item-content">200</div>
						</div>
			  		</el-col>
			  	</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="移库信息" name="second">
		    	<el-row :gutter="10">
			  		<el-col :span="12">
				  		<div class="detail-item">
							<span class="item-title">移动数量：</span>
							<div class="item-content">30</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移出库区类型：</span>
							<div class="item-content">存储区</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移出库区：</span>
							<div class="item-content">A2</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移出库位：</span>
							<div class="item-content">A2-9-2-003</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移入库区类型：</span>
							<div class="item-content">次品区</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移入库区：</span>
							<div class="item-content">B3</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">移入库位：</span>
							<div class="item-content">B3-5-6-008</div>
						</div>
			  		</el-col>
			  	</el-row>
		    </el-tab-pane>
		</el-tabs>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"transferdetail",
		data:function(){
			return {
				activeName: 'first'
			}
		},
		props:["detail"]
		
	}
</script>

<style lang="less" scoped>
	.customer-detail{
		height: auto;
		overflow: hidden;
		.detail-sub{
			height: auto;
			overflow: hidden;
			padding-bottom: 15px;
		}
		.detail-item{
			height: auto;
			overflow: hidden;
			line-height: 25px;
			padding-bottom: 15px;
			.item-title{
				display: inline-block;
				width: 120px;
				font-size: 14px;
				float: left;
				color: #333;
				text-align: right;
			}
			.item-content{
				margin-left: 130px;
				color:#999;
			}
		}
	}
</style>