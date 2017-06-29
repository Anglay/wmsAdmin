<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/instorage_action/warehouse_shelves' }">入库上架</el-breadcrumb-item>
			  	<el-breadcrumb-item>入库单详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="入库单详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>入库单号</span>
					  			<div>CG2017090</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>业务类型</span>
					  			<div>销售退货入库</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>业务单号</span>
					  			<div>CK8890-23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>客户单号</span>
					  			<div>CK8890-29</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>货主</span>
					  			<div>杭州塑料制品厂</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>完成交接时间</span>
					  			<div>2017-05-26 14：21：23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>上架时间</span>
					  			<div>2017-05-26 14：21：23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>上架人</span>
					  			<div>小强</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>状态</span>
					  			<div>已交接待上架</div>
					  		</div>
					  	</el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="detail-content">
			<el-tabs activeName="table">
			    <el-tab-pane label="商品明细及上架详情" name="table">
			    	<div class="statistic-content">
						<p>
							统计：
							<span>sku数量：N</span>
							<span>上架总数量：M</span>
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
					      	prop="supplier"
					      	label="供应商"
					      	width="250">
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
					      	label="实际交接数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="purchaseNum"
					      	label="已上架数量"
					      	width="150">
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