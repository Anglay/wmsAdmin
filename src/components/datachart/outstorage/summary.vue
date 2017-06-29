<template>
	<div class="chart-container">
		<div class="chart-search">
			<div class="search-item">
				<el-button-group>
				  	<el-button v-for="(item,index) in items" :type="item.value==time?'primary':''" :key="index" @click="checkItem(item)">{{item.text}}</el-button>
				</el-button-group>
			</div>
			<div class="search-item">
				<el-date-picker
			      	v-model="dateTime"
			      	type="daterange"
			      	placeholder="选择日期范围">
			    </el-date-picker>
			</div>
			<div class="search-item">
				<el-button type="primary">查询</el-button>
			</div>
			<div class="search-item">
				<el-button>清除</el-button>
			</div>
		</div>
		<div class="statistic-content">
			<p>
				统计：
				<span>供应商N</span>
				<span>产品分类数M</span>
				<span>批号/型号/货号数量N</span>
				<span>sku数量M</span>
				<span>商品数量N</span>
			</p>
		</div>
    	<div class="chart-content">
    		<div class="echarts">
			    <IEcharts :option="bar" :loading="loading"></IEcharts>
			</div>
    		<div class="echarts">
			    <IEcharts :option="line" :loading="loading"></IEcharts>
			</div>
    	</div>
	</div>
</template>
<script>
	import IEcharts from 'vue-echarts-v3/src/full.vue';

	export default {
	    name: 'summary',
	    components: {
	      IEcharts
	    },
	    data:function(){
	    	return {
	    		items:[
	    			{'text':'今天',value:'today'},
	    			{'text':'昨天',value:'yesterday'},
	    			{'text':'最近7天',value:'7day'},
	    			{'text':'最近30天',value:'30day'},
	    		],
	    		time:'today',
	    		dateTime:'',
	    		type:'primary',
	    		loading: true,
			    bar: {},
			    line:{}
			}
	    },
	    props:['value'],
	    watch:{
	    	"value":function(val,oldval){
	    		console.log(val)
	    		this.update();
	    	}
	    },
	    mounted:function(){
	    	this.$emit("changeActiveName",'summary');
	    	console.log(this.value);
	    	this.bar = {
	    		title : {
			        text: '批号/型号/货号汇总',
			        x: 'center'
			    },
			    legend: {
			        data:['批号/型号/货号'],
			        bottom :true
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {type: 'cross'}
			    },
			    xAxis: [
			        {
			        	name:'时间',
			            type: 'category',
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
			        }
			    ],
			    yAxis: [
			        {
			        	name: '数量',
			            type: 'value',
			            min: 0,
			            interval: 50
			        }
			    ],
			    series: [
			        {
			            name:'批号/型号/货号',
			            barWidth:30,
			            type:'bar',
			            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			        }
			    ]
			};
	    	this.line = {
			    title : {
			        text: 'sku和商品数量汇总',
			        x: 'center'
			    },
			    grid: {
			        bottom: 80
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            animation: false,
			            label: {
			                backgroundColor: '#505765'
			            }
			        }
			    },
			    legend: {
			        data:['sku数量','商品数量'],
			        bottom :true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['1', '2', '3','4','5','6','7','8','9','10']
			        }
			    ],
			    yAxis: [
			        {
			            name: 'sku数量',
			            type: 'value',
			            max: 500
			        },
			        {
			            name: '商品数量',
			            nameLocation: 'end',
			            type: 'value',
			            inverse: false
			        }
			    ],
			    series: [
			        {
			            name:'sku数量',
			            type:'line',
			            animation: true,
			            areaStyle: {
			                normal: {}
			            },
			            lineStyle: {
			                normal: {
			                    width: 1
			                }
			            },
			            data:[5,10,25,36,70,50,90,100,120,100]
			        },
			        {
			            name:'商品数量',
			            type:'line',
			            yAxisIndex:1,
			            animation: true,
			            areaStyle: {
			                normal: {}
			            },
			            lineStyle: {
			                normal: {
			                    width: 1
			                }
			            },
			            data: [3,6,9,10,12,14,20,27,30,43]
			        }
			    ]
			};
			this.loading = false;
	    },
	    methods: {
	    	update:function(){

	    	},
	    	checkItem:function(item){
	    		this.time = item.value;
	    	}
	    }
	};
</script>
<style lang="less" scoped>
	.chart-container{
		height: auto;
		overflow: hidden;
		padding: 0 15px;
		background: #fff;
		.chart-search{
			height: auto;
			overflow: hidden;
			padding-bottom: 15px;
			.search-item{
				display: inline-block;
				height: auto;
				overflow: hidden;
				float: left;
				padding-right: 15px;
			}
		}
		.echarts{
		    width: 100%;
		    height: 400px;
		    padding: 15px 0;
	  	}
	}
</style>