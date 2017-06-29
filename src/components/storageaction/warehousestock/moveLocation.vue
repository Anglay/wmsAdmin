<template>
	<div>
		<h2 class="dialog-title">当前未分配波次订单共N笔</h2>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
		  	<el-form-item label="移动数量" prop="name">
		    	<el-col :span="7"><el-input v-model="ruleForm.name"></el-input></el-col>
		    	<el-col :span="7" :offset="1"><el-checkbox label="全部移出" name="all"></el-checkbox></el-col>
		  	</el-form-item>
		  	<el-form-item label="移入库位" required>
		    	<el-col :span="7">
		    		<el-form-item prop="type">
			    		<el-select v-model="ruleForm.type" placeholder="请选择库区类型">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-form-item>
		    	</el-col>
		    	<el-col :span="7" :offset="1">
		    		<el-form-item prop="area">
			    		<el-select v-model="ruleForm.area" placeholder="请选择库区">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-form-item>
		    	</el-col>
		    	<el-col :span="7" :offset="1">
		    		<el-form-item prop="location">
			    		<el-select v-model="ruleForm.location" placeholder="请选择库位">
					      	<el-option label="区域一" value="shanghai"></el-option>
					      	<el-option label="区域二" value="beijing"></el-option>
					    </el-select>
				    </el-form-item>
		    	</el-col>
		  	</el-form-item>
		  	<el-form-item label="移库备注" prop="desc">
		  		<el-col :span="23">
		    		<el-input type="textarea" :rows="4" v-model="ruleForm.desc"></el-input>
		    	</el-col>
		  	</el-form-item>
		  	<el-form-item>
		  		<el-col :span="18" :offset="6">
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				    <el-button @click="resetForm('ruleForm')">取消</el-button>
			    </el-col>
			</el-form-item>
		</el-form>
	</div>
</template>

<script type="text/javascript">
	export default {
    	data() {
      		return {
		        ruleForm: {
		          	name: '',
		          	desc:'',
		          	type:'',
		          	area:'',
		          	location:''
		        },
		        rules: {
		          	name: [
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
		          	],
		          	type:[
		          		{ required: true, message: '请选择库区类型', trigger: 'change' }
		          	],
		          	area:[
		          		{ required: true, message: '请选择库区', trigger: 'change' }
		          	],
		          	location:[
		          		{ required: true, message: '请选择库位', trigger: 'change' }
		          	]
		        }
      		};
    	},
    	props:["dialogVisible"],
    	watch:{
    		"dialogVisible":function(val,oldval){
    			this.$refs['ruleForm'].resetFields();
    		}
    	},
	    methods: {
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		            	alert('submit!');
		          	} else {
			            console.log('error submit!!');
			            return false;
		          	}
		        });
		    },
		    resetForm(formName) {
        		this.$refs[formName].resetFields();
        		this.$emit("hideMive")
      		}
	    }
  	}
</script>

<style lang="less" scoped>
	.dialog-title{
		text-align: center;
		font-size: 14px;
		padding-bottom: 15px;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
</style>