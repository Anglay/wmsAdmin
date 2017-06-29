<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="searchForm">
			  	<el-form-item label="库区类型">
			    	<el-select v-model="searchForm.state" placeholder="库区类型">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="库区">
			    	<el-input v-model="searchForm.consignor" placeholder="库区"></el-input>
			  	</el-form-item>
			  	<el-form-item label="库位">
			    	<el-input v-model="searchForm.consignor" placeholder="库位"></el-input>
			  	</el-form-item>
			  	<el-form-item label="货主">
			    	<el-input v-model="searchForm.consignor" placeholder="货主"></el-input>
			  	</el-form-item>
			  	<el-form-item label="供应商">
			    	<el-input v-model="searchForm.consignor" placeholder="供应商"></el-input>
			  	</el-form-item>
			  	<el-form-item label="商品条码">
			    	<el-input v-model="searchForm.consignor" placeholder="商品条码"></el-input>
			  	</el-form-item>
			  	<el-form-item label="产品分类">
				    <el-select v-model="searchForm.state" placeholder="产品分类">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="采购单号">
			    	<el-input v-model="searchForm.consignor" placeholder="采购单号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="批号/型号/货号">
			    	<el-input v-model="searchForm.consignor" placeholder="批号/型号/货号"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="onClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-export">导出</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="sellOutNo"
			      	label="库区类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="sellOutNo"
			      	label="库区"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="sellOutNo"
			      	label="库位"
			      	width="150">
			    </el-table-column>
			     <el-table-column
			      	prop="customNo"
			      	label="商品条码"
			      	width="200">
			    </el-table-column>
			    <el-table-column
			      	prop="wave"
			      	label="货主"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="供应商"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="产品分类"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="品牌"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="批号/型号/货号"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="产品名称"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="规格"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="单位"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="数量"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="150"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				      		<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="moveLocation(scope.row)">
				          		移出库位 
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="replenishment(scope.row)">
				          		补货 
				        	</el-button>
			        	</div>
			      	</template>
			    </el-table-column>
			</el-table>
		</div>
		<div class="grid-page">
			<el-pagination
	          	@size-change="handleSizeChange"
	          	@current-change="handleCurrentChange"
	          	:current-page.sync="currentPage"
	          	:page-sizes="[10, 20, 50, 100]"
	          	:page-size="pageSize"
	          	layout="total,->, prev, pager, next, jumper, sizes"
	          	:total="tableData.length">
	        </el-pagination>
		</div>

		<!-- 移出库位 -->
		<el-dialog
		  	title="移出库位"
		  	size="ddialog"
		  	:visible.sync="dialogVisible"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-moveLocation :dialogVisible="dialogVisible" @hideMive="hideMive"></v-moveLocation>
		</el-dialog>
		<!-- 补货 -->
		<el-dialog
		  	title="补货"
		  	size="ddialog"
		  	:visible.sync="dialogVisible2"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-replenishment :dialogVisible2="dialogVisible2" @hideReplenishment="hideReplenishment"></v-replenishment>
		</el-dialog>
	</div>
</template>

<script>
	import moveLocation from '@/components/storageaction/warehousestock/moveLocation'
	import replenishment from '@/components/storageaction/warehousestock/replenishment'
	export default {
	  	name: 'warehousestock',
	  	data:function(){
	  		return {
	  			searchForm: {
		          	sellOutNo: '',
		          	customNo: '',
		          	state:'',
		          	consignor:'',
		          	wave:''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10,
		        dialogVisible:false,
		        dialogVisible2:false
	  		}
	  	},
	  	components:{
	  		"v-moveLocation":moveLocation,
	  		"v-replenishment":replenishment
	  	},
	  	mounted :function(){
		    this.loadData()
		},
	  	methods: {
	  		loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
		        	id:'1',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	carrier:'京东快递',
		        	courierNum:'56323565465435',
		        	wave:'司',
		        	createdate:'2016-05-02',
		          	date: '2016-05-02',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        }, {
		        	id:'2',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	carrier:'京东快递',
		        	courierNum:'56323565465435',
		        	wave:'公司',
		        	createdate:'2016-05-02',
		          	date: '2016-05-04',
		          	weight:'800kg',
		          	count:'11000包',
		          	state: '2'
		        }, {
		        	id:'3',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	wave:'司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	id:'4',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	wave:'公司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	id:'5',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	wave:'司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	id:'6',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	wave:'公司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	id:'7',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	wave:'司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	id:'8',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	wave:'公司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	id:'9',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	wave:'司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	id:'10',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	wave:'公司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	id:'11',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'杭州塑料制品厂',
		        	wave:'司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	id:'12',
		        	sellOutNo:'CK2017263-022',
		        	customNo:'201705162556231154',
		        	consignor:'张家港长江国际',
		        	wave:'公司',
		          	carrier:'京东快递',
		          	courierNum:'56323565465435',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
      		handleSizeChange(val) {
      			this.pageSize = val;
		      	console.log(`每页 ${val} 条`);
		      	this.loadData();
		    },
		    handleCurrentChange(val) {
		    	this.currentPage = val;
		    	this.loadData();
		      	console.log(`当前页: ${val}`);
		    },
	      	onSearch() {
	      		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	      	},
	      	onClear:function(){
	      		this.searchForm = {
		          	sellOutNo: '',
		          	customNo: '',
		          	state:'',
		          	consignor:'',
		          	wave:''
		        }
	      	},
	      	moveLocation:function(row){
	      		this.dialogVisible = true;
	      	},
	      	hideMive:function(){
	      		this.dialogVisible = false;
	      	},
	      	replenishment:function(row) {
	      		this.dialogVisible2 = true;
      		},
      		hideReplenishment:function(){
      			this.dialogVisible2 = false;
      		}
	    }
	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.search-form{
			height: auto;
			overflow: hidden;
			padding: 22px 22px 0;
			background: #f9f9f9;
		}
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
	.el-dialog--ddialog{
		width: 650px;
	}
</style>