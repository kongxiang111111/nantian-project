(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f354716"],{1706:function(e,l,t){"use strict";var i=t("6ed0"),o=t.n(i);o.a},"6ed0":function(e,l,t){},e67b:function(e,l,t){"use strict";t.r(l);var i=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"table"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-settings"}),e._v(" 系统管理")]),t("el-breadcrumb-item",[e._v(" 角色管理")])],1)],1),t("div",{staticClass:"container"},[t("el-button",{attrs:{type:"danger"},on:{click:e.addRole}},[e._v("添加角色")]),t("el-table",{staticClass:"table",staticStyle:{"margin-top":"10px"},attrs:{data:e.roleData,border:""}},[t("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),t("el-table-column",{attrs:{prop:"roleLevel",label:"级别"}}),t("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){e.handleEdit(l.$index,l.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.handleDelete(l.$index,l.row)}}},[e._v("删除")])]}}])})],1),t("el-dialog",{attrs:{title:"添加角色",visible:e.dialogFormVisible},on:{"update:visible":function(l){e.dialogFormVisible=l}}},[t("el-form",{attrs:{model:e.formInline,"label-width":e.formLabelWidth}},[t("el-form-item",{attrs:{label:"角色名称"}},[t("el-input",{model:{value:e.formInline.name,callback:function(l){e.$set(e.formInline,"name",l)},expression:"formInline.name"}})],1),t("el-form-item",{attrs:{label:"角色级别"}},[t("el-input",{model:{value:e.formInline.level,callback:function(l){e.$set(e.formInline,"level",l)},expression:"formInline.level"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(l){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)])},o=[],n=(t("d4aa"),{name:"basetable",data:function(){return{date:"",roleData:[{roleName:"超级管理员",roleLevel:"01"},{roleName:"系统管理员",roleLevel:"02"},{roleName:"普通用户",roleLevel:"03"}],formInline:{name:"",level:""},dialogFormVisible:!1,formLabelWidth:"120px"}},methods:{handleEdit:function(e,l){this.dialogFormVisible=!0,this.formInline.name=l.roleName,this.formInline.level=l.roleLevel},addRole:function(){this.dialogFormVisible=!0,this.formInline.name="",this.formInline.level=""}}}),a=n,r=(t("1706"),t("b0be")),s=Object(r["a"])(a,i,o,!1,null,"21846fc6",null);s.options.__file="Roles.vue";l["default"]=s.exports}}]);