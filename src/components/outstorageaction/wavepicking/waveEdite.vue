<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/outstorage_action/wave_picking' }">波次拣货</el-breadcrumb-item>
			  	<el-breadcrumb-item>编辑波次</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="detail-content">
			<el-tabs activeName="detail">
			    <el-tab-pane label="编辑波次" name="detail">
			    	<div class="pane-table">
			    		<h2 class="pane-table-title">当前未分配波次订单共N笔</h2>
			    		<div class="pane-table-content">
			    			<el-table
							    :data="tableData"
							    ref="multipleTable"
							    border
							    height="250"
							    style="width: 100%"
							    @selection-change="handleSelectionChange">
							    <el-table-column
							      	type="selection"
							      	width="55">
							    </el-table-column>
							    <el-table-column
							      	prop="id"
							      	label="出库单号">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="客户单号">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="货主">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="创建时间">
							    </el-table-column>
							</el-table>
			    		</div>
			    	</div>
			    	<div class="pane-table" v-if="tableData2.length>0">
			    		<h2 class="pane-table-title">已选择订单共N笔</h2>
			    		<div class="pane-table-content">
			    			<el-table
							    :data="tableData2"
							    border
							    height="250"
							    style="width: 100%">
							    <el-table-column
							      	prop="id"
							      	label="出库单号">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="客户单号">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="货主">
							    </el-table-column>
							    <el-table-column
							      	prop=""
							      	label="创建时间">
							    </el-table-column>
							    <el-table-column
							      	label="操作">
							      	<template scope="scope">
								        <el-button
								          	@click.native.prevent="deleteRow(scope.$index,scope.row,tableData2)"
								          	type="text"
								          	size="small">
								          	移除
								        </el-button>
								    </template>
							    </el-table-column>
							</el-table>
			    		</div>
			    		<div class="footer-bar">
			    			<el-button type="primary" @click="doEdite">编辑波次</el-button>
			    			<el-button @click="doClear">取消</el-button>
			    		</div>
			    	</div>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	Array.prototype.unique = function(){
	 	var res = [this[0]];
		for(var i = 1; i < this.length; i++){
		  	var repeat = false;
		  	for(var j = 0; j < res.length; j++){
		   		if(this[i] == res[j]){
		    		repeat = true;
		    		break;
		   		}
		  	}
		  	if(!repeat){
		   		res.push(this[i]);
		  	}
		}
		return res;
	}
	export default {
	  	data() {
	      	return {
		        tableData:[{
		        	id:1
		        },{
		        	id:2
		        },{
		        	id:3
		        },{
		        	id:4
		        },{
		        	id:5
		        },{
		        	id:6
		        },{
		        	id:7
		        },{
		        	id:8
		        },{
		        	id:9
		        },{
		        	id:10
		        }],
		        multipleSelection:[],
		        tableData2: [{
		        	id:12
		        },{
		        	id:13
		        },{
		        	id:14
		        }]
	        }
	    },
	    mounted :function(){
	    	console.log(this.$route.params)
		},
	    methods: {
	    	handleSelectionChange(val) {
	    		if (this.tableData2.length>0) {
	    			this.multipleSelection = val;
	    			this.tableData2 = this.tableData2.concat(val);
	    			this.tableData2 = this.tableData2.unique();
    			}else{
    				this.tableData2 = val;
    			}
		    },
	    	deleteRow:function(index,row, rows){
	    		rows.splice(index, 1);
    			var flag=false;
    			for (var i = 0; i < this.tableData.length; i++) {
    				if(this.tableData[i].id==row.id){
    					flag=true;
    				}
    			}
    			if(!flag){
    				this.tableData.push(row);
    			}
    			this.$refs.multipleTable.toggleRowSelection(row,false);
    			
	    	},
	    	doEdite:function(){
	    		console.log(this.tableData2)
	    	},
	    	doClear:function(){
	    		// this.$refs.multipleTable.clearSelection();
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
			padding: 22px 15px 0;
			background: #fff;
			
		}
		.footer-bar{
			height: auto;
			overflow: hidden;
			padding: 1px 0 25px;
			text-align: center;
		}
	}
	.pane-table{
		height: auto;
		overflow: hidden;
		.pane-table-title{
			font-size: 14px;
			font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		}
		.pane-table-content{
			padding: 10px 0 25px;
			.el-table__body-wrapper{
				overflow-x: hidden;
			}
		}
	}
</style>