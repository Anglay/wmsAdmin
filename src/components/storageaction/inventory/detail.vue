<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/storage_action/inventory' }">盘点</el-breadcrumb-item>
			  	<el-breadcrumb-item>盘点详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="盘点详情" name="detail">
			    	<el-row>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>盘点单号</span>
					  			<div>543213216546</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>盘点类型</span>
					  			<div>按货主盘点</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>盘点范围</span>
					  			<div>浙江仓海联储</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>盘点规则</span>
					  			<div>明盘</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>创建时间</span>
					  			<div>2017-06-20 16：34：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>创建人</span>
					  			<div>陈凯</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>完成初盘时间</span>
					  			<div>2017-06-20 16：34：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>初盘人</span>
					  			<div>陈凯</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>完成复盘时间</span>
					  			<div>2017-06-20 16：34：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>复盘人</span>
					  			<div>陈凯</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>审核时间</span>
					  			<div>2017-06-20 16：34：56</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>审核人</span>
					  			<div>陈凯</div>
					  		</div>
					  	</el-col>
					  	<el-col :span="10">
					  		<div class="detail-item">
					  			<span>状态</span>
					  			<div>待审核</div>
					  		</div>
					  	</el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
		</div>
		<div class="detail-content">
			<div class="btn-box"><el-button type="primary" @click="reviewed">一键审核</el-button></div>
			<el-tabs activeName="table">
			    <el-tab-pane label="商品信息" name="table">
			    	<div class="statistic-content">
						<p>
							统计：
							<span>sku数量：N</span>
							<span>退货总数量：M</span>
						</p>
					</div>
			    	<el-table
					    :data="tableData"
					    v-loading.body="loading"
					    stripe
					    style="width: 100%">
					    <el-table-column
					      	prop=""
					      	label="库区"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库区类型"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="货主"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="供应商"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="产品分类"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					    	prop=""
					      	label="品牌"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="批号/型号/货号"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="产品名称"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="规格"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="单位"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="库存量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="初盘数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	prop=""
					      	label="复盘数量"
					      	width="150">
					    </el-table-column>
					    <el-table-column
					      	label="操作"
					      	width="100">
					      	<template scope="scope">
				      			<el-button
					          		type="text"
					          		size="small"
					          		@click.native.prevent="reviewed(scope.row)">
					          		审核
					        	</el-button>
					      	</template>
					    </el-table-column>
					</el-table>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
	  	data() {
	      	return {
		        loading:true,
		        tableData: []
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
	  				goodsId:'1',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'2',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'3',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'4',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'5',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'6',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'7',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'8',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'9',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        },{
	  				goodsId:'10',
		        	goodsBarCode:'SP2017984',
		        	supplier:'杭州化工集团有限公司',
		        	classify:'手机',
		        	brand:'华为',
		        	batchNo:'白色',
		        	productName:'荣耀',
		        	specification:'40*70',
		        	unit:'部',
		        	boxOrBag:'箱',
		        	singleNum:'60',
		        	purchaseNum:'90',
		        	spareNum:'100',
		        	handoverNum:'80'
		        }]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	  		reviewed:function(row){
		       var h = this.$createElement;
		       	this.$msgbox({
		          	title: '盘点结果审核',
		          	message: h('div', {style:'text-align:center'}, [
			            h('p', null, '请仔细检查盘点结果详情，然后再予以审核！'),
			            h('p', null, '一旦审核通过，盘点结果将记录进系统库存！')
		          	]),
		          	showCancelButton: true,
		          	confirmButtonText: '通过审核',
		          	cancelButtonText: '拒绝',
		          	beforeClose: (action, instance, done) => {
			            if (action === 'confirm') {
			              	instance.confirmButtonLoading = true;
			              	instance.confirmButtonText = '执行通过...';
			              	setTimeout(() => {
				                done();
				                	setTimeout(() => {
				                  		instance.confirmButtonLoading = false;
				                	}, 300);
			              	}, 3000);
			            } else {
			              	instance.cancelButtonLoading = true;
			              	instance.cancelButtonText = '执行拒绝...';
			              	setTimeout(() => {
				                done();
				                	setTimeout(() => {
				                  		instance.cancelButtonLoading = false;
				                	}, 300);
			              	}, 3000);
			            }
		          	}
		        }).then(action => {
		        	var info = "";
		        	if (action === 'confirm') {
		        		info = "通过审核执行成功"
		        	}else{
		        		info = "拒绝执行成功"
		        	}
		          	this.$message({
			            type: 'info',
			            message: info
		          	});
		        })
      		}
	    }
  	}
</script>
<style lang="less">
	.grid-container{
		height: auto;
		overflow: hidden;
		.detail-content{
			position: relative;
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
					margin-left: 110px;
					color: #999;
				}
			}
			.btn-box{
				position: absolute;
				top: 25px;
				right: 15px;
				z-index: 10;
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