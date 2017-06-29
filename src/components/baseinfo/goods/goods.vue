<template>
	<div class="grid-container">
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="产品分类">
			    	<el-select v-model="formInline.type" placeholder="产品分类">
				      	<el-option label="区域一" value="shanghai"></el-option>
				      	<el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			  	</el-form-item>
			  	<el-form-item label="批号/型号/货号">
			    	<el-input v-model="formInline.no" placeholder="批号/型号/货号"></el-input>
			  	</el-form-item>
			  	<el-form-item label="名称">
			  		<el-input v-model="formInline.name" placeholder="名称"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="doSeach">查询</el-button>
			    	<el-button @click="doClear">清空</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="add">新增产品</button>
			<button class="tool-btn btn-refresh">同步数据</button>
			<button class="tool-btn btn-export">导出表格</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="productNo"
			      	label="产品编号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="classify"
			      	label="产品分类"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop="brand"
			      	label="品牌"
			      	width="150">
			    </el-table-column>
			    <el-table-column
					prop="batchnumber"
					label="批号/型号/货号"
					width="150"
			    ></el-table-column>
			    <el-table-column
					prop="productname"
					label="产品名称"
					width="250">
				</el-table-column>
				<el-table-column
					prop="consignor"
					label="货主"
					width="150">
				</el-table-column>
				<el-table-column
					prop="supplier"
					label="供应商"
					width="150">
				</el-table-column>
				<el-table-column
					prop="unit"
					label="单位"
					width="100">
				</el-table-column>
				<el-table-column
					prop="quantity"
					label="规格数量"
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
			      	label="创建日期"
			      	width="200">
			      	<template scope="scope">
			      		<span class="color-gred">{{scope.row.updatedate}}</span>
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
	</div>
</template>

<script>
	export default {
	  	name: 'goods',
	  	data:function(){
	  		return {
	  			formInline: {
	  				type:'',
		          	no: '',
		          	name: ''
		        },
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10
	  		}
	  	},
	  	mounted :function(){
		    this.loadData()
		},
	  	methods: {
	  		loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				productNo:"SP-9078002",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078003",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078004",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078005",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078006",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078007",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078008",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-9078009",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-90780010",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-90780011",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-90780012",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			},{
	  				productNo:"SP-90780013",
	  				classify:"电子配件",
	  				brand:"中华书局",
	  				batchnumber:"2017-sanguo",
	  				productname:"三国演义线装本 4册 收藏版",
	  				consignor:"汲古阁书斋",
	  				supplier:"中华书局",
	  				unit:"套",
	  				quantity:"50",
	  				createdate:"2017-05-26 14：21：23",
	  				updatedate:"2017-05-26 14：21：23",
	  				desc:"该客户租期一年，占用库区为二楼东南。客户行业为电子产品，在京东天猫开店。"
	  			}]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	doSeach:function(){
	      		this.currentPage = 1;
	        	console.log('doSeach!');
	        	this.loadData();
	      	},
	      	doClear:function(){
	      		this.formInline ={
	  				type:'',
		          	no: '',
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
		    	this.$router.push({ path: '/baseinfo/goods_manage/add' });
		    },
		    edite:function(row){
		    	this.$router.push({ path: '/baseinfo/goods_manage/edite/'+row.productNo });
		    },
		    showDetail:function(row){
		    	this.$router.push({ path: '/baseinfo/goods_manage/detail/'+row.productNo });
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