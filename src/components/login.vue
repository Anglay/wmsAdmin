<template>
	<div class="page-login">
		<div class="header-login">
			<h1 class="login"><span>仓库管理系统</span></h1>
			<span class="header-tel">0571-87791393</span>
		</div>
		<div class="content">
			<div class="wraper">
				<div class="wraper-login">
					<div class="login-content">
						<div class="form-content">
							<h2>用户登录</h2>
							<!-- <p class="text-error">错误提示</p> -->
							<div class="form-group">
								<label class="label-user"><input type="text" placeholder="请输入用户名"></label>
								<span class="line"></span>
								<label class="label-password"><input type="password" placeholder="请输入密码"></label>
							</div>
							<div class="form-item">
								<label class="label-code"><input type="text" placeholder="请输入验证码"></label>
								<div>
									<span class="code-img"></span>
									<a href="javascript:void(0)">换一张</a>
								</div>
							</div>
							<div class="form-item">
								<a class="btn-login" href="javascript:void(0)">登 录</a>
							</div>
							<div class="form-item">
								<span><a href="javascript:void(0)">忘记密码？</a>请联系系统管理员修改密码</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-login">
			<h3>浙江仓海联储网络科技有限公司</h3>
			<p>&copy;2017 优仓网ycang.cn 保留所有权利 浙ICP备16040246号-1</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	input[placeholder], [placeholder], *[placeholder] {
		color:#999;
	} 
	.page-login{
		height: auto;
		overflow: hidden;
		.header-login{
			height: 50px;
			width: 1200px;
			margin: 0 auto;
			padding: 40px 0 20px;
			.login{
				display: inline-block;
				line-height: 50px;
				padding-left: 155px;
				background: url(../assets/logo_01.png) no-repeat left center;
				span{
					display: inline-block;
					border-left: 1px solid #d1d1d1;
					padding-left: 20px;
					height: 40px;
					line-height: 40px;
					margin-top: 5px;
					font-size: 24px;
					color: #333;
				}
			}
			.header-tel{
				display: inline-block;
				float: right;
				height: 50px;
				line-height: 50px;
				color: #ff9f74;
				font-size: 24px;
				padding-left: 35px;
				background: url(../assets/icon_tel_01.png) no-repeat left center;
			}
		}
		.content{
			height: 540px;
			min-width: 1200px;
			overflow: hidden;
			background: url(../assets/bg_01.png) repeat-x center;
			.wraper{
				width: 1200px;
				height: 100%;
				background: url(../assets/bg_02.png) no-repeat center center;
				margin: 0 auto;
				overflow: hidden;
				.wraper-login{
					height: 359px;
					width: 349px;
					border:1px solid #e5e5e5;
					background: #f5f5f5;
					margin: 80px auto 0;
					box-shadow:1px 3px 4px #dcdcdc;
					padding: 10px;
					.login-content{
						height: auto;
						overflow: hidden;
						height: 359px;
						width: 349px;
						.form-content{
							padding: 30px 30px 0;
							h2{
								font-size: 20px;
								padding-bottom: 15px;
							}
							.text-error{
								padding:10px;
								text-align: center;
								font-size: 12px;
								clear: both;
								color: #f97042;
								border:1px solid #fee7a9;
								border-radius: 4px;
								background: #fffbee;
								margin-bottom: 5px;
							}
							.form-group{
								height: 78px;
								border:1px solid #d2d2d2;
								border-radius: 4px;
								background: #fff;
								padding: 10px;
								margin-bottom: 15px;
								label,span{
									display: block;
								}
								label{
									height: 39px;
									padding-right: 20px;
									background: url(../assets/icon_login.png) no-repeat;
									overflow: hidden;
									input{
										display: block;
										width: 100%;
										height: 39px;
										line-height: 40px;
										outline: none;
										font-size: 14px;
										color: #333;
									}
								}
								.label-user{
									background-position: right 10px;
								}
								.label-password{
									background-position: right -44px;
								}
								span{
									height: 1px;
									background: #e2e2e2;
								}
							}
							.form-item{
								height: 50px;
								overflow: hidden;
								margin-bottom: 15px;
								>span{
									display: block;
									text-align: center;
									padding-top: 10px;
									font-size: 12px;
									color: #999;
									>a{
										color: #333;
									}
								}
								.btn-login{
									display: block;
									height: 48px;
									line-height: 48px;
									text-align: center;
									background: #5da4f3;
									border:1px solid #5199ea;
									font-size: 16px;
									color: #fff;
									border-radius: 4px;
								}
								.label-code{
									display: inline-block;
									float: left;
									width: 130px;
									height: 48px;
									overflow: hidden;
									border:1px solid #d2d2d2;
									border-radius: 4px;
									background: #fff;
									input{
										display: inline-block;
										padding: 10px;
										width: 110px;
										height: 28px;
										outline: none;
										font-size: 14px;
										color: #333;
									}
								}
								>div{
									margin-left: 130px;
									height: 50px;
									line-height: 50px;
									span,a{
										display: inline-block;
										float: left;
										margin-left: 10px;
										font-size: 14px;
										color: #444444;
										text-decoration: underline;
									}
									.code-img{
										width: 90px;
										height: 50px;
										background: red;
									}
								}
							}
						}
					}
				}
			}
		}
		.footer-login{
			height: auto;
			overflow: hidden;
			text-align: center;
			min-width: 1200px;
			h3{
				font-size: 14px;
				font-weight: normal;
				color: #666666;
				margin-bottom: 10px;
			}
			p{
				font-size: 12px;
				color: #999999;
			}
		}
	}
</style>