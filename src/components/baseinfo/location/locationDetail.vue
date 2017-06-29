<template>
	<div class="customer-detail">
		<el-row :gutter="10">
		  	<el-col :span="8">
		  		<div class="detail-item">
					<span class="item-title">所属库区编号：</span>
					<div class="item-content">{{detail.areaNo}}</div>
				</div>
		  	</el-col>
		  	<el-col :span="8">
		  		<div class="detail-item">
					<span class="item-title">所属库区名称：</span>
					<div class="item-content">{{detail.areaName}}</div>
				</div>
		  	</el-col>
		  	<el-col :span="8">
		  		<div class="detail-item">
					<span class="item-title">所属库区类型：</span>
					<div class="item-content">{{detail.areaType}}</div>
				</div>
		  	</el-col>
		</el-row>
		<div class="detail-sub">
			<div class="detail-item">
				<span class="item-title">库位条码：</span>
				<div class="item-content">{{detail.locationNo}}</div>
			</div>
			<div class="detail-item">
				<span class="item-title">所在排：</span>
				<div class="item-content">{{detail.locationColumn}}</div>
			</div>
			<div class="detail-item">
				<span class="item-title">所在层：</span>
				<div class="item-content">{{detail.locationRow}}</div>
			</div>
			<div class="detail-item">
				<span class="item-title">状态：</span>
				<div class="item-content">
					<span class="color-gred" v-if="detail.state==0">已停用</span>
		      		<span v-else-if="detail.state==1">已启用</span>
		      		<span v-else>草稿</span>
				</div>
			</div>
			<div class="detail-item">
				<span class="item-title">创建时间：</span>
				<div class="item-content">{{detail.createDate}}</div>
			</div>
			<div class="detail-item">
				<span class="item-title">备注：</span>
				<div class="item-content">{{detail.desc}}</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"areadetail",
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
			padding: 10px;
			background: #d3dce6;
			border-radius: 5px;
		}
		.detail-item{
			height: auto;
			overflow: hidden;
			line-height: 25px;
			padding-bottom: 15px;
			.item-title{
				display: inline-block;
				width: 100px;
				font-size: 14px;
				float: left;
				color: #333;
				text-align: right;
			}
			.item-content{
				margin-left: 110px;
				color:#999;
			}
		}
	}
</style>