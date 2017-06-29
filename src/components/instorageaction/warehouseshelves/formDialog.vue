<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
		  	<el-form-item label="库区类型" prop="type">
		    	<el-select v-model="ruleForm.type" placeholder="请选择库区类型">
			      	<el-option label="类型一" value="A1"></el-option>
			      	<el-option label="类型二" value="A2"></el-option>
			      	<el-option label="类型三" value="A3"></el-option>
			      	<el-option label="类型四" value="A4"></el-option>
			    </el-select>
		  	</el-form-item>
		  	<el-form-item label="库区" prop="area">
		  		<el-select v-model="ruleForm.area" placeholder="请选择库区">
			      	<el-option label="库区一" value="1"></el-option>
			      	<el-option label="库区二" value="2"></el-option>
			      	<el-option label="库区三" value="3"></el-option>
			      	<el-option label="库区四" value="4"></el-option>
			    </el-select>
		 	</el-form-item>
		  	<el-form-item label="库位" prop="location">
		    	<el-select v-model="ruleForm.location" placeholder="请选择库位">
			      	<el-option label="库位一" value="881"></el-option>
			      	<el-option label="库位二" value="882"></el-option>
			      	<el-option label="库位三" value="883"></el-option>
			      	<el-option label="库位四" value="884"></el-option>
			    </el-select>
		  	</el-form-item>
		  	<el-form-item>
		   		<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
		    	<el-button @click="resetForm('ruleForm')">取消</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>
<script>
  	export default {
    	data() {
	      	return {
		        ruleForm: {
		          	type: '',
		          	area: '',
		          	location: ''
		        },
		        rules: {
		          	type: [
		            	{ required: true, message: '请选择库区类型', trigger: 'change' }
		          	],
		          	area: [
		            	{ required: true, message: '请选择库区', trigger: 'change' }
		          	],
		          	location: [
		            	{ required: true, message: '请选择库位', trigger: 'change' }
		          	]
		        }
	      	};
	    },
	    props:["index"],
    	methods: {
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		          		var locationStr = this.ruleForm.type+"-"+this.ruleForm.area+"-"+this.ruleForm.location;
		            	this.$emit("setLocation",locationStr,this.index);
		            	this.$refs[formName].resetFields();
		          	} else {
		            	return false;
		          	}
		        });
	      	},
	      	resetForm(formName) {
	        	this.$refs[formName].resetFields();
	        	this.$emit("doClose");
	      	}
	    }
  	}
</script>