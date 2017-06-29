<template>
	<div class="customer-detail">
		<div class="detail-item">
			<span class="item-title">库区编号：</span>
			<div class="item-content">{{detail.areaNo}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">库区名称：</span>
			<div class="item-content">{{detail.areaName}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">库区类型：</span>
			<div class="item-content">{{detail.areaType}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">库位个数：</span>
			<div class="item-content">{{detail.locationCount}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">创建时间：</span>
			<div class="item-content">{{detail.createdate}}</div>
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
			<span class="item-title">备注：</span>
			<div class="item-content">{{detail.desc}}</div>
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