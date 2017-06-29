<template>
	<div class="form-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/baseinfo/goods_manage' }">商品管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{this.$route.params.productNo?'编辑商品':'新增商品'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="form-content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="form-wraper">
			  	<el-form-item label="产品分类" prop="classify">
			      	<el-cascader
					    :options="options"
					    v-model="ruleForm.classify">
					</el-cascader>
			  	</el-form-item>
			  	<el-form-item label="品牌" prop="brand">
			      	<el-input v-model="ruleForm.brand"></el-input>
			  	</el-form-item>
			  	<el-form-item label="批号/型号/货号" prop="batchnumber">
			      	<el-input v-model="ruleForm.batchnumber"></el-input>
			  	</el-form-item>
			  	<el-form-item label="产品名称" prop="productname">
			      	<el-input v-model="ruleForm.productname"></el-input>
			  	</el-form-item>
			  	<el-form-item label="货主" prop="consignor">
			      	<el-select v-model="ruleForm.consignor" placeholder="请选择货主" style="display:block;">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="供应商" prop="supplier">
			      	<el-select v-model="ruleForm.supplier" placeholder="请选择供应商" style="display:block;">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="单位" prop="unit">
			      	<el-select v-model="ruleForm.unit" placeholder="请选择单位" style="display:block;">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="拣货区库存上下限" required>
			      	<el-col :span="11">
			      		<el-form-item prop="unitMin">
				      		<el-input v-model="ruleForm.unitMin" placeholder="单位库位库存最小量"></el-input>
				      	</el-form-item>
				    </el-col>
				    <el-col class="line" :span="2">-</el-col>
				    <el-col :span="11">
					    <el-form-item prop="unitMax">
					      	<el-input v-model="ruleForm.unitMax"  placeholder="单位库位库存最大量"></el-input>
				      	</el-form-item>
				    </el-col>
			  	</el-form-item>
			  	<el-form-item label="总库存上下限" required>
			      	<el-col :span="11">
			      		<el-form-item prop="inventoryMin">
				      		<el-input v-model="ruleForm.inventoryMin" placeholder="总库存库存最小量"></el-input>
				      	</el-form-item>
				    </el-col>
				    <el-col class="line" :span="2">-</el-col>
				    <el-col :span="11">
				    	<el-form-item prop="inventoryMax">
				      		<el-input v-model="ruleForm.inventoryMax"  placeholder="总库存库存最大量"></el-input>
				      	</el-form-item>
				    </el-col>
			  	</el-form-item>
			  	<el-form-item label="规格" required>
			  		<el-button type="primary" size="small" icon="plus" @click="add">新增规格</el-button>
			  		<div class="simple-grid">
			      		<el-table
						    :data="tableData"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      	prop="quantity"
						      	label="规格">
						    </el-table-column>
						    <el-table-column
						      	label="操作">
						      	<template scope="scope">
						      		<div class="action-column">
							        	<el-button
							          		type="text"
							          		size="small">
							          		编辑
							        	</el-button>
							        	<el-button
							          		type="text"
							          		size="small"
							          		@click.native.prevent="deleteRow(scope.$index, tableData)">
							          		删除
							        	</el-button>
						        	</div>
						      	</template>
						    </el-table-column>
						</el-table>
			      	</div>
			      	<div class="el-form-item__error">{{quantityText}}</div>
			  	</el-form-item>
			  	<el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				    <el-button @click="resetForm('ruleForm')">取消</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<!-- 弹框 添加规格 -->
		<el-dialog
		  	title="添加规格"
		  	:visible.sync="dialogVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false"
		  	:close-on-click-modal="false">
		  	<v-addQuantity @doAdd="doAdd" @doCancel="doCancel"></v-addQuantity>
		</el-dialog>
	</div>
</template>

<script>
	import addQuantity from '@/components/baseinfo/goods/addQuantity'
  	export default {
	    data() {
	      	return {
	        	ruleForm:{
	        		classify:[],
	        		brand:"",
	        		batchnumber:"",
	        		productname:"",
	        		consignor:"",
	        		supplier:"",
	        		unit:"",
	        		unitMin:"",
	        		unitMax:""
	        	},
	        	rules:{
	        		classify:[
	        			{ required: true,required: true, message: '请添加产品分类'}
	        		],
	        		brand:[
	        			{ required: true, message: '请输入品牌', trigger: 'blur' },
	        			{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change,blur' }
	        		],
	        		batchnumber:[
	        			{ required: true, message: '请输入批号/型号/货号', trigger: 'blur' },
	        			{ min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'change,blur' }
	        		],
	        		productname:[
	        			{ required: true, message: '请输入批号/型号/货号', trigger: 'blur' },
	        			{ min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'change,blur' }
	        		],
	        		consignor:[
	        			{ required: true, message: '请选择货主', trigger: 'change' }
	        		],
	        		supplier:[
	        			{ required: true, message: '请选择供应商', trigger: 'change' }
	        		],
	        		unit:[
	        			{ required: true, message: '请选择单位', trigger: 'change' }
	        		],
	        		unitMin:[
	        			{ required: true, message: '请输入单位库位库存最小量', trigger: 'blur' }
	        		],
	        		unitMax:[
	        			{ required: true, message: '请输入单位库位库存最大量', trigger: 'blur' }
	        		],
	        		inventoryMin:[
	        			{ required: true, message: '请输入总库存库存最小量', trigger: 'blur' }
	        		],
	        		inventoryMax:[
	        			{ required: true, message: '请输入总库存库存最大量', trigger: 'blur' }
	        		]
	        	},
	        	tableData: [],
		        quantityText:"",
		        dialogVisible:false,
		        options: [{
		          value: 'zhinan',
		          label: '指南',
		          children: [{
		            value: 'shejiyuanze',
		            label: '设计原则',
		            children: [{
		              value: 'yizhi',
		              label: '一致'
		            }, {
		              value: 'fankui',
		              label: '反馈'
		            }, {
		              value: 'xiaolv',
		              label: '效率'
		            }, {
		              value: 'kekong',
		              label: '可控'
		            }]
		          }, {
		            value: 'daohang',
		            label: '导航',
		            children: [{
		              value: 'cexiangdaohang',
		              label: '侧向导航'
		            }, {
		              value: 'dingbudaohang',
		              label: '顶部导航'
		            }]
		          }]
		        }, {
		          value: 'zujian',
		          label: '组件',
		          children: [{
		            value: 'basic',
		            label: 'Basic',
		            children: [{
		              value: 'layout',
		              label: 'Layout 布局'
		            }, {
		              value: 'color',
		              label: 'Color 色彩'
		            }, {
		              value: 'typography',
		              label: 'Typography 字体'
		            }, {
		              value: 'icon',
		              label: 'Icon 图标'
		            }, {
		              value: 'button',
		              label: 'Button 按钮'
		            }]
		          }, {
		            value: 'form',
		            label: 'Form',
		            children: [{
		              value: 'radio',
		              label: 'Radio 单选框'
		            }, {
		              value: 'checkbox',
		              label: 'Checkbox 多选框'
		            }, {
		              value: 'input',
		              label: 'Input 输入框'
		            }, {
		              value: 'input-number',
		              label: 'InputNumber 计数器'
		            }, {
		              value: 'select',
		              label: 'Select 选择器'
		            }, {
		              value: 'cascader',
		              label: 'Cascader 级联选择器'
		            }, {
		              value: 'switch',
		              label: 'Switch 开关'
		            }, {
		              value: 'slider',
		              label: 'Slider 滑块'
		            }, {
		              value: 'time-picker',
		              label: 'TimePicker 时间选择器'
		            }, {
		              value: 'date-picker',
		              label: 'DatePicker 日期选择器'
		            }, {
		              value: 'datetime-picker',
		              label: 'DateTimePicker 日期时间选择器'
		            }, {
		              value: 'upload',
		              label: 'Upload 上传'
		            }, {
		              value: 'rate',
		              label: 'Rate 评分'
		            }, {
		              value: 'form',
		              label: 'Form 表单'
		            }]
		          }, {
		            value: 'data',
		            label: 'Data',
		            children: [{
		              value: 'table',
		              label: 'Table 表格'
		            }, {
		              value: 'tag',
		              label: 'Tag 标签'
		            }, {
		              value: 'progress',
		              label: 'Progress 进度条'
		            }, {
		              value: 'tree',
		              label: 'Tree 树形控件'
		            }, {
		              value: 'pagination',
		              label: 'Pagination 分页'
		            }, {
		              value: 'badge',
		              label: 'Badge 标记'
		            }]
		          }, {
		            value: 'notice',
		            label: 'Notice',
		            children: [{
		              value: 'alert',
		              label: 'Alert 警告'
		            }, {
		              value: 'loading',
		              label: 'Loading 加载'
		            }, {
		              value: 'message',
		              label: 'Message 消息提示'
		            }, {
		              value: 'message-box',
		              label: 'MessageBox 弹框'
		            }, {
		              value: 'notification',
		              label: 'Notification 通知'
		            }]
		          }, {
		            value: 'navigation',
		            label: 'Navigation',
		            children: [{
		              value: 'menu',
		              label: 'NavMenu 导航菜单'
		            }, {
		              value: 'tabs',
		              label: 'Tabs 标签页'
		            }, {
		              value: 'breadcrumb',
		              label: 'Breadcrumb 面包屑'
		            }, {
		              value: 'dropdown',
		              label: 'Dropdown 下拉菜单'
		            }, {
		              value: 'steps',
		              label: 'Steps 步骤条'
		            }]
		          }, {
		            value: 'others',
		            label: 'Others',
		            children: [{
		              value: 'dialog',
		              label: 'Dialog 对话框'
		            }, {
		              value: 'tooltip',
		              label: 'Tooltip 文字提示'
		            }, {
		              value: 'popover',
		              label: 'Popover 弹出框'
		            }, {
		              value: 'card',
		              label: 'Card 卡片'
		            }, {
		              value: 'carousel',
		              label: 'Carousel 走马灯'
		            }, {
		              value: 'collapse',
		              label: 'Collapse 折叠面板'
		            }]
		          }]
		        }, {
		          value: 'ziyuan',
		          label: '资源',
		          children: [{
		            value: 'axure',
		            label: 'Axure Components'
		          }, {
		            value: 'sketch',
		            label: 'Sketch Templates'
		          }, {
		            value: 'jiaohu',
		            label: '组件交互文档'
		          }]
		        }]
	      	};
	    },
	    components:{
	    	"v-addQuantity":addQuantity
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
		          	if (valid&&this.tableData.length>0) {
		          		if (this.tableData.length>0) {
			          		this.quantityText=""
			            	alert('submit!');
		            	}else{
		            		this.quantityText="请添加规格"
		            	}
		          	} else {
		          		if (this.tableData.length>0) {
			          		this.quantityText=""
		            	}else{
		            		this.quantityText="请添加规格"
		            	}
			            console.log('error submit!!');
			            return false;
		          	}
		        });
	      	},
	      	resetForm(formName) {
	        	this.$refs[formName].resetFields();
	        	this.quantityText="";
	        	this.tableData = [];
	      	},
	      	add:function(){
	      		this.dialogVisible = true;
	      	},
	      	deleteRow:function(index, rows) {
	      		rows.splice(index, 1);
	      		if (this.tableData.length==0) {
	      			this.quantityText="请添加规格"
	      		}
      		},
      		doAdd:function(tags){
      			for (var i = 0; i < tags.length; i++) {
      				this.tableData.push(tags[i]);
      			}
      			this.quantityText="";
      			this.dialogVisible = false;
      		},
      		doCancel:function(){
      			this.dialogVisible = false;
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
	.simple-grid{
		height: auto;
		overflow: hidden;
	}
	.el-dialog--dl-small{
		width: 400px;	
	}
	.el-cascader{
		display: block;
	}
</style>