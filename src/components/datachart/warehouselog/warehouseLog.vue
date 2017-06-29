<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="时间">
			    	<el-date-picker
				      	v-model="dateTime"
				      	type="daterange"
				      	placeholder="选择日期范围">
				    </el-date-picker>
			  	</el-form-item>
			  	<el-form-item label="操作人">
			    	<el-input v-model="formInline.actioner" placeholder="操作人"></el-input>
			  	</el-form-item>
			  	<el-form-item label="业务类型">
				    <el-input v-model="formInline.businessType" placeholder="业务类型"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSubmit">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	label="创建日期"
			      	width="150">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createDate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	prop="actioner"
			      	label="操作人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="businessType"
			      	label="业务类型"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="businessNo"
			      	label="业务单号">
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
	  	name: 'warehouseLog',
	  	data:function(){
	  		return {
	  			formInline: {
		          	time: '',
		          	actioner: '',
		          	businessType:''
		        },
		        dateTime:'',
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
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        },{
		        	createDate:'2016-05-02',
		        	actioner:'小A',
		        	businessType:'采购入库',
		        	businessNo:'RUK0931230'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSubmit() {
	      		this.currentPage = 1;
	        	console.log('submit!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline = {
		          	time: '',
		          	actioner: '',
		          	businessType:''
		        }
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