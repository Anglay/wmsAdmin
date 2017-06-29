<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="入库单号">
			    	<el-input v-model="formInline.inStockNo" placeholder="销售退货入库单号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="业务类型">
				    <el-select v-model="formInline.type" placeholder="状态">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="客户单号">
			    	<el-input v-model="formInline.customerNo" placeholder="客户单号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="货主">
			    	<el-input v-model="formInline.consignor" placeholder="货主"></el-input>
			  	</el-form-item>
			  	<el-form-item label="状态">
				    <el-select v-model="formInline.state" placeholder="状态">
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
			<button class="tool-btn btn-refresh">同步入库单数据</button>
			<button class="tool-btn btn-export">导出</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="inStockNo"
			      	label="入库单号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="type"
			      	label="业务类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="customerNo"
			      	label="客户单号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="consignor"
			      	label="货主"
			      	width="250">
			    </el-table-column>
			    <el-table-column
					prop="handleDate"
					label="交接时间"
					width="250">
			    </el-table-column>
			    <el-table-column
			      	label="上架时间"
			      	width="250">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createDate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					prop="handler"
					label="上架人"
					width="100">
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
			      	label="操作"
			      	fixed="right"
			      	width="200"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				        	<el-button
				          		type="text"
				          		size="small">
				          		打印入库单
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="handShelves(scope.row)">
				          		手工上架
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
	  	name: 'grid1',
	  	data:function(){
	  		return {
	  			formInline: {
	  				inStockNo:'',
	  				customerNo:'',
	  				consignor:'',
		          	state: '',
		          	type:''
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
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'2',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'3',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'4',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'5',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'6',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'7',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'8',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'9',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'10',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        },{
	  				id:'11',
		        	inStockNo:'CG2017090',
		        	customerNo:'ZX990',
		        	consignor:'杭州塑料制品厂',
		        	createDate:'2017-05-26 14：21：23',
		        	creater:'小强',
		          	orderDate: '2017-05-26 14：21：23',
		          	handleDate: '2017-05-26 14：21：23',
		          	handler:'小强',
		          	weight:'1000kg',
		          	count:'11500包',
		          	state: '1'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSearch() {
	      		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	      	},
	      	onClear:function(){
	      		this.formInline = {
	  				inStockNo:'',
	  				customerNo:'',
	  				consignor:'',
		          	state: ''
		        }
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
		    handShelves:function(rows){
		    	this.$router.push({ path: '/instorage_action/warehouse_shelves/hand/'+rows.id });
		    },
		    goDetail:function(rows){
		    	this.$router.push({ path: '/instorage_action/warehouse_shelves/detail/'+rows.id });
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