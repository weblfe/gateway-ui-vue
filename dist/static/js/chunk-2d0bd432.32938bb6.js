(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd432"],{"2af3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("server-form",{attrs:{"show-type":"show",editItem:t.item},on:{"update:editItem":function(e){t.item=e},"update:edit-item":function(e){t.item=e}}})],1)},r=[],s=(i("7f7f"),i("3d3e")),u=i("aa22"),d="serverShow",o={name:d,data:function(){return{id:"",clusterId:"",item:{}}},components:{ServerForm:s["a"]},created:function(){this.init()},watch:{$route:function(t,e){t.name!=d&&this.$destroy()}},methods:{init:function(){var t=this;this.id=this.$route.query.id,this.clusterId=this.$route.query.clusterId;var e=this.id;e&&u["b"](e).then(function(e){e=e||{},t.clusterId&&(e.bindClusterId=parseInt(t.clusterId,10)),t.item=e})}}},a=o,c=i("2877"),h=Object(c["a"])(a,n,r,!1,null,"2dc23d65",null);e["default"]=h.exports}}]);