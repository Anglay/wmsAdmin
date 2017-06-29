<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="分类名称">
			    	<el-input v-model="formInline.name" placeholder="分类名称"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="doSeach">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">新增一级分类</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="name"
			      	label="分类名称"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="desc"
			      	label="描述"
			      	width="400">
			    </el-table-column>
			    <el-table-column
			      	prop="type"
			      	label="类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="sortNo"
			      	label="排序"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	label="创建日期"
			      	width="200">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createdate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	prop="create_person"
			      	label="创建人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	label="最后修改时间"
			      	width="200">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.edite_date}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	prop="edite_person"
			      	label="最后修改人"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	fixed="right"
			      	label="操作"
			      	width="200"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				      		<el-button
				          		type="text"
				          		size="small" 
				          		@click.native.prevent="showDetail(scope.row)">
				          		查看二级分类
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="edite(scope.row)">
				          		编辑
				        	</el-button>
				        	<el-button
				         		@click.native.prevent="deleteRow(scope.$index, tableData)"
				          		type="text"
				          		size="small">
				          		删除
				        	</el-button>
			        	</div>
			      	</template>
			    </el-table-column>
			</el-table>
		</div>
		<div class="grid-page">
			<el-pagination
	          	@size-change="handleSizeChange"
	          	@current-change="handleCurrentChange"
	          	:current-page.sync="currentPage"
	          	:page-sizes="[10, 20, 50, 100]"
	          	:page-size="pageSize"
	          	layout="total,->, prev, pager, next, jumper, sizes"
	          	:total="tableData.length">
	        </el-pagination>
		</div>

		<!-- 弹框 -->
		<el-dialog
		  	:title="dialogTitle"
		  	:visible.sync="dialogVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-EditeDialog :params="params" @doSend="doSend" @doClose="doClose"></v-EditeDialog>
		</el-dialog>
	</div>
</template>

<script>
	import EditeDialog from '@/components/baseinfo/goods/goodsClassifyEdite'

	export default {
	  	name: 'goodsClassify',
	  	data:function(){
	  		return {
	  			formInline: {
		          	name: ''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10,
		        dialogTitle:'',
		        dialogVisible:false,
		        params:{
		        	type:"add",
		        	data:{
		        		typeName: '',
			          	desc: '',
			          	sortNo: ''
		        	}
		        }
	  		}
	  	},
	  	mounted :function(){
		    this.loadData()
		},
		components:{
			"v-EditeDialog":EditeDialog
		},
	  	methods: {
	  		loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				id:1,
	  				name:"手机",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:1,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:2,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:2,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:3,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:3,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:4,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:4,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:5,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:5,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:6,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:6,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:7,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:7,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			},{
	  				id:8,
	  				name:"水果",
	  				desc:"该客户租期一年，占用库区为二楼东南。",
	  				type:"一级分类",
	  				sortNo:8,
	  				createdate:"2017-05-26 14：21：23",
	  				create_person:"陈凯",
	  				edite_date:"2017-05-26 14：21：23",
	  				edite_person:"陈凯"
	  			}]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 800);
	  		},
	      	doSeach:function(){
	      		this.currentPage = 1;
	        	console.log('submit!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline ={
		          	name: ''
		        }
	      	},
	      	deleteRow:function(index, rows) {
	      		this.$confirm('确定删除该该条记录吗?', '提示', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning'
		        }).then(() => {
		        	rows.splice(index, 1);
		          	this.$message({
			            type: 'success',
			            message: '删除成功!'
		          	});
		        }).catch(() => {
		          	this.$message({
			            type: 'info',
			            message: '已取消删除'
		          	});          
		        });
      		},
      		handleSizeChange:function(val) {
      			this.pageSize = val;
		      	console.log(`每页 ${val} 条`);
		      	this.loadData();
		    },
		    handleCurrentChange:function(val) {
		    	this.currentPage = val;
		    	this.loadData();
		      	console.log(`当前页: ${val}`);
		    },
		    add:function(){
		    	this.dialogTitle = "新增分类";
		    	this.params = {
		        	type:"add",
		        	data:{
		        		typeName: '',
			          	desc: '',
			          	sortNo: ''
		        	}
		        };
		    	this.dialogVisible = true;
		    },
		    edite:function(row){
		    	this.dialogTitle = "编辑分类";
		    	this.params = {
		        	type:"edite",
		        	data:{
		        		typeName: row.name,
			          	desc: row.desc,
			          	sortNo: row.sortNo
		        	}
		        };
		    	this.dialogVisible = true;
		    },
		    showDetail:function(detail){
		    	this.$router.push({ path: '/baseinfo/goods_classify_manage/sub1/'+detail.id });
		    },
		    doSend:function(params){
		    	this.dialogVisible = false;
		    	console.log(params.desc)
		    	console.log(params.sortNo)
		    	console.log(params.typeName)
		    },
		    doClose:function(){
		    	this.dialogVisible = false;
		    }
	    }
	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
	.el-dialog--dl-small{
		width: 400px;	
	}
</style>