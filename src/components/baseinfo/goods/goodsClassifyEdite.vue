<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px">
		  	<el-form-item label="分类名称" prop="typeName">
		    	<el-input v-model="ruleForm.typeName"></el-input>
		  	</el-form-item>
		  	<el-form-item label="描述" prop="desc">
		  		<el-input type="textarea" v-model="ruleForm.desc"></el-input>
		 	</el-form-item>
		  	<el-form-item label="排序" prop="sortNo">
		    	<el-input v-model.number="ruleForm.sortNo"></el-input>
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
    		var checkNumber = function(rule, value, callback){
    			if (value!="") {
		          	if (!Number.isInteger(value)) {
		            	callback(new Error('请输入数字值'));
		          	} else {
			            if (value < 0) {
			              	callback(new Error('输入不能为负数'));
			            } else {
			              	callback();
			            }
		          	}
		        }else{
		          	callback();
		        }
		    };
	      	return {
		        ruleForm: {
		          	typeName: '',
		          	desc: '',
		          	sortNo: ''
		        },
		        rules: {
		          	typeName: [
		            	{ required: true, message: '请输入分类名称', trigger: 'blur' },
		            	{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
		          	],
		          	desc: [
		          		{ min: 0, max: 20, message: '长度在 20 个字符以内', trigger: 'change' }
		          	],
		          	sortNo: [
		          		{ validator: checkNumber, trigger: 'change' }
		          	]
		        }
	      	};
	    },
	    props:["params"],
	    watch:{
	    	params:function(val, oldVal){
	    		this.ruleForm = val.data;
	    	}
	    },
	    mounted:function(){
	    	if (this.params.type=="edite") {
	    		this.ruleForm = this.params.data;
	    	}
	    },
    	methods: {
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		            	this.$emit("doSend",this.ruleForm);
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