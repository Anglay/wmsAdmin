<template>
	<div>
		<h2 class="dialog-title">从存储区向该货位补货</h2>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
		  	<el-form-item label="补货原则" prop="type">
	    		<el-select v-model="ruleForm.type" placeholder="请选择">
			      	<el-option label="区域一" value="shanghai"></el-option>
			      	<el-option label="区域二" value="beijing"></el-option>
			    </el-select>
		  	</el-form-item>
		  	<div class="dialog-grid">
		  		<h3>存储区建议库位</h3>
		  		<el-table
				    :data="tableData"
				    border
				    height="300"
				    style="width: 100%">
				    <el-table-column
				      	prop="location"
				      	label="库位">
				    </el-table-column>
				    <el-table-column
				      	prop="stockNum"
				      	label="库存数量">
				    </el-table-column>
				    <el-table-column
				      	prop="moveNum"
				      	label="移出数量">
				    </el-table-column>
				    <el-table-column
				      	label="补货数量"
				      	width="200">
				      	<template scope="scope">
							<div class="table-form-item">
								<el-input 
									v-model.number="scope.row.addNum"
									@keyup.native.prevent="inputKeyup($event,scope.row)"
									size="mini" 
									placeholder="（需填写数值）">
								</el-input>
								<span class="error-text" v-if="scope.row.errText!=''">{{scope.row.errText}}</span>
							</div>
						</template>
				    </el-table-column>
				</el-table>
		  	</div>
		  	<el-form-item>
		  		<el-col :span="18" :offset="2">
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
		          	type:''
		        },
		        rules: {
		          	type:[
		          		{ required: true, message: '请选择库区类型', trigger: 'change' }
		          	]
		        },
		        tableData:[{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        },{
		        	location:"",
		        	stockNum:"",
		        	moveNum:"",
		        	addNum:""
		        }]
      		};
    	},
    	props:["dialogVisible2"],
    	watch:{
    		"dialogVisible2":function(val,oldval){
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
		    resetForm:function(formName) {
        		this.$refs[formName].resetFields();
        		this.$emit("hideReplenishment")
      		},
      		inputKeyup :function(event,rows){
      			console.log(123)
	  			if (!/^\+?[1-9][0-9]*$/.test(rows.addNum)) {
			    	rows.errText = "请输入大于零的整数";
			    	rows.addNum = '';
	  			}else{
	  				rows.errText = "";
	  				rows.addNum = event.target.value;
	  			}
	  		}
	    }
  	}
</script>

<style lang="less">
	.dialog-title{
		text-align: center;
		font-size: 14px;
		padding-bottom: 15px;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.dialog-grid{
		height: auto;
		overflow: hidden;
		padding: 0 20px 15px;
		h3{
			font-size: 14px;
			padding-bottom: 10px;
			font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		}
		.error-text{
			font-size: 12px;
			color:#f97042;
		}
		.el-table__body-wrapper{
			overflow-x: hidden;
		}
		
	}
	
</style>