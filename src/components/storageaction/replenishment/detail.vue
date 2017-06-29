<template>
	<div class="customer-detail">
		<div class="detail-sub">
			<el-row :gutter="10">
		  		<el-col :span="12">
			  		<div class="detail-item">
						<span class="item-title">补货单号：</span>
						<div class="item-content">BH1706-566-->{{detail.id}}</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">完成补货时间：</span>
						<div class="item-content">2017-06-20 15:36:54</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">补货人：</span>
						<div class="item-content">陈凯</div>
					</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="detail-item">
						<span class="item-title">补货原则：</span>
						<div class="item-content">先进先出</div>
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
							<span class="item-title">现有库存数量：</span>
							<div class="item-content">200</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">最大库存量：</span>
							<div class="item-content">200</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">最大可补货数量：</span>
							<div class="item-content">200</div>
						</div>
			  		</el-col>
			  	</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="补货信息" name="second">
		    	<el-row :gutter="10">
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">待补货库区：</span>
							<div class="item-content">A2</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">待补货库位：</span>
							<div class="item-content">A2-9-2-003</div>
						</div>
			  		</el-col>
			  		<el-col :span="12">
			  			<div class="detail-item">
							<span class="item-title">总补货数量：</span>
							<div class="item-content">次品区</div>
						</div>
			  		</el-col>
			  	</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="补货移出库位信息" name="thrid">
		    	<el-table
				    :data="tableData"
				    border
				    height="250"
				    style="width: 100%">
				    <el-table-column
				      	prop=""
				      	label="库区">
				    </el-table-column>
				    <el-table-column
				      	prop=""
				      	label="库位">
				    </el-table-column>
				    <el-table-column
				      	prop=""
				      	label="库存数量">
				    </el-table-column>
				    <el-table-column
				      	prop=""
				      	label="补货数量">
				    </el-table-column>
				</el-table>
		    </el-tab-pane>
		</el-tabs>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"replenishmentdetail",
		data:function(){
			return {
				activeName: 'first',
				tableData:[{},{},{},{},{},{},{},{},{},{},{},{}]
			}
		},
		props:["detail"]
		
	}
</script>

<style lang="less">
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
	.el-tab-pane .el-table__body-wrapper{
		overflow-x: hidden;
	}
</style>