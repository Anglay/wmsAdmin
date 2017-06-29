<template>
	<div class="layout-header">
		<div class="header-logo"></div>
		<div class="head-navbar">
			<ul>
				<li v-for="item in navdata">
					<router-link
						:to="'/'+item.module"
						:id="item.module"
						>
						<span>{{item.text}}</span>
					</router-link>
				</li>
			</ul>
        </div>
        <div class="loyout-right">
        	<span class="span-icon-loginout"></span>
        	<span class="span-icon-message"></span>
            <span class="span-text">小强</span>
        </div>
	</div>
</template>
<script>
	export default {
	  	name: 'header',
	  	data:function(){
	  		return {
	  			module:"index"
	  		}
	  	},
	  	props:["navdata"]
	}
</script>
<style lang="less">
	.layout-header{
	    position: absolute;
	    height: 50px;
	    left: 0;
	    right: 0;
	    top: 0;
	    background: #3b86db;
	    z-index: 99;
	    .header-logo{
	    	float: left;
	    	width: 160px;
	      	height: 50px;
	      	background: #2267b5 url(../../assets/logo.png) no-repeat center center;
	    }
	    .head-navbar{
		    display: inline-block;
		    float: left;
		    height: 50px;
		    overflow: hidden;
		    ul{
		    	display: block;
		    	height: auto;
		    	overflow: hidden;
		    	li{
		    		display: inline-block;
		    		float: left;
		    		a{
				        display: inline-block;
				        height: 50px;
				        line-height: 50px;
				        text-align: center;
				        padding: 0 20px;
				        text-decoration: none;
				        cursor: pointer;
				        span{
				          	font-size: 14px;
				          	color: #fff;
				        }
				    }
				    a.active{
				        background: #439bff;
				        font-weight: bold;
				    }
		    	}
		    }
		}
		.loyout-right{
		    display: inline-block;
		    float: right;
		    height: 50px;
	      	span{
		        position: relative;
		        display: inline-block;
		        min-width: 25px;
		        height: 50px;
		        margin: 0;
		        padding: 0 10px;
		        float: right;
	      	}
	      	span.span-text{
		        line-height: 50px;
		        color: #fff;
		        font-size: 14px;
	      	}
		    span.span-icon-message{
		        cursor: pointer;
		        background: url("../../assets/icon-msg.png") no-repeat center center;
		    }
		    span.span-icon-loginout{
		        cursor: pointer;
		        background: url("../../assets/icon-login-out.png") no-repeat center center;
		    }
		}
  	}
</style>