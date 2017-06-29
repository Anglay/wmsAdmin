<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/storage_action/inventory' }">盘点</el-breadcrumb-item>
			  	<el-breadcrumb-item>手工盘点</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="table">
			    <el-tab-pane label="手工盘点结果" name="table">
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
					      	prop=""
					      	label="库区"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库区类型"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="货主"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="供应商"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="产品分类"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					    	prop=""
					      	label="品牌"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="批号/型号/货号"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="产品名称"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="规格"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="单位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库存量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库存量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="handoverNum"
					      	label="盘点数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	label="操作"
					      	width="100">
					      	<template scope="scope">
				      			<el-button
					          		type="text"
					          		size="small"
					          		@click.native.prevent="handleInventory(scope.$index, tableData)">
					          		盘点结果
					        	</el-button>
					      	</template>
					    </el-table-column>
					</el-table>
					<div class="footer-bar">
			    			<el-button type="primary">提交</el-button>
			    			<el-button>取消</el-button>
			    		</div>
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
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
		        	handoverNum:''
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	  		handleInventory:function(index,rows){
		       	this.$prompt('盘点数量', '编辑盘点数量', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	inputPattern: /^[1-9]\d*$/,
		          	inputErrorMessage: '数量只能输入大于0的整数！'
		        }).then(({ value }) => {
		        	rows[index].handoverNum = value;
			        this.$message({
			            type: 'success',
			            message: '盘点数量: ' + value
			        });
		        }).catch(() => {
		          	this.$message({
			            type: 'info',
			            message: '取消输入'
		          	});       
		        });
      		}
	    }
  	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			position: relative;
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
			.footer-bar{
				height: auto;
				overflow: hidden;
				padding: 20px 0 5px;
				text-align: center;
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