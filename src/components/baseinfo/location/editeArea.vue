<template>
	<div class="form-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/baseinfo/location_manage' }">库区库位</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{this.$route.params.areaId?'编辑库区':'新增库区'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="form-content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="form-wraper">
			  	<el-form-item label="库区编号" prop="areaNo">
			      	<el-input v-model="ruleForm.areaNo"></el-input>
			  	</el-form-item>
			  	<el-form-item label="库区名称" prop="areaName">
			      	<el-input v-model="ruleForm.areaName"></el-input>
			  	</el-form-item>
			  	<el-form-item label="库区类型" prop="areaType">
			      	<el-select v-model="ruleForm.areaType" placeholder="库区类型" style="display:block;">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="备注" prop="desc">
			  		<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			  	</el-form-item>
			  	
			  	<el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				    <el-button @click="resetForm('ruleForm')">取消</el-button>
			  	</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
  	export default {
	    data() {
	      	return {
	        	ruleForm:{
	        		areaNo:'',
	        		areaName:'',
	        		areaType:'',
	        		desc:''
	        	},
	        	rules:{
	        		areaNo:[
	        			{ required: true, message: '请输入库区编号', trigger: 'blur' },
	        			{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change,blur' }
	        		],
	        		areaName:[
	        			{ required: true, message: '请输入库区名称', trigger: 'blur' },
	        			{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change,blur' }
	        		],
	        		areaType:[
	        			{ required: true, message: '请选择库区类型', trigger: 'change' }
	        		],
	        		desc:[
	        			{ min: 0, max: 200, message: '长度在 200 个字符以内', trigger: 'change,blur' }
	        		]
	        	}
	      	};
	    },
	    activated:function(){
	    	console.log(this.$route.params)
	    },
	    deactivated:function(){
	    	this.$refs['ruleForm'].resetFields();
	    },
	    methods: {
	      	submitForm(formName) {
	      		console.log(this.ruleForm.classify)
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
	      	}
	    }
  	}
</script>

<style lang="less">
	.form-container{
		height: auto;
		overflow: hidden;
		
		.form-content{
			height: auto;
			overflow: hidden;
			padding: 15px;
			background: #fff;
			.form-wraper{
				width: 500px;
				.line{
					text-align: center;
				}
			}
		}
	}
</style>