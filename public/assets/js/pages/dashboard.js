!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=29)}({29:function(t,e,r){t.exports=r(30)},30:function(t,e){!function(t){"use strict";var e=function(){this.$body=t("body"),this.$chatInput=t(".chat-input"),this.$chatList=t(".conversation-list"),this.$chatSendBtn=t(".chat-send"),this.$chatForm=t("#chat-form")};e.prototype.save=function(){var e=this.$chatInput.val(),r=moment().format("h:mm");return""==e?(this.$chatInput.focus(),!1):(t('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-7.jpg" alt="male"><i>'+r+'</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Shreyu</i><p>'+e+"</p></div></div></li>").appendTo(".conversation-list"),this.$chatInput.focus(),this.$chatList.animate({scrollTop:this.$chatList.prop("scrollHeight")},1e3),!0)},e.prototype.init=function(){var t=this;t.$chatInput.keypress((function(e){if(13==e.which)return t.save(),!1})),t.$chatForm.on("submit",(function(e){return e.preventDefault(),t.save(),t.$chatForm.removeClass("was-validated"),t.$chatInput.val(""),!1}))},t.ChatApp=new e,t.ChatApp.Constructor=e}(window.jQuery),function(t){"use strict";var e=function(){};e.prototype.initCharts=function(){window.Apex={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{left:0,right:0}},colors:["#5369f8","#43d39e","#f77e53","#ffbe0b"],tooltip:{theme:"dark",x:{show:!1}}};var e={chart:{type:"area",height:45,width:90,sparkline:{enabled:!0}},series:[{data:[25,66,41,85,63,25,44,12,36,9,54]}],stroke:{width:2,curve:"smooth"},markers:{size:0},colors:["#727cf5"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[45,100]}}};new ApexCharts(document.querySelector("#today-revenue-chart"),e).render(),new ApexCharts(document.querySelector("#today-product-sold-chart"),t.extend({},e,{colors:["#f77e53"]})).render(),new ApexCharts(document.querySelector("#today-new-customer-chart"),t.extend({},e,{colors:["#43d39e"]})).render(),new ApexCharts(document.querySelector("#today-new-visitors-chart"),t.extend({},e,{colors:["#ffbe0b"]})).render();var r=new Date,o={chart:{height:296,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},series:[{name:"Revenue",data:[10,20,5,15,10,20,15,25,20,30,25,40,30,50,35]}],zoom:{enabled:!1},legend:{show:!1},colors:["#43d39e"],xaxis:{type:"string",categories:function(t,e){for(var r=new Date(e,t,1),o=[],n=0;r.getMonth()===t&&n<15;){var a=new Date(r);o.push(a.getDate()+" "+a.toLocaleString("en-us",{month:"short"})),r.setDate(r.getDate()+1),n+=1}return o}(r.getMonth(),r.getFullYear()),tooltip:{enabled:!1},axisBorder:{show:!1},labels:{}},yaxis:{labels:{formatter:function(t){return t+"k"}}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[45,100]}}};new ApexCharts(document.querySelector("#revenue-chart"),o).render();o={chart:{height:296,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Net Profit",data:[35,44,55,57,56,61]},{name:"Revenue",data:[52,76,85,101,98,87]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"],axisBorder:{show:!1}},legend:{show:!1},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f3f4f7"},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}};new ApexCharts(document.querySelector("#targets-chart"),o).render();o={plotOptions:{pie:{donut:{size:"70%"},expandOnClick:!1}},chart:{height:298,type:"donut"},legend:{show:!0,position:"right",horizontalAlign:"left",itemMargin:{horizontal:6,vertical:3}},series:[44,55,41,17],labels:["Clothes 44k","Smartphons 55k","Electronics 41k","Other 17k"],responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}],tooltip:{y:{formatter:function(t){return t+"k"}}}};new ApexCharts(document.querySelector("#sales-by-category-chart"),o).render()},e.prototype.init=function(){t("#dash-daterange").flatpickr({mode:"range",defaultDate:[moment().subtract(7,"days").format("YYYY-MM-DD"),moment().format("YYYY-MM-DD")]}),t("#calendar-widget").flatpickr({inline:!0,shorthandCurrentMonth:!0}),t.ChatApp.init(),this.initCharts()},t.Dashboard=new e,t.Dashboard.Constructor=e}(window.jQuery),function(t){"use strict";window.jQuery.Dashboard.init()}()}});