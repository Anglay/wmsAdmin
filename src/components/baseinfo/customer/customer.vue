<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="客户类型">
			    	<el-select v-model="formInline.type" placeholder="客户类型">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="名称">
			    	<el-input v-model="formInline.name" placeholder="名称"></el-input>
			  	</el-form-item>
			  	<el-form-item label="状态">
				    <el-select v-model="formInline.state" placeholder="状态">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="doSeach">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">新增客户</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="customerNo"
			      	label="客户编号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="type"
			      	label="客户类型"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop="name"
			      	label="名称"
			      	width="250">
			    </el-table-column>
			    <el-table-column
			      	prop="contacts"
			      	label="联系人"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop="tel"
			      	label="联系电话"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="address"
			      	label="联系地址"
			      	width="400">
			    </el-table-column>
			    <el-table-column
			      	label="创建日期"
			      	width="200">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.createdate}}</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					prop="state"
					label="状态"
					width="150">
					<template scope="scope">
			      		<span v-if="scope.row.state==2">已启用</span>
			      		<span class="color-gred" v-else-if="scope.row.state==1">已停用</span>
			      		<span v-else>草稿</span>
			      	</template>
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

		<!-- 详情弹框 -->
		<el-dialog
		  	title="客户详情"
		  	:visible.sync="dialogVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<customer-detail :detail="detail"></customer-detail>
		</el-dialog>
	</div>
</template>

<script>
	//客户详情
	import CustomerDetail from '@/components/baseinfo/customer/customerDetail'
	export default {
	  	name: 'grid1',
	  	data:function(){
	  		return {
	  			formInline: {
	  				type:'',
		          	name: '',
		          	state: ''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10,
		        dialogVisible: false,
		        detail:{}
	  		}
	  	},
	  	mounted :function(){
		    this.loadData()
		},
		components:{
			"customer-detail":CustomerDetail
		},
	  	methods: {
	  		loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				customerNo:"SKG-9078002",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:0,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078003",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:1,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078004",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:2,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078005",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:0,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078006",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:1,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078007",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:2,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078008",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:0,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-9078009",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:1,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-90780010",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:2,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-90780011",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:0,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-90780012",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:1,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				customerNo:"SKG-90780013",
	  				type:"货主",
	  				name:"浙江大汉电子销售有限公司",
	  				contacts:"陈凯",
	  				tel:"17682303670",
	  				email:"chenkai@honsend.com",
	  				fax:"0571-5689452",
	  				address:"浙江省 杭州市 下城区中山北路631号晶晖商务大厦1102",
	  				createdate:"2017-05-26 14：21：23",
	  				state:2,
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			}]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 2000);
	  		},
	      	doSeach:function(){
	      		this.currentPage = 1;
	        	console.log('submit!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline ={
	  				type:'',
		          	name: '',
		          	state: ''
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
		    	this.$router.push({ path: '/baseinfo/customer_manage/add' });
		    },
		    edite:function(row){
		    	this.$router.push({ path: '/baseinfo/customer_manage/edite/'+row.customerNo });
		    },
		    showDetail:function(detail){
		    	this.detail = detail;
		    	this.dialogVisible = true;
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
		width: 600px;	
	}
</style>