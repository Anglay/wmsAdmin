<template>
	<div class="goods-container">
		<div class="grid-toolbar">
			<button class="tool-btn btn-add" @click="addCategory">添加分类</button>
		</div>
		<div class="grid-content">
			<div class="tree-header">
				<span class="header-text">分类名称</span>
				<span class="header-action">操作</span>
				<span class="header-time">创建时间</span>
			</div>
			<el-tree
			  	:data="data"
			  	v-loading.body="loading"
			  	:props="defaultProps"
			  	node-key="id"
			  	default-expand-all
			  	class="mytree"
			  	:expand-on-click-node="false"
			  	:render-content="renderContent">
			</el-tree>
		</div>
	</div>
</template>

<script type="text/javascript">
  	var id = 1000;

  	export default {
	    data() {
	      	return {
	      		loading:false,
	        	data: [{
	          		id: 1,
	          		label: '一级 1',
	          		time:"2016-06-16",
	          		children: [{
	            		id: 4,
			            label: '二级 1-1',
			            time:"2016-06-16",
			            children: [{
			              id: 9,
			              label: '三级 1-1-1',
			              time:"2016-06-16"
			            }, {
			              id: 10,
			              label: '三级 1-1-2',
			              time:"2016-06-16"
			        	}]
	          		}]
	        	}, {
	          		id: 2,
	          		label: '一级 2',
	          		time:"2016-06-16",
	          		children: [{
			            id: 5,
			            label: '二级 2-1',
			            time:"2016-06-16"
		          	}, {
			            id: 6,
			            label: '二级 2-2',
			            time:"2016-06-16"
			        }]
		        }, {
	          		id: 3,
	          		label: '一级 3',
	          		time:"2016-06-16",
	          		children: [{
			            id: 7,
			            label: '二级 3-1',
			            time:"2016-06-16"
		          	}, {
			            id: 8,
			            label: '二级 3-2',
			            time:"2016-06-16"
		          	}]
		        }],
	        	defaultProps: {
		          	children: 'children',
		          	label: 'label',
		          	time:'time'
	        	}
	      	}
	    },
	    methods: {
	    	addCategory:function(){
	    		this.$prompt('请输入分类名称', '添加分类', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	inputPattern: /^.*[^\s]+.*$/,
		          	inputErrorMessage: '分类名称不能为空'
		        }).then(({ value }) => {
		        	this.data.push({
		        		id:id++,
		        		label:value,
		        		time:"2016-06-16",
		        		children:[]
		        	})
			        this.$message({
		            	type: 'success',
		            	message: '分类添加成功'
			        });
		        }).catch(() => {
		          	this.$message({
		            	type: 'info',
		            	message: '取消添加分类'
		          	});       
		        });
	    	},
	      	append(store, data) {
	      		this.$prompt('请输入分类名称', '添加子分类', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	inputPattern: /^.*[^\s]+.*$/,
		          	inputErrorMessage: '分类名称不能为空'
		        }).then(({ value }) => {
		        	store.append({ id: id++, label: value,time:"2016-06-16", children: [] }, data);
			        this.$message({
		            	type: 'success',
		            	message: '子分类添加成功'
			        });
		        }).catch(() => {
		          	this.$message({
		            	type: 'info',
		            	message: '取消添加分类'
		          	});       
		        });
	        	
	      	},
	      	remove(store, data) {
	        	store.remove(data);
	      	},
	      	renderContent(h, { node, data, store }) {
	        	return (
	          		<div>
	          			<span class="node-text">
	          				<span>{node.label}</span>
	          			</span>
	          			<span class="node-action">
	          				<span class="tree-edite">编辑</span>
	          				<span class="tree-add" on-click={ () => this.append(store, data) }>添加子类</span>
	          				<span class="tree-del" on-click={ () => this.remove(store, data) }>删除</span>
	            		</span>
	            		<span class="node-time">
			              	{data.time}
	            		</span>
	          		</div>);
	      	}
	    }
	};
</script>

<style lang="less">
	.goods-container{
		height:auto;
		overflow:hidd;
		.tree-header{
			background:#fff;
			height:45px;
			line-height:45px;
			border:1px solid #d1dbe5;
			span{
				display:inline-block;
				font-size:14px;
				color:#333;
				font-weight:bold;
				padding-left:20px;
			}
			.header-action,
			.header-time{
				float:right;
				border-left:1px solid #d1dbe5;
			}
			.header-action{
				width:300px;
			}
			.header-time{
				width:200px;
			}
		}
		.mytree{
			height: auto;
			overflow: hidden;
			border-bottom:none;
			.el-tree-node__content,.el-tree__empty-block{
				display:block;
				border-bottom:1px solid #d1dbe5;
				clear:both;
			}
			.el-tree-node__children{
				width:100%;
			}
			.el-tree-node__expand-icon{
				display: inline-block;
				float: left;
			}
			.el-tree-node__expand-icon{
				margin-top: 10px;
			}
			.node-text,.node-action,.node-time{
				display:inline-block;
			}
			.node-text{
				float:left;
			}
			.node-action,.node-time{
				float:right;
				text-align:left;
				border-left:1px solid #d1dbe5;
				padding-left:20px;
			}
			.node-action{
				width:300px;
				span{
					font-size:12px;
					margin-right:10px;
					display:inline-block;
					color:#4796ef;
				}
			}
			.node-time{
				width:200px;
				color:#999;
			}
		}
	}
</style>
