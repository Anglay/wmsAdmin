<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="searchForm">
			  	<el-form-item label="波次编号">
			    	<el-input v-model="searchForm.waveNo" placeholder="波次编号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="状态">
				    <el-select v-model="searchForm.state" placeholder="状态">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="拣货时间">
			  		<el-date-picker
				      	v-model="searchForm.pickingTime"
				      	type="datetime"
				      	placeholder="拣货时间">
				    </el-date-picker>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="onClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">创建波次</button>
			<button class="tool-btn btn-export">导出</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="waveNo"
			      	label="波次编号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="orderNum"
			      	label="订单数"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="skuNum"
			      	label="sku数量"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="goodsNum"
			      	label="商品数量"
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
			      	label="创建时间"
			      	width="250">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createDate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					prop="date"
					label="拣货时间"
					width="250">
			    </el-table-column>
			    <el-table-column
					prop="picker"
					label="拣货人"
					width="150">
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="250"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				      		<el-button
				          		type="text"
				          		size="small">
				          		打印拣货单 
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="eidteRow(scope.row)">
				          		编辑 
				        	</el-button>
				        	<el-button
				         		@click.native.prevent="goDetail(scope.row)"
				          		type="text"
				          		size="small">
				          		详情
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
	</div>
</template>

<script>
	export default {
	  	name: 'grid1',
	  	data:function(){
	  		return {
	  			searchForm: {
		          	waveNo: '',
		          	pickingTime: '',
		          	state:''
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
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		        	date: '2017.5.25 11:30:20',
		        	createDate:'2017.5.25 11:30:20',
		          	state: '1'
		        }, {
		        	id:'2',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		        	date: '2017.5.25 11:30:20',
		        	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'3',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'4',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '1'
		        }, {
		        	id:'5',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'6',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '1'
		        }, {
		        	id:'7',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'8',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '1'
		        }, {
		        	id:'9',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'10',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '1'
		        }, {
		        	id:'11',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
		          	state: '2'
		        }, {
		        	id:'12',
		        	waveNo:'BC1705250023',
		        	orderNum:'30',
		        	skuNum:'150',
		        	goodsNum:'60',
		        	picker:'小强',
		          	date: '2017.5.25 11:30:20',
		          	createDate:'2017.5.25 11:30:20',
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
		          	waveNo: '',
		          	pickingTime: '',
		          	state:''
		        };
	      	},
	      	deleteRow(index, rows) {
        		rows.splice(index, 1);
      		},
	      	goDetail:function(row) {
	      		this.$router.push({ path: '/outstorage_action/wave_picking/detail/'+row.id });
      		},
      		eidteRow:function(row){
      			this.$router.push({ path: '/outstorage_action/wave_picking/edite/'+row.id });
      		},
      		add:function(row){
      			this.$router.push({ path: '/outstorage_action/wave_picking/add' });
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