<template>
	<div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      	prop="date"
		      	label="出库单号"
		      	width="180">
		    </el-table-column>
		    <el-table-column
		      	prop="name"
		      	label="客户单号"
		      	width="180">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="货主">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="sku数量">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="商品数量">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="状态">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="创建时间">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="完成拣货时间">
		    </el-table-column>
		    <el-table-column
		      	prop=""
		      	label="出库时间">
		    </el-table-column>
		</el-table>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
		    return {
		        tableData: [{
		          	date: '2016-05-02',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          	date: '2016-05-04',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          	date: '2016-05-01',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          	date: '2016-05-03',
		          	name: '王小虎',
		          	address: '上海市普陀区金沙江路 1516 弄'
		        }]
		    }
	    },
		props:["waveId"],
		mounted:function(){
			console.log(this.waveId)
	    	this.$emit("changeActiveName",'order');
	    }
	}
</script>