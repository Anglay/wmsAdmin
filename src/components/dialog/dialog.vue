<template>
	<section>
		<el-button type="success" @click="dialogVisible = true">成功按钮</el-button>
		<el-dialog
		  	title="提示"
		  	:visible.sync="dialogVisible"
		  	:before-close="handleClose"
		  	:modal-append-to-body="false"
		  	:close-on-click-modal="false"
		  	:close-on-press-escape="false"
		  	:show-close="false">
		  	<div></div>
		  	<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  	</div>
		</el-dialog>
	</section>
</template>

<script>
  export default {
    data() {
      	return {
        	dialogVisible: false,
	        form: {
	          	name: '',
	          	region: ''
	        },
	        formLabelWidth: '120px'
      	};
    },
    methods: {
    	handleClose(done) {
        	console.log("回调--> done")
        	done()
      	}
    }
  }
</script>

<style lang="less">
.el-dialog--dl-small{
	width: 800px;
}
</style>