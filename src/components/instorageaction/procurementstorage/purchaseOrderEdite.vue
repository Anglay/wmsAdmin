<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/instorage_action/procurement_storage' }">采购入库交接</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{this.$route.params.id?'编辑采购单':'新建采购单'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane :label="this.$route.params.id?'编辑采购单':'新建采购单'" name="detail">
			    	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="simple-form">
					  	<el-form-item label="客户单号" prop="orderNum">
					    	<el-input v-model="ruleForm.orderNum"></el-input>
					  	</el-form-item>
					  	<el-form-item label="货主" prop="consignor">
					    	<el-input v-model="ruleForm.consignor"></el-input>
					  	</el-form-item>
					  	<el-form-item label="预约到库时间" prop="orderTime">
					    	<el-date-picker
						      	v-model="ruleForm.orderTime"
						      	type="date"
						      	placeholder="选择日期">
						    </el-date-picker>
					  	</el-form-item>
					</el-form>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="detail-content">
			<el-tabs activeName="table">
			    <el-tab-pane label="选择并添加商品" name="table">
					<el-form :inline="true" :model="params">
					  	<el-form-item label="供应商">
					  		<el-select v-model="params.supplier" placeholder="请选择供应商">
						      	<el-option label="区域一" value="shanghai"></el-option>
						      	<el-option label="区域二" value="beijing"></el-option>
						    </el-select>
					  	</el-form-item>
					  	<el-form-item label="产品分类">
					    	<el-select v-model="params.classify" placeholder="请选择产品分类">
						      	<el-option label="区域一" value="shanghai"></el-option>
						      	<el-option label="区域二" value="beijing"></el-option>
						    </el-select>
					  	</el-form-item>
					  	<el-form-item label="产品品牌">
					    	<el-select v-model="params.brand" placeholder="请选择产品品牌">
						      	<el-option label="区域一" value="shanghai"></el-option>
						      	<el-option label="区域二" value="beijing"></el-option>
						    </el-select>
					  	</el-form-item>
					  	<el-form-item label="关键字">
					    	<el-input v-model="params.keywords" placeholder="产品名称关键字"></el-input>
					  	</el-form-item>
					  	<el-form-item>
					    	<el-button type="primary" @click="addGoods">添加商品</el-button>
					  	</el-form-item>
					</el-form>
					<div v-if="tableData.length>0">
				    	<div class="statistic-content">
							<p>
								统计：
								<span>供应商数量：N</span>
								<span>产品数量：M</span>
								<span>商品数量：L</span>
							</p>
						</div>
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
						      	prop="purchaseNum"
						      	label="采购数量"
						      	width="150">
						    </el-table-column>
						    <el-table-column
						      	label="操作"
						      	width="260">
						      	<template scope="scope">
						        	<el-button
						         		@click.native.prevent="deleteRow(scope.$index, tableData)"
						          		type="text"
						          		size="small">
						          		删除
						        	</el-button>
						      	</template>
						    </el-table-column>
						</el-table>
						<div class="footer-bar">
							<el-button type="primary">提交</el-button>
							<el-button>取消</el-button>
						</div>
					</div>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<el-dialog 
			title="添加商品"
			size="d-grid"
			:visible.sync="dialogTableVisible"
			:modal-append-to-body="false"
		  	:close-on-press-escape="false"
		  	:close-on-click-modal="false">
			<v-DialogTable 
				:params="params" 
				:dialogTableVisible="dialogTableVisible"
				@sureDialog="sureDialog"
				@cancelDialog="cancelDialog"></v-DialogTable>
		</el-dialog>
	</div>
</template>

<script>
	import DialogTable from '@/components/instorageaction/procurementstorage/dialogTable'
	export default {
	  	data() {
	      	return {
	      		params: {
	    			supplier:'',
	    			brand:'',
	    			classify:'',
	    			keywords:''
		        },
		        ruleForm: {
		        	orderNum:'',
		        	consignor:'',
		        	orderTime:''
		        },
		        rules: {
		        	orderNum: [
			            { required: true, message: '请输入客户单号', trigger: 'blur' }
			        ],
			        consignor:[
			        	{ required: true, message: '请输入货主', trigger: 'blur' }
			        ],
			        orderTime:[
			        	{ required: true, message: '请选择日期', trigger: 'blur' }
			        ]
		        },
		        loading:true,
		        tableData: [],
		        dialogTableVisible:false
	        }
	    },
	    mounted :function(){
	    	console.log(this.$route.params)
		    this.loadData()
		},
		components:{
			"v-DialogTable":DialogTable
		},
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	  		deleteRow(index, rows) {
        		rows.splice(index, 1);
      		},
      		onSearch:function(){
	    		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	    	},
	    	addGoods:function(){
	    		this.dialogTableVisible = true;
	    	},
	    	sureDialog:function(arr){
	    		if (this.tableData.length>0) {
	    			this.tableData = this.tableData.concat(arr)
	    		}else{
	    			this.tableData = arr;
	    		}
	    		this.dialogTableVisible = false;
	    	},
	    	cancelDialog:function(){
	    		this.dialogTableVisible = false;
	    	}
	    }
  	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			height: auto;
			overflow: hidden;
			padding: 22px 15px 0;
			background: #fff;
			
		}
		.simple-form{
			width: 315px;
		}
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
		.footer-bar{
			height: auto;
			overflow: hidden;
			padding: 15px 0;
			text-align: center;
		}
	}
	.el-dialog--d-grid{
		width: 750px;
	}
</style>