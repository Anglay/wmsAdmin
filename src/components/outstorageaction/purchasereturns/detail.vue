<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/outstorage_action/purchase_returns' }">采购退货出库</el-breadcrumb-item>
			  	<el-breadcrumb-item>采购退货出库单详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="采购退货出库单详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>采购退货单号</span>
					  			<div>CK2017263-022</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>采购单号</span>
					  			<div>201705162556231154</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>客户单号</span>
					  			<div>201705162556231154</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>货主</span>
					  			<div>浙江牛气红酒</div>
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
					  			<span>出库时间</span>
					  			<div>2017-06-20 11：22：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>审核出库人</span>
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
			<el-tabs activeName="table">
			    <el-tab-pane label="商品明细" name="table">
			    	<div class="statistic-content">
						<p>
							统计：
							<span>sku数量：N</span>
							<span>退货总数量：M</span>
						</p>
					</div>
			    	<el-table
					    :data="tableData"
					    v-loading.body="loading"
					    stripe
					    style="width: 100%">
					    <el-table-column
					      	prop="goodsBarCode"
					      	label="商品条码"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="productName"
					      	label="供应商"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="classify"
					      	label="产品分类"
					      	width="250">
					    </el-table-column>
					    <el-table-column
					      	prop="brand"
					      	label="品牌"
					      	width="250">
					    </el-table-column>
					    <el-table-column
					    	prop="batchNo"
					      	label="批号/型号/货号"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="productName"
					      	label="产品名称"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="specification"
					      	label="规格"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="specification"
					      	label="单位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="handoverNum"
					      	label="库区类型"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="handoverNum"
					      	label="库区"
					      	width="100">
					    </el-table-column>
					    <el-table-column
					      	prop="handoverNum"
					      	label="库位"
					      	width="100">
					    </el-table-column>
					    <el-table-column
					      	prop="handoverNum"
					      	label="数量"
					      	width="100">
					    </el-table-column>
					</el-table>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
	  	data() {
	      	return {
		        loading:true,
		        tableData: []
	        }
	    },
	    mounted :function(){
	    	console.log(this.$route.params)
		    this.loadData()
		},
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				goodsId:'1',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'2',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'3',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'4',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'5',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'6',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'7',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'8',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'9',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'10',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
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