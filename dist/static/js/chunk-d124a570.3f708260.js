(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d124a570"],{"4ec3":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return c});var i=n("b775"),a=n("2435"),r="/apis";function s(t){return Object(i["a"])({url:r,method:"GET",params:t})}function o(){return new Promise(function(t,e){var n=[],i="",r=a["c"];function o(a){s(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(n=n.concat(e),i=e[a-1]||{},i.id){var s={after:i.id,limit:r};o(s)}}else t(n)}).catch(function(){e()})}var l={after:"",limit:r};o(l)})}function l(t){return Object(i["a"])({url:r+"/"+t,method:"GET"})}function u(t){return Object(i["a"])({url:r,method:"PUT",data:t})}function c(t){return Object(i["a"])({url:r+"/"+t,method:"DELETE"})}},6724:function(t,e,n){"use strict";n("8d41");var i={bind:function(t,e){t.addEventListener("click",function(n){var i=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=n.pageY-s.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=n.pageX-s.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}},!1)}},a=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(a)),i.install=a;e["a"]=i},"7ea2":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return d});var i=n("b775"),a=n("2435"),r="/clusters";function s(t){return Object(i["a"])({url:r,method:"GET",params:t})}function o(){return new Promise(function(t,e){var n=[],i="",r=a["c"];function o(a){s(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(n=n.concat(e),i=e[a-1]||{},i.id){var s={after:i.id,limit:r};o(s)}}else t(n)}).catch(function(){e()})}var l={after:"",limit:r};o(l)})}function l(t){return Object(i["a"])({url:r+"/"+t,method:"GET"})}function u(t){return Object(i["a"])({url:r,method:"PUT",data:t})}function c(t){return Object(i["a"])({url:r+"/"+t,method:"DELETE"})}function d(t){return Object(i["a"])({url:r+"/"+t+"/binds",method:"GET"})}},"8d41":function(t,e,n){},a113:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-select",{attrs:{filterable:"",placeholder:"请选择cluster"},model:{value:t.listQuery.clusterId,callback:function(e){t.$set(t.listQuery,"clusterId",t._n(e))},expression:"listQuery.clusterId"}},[n("el-option",{key:-1,attrs:{label:"请选择cluster",value:-1}}),t._v(" "),t._l(t.clustersList,function(t,e){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),n("el-select",{attrs:{filterable:"",placeholder:"请选择api"},model:{value:t.listQuery.apiId,callback:function(e){t.$set(t.listQuery,"apiId",t._n(e))},expression:"listQuery.apiId"}},[n("el-option",{key:-1,attrs:{label:"请选择api",value:-1}}),t._v(" "),t._l(t.apiList,function(t,e){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.getList}},[t._v("刷新\n        ")]),t._v(" "),0===t.clustersList.length||0===t.apiList.length?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先添加Cluster或者API",placement:"top-start"}},[n("div",{staticStyle:{float:"right"}},[n("el-button",{staticClass:"filter-item",attrs:{disabled:!0,type:"danger",icon:"el-icon-edit"}},[t._v("添加")])],1)]):n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.showList,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"cluster"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.clusterName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"API"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.apiName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"路由策略"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("strategyFilter")(e.row.strategy)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"路由流量比例"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.trafficRate))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?[n("el-tag",{attrs:{type:"success"}},[t._v("生效")])]:[n("el-tag",{attrs:{type:"danger"}},[t._v("失效")])]]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleShow(e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},a=[],r=(n("ac6a"),n("7f7f"),n("6724")),s=n("f042"),o=n("7ea2"),l=n("4ec3"),u=n("ed08"),c="routingIndex",d={name:c,directives:{waves:r["a"]},data:function(){return{listQuery:{name:void 0,clusterId:-1,apiId:-1,page:1,size:10},listLoading:!0,dataList:[],showList:[],clustersList:[],apiList:[],pageInfo:{totalSize:void 0}}},created:function(){this.getList()},watch:{$route:function(t,e){t.name!=c&&this.$destroy()},"listQuery.name":function(){this.handleFilter()},"listQuery.clusterId":function(){this.handleFilter()},"listQuery.apiId":function(){this.handleFilter()}},computed:{},methods:{getList:function(){var t=this;this.listLoading=!0,s["b"]().then(function(e){t.updateList(e),t.getOthers()}).catch(function(){t.listLoading=!1})},getOthers:function(){var t=this;o["b"]().then(function(e){t.clustersList=e||[],t.dataList.forEach(function(n){var i=Object(u["g"])(e,n.clusterID);i&&t.$set(n,"clusterName",i.name)})}),l["b"]().then(function(e){t.apiList=e||[],t.dataList.forEach(function(n){var i=Object(u["g"])(e,n.api);i&&t.$set(n,"apiName",i.name)})})},updateList:function(t){this.dataList=t||[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1,this.updateShowList()},updateShowList:function(){var t=this,e=[],n=[];this.dataList.forEach(function(n,i){var a=t.listQuery.name,r=t.listQuery.clusterId,s=t.listQuery.apiId,o=!0;a&&(o=Object(u["k"])(n.name,a)),o&&-1!==r&&(o=n.clusterID===r),o&&-1!==s&&(o=n.api===s),o&&e.push(n)}),e.forEach(function(e,i){e=e||{};var a=t.listQuery.page,r=t.listQuery.size,s=i,o=a*r,l=o-r,u=!0;u=s>=l&&s<o,u&&n.push(e)}),this.showList=n,this.pageInfo.totalSize=e.length},handleSizeChange:function(t){this.listQuery.size=t,this.listQuery.page=1,this.updateShowList()},handleCurrentChange:function(t){this.listQuery.page=t,this.updateShowList()},handleFilter:function(){this.listQuery.page=1,this.updateShowList()},handleDelete:function(t){var e=this,n=t.id;this.$confirm("是否删除该routing？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(n)})},_doDeleteItem:function(t){var e=this;t&&s["a"](t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getList()})},handleCreate:function(){this.$router.push({path:"/routing/new"})},handleShow:function(t){this.$router.push({path:"/routing/show",query:{id:t.id}})},handleUpdate:function(t){this.$router.push({path:"/routing/edit",query:{id:t.id}})}}},f=d,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,"da60aecc",null);e["default"]=p.exports},b775:function(t,e,n){"use strict";var i=n("bc3a"),a=n.n(i),r=n("5c96"),s="",o="",l=o+"/v1",u=a.a.create({baseURL:s+l,timeout:6e4});u.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),u.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(r["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(r["Message"])({message:t.response&&t.response.data&&t.response.data.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=u},f042:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return c});var i=n("b775"),a=n("2435"),r="/routings";function s(t){return Object(i["a"])({url:r,method:"GET",params:t})}function o(){return new Promise(function(t,e){var n=[],i="",r=a["c"];function o(a){s(a).then(function(e){e=e||[];var a=e.length;if(a>0){if(n=n.concat(e),i=e[a-1]||{},i.id){var s={after:i.id,limit:r};o(s)}}else t(n)}).catch(function(){e()})}var l={after:"",limit:r};o(l)})}function l(t){return Object(i["a"])({url:r+"/"+t,method:"GET"})}function u(t){return Object(i["a"])({url:r,method:"PUT",data:t})}function c(t){return Object(i["a"])({url:r+"/"+t,method:"DELETE"})}}}]);