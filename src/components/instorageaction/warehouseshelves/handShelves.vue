<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/instorage_action/warehouse_shelves' }">入库上架</el-breadcrumb-item>
			  	<el-breadcrumb-item>手工上架</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="销售退货单详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>销售退换货入库单号</span>
					  			<div>CG2017090</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>客户单号</span>
					  			<div>ZX990</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>原出库单号</span>
					  			<div>CK8890-23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>原户单号</span>
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
					  			<span>预约到库时间</span>
					  			<div>2017-05-26 14：21：23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>交接时间</span>
					  			<div>2017-05-26 14：21：23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>交接人</span>
					  			<div>小强</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>创建时间</span>
					  			<div>2017-05-26 14：21：23</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>状态</span>
					  			<div>已到达，待交接</div>
					  		</div>
					  	</el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="detail-content">
			<div class="btn-box"><el-button type="primary" @click="doChange">确认交接</el-button></div>
			<el-tabs activeName="table">
			    <el-tab-pane label="商品明细" name="table">
			    	<div class="statistic-content">
						<p>
							统计：
							<span>供应商数量：N</span>
							<span>产品数量：M</span>
							<span>商品数量：L</span>
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
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="brand"
					      	label="品牌"
					      	width="150">
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
					      	prop="unit"
					      	label="单位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="purchaseNum"
					      	label="实际交接数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="purchaseNum"
					      	label="已上架数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="shelfSpace"
					      	label="上架库位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
							label="上架数量"
							width="150">
							<template scope="scope">
								<div class="table-form-item">
									<el-input 
										v-model.number="scope.row.actualShelvesNum"
										@keyup.native.prevent="inputKeyup($event,scope.row)"
										size="mini" 
										placeholder="（需填写数值）">
									</el-input>
									<span class="error-text" v-if="scope.row.errText!=''">{{scope.row.errText}}</span>
								</div>
							</template>
					    </el-table-column>操作
					    <el-table-column
					      	label="操作"
					      	width="150">
					      	<template scope="scope">
					      		<div class="action-column">
						        	<el-button
						          		type="text"
						          		size="small"
						          		@click.native.prevent="addLocation(scope.row)">
						          		增加库位
						        	</el-button>
						        	<el-button
						          		type="text"
						          		size="small"
						          		@click.native.prevent="checkLocation(scope.$index)">
						          		选择库位
						        	</el-button>
					        	</div>
					      	</template>
					    </el-table-column>
					</el-table>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<el-dialog 
			title="上架库位"
			:visible.sync="dialogVisible"
			size="tiny"
			:modal-append-to-body="false"
		  	:close-on-press-escape="false"
		  	:close-on-click-modal="false">
		  	<v-FormDialog
		  		:index="index"
		  		:dialogVisible="dialogVisible"
		  		@setLocation="setLocation"
		  		@doClose="doClose"></v-FormDialog>
		</el-dialog>
	</div>
</template>

<script>
	import FormDialog from '@/components/instorageaction/warehouseshelves/formDialog'
	export default {
	  	data() {
	      	return {
		        loading:true,
		        tableData: [],
		        dialogVisible:false,
		        index:""
	        }
	    },
	    mounted :function(){
	    	console.log(this.$route.params)
		    this.loadData()
		},
		components:{
			"v-FormDialog":FormDialog
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
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
		        	shelfSpace:'',
		        	actualShelvesNum:''
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	  		inputKeyup :function(event,rows){
	  			if (!/^\+?[1-9][0-9]*$/.test(rows.actualShelvesNum)) {
			    	rows.errText = "请输入大于零的整数";
			    	rows.actualShelvesNum = '';
	  			}else{
	  				rows.errText = "";
	  				rows.actualShelvesNum = event.target.value;
	  			}
	  		},
	  		checkLocation:function(index){
	  			this.index = index;
	  			this.dialogVisible = true;
	  		},
	  		setLocation:function(locationStr,index){
	  			this.tableData[index].shelfSpace=locationStr;
	  			this.doClose();
	  		},
	  		doClose:function(){
	  			this.dialogVisible = false;
	  			this.index="";
	  		},
	  		addLocation:function(row){
	  			var addArr = {};
	  			addArr.goodsId = row.goodsId;
	        	addArr.goodsBarCode = row.goodsBarCode;
	        	addArr.supplier = row.supplier;
	        	addArr.classify = row.classify;
	        	addArr.brand = row.brand;
	        	addArr.batchNo = row.batchNo;
	        	addArr.productName = row.productName;
	        	addArr.specification = row.specification;
	        	addArr.unit = row.unit;
	        	addArr.boxOrBag = row.boxOrBag;
	        	addArr.singleNum = row.singleNum;
	        	addArr.purchaseNum = row.purchaseNum;
	        	addArr.spareNum = row.spareNum;
	        	addArr.shelfSpace = row.shelfSpace;
	        	addArr.actualShelvesNum = row.actualShelvesNum;
	  			addArr.shelfSpace = '';
		        addArr.actualShelvesNum = '';
	  			this.tableData.push(addArr)
	  		},
	  		doChange:function(){
	  			var flag = false; 
	  			for (var i = 0; i < this.tableData.length; i++) {
	  				if (this.tableData[i].actualShelvesNum=="") {
	  					this.$message({
				          	message: '请将表格里面输入框的值填写完整！',
				          	type: 'warning'
				        });
	  					return;
	  				}else if(this.tableData[i].shelfSpace==""){
	  					this.$message({
				          	message: '部分商品上架库位未选择！',
				          	type: 'warning'
				        });
	  					return;
	  				}else{
	  					flag = true;
	  				}
	  			}
	  			if (flag) {
	  				this.$message({
			          	message: '交接成功！',
			          	type: 'success'
			        });
	  			}
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
					width: 150px;
					float: left;
					color: #333
				}
				>div{
					margin-left: 160px;
					color: #999;
				}
			}
			.btn-box{
				position: absolute;
				top: 25px;
				right: 15px;
				z-index: 10;
			}
		}
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
	.table-form-item{
		position: relative;
		height: 100%;
		width: 100%;
		.error-text{
			font-size: 12px;
			color:#f97042;
		}
	}
</style>