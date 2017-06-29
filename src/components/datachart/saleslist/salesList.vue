<template>
	<div class="chart-container">
		<div class="chart-search">
			<div class="search-item">
				<el-button-group>
				  	<el-button v-for="(item,index) in items" :type="item.value==time?'primary':''" :key="index" @click="checkItem(item)">{{item.text}}</el-button>
				</el-button-group>
			</div>
			<div class="search-item">
				<el-date-picker
			      	v-model="dateTime"
			      	type="daterange"
			      	placeholder="选择日期范围">
			    </el-date-picker>
			</div>
			<div class="search-item">
				<el-button type="primary">查询</el-button>
			</div>
			<div class="search-item">
				<el-button>清除</el-button>
			</div>
		</div>
		
		<div class="grid-toolbar">
			<button class="tool-btn btn-export">导出表格</button>
		</div>
		<div class="statistic-content">
			<p>
				统计：
				<span>货主N</span>
				<span>供应商N</span>
				<span>产品分类数M</span>
				<span>批号/型号/货号数量N</span>
				<span>sku数量M</span>
				<span>商品数量N</span>
			</p>
		</div>
		<div class="grid-content">
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
			    </el-table-column>规格
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
			      	prop="outStockNum"
			      	label="出库数量"
			      	width="150">
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
	    name: 'salesList',
	    data:function(){
	    	return {
	    		items:[
	    			{'text':'今天',value:'today'},
	    			{'text':'昨天',value:'yesterday'},
	    			{'text':'最近7天',value:'7day'},
	    			{'text':'最近30天',value:'30day'},
	    		],
	    		time:'today',
	    		dateTime:'',
	    		type:'primary',
	    		loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10
			}
	    },
	    mounted:function(){
	    	this.loadData();
	    },
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				goodsId:'1',
	  				goodsBarCode:'SP2017985',
	  				consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'2',
		        	goodsBarCode:'SP2017985',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'3',
		        	goodsBarCode:'SP2017986',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'3',
		        	goodsBarCode:'SP2017987',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'4',
		        	goodsBarCode:'SP2017988',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'5',
		        	goodsBarCode:'SP2017989',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'6',
		        	goodsBarCode:'SP2017910',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'7',
		        	goodsBarCode:'SP2017911',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'8',
		        	goodsBarCode:'SP2017912',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'9',
		        	goodsBarCode:'SP2017913',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        	
		        },{
	  				goodsId:'10',
		        	goodsBarCode:'SP2017914',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	outStockNum:'300'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	    	onSearch:function(){
	    		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	    	},
	    	onClear:function(){
	    		this.formInline = {
	    			consignor:'',
	    			supplier:'',
	    			brand:'',
	    			batchNo:'',
	    			classify:'',
	    			productName:''
		        }
	    	},
	    	checkItem:function(item){
	    		this.time = item.value;
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
		    }
	    }
	};
</script>
<style lang="less" scoped>
	.chart-container{
		height: auto;
		overflow: hidden;
		padding: 0 15px;
		background: #fff;
		.chart-search{
			height: auto;
			overflow: hidden;
			padding: 15px 0;
			.search-item{
				display: inline-block;
				height: auto;
				overflow: hidden;
				float: left;
				padding-right: 15px;
			}
		}
		.grid-toolbar{
			padding: 10px 0;
		}
		.grid-content{
			padding: 0;
		}
	}
</style>