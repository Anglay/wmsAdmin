<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  	<el-form-item label="货主">
			    	<el-input v-model="formInline.consignor" placeholder="货主"></el-input>
			  	</el-form-item>
			  	<el-form-item label="供应商">
			    	<el-input v-model="formInline.supplier" placeholder="供应商"></el-input>
			  	</el-form-item>
			  	<el-form-item label="批号/型号/货号">
			    	<el-input v-model="formInline.batchNo" placeholder="批号/型号/货号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="产品名称">
			    	<el-input v-model="formInline.productName" placeholder="产品名称"></el-input>
			  	</el-form-item>
			  	<el-form-item label="品牌">
			    	<el-input v-model="formInline.brand" placeholder="品牌"></el-input>
			  	</el-form-item>
			  	<el-form-item label="分类">
				    <el-select v-model="formInline.classify" placeholder="分类">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onClear">清空</el-button>
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
			      	prop="createDate"
			      	label="时间"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="type"
			      	label="入库类型"
			      	width="150">
			    </el-table-column>
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
			      	prop="spareNum"
			      	label="散件数量"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="handoverNum"
			      	label="实际交接数量"
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

<script type="text/javascript">
	export default {
	    name: 'detailed',
	    data:function(){
	    	return {
	    		formInline: {
	    			consignor:'',
	    			supplier:'',
	    			brand:'',
	    			batchNo:'',
	    			classify:'',
	    			productName:''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10
	    	}
	    },
	    props:['value'],
	    watch:{
	    	"value":function(val,oldval){
	    		console.log(val)

	    	}
	    },
	    mounted:function(){
	    	this.$emit("changeActiveName",'detailed');
	    	console.log(this.value)
	    	this.loadData();
	    },
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				goodsId:'1',
	  				type:'采购入库',
		        	goodsBarCode:'SP2017984',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'2',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017985',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'3',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017986',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'3',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017987',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'4',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017988',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'5',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017989',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'6',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017910',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'7',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017911',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'8',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017912',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'9',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017913',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
		        },{
	  				goodsId:'10',
		        	type:'采购入库',
		        	goodsBarCode:'SP2017914',
		        	consignor:'杭州塑料制品厂',
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
		        	handoverNum:'80',
		        	createDate:'2016-05-02'
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