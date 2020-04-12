(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,v,a){"use strict";a.r(v);var _=a(28),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"架构基本术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构基本术语"}},[t._v("#")]),t._v(" 架构基本术语")]),t._v(" "),a("h2",{attrs:{id:"系统容量与系统容量预估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统容量与系统容量预估"}},[t._v("#")]),t._v(" 系统容量与系统容量预估")]),t._v(" "),a("p",[t._v("系统容量是指一个系统实际上能承受最大访问量")]),t._v(" "),a("p",[t._v("系统容量预估是架构师根据系统的"),a("strong",{staticStyle:{color:"#3EAF7C"}},[t._v("峰值流量到达之前")]),t._v("给出的系统若干指标。")]),t._v(" "),a("h2",{attrs:{id:"qps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qps"}},[t._v("#")]),t._v(" QPS")]),t._v(" "),a("p",[a("code",[t._v("QPS")]),t._v(" 全称 "),a("code",[t._v("Query Per Second")]),t._v(" ，每秒查询量，在分布式系统中，QPS 的定义是单个进程每秒"),a("strong",{staticStyle:{color:"#3EAF7C"}},[t._v("请求服务器的成功次数。")])]),t._v(" "),a("p",[t._v("QPS = 总请求数/进程总数/请求时间 = 总请求数/(进程总数*请求时间)")]),t._v(" "),a("h2",{attrs:{id:"uv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uv"}},[t._v("#")]),t._v(" UV")]),t._v(" "),a("p",[a("code",[t._v("Unique Visitor")]),t._v(" 即独立访客数量，指一定范围内站点访问来自不同IP的个数，同一 IP 多次访问只算一次")]),t._v(" "),a("h2",{attrs:{id:"pv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv"}},[t._v("#")]),t._v(" PV")]),t._v(" "),a("p",[a("code",[t._v("Page View")]),t._v(" ，页面访问量，指一定时间范围内打开或刷新页面的次数。")]),t._v(" "),a("h2",{attrs:{id:"系统容量预估基本计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统容量预估基本计算"}},[t._v("#")]),t._v(" 系统容量预估基本计算")]),t._v(" "),a("h3",{attrs:{id:"带宽计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带宽计算"}},[t._v("#")]),t._v(" 带宽计算")]),t._v(" "),a("p",[t._v("带宽的计算公式为：")]),t._v(" "),a("p",[t._v("平均带宽 = 总流量数（bit） / 产生这些流量的时长（秒）\n=（PV * 页面平均大小 * 8） / 统计时间（秒）")]),t._v(" "),a("p",[t._v("带宽需求（峰值带宽） = 平均带宽 * 峰值因子")]),t._v(" "),a("p",[t._v("例如，日均 PV 10w，页面平均大小 0.4M，则平均带宽 = ( 10w * 0.4M * 8) / (60 * 60 *24)")]),t._v(" "),a("h3",{attrs:{id:"并发量计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发量计算"}},[t._v("#")]),t._v(" 并发量计算")]),t._v(" "),a("p",[t._v("并发量，也称为并发连接数，一般是指"),a("strong",{staticStyle:{color:"#3EAF7C"}},[t._v("单台服务器每秒处理的连接数")]),t._v("。")]),t._v(" "),a("p",[t._v("平均并发连接数的计算公式是：\n平均并发连接数 = （站点 PV * 页面平均衍生连接数） / (统计时间 * web 服务器数量）")]),t._v(" "),a("p",[t._v("例如，日均 PV 50w，页面平均衍生连接数是 30，服务器数量为 5 台。")]),t._v(" "),a("p",[t._v("平均并发连接数 = （10w * 30）/（60"),a("em",[t._v("60")]),t._v("24 * 5）")]),t._v(" "),a("p",[t._v("峰值并发量 = 平均并发连接数 * 峰值因子")]),t._v(" "),a("h3",{attrs:{id:"服务器预估量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器预估量"}},[t._v("#")]),t._v(" 服务器预估量")]),t._v(" "),a("p",[t._v("根据往年同期活动获得的日均 PV、并发量、页面衍生连接数，及公司业务扩展所带来的流量增涨率，就可以计算出服务器预估值。")]),t._v(" "),a("p",[t._v("服务器预估值 = 站点每秒处理的总连接数 / 单机并发连接数\n= (PV * 页面衍生连接数*（1 + 增涨率）) / 统计时间 /单机并发连接数")])])}),[],!1,null,null,null);v.default=s.exports}}]);