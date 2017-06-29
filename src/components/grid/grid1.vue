<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  	<el-form-item label="审批人">
			    	<el-input v-model="formInline.user" placeholder="审批人"></el-input>
			  	</el-form-item>
			  	<el-form-item label="审批人">
			    	<el-input v-model="formInline.user" placeholder="审批人"></el-input>
			  	</el-form-item>
			  	<el-form-item label="活动区域">
				    <el-select v-model="formInline.region" placeholder="活动区域">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSubmit">查询</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-refresh">同步数据</button>
			<button class="tool-btn btn-add" @click="add">新增入库交接</button>
			<button class="tool-btn btn-export">导出表格</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="orderNo"
			      	label="采购单号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="货主"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="supplier"
			      	label="供应商"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	label="创建日期"
			      	width="150">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createdate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					prop="date"
					label="预约到货日期"
					width="150">
			    </el-table-column>
			    <el-table-column
					prop="weight"
					label="总重量"
					width="150">
			    </el-table-column>
			    <el-table-column
					prop="count"
					label="总数量"
					width="150">
			    </el-table-column>
			    <el-table-column
					prop="state"
					label="状态"
					width="150">
					<template scope="scope">
			      		<span class="color-gred" v-if="scope.row.state==2">交接完成</span>
			      		<span v-if="scope.row.state==1">已到达，待交接</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="180"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				      		<el-button
				          		type="text"
				          		size="small">
				          		查看
				        	</el-button>
				        	<el-button
				         		@click.native.prevent="deleteRow(scope.$index, tableData)"
				          		type="text"
				          		size="small">
				          		移除
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small">
				          		取消到达
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
	  	name: 'grid1',
	  	data:function(){
	  		return {
	  			formInline: {
		          	user: '',
		          	region: ''
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
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	createdate:'2016-05-02',
		          	date: '2016-05-02',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		        	createdate:'2016-05-02',
		          	date: '2016-05-04',
		          	weight:'800kg',
		          	count:'11000包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		          	date: '2016-05-01',
		          	createdate:'2016-05-02',
		          	weight:'1200kg',
		          	count:'1500包',
		          	state: '2'
		        }, {
		        	orderNo:'25589878996',
		        	consignor:'张家港长江国际',
		        	supplier:'吴江市欣蕾纺织有限公司',
		          	date: '2016-05-03',
		          	createdate:'2016-05-02',
		          	weight:'1100kg',
		          	count:'12500包',
		          	state: '1'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 2000);
	  		},
	      	onSubmit() {
	      		this.currentPage = 1;
	        	console.log('submit!');
	        	this.loadData();
	      	},
	      	deleteRow(index, rows) {
        		rows.splice(index, 1);
        		this.loadData();
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
		    add:function(){
		    	this.$router.push({ path: '/baseinfo/customer_manage/form' });
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