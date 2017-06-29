<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/datachart/goods_stock' }">商品库存</el-breadcrumb-item>
			  	<el-breadcrumb-item>库存流水</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="first">
			    <el-tab-pane label="库存流水详情" name="first">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>商品条码</span>
					  			<div>SP2017984</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>货主</span>
					  			<div>深圳华强北有限公司</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>供应商</span>
					  			<div>郑州富士康</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>产品分类</span>
					  			<div>iPhone贴膜</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>品牌</span>
					  			<div>光强</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>批号/型号/货号</span>
					  			<div>A201703</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>产品名称</span>
					  			<div>光强防窥视黑光钢化膜 A201703</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>单位</span>
					  			<div>件</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>规格</span>
					  			<div>亮黑32G</div>
					  		</div>
					  	</el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="时间">
			  		<el-date-picker
				      	v-model="startDate"
				      	type="daterange"
				      	format="yyyy-MM-dd"
				      	placeholder="选择日期范围"
				      	@change="dateChange">
				    </el-date-picker>
			  	</el-form-item>
			  	<el-form-item label="业务类型">
				    <el-select v-model="formInline.type" placeholder="状态">
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
			<button class="tool-btn btn-export">导出</button>
		</div>
		<div class="grid-content">
			<el-table
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	prop="creatDate"
			      	label="时间"
			      	width="200">
			    </el-table-column>
			    <el-table-column
			      	prop="type"
			      	label="业务类型"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="initAmount"
			      	label="期初数量"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop="amount"
			      	label="数量"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	label="+/-"
			      	width="100">
			      	<template scope="scope">
			      		<span v-if="scope.row.state==1">+</span>
				      	<span class="color-gred" v-else>-</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	prop="lastAmount"
			      	label="期末数量"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="listNo"
			      	label="业务单号"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="aboutListNo"
			      	label="关联业务单号">
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
	  	data() {
	      	return {
	        	formInline: {
		          	startDate: '',
		          	endDate:'',
		          	type:''
		        },
		        startDate:'',
		        loading:true,
		        tableData: [],
		        currentPage: 1,
		        pageSize:10
	        }
	    },
	    mounted :function(){
	    	console.log(this.$route.params)
		    this.loadData()
		},
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'采购入库',
	  				initAmount:900,
	  				amount:100,
	  				state:'1',
	  				lastAmount:900,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'销售退货入库',
	  				initAmount:600,
	  				amount:50,
	  				state:'1',
	  				lastAmount:650,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'销售退货入库',
	  				initAmount:400,
	  				amount:50,
	  				state:'1',
	  				lastAmount:450,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'自主入库',
	  				initAmount:1000,
	  				amount:2000,
	  				state:'1',
	  				lastAmount:3000,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'销售出库',
	  				initAmount:1000,
	  				amount:100,
	  				state:'0',
	  				lastAmount:900,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'采购退货出库',
	  				initAmount:2000,
	  				amount:200,
	  				state:'0',
	  				lastAmount:1800,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'销售换货出库',
	  				initAmount:1000,
	  				amount:200,
	  				state:'0',
	  				lastAmount:800,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'盘点',
	  				initAmount:1000,
	  				amount:300,
	  				state:'0',
	  				lastAmount:700,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			},{
	  				creatDate:'2017-5-25 10：05：23',
	  				type:'库存调整',
	  				initAmount:1000,
	  				amount:300,
	  				state:'1',
	  				lastAmount:1300,
	  				listNo:'NO.12345698565',
	  				aboutListNo:'No.96566365'

	  			}]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSearch:function() {
	      		console.log(this.formInline.startDate);
	      		console.log(this.formInline.endDate);
	        	console.log('onSearch!');
	      	},
	      	doClear:function(){
	      		this.formInline ={
	  				startDate: '',
	  				endDate:'',
		          	type:''
		        };
		        this.startDate = '';
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
	      	dateChange:function(val){
	      		var arr = val.split(" - ");
	      		this.formInline.startDate = arr[0];
	      		this.formInline.endDate = arr[1];
	      	}
	    }
  	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			height: auto;
			overflow: hidden;
			padding: 22px 15px;
			background: #fff;
			.detail-item{
				height: auto;
				overflow: hidden;
				line-height: 30px;
				font-size: 14px;
				padding-left: 30px;
				>span{
					display: inline-block;
					width: 110px;
					float: left;
					color: #333
				}
				>div{
					margin-left: 120px;
					color: #999;
				}
			}
		}
		.action-column{
			text-align: right;
		}
		.color-gred{
			color: #999;
		}
	}
</style>