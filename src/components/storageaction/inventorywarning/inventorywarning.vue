<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="searchForm">
			  	<el-form-item label="预警类型">
			    	<el-select v-model="searchForm.state" placeholder="预警类型">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="库位">
			    	<el-input v-model="searchForm.consignor" placeholder="库位"></el-input>
			  	</el-form-item>
			  	<el-form-item label="商品条码">
			    	<el-input v-model="searchForm.consignor" placeholder="商品条码"></el-input>
			  	</el-form-item>
			  	<el-form-item label="产品名称">
			    	<el-input v-model="searchForm.consignor" placeholder="产品名称"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="onClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-refresh">刷新</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop=""
			      	label="预警类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="库区类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="库区"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="库位"
			      	width="150">
			    </el-table-column>
			     <el-table-column
			      	prop=""
			      	label="商品条码"
			      	width="200">
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
			      	width="250">
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
			      	label="预警阈值数量"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="库存现量"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="预警时间"
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
				          		@click.native.prevent="add(scope.row)">
				          		创建补货单  
				        	</el-button>
				      		<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="goDetail(scope.row)">
				          		详情 
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
	</div>
</template>

<script>
	export default {
	  	name: 'inventoryadjustment',
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
		        pageSize:10
	  		}
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
	      	add:function(row){
	      	},
	      	goDetail:function(row){
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
</style>