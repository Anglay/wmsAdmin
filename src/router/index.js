import Vue from 'vue'
import Router from 'vue-router'
import Store from 'store'

Vue.use(Router)

var router = new Router({
	linkActiveClass: 'active',
  	routes: [{
            path: '/login',
            name:'登录',
            component: resolve => require(['@/components/login'], resolve)
      },{
            path: '/seeding_wall',
            name:'播种墙',
            component: {
                  template:"<p>Seeding wall</p>"
            }
      },{
            path:'/',
            name:"主页",
            component: resolve => require(['@/components/main'], resolve),
            redirect:'/index',
            children:[{
                  path: '/index',
                  name: '首页',
                  component: resolve => require(['@/components/index'], resolve)
            },{
                  path: '/baseinfo',
                  name: '基本信息',
                  component:resolve => require(['@/components/baseinfo/baseinfo'], resolve),
                  redirect: '/baseinfo/customer_manage',
                  children:[{
                              path:"/baseinfo/customer_manage",
                              name:"客户管理",
                              component: resolve => require(['@/components/baseinfo/customer/customer'], resolve)
                        },{
                              path:"/baseinfo/customer_manage/add",
                              name:"新增客户",
                              component: resolve => require(['@/components/baseinfo/customer/customerEdite'], resolve)
                        },{
                              path:"/baseinfo/customer_manage/edite/:customerid",
                              name:"编辑客户",
                              component: resolve => require(['@/components/baseinfo/customer/customerEdite'], resolve)
                        },{
                              path:"/baseinfo/goods_category_manage",
                              name:"商品品类管理",
                              component: resolve => require(['@/components/baseinfo/goods/goodsCategory'], resolve)
                        },{
                              path:"/baseinfo/goods_classify_manage",
                              name:"商品分类管理（一级分类）",
                              component: resolve => require(['@/components/baseinfo/goods/goodsClassify'], resolve)
                        },{
                              path:"/baseinfo/goods_classify_manage/sub1/:id",
                              name:"商品分类管理（二级分类）",
                              component: resolve => require(['@/components/baseinfo/goods/goodsClassifySub1'], resolve)
                        },{
                              path:"/baseinfo/goods_classify_manage/sub2/:id",
                              name:"商品分类管理（三级级分类）",
                              component: resolve => require(['@/components/baseinfo/goods/GoodsClassifySub2'], resolve)
                        },{
                              path:"/baseinfo/goods_manage",
                              name:"商品管理",
                              component: resolve => require(['@/components/baseinfo/goods/goods'], resolve)
                        },{
                              path:"/baseinfo/goods_manage/add",
                              name:"新增商品",
                              component: resolve => require(['@/components/baseinfo/goods/goodsEdite'], resolve)
                        },{
                              path:"/baseinfo/goods_manage/edite/:productNo",
                              name:"编辑商品",
                              component: resolve => require(['@/components/baseinfo/goods/goodsEdite'], resolve)
                        },{
                              path:"/baseinfo/goods_manage/detail/:productNo",
                              name:"商品详情",
                              component: resolve => require(['@/components/baseinfo/goods/goodsDetail'], resolve)
                        },{
                              path:"/baseinfo/location_manage",
                              name:"库区管理",
                              component: resolve => require(['@/components/baseinfo/location/storageArea'], resolve)
                        },{
                              path:"/baseinfo/location_manage/addArea",
                              name:"新增库区",
                              component: resolve => require(['@/components/baseinfo/location/editeArea'], resolve)
                        },{
                              path:"/baseinfo/location_manage/editeArea/:areaId",
                              name:"编辑库区",
                              component: resolve => require(['@/components/baseinfo/location/editeArea'], resolve)
                        },{
                              path:"/baseinfo/location_manage/location/:areaId/:areaNo/:areaName/:areaType",
                              name:"管理库位",
                              component: resolve => require(['@/components/baseinfo/location/location'], resolve)
                        }
                  ]
            },{
                  path: '/instorage_action',
                  name: '入库作业',
                  component:resolve => require(['@/components/instorageaction/instorageaction'], resolve),
                  redirect: '/instorage_action/procurement_storage',
                  children:[{
                        path:"/instorage_action/procurement_storage",
                        name:"采购入库交接",
                        component: resolve => require(['@/components/instorageaction/procurementstorage/procurementStorage'], resolve)
                  },{
                        path:"/instorage_action/procurement_storage/detail/:id",
                        name:"采购入库单详情",
                        component: resolve => require(['@/components/instorageaction/procurementstorage/detail'], resolve)
                  },{
                        path:"/instorage_action/procurement_storage/purchase_order_add",
                        name:"新建采购单",
                        component: resolve => require(['@/components/instorageaction/procurementstorage/purchaseOrderEdite'], resolve)
                  },{
                        path:"/instorage_action/procurement_storage/purchase_order_edite/:id",
                        name:"编辑采购单",
                        component: resolve => require(['@/components/instorageaction/procurementstorage/purchaseOrderEdite'], resolve)
                  },{
                        path:"/instorage_action/procurement_storage/hand/:id",
                        name:"手工交接",
                        component: resolve => require(['@/components/instorageaction/procurementstorage/handTransfer'], resolve)
                  },{
                        path:"/instorage_action/sales_returns_warehousing",
                        name:"销售退货入库交接",
                        component: resolve => require(['@/components/instorageaction/salesreturnswarehousing/salesReturnsWarehousing'], resolve)
                  },{
                        path:"/instorage_action/sales_returns_warehousing/detail/:id",
                        name:"销售退货单详情",
                        component: resolve => require(['@/components/instorageaction/salesreturnswarehousing/detail'], resolve)
                  },{
                        path:"/instorage_action/sales_returns_warehousing/hand/:id",
                        name:"销售手工交接",
                        component: resolve => require(['@/components/instorageaction/salesreturnswarehousing/handTransfer'], resolve)
                  },{
                        path:"/instorage_action/warehouse_shelves",
                        name:"入库上架",
                        component: resolve => require(['@/components/instorageaction/warehouseshelves/warehouseShelves'], resolve)
                  },{
                        path:"/instorage_action/warehouse_shelves/detail/:id",
                        name:"入库单详情",
                        component: resolve => require(['@/components/instorageaction/warehouseshelves/detail'], resolve)
                  },{
                        path:"/instorage_action/warehouse_shelves/hand/:id",
                        name:"手工上架",
                        component: resolve => require(['@/components/instorageaction/warehouseshelves/handShelves'], resolve)
                  }]
            },{
                  path: '/outstorage_action',
                  name: '出库作业',
                  component:resolve => require(['@/components/outstorageaction/outstorageaction'], resolve),
                  redirect: '/outstorage_action/sell_out',
                  children:[{
                        path:"/outstorage_action/sell_out",
                        name: '销售出库',
                        component: resolve => require(['@/components/outstorageaction/sellout/sellOut'], resolve)
                  },{
                        path:"/outstorage_action/sell_out/detail/:id",
                        name: '销售出库单详情',
                        component: resolve => require(['@/components/outstorageaction/sellout/detail'], resolve)
                  },{
                        path:"/outstorage_action/wave_picking",
                        name: '波次拣货',
                        component: resolve => require(['@/components/outstorageaction/wavepicking/wavePicking'], resolve)
                  },{
                        path:"/outstorage_action/wave_picking/detail/:id",
                        name: '波次详情',
                        component: resolve => require(['@/components/outstorageaction/wavepicking/detail'], resolve),
                        redirect: '/outstorage_action/wave_picking/detail/:id/order',
                        children:[{
                              path:'/outstorage_action/wave_picking/detail/:id/order',
                              name:'订单',
                              component: resolve => require(['@/components/outstorageaction/wavepicking/order'], resolve)
                        },{
                              path:'/outstorage_action/wave_picking/detail/:id/goods',
                              name:'商品',
                              component: resolve => require(['@/components/outstorageaction/wavepicking/goods'], resolve)
                        }]
                  },{
                        path:"/outstorage_action/wave_picking/add",
                        name: '创建波次',
                        component: resolve => require(['@/components/outstorageaction/wavepicking/waveAdd'], resolve)
                  },{
                        path:"/outstorage_action/wave_picking/edite/:id",
                        name: '编辑波次',
                        component: resolve => require(['@/components/outstorageaction/wavepicking/waveEdite'], resolve)
                  },{
                        path:"/outstorage_action/outstock_check",
                        name: '出库复核',
                        component: {
                              template:"<p>outstock_check</p>"
                        }
                  },{
                        path:"/outstorage_action/purchase_returns",
                        name: '采购退货出库',
                        component: resolve => require(['@/components/outstorageaction/purchasereturns/purchaseReturns'], resolve)
                  },{
                        path:"/outstorage_action/purchase_returns/detail/:id",
                        name: '采购退货出库单详情',
                        component: resolve => require(['@/components/outstorageaction/purchasereturns/detail'], resolve)
                  }]
            },{
                  path: '/storage_action',
                  name: '库内作业',
                  component:resolve => require(['@/components/storageaction/storageaction'], resolve),
                  redirect: '/storage_action/warehouse_stock',
                  children:[{
                        path:"/storage_action/warehouse_stock",
                        name:"库位库存",
                        component: resolve => require(['@/components/storageaction/warehousestock/warehouseStock'], resolve)
                  },{
                        path:"/storage_action/inventory_adjustment",
                        name:"库存调整",
                        component: resolve => require(['@/components/storageaction/inventoryadjustment/inventoryAdjustment'],resolve)
                  },{
                        path:"/storage_action/inventory_adjustment/detail/:id",
                        name:"库存调整详情",
                        component: resolve => require(['@/components/storageaction/inventoryadjustment/detail'],resolve)
                  },{
                        path:"/storage_action/inventory_adjustment/add",
                        name:"新建库存调整",
                        component: resolve => require(['@/components/storageaction/inventoryadjustment/edite'],resolve)
                  },{
                        path:"/storage_action/inventory_adjustment/edite/:id",
                        name:"编辑库存调整",
                        component: resolve => require(['@/components/storageaction/inventoryadjustment/edite'],resolve)
                  },{
                        path:"/storage_action/inventory",
                        name:"盘点",
                        component: resolve => require(['@/components/storageaction/inventory/inventory'],resolve)
                  },{
                        path:"/storage_action/inventory/detail/:id",
                        name:"盘点详情",
                        component: resolve => require(['@/components/storageaction/inventory/detail'],resolve)
                  },{
                        path:"/storage_action/inventory/handle_inventory/:id",
                        name:"手工盘点",
                        component: resolve => require(['@/components/storageaction/inventory/handleInventory'],resolve)
                  },{
                        path:"/storage_action/transfer_list",
                        name:"移库记录",
                        component: resolve => require(["@/components/storageaction/transfer/transfer"],resolve)
                  },{
                        path:"/storage_action/replenishment_list",
                        name:"补货记录",
                        component: resolve => require(["@/components/storageaction/replenishment/replenishment"],resolve)
                  },{
                        path:"/storage_action/inventory_warning",
                        name:"库存预警",
                        component: resolve => require(["@/components/storageaction/inventorywarning/inventorywarning"],resolve)
                  }]
            },{
                  path: '/datachart',
                  name: '数据报表',
                  component:resolve => require(['@/components/datachart/datachart'], resolve),
                  redirect: '/datachart/goods_stock',
                  children:[{
                        path:"/datachart/goods_stock",
                        name:"商品库存",
                        component: resolve => require(['@/components/datachart/goodsstock/goodsStock'], resolve)
                  },{
                        path:"/datachart/goods_stock/flow/:goodsId",
                        name:"库存流水",
                        component: resolve => require(['@/components/datachart/goodsstock/goodsFlow'], resolve)
                  },{
                        path:"/datachart/instorage",
                        name:"入库",
                        component: resolve => require(['@/components/datachart/instorage/instorage'], resolve),
                        redirect: '/datachart/instorage/summary',
                        children:[{
                              path:'/datachart/instorage/summary',
                              name:'入库汇总',
                              component: resolve => require(['@/components/datachart/instorage/summary'], resolve)
                        },{
                              path:'/datachart/instorage/detailed',
                              name:'入库明细',
                              component: resolve => require(['@/components/datachart/instorage/detailed'], resolve)
                        }]
                  },{
                        path:"/datachart/outstorage",
                        name:"出库",
                        component: resolve => require(['@/components/datachart/outstorage/outstorage'], resolve),
                        redirect: '/datachart/outstorage/summary',
                        children:[{
                              path:'/datachart/outstorage/summary',
                              name:'出库汇总',
                              component: resolve => require(['@/components/datachart/outstorage/summary'], resolve)
                        },{
                              path:'/datachart/outstorage/detailed',
                              name:'出库明细',
                              component: resolve => require(['@/components/datachart/outstorage/detailed'], resolve)
                        }]
                  },{
                        path:"/datachart/inventory_profit_loss",
                        name:"盘点损益",
                        component: resolve => require(['@/components/datachart/profitloss/profitLoss'], resolve)
                  },{
                        path:"/datachart/sales_list",
                        name:"销售出库排行",
                        component: resolve => require(['@/components/datachart/saleslist/salesList'], resolve)
                  },{
                        path:"/datachart/warehouse_log",
                        name:"仓库日志",
                        component: resolve => require(['@/components/datachart/warehouselog/warehouseLog'], resolve)
                  }]
            },{
                  path: '/sys_setting',
                  name: '系统配置',
                  component:resolve => require(['@/components/syssetting/syssetting'], resolve),
                  redirect: '/sys_setting/operation_log',
                  children:[{
                        path:"/sys_setting/operation_log",
                        component: {
                              template:"<p>operation_log</p>"
                        }
                  },{
                        path:"/sys_setting/reservoir_dictionary",
                        component: {
                              template:"<p>reservoir_dictionary</p>"
                        }
                  },{
                        path:"/sys_setting/library_sequence",
                        component: {
                              template:"<p>library_sequence</p>"
                        }
                  },{
                        path:"/sys_setting/warehouse_staff",
                        component: {
                              template:"<p>warehouse_staff</p>"
                        }
                  },{
                        path:"/sys_setting/post_manage",
                        component: {
                              template:"<p>post_manage</p>"
                        }
                  },{
                        path:"/sys_setting/department_manage",
                        component: {
                              template:"<p>department_manage</p>"
                        }
                  },{
                        path:"/sys_setting/business_rules",
                        component: {
                              template:"<p>business_rules</p>"
                        }
                  }]
            }]
      }]
});

router.beforeEach(function(to, from, next){
      // if (to.path.startsWith('/login')) {
      //       Store.remove('access-user')
      //       next()
      // } else {
      //       var user = Store.get('access-user');
      //       if (!user) {
      //             next({path: '/login'})
      //       } else {
                  var path = to.path.split("/");
                  Store.set("path",path);
                  next()
      //       }
      
      // }
});
export default router;
