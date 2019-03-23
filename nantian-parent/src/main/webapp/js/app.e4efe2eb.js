(function (e) {
    function n(n) {
        for (var c, a, r = n[0], i = n[1], f = n[2], h = 0, d = []; h < r.length; h++)a = r[h], o[a] && d.push(o[a][0]), o[a] = 0;
        for (c in i)Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
        l && l(n);
        while (d.length)d.shift()();
        return u.push.apply(u, f || []), t()
    }

    function t() {
        for (var e, n = 0; n < u.length; n++) {
            for (var t = u[n], c = !0, a = 1; a < t.length; a++) {
                var r = t[a];
                0 !== o[r] && (c = !1)
            }
            c && (u.splice(n--, 1), e = i(i.s = t[0]))
        }
        return e
    }

    var c = {}, a = {app: 0}, o = {app: 0}, u = [];

    function r(e) {
        return i.p + "js/" + ({}[e] || e) + "." + {
                "chunk-07ffdfb6": "6b709602",
                "chunk-131ebcc9": "7b65d5c8",
                "chunk-2b954ef0": "cac4b2fd",
                "chunk-2d0a45ea": "9ed399ff",
                "chunk-2d0aa7d3": "e5631e24",
                "chunk-2d0cbae1": "7273985f",
                "chunk-2d0cca32": "d1666b10",
                "chunk-2d0d3a95": "3653f81b",
                "chunk-2d0ddfa2": "d215d666",
                "chunk-2d0de144": "0e1956e4",
                "chunk-2d213cc6": "a158e2d1",
                "chunk-35c5831a": "64e48dcb",
                "chunk-37c9e9f6": "e9b85592",
                "chunk-54fe7660": "0ff64cfc",
                "chunk-58583d1e": "4b9e06fc",
                "chunk-65023abe": "383fa6aa",
                "chunk-667f2e20": "bf2c2920",
                "chunk-6792a5f1": "31170991",
                "chunk-6dac1354": "63a94d9a",
                "chunk-787098a9": "0e08c1a5",
                "chunk-87923b7a": "0b99bd3f",
                "chunk-9310ab56": "53f12e1f",
                "chunk-954ffe9a": "bb2a3f5a",
                "chunk-a4d02418": "8d202315",
                "chunk-d44138f4": "d06d79d9",
                "chunk-da7dc676": "e70d0344",
                "chunk-f4ff4c0e": "6599d592"
            }[e] + ".js"
    }

    function i(n) {
        if (c[n])return c[n].exports;
        var t = c[n] = {i: n, l: !1, exports: {}};
        return e[n].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }

    i.e = function (e) {
        var n = [], t = {
            "chunk-07ffdfb6": 1,
            "chunk-131ebcc9": 1,
            "chunk-2b954ef0": 1,
            "chunk-35c5831a": 1,
            "chunk-37c9e9f6": 1,
            "chunk-54fe7660": 1,
            "chunk-58583d1e": 1,
            "chunk-65023abe": 1,
            "chunk-667f2e20": 1,
            "chunk-6792a5f1": 1,
            "chunk-6dac1354": 1,
            "chunk-787098a9": 1,
            "chunk-87923b7a": 1,
            "chunk-9310ab56": 1,
            "chunk-954ffe9a": 1,
            "chunk-a4d02418": 1,
            "chunk-d44138f4": 1,
            "chunk-da7dc676": 1,
            "chunk-f4ff4c0e": 1
        };
        a[e] ? n.push(a[e]) : 0 !== a[e] && t[e] && n.push(a[e] = new Promise(function (n, t) {
            for (var c = "css/" + ({}[e] || e) + "." + {
                    "chunk-07ffdfb6": "6c23c2a3",
                    "chunk-131ebcc9": "75414bbb",
                    "chunk-2b954ef0": "04eeb4ce",
                    "chunk-2d0a45ea": "31d6cfe0",
                    "chunk-2d0aa7d3": "31d6cfe0",
                    "chunk-2d0cbae1": "31d6cfe0",
                    "chunk-2d0cca32": "31d6cfe0",
                    "chunk-2d0d3a95": "31d6cfe0",
                    "chunk-2d0ddfa2": "31d6cfe0",
                    "chunk-2d0de144": "31d6cfe0",
                    "chunk-2d213cc6": "31d6cfe0",
                    "chunk-35c5831a": "3665bf68",
                    "chunk-37c9e9f6": "0b8a5e3d",
                    "chunk-54fe7660": "e5ef560e",
                    "chunk-58583d1e": "285e4146",
                    "chunk-65023abe": "98f80f97",
                    "chunk-667f2e20": "23047c7a",
                    "chunk-6792a5f1": "87d9656f",
                    "chunk-6dac1354": "9d16891f",
                    "chunk-787098a9": "2c17b740",
                    "chunk-87923b7a": "898b3d6c",
                    "chunk-9310ab56": "aa11ab42",
                    "chunk-954ffe9a": "52dd9af4",
                    "chunk-a4d02418": "ed5570a3",
                    "chunk-d44138f4": "8752a84f",
                    "chunk-da7dc676": "2189cf26",
                    "chunk-f4ff4c0e": "1ee1b6f2"
                }[e] + ".css", o = i.p + c, u = document.getElementsByTagName("link"), r = 0; r < u.length; r++) {
                var f = u[r], h = f.getAttribute("data-href") || f.getAttribute("href");
                if ("stylesheet" === f.rel && (h === c || h === o))return n()
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
                f = d[r], h = f.getAttribute("data-href");
                if (h === c || h === o)return n()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = n, l.onerror = function (n) {
                var c = n && n.target && n.target.src || o, u = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                u.request = c, delete a[e], l.parentNode.removeChild(l), t(u)
            }, l.href = o;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(l)
        }).then(function () {
            a[e] = 0
        }));
        var c = o[e];
        if (0 !== c)if (c)n.push(c[2]); else {
            var u = new Promise(function (n, t) {
                c = o[e] = [n, t]
            });
            n.push(c[2] = u);
            var f, h = document.createElement("script");
            h.charset = "utf-8", h.timeout = 120, i.nc && h.setAttribute("nonce", i.nc), h.src = r(e), f = function (n) {
                h.onerror = h.onload = null, clearTimeout(d);
                var t = o[e];
                if (0 !== t) {
                    if (t) {
                        var c = n && ("load" === n.type ? "missing" : n.type), a = n && n.target && n.target.src, u = new Error("Loading chunk " + e + " failed.\n(" + c + ": " + a + ")");
                        u.type = c, u.request = a, t[1](u)
                    }
                    o[e] = void 0
                }
            };
            var d = setTimeout(function () {
                f({type: "timeout", target: h})
            }, 12e4);
            h.onerror = h.onload = f, document.head.appendChild(h)
        }
        return Promise.all(n)
    }, i.m = e, i.c = c, i.d = function (e, n, t) {
        i.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: t})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, n) {
        if (1 & n && (e = i(e)), 8 & n)return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)for (var c in e)i.d(t, c, function (n) {
            return e[n]
        }.bind(null, c));
        return t
    }, i.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(n, "a", n), n
    }, i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, i.p = "", i.oe = function (e) {
        throw console.error(e), e
    };
    var f = window["webpackJsonp"] = window["webpackJsonp"] || [], h = f.push.bind(f);
    f.push = n, f = f.slice();
    for (var d = 0; d < f.length; d++)n(f[d]);
    var l = h;
    u.push([0, "chunk-vendors"]), t()
})({
    0: function (e, n, t) {
        e.exports = t("56d7")
    }, "034f": function (e, n, t) {
        "use strict";
        var c = t("d4a1"), a = t.n(c);
        a.a
    }, "0e1e": function (e, n, t) {
    }, "56d7": function (e, n, t) {
        "use strict";
        t.r(n);
        t("a1bf"), t("e5df"), t("aa7b"), t("b328");
        var c = t("9ca1"), a = function () {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
        }, o = [], u = (t("034f"), t("5be0")), r = {}, i = Object(u["a"])(r, a, o, !1, null, null, null), f = i.exports, h = t("2f48");
        c["default"].use(h["a"]);
        var d = new h["a"]({
            routes: [{path: "/", redirect: "/dashboard"}, {
                path: "/", component: function (e) {
                    return t.e("chunk-131ebcc9").then(function () {
                        var n = [t("bfe9")];
                        e.apply(null, n)
                    }.bind(this)).catch(t.oe)
                }, meta: {title: "自述文件"}, children: [{
                    path: "/dashboard", component: function (e) {
                        return t.e("chunk-37c9e9f6").then(function () {
                            var n = [t("e2ad")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "系统首页"}
                }, {
                    path: "/manhour/query", component: function (e) {
                        return t.e("chunk-6dac1354").then(function () {
                            var n = [t("93c1")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "工时管理"}
                }, {
                    path: "/manhour/import", component: function (e) {
                        return t.e("chunk-2d213cc6").then(function () {
                            var n = [t("ade2")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "工时导入"}
                }, {
                    path: "/manhour/objection", component: function (e) {
                        return t.e("chunk-6792a5f1").then(function () {
                            var n = [t("e37c")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "异议处理"}
                }, {
                    path: "/holiday/query", component: function (e) {
                        return t.e("chunk-f4ff4c0e").then(function () {
                            var n = [t("4edb")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "请假查询"}
                }, {
                    path: "/holiday/import", component: function (e) {
                        return t.e("chunk-2d0ddfa2").then(function () {
                            var n = [t("844d")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "批量导入"}
                }, {
                    path: "/holiday/application", component: function (e) {
                        return t.e("chunk-2d0d3a95").then(function () {
                            var n = [t("5e5d")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "请假申请"}
                }, {
                    path: "/holiday/annualLeave", component: function (e) {
                        return t.e("chunk-2d0a45ea").then(function () {
                            var n = [t("05c2")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "年假查询"}
                }, {
                    path: "/customer/query", component: function (e) {
                        return t.e("chunk-d44138f4").then(function () {
                            var n = [t("f5cd")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "客户管理"}
                }, {
                    path: "/customer/category", component: function (e) {
                        return t.e("chunk-2d0de144").then(function () {
                            var n = [t("83b5")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "类别管理"}
                }, {
                    path: "/customer/unitprice", component: function (e) {
                        return t.e("chunk-87923b7a").then(function () {
                            var n = [t("cc60")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "单价查询"}
                }, {
                    path: "/statistics/manhour", component: function (e) {
                        return t.e("chunk-35c5831a").then(function () {
                            var n = [t("1120")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "工时统计"}
                }, {
                    path: "/statistics/employee", component: function (e) {
                        return t.e("chunk-65023abe").then(function () {
                            var n = [t("7b1f")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "员工统计"}
                }, {
                    path: "/statistics/leave", component: function (e) {
                        return t.e("chunk-58583d1e").then(function () {
                            var n = [t("33cb")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "请假统计"}
                }, {
                    path: "/department/manage", component: function (e) {
                        return t.e("chunk-2d0cca32").then(function () {
                            var n = [t("4f7a")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "部门管理"}
                }, {
                    path: "/employee/manage", component: function (e) {
                        return t.e("chunk-667f2e20").then(function () {
                            var n = [t("c2f2")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "信息管理"}
                }, {
                    path: "/employee/alias", component: function (e) {
                        return t.e("chunk-2d0aa7d3").then(function () {
                            var n = [t("10db")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "别名管理"}
                }, {
                    path: "/employee/proinfo", component: function (e) {
                        return t.e("chunk-2d0cbae1").then(function () {
                            var n = [t("4b63")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "项目信息"}
                }, {
                    path: "/employee/detail", component: function (e) {
                        return t.e("chunk-954ffe9a").then(function () {
                            var n = [t("d400")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "查看详情"}
                }, {
                    path: "/system/password", component: function (e) {
                        return t.e("chunk-54fe7660").then(function () {
                            var n = [t("753f")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "密码管理"}
                }, {
                    path: "/system/parameters", component: function (e) {
                        return t.e("chunk-2b954ef0").then(function () {
                            var n = [t("9c66")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "参数管理"}
                }, {
                    path: "/system/holiday", component: function (e) {
                        return t.e("chunk-787098a9").then(function () {
                            var n = [t("85c2")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "假日管理"}
                }, {
                    path: "/message", component: function (e) {
                        return t.e("chunk-9310ab56").then(function () {
                            var n = [t("b9b0")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "我的信息"}
                }, {
                    path: "/404", component: function (e) {
                        return t.e("chunk-da7dc676").then(function () {
                            var n = [t("5b5e")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "404"}
                }, {
                    path: "/403", component: function (e) {
                        return t.e("chunk-07ffdfb6").then(function () {
                            var n = [t("9ebe")];
                            e.apply(null, n)
                        }.bind(this)).catch(t.oe)
                    }, meta: {title: "403"}
                }]
            }, {
                path: "/login", component: function (e) {
                    return t.e("chunk-a4d02418").then(function () {
                        var n = [t("0290")];
                        e.apply(null, n)
                    }.bind(this)).catch(t.oe)
                }
            }, {path: "*", redirect: "/404"}]
        }), l = t("caf6"), p = t.n(l), s = t("69a5"), m = t.n(s);
        t("fc5b"), t("d21e"), t("0e1e"), t("9dde"), t("88b9"), t("28fa");
        c["default"].directive("dialogDrag", {
            bind: function (e, n, t, c) {
                var a = e.querySelector(".el-dialog__header"), o = e.querySelector(".el-dialog");
                a.style.cssText += ";cursor:move;", o.style.cssText += ";top:0px;";
                var u = function () {
                    return window.document.currentStyle ? function (e, n) {
                        return e.currentStyle[n]
                    } : function (e, n) {
                        return getComputedStyle(e, !1)[n]
                    }
                }();
                a.onmousedown = function (e) {
                    var n = e.clientX - a.offsetLeft, t = e.clientY - a.offsetTop, c = document.body.clientWidth, r = document.documentElement.clientHeight, i = o.offsetWidth, f = o.offsetHeight, h = o.offsetLeft, d = c - o.offsetLeft - i, l = o.offsetTop, p = r - o.offsetTop - f, s = u(o, "left"), m = u(o, "top");
                    s.includes("%") ? (s = +document.body.clientWidth * (+s.replace(/\%/g, "") / 100), m = +document.body.clientHeight * (+m.replace(/\%/g, "") / 100)) : (s = +s.replace(/\px/g, ""), m = +m.replace(/\px/g, "")), document.onmousemove = function (e) {
                        var c = e.clientX - n, a = e.clientY - t;
                        -c > h ? c = -h : c > d && (c = d), -a > l ? a = -l : a > p && (a = p), o.style.cssText += ";left:".concat(c + s, "px;top:").concat(a + m, "px;")
                    }, document.onmouseup = function (e) {
                        document.onmousemove = null, document.onmouseup = null
                    }
                }
            }
        });
        t("f8c9");
        t("df9d"), c["default"].config.productionTip = !1, c["default"].use(m.a, {size: "small"}), c["default"].prototype.$axios = p.a, d.beforeEach(function (e, n, t) {
            var a = localStorage.getItem("ms_username");
            a || "/login" === e.path ? e.meta.permission ? "admin" === a ? t() : t("/403") : navigator.userAgent.indexOf("MSIE") > -1 && "/editor" === e.path ? c["default"].prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看", "浏览器不兼容通知", {confirmButtonText: "确定"}) : t() : t("/login")
        }), new c["default"]({
            router: d, render: function (e) {
                return e(f)
            }
        }).$mount("#app")
    }, d21e: function (e, n, t) {
    }, d4a1: function (e, n, t) {
    }, d4aa: function (e, n, t) {
        "use strict";
        t("a1bf"), t("e5df"), t("aa7b"), t("b328");
        var c = {
            manhour: {query: "/manhour/query", objection: "/manhour/objection"},
            holiday: {query: "/holiday/query"},
            project: {query: "/customer/query"},
            settlement: {query: "/settlement/query"},
            employee: {query: "/employee/query"}
        };
        n["a"] = c
    }, df9d: function (e, n, t) {
        "use strict";
        t.r(n);
        var c = t("debe"), a = t.n(c), o = t("d4aa");
        a.a.mock(o["a"].manhour.query, function () {
            return a.a.mock({
                "list|5-30": [{
                    "date|+1": "2019-01-22",
                    name: "@cname",
                    platform: "开放平台",
                    workType: "X1",
                    workplace: "北京市海淀区",
                    proName: "中国人寿",
                    proDpmt: "资源中心二部",
                    "normalHour|+1": [8, "请假", "8+2"],
                    normalHours: 156,
                    "addedHours|1-5": 3.5,
                    signinTime: "08:36:20",
                    signBackTime: "@time()"
                }], code: 0
            })
        }), a.a.mock(o["a"].manhour.objection, function () {
            return a.a.mock({
                "list|1-10": [{
                    name: "@cname",
                    "type|+1": ["加班", "请假"],
                    date: '@date("yyyy-MM-dd")',
                    content: "@csentence(15)",
                    "progress|+1": ["处理完成", "待处理"]
                }], code: 0
            })
        }), a.a.mock(o["a"].holiday.query, function () {
            return a.a.mock({
                "list|1-10": [{
                    name: "罗杰",
                    dept: "软件资源二中心三部",
                    vacation: 5,
                    days: 2,
                    date1: "2019-02-20",
                    date2: "2019-02-21",
                    "type|+1": ["事假", "调休"],
                    "auditStatus|+1": ["审核中", "通过", "退回"],
                    explain: "@csentence(15)"
                }]
            })
        }), a.a.mock(o["a"].project.query, function () {
            return a.a.mock({
                "list|1-10": [{
                    "department|+1": ["软件资源二中心一部", "软件资源二中心二部"],
                    "proName|+1": ["银联移动支付项目", "全球缓释管理系统项目", "公司金融贷后管理项目"],
                    proAddr: "北京市海淀区",
                    custtype: "中国银行",
                    proManager: "@cname",
                    "proNumber|1-100": 1,
                    explain: "@csentence(10)"
                }]
            })
        }), a.a.mock(o["a"].settlement.query, function () {
            return a.a.mock({
                "list|1-10": [{
                    "customerCategory|+1": ["中国银行", "中国人寿", "中国邮政储蓄"],
                    proName: "@csentence(10)",
                    "workCategory|+1": ["开发", "测试"],
                    "level|+1": ["初级", "中级", "高级"],
                    "levelUnitPrice|+1": [1350, 1e3, 800],
                    startDate: "2018-01-01",
                    endDate: "2019-12-31"
                }]
            })
        }), a.a.mock(o["a"].employee.query, function () {
            return a.a.mock({
                "list|1-10": [{
                    name: "@cname",
                    "status|+1": ["在职", "离职"],
                    idno: "@id",
                    dept: "软件资源二中心二部",
                    group: "中国银行",
                    alias: "@cname"
                }]
            })
        })
    }
});