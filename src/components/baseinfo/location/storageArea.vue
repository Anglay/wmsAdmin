<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="库区编号">
			    	<el-input v-model="formInline.areaId" placeholder="库区编号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="库区名称">
			    	<el-input v-model="formInline.areaName" placeholder="库区名称"></el-input>
			  	</el-form-item>
			  	<el-form-item label="库区类型">
				    <el-select v-model="formInline.areaType" placeholder="库区类型">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="状态">
				    <el-select v-model="formInline.state" placeholder="状态">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="onSearch">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">新增库区</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="areaNo"
			      	label="库区编号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="areaName"
			      	label="库区名称"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="areaType"
			      	label="库区类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="locationCount"
			      	label="库位个数"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	label="创建时间"
			      	width="250">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createdate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					prop="state"
					label="状态"
					width="150">
					<template scope="scope">
			      		<span class="color-gred" v-if="scope.row.state==0">已停用</span>
			      		<span v-else-if="scope.row.state==1">已启用</span>
			      		<span v-else>草稿</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	label="操作"
			      	class-name="action-column">
			      	<template scope="scope">
			      		<div class="action-column">
				      		<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="goLocationRow(scope.row)">
				          		库位管理
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="detailRow(scope.row)">
				          		详情
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small">
				          		启用
				        	</el-button>
				        	<el-button
				          		type="text"
				          		size="small"
				          		@click.native.prevent="editeRow(scope.row)">
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

		<!-- 详情弹框 -->
		<el-dialog
		  	title="库区详情"
		  	:visible.sync="dialogVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-AreaDetail :detail="detail"></v-AreaDetail>
		</el-dialog>
	</div>
</template>

<script>
	import AreaDetail from '@/components/baseinfo/location/areaDetail'
	export default {
	  	name: 'area',
	  	data:function(){
	  		return {
	  			formInline: {
		          	areaId: '',
		          	areaName: '',
		          	areaType:'',
		          	state:''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10,
		        dialogVisible:false,
		        detail:{}
	  		}
	  	},
	  	components:{
	  		"v-AreaDetail":AreaDetail
	  	},
	  	mounted :function(){
		    this.loadData()
		},
	  	methods: {
	  		loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
		        	areaId:'1',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '0',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'2',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '1',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'3',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '2',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'4',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '0',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'5',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '1',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'6',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '2',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'7',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '0',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'8',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '1',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'9',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '2',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'10',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '0',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'11',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '1',
		          	desc:'1区放置整件未拆零货品'
		        }, {
		        	areaId:'12',
		        	areaNo:'A12',
		        	areaName:'仓储1区',
		        	areaType:'仓储区',
		        	createdate:'2017-5-25 10：05：23',
		        	locationCount:60,
		          	state: '2',
		          	desc:'1区放置整件未拆零货品'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSearch:function() {
	      		this.currentPage = 1;
	        	console.log('onSearch!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline ={
	  				areaId: '',
		          	areaName: '',
		          	areaType:'',
		          	state:''
		        }
	      	},
	      	deleteRow(index, rows) {
        		rows.splice(index, 1);
      		},
      		handleSizeChange(val) {
      			this.pageSize = val;
		      	console.log(`每页 ${val} 条`);
		      	this.loadData();
		    },
		    handleCurrentChange(val) {
		    	this.currentPage = val;
		    	this.loadData();
		      	console.log(`当前页: ${val}`);
		    },
		    add:function(){
		    	this.$router.push({ path: '/baseinfo/location_manage/addArea' });
		    },
		    editeRow:function(rows){
		    	this.$router.push({ path: '/baseinfo/location_manage/editeArea/'+rows.areaId });
		    },
		    detailRow:function(rows){
		    	this.detail = rows;
		    	this.dialogVisible = true;
		    },
		    goLocationRow:function(rows){
		    	this.$router.push({path:'/baseinfo/location_manage/location/'+rows.areaId+'/'+rows.areaNo+'/'+rows.areaName+'/'+rows.areaType});
		    },
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
		width: 600px;	
	}
</style>