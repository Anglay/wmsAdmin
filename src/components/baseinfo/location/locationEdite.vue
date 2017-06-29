<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px">
		  	<el-form-item label="所在排" prop="locationColumn">
		    	<el-input v-model.number="ruleForm.locationColumn"></el-input>
		  	</el-form-item>
		  	<el-form-item label="所在层" prop="locationRow">
		  		<el-input v-model.number="ruleForm.locationRow"></el-input>
		 	</el-form-item>
		 	<el-form-item label="添加数量" prop="number">
		  		<el-input v-model.number="ruleForm.number"></el-input>
		 	</el-form-item>
		  	<el-form-item label="描述" prop="desc">
		  		<el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
    			if (value <= 0) {
	              	callback(new Error('输入值必须大于0'));
	            } else {
	            	if (!Number.isInteger(value)) {
	            		callback(new Error('输入值必须为整数'));
	            	}else{
	            		callback();
	            	}
	            }
		    };
	      	return {
		        ruleForm: {
		          	locationColumn: '',
		          	locationRow:'',
		          	number:'',
		          	desc: ''
		        },
		        rules: {
		          	locationColumn: [
		            	{ required: true, message: '请输入所在排', trigger: 'blur'},
		            	{ type: 'number', message: '所在排必须为数字值', trigger: 'change'},
		            	{ validator: checkNumber, trigger: 'change' }
		          	],
		          	locationRow:[
		          		{ required: true, message: '请输入所在层', trigger: 'blur'},
		          		{ type: 'number', message: '所在层必须为数字值', trigger: 'change,blur'},
		          		{ validator: checkNumber, trigger: 'change,blur' }
		          	],
		          	number: [
		          		{ required: true, message: '请输入添加数量', trigger: 'blur'},
		          		{ type: 'number', message: '数量必须为数字值', trigger: 'change,blur'},
		          		{ validator: checkNumber, trigger: 'change,blur'}
		          	],
		          	desc: [
		          		{ min: 0, max: 200, message: '长度在 200 个字符以内', trigger: 'change' }
		          	]
		        }
	      	};
	    },
	    props:["flag"],
	    watch:{
	    	"flag":function(val,oldval){
	    		if(!val){
	    			this.$refs['ruleForm'].resetFields();
	    		}
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