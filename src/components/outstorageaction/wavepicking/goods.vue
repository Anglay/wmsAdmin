<template>
	<div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      	prop=""
		      	label="商品条码">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="产品分类">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="品牌">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="批号/型号/货号">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="产品名称">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="规格">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="单位">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="所处库区">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="所处库位">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="数量">
		    </el-table-column>
		</el-table>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
		    return {
		        tableData: [{},{},{},{},{}]
		    }
		},
		props:["waveId"],
		mounted:function(){
			console.log(this.waveId)
	    	this.$emit("changeActiveName",'goods');
	    }
	}
</script>