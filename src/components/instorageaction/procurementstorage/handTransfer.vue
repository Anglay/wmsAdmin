<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/instorage_action/procurement_storage' }">采购入库交接</el-breadcrumb-item>
			  	<el-breadcrumb-item>手工交接</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="采购单详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>采购入库单号</span>
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
					  			<span>创建人</span>
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
					  			<span>交接人</span>
					  			<div>小强</div>
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
					      	prop="boxOrBag"
					      	label="箱/包"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="singleNum"
					      	label="单箱/包含sku数"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop="purchaseNum"
					      	label="采购数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
							label="实际交接箱/包"
							width="150">
							<template scope="scope">
								<div class="table-form-item">
									<el-input 
										v-model.number="scope.row.actualBoxOrBagNum"
										@keyup.native.prevent="inputKeyup1($event,scope.row)"
										size="mini" 
										placeholder="（需填写数值）">
									</el-input>
									<span class="error-text" v-if="scope.row.errText1!=''">{{scope.row.errText1}}</span>
								</div>
							</template>
					    </el-table-column>
					    <el-table-column
							label="实际交接单箱/包含sku数"
							width="200">
							<template scope="scope">
								<div class="table-form-item">
									<el-input 
										v-model.number="scope.row.actualSinglBoxOrBagNum"
										@keyup.native.prevent="inputKeyup2($event,scope.row)"
										size="mini" 
										placeholder="（需填写数值）">
									</el-input>
									<span class="error-text" v-if="scope.row.errText2!=''">{{scope.row.errText2}}</span>
								</div>
							</template>
					    </el-table-column>
					    <el-table-column
					      	prop="spareNum"
					      	label="散件数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
							label="实际交接数量"
							width="150">
							<template scope="scope">
								<div class="table-form-item">
									<el-input 
										v-model.number="scope.row.actualHandNum"
										@keyup.native.prevent="inputKeyup3($event,scope.row)"
										size="mini" 
										placeholder="（需填写数值）">
									</el-input>
									<span class="error-text" v-if="scope.row.errText3!=''">{{scope.row.errText3}}</span>
								</div>
							</template>
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
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
		        	actualBoxOrBagNum:'',
		        	actualSinglBoxOrBagNum:'',
		        	actualHandNum:''
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	  		inputKeyup1 :function(event,rows){
	  			if (!/^\+?[1-9][0-9]*$/.test(rows.actualBoxOrBagNum)) {
			    	rows.errText1 = "请输入大于零的整数";
			    	rows.actualBoxOrBagNum = '';
	  			}else{
	  				rows.errText1 = "";
	  				rows.actualBoxOrBagNum = event.target.value;
	  			}
	  		},
	  		inputKeyup2:function(event,rows){
	  			if (!/^\+?[1-9][0-9]*$/.test(rows.actualSinglBoxOrBagNum)) {
			    	rows.errText2 = "请输入大于零的整数";
			    	rows.actualSinglBoxOrBagNum = '';
	  			}else{
	  				rows.errText2 = "";
	  				rows.actualSinglBoxOrBagNum = event.target.value;
	  			}
	  		},
	  		inputKeyup3:function(event,rows){
	  			if (!/^\+?[1-9][0-9]*$/.test(rows.actualHandNum)) {
			    	rows.errText3 = "请输入大于零的整数";
			    	rows.actualHandNum = '';
	  			}else{
	  				rows.errText3 = "";
	  				rows.actualHandNum = event.target.value;
	  			}
	  		},
	  		doChange:function(){
	  			var flag = false; 
	  			for (var i = 0; i < this.tableData.length; i++) {
	  				if (this.tableData[i].actualBoxOrBagNum==""||this.tableData[i].actualSinglBoxOrBagNum==""||this.tableData[i].actualHandNum=="") {
	  					this.$message({
				          	message: '请将表格里面输入框的值填写完整！',
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
					width: 110px;
					float: left;
					color: #333
				}
				>div{
					margin-left: 120px;
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