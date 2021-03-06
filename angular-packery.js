! function e(r, t, n) {
    function i(a, o) {
        if (!t[a]) {
            if (!r[a]) {
                var u = "function" == typeof require && require;
                if (!o && u) return u(a, !0);
                if (c) return c(a, !0);
                var f = new Error("Cannot find module '" + a + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = t[a] = {
                exports: {}
            };
            r[a][0].call(l.exports, function(e) {
                var t = r[a][1][e];
                return i(t ? t : e)
            }, l, l.exports, e, r, t, n)
        }
        return t[a].exports
    }
    for (var c = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    1: [function(e, r, t) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = e("./modules/packery.directive"),
            c = n(i),
            a = e("./modules/packeryItem.directive"),
            o = n(a),
            u = e("./modules/packeryAfterRender.directive"),
            f = n(u);
        angular.module("ngPackery", []).directive("packery", c["default"]).directive("packeryItem", o["default"]).directive("packeryAfterRender", f["default"])
    }, {
        "./modules/packery.directive": 3,
        "./modules/packeryAfterRender.directive": 4,
        "./modules/packeryItem.directive": 5
    }],
    2: [function(e, r, t) {
        "use strict";

        function n(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(r, t, n) {
                return t && e(r.prototype, t), n && e(r, n), r
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
            function e() {
                n(this, e), this.config = {}, this.container = void 0
            }
            return i(e, [{
                key: "ready",
                value: function() {
                    return !!this.config
                }
            }, {
                key: "initialize",
                value: function() {
                    if (void 0 === this.container) {
                        var e = {
                                itemSelector: "packery-item"
                            },
                            r = this.config.packeryOptions ? $.extend(e, this.config.packeryOptions) : e;
                        this.container = new Packery(this.config.packeryContainer[0], r)
                    }
                }
            }]), e
        }();
        t["default"] = c
    }, {}],
    3: [function(e, r, t) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./packery.controller"),
            c = n(i),
            a = function() {
                return {
                    scope: {},
                    controller: c["default"],
                    restrict: "E",
                    compile: function(e) {
                        var r = !1,
                            t = $(e).find("packery-item[ng-repeat], packery-item[data-ng-repeat], packery-item [ng-repeat], packery-item [data-ng-repeat]");
                        return t.length >= 1 && (r = !0, t.attr("data-packery-after-render", "")), {
                            pre: function(e, r, t, n) {
                                n.config.packeryContainer = r, n.config.packeryOptions = JSON.parse(t.packeryOptions || "{}")
                            },
                            post: function(e, t, n, i) {
                                r || i.initialize()
                            }
                        }
                    }
                }
            };
        t["default"] = a
    }, {
        "./packery.controller": 2
    }],
    4: [function(e, r, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            "ngInject";
            return {
                restrict: "A",
                require: "^packery",
                priority: 0,
                link: function(r, t, n, i) {
                    r.$last && ! function() {
                        var r = null;
                        r = e(function() {
                            i.initialize(), e.cancel(r)
                        })
                    }()
                }
            }
        };
        n.$inject = ["$timeout"], t["default"] = n
    }, {}],
    5: [function(e, r, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            return {
                restrict: "E",
                require: "^packery",
                priority: 1
            }
        };
        t["default"] = n
    }, {}]
}, {}, [1]);