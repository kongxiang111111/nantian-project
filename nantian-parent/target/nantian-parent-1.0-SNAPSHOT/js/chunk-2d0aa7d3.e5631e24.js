(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa7d3"],{"10db":function(t,a,l){"use strict";l.r(a);var e=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-lx-remind"}),t._v(" 员工管理")]),l("el-breadcrumb-item",[t._v(" 别名管理")])],1)],1),l("div",{staticClass:"container"},[l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{type:"input",placeholder:"请输入"}})],1),l("el-form-item",{attrs:{label:"身份证号"}},[l("el-input",{attrs:{type:"input",placeholder:"请输入"}})],1),l("el-form-item",{attrs:{label:"客户类型"}},[l("el-select",{model:{value:t.form.group,callback:function(a){t.$set(t.form,"group",a)},expression:"form.group"}},[l("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),l("el-option",{attrs:{label:"中国人寿",value:"zgrs"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[t._v("查询")]),l("el-button",{attrs:{type:"danger"},on:{click:t.addAlias}},[t._v("新增别名")])],1)],1),l("el-table",{staticClass:"table",attrs:{data:t.aliasData,border:"",height:"260"}},[l("el-table-column",{attrs:{prop:"name",label:"员工姓名"}}),l("el-table-column",{attrs:{prop:"idno",label:"身份证号"}}),l("el-table-column",{attrs:{prop:"alias",label:"别名"}}),l("el-table-column",{attrs:{prop:"group",label:"项目名称"}}),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){return t.editAlias(a.row)}}},[t._v("编辑")]),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){return t.delAlias(a.row)}}},[t._v("删除")])]}}])})],1)],1),l("el-dialog",{attrs:{title:"添加别名",visible:t.dialogFormVisible},on:{"update:visible":function(a){t.dialogFormVisible=a}}},[l("el-form",{staticStyle:{width:"600px"},attrs:{model:t.aliasAddForm,"label-width":t.formLabelWidth}},[l("el-form-item",{attrs:{label:"项目名称"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.aliasAddForm.group,callback:function(a){t.$set(t.aliasAddForm,"group",a)},expression:"aliasAddForm.group"}},[l("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),l("el-option",{attrs:{label:"中国人寿",value:"zgrs"}}),l("el-option",{attrs:{label:"请假系统",value:"qjxt"}})],1)],1),l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{disabled:t.inputDisable},model:{value:t.aliasAddForm.name,callback:function(a){t.$set(t.aliasAddForm,"name",a)},expression:"aliasAddForm.name"}})],1),l("el-form-item",{attrs:{label:"身份证号"}},[l("el-input",{attrs:{disabled:t.inputDisable},model:{value:t.aliasAddForm.idno,callback:function(a){t.$set(t.aliasAddForm,"idno",a)},expression:"aliasAddForm.idno"}})],1),l("el-form-item",{attrs:{label:"别名"}},[l("el-input",{model:{value:t.aliasAddForm.alias,callback:function(a){t.$set(t.aliasAddForm,"alias",a)},expression:"aliasAddForm.alias"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)},i=[],o=(l("58b5"),{data:function(){return{form:{},aliasAddForm:{},formLabelWidth:"120px",dialogFormVisible:!1,aliasData:[{name:"王帅",idno:"130634198810111666",alias:"王帅001",group:"中国人寿"},{name:"王帅",idno:"130634198810111666",alias:"王帅BOC3",group:"请假系统"}],inputDisable:!1}},methods:{addAlias:function(){this.dialogFormVisible=!0,this.inputDisable=!1,this.aliasAddForm={}},editAlias:function(t){this.inputDisable=!0;var a=t.name,l=t.idno,e=t.alias,i=t.group;this.aliasAddForm.name=a,this.aliasAddForm.idno=l,this.aliasAddForm.alias=e,this.aliasAddForm.group=i,this.dialogFormVisible=!0},delAlias:function(t){this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(){})}}}),s=o,r=l("5be0"),n=Object(r["a"])(s,e,i,!1,null,"6f42a5c8",null);a["default"]=n.exports}}]);