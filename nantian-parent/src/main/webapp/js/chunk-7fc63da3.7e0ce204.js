(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fc63da3"],{"1b3c":function(t,i,s){var h;
/*!
 * sChart JavaScript Library v2.0.1
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
/*!
 * sChart JavaScript Library v2.0.1
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
(function(a,e){h=function(){return e(a)}.call(i,s,i,t),void 0===h||(t.exports=h)})(this,function(t){"use strict";function i(t,i,s,h){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.dpi=window.devicePixelRatio||1,this.type=i,this.data=s,this.dataLength=this.data.length,this.showValue=!0,this.autoWidth=!1,this.width=this.canvas.width*this.dpi,this.height=this.canvas.height*this.dpi,this.topPadding=50*this.dpi,this.leftPadding=50*this.dpi,this.rightPadding=0*this.dpi,this.bottomPadding=50*this.dpi,this.yEqual=5,this.yLength=0,this.xLength=0,this.yFictitious=0,this.yRatio=0,this.bgColor="#ffffff",this.fillColor="#1E9FFF",this.axisColor="#666666",this.contentColor="#eeeeee",this.titleColor="#000000",this.title="",this.titlePosition="top",this.radius=100*this.dpi,this.innerRadius=70*this.dpi,this.colorList=["#1E9FFF","#13CE66","#F7BA2A","#FF4949","#72f6ff","#199475","#e08031","#726dd1"],this.legendColor="#000000",this.legendTop=40*this.dpi,this.totalValue=this.getTotalValue(),this.init(h)}return i.prototype={init:function(t){if(0===this.dataLength)return!1;if(t){var i=["topPadding","leftPadding","rightPadding","bottomPadding","radius","innerRadius","legendTop"];for(var s in t)"colorList"===s&&Array.isArray(t[s])?this[s]=t[s].concat(this[s]):i.indexOf(s)>-1?this[s]=t[s]*this.dpi:this[s]=t[s]}t.autoWidth?(this.width=this.canvas.width=this.canvas.parentNode.offsetWidth*this.dpi,this.height=this.canvas.height=this.canvas.parentNode.offsetHeight*this.dpi,this.canvas.setAttribute("style","width:"+this.canvas.parentNode.offsetWidth+"px;height:"+this.canvas.parentNode.offsetHeight+"px;")):(this.canvas.setAttribute("style","width:"+this.canvas.width+"px;height:"+this.canvas.height+"px;"),this.canvas.width*=this.dpi,this.canvas.height*=this.dpi),"bar"===this.type||"line"===this.type?(this.yLength=Math.floor((this.height-this.topPadding-this.bottomPadding-10)/this.yEqual),this.xLength=Math.floor((this.width-this.leftPadding-this.rightPadding-10)/this.dataLength),this.yFictitious=this.getYFictitious(this.data),this.yRatio=this.yLength/this.yFictitious,this.drawBarUpdate()):this.drawPieUpdate()},drawBarUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawAxis(),this.drawPoint(),this.drawTitle(),this.drawBarChart()},drawPieUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawLegend(),this.drawTitle(),this.drawPieChart()},drawBarChart:function(){this.ctx.fillStyle=this.fillColor,this.ctx.strokeStyle=this.fillColor;for(var t=0;t<this.dataLength;t++)this.data[t].left=this.leftPadding+this.xLength*(t+.25),this.data[t].top=this.height-this.bottomPadding-this.data[t].value*this.yRatio,this.data[t].right=this.leftPadding+this.xLength*(t+.75),this.data[t].bottom=this.height-this.bottomPadding,"line"===this.type?(this.ctx.beginPath(),this.ctx.arc(this.data[t].left+this.xLength/4,this.data[t].top,2,0,2*Math.PI,!0),this.ctx.fill(),0!==t&&(this.ctx.moveTo(this.data[t].left+this.xLength/4,this.data[t].top),this.ctx.lineTo(this.data[t-1].left+this.xLength/4,this.data[t-1].top)),this.ctx.stroke()):"bar"===this.type&&this.ctx.fillRect(this.data[t].left,this.data[t].top,this.data[t].right-this.data[t].left,this.data[t].bottom-this.data[t].top),this.showValue&&(this.ctx.font=12*this.dpi+"px Arial",this.ctx.fillText(this.data[t].value,this.data[t].left+this.xLength/4,this.data[t].top-5))},drawPieChart:function(){for(var t=this.width/2,i=this.height/2,s=0,h=0,a=0;a<this.dataLength;a++)this.ctx.beginPath(),this.ctx.fillStyle=this.colorList[a],this.ctx.moveTo(t,i),this.data[a].start=0===a?-Math.PI/2:this.data[a-1].end,this.data[a].end=this.data[a].start+this.data[a].value/this.totalValue*2*Math.PI,this.ctx.arc(t,i,this.radius,this.data[a].start,this.data[a].end),this.ctx.closePath(),this.ctx.fill(),this.data[a].middle=(this.data[a].start+this.data[a].end)/2,s=Math.ceil(Math.abs(this.radius*Math.cos(this.data[a].middle))),h=Math.floor(Math.abs(this.radius*Math.sin(this.data[a].middle))),this.ctx.strokeStyle=this.colorList[a],this.showValue&&(this.data[a].middle<=0?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i-h),this.ctx.lineTo(t+s+10,i-h-10),this.ctx.moveTo(t+s+10,i-h-10),this.ctx.lineTo(t+s+this.radius/2,i-h-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i-h-5)):this.data[a].middle>0&&this.data[a].middle<=Math.PI/2?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i+h),this.ctx.lineTo(t+s+10,i+h+10),this.ctx.moveTo(t+s+10,i+h+10),this.ctx.lineTo(t+s+this.radius/2,i+h+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i+h+15)):this.data[a].middle>Math.PI/2&&this.data[a].middle<Math.PI?(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i+h),this.ctx.lineTo(t-s-10,i+h+10),this.ctx.moveTo(t-s-10,i+h+10),this.ctx.lineTo(t-s-this.radius/2,i+h+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i+h+15)):(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i-h),this.ctx.lineTo(t-s-10,i-h-10),this.ctx.moveTo(t-s-10,i-h-10),this.ctx.lineTo(t-s-this.radius/2,i-h-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i-h-5)));"ring"===this.type&&(this.ctx.beginPath(),this.ctx.fillStyle=this.bgColor,this.ctx.arc(t,i,this.innerRadius,0,2*Math.PI),this.ctx.fill())},drawAxis:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+.5,this.topPadding+.5),this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding+.5),this.ctx.stroke()},drawPoint:function(){this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="center",this.ctx.fillStyle=this.axisColor;for(var t=0;t<this.dataLength;t++){var i=this.data[t].name,s=this.xLength*(t+1);this.ctx.moveTo(this.leftPadding+s+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+s+.5,this.height-this.bottomPadding+5.5),this.ctx.fillText(i,this.leftPadding+s-this.xLength/2,this.height-this.bottomPadding+15*this.dpi)}this.ctx.stroke(),this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="right",this.ctx.fillStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding+.5),this.ctx.fillText(0,this.leftPadding-10,this.height-this.bottomPadding+5);for(t=0;t<this.yEqual;t++){var h=this.yFictitious*(t+1),a=this.yLength*(t+1);this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-a+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding-a+.5),this.ctx.stroke(),this.ctx.fillText(h,this.leftPadding-10,this.height-this.bottomPadding-a+5),this.ctx.beginPath(),this.ctx.strokeStyle=this.contentColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-a+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding-a+.5),this.ctx.stroke()}},drawTitle:function(){this.title&&(this.ctx.beginPath(),this.ctx.textAlign="center",this.ctx.fillStyle=this.titleColor,this.ctx.font=16*this.dpi+"px Microsoft YaHei","bottom"===this.titlePosition&&this.bottomPadding>=40?this.ctx.fillText(this.title,this.width/2,this.height-5):this.ctx.fillText(this.title,this.width/2,this.topPadding/2+5))},drawLegend:function(){for(var t=0;t<this.dataLength;t++)this.ctx.fillStyle=this.colorList[t],this.ctx.fillRect(10,this.legendTop+15*t*this.dpi,20,11),this.ctx.fillStyle=this.legendColor,this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="left",this.ctx.fillText(this.data[t].name,35,this.legendTop+10+15*t*this.dpi)},getYFictitious:function(t){var i=t.slice(0);i.sort(function(t,i){return-(t.value-i.value)});var s=Math.ceil(i[0].value/this.yEqual),h=s.toString().length-1;return h=h>2?2:h,Math.ceil(s/Math.pow(10,h))*Math.pow(10,h)},getTotalValue:function(){for(var t=0,i=0;i<this.dataLength;i++)t+=this.data[i].value;return t}},i})},6812:function(t,i,s){},"94eb":function(t,i,s){"use strict";var h=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("canvas",{attrs:{id:t.canvasId}})])},a=[],e=(s("a1bf"),s("e5df"),s("aa7b"),s("b328"),s("1b3c")),o=s.n(e),d={data:function(){return{schart:null,opt:{}}},props:{canvasId:{type:String,default:""},type:{type:String,default:"bar"},data:{type:Array,default:[]},options:{type:Object,required:!1}},mounted:function(){this.renderChart()},methods:{renderChart:function(){this.schart=null,this.opt=this.options,this.width&&this.height||(this.opt?this.opt["autoWidth"]=!0:this.opt={autoWidth:!0}),this.schart=new o.a(this.canvasId,this.type,this.data,this.opt)}},watch:{data:function(){this.renderChart()},options:function(){this.renderChart()},type:function(){this.renderChart()}}},l=d,n=s("5be0"),r=Object(n["a"])(l,h,a,!1,null,null,null);i["a"]=r.exports},"9db4":function(t,i,s){"use strict";var h=s("6812"),a=s.n(h);a.a},ee23:function(t,i,s){"use strict";s.r(i);var h=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-lx-recharge"}),t._v(" 结算管理")]),s("el-breadcrumb-item",[t._v(" 结算统计")])],1)],1),s("div",{staticClass:"container"},[s("el-form",{attrs:{inline:!0,model:t.form,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"客户类别"}},[s("el-select",{model:{value:t.form.custtype,callback:function(i){t.$set(t.form,"custtype",i)},expression:"form.custtype"}},[s("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),s("el-option",{attrs:{label:"中国人寿",value:"zgrs"}})],1)],1),s("el-form-item",{attrs:{label:"客户名称"}},[s("el-select",{model:{value:t.form.proname,callback:function(i){t.$set(t.form,"proname",i)},expression:"form.proname"}},[s("el-option",{attrs:{label:"中国银行etc项目",value:"1"}}),s("el-option",{attrs:{label:"中国银行合肥分中心",value:"2"}})],1)],1),s("el-form-item",{attrs:{label:"选择日期"}},[s("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"开始日期"},model:{value:t.form.startDate,callback:function(i){t.$set(t.form,"startDate",i)},expression:"form.startDate"}}),t._v(" -\r\n                "),s("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"结束日期"},model:{value:t.form.endDate,callback:function(i){t.$set(t.form,"endDate",i)},expression:"form.endDate"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"}},[t._v("查询")])],1)],1),s("div",{staticClass:"schart-box"},[s("schart",{staticClass:"schart",attrs:{canvasId:"bar",data:t.data1,type:"bar",options:t.options1}})],1),s("div",{staticClass:"schart-box"},[s("schart",{staticClass:"schart",attrs:{canvasId:"ring",data:t.data2,type:"ring",options:t.options4}})],1)],1)])},a=[],e=s("94eb"),o={data:function(){return{form:{proname:"",startDate:"",endDate:""},data1:[{name:"2012",value:1141},{name:"2013",value:1499},{name:"2014",value:2260},{name:"2015",value:1170},{name:"2016",value:970},{name:"2017",value:1450},{name:"2018",value:2800}],data2:[{name:"JAVA开发",value:100},{name:"前端开发",value:20},{name:"软件测试",value:30},{name:"需求分析",value:10}],options1:{title:"中国银行团队结算金额统计(万元)",autoWidth:!0,showValue:!1,fillColor:"#409EFF",contentColor:"rgba(46,199,201,0.3)",yEqual:7},options4:{title:"中国银行团队人数统计(人)",legendColor:"#444",radius:120,innerRadius:80}}},components:{Schart:e["a"]}},d=o,l=(s("9db4"),s("5be0")),n=Object(l["a"])(d,h,a,!1,null,"30cb9783",null);i["default"]=n.exports}}]);