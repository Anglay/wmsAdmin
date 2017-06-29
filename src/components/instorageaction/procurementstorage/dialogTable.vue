<template>
	<div>
		<el-table 
			:data="gridData"
			ref="multipleTable"
			height="300"
			@selection-change="handleSelectionChange">
			<el-table-column
		      	type="selection"
		      	width="55">
		    	</el-table-column>
		    <el-table-column 
		    	prop="goodsBarCode" 
		    	label="商品条码" 
		    	width="150">
		    	</el-table-column>
		    <el-table-column 
		    	prop="supplier" 
		    	label="供应商" 
		    	width="250">
		    	</el-table-column>
		    <el-table-column 
		    	prop="productNo"
		    	label="产品编号"
		    	width="150">
		    	</el-table-column>
		    <el-table-column 
		    	prop="classify"
		    	label="产品分类"
		    	width="150">
		    	</el-table-column>
		    <el-table-column 
		    	prop="brand"
		    	label="品牌"
		    	width="200">
		    	</el-table-column>
		    <el-table-column 
		    	prop="batchNo"
		    	label="批号/型号/货号"
		    	width="150">
		    	</el-table-column>
		    <el-table-column 
		    	prop="productName"
		    	label="产品名称"
		    	width="150">
		    	</el-table-column>
		    <el-table-column 
		    	prop="specification"
		    	label="规格"
		    	width="100">
		    	</el-table-column>
		    <el-table-column 
		    	prop="unit"
		    	label="单位"
		    	width="100">
		    	</el-table-column>
		</el-table>
		<div class="footer-bar">
			<el-button type="primary" @click="doSure">确定</el-button>
			<el-button @click="doCancel">取消</el-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function(){
			return {
				gridData: [],
				multipleSelection: []
			}
		},
		props:["params","dialogTableVisible"],
		watch:{
			"dialogTableVisible":function(val,oldval){
				if (val) {
					this.loadData();
				}else{
					this.gridData = [];
				}
			}
		},
		mounted :function(){
			this.loadData();
		},
		methods:{
			loadData:function(){
				console.log(this.params)
				this.gridData = [{
					id:"1",
					goodsBarCode:"SP20179841",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"2",
					goodsBarCode:"SP20179842",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"3",
					goodsBarCode:"SP20179843",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"4",
					goodsBarCode:"SP20179844",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"5",
					goodsBarCode:"SP20179845",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"6",
					goodsBarCode:"SP20179846",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"7",
					goodsBarCode:"SP20179847",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"8",
					goodsBarCode:"SP20179848",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"9",
					goodsBarCode:"SP20179849",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				},{
					id:"10",
					goodsBarCode:"SP20179840",
					supplier:"中华书局",
					productNo:"SP-9078002",
					classify:"电子配件",
					brand:"中华书局",
					batchNo:"2017-sanguo",
					productName:"三国演义线装本 4册 收藏版",
					specification:"sdsa",
					unit:"2"
				}]
			},
			handleSelectionChange:function(val) {
		        this.multipleSelection = val;
		    },
			doSure:function(){
				if (this.multipleSelection.length>0) {
					this.$emit("sureDialog",this.multipleSelection)
				}else{
					this.$message({
			          message: '请选择商品',
			          type: 'warning'
			        });
				}
				
			},
			doCancel:function(){
				this.$emit("cancelDialog")
			}
		}
	}
</script>
<style lang="less" scoped>
	.footer-bar{
		height: auto;
		overflow: hidden;
		padding: 15px 0 0;
		text-align: center;
	}
</style>