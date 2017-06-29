<template>
	<div class="add-quantity">
		<div class="quantity-content">
			<div class="list">
				<el-tag
				  	v-for="tag in tags"
				  	:key="tag.quantity"
				  	:closable="true"
				  	type="primary"
				  	@close="handleClose(tag)">
					{{tag.quantity}}
				</el-tag>
			</div>
			<div class="input-control">
				<input type="text" v-model="txt" placeholder="请输入规格名称" @keyup.enter="enterAdd">
			</div>
		</div>
		<div class="quantity-footer">
			<el-button type="primary" @click="doAdd">提交</el-button>
			<el-button @click="doCancel">取消</el-button>
		</div>
	</div>
</template>

<script>
  	export default {
	    data() {
	      	return {
		        tags: [],
		        txt:""
	      	};
	    },
	    methods: {
		    handleClose(tag) {
		        this.tags.splice(this.tags.indexOf(tag), 1);
		    },
		    enterAdd:function(){
		    	if (this.txt) {
			    	this.tags.push({quantity:this.txt});
			    	this.txt = "";
		    	}
		    },
		    doAdd:function(){
		    	if (this.tags.length>0) {
			    	this.$emit("doAdd",this.tags);
			    	this.tags = [];
		    	}else{
		    		this.$message({
			            type: 'warning',
			            message: '请添加规格'
		          	}); 
		    	}
		    },
		    doCancel:function(){
		    	this.$emit("doCancel");
		    	this.tags = [];
		    }
		}
  	}
</script>

<style lang="less" scoped>
	.add-quantity{
		height: auto;
		overflow: hidden;
		.quantity-content{
			height: auto;
			overflow: hidden;
			border:1px solid #bfcbd9;
			border-radius:5px;
			margin-bottom: 25px;
			.list{
				min-height: 80px;
				padding: 5px;
				.el-tag{
					margin: 5px;
				}
			}
			.input-control{
				height: 30px;
				line-height: 30px;
				padding: 10px;
				input{
					display: block;
					line-height: 30px;
					border:none;
					outline: none;
				}
			}
		}
		.quantity-footer{
			height: auto;
			overflow: hidden;
			text-align: center;
		}
	}
</style>