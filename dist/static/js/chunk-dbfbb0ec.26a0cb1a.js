(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbfbb0ec"],{"0469":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataForm",attrs:{rules:t.rules,model:t.tempItem,"label-width":"80px"}},[n("el-form-item",{attrs:{label:t.i18n("plugin.name"),prop:"name"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.name))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"插件名称"},model:{value:t.tempItem.name,callback:function(e){t.$set(t.tempItem,"name",e)},expression:"tempItem.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.version"),prop:"version"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.version))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"插件版本号"},model:{value:t.tempItem.version,callback:function(e){t.$set(t.tempItem,"version",t._n(e))},expression:"tempItem.version"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.author"),prop:"author"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.author))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"作者"},model:{value:t.tempItem.author,callback:function(e){t.$set(t.tempItem,"author",e)},expression:"tempItem.author"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.email"),prop:"email"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.email))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"email"},model:{value:t.tempItem.email,callback:function(e){t.$set(t.tempItem,"email",e)},expression:"tempItem.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.type"),prop:"type"}},[t.isShow?n("span",[t._v(t._s(t._f("pluginTypeFilter")(t.tempItem.type)))]):[n("el-select",{attrs:{placeholder:t.i18n("plugin.type")},model:{value:t.tempItem.type,callback:function(e){t.$set(t.tempItem,"type",e)},expression:"tempItem.type"}},t._l(t.pluginTypeConstant,function(t,e){return n("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)]],2),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.content"),prop:"content"}},[t.isShow?t._e():n("div",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSelectFile}},[t._v(t._s(t.i18n("btn.importCode"))),n("i",{staticClass:"el-icon-upload el-icon--right"})]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.formatContent}},[t._v(t._s(t.i18n("btn.formatCode")))]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("支持直接.js或者.txt文件导入，支持在线编写和修改")]),t._v(" "),n("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})]),t._v(" "),n("input",{ref:"fileInput",staticClass:"el-upload__input",attrs:{type:"file"},on:{change:t.handleFileChange}})],1),t._v(" "),n("div",{staticStyle:{width:"800px",height:"500px"}},[n("code-mirror",{ref:"codeMirror",attrs:{options:t.cmJSOption},model:{value:t.tempItem.content,callback:function(e){t.$set(t.tempItem,"content",e)},expression:"tempItem.content"}})],1)]),t._v(" "),n("el-form-item",{attrs:{label:t.i18n("plugin.config")}},[t.isShow?n("span",[t._v(t._s(t.tempItem.cfg))]):n("el-input",{staticStyle:{width:"800px"},attrs:{type:"textarea",rows:3},model:{value:t.tempItem.cfg,callback:function(e){t.$set(t.tempItem,"cfg",e)},expression:"tempItem.cfg"}})],1),t._v(" "),n("div",{staticStyle:{"margin-left":"70px"}},[n("el-button",{on:{click:t.goList}},[t._v(t._s(t.i18n("btn.return")))]),t._v(" "),t.isShow?n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.goEdit()}}},[t._v(t._s(t.i18n("btn.edit")))]):t._e(),t._v(" "),t.isCreate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.createItem("dataForm")}}},[t._v(t._s(t.i18n("btn.submit"))+"\n            ")]):t.isUpdate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.updateItem("dataForm")}}},[t._v(t._s(t.i18n("btn.submit"))+"\n            ")]):t._e()],1)],1)],1)},r=[],a=(n("6762"),n("a481"),n("9448")),o=n("2435"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-codemirror",class:{merge:t.merge}},[t.merge?n("div",{ref:"mergeview"}):n("textarea",{ref:"textarea",attrs:{name:t.name,placeholder:t.placeholder}})])},c=[],l=(n("ac6a"),n("28a5"),n("56b3")),u=n.n(l),m=(n("a7be"),window.CodeMirror||u.a);m.extendMode("javascript",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(t,e,n,i){return this.jsonMode?/^[\[,{]$/.test(e)||/^}/.test(n):(";"!=e||!i.lexical||")"!=i.lexical.type)&&(/^[;{}]$/.test(e)&&!/^;/.test(n))}}),m.defineExtension("autoFormatRange",function(t,e){var n=this,i=n.getMode(),r=n.getRange(t,e).split("\n"),a=m.copyState(i,n.getTokenAt(t).state),o=n.getOption("tabSize"),s="",c=0,l=0==t.ch;function u(){s+="\n",l=!0,++c}for(var p=0;p<r.length;++p){var h=new m.StringStream(r[p],o);while(!h.eol()){var d=m.innerMode(i,a),f=i.token(h,a),g=h.current();h.start=h.pos,l&&!/\S/.test(g)||(s+=g,l=!1),!l&&d.mode.newlineAfterToken&&d.mode.newlineAfterToken(f,g,h.string.slice(h.pos)||r[p+1]||"",d.state)&&u()}!h.pos&&i.blankLine&&i.blankLine(a),l||u()}n.operation(function(){n.replaceRange(s,t,e);for(var i=t.line+1,r=t.line+c;i<=r;++i)n.indentLine(i,"smart");n.setSelection(t,n.getCursor(!1))})});var p={name:"CodeMirror",data:function(){return{content:"",codemirror:null,cminstance:null}},props:{code:String,value:String,marker:Function,unseenLines:Array,name:{type:String,default:"codemirror"},placeholder:{type:String,default:""},merge:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{}}},globalEvents:{type:Array,default:function(){return[]}}},watch:{options:{deep:!0,handler:function(t){for(var e in t)this.cminstance.setOption(e,t[e])}},merge:function(){this.$nextTick(this.switchMerge)},code:function(t){this.handerCodeChange(t)},value:function(t){this.handerCodeChange(t)}},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.merge?(this.codemirror=m.MergeView(this.$refs.mergeview,e),this.cminstance=this.codemirror.edit):(this.codemirror=m.fromTextArea(this.$refs.textarea,e),this.cminstance=this.codemirror,this.cminstance.setValue(this.code||this.value||this.content)),this.cminstance.on("change",function(e){t.content=e.getValue(),t.$emit&&t.$emit("input",t.content)});var n={};["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"].concat(this.events).concat(this.globalEvents).filter(function(t){return!n[t]&&(n[t]=!0)}).forEach(function(e){t.cminstance.on(e,function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];t.$emit.apply(t,[e].concat(i));var a=e.replace(/([A-Z])/g,"-$1").toLowerCase();a!==e&&t.$emit.apply(t,[a].concat(i))})});this.$emit("ready",this.codemirror),this.unseenLineMarkers(),this.refresh()},refresh:function(){var t=this;this.$nextTick(function(){t.cminstance.refresh()})},destroy:function(){var t=this.cminstance.doc.cm.getWrapperElement();t&&t.remove&&t.remove()},handerCodeChange:function(t){var e=this.cminstance.getValue();if(t!==e){var n=this.cminstance.getScrollInfo();this.cminstance.setValue(t),this.content=t,this.cminstance.scrollTo(n.left,n.top)}this.unseenLineMarkers()},unseenLineMarkers:function(){var t=this;void 0!==this.unseenLines&&void 0!==this.marker&&this.unseenLines.forEach(function(e){var n=t.cminstance.lineInfo(e);t.cminstance.setGutterMarker(e,"breakpoints",n.gutterMarkers?null:t.marker())})},switchMerge:function(){var t=this.cminstance.doc.history,e=this.cminstance.doc.cleanGeneration;this.options.value=this.cminstance.getValue(),this.destroy(),this.initialize(),this.cminstance.doc.history=t,this.cminstance.doc.cleanGeneration=e}},mounted:function(){this.initialize()},beforeDestroy:function(){this.destroy()}},h=p,d=(n("26ed"),n("2877")),f=Object(d["a"])(h,s,c,!1,null,null,null),g=f.exports,v=n("ed08"),b=n("5013");n("f9d4"),n("7a7a"),n("31c5"),n("9948"),n("b933"),n("9b74"),n("f6b6"),n("3c98"),n("9c7b"),n("715d"),n("23de"),n("4ba6"),n("8c33"),n("7289"),n("2aed"),n("d72f"),n("0b6c"),n("9a48"),n("697e"),n("aedd"),n("164b"),n("4895"),n("cbc8"),n("8d70"),n("9f09"),n("a2c1");function y(){return{id:void 0,name:"",author:"",email:"",updateAt:void 0,version:void 0,type:o["p"].javaScript,content:"",cfg:""}}function _(){return{mode:"text/javascript",tabSize:4,styleActiveLine:!1,lineNumbers:!0,styleSelectedText:!1,line:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},hintOptions:{tables:{users:["name","score","birthDate"],countries:["name","population","size"]}},keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},readOnly:""}}var w={name:"PluginForm",props:{showType:{type:String,default:o["d"].create},editItem:{type:Object}},data:function(){return{loading:!0,submitting:!1,rules:{name:[{required:!0,message:"请填写名称",trigger:"change"}],version:[{required:!0,message:"请填写版本",trigger:"change"}],content:[{required:!0,message:"请填写版本",trigger:"change"}]},tempItem:y(),pluginTypeConstant:o["o"],cmJSOption:_()}},mixins:[b["a"]],components:{CodeMirror:g},watch:{editItem:function(t,e){var n=t;n.content=Object(v["b"])(n.content||""),n.cfg=Object(v["b"])(n.cfg||""),this.tempItem=Object(v["e"])(this.tempItem,Object(v["a"])(n)),this.loading=!1,this.submitting=!1}},computed:{isShow:function(){return this._isShow()},isCreate:function(){return this._isCreate()},isUpdate:function(){return this._isUpdate()}},created:function(){this.init()},methods:{init:function(){this._isShow()?(this.rules={},this.cmJSOption.readOnly="nocursor"):this._isCreate()&&(this.loading=!1)},goList:function(){this.$router.replace({path:"/plugin"}),this.$destroy()},goEdit:function(){this.$router.push({path:"/plugin/edit",query:{id:this.tempItem.id}})},createItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doCreateItem()})},_doCreateItem:function(){var t=this,e=Object(v["a"])(this.tempItem);e.content=Object(v["c"])(e.content||""),e.cfg=Object(v["c"])(e.cfg||""),this.submitting=!0,a["f"](e).then(function(){t.$message({type:"success",message:"创建成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},updateItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doUpdateItem()})},_doUpdateItem:function(){var t=this,e=Object(v["a"])(this.tempItem);this.submitting=!0,e.content=Object(v["c"])(e.content||""),e.cfg=Object(v["c"])(e.cfg||""),a["f"](e).then(function(){t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},handleSelectFile:function(){this.$refs.fileInput.value=null,this.$refs.fileInput.click()},handleFileChange:function(t){var e=t.target.files;if(e&&0!==e.length){var n=this,i=e[0],r=["text/javascript","text/plain"];if(!r.includes(i.type))return n._showMessage("暂不支持解析该类型的文件"),!1;Object(v["f"])(i).then(function(t){n.$set(n.tempItem,"content",t)}).catch(function(t){n._showMessage(t||"无法读取文件内容")})}},formatContent:function(){var t=this.$refs.codeMirror.$data.codemirror;t.execCommand("selectAll"),this.$nextTick(function(){t&&t.autoFormatRange&&t.autoFormatRange(t.getCursor(!0),t.getCursor(!1))})},_showMessage:function(t){this.$message({type:"warning",message:t})},_isUpdate:function(){return this.showType===o["d"].update},_isShow:function(){return this.showType===o["d"].show},_isCreate:function(){return this.showType===o["d"].create}}},I=w,C=Object(d["a"])(I,i,r,!1,null,"4ec602c8",null);e["a"]=C.exports},"26ed":function(t,e,n){"use strict";var i=n("c5f8"),r=n.n(i);r.a},"4b57":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("plugin-form",{attrs:{"show-type":"create"}})],1)},r=[],a=(n("7f7f"),n("0469")),o="pluginNew",s={name:o,watch:{$route:function(t,e){t.name!=o&&this.$destroy()}},components:{PluginForm:a["a"]}},c=s,l=n("2877"),u=Object(l["a"])(c,i,r,!1,null,"f7a8a5a6",null);e["default"]=u.exports},5013:function(t,e,n){"use strict";var i=n("ed08");e["a"]={methods:{i18n:i["i"]}}},9448:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"f",function(){return l}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return m}),n.d(e,"e",function(){return p});var i=n("b775"),r=n("2435"),a="/plugins";function o(t){return Object(i["a"])({url:a,method:"GET",params:t})}function s(){return new Promise(function(t,e){var n=[],i="",a=r["c"];function s(r){o(r).then(function(e){e=e||[];var r=e.length;if(r>0){if(n=n.concat(e),i=e[r-1]||{},i.id){var o={after:i.id,limit:a};s(o)}}else t(n)}).catch(function(){e()})}var c={after:"",limit:a};s(c)})}function c(t){return Object(i["a"])({url:a+"/"+t,method:"GET"})}function l(t){return Object(i["a"])({url:a,method:"PUT",data:t})}function u(t){return Object(i["a"])({url:a+"/"+t,method:"DELETE"})}function m(){return Object(i["a"])({url:a+"/apply",method:"GET"})}function p(t){return Object(i["a"])({url:a+"/apply",method:"PUT",data:t})}},b775:function(t,e,n){"use strict";var i=n("bc3a"),r=n.n(i),a=n("5c96"),o="",s="",c=s+"/v1",l=r.a.create({baseURL:o+c,timeout:6e4});l.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),l.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(a["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(a["Message"])({message:t.response&&t.response.data&&t.response.data.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=l},c5f8:function(t,e,n){}}]);