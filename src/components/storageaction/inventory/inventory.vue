<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="searchForm">
			  	<el-form-item label="盘点单号">
			    	<el-input v-model="searchForm.consignor" placeholder="盘点单号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="盘点类型">
			    	<el-select v-model="searchForm.state" placeholder="盘点类型">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="盘点状态">
				    <el-select v-model="searchForm.state" placeholder="盘点状态">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="onClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">创建盘点单</button>
			<button class="tool-btn btn-export">导出</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop=""
			      	label="盘点单号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="盘点类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="盘点范围"
			      	width="150">
			    </el-table-column>
			     <el-table-column
			      	prop=""
			      	label="盘点规则"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="创建时间"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="创建人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="完成初盘时间"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="初盘人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="完成复盘时间"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="复盘人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="审核时间"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="审核人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop=""
			      	label="状态"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="350"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
			      			<el-button
				          		type="text"
				          		size="small">
				          		打印盘点单
				        	</el-button>
				      		<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="handleInventory(scope.row)">
				          		手工盘点
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="reviewed(scope.row)">
				          		审核
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="goDetail(scope.row)">
				          		详情
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="edite(scope.row)">
				          		编辑
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="deleteRow(scope.$index, tableData)">
				          		删除
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
		<el-dialog
		  	:title="editeTitle"
		  	:visible.sync="dialogVisible"
		  	size="tiny"
			:modal-append-to-body="false"
		  	:close-on-press-escape="false"
		  	:close-on-click-modal="false">
		  	<v-DialogForm
		  		:dialogVisible="dialogVisible"
		  		@doClose="doClose"
		  		@doSure="doSure"></v-DialogForm>
		</el-dialog>
	</div>
</template>

<script>
	import DialogForm from '@/components/storageaction/inventory/dialogForm'
	export default {
	  	name: 'inventory',
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
		        editeTitle:""
	  		}
	  	},
	  	mounted :function(){
		    this.loadData()
		},
		components:{
			"v-DialogForm":DialogForm
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
	      	add:function(){
	      		this.editeTitle = "创建盘点单";
	      		this.dialogVisible = true;
	      	},
	      	edite:function(row){
	      		this.editeTitle = "编辑盘点单";
	      		this.dialogVisible = true;
	      	},
	      	doSure:function(){
	      		this.editeTitle = "";
	      		this.dialogVisible = false;
	      	},
	      	doClose:function(){
	      		this.editeTitle = "";
	      		this.dialogVisible = false;
	      	},
	      	goDetail:function(row){
	      		this.$router.push({ path: '/storage_action/inventory/detail/'+row.id});
	      	},
	      	deleteRow:function(index, rows) {
	      		this.$confirm('确定删除该该条记录吗?', '提示', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning'
		        }).then(() => {
		        	rows.splice(index, 1);
		          	this.$message({
			            type: 'success',
			            message: '删除成功!'
		          	});
		        }).catch(() => {
		          	this.$message({
			            type: 'info',
			            message: '已取消删除'
		          	});          
		        });
      		},
      		reviewed:function(row){
		       var h = this.$createElement;
		       	this.$msgbox({
		          	title: '盘点结果审核',
		          	message: h('div', {style:'text-align:center'}, [
			            h('p', null, '请仔细检查盘点结果详情，然后再予以审核！'),
			            h('p', null, '一旦审核通过，盘点结果将记录进系统库存！')
		          	]),
		          	showCancelButton: true,
		          	confirmButtonText: '通过审核',
		          	cancelButtonText: '拒绝',
		          	beforeClose: (action, instance, done) => {
			            if (action === 'confirm') {
			              	instance.confirmButtonLoading = true;
			              	instance.confirmButtonText = '执行通过...';
			              	setTimeout(() => {
				                done();
				                	setTimeout(() => {
				                  		instance.confirmButtonLoading = false;
				                	}, 300);
			              	}, 3000);
			            } else {
			              	instance.cancelButtonLoading = true;
			              	instance.cancelButtonText = '执行拒绝...';
			              	setTimeout(() => {
				                done();
				                	setTimeout(() => {
				                  		instance.cancelButtonLoading = false;
				                	}, 300);
			              	}, 3000);
			            }
		          	}
		        }).then(action => {
		        	var info = "";
		        	if (action === 'confirm') {
		        		info = "通过审核执行成功"
		        	}else{
		        		info = "拒绝执行成功"
		        	}
		          	this.$message({
			            type: 'info',
			            message: info
		          	});
		        })
      		},
      		handleInventory:function(row){
      			this.$router.push({ path: '/storage_action/inventory/handle_inventory/'+row.id});
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