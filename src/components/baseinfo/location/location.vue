<template>
	<div class="grid-container">
		<div class="page-bread">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/baseinfo/location_manage' }">库区库位</el-breadcrumb-item>
			  	<el-breadcrumb-item>库位管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="search-form">
			<el-form :inline="true" :model="formInline">
			  	<el-form-item label="库位编号">
			    	<el-input v-model="formInline.locationId" placeholder="库位编号"></el-input>
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
			<button class="tool-btn btn-add" @click="add">新增库位</button>
			<button class="tool-btn btn-export">一键打印库位条码</button>
		</div>
		<div class="grid-content">
			<el-table
				ref="multipleTable"
			    :data="tableData"
			    v-loading.body="loading"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      	type="selection"
			      	width="50">
			    </el-table-column>
			    <el-table-column
			      	prop="locationNo"
			      	label="库位编码"
			      	width="150">
			    </el-table-column>
			    <el-table-column
			      	prop="locationColumn"
			      	label="所在排"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	prop="locationRow"
			      	label="所在层"
			      	width="100">
			    </el-table-column>
			    <el-table-column
			      	label="是否启用"
			      	width="100">
			      	<template scope="scope">
			      		<span class="color-gred" v-if="scope.row.isOK==1">是</span>
				      	<span v-else>否</span>
			      	</template>
			    </el-table-column>
			    <el-table-column
					label="打印数量"
					width="100">
					<template scope="scope">
						<el-input v-model="scope.row.printCount" size="mini" placeholder="打印数量"></el-input>
					</template>
			    </el-table-column>
			    <el-table-column
					prop="createDate"
					label="创建时间"
					width="200">
			    </el-table-column>
			    <el-table-column
					prop="state"
					label="状态"
					width="100">
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
				          		@click.native.prevent="printRow(scope.row)">
				          		打印库位条码  
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
		<!-- 详情弹框 -->
		<el-dialog
		  	title="库位详情"
		  	:visible.sync="dialogVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-LocationDetail :detail="detail"></v-LocationDetail>
		</el-dialog>

		<!-- 弹框 -->
		<el-dialog
		  	title="新增库位"
		  	:visible.sync="dialogEditeVisible"
		  	size="dl-small"
		  	:modal-append-to-body="false"
		  	:close-on-press-escape="false">
		  	<v-LocationEdite @doSend="doSend" @doClose="doClose" :flag="dialogEditeVisible"></v-LocationEdite>
		</el-dialog>
	</div>
</template>

<script>
	import LocationDetail from '@/components/baseinfo/location/locationDetail'
	import LocationEdite from '@/components/baseinfo/location/locationEdite'
	export default {
	  	data() {
	      	return {
	        	formInline: {
		          	locationId: '',
		          	state:''
		        },
		        loading:true,
		        tableData: [],
		        dialogVisible:false,
		        detail:{},
		        dialogEditeVisible:false
	        }
	    },
	    activated:function(){
	    	console.log(this.$route.params)
	    },
	    deactivated:function(){
	    	
	    },
	    components:{
	  		"v-LocationDetail":LocationDetail,
	  		"v-LocationEdite":LocationEdite
	  	},
	    mounted :function(){
		    this.loadData()
		},
	    methods: {
	    	loadData:function(){
	  			this.loading = true;
	  			this.tableData=[{
	  				locationId:'1',
	  				locationNo:'A12-2-4-001',
	  				locationColumn:2,
	  				locationRow:4,
	  				isOK:0,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:0,
	  				desc:'备注备注asds'
	  			},{
	  				locationId:'2',
	  				locationNo:'A12-2-4-002',
	  				locationColumn:2,
	  				locationRow:4,
	  				isOK:1,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:1,
	  				desc:'备注备注qwfsf'
	  			},{
	  				locationId:'3',
	  				locationNo:'A12-2-4-003',
	  				locationColumn:2,
	  				locationRow:6,
	  				isOK:1,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:2,
	  				desc:'备注备注adas'
	  			},{
	  				locationId:'4',
	  				locationNo:'A12-2-4-004',
	  				locationColumn:9,
	  				locationRow:4,
	  				isOK:0,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:2,
	  				desc:'备注备注瓦的前雾灯'
	  			},{
	  				locationId:'5',
	  				locationNo:'A12-2-4-005',
	  				locationColumn:2,
	  				locationRow:8,
	  				isOK:1,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:0,
	  				desc:'备注备注完全否认过覆盖'
	  			},{
	  				locationId:'6',
	  				locationNo:'A12-2-4-006',
	  				locationColumn:2,
	  				locationRow:6,
	  				isOK:1,
	  				printCount:2,
	  				createDate:'2017-5-25 10：05：23',
	  				state:0,
	  				desc:'备注备注也具有客观混合法规和'
	  			}]
		        setTimeout(() => {
		          	this.loading = false;
		        }, 100);
	  		},
	      	onSearch:function() {
	        	console.log('onSearch!');
	      	},
	      	doClear:function(){
	      		this.formInline ={
	  				locationId: '',
		          	state:''
		        }
	      	},
	      	deleteRow(index, rows) {
        		rows.splice(index, 1);
      		},
      		printRow:function(rows){
      			console.log(rows.printCount)
      		},
      		detailRow:function(rows){
      			this.detail = {};
		        this.detail = rows;
		        this.detail.areaId = this.$route.params.areaId;
		        this.detail.areaNo = this.$route.params.areaNo;
		        this.detail.areaName = this.$route.params.areaName;
		        this.detail.areaType = this.$route.params.areaType;
		        this.dialogVisible = true;
      		},
      		add:function(){
		    	this.dialogEditeVisible = true;
		    },
		    doSend:function(params){
		    	this.dialogEditeVisible = false;
		    	console.log(params.desc)
		    },
		    doClose:function(){
		    	this.dialogEditeVisible = false;
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