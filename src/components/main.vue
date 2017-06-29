<template>
  <div id="main">
    <v-header :navdata="navData"></v-header>
    <div class="layout-container">
      <transition name="fade" mode="out-in">
        <router-view :navdata="navData"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
export default {
  name: 'main',
  data:function(){
      return {
        navData:[]
      }
  },
  created:function(){
    this.navData = [{
        "text":"首页",
        "module":"index"
      },{
        "text":"基本信息",
        "module":"baseinfo",
        "icon":"ui-icon ui-icon-instorage",
        "sub":[
            {
                "text":"客户管理",
                "id":"customer_manage"
            },{
                "text":"商品品类管理",
                "id":"goods_category_manage"
            },{
                "text":"商品分类管理",
                "id":"goods_classify_manage"
            },{
                "text":"商品管理",
                "id":"goods_manage"
            },{
                "text":"库区库位",
                "id":"location_manage"
            }
        ]
    },{
        "text":"入库作业",
        "module":"instorage_action",
        "icon":"ui-icon ui-icon-stock",
        "sub":[
            {
                "text":"采购入库交接",
                "id":"procurement_storage"
            },{
                "text":"销售退货入库交接",
                "id":"sales_returns_warehousing"
            },{
                "text":"入库上架",
                "id":"warehouse_shelves"
            }
        ]
    },{
        "text":"出库作业",
        "module":"outstorage_action",
        "icon":"ui-icon ui-icon-outgoing",
        "sub":[
            {
                "text":"销售出库",
                "id":"sell_out"
            },{
                "text":"波次拣货",
                "id":"wave_picking"
            },{
                "text":"播种墙",
                "id":"seeding_wall"
            },{
                "text":"出库复核",
                "id":"outstock_check"
            },{
                "text":"采购退货出库",
                "id":"purchase_returns"
            }
        ]
    },{
        "text":"库内作业",
        "module":"storage_action",
        "icon":"ui-icon ui-icon-user",
        "sub":[
            {
                "text":"库位库存",
                "id":"warehouse_stock"
            },{
                "text":"库存调整",
                "id":"inventory_adjustment"
            },{
                "text":"盘点",
                "id":"inventory"
            },{
                "text":"移库记录",
                "id":"transfer_list"
            },{
                "text":"补货记录",
                "id":"replenishment_list"
            },{
                "text":"库存预警",
                "id":"inventory_warning"
            }
        ]
    },{
        "text":"数据报表",
        "module":"datachart",
        "icon":"ui-icon ui-icon-user",
        "sub":[
            {
                "text":"商品库存",
                "id":"goods_stock"
            },{
                "text":"入库",
                "id":"instorage"
            },{
                "text":"出库",
                "id":"outstorage"
            },{
                "text":"盘点损益",
                "id":"inventory_profit_loss"
            },{
              "text":"销售出库排行",
              "id":"sales_list"
            },{
              "text":"仓库日志",
              "id":"warehouse_log"
            }
        ]
    },{
        "text":"系统配置",
        "module":"sys_setting",
        "icon":"ui-icon ui-icon-user",
        "sub":[
            {
                "text":"操作日志",
                "id":"operation_log"
            },{
                "text":"库区字典",
                "id":"reservoir_dictionary"
            },{
                "text":"库位顺序",
                "id":"library_sequence"
            },{
                "text":"仓库员工",
                "id":"warehouse_staff"
            },{
                "text":"岗位管理",
                "id":"post_manage"
            },{
                "text":"部门管理",
                "id":"department_manage"
            },{
                "text":"业务规则",
                "id":"business_rules"
            }
        ]
    }]
  },
  components:{
    "v-header":Header
  }
}
</script>

<style lang="less">
.layout-container{
  position: absolute;
  right: 0;
  top: 50px;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.page-bread{
  height:40px;
  padding: 0 15px;
  background: #fff;
  border-bottom:1px solid #eaeaea;
  .el-breadcrumb{
    line-height: 40px;
  }
}
.search-form{
  height: auto;
  overflow: hidden;
  padding: 22px 15px 0;
  background: #f9f9f9;
}
.grid-toolbar{
  height: auto;
  overflow: hidden;
  padding: 10px 20px;
  .tool-btn{
    display: inline-block;
    padding: 8px 15px;
    border:none;
    background: none;
    font-size: 12px;
    border-radius:3px;
    outline: none;
    cursor: pointer;
    margin: 0 2px;
  }
  .btn-refresh{
    background: #76c884 url(../assets/icon_refresh.png) no-repeat 10px center;
    background-size: 15px 15px;
    padding-left: 32px;
    color: #fff;
  }
  .btn-add{
    background: #efa759 url(../assets/icon_add.png) no-repeat 10px center;
    background-size: 15px 15px;
    padding-left: 32px;
    color: #fff;
  }
  .btn-export{
    background: url(../assets/icon_export.png) no-repeat 10px center;
    background-size: 13px 13px;
    padding-left: 25px;
    color: #777;
  }
}
.grid-content{
  height: auto;
  overflow: hidden;
  padding: 0 10px;
  .el-table th{
    background: #fff;
    
  }
  .el-table__header-wrapper{
    border-bottom: 1px solid #eaeaea;
  }
  .el-table__header-wrapper thead div,.el-table__fixed-header-wrapper thead div{
    background: #fff;
    padding: 20px 18px 10px;
    color: #444;
    font-weight: bold;
  }
  .el-table td{
    height: 48px;
  }
  .el-button--text{
    color: #4796ef;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td{
      background: #f4f8fb;
  }
}
.grid-page{
  height: auto;
  overflow: hidden;
  padding: 25px 15px;
  .el-pagination__sizes{
    margin: 0 0 0 10px;
  }
  .el-pagination__total{
    margin: 0;
  }
}
.statistic-content{
  height: auto;
  overflow: hidden;
  padding: 10px;
  color: #f97042;
  border:1px solid #fee7a9;
  border-radius: 4px;
  background: #fffbee;
  text-align: center;
  font-size: 16px;
  span{
    display: inline-block;
    padding: 0 5px;
    font-size: 14px;
  }
}
</style>
