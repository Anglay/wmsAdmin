<template>
	<div class="customer-detail">
		<div class="detail-item">
			<span class="item-title">客户编号：</span>
			<div class="item-content">{{detail.customerNo}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">客户类型：</span>
			<div class="item-content">{{detail.type}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">名称：</span>
			<div class="item-content">{{detail.name}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">联系人：</span>
			<div class="item-content">{{detail.contacts}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">联系电话：</span>
			<div class="item-content">{{detail.tel}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">邮箱：</span>
			<div class="item-content">{{detail.email}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">传真：</span>
			<div class="item-content">{{detail.fax}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">联系地址：</span>
			<div class="item-content">{{detail.address}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">创建日期：</span>
			<div class="item-content">{{detail.createdate}}</div>
		</div>
		<div class="detail-item">
			<span class="item-title">状态：</span>
			<div class="item-content">
				<span v-if="detail.state==2">已启用</span>
	      		<span v-else-if="detail.state==1">已停用</span>
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
		name:"customerdetail",
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