<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/storage_action/inventory_adjustment' }">库存调整</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{this.$route.params.id?'编辑库存调整':'新建库存调整'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="form">
			    <el-tab-pane :label="this.$route.params.id?'编辑库存调整':'新建库存调整'" name="form">
			    	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
					  	<el-form-item label="所属库位" required>
					  		<div class="form-item">
					    		<el-form-item prop="area">
						    		<el-select v-model="ruleForm.area" placeholder="请选择库区">
								      	<el-option label="区域一" value="shanghai"></el-option>
								      	<el-option label="区域二" value="beijing"></el-option>
								    </el-select>
							    </el-form-item>
						    </div>
						    <div class="form-item">
					    		<el-form-item prop="location">
						    		<el-select v-model="ruleForm.location" placeholder="请选择库位" @change="getGoods">
								      	<el-option label="区域一" value="shanghai"></el-option>
								      	<el-option label="区域二" value="beijing"></el-option>
								    </el-select>
							    </el-form-item>
						    </div>
					  	</el-form-item>
					  	<el-form-item label="商品信息">
					  		<div class="notice-text" v-if="!isCheck&&tableData.length==0">请选择库区库位获取商品</div>
					  		<div class="notice-text" v-else-if="isCheck&&tableData.length==0">该库位暂无商品</div>
					  		<div v-else>
					  			<el-table
								    :data="tableData"
								    border
								    style="width: 100%">
								    <el-table-column
								      	prop=""
								      	label="商品条码"
								      	width="150">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="货主"
								      	width="150">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="供应商"
								      	width="150">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="产品编号"
								      	width="150">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="产品分类"
								      	width="250">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="品牌"
								      	width="250">
								    </el-table-column>
								    <el-table-column
								    	prop=""
								      	label="批号/型号/货号"
								      	width="150">
								    </el-table-column>
								    <el-table-column
								      	prop=""
								      	label="产品名称"
								      	width="150">
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
								      	label="库存数量"
								      	width="150">
								    </el-table-column>
								</el-table>
					  		</div>
					  	</el-form-item>
					  	<el-form-item label="类型"required>
					    	<div class="form-item">
					    		<el-form-item prop="type">
						    		<el-select v-model="ruleForm.type" placeholder="请选择类型">
								      	<el-option label="区域一" value="shanghai"></el-option>
								      	<el-option label="区域二" value="beijing"></el-option>
								    </el-select>
							    </el-form-item>
					    	</div>
					  	</el-form-item>
					  	<el-form-item label="调整数量" prop="adjustNum">
					  		<div class="form-item">
						    	<el-input v-model="ruleForm.adjustNum"></el-input>
						    </div>
					  	</el-form-item>
					  	<el-form-item label="备注">
					  		<div class="form-item width400">
						    	<el-input
						    		type="textarea"
								  	:rows="4"
								  	placeholder="请输入内容"
								  	v-model="ruleForm.desc"></el-input>
						    </div>
					  	</el-form-item>
					  	<el-form-item>
						    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						    <el-button @click="resetForm('ruleForm')">取消</el-button>
						</el-form-item>
					</el-form>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
	  	data() {
	      	return {
	      		ruleForm: {
		        	area:'',
		        	location:'',
		        	type:'',
		        	adjustNum:'',
		        	desc:''
		        },
		        rules: {
		        	area: [
			            { required: true, message: '请选择库区', trigger: 'change' }
			        ],
			        location:[
			        	{ required: true, message: '请选择库位', trigger: 'change' }
			        ],
			        type:[
			        	{ required: true, message: '请选择类型', trigger: 'blur' }
			        ],
			        adjustNum:[
			        	{ required: true, message: '请输入调整数量', trigger: 'blur' }
			        ]
		        },
		        isCheck:false,
		        tableData:[]
	        }
	    },
	    mounted :function(){
	    	if(this.$route.params.id){
	    		this.isCheck = true;
	        	this.tableData = [{},{}];
	    	}
	    	console.log(this.$route.params)
		},
	    methods: {
	    	getGoods:function(){
	    		this.isCheck = true;
	    		this.tableData = [{},{},{},{}];
	    		console.log(this.ruleForm.location)
	    	},
	    	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		            	alert('submit!');
		          	} else {
			            return false;
		          	}
		        });
	      	},
	      	resetForm(formName) {
	      		this.$refs[formName].resetFields();
	        	setTimeout(() => {
	        		this.isCheck = false;
	        		this.tableData = [];
	        	},10)
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
			padding: 22px 15px;
			background: #fff;
			.form-item{
				display: inline-block;
				float: left;
				margin-right: 10px;
				width: 200px;
			}
			.width400{
				width: 420px;
			}
			.notice-text{
				color: #f97042;
			}
		}
	}
</style>