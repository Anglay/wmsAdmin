<template>
	<div class="form-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/baseinfo/customer_manage' }">客户管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{this.$route.params.customerid?'编辑客户':'新增客户'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="form-content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="form-wraper">
			  	<el-form-item label="客户编号" v-if="this.$route.params.customerid">
			    	<span>{{this.$route.params.customerid}}</span>
			  	</el-form-item>
			  	<el-form-item label="客户类型" prop="type">
			    	<el-select v-model="ruleForm.type" placeholder="请选择客户类型" style="display:block;">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="名称" prop="name">
			      	<el-input v-model="ruleForm.name"></el-input>
			  	</el-form-item>
			  	<el-form-item label="联系人" prop="contacts">
			      	<el-input v-model="ruleForm.contacts"></el-input>
			  	</el-form-item>
			  	<el-form-item label="联系电话" prop="tel">
			      	<el-input v-model="ruleForm.tel"></el-input>
			  	</el-form-item>
			  	<el-form-item label="邮箱" prop="email">
			      	<el-input v-model="ruleForm.email"></el-input>
			  	</el-form-item>
			  	<el-form-item label="传真" prop="fax">
			      	<el-input v-model="ruleForm.fax"></el-input>
			  	</el-form-item>
			  	<el-form-item label="联系地址" prop="province">
			      	<el-col :span="7">
				      	<el-select placeholder="选择省份" v-model="ruleForm.province">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-col>
				    <el-col class="line" :span="1">-</el-col>
				    <el-col :span="7">
				      	<el-select placeholder="选择城市" v-model="ruleForm.city">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-col>
				    <el-col class="line" :span="1">-</el-col>
				    <el-col :span="8">
				      	<el-select placeholder="选择区/县" v-model="ruleForm.district">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-col>
			  	</el-form-item>
			  	<el-form-item prop="address">
			      	<el-input v-model="ruleForm.address"></el-input>
			  	</el-form-item>
			  	<el-form-item label="备注" prop="desc">
			    	<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			  	</el-form-item>
			  	<el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  	</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
  export default {
  	
    data() {
    	var validateTel = function(rule, value, callback){
    		if (value!=='') {
	    		if(/^((\+86)|(86))?(13)\d{9}$/.test(value)||/^0\d{2,3}-?\d{7,8}$/.test(value)){
	    			callback();
	    		}
	    		callback(new Error('请输入正确的联系电话'));
          	}
	     };
      	return {
        	ruleForm: {
        		type:"",
        		name:"",
        		contacts:"",
        		tel:"",
        		email:"",
        		fax:"",
        		province:"",
        		city:"",
        		district:"",
        		address:"",
        		desc:""
        	},
        	rules: {
        		type:[
	          		{ required: true, message: '请选择客户类型', trigger: 'change' }
	          	],
	          	name: [
		            { required: true, message: '请输入名称', trigger: 'blur' },
		            { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }
	          	],
	          	contacts: [
		            { required: true, message: '请输入联系人', trigger: 'blur' },
		            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
	          	],
	          	tel: [
		            { required: true, message: '请输入联系电话', trigger: 'blur' },
		            { validator: validateTel, trigger: 'change' }
	          	],
	          	email:[
      				{ type: 'email', message: '请输入正确的邮箱', trigger: 'blur,change' }
	          	],
	          	province:[
	          		{ required: true, message: '请选择省份', trigger: 'change' }
	          	],
	          	address:[
	          		{ required: true, message: '请输入详细地址', trigger: 'blur' },
	          		{ min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur,change' }
	          	],
	          	desc:[
	          		{ min: 0, max: 200, message: '长度在 0 到 200 个字符', trigger: 'change' }
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
	        this.$refs[formName].validate((valid) => {
	          	if (valid) {
	            	alert('submit!');
	          	} else {
		            // console.log('error submit!!');
		            // this.$router.back(-1)
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