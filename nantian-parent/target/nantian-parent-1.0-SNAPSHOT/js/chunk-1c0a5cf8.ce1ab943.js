(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c0a5cf8"],{"1ef4":function(e,a,t){"use strict";var l=t("d7bf"),s=t.n(l);s.a},d400:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-friend"}),e._v(" 员工管理")]),t("el-breadcrumb-item",[e._v(" 查看详情")])],1)],1),t("div",{staticClass:"container"},[t("h5",{staticClass:"mgb10"},[e._v("基本信息")]),t("el-form",{attrs:{inline:!0,model:e.baseInfo,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"周吴"},model:{value:e.baseInfo.name,callback:function(a){e.$set(e.baseInfo,"name",a)},expression:"baseInfo.name"}})],1),t("el-form-item",{attrs:{label:"身份证号"}},[t("el-input",{attrs:{placeholder:"110987199001026666"},model:{value:e.baseInfo.idno,callback:function(a){e.$set(e.baseInfo,"idno",a)},expression:"baseInfo.idno"}})],1),t("el-form-item",{attrs:{label:"别名"}},[t("el-input",{attrs:{placeholder:"周吴001"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.sex,callback:function(a){e.$set(e.baseInfo,"sex",a)},expression:"baseInfo.sex"}},[t("el-option",{attrs:{label:"男",value:"1"}}),t("el-option",{attrs:{label:"女",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"生日"}},[t("el-input",{attrs:{placeholder:"1990-01-02"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"民族"}},[t("el-input",{attrs:{placeholder:"汉族"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"籍贯"}},[t("el-input",{attrs:{placeholder:"北京市海淀区上地"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"婚姻状况"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.maritalStatus,callback:function(a){e.$set(e.baseInfo,"maritalStatus",a)},expression:"baseInfo.maritalStatus"}},[t("el-option",{attrs:{label:"已婚",value:"1"}}),t("el-option",{attrs:{label:"未婚",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{placeholder:"zhouwu@126.com"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"手机号码"}},[t("el-input",{attrs:{placeholder:"18600007666"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"学历"}},[t("el-select",{staticStyle:{width:"200px"},model:{value:e.baseInfo.educationbg,callback:function(a){e.$set(e.baseInfo,"educationbg",a)},expression:"baseInfo.educationbg"}},[t("el-option",{attrs:{label:"博士",value:"1"}}),t("el-option",{attrs:{label:"硕士",value:"2"}}),t("el-option",{attrs:{label:"本科",value:"3"}}),t("el-option",{attrs:{label:"大专",value:"4"}})],1)],1),t("el-form-item",{attrs:{label:"院校"}},[t("el-input",{attrs:{placeholder:"北京大学"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"专业"}},[t("el-input",{attrs:{placeholder:"计算机科学与技术"},model:{value:e.baseInfo.alias,callback:function(a){e.$set(e.baseInfo,"alias",a)},expression:"baseInfo.alias"}})],1),t("el-form-item",{attrs:{label:"毕业日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date1,callback:function(a){e.$set(e.baseInfo,"date1",a)},expression:"baseInfo.date1"}})],1)],1),t("h5",{staticClass:"mgb10"},[e._v("部门信息")]),t("el-form",{attrs:{inline:!0,model:e.deptInfo,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"所属部门"}},[t("el-input",{attrs:{placeholder:"软件资源二中心"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"职位"}},[t("el-input",{attrs:{placeholder:"JAVA开发"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"状态"}},[t("el-input",{attrs:{placeholder:"在职"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"入司日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date2,callback:function(a){e.$set(e.baseInfo,"date2",a)},expression:"baseInfo.date2"}})],1),t("el-form-item",{attrs:{label:"离司日期"}},[t("el-date-picker",{staticClass:"width-control",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.date3,callback:function(a){e.$set(e.baseInfo,"date3",a)},expression:"baseInfo.date3"}})],1),t("el-form-item",{attrs:{label:"部门经理"}},[t("el-input",{attrs:{placeholder:"赵强"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1)],1),t("h5",{staticClass:"mgb10"},[e._v("项目信息")]),t("el-form",{attrs:{inline:!0,model:e.deptInfo,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"所属项目"}},[t("el-input",{attrs:{placeholder:"中国人寿"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"项目部门"}},[t("el-input",{attrs:{placeholder:"研发中心一部一室"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"技术等级"}},[t("el-input",{attrs:{placeholder:"中级"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"在场类型"}},[t("el-input",{attrs:{placeholder:"在场"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1),t("el-form-item",{attrs:{label:"项目地点"}},[t("el-input",{attrs:{placeholder:"北京市海淀区景天路"},model:{value:e.deptInfo.name,callback:function(a){e.$set(e.deptInfo,"name",a)},expression:"deptInfo.name"}})],1)],1),t("el-button",{attrs:{type:"primary"}},[e._v("保存")]),t("el-button",{attrs:{type:"success"}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger"},on:{click:e.cancel}},[e._v("取消")])],1)])},s=[],n=(t("d582"),t("98f3"),t("0b30"),{data:function(){return{baseInfo:{sex:"1",maritalStatus:"2"},deptInfo:{},projectInfo:{}}},methods:{cancel:function(){this.$router.go(-1)}}}),o=n,i=(t("1ef4"),t("b0be")),r=Object(i["a"])(o,l,s,!1,null,"7688278c",null);r.options.__file="DetailInfo.vue";a["default"]=r.exports},d7bf:function(e,a,t){}}]);