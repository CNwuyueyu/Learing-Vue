webpackJsonp([13],{DShp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gyMJ"),o=a("BTaQ"),i={components:{Button:o.Button,Table:o.Table,Page:o.Page,Form:o.Form,FormItem:o.FormItem,Input:o.Input,Modal:o.Modal,Icon:o.Icon},data:function(){var t=this;return{loading:!0,modal:!1,modal_loading:!1,modal_temp:{},columns:[{title:"文章名称",key:"title"},{title:"分类",key:"category",render:function(t,e){return t("span",e.row.category.name)}},{title:"阅读量",key:"view",width:100,align:"center"},{title:"发布时间",key:"create_time",width:200,align:"center",render:function(t,e){return e.row.create_time?t("span",new Date(1e3*e.row.create_time).toLocaleString()):""}},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small",icon:"edit"},style:{marginRight:"5px"},on:{click:function(){t.$router.push({path:"/content/save",query:{slug:a.row.slug}})}}}),e("Button",{props:{type:"error",size:"small",icon:"trash-a"},on:{click:function(){t.modal=!0,t.modal_temp={id:a.row.id,index:a.index}}}})])}}],data:{},map:{page:1,key:"",all:1,pageSize:10,contentType:"post"}}},methods:{getList:function(){var t=this;this.loading=!0,n.d.getList(this.map).then(function(e){t.data=e.data,t.loading=!1})},del:function(){var t=this;if(!this.modal_temp.id)return!1;n.d.delete(this.modal_temp.id).then(function(e){t.modal=!1,0==e.errno?(t.getList(),t.$Message.success(e.errmsg)):t.$Message.error(e.errmsg)})},changePage:function(t){this.map.page=t,this.getList()},add:function(){this.$router.push("/content/save")}},mounted:function(){this.getList()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form",{ref:"formInline",attrs:{model:t.map,inline:""}},[a("div",{staticClass:"search"},[a("Button",{staticClass:"fl",attrs:{type:"success",icon:"plus"},on:{click:t.add}},[t._v("发布文章")]),t._v(" "),a("FormItem",[a("Input",{attrs:{type:"text",placeholder:"关键字"},model:{value:t.map.key,callback:function(e){t.$set(t.map,"key",e)},expression:"map.key"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("查询")])],1)],1)]),t._v(" "),a("Table",{attrs:{border:"",loading:t.loading,columns:t.columns,data:t.data.data}}),t._v(" "),a("Page",{staticClass:"page",attrs:{total:t.data.count,"page-size":t.data.pagesize,"show-total":""},on:{"on-change":t.changePage}}),t._v(" "),a("Modal",{attrs:{width:"360"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),a("span",[t._v("删除确认")])],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("删除后数据将无法找回，是否继续删除？")])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",loading:t.modal_loading},on:{click:t.del}},[t._v("确认删除")])],1)])],1)},staticRenderFns:[]},l=a("VU/8")(i,r,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=13.509c60b02980c8a0329c.js.map