<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="货主">
			    	<el-input v-model="formInline.consignor" placeholder="货主"></el-input>
			  	</el-form-item>
			  	<el-form-item label="供应商">
			    	<el-input v-model="formInline.supplier" placeholder="供应商"></el-input>
			  	</el-form-item>
			  	<el-form-item label="排除零库存">
				    <el-select v-model="formInline.isZero" placeholder="排除零库存">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="品牌">
			    	<el-input v-model="formInline.brand" placeholder="品牌"></el-input>
			  	</el-form-item>
			  	<el-form-item label="批号/型号/货号">
			    	<el-input v-model="formInline.batchNo" placeholder="批号/型号/货号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="商品条码">
			    	<el-input v-model="formInline.barcode" placeholder="商品条码"></el-input>
			  	</el-form-item>
			  	<el-form-item label="产品名称">
			    	<el-input v-model="formInline.productName" placeholder="产品名称"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-export">导出表格</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="barcode"
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
			      	prop="stockNo"
			      	label="库存量"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="lockStock"
			      	label="冻结库存"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="defectStock"
			      	label="次品库存"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="80"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="goFlow(scope.row)">
				          		库存流水
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
	  	name: 'goodsstock',
	  	data:function(){
	  		return {
	  			formInline: {
		          	consignor: '',
		          	supplier: '',
		          	isZero:'',
		          	brand:'',
		          	batchNo:'',
		          	barcode:'',
		          	productName:''
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
	  				goodsId:'1',
		        	barcode:'SP2017984',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'2',
		        	barcode:'SP2017985',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'3',
		        	barcode:'SP2017986',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'3',
		        	barcode:'SP2017987',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'4',
		        	barcode:'SP2017988',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'5',
		        	barcode:'SP2017989',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'6',
		        	barcode:'SP2017910',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'7',
		        	barcode:'SP2017911',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'8',
		        	barcode:'SP2017912',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'9',
		        	barcode:'SP2017913',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        },{
	  				goodsId:'10',
		        	barcode:'SP2017914',
		        	consignor:'杭州塑料制品厂',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	stockNo:'150',
		        	lockStock:'20',
		        	defectStock:'30',
		        	createdate:'2016-05-02'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSearch:function() {
	      		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline = {
	  				consignor: '',
		          	supplier: '',
		          	isZero:'',
		          	brand:'',
		          	batchNo:'',
		          	barcode:'',
		          	productName:''
		        }
	      	},
	      	goFlow(rows) {
        		this.$router.push({ path: '/datachart/goods_stock/flow/'+rows.goodsId });
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
	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
</style>