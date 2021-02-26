/*
 jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null !=
                t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null ==
                e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject ||
                this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" +
            ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            m(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e))
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r,
                                e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r =
                    e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t,
            n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" +
            M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\x00" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                p()
            },
            ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A =
                H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e$0) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1])
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l),
                                r
                        } else {
                            if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                        }
                else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) ||
                            t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e$1) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e$2) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] =
                t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled ===
                    e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument ||
                e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function (e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                    return h.appendChild(e).id =
                        b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById &&
                        g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS =
                n.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" +
                        b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
                }), ue(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                        h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                    n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
                }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e,
                    t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e ===
                        d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e,
            t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e$3) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !==
                o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o)
                if (1 === o || 9 === o || 11 ===
                    o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else {
                    if (3 === o || 4 === o) return e.nodeValue
                }
            else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] &&
                        (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z,
                        ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" ===
                            t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() ===
                                            v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 ===
                                            p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B,
                            "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = g ? t.lang :
                                    t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" ===
                        t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return Y.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" ===
                        e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n =
                    i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u)
                    while (t = t[r]) {
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || a)
                                if (f =
                                    t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                                } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) :
                    v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                    return e === t
                }, s, !0), f = me(function (e) {
                    return O(t, e) > -1
                }, s, !0), p = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u -
                            1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v +=
                        m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), n = t.length;
                    while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e
                }
                return o
            }, u = oe.select = function (e, t, n, i) {
                var o, u, l, c, f, p = "function" == typeof e && e,
                    d = !i && a(e = p.selector || e);
                if (n = n || [], 1 === d.length) {
                    if ((u =
                            d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (l = u[o], r.relative[c = l.type]) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                            break
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) ||
                    t), n
            }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
            }), ue(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || le("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ue(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) ||
            le("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ue(function (e) {
                return null == e.getAttribute("disabled")
            }) || le(P, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e =
                    e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? w.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ?
            w.grep(e, function (e) {
                return u.call(t, e) > -1 !== n
            }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ?
                w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t =
                    t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t =
                w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] &&
                this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return k(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return k(e, "nextSibling")
        },
        prevAll: function (e) {
            return k(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e,
        t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0],
                        n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i =
                        a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e;
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e$4) {
            n.apply(void 0,
                [e$4])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n,
                                function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e,
                                                a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e$5) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e$5, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e$5]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0,
                                e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] =
                            this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded",
        _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 ===
            e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function (e, t, n) {
            return void 0 ===
                t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" ===
            e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e$6) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e,
                t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this,
                        e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function () {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
                !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this,
                    e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display ||
                "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 &&
                (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" ===
            r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>",
                "</select>"
            ],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e],
            n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes),
                (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone =
            e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e$7) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r &&
            null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) ||
                    (a = y.handle = function (t) {
                        return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount =
                    0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] &&
                            new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i =
                        ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) >
                            -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ?
                e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue =
                        e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp =
            e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped =
                Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ?
                e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o),
                    l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o =
                e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe,
                    ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r],
                    a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return z(this,
                function (e) {
                    return void 0 === e ? w.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Re(this,
                arguments,
                function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e$8) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o
                },
                pixelBoxStyles: function () {
                    return t(), s
                },
                pixelPosition: function () {
                    return t(), i
                },
                reliableMarginLeft: function () {
                    return t(), u
                },
                scrollboxSize: function () {
                    return t(), a
                }
            }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e,
            t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in
            Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width",
            !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() +
            t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)),
                    a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i =
                a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" +
                    t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ?
                        n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n,
                    this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem,
                    this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
            }
        }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, tt.propHooks.scrollTop =
        tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, w.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued ||
                s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display ||
                l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0,
                        l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                        r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function (e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n ||
                    !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i =
                    w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function () {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !==
                e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            rt || (rt = !0, at())
        }, w.fx.stop = function () {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] ||
                (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e,
            t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e,
            t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode &&
                t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class",
                "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t =
                        a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                        (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e,
                        "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
            trigger: function (t, n, i, o) {
                var a, s, u, l, c, p, d, h, v = [i || r],
                    m = f.call(t, "type") ? t.type : t,
                    x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!o && !d.noBubble &&
                        !y(i)) {
                        for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                        u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                    }
                    a = 0;
                    while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                    return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) &&
                        !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
                }
            },
            simulate: function (e, t, n) {
                var r = w.extend(new w.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                w.event.trigger(r, null, t)
            }
        }), w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0)
            }
        }), h.focusin ||
        w.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                w.event.simulate(t, e.target, w.event.fix(e))
            };
            w.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        i = J.access(r, t);
                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        i = J.access(r, t) - 1;
                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                }
            }
        });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n =
                (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e$9) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e,
        t) {
        var n, r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name &&
                    !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n,
            r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e$10) {
                    return {
                        state: "parsererror",
                        error: a ? e$10 : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e$11) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It,
                    h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url =
                o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g,
                    E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e$12) {
                    if (c) throw e$12;
                    k(-1, e$12)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified &&
                    ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
                t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e
                }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                    w(this).replaceWith(this.childNodes)
                }),
                this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e$13) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username,
                        t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType ||
                            "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e$14) {
                    if (n) throw e$14;
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Yt.pop() || w.expando + "_" + Et++;
                return this[e] = !0, e
            }
        }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !==
                t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return a || w.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                    a = arguments
                }, r.always(function () {
                    void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
                }), "script"
        }), h.createHTMLDocument = function () {
            var e = r.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(),
        w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, o, a;
            return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
        }, w.fn.load = function (e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" ==
                typeof t && (i = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
        }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem
            }).length
        },
        w.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l, c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
            }
        }, w.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 ===
                    e ? this : this.each(function (t) {
                        w.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" ===
                            w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - w.css(r, "marginTop", !0),
                        left: t.left - i.left - w.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be
                })
            }
        }), w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] =
                function (r) {
                    return z(this, function (e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
        }), w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
            })
        }), w.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            w.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length &&
                        (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(this, function (t, n, i) {
                        var o;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
            function (e, t) {
                w.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), w.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
                    t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i
        }, w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0)
        }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, "function" == typeof define && define.amd && define("jquery", [], function () {
            return w
        });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
! function (e) {
    function t(e, t, n) {
        var r = this;
        r.settings = n, r.$element = e, r.$sourceElement = t, r.inTap = !1, r.inTapAndHold = !1, r.inDrag = !1, r.tapStart = null, r.dragStart = null, r.timerTap = null, r.timerTapAndHold = null, r.mouseDown = !1, r.x = null, r.y = null, r.ex = null, r.ey = null, r.xStart = null, r.yStart = null, r.exStart = null, r.eyStart = null, r.taps = 0, r.started = !1, r.ended = !1
    }

    function n(e, n, r) {
        var a = e[0];
        return "undefined" == typeof a._touch && (a._touch = new t(e, n, r)), a._touch
    }

    function r(e, t, n) {
        var r, a, o, s, i;
        return r = e.$element.offset(),
            a = e.$element.width(), o = e.$element.height(), s = Math.min(Math.max(t, r.left), r.left + a), i = Math.min(Math.max(n, r.top), r.top + o), {
                x: s,
                y: i
            }
    }
    var a = e(document),
        o = null,
        s = null,
        i = {
            useTouch: !0,
            useMouse: !0,
            trackDocument: !1,
            trackDocumentNormalize: !1,
            noClick: !1,
            dragThreshold: 10,
            dragDelay: 200,
            swipeThreshold: 30,
            tapDelay: 250,
            tapAndHoldDelay: 500,
            delegateSelector: null,
            dropFilter: !1,
            dropFilterTraversal: !0,
            coordinates: "page",
            preventDefault: {
                drag: !1,
                swipe: !1,
                tap: !1
            }
        };
    t.prototype.uses = function (t) {
            var n = e._data(this.$sourceElement[0],
                "events");
            switch (t) {
                case "swipe":
                    return n.hasOwnProperty(t) || n.hasOwnProperty("swipeUp") || n.hasOwnProperty("swipeDown") || n.hasOwnProperty("swipeLeft") || n.hasOwnProperty("swipeRight");
                case "drag":
                    return n.hasOwnProperty(t) || n.hasOwnProperty("dragStart") || n.hasOwnProperty("dragEnd");
                case "tapAndHold":
                case "doubleTap":
                    return n.hasOwnProperty(t);
                case "tap":
                    return n.hasOwnProperty(t) || n.hasOwnProperty("doubleTap") || n.hasOwnProperty("tapAndHold")
            }
            return !1
        }, t.prototype.cancel = function (e) {
            var t = this;
            t.taps =
                0, t.inTap = !1, t.inTapAndHold = !1, t.inDrag = !1, t.tapStart = null, t.dragStart = null, t.xStart = null, t.yStart = null, t.exStart = null, t.eyStart = null, e && (t.mouseDown = !1)
        }, t.prototype.doStart = function (e, t, n) {
            var r = this,
                a = r.$element.offset();
            e.stopPropagation(), (r.uses("drag") && r.settings.preventDefault.drag(r) || r.uses("swipe") && r.settings.preventDefault.swipe(r) || r.uses("tap") && r.settings.preventDefault.tap(r)) && e.preventDefault(), r.uses("tapAndHold") && r.$element.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)").css("-webkit-touch-callout",
                "none").css("-webkit-user-select", "none"), r.x = t, r.y = n, r.ex = t - a.left, r.ey = n - a.top, r.tapStart = Date.now(), clearTimeout(r.timerTap), r.timerTap = setTimeout(function () {
                r.inTap && r.taps > 0 && (r.$element.trigger(2 == r.taps ? "doubleTap" : "tap", {
                    taps: r.taps,
                    x: r.x,
                    y: r.y,
                    ex: r.ex,
                    ey: r.ey,
                    duration: Date.now() - r.tapStart,
                    event: e
                }), r.cancel()), r.timerTap = null
            }, r.settings.tapDelay), r.uses("tapAndHold") && (clearTimeout(r.timerTapAndHold), r.timerTapAndHold = setTimeout(function () {
                r.inTap && (r.$element.trigger("tapAndHold", {
                    x: r.x,
                    y: r.y,
                    ex: r.ex,
                    ey: r.ey,
                    duration: Date.now() - r.tapStart,
                    event: e
                }), r.cancel()), r.timerTapAndHold = null, r.inTapAndHold = !0
            }, r.settings.tapAndHoldDelay)), r.inTap = !0
        }, t.prototype.doMove = function (t, n, r) {
            var i, l, u = this,
                d = u.$element.offset(),
                p = (Math.abs(u.x - n) + Math.abs(u.y - r)) / 2;
            if (t.stopPropagation(), (u.uses("swipe") && u.settings.preventDefault.swipe(u) || u.uses("drag") && u.settings.preventDefault.drag(u)) && t.preventDefault(), p > 2 && clearTimeout(u.timerTapAndHold), u.inDrag && o == u) {
                if (u.$element.trigger("drag", {
                        x: n,
                        y: r,
                        ex: n - d.left,
                        ey: r - d.top,
                        start: {
                            x: u.xStart,
                            y: u.yStart,
                            ex: u.exStart,
                            ey: u.eyStart
                        },
                        event: t,
                        exStart: u.exStart,
                        eyStart: u.eyStart
                    }), u.$element.css("pointer-events", "none"), i = "fixed" == u.$element.css("position") ? document.elementFromPoint(n - a.scrollLeft(), r - a.scrollTop()) : document.elementFromPoint(n, r), u.$element.css("pointer-events", ""), i) {
                    if (u.settings.dropFilter !== !1) switch (l = typeof u.settings.dropFilter) {
                        case "string":
                            if (u.settings.dropFilterTraversal)
                                for (; i && !e(i).is(u.settings.dropFilter);) i = i.parentElement;
                            else e(i).is(u.settings.dropFilter) || (i = null);
                            break;
                        case "function":
                            if (u.settings.dropFilterTraversal)
                                for (; i && u.settings.dropFilter(u.$element[0], i) !== !0;) i = i.parentElement;
                            else u.settings.dropFilter(u.$element[0], i) === !1 && (i = null);
                            break;
                        default:
                        case "boolean":
                            if (u.settings.dropFilter === !0)
                                for (; i.parentElement != u.$element[0].parentElement;)
                                    if (i = i.parentElement, !i) {
                                        i = null;
                                        break
                                    }
                    }
                    i === u.$element[0] && (i = null)
                }
                s && s !== i && (u.$element.trigger("dragLeave", {
                    element: s,
                    event: t
                }), s = null), !s && i && (s = i, u.$element.trigger("dragEnter", {
                    element: s,
                    event: t
                })), s && (d = e(s).offset(), u.$element.trigger("dragOver", {
                    element: s,
                    event: t,
                    x: n,
                    y: r,
                    ex: n - d.left,
                    ey: r - d.top
                }))
            } else if (p > u.settings.dragThreshold) {
                if (Date.now() - u.tapStart < u.settings.dragDelay) return void u.cancel();
                u.cancel(), u.inDrag = !0, u.dragStart = Date.now(), u.xStart = n, u.yStart = r, u.exStart = n - d.left, u.eyStart = r - d.top, u.uses("drag") && u.settings.preventDefault.drag(u) && t.preventDefault(), u.$element.trigger("dragStart", {
                    x: u.xStart,
                    y: u.yStart,
                    ex: u.exStart,
                    ey: u.eyStart,
                    event: t
                }), o = u
            }
        },
        t.prototype.doEnd = function (t, n, r) {
            var a, i, l, u = this,
                d = u.$element.offset(),
                p = Math.abs(u.x - n),
                c = Math.abs(u.y - r);
            t.stopPropagation(), u.inTap ? (clearTimeout(u.timerTapAndHold), u.taps++, (!u.timerTap || 1 == u.taps && !u.uses("doubleTap") || 2 == u.taps && u.uses("doubleTap")) && (u.$element.trigger(2 == u.taps ? "doubleTap" : "tap", {
                taps: u.taps,
                x: u.x,
                y: u.y,
                ex: u.ex,
                ey: u.ey,
                duration: Date.now() - u.tapStart,
                event: t
            }), u.cancel())) : u.inDrag ? (s && (d = e(s).offset(), u.$element.trigger("drop", {
                element: s,
                event: t,
                x: n,
                y: r,
                ex: n - d.left,
                ey: r -
                    d.top
            }), s = null), l = Date.now() - u.dragStart, a = Math.sqrt(Math.pow(Math.abs(u.x - n), 2) + Math.pow(Math.abs(u.y - r), 2)), i = a / l, u.$element.trigger("dragEnd", {
                start: {
                    x: u.x,
                    y: u.y,
                    ex: u.ex,
                    ey: u.ey
                },
                end: {
                    x: n,
                    y: r,
                    ex: n - d.left,
                    ey: r - d.top
                },
                distance: a,
                duration: l,
                velocity: i,
                event: t
            }), o = null, (p > u.settings.swipeThreshold || c > u.settings.swipeThreshold) && (u.$element.trigger("swipe", {
                distance: a,
                duration: l,
                velocity: i,
                event: t
            }), p > c ? (i = p / l, n < u.x ? u.$element.trigger("swipeLeft", {
                distance: p,
                duration: l,
                velocity: i,
                event: t
            }) : u.$element.trigger("swipeRight", {
                distance: p,
                duration: l,
                velocity: i,
                event: t
            })) : c > p && (i = c / l, r < u.y ? u.$element.trigger("swipeUp", {
                distance: c,
                duration: l,
                velocity: i,
                event: t
            }) : u.$element.trigger("swipeDown", {
                distance: c,
                duration: l,
                velocity: i,
                event: t
            }))), u.inDrag = !1) : u.inTapAndHold && (clearTimeout(u.timerTapAndHold), u.$element.trigger("tapAndHoldEnd", {
                x: u.x,
                y: u.y,
                event: t
            }), u.inTapAndHold = !1)
        }, e.fn.touch = function (t) {
            var n = e(this);
            if (this.length > 1)
                for (var r = 0; r < this.length; r++) e.touch(e(this[r]), t);
            else 1 == this.length && e.touch(n, t);
            return n
        },
        e.fn.enableTouch = function (t) {
            return e(this).touch(t)
        }, e.touch = function (t, o) {
            var s = {};
            if (s = e.extend(s, i), s = e.extend(s, o), "function" != typeof s.preventDefault.drag && (s.preventDefault.drag = s.preventDefault.drag === !0 ? function (e) {
                    return !0
                } : function (e) {
                    return !1
                }), "function" != typeof s.preventDefault.swipe && (s.preventDefault.swipe = s.preventDefault.swipe === !0 ? function (e) {
                    return !0
                } : function (e) {
                    return !1
                }), "function" != typeof s.preventDefault.tap && (s.preventDefault.tap = s.preventDefault.tap === !0 ? function (e) {
                        return !0
                    } :
                    function (e) {
                        return !1
                    }), s.noClick && t.on("click", function (e) {
                    e.preventDefault()
                }), s.useTouch) {
                var l = function (r) {
                    var a = e(this),
                        o = n(a, t, s);
                    o.started = !0, o.doStart(r, r.originalEvent.touches[0][s.coordinates + "X"], r.originalEvent.touches[0][s.coordinates + "Y"]), setTimeout(function () {
                        o.started = !1
                    }, 1E3)
                };
                t.on("touchstart", l), s.delegateSelector && t.on("touchstart", s.delegateSelector, l);
                var u = function (a) {
                    var o = e(this),
                        i = n(o, t, s),
                        l = a.originalEvent.touches[0][s.coordinates + "X"],
                        u = a.originalEvent.touches[0][s.coordinates +
                            "Y"
                        ];
                    if (i.settings.trackDocument && i.settings.trackDocumentNormalize) {
                        var d = r(i, l, u);
                        l = d.x, u = d.y
                    }
                    i.doMove(a, l, u)
                };
                t.on("touchmove", u), s.delegateSelector && t.on("touchmove", s.delegateSelector, u);
                var d = function (a) {
                    var o = e(this),
                        i = n(o, t, s);
                    i.ended = !0;
                    var l = r(i, a.originalEvent.changedTouches[0][s.coordinates + "X"], a.originalEvent.changedTouches[0][s.coordinates + "Y"]);
                    i.doEnd(a, l.x, l.y), setTimeout(function () {
                        i.ended = !1
                    }, 1E3)
                };
                t.on("touchend", d), s.delegateSelector && t.on("touchend", s.delegateSelector, d)
            }
            if (s.useMouse) {
                var p =
                    function (r) {
                        var a = e(this),
                            o = n(a, t, s);
                        return !o.started && (o.mouseDown = !0, void o.doStart(r, r[s.coordinates + "X"], r[s.coordinates + "Y"]))
                    };
                t.on("mousedown", p), s.delegateSelector && t.on("mousedown", s.delegateSelector, p);
                var c = function (r) {
                    var a = e(this),
                        o = n(a, t, s);
                    o.mouseDown && o.doMove(r, r[s.coordinates + "X"], r[s.coordinates + "Y"])
                };
                t.on("mousemove", c), s.delegateSelector && t.on("mousemove", s.delegateSelector, c);
                var g = function (r) {
                    var o = e(this),
                        i = n(o, t, s);
                    return !i.ended && (a.triggerHandler("mouseup", r), i.doEnd(r,
                        r[s.coordinates + "X"], r[s.coordinates + "Y"]), void(i.mouseDown = !1))
                };
                t.on("mouseup", g), s.delegateSelector && t.on("mouseup", s.delegateSelector, g)
            }
            s.trackDocument || t.on("mouseleave", function (r) {
                var a = e(this),
                    o = n(a, t, s);
                o.doEnd(r, r[s.coordinates + "X"], r[s.coordinates + "Y"]), o.mouseDown = !1
            })
        }, a.on("mousemove", function (e) {
            var t = o;
            if (t && t.settings.useMouse && t.mouseDown && t.settings.trackDocument) {
                var n = e[t.settings.coordinates + "X"],
                    a = e[t.settings.coordinates + "Y"];
                if (t.settings.trackDocumentNormalize) {
                    var s = r(t,
                        n, a);
                    n = s.x, a = s.y
                }
                t.doMove(e, n, a)
            }
        }).on("mouseup", function (e, t) {
            var n = o;
            if (n && n.settings.useMouse && n.settings.trackDocument) {
                if ("undefined" != typeof t && (e = t), !(n.settings.coordinates + "X" in e)) return;
                var a = e[n.settings.coordinates + "X"],
                    s = e[n.settings.coordinates + "Y"];
                if (n.settings.trackDocumentNormalize) {
                    var i = r(n, a, s);
                    a = i.x, s = i.y
                }
                n.doEnd(e, a, s), n.mouseDown = !1
            }
        })
}(jQuery);
/*
 jQuery UI - v1.11.2 - 2014-10-16
 http://jqueryui.com
 Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
 Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass =
            "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.regional.en =
            e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }

    function o() {
        e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }

    function h(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.11.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position"),
                    s = "absolute" ===
                    i,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents().filter(function () {
                        var t = e(this);
                        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
            },
            uniqueId: function () {
                var e = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }),
        e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (i) {
                    return !!e.data(i, t)
                }
            }) : function (t, i, s) {
                return !!e.data(t, s[3])
            },
            focusable: function (i) {
                return t(i, !isNaN(e.attr(i, "tabindex")))
            },
            tabbable: function (i) {
                var s = e.attr(i, "tabindex"),
                    n = isNaN(s);
                return (n || s >= 0) && t(i, !n)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
            function s(t, i, s, a) {
                return e.each(n, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" +
                        this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                a = i.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function (t) {
                return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                    e(this).css(a, s(this, t) + "px")
                })
            }, e.fn["outer" + i] = function (t, n) {
                return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                    e(this).css(a, s(this,
                        t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
            focus: function (t) {
                return function (i, s) {
                    return "number" == typeof i ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            e(t).focus(),
                                s && s.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function () {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(e + ".ui-disableSelection", function (e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function (t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                        if (i = n.css("position"), ("absolute" === i ||
                                "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                        n = n.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function (t, i, s) {
                var n, a = e.ui[t].prototype;
                for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
            },
            call: function (e, t, i, s) {
                var n, a = e.plugins[t];
                if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
            }
        };
    var l = 0,
        u = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s,
                n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o$15) {}
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                        return i.prototype[t].apply(this, arguments)
                    },
                    n = function (e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function () {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix ||
                t : t
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({},
                s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (n) {
            var a = "string" == typeof n,
                o = u.call(arguments, 1),
                r = this;
            return n = !a && o.length ? e.widget.extend.apply(null, [n].concat(o)) : n, a ? this.each(function () {
                var i, a = e.data(this, s);
                return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " +
                    t + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            }), r
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid,
                this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                } return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t,
                e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element,
                n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()),
                this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var d = !1;
    e(document).mouseup(function () {
            d = !1
        }), e.widget("ui.mouse", {
            version: "1.11.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function (e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function (i) {
                    return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." +
                    this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (t) {
                if (!d) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) &&
                        (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                            return i._mouseMove(e)
                        }, this._mouseUpDelegate = function (e) {
                            return i._mouseUp(e)
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
                }
            },
            _mouseMove: function (t) {
                if (this._mouseMoved) {
                    if (e.ui.ie &&
                        (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function (t) {
                return this.document.unbind("mousemove." + this.widgetName,
                    this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1
            },
            _mouseDistanceMet: function (e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0
            }
        }),
        function () {
            function t(e, t, i) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }

            function s(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            e.ui = e.ui || {};
            var n, a, o = Math.max,
                r = Math.abs,
                h = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                d = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function () {
                        if (void 0 !== n) return n;
                        var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            a = s.children()[0];
                        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"),
                            i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                    },
                    getScrollInfo: function (t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                        return {
                            width: a ? e.position.scrollbarWidth() : 0,
                            height: n ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function (t) {
                        var i = e(t || window),
                            s = e.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: s,
                            isDocument: n,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: s || n ? i.width() : i.outerWidth(),
                            height: s || n ? i.height() : i.outerHeight()
                        }
                    }
                }, e.fn.position = function (n) {
                    if (!n || !n.of) return f.apply(this, arguments);
                    n = e.extend({}, n);
                    var p, m, g, v, y, b, _ = e(n.of),
                        x = e.position.getWithinInfo(n.within),
                        w = e.position.getScrollInfo(x),
                        k = (n.collision || "flip").split(" "),
                        T = {};
                    return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset,
                        y = e.extend({}, v), e.each(["my", "at"], function () {
                            var e, t, i = (n[this] || "").split(" ");
                            1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                        }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2),
                        p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                            var s, l, u = e(this),
                                d = u.outerWidth(),
                                c = u.outerHeight(),
                                f = i(this, "marginLeft"),
                                b = i(this, "marginTop"),
                                D = d + f + i(this, "marginRight") + w.width,
                                S = c + b + i(this, "marginBottom") + w.height,
                                M = e.extend({}, y),
                                C = t(T.my, u.outerWidth(), u.outerHeight());
                            "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = {
                                    marginLeft: f,
                                    marginTop: b
                                },
                                e.each(["left", "top"], function (t, i) {
                                    e.ui.position[k[t]] && e.ui.position[k[t]][i](M, {
                                        targetWidth: m,
                                        targetHeight: g,
                                        elemWidth: d,
                                        elemHeight: c,
                                        collisionPosition: s,
                                        collisionWidth: D,
                                        collisionHeight: S,
                                        offset: [p[0] + C[0], p[1] + C[1]],
                                        my: n.my,
                                        at: n.at,
                                        within: x,
                                        elem: u
                                    })
                                }), n.using && (l = function (e) {
                                    var t = v.left - M.left,
                                        i = t + m - d,
                                        s = v.top - M.top,
                                        a = s + g - c,
                                        h = {
                                            target: {
                                                element: _,
                                                left: v.left,
                                                top: v.top,
                                                width: m,
                                                height: g
                                            },
                                            element: {
                                                element: u,
                                                left: M.left,
                                                top: M.top,
                                                width: d,
                                                height: c
                                            },
                                            horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                            vertical: 0 >
                                                a ? "top" : s > 0 ? "bottom" : "middle"
                                        };
                                    d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                                }), u.offset(e.extend(M, {
                                    using: l
                                }))
                        })
                }, e.ui.position = {
                    fit: {
                        left: function (e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = e.left - t.collisionPosition.marginLeft,
                                h = n - r,
                                l = r + t.collisionWidth - a - n;
                            t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h >
                                l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                        },
                        top: function (e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = t.within.height,
                                r = e.top - t.collisionPosition.marginTop,
                                h = n - r,
                                l = r + t.collisionHeight - a - n;
                            t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function (e, t) {
                            var i, s, n = t.within,
                                a = n.offset.left + n.scrollLeft,
                                o = n.width,
                                h = n.isWindow ?
                                n.scrollLeft : n.offset.left,
                                l = e.left - t.collisionPosition.marginLeft,
                                u = l - h,
                                d = l + t.collisionWidth - o - h,
                                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                f = -2 * t.offset[0];
                            0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                        },
                        top: function (e, t) {
                            var i, s, n = t.within,
                                a = n.offset.top + n.scrollTop,
                                o = n.height,
                                h = n.isWindow ? n.scrollTop :
                                n.offset.top,
                                l = e.top - t.collisionPosition.marginTop,
                                u = l - h,
                                d = l + t.collisionHeight - o - h,
                                c = "top" === t.my[1],
                                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                m = -2 * t.offset[1];
                            0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > d && (i > 0 || d > r(i)) && (e.top += p + f + m))
                        }
                    },
                    flipfit: {
                        left: function () {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this,
                                arguments)
                        },
                        top: function () {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function () {
                    var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
                        h = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, r && e.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in s) t.style[o] = s[o];
                    t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild),
                        h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.accordion", {
            version: "1.11.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ?
                        this.active.next() : e()
                }
            },
            _createIcons: function () {
                var t = this.options.icons;
                t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                    this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),
                    "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function (e, t) {
                return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",
                    !!t)), void 0)
            },
            _keydown: function (t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = e.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(t.target),
                        a = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            a = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            a = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            a = this.headers[0];
                            break;
                        case i.END:
                            a = this.headers[s - 1]
                    }
                    a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function (t) {
                t.keyCode ===
                    e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
            },
            refresh: function () {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(),
                    this._refresh()
            },
            _processPanels: function () {
                var e = this.headers,
                    t = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
            },
            _refresh: function () {
                var t, i = this.options,
                    s = i.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
                        var t = e(this),
                            i = t.uniqueId().attr("id"),
                            s = t.next(),
                            n = s.uniqueId().attr("id");
                        t.attr("aria-controls", n), s.attr("aria-labelledby", i)
                    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-hidden": "true"
                    }).hide(),
                    this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
                        var i = e(this),
                            s = i.css("position");
                        "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
                    }), this.headers.each(function () {
                        t -= e(this).outerHeight(!0)
                    }), this.headers.next().each(function () {
                        e(this).height(Math.max(0,
                            t - e(this).innerHeight() + e(this).height()))
                    }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
                        t = Math.max(t, e(this).css("height", "").height())
                    }).height(t))
            },
            _activate: function (t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
            },
            _setupEvents: function (t) {
                var i = {
                    keydown: "_keydown"
                };
                t && e.each(t.split(" "), function (e,
                    t) {
                    i[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (t) {
                var i = this.options,
                    s = this.active,
                    n = e(t.currentTarget),
                    a = n[0] === s[0],
                    o = a && i.collapsible,
                    r = o ? e() : n.next(),
                    h = s.next(),
                    l = {
                        oldHeader: s,
                        oldPanel: h,
                        newHeader: o ? e() : n,
                        newPanel: r
                    };
                t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active =
                    o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (t) {
                var i =
                    t.newPanel,
                    s = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
                    "aria-hidden": "true"
                }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function () {
                    return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function (e, t, i) {
                var s, n, a, o = this,
                    r = 0,
                    h = e.length && (!t.length || e.index() < t.index()),
                    l = this.options.animate || {},
                    u = h && l.down || l,
                    d = function () {
                        o._toggleComplete(i)
                    };
                return "number" == typeof u && (a = u), "string" == typeof u && (n = u), n = n || u.easing || l.easing, a = a || u.duration || l.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, {
                    duration: a,
                    easing: n,
                    step: function (e, t) {
                        t.now = Math.round(e)
                    }
                }), e.hide().animate(this.showProps, {
                    duration: a,
                    easing: n,
                    complete: d,
                    step: function (e, i) {
                        i.now = Math.round(e), "height" !== i.prop ? r += i.now : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0)
                    }
                }), void 0) : t.animate(this.hideProps, a, n, d) : e.animate(this.showProps, a, n, d)
            },
            _toggleComplete: function (e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.widget("ui.menu", {
            version: "1.11.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled",
                    "true"), this._on({
                    "mousedown .ui-menu-item": function (e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function (t) {
                        var i = e(t.target);
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (t) {
                        if (!this.previousFilter) {
                            var i =
                                e(t.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function (t) {
                        this._delay(function () {
                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e),
                            this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var t =
                        e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (t) {
                var i, s, n, a, o = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length ||
                            (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
                                delete this.previousFilter
                            }, 1E3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function (e) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
            },
            refresh: function () {
                var t, i, s = this,
                    n = this.options.icons.submenu,
                    a = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons",
                    !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var t = e(this),
                        i = t.parent(),
                        s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
                }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                    var t =
                        e(this);
                    s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                } [this.options.role]
            },
            _setOption: function (e, t) {
                "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
                    "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
            },
            focus: function (e, t) {
                var i, s;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                        this._close()
                    },
                    this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function (t) {
                var i, s, n, a, o, r;
                this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r >
                    o && this.activeMenu.scrollTop(a + n - o + r))
            },
            blur: function (e, t) {
                t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                    item: this.active
                }))
            },
            _startOpening: function (e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function (t) {
                var i = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden",
                    "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
                }, this.delay)
            },
            _close: function (e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function (t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function (e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function (e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function (e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function () {
                    this.focus(e, t)
                }))
            },
            next: function (e) {
                this._move("next",
                    "first", e)
            },
            previous: function (e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (e, t, i) {
                var s;
                this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i,
                    s)
            },
            nextPage: function (t) {
                var i, s, n;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = e(this), 0 > i.offset().top - s - n
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
            },
            previousPage: function (t) {
                var i, s, n;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(),
                    this.active.prevAll(".ui-menu-item").each(function () {
                        return i = e(this), i.offset().top - s + n > 0
                    }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            },
            _filterMenuItems: function (t) {
                var i =
                    t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    s = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return s.test(e.trim(e(this).text()))
                })
            }
        }), e.widget("ui.autocomplete", {
            version: "1.11.2",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                    a = "textarea" === n,
                    o = "input" === n;
                this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (n) {
                        if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                        t = !1, s = !1, i = !1;
                        var a = e.ui.keyCode;
                        switch (n.keyCode) {
                            case a.PAGE_UP:
                                t = !0, this._move("previousPage",
                                    n);
                                break;
                            case a.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case a.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case a.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case a.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case a.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case a.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function (s) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                        if (!i) {
                            var n = e.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function (e) {
                        return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (e) {
                        return this.cancelBlur ?
                            (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                    }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function (t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                            var t = this;
                            this.document.one("mousedown",
                                function (s) {
                                    s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                                })
                        })
                    },
                    menufocus: function (t, i) {
                        var s, n;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                            e(t.target).trigger(t.originalEvent)
                        }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                                item: n
                            }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") ||
                            n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
                    },
                    menuselect: function (e, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                            this.previous = s, this.selectedItem = i
                        })), !1 !== this._trigger("select", e, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                    }
                }), this.liveRegion = e("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e &&
                    this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function () {
                var t, i, s = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                    s(e.ui.autocomplete.filter(t, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source,
                    this.source = function (t, n) {
                        s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                            url: i,
                            data: t,
                            dataType: "json",
                            success: function (e) {
                                n(e)
                            },
                            error: function () {
                                n([])
                            }
                        })
                    }) : this.source = this.options.source
            },
            _searchTimeout: function (e) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function (e, t) {
                return e = null !=
                    e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
            },
            _search: function (e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function () {
                var t = ++this.requestIndex;
                return e.proxy(function (e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (e) {
                e &&
                    (e = this._normalize(e)), this._trigger("response", null, {
                        content: e
                    }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function (e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function (e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function (e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function (t) {
                return t.length &&
                    t[0].label && t[0].value ? t : e.map(t, function (t) {
                        return "string" == typeof t ? {
                            label: t,
                            value: t
                        } : e.extend({}, t, {
                            label: t.label || t.value,
                            value: t.value || t.label
                        })
                    })
            },
            _suggest: function (t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (t, i) {
                var s = this;
                e.each(i, function (e, i) {
                    s._renderItemData(t, i)
                })
            },
            _renderItemData: function (e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function (t, i) {
                return e("<li>").text(i.label).appendTo(t)
            },
            _move: function (e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null,
                    t), void 0)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function (e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (t, i) {
                var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                return e.grep(t, function (e) {
                    return s.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete",
            e.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function (e) {
                            return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function (t) {
                    var i;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
                }
            }), e.ui.autocomplete;
    var c, p = "ui-button ui-widget ui-state-default ui-corner-all",
        f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        m = function () {
            var t = e(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        g = function (t) {
            var i = t.name,
                s = t.form,
                n = e([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                return !this.form
            })), n
        };
    e.widget("ui.button", {
        version: "1.11.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                i = this.options,
                s = "checkbox" === this.type || "radio" === this.type,
                n = s ? "" :
                "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                    i.disabled || this === c && e(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function () {
                    i.disabled || e(this).removeClass(n)
                }).bind("click" + this.eventNamespace, function (e) {
                    i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                }),
                this._on({
                    focus: function () {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function () {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), s && this.element.bind("change" + this.eventNamespace, function () {
                    t.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    return i.disabled ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (i.disabled) return !1;
                    e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed",
                        "true");
                    var s = t.element[0];
                    g(s).not(s).map(function () {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                    return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
                        c = null
                    }), void 0)
                }).bind("mouseup" + this.eventNamespace, function () {
                    return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
                }).bind("keydown" + this.eventNamespace, function (t) {
                    return i.disabled ?
                        !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                    e(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                    t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" :
                this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"),
                    this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled",
                !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
                e(this).is(":checked") ?
                    e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t =
                this.buttonElement.removeClass(f),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"),
                this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            "disabled" === e && this.buttons.button("option",
                e, t), this._super(e, t)
        },
        refresh: function () {
            var t = "rtl" === this.element.css("direction"),
                i = this.element.find(this.options.items),
                s = i.filter(":ui-button");
            i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"),
                this.buttons.map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), e.ui.button, e.extend(e.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    var v;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function (t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid),
                a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function (t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var s = e(t);
            i.append = e([]),
                i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var s, n, a, o = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus",
                this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return e.datepicker._datepickerShowing &&
                    e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function (e) {
                    for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n);
                    return s
                }, a.setMonth(t(this._get(e, o.match(/MM/) ?
                    "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t,
            i, s, n, a) {
            var o, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv),
                e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function (t) {
            var i, s = e(t),
                n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs,
                function (e) {
                    return e === t ? null : e
                }))
        },
        _disableDatepicker: function (t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
                !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, "datepicker")
            } catch (i$16) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (t, i, s) {
            var n, a, o, h, l = this._getInst(t);
            return 2 === arguments.length && "string" ==
                typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l,
                    h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e,
            t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var i, s, n, a = e.datepicker._getInst(t.target),
                o = !0,
                r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]),
                        i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                        o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) &&
                    e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, s, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function (t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s),
                    e.datepicker._updateDatepicker(s))
            } catch (n$17) {}
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"),
                    a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                            return o |= "fixed" === e(this).css("position"), !o
                        }), h = {
                            left: e.datepicker._pos[0],
                            top: e.datepicker._pos[1]
                        }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }),
                        e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
                            position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                            display: "none",
                            left: h.left + "px",
                            top: h.top + "px"
                        }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(),
                            e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t),
                n = s[1],
                a = 17,
                r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                    i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                }, 0))
        },
        _shouldFocusInput: function (e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function (t,
            i, s) {
            var n = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) :
                0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function (t) {
            for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var i, s, n, a, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] ||
                e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function (t) {
            var i, s = e(t),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n),
                this._adjustDate(s)
        },
        _selectMonthYear: function (t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function (t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t,
                this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function (t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var s, n = e(t),
                a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput =
                null)
        },
        _updateAlternate: function (t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
                e(this).val(n)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864E5) / 7) + 1
        },
        parseDate: function (t,
            i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var n, a, o, r, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function (e) {
                    var i =
                        t.length > n + 1 && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                x = function (e) {
                    var t = _(e),
                        s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = "y" === e ? s : 1,
                        a = RegExp("^\\d{" + n + "," + s + "}"),
                        o = i.substring(h).match(a);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                },
                w = function (t, s, n) {
                    var a = -1,
                        o = e.map(_(t) ? n : s, function (e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function (e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function (e, t) {
                            var s = t[1];
                            return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ?
                                (a = t[0], h += s.length, !1) : void 0
                        }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + h;
                },
                k = function () {
                    if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (n = 0; t.length > n; n++)
                if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;
                else switch (t.charAt(n)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r =
                            new Date((x("!") - this._ticksTo1970) / 1E4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
            if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
                    g++, v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() +
                1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1E7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function (t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                l = function (e, t, i) {
                    var s = "" + t;
                    if (h(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                u = function (e, t, i, s) {
                    return h(e) ? s[t] : i[t]
                },
                d = "",
                c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), n, a);
                            break;
                        case "o":
                            d +=
                                l("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), o, r);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1E4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                    }
            return d
        },
        _possibleChars: function (e) {
            var t, i = "",
                s = !1,
                n = function (i) {
                    var s = e.length > t + 1 && e.charAt(t + 1) === i;
                    return s && t++, s
                };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function (e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s =
                    e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e),
                    a = n,
                    o = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r$18) {
                    s = t ? "" : s
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (t,
            i, s) {
            var n = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                a = function (i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s$19) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o +=
                                    parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                        }
                        l = h.exec(i)
                    }
                    return new Date(a, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() >
                12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var s = !t,
                n = e.selectedMonth,
                a = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" ===
                e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        e.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function () {
                        e.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function () {
                        e.datepicker._hideDatepicker()
                    },
                    today: function () {
                        e.datepicker._gotoToday(s)
                    },
                    selectDay: function () {
                        return e.datepicker._selectDay(s,
                            +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function () {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, z, H, F, E, O, j, W, L = new Date,
                R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(e, "isRTL"),
                B = this._get(e, "showButtonPanel"),
                J = this._get(e, "hideIfNoPrevNext"),
                q = this._get(e, "navigationAsDateFormat"),
                K = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                U = this._get(e, "stepMonths"),
                Q = 1 !== K[0] || 1 !== K[1],
                G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(),
                        $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
                for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all",
                        M = "", Q) {
                        if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" +
                        "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>";
                    for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), z = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = z, H = this._daylightSavingAdjust(new Date(et,
                            Z, 1 - P)), F = 0; z > F; F++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], j = H.getMonth() !== Z, W = j && !y || !O[0] || X && X > H || $ && H > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass +
                            " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (H.getTime() === G.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() ===
                            G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" +
                    i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? c : t
                        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" :
                        "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                } return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                n = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" ===
                i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, i, s) {
            var n = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function (e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                o = null,
                r = null,
                h =
                this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e,
                    "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function (t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" +
                t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.2", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length >
                0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var i = this.document[0];
            if (this.handleElement.is(t.target)) try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
            } catch (s$20) {}
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(),
                this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this,
                    t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            }
        },
        _mouseDrag: function (t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position =
                this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this,
                s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(),
                e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (t) {
            var i = this.options,
                s = e.isFunction(i.helper),
                n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) ||
                (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (e) {
            return /(html|body)/i.test(e.tagName) ||
                e === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !==
                this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"),
                    10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t, i, s, n = this.options,
                a = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width -
                this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
                i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) :
                    s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) *
                    i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (e, t) {
            var i, s, n, a, o = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = e.pageX,
                l = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] +
                s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top
            ]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >=
                i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ?
                    -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis &&
                "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i, s) {
            var n = e.extend({}, i, {
                item: s.element
            });
            s.sortables = [], e(s.options.connectToSortable).each(function () {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
            })
        },
        stop: function (t, i, s) {
            var n = e.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
                var e = this;
                e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
            })
        },
        drag: function (t, i, s) {
            e.each(s.sortables, function () {
                var n = !1,
                    a = this;
                a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click,
                    a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                    })), n ? (a.isOver || (a.isOver = 1, a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
                        return i.helper[0]
                    }, t.target = a.currentItem[0], a._mouseCapture(t,
                        !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
                        this.refreshPositions()
                    }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert,
                        a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
                            this.refreshPositions()
                        }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, i, s) {
            var n = e("body"),
                a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._cursor && e("body").css("cursor", n._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !==
                i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function (t, i, s) {
            var n = s.options,
                a = !1,
                o = s.scrollParentNotHidden[0],
                r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth -
                t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() -
                n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, i, s) {
            var n = s.options;
            s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var t = e(this),
                    i = t.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function (t, i, s) {
            var n, a, o, r, h, l, u, d, c, p, f = s.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + s.helperProportions.width,
                y = i.offset.top,
                b = y + s.helperProportions.height;
            for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release &&
                s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                        top: u - s.helperProportions.height,
                        left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: h - s.helperProportions.width
                    }).left), r &&
                    (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.top = s._convertPositionTo("relative", {
                    top: d - s.helperProportions.height,
                    left: 0
                }).top), o && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left)),
                !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = n || a || o || r || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, i, s) {
            var n, a = s.options,
                o = e.makeArray(e(a.stack)).sort(function (t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
                e(this).css("zIndex",
                    n + t)
            }), this.css("zIndex", n + o.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
        },
        stop: function (t, i, s) {
            var n = s.options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (e) {
            return parseInt(e, 10) || 0
        },
        _isNumber: function (e) {
            return !isNaN(parseInt(e, 10))
        },
        _hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        },
        _create: function () {
            var t, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })),
                    this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize",
                        "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" ===
                    this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function (t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                o.resizing ||
                    (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i, s, n = !1;
            for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var i,
                s, n, a = this.options,
                o = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {
                left: i,
                top: s
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var i,
                s, n = this.originalMousePosition,
                a = this.axis,
                o = t.pageX - n.left || 0,
                r = t.pageY - n.top || 0,
                h = this._change[a];
            return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize",
                t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                    width: u.helper.width() - a,
                    height: u.helper.height() - n
                }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) ||
                null, l.animate || this.element.css(e.extend(o, {
                    top: h,
                    left: r
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function () {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function (e) {
            var t, i, s, n, a, o = this.options;
            a = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ?
                    o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top =
                e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i),
                u = /nw|ne|n/.test(i);
            return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth),
                s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function (e) {
            for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
            return {
                height: i[0] +
                    i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function () {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(),
                this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function (e, t, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function (e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            sw: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            },
            ne: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this,
                    [t, i, s]))
            },
            nw: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i =
                e(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {
                top: u,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
                l = h.options,
                u = h.element,
                d = l.containment,
                c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) :
                d;
            c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
                i[e] = h._num(t.css("padding" + s))
            }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() -
                    i[1]
            }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
                element: c,
                left: s.left,
                top: s.top,
                width: o,
                height: r
            }))
        },
        resize: function (t) {
            var i, s, n, a, o = e(this).resizable("instance"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                u = o._aspectRatio || t.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                c = o.containerElement,
                p = !0;
            c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width +
                (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left,
                o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height *
                o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        },
        stop: function () {
            var t = e(this).resizable("instance"),
                i = t.options,
                s = t.containerOffset,
                n = t.containerPosition,
                a = t.containerElement,
                o = e(t.helper),
                r = o.offset(),
                h = o.outerWidth() - t.sizeDiff.width,
                l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                    left: r.left - n.left - s.left,
                    width: h,
                    height: l
                }), t._helper &&
                !i.animate && /static/.test(a.css("position")) && e(this).css({
                    left: r.left - n.left - s.left,
                    width: h,
                    height: l
                })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).resizable("instance"),
                i = t.options,
                s = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ?
                (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                    s(e)
                })
        },
        resize: function (t, i) {
            var s = e(this).resizable("instance"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function (t, s) {
                    e(t).each(function () {
                        var t = e(this),
                            n = e(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width",
                                "height", "top", "left"
                            ];
                        e.each(o, function (e, t) {
                            var i = (n[t] || 0) + (r[t] || 0);
                            i && i >= 0 && (a[t] = i || null)
                        }), t.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function (e, t) {
                h(e, t)
            })
        },
        stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).resizable("instance"),
                i = t.options,
                s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, i = e(this).resizable("instance"),
                s = i.options,
                n = i.size,
                a = i.originalSize,
                o = i.originalPosition,
                r = i.axis,
                h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1,
                u = h[1] || 1,
                d = Math.round((n.width - a.width) / l) * l,
                c = Math.round((n.height - a.height) / u) * u,
                p = a.width + d,
                f = a.height + c,
                m = s.maxWidth && p > s.maxWidth,
                g = s.maxHeight && f > s.maxHeight,
                v = s.minWidth && s.minWidth > p,
                y = s.minHeight && s.minHeight > f;
            s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top =
                o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = u - t.height, i.size.width = p, i.position.left = o.left + a.width - p))
        }
    }), e.ui.resizable, e.widget("ui.dialog", {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function () {
            this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title =
                this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery ||
                t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function (t) {
            var i, s = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                } catch (n$21) {}
                this._hide(this.uiDialog, this.options.hide, function () {
                    s._trigger("close", t)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +e(this).css("z-index")
                }).get(),
                a = Math.max.apply(null, n);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
        },
        open: function () {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null,
                !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function () {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog),
                e.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape &&
                        !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                            n.focus()
                        }), t.preventDefault()) : (this._delay(function () {
                            s.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function (e) {
                    this._moveToTop(e) &&
                        this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function (e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
                var n, a;
                s = e.isFunction(s) ? {
                        click: s,
                        text: i
                    } : s, s = e.extend({
                        type: "button"
                    }, s), n = s.click, s.click = function () {
                        n.apply(t.element[0], arguments)
                    },
                    a = {
                        icons: s.icons,
                        text: s.showText
                    }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, n) {
                    e(this).addClass("ui-dialog-dragging"),
                        i._blockFrames(), i._trigger("dragStart", s, t(n))
                },
                drag: function (e, s) {
                    i._trigger("drag", e, t(s))
                },
                stop: function (n, a) {
                    var o = a.offset.left - i.document.scrollLeft(),
                        r = a.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                }
            })
        },
        _makeResizable: function () {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                s = this.options,
                n = s.resizable,
                a = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (s, n) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n))
                },
                resize: function (e, s) {
                    i._trigger("resize", e, t(s))
                },
                stop: function (n,
                    a) {
                    var o = i.uiDialog.offset(),
                        r = o.left - i.document.scrollLeft(),
                        h = o.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
                        of: i.window
                    }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                }
            }).css("position", a)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(),
                this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var t = this._trackingInstances(),
                i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function () {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function () {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position),
                e || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this,
                s = !1,
                n = {};
            e.each(t, function (e, t) {
                i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function (e, t) {
            var i, s, n = this.uiDialog;
            "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
                "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: "" + t
                }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var e,
                t, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight",
                this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = !0;
                this._delay(function () {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var e =
                    this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t, i = this.options,
                s = i.accept;
            this.isover = !1,
                this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
                    return e.is(s)
                }, this.proportions = function () {
                    return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function (t) {
            e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function (e) {
            for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t,
                1)
        },
        _destroy: function () {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, i) {
            if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            };
            else if ("scope" === t) {
                var s = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
                i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i =
                e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var s = i || e.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var i = e(this).droppable("instance");
                return i.options.greedy &&
                    !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem ||
                    e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function () {
        function e(e, t, i) {
            return e >= t && t + i > e
        }
        return function (t, i, s, n) {
            if (!i.offset) return !1;
            var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                o = (t.positionAbs || t.position.absolute).top + t.margins.top,
                r = a + t.helperProportions.width,
                h = o + t.helperProportions.height,
                l = i.offset.left,
                u = i.offset.top,
                d = l + i.proportions().width,
                c = u + i.proportions().height;
            switch (s) {
                case "fit":
                    return a >= l && d >= r && o >= u && c >= h;
                case "intersect":
                    return a +
                        t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
                case "pointer":
                    return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
                case "touch":
                    return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
                default:
                    return !1
            }
        }
    }(), e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                r = (t.currentItem ||
                    t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions().height = 0;
                            continue e
                        } a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
                        width: a[s].element[0].offsetWidth,
                        height: a[s].element[0].offsetHeight
                    }))
                }
        },
        drop: function (t,
            i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function (t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions ||
                    e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function (t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                        return e(this).droppable("instance").options.scope ===
                            n
                    }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function (t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }, e.ui.droppable;
    var y = "ui-effects-",
        b = e;
    e.effects = {
            effect: {}
        },
        function (e, t) {
            function i(e, t, i) {
                var s = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function (e, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) *
                    i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [2.55 *
                            e[1], 2.55 * e[2], 2.55 * e[3], e[4]
                        ]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                l = e.Color = function (t, i,
                    s, n) {
                    return new e.Color.fn.parse(t, i, s, n)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = e.extend(l.prototype, {
                parse: function (n, o, r, h) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var d = this,
                        c = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
                        p[t.idx] = i(n[t.idx], t)
                    }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
                        n[t.cache] && (d[t.cache] = n[t.cache].slice())
                    }) : f(u, function (t, s) {
                        var a = s.cache;
                        f(s.props,
                            function (e, t) {
                                if (!d[a] && s.to) {
                                    if ("alpha" === e || null == n[e]) return;
                                    d[a] = s.to(d._rgba)
                                }
                                d[a][t.idx] = i(n[e], t, !0)
                            }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                    }), this) : t
                },
                is: function (e) {
                    var i = l(e),
                        s = !0,
                        n = this;
                    return f(u, function (e, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                        })), s
                    }), s
                },
                _space: function () {
                    var e = [],
                        t = this;
                    return f(u, function (i, s) {
                        t[s.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function (e, t) {
                    var s = l(e),
                        n = s._space(),
                        a = u[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function (e, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            u = d[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                    }), this[n](h)
                },
                blend: function (t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(t)._rgba;
                    return l(e.map(i, function (e, t) {
                        return (1 - s) * n[t] + s * e
                    }))
                },
                toRgbaString: function () {
                    var t =
                        "rgba(",
                        i = e.map(this._rgba, function (e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function () {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function (e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function (t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function () {
                    return 0 ===
                        this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    u = r + h,
                    d = .5 * u;
                return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t =
                    e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(u, function (s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    u = n.from;
                l.fn[s] = function (s) {
                        if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                        var n, r = e.type(s),
                            d = "array" === r || "object" === r ? s : arguments,
                            c = this[o].slice();
                        return f(a, function (e, t) {
                            var s = d["object" === r ? e : t.idx];
                            null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                        }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                    },
                    f(a, function (t, i) {
                        l.fn[t] || (l.fn[t] = function (n) {
                            var a, o = e.type(n),
                                h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                                l = this[h](),
                                u = l[i.idx];
                            return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                        })
                    })
            }), l.hook = function (t) {
                var i = t.split(" ");
                f(i, function (t, i) {
                    e.cssHooks[i] = {
                        set: function (t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !c.rgba &&
                                    1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = e.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (h$22) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (h$23) {}
                        }
                    }, e.fx.step[i] = function (t) {
                        t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, l.hook(o), e.cssHooks.borderColor = {
                expand: function (e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom",
                        "Left"
                    ], function (i, s) {
                        t["border" + s + "Color"] = e
                    }), t
                }
            }, a = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(b),
        function () {
            function t(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function i(t, i) {
                var s, a, o = {};
                for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
                return o
            }
            var s = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle",
                "borderTopStyle"
            ], function (t, i) {
                e.fx.step[i] = function (e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function (n, a, o, r) {
                var h = e.speed(a, o, r);
                return this.queue(function () {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function () {
                        var i = e(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    }), a = function () {
                        e.each(s,
                            function (e, t) {
                                n[t] && o[t + "Class"](n[t])
                            })
                    }, a(), l = l.map(function () {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function () {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, {
                                queue: !1,
                                complete: function () {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function () {
                        a(), e.each(arguments, function () {
                            var t = this.el;
                            e.each(this.diff, function (e) {
                                t.css(e, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function (t) {
                    return function (i,
                        s, n, a) {
                        return s ? e.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function (t) {
                    return function (i, s, n, a) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function (t) {
                    return function (i, s, n, a, o) {
                        return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                            add: i
                        } : {
                            remove: i
                        }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, s, n, a)
                    }
                }(e.fn.toggleClass),
                switchClass: function (t, i, s, n, a) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, s, n, a)
                }
            })
        }(),
        function () {
            function t(t, i, s, n) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
            }

            function i(t) {
                return !t ||
                    "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.2",
                save: function (e, t) {
                    for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]])
                },
                restore: function (e, t) {
                    var i, s;
                    for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i))
                },
                setMode: function (e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function (e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i =
                                0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function (t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: t.width(),
                            height: t.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o$24) {
                        a = document.body
                    }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                        i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(n), s.css(i).show()
                },
                removeWrapper: function (t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function (t, i, s, n) {
                    return n = n || {}, e.each(i, function (e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function () {
                    function i(t) {
                        function i() {
                            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                        }
                        var n = e(this),
                            a = s.complete,
                            r = s.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0],
                            s, i)
                    }
                    var s = t.apply(this, arguments),
                        n = s.mode,
                        a = s.queue,
                        o = e.effects.effect[s.effect];
                    return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
                        s.complete && s.complete.call(this)
                    }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
                },
                show: function (e) {
                    return function (s) {
                        if (i(s)) return e.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }
                }(e.fn.show),
                hide: function (e) {
                    return function (s) {
                        if (i(s)) return e.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }
                }(e.fn.hide),
                toggle: function (e) {
                    return function (s) {
                        if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                }(e.fn.toggle),
                cssUnit: function (t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function (e, t) {
                        i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                    }), s
                }
            })
        }(),
        function () {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
                t[i] = function (t) {
                    return Math.pow(t,
                        e + 2)
                }
            }), e.extend(t, {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function (e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function (e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function (t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function (e) {
                    return .5 >
                        e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }(), e.effects, e.effects.effect.blind = function (t, i) {
            var s, n, a, o = e(this),
                r = /up|down|vertical/,
                h = /up|left|vertical|horizontal/,
                l = ["position", "top", "bottom", "left", "right", "height", "width"],
                u = e.effects.setMode(o, t.mode || "hide"),
                d = t.direction || "up",
                c = r.test(d),
                p = c ? "height" : "width",
                f = c ? "top" : "left",
                m = h.test(d),
                g = {},
                v = "show" === u;
            o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({
                    overflow: "hidden"
                }), n =
                s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
                    position: "absolute"
                }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
                    duration: t.duration,
                    easing: t.easing,
                    queue: !1,
                    complete: function () {
                        "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i()
                    }
                })
        }, e.effects.effect.bounce = function (t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "effect"),
                l = "hide" ===
                h,
                u = "show" === h,
                d = t.direction || "up",
                c = t.distance,
                p = t.times || 5,
                f = 2 * p + (u || l ? 1 : 0),
                m = t.duration / f,
                g = t.easing,
                v = "up" === d || "down" === d ? "top" : "left",
                y = "up" === d || "left" === d,
                b = o.queue(),
                _ = b.length;
            for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {
                    opacity: 1
                }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a,
                m, g), c = l ? 2 * c : c / 2;
            l && (n = {
                opacity: 0
            }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
                l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
            }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
        }, e.effects.effect.clip = function (t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "hide"),
                l = "show" === h,
                u = t.direction || "vertical",
                d = "vertical" === u,
                c = d ? "height" : "width",
                p = d ? "top" : "left",
                f = {};
            e.effects.save(o, r),
                o.show(), s = e.effects.createWrapper(o).css({
                    overflow: "hidden"
                }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
                    }
                })
        }, e.effects.effect.drop = function (t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = e.effects.setMode(n, t.mode || "hide"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" ===
                h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h ? "pos" : "neg",
                d = {
                    opacity: r ? 1 : 0
                };
            e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
                }
            })
        }, e.effects.effect.explode = function (t, i) {
            function s() {
                b.push(this),
                    b.length === d * c && n()
            }

            function n() {
                p.css({
                    visibility: "visible"
                }), e(b).remove(), m || p.hide(), i()
            }
            var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                c = d,
                p = e(this),
                f = e.effects.setMode(p, t.mode || "hide"),
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / c),
                y = Math.ceil(p.outerHeight() / d),
                b = [];
            for (a = 0; d > a; a++)
                for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -a * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: y,
                    left: r + (m ? l * v : 0),
                    top: h + (m ? u * y : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : l * v),
                    top: h + (m ? 0 : u * y),
                    opacity: m ? 1 : 0
                }, t.duration || 500, t.easing, s)
        }, e.effects.effect.fade = function (t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "toggle");
            s.animate({
                opacity: n
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }, e.effects.effect.fold = function (t, i) {
            var s, n, a = e(this),
                o = ["position", "top",
                    "bottom", "left", "right", "height", "width"
                ],
                r = e.effects.setMode(a, t.mode || "hide"),
                h = "show" === r,
                l = "hide" === r,
                u = t.size || 15,
                d = /([0-9]+)%/.exec(u),
                c = !!t.horizFirst,
                p = h !== c,
                f = p ? ["width", "height"] : ["height", "width"],
                m = t.duration / 2,
                g = {},
                v = {};
            e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
                overflow: "hidden"
            }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
                height: 0,
                width: u
            } : {
                height: u,
                width: 0
            }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m,
                t.easing).animate(v, m, t.easing, function () {
                l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
            })
        }, e.effects.effect.highlight = function (t, i) {
            var s = e(this),
                n = ["backgroundImage", "backgroundColor", "opacity"],
                a = e.effects.setMode(s, t.mode || "show"),
                o = {
                    backgroundColor: s.css("backgroundColor")
                };
            "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    "hide" ===
                    a && s.hide(), e.effects.restore(s, n), i()
                }
            })
        }, e.effects.effect.size = function (t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                l = ["width", "height", "overflow"],
                u = ["fontSize"],
                d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = e.effects.setMode(o, t.mode || "effect"),
                f = t.restore || "effect" !== p,
                m = t.scale || "both",
                g = t.origin || ["middle", "center"],
                v = o.css("position"),
                y = f ? r : h,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && o.show(), s = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
                from: {
                    y: o.from.height / s.height,
                    x: o.from.width / s.width
                },
                to: {
                    y: o.to.height / s.height,
                    x: o.to.width / s.width
                }
            }, ("box" === m || "both" === m) && (a.from.y !==
                a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow",
                "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
                var i = e(this),
                    s = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                f && e.effects.save(i, l), i.from = {
                    height: s.height * a.from.y,
                    width: s.width * a.from.x,
                    outerHeight: s.outerHeight * a.from.y,
                    outerWidth: s.outerWidth * a.from.x
                }, i.to = {
                    height: s.height * a.to.y,
                    width: s.width * a.to.x,
                    outerHeight: s.height * a.to.y,
                    outerWidth: s.width * a.to.x
                }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i,
                    c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                    f && e.effects.restore(i, l)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
                            position: "relative",
                            top: o.to.top,
                            left: o.to.left
                        }) : e.each(["top", "left"], function (e, t) {
                            o.css(t, function (t, i) {
                                var s = parseInt(i, 10),
                                    n = e ? o.to.left : o.to.top;
                                return "auto" === i ? n + "px" : s + n + "px"
                            })
                        })), e.effects.removeWrapper(o),
                        i()
                }
            })
        }, e.effects.effect.scale = function (t, i) {
            var s = e(this),
                n = e.extend(!0, {}, t),
                a = e.effects.setMode(s, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
                r = t.direction || "both",
                h = t.origin,
                l = {
                    height: s.height(),
                    width: s.width(),
                    outerHeight: s.outerHeight(),
                    outerWidth: s.outerWidth()
                },
                u = {
                    y: "horizontal" !== r ? o / 100 : 1,
                    x: "vertical" !== r ? o / 100 : 1
                };
            n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : l), n.to = {
                height: l.height * u.y,
                width: l.width * u.x,
                outerHeight: l.outerHeight * u.y,
                outerWidth: l.outerWidth * u.x
            }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
        }, e.effects.effect.puff = function (t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "hide"),
                a = "hide" === n,
                o = parseInt(t.percent, 10) || 150,
                r = o / 100,
                h = {
                    height: s.height(),
                    width: s.width(),
                    outerHeight: s.outerHeight(),
                    outerWidth: s.outerWidth()
                };
            e.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: n,
                complete: i,
                percent: a ? o : 100,
                from: a ? h : {
                    height: h.height * r,
                    width: h.width * r,
                    outerHeight: h.outerHeight * r,
                    outerWidth: h.outerWidth * r
                }
            }), s.effect(t)
        }, e.effects.effect.pulsate = function (t, i) {
            var s, n = e(this),
                a = e.effects.setMode(n, t.mode || "show"),
                o = "show" === a,
                r = "hide" === a,
                h = o || "hide" === a,
                l = 2 * (t.times || 5) + (h ? 1 : 0),
                u = t.duration / l,
                d = 0,
                c = n.queue(),
                p = c.length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({
                opacity: d
            }, u, t.easing), d = 1 - d;
            n.animate({
                    opacity: d
                },
                u, t.easing), n.queue(function () {
                r && n.hide(), i()
            }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
        }, e.effects.effect.shake = function (t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = e.effects.setMode(n, t.mode || "effect"),
                r = t.direction || "left",
                h = t.distance || 20,
                l = t.times || 3,
                u = 2 * l + 1,
                d = Math.round(t.duration / u),
                c = "up" === r || "down" === r ? "top" : "left",
                p = "up" === r || "left" === r,
                f = {},
                m = {},
                g = {},
                v = n.queue(),
                y = v.length;
            for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n),
                f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
            n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
        }, e.effects.effect.slide = function (t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = e.effects.setMode(n, t.mode ||
                    "show"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h,
                d = {};
            e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
                overflow: "hidden"
            }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
                }
            })
        }, e.effects.effect.transfer = function (t,
            i) {
            var s = e(this),
                n = e(t.to),
                a = "fixed" === n.css("position"),
                o = e("body"),
                r = a ? o.scrollTop() : 0,
                h = a ? o.scrollLeft() : 0,
                l = n.offset(),
                u = {
                    top: l.top - r,
                    left: l.left - h,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                },
                d = s.offset(),
                c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                    top: d.top - r,
                    left: d.left - h,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: a ? "fixed" : "absolute"
                }).animate(u, t.duration, t.easing, function () {
                    c.remove(), i()
                })
        }, e.widget("ui.progressbar", {
            version: "1.11.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.valueDiv.remove()
            },
            value: function (e) {
                return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
            },
            _constrainedValue: function (e) {
                return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
            },
            _setOptions: function (e) {
                var t = e.value;
                delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _setOption: function (e,
                t) {
                "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate",
                    this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        }), e.widget("ui.selectable", e.ui.mouse, {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var t, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
                        var t = e(this),
                            i = t.offset();
                        e.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function (t) {
                var i = this,
                    s = this.options;
                this.opos = [t.pageX, t.pageY],
                    this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                            left: t.pageX,
                            top: t.pageY,
                            width: 0,
                            height: 0
                        }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                            var s = e.data(this, "selectable-item");
                            s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
                                unselecting: s.element
                            }))
                        }),
                        e(t.target).parents().addBack().each(function () {
                            var s, n = e.data(this, "selectable-item");
                            return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                                selecting: n.element
                            }) : i._trigger("unselecting", t, {
                                unselecting: n.element
                            }), !1) : void 0
                        }))
            },
            _mouseDrag: function (t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, s = this,
                        n =
                        this.options,
                        a = this.opos[0],
                        o = this.opos[1],
                        r = t.pageX,
                        h = t.pageY;
                    return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
                        left: a,
                        top: o,
                        width: r - a,
                        height: h - o
                    }), this.selectees.each(function () {
                        var i = e.data(this, "selectable-item"),
                            l = !1;
                        i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"),
                            i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                            selecting: i.element
                        }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
                            unselecting: i.element
                        }))), i.selected && (t.metaKey || t.ctrlKey ||
                            i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                                unselecting: i.element
                            })))))
                    }), !1
                }
            },
            _mouseStop: function (t) {
                var i = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                    var s = e.data(this, "selectable-item");
                    s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
                        unselected: s.element
                    })
                }), e(".ui-selecting", this.element[0]).each(function () {
                    var s =
                        e.data(this, "selectable-item");
                    s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
                        selected: s.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.selectmenu", {
            version: "1.11.2",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
            },
            _drawButton: function () {
                var t = this,
                    i = this.element.attr("tabindex");
                this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                        click: function (e) {
                            this.button.focus(), e.preventDefault()
                        }
                    }), this.element.hide(), this.button = e("<span>", {
                        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                        tabindex: i || this.options.disabled ? -1 : 0,
                        id: this.ids.button,
                        role: "combobox",
                        "aria-expanded": "false",
                        "aria-autocomplete": "list",
                        "aria-owns": this.ids.menu,
                        "aria-haspopup": "true"
                    }).insertAfter(this.element), e("<span>", {
                        "class": "ui-icon " + this.options.icons.button
                    }).prependTo(this.button), this.buttonText = e("<span>", {
                        "class": "ui-selectmenu-text"
                    }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents),
                    this.button.one("focusin", function () {
                        t.menuItems || t._refreshMenu()
                    }), this._hoverable(this.button), this._focusable(this.button)
            },
            _drawMenu: function () {
                var t = this;
                this.menu = e("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = e("<div>", {
                    "class": "ui-selectmenu-menu ui-front"
                }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function (e, i) {
                        e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"),
                            e)
                    },
                    focus: function (e, i) {
                        var s = i.item.data("ui-selectmenu-item");
                        null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {
                            item: s
                        }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                    }
                }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
            },
            _refreshMenu: function () {
                this.menu.empty();
                var e, t = this.element.find("option");
                t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled",
                    this.element.prop("disabled")))
            },
            open: function (e) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
            },
            _position: function () {
                this.menuWrap.position(e.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function (e) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderMenu: function (t, i) {
                var s = this,
                    n = "";
                e.each(i, function (i, a) {
                    a.optgroup !== n && (e("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: a.optgroup
                    }).appendTo(t), n = a.optgroup), s._renderItemData(t, a)
                })
            },
            _renderItemData: function (e, t) {
                return this._renderItem(e,
                    t).data("ui-selectmenu-item", t)
            },
            _renderItem: function (t, i) {
                var s = e("<li>");
                return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t)
            },
            _setText: function (e, t) {
                t ? e.text(t) : e.html("&#160;")
            },
            _move: function (e, t) {
                var i, s, n = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t,
                    s)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function (e) {
                this[this.isOpen ? "close" : "open"](e)
            },
            _setSelection: function () {
                var e;
                this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (t) {
                    this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var e;
                    window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function (e) {
                    this._setSelection(), this._toggle(e)
                },
                keydown: function (t) {
                    var i = !0;
                    switch (t.keyCode) {
                        case e.ui.keyCode.TAB:
                        case e.ui.keyCode.ESCAPE:
                            this.close(t), i = !1;
                            break;
                        case e.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case e.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case e.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next",
                                t);
                            break;
                        case e.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case e.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case e.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), i = !1
                    }
                    i && t.preventDefault()
                }
            },
            _selectFocusedItem: function (e) {
                var t = this.menuItems.eq(this.focusIndex);
                t.hasClass("ui-state-disabled") ||
                    this._select(t.data("ui-selectmenu-item"), e)
            },
            _select: function (e, t) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
                    item: e
                }), e.index !== i && this._trigger("change", t, {
                    item: e
                }), this.close(t)
            },
            _setAria: function (e) {
                var t = this.menuItems.eq(e.index).attr("id");
                this.button.attr({
                    "aria-labelledby": t,
                    "aria-activedescendant": t
                }), this.menu.attr("aria-activedescendant", t)
            },
            _setOption: function (e, t) {
                "icons" ===
                e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t &&
                    (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function () {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var e = this.options.width;
                e || (e = this.element.show().outerWidth(), this.element.hide()),
                    this.button.outerWidth(e)
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                return {
                    disabled: this.element.prop("disabled")
                }
            },
            _parseOptions: function (t) {
                var i = [];
                t.each(function (t, s) {
                    var n = e(s),
                        a = n.parent("optgroup");
                    i.push({
                        element: n,
                        index: t,
                        value: n.attr("value"),
                        label: n.text(),
                        optgroup: a.attr("label") || "",
                        disabled: a.prop("disabled") || n.prop("disabled")
                    })
                }), this.items = i
            },
            _destroy: function () {
                this.menuWrap.remove(),
                    this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
            }
        }), e.widget("ui.slider", e.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var t, i, s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    o = [];
                for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
                this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                    e(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function () {
                var t = this.options,
                    i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(),
                    this._valueMin()
                ]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles),
                    this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var i, s, n, a, o, r, h, l, u = this,
                    d = this.options;
                return d.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), i = {
                        x: t.pageX,
                        y: t.pageY
                    }, s = this._normValueFromMouse(i),
                    n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                        var i = Math.abs(s - u.values(t));
                        (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
                    }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                        left: 0,
                        top: 0
                    } : {
                        left: t.pageX - h.left - a.width() / 2,
                        top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) ||
                            0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (e) {
                var t = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1
            },
            _mouseStop: function (e) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex =
                    null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (e) {
                var t, i, s, n, a;
                return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation &&
                    (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
            },
            _start: function (e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
            },
            _slide: function (e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) &&
                    (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                        handle: this.handles[t],
                        value: i,
                        values: n
                    }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: i
                }), a !== !1 && this.value(i))
            },
            _stop: function (e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
            },
            _change: function (e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
                }
            },
            value: function (e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
            },
            values: function (t, i) {
                var s, n, a;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                this._refreshValue()
            },
            _setOption: function (t, i) {
                var s, n = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length -
                    1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function () {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function (e) {
                var t, i, s;
                if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (e) {
                if (this._valueMin() >= e) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    s = e - i;
                return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function () {
                var e = (this.options.max - this._valueMin()) % this.options.step;
                this.max = this.options.max - e
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshValue: function () {
                var t, i, s, n, a, o = this.options.range,
                    r = this.options,
                    h = this,
                    l = this._animateOff ? !1 : r.animate,
                    u = {};
                this.options.values && this.options.values.length ? this.handles.each(function (s) {
                    i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 &&
                        ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                            left: i + "%"
                        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                            width: i - t + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                            bottom: i + "%"
                        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                            height: i - t + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        }))), t = i
                }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ?
                    "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))
            },
            _handleEvents: {
                keydown: function (t) {
                    var i,
                        s, n, a, o = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                    }
                    switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(),
                        t.keyCode) {
                        case e.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + a);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - a)
                    }
                    this._slide(t, o, n)
                },
                keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
                }
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1E3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (e, t, i) {
                return e >= t && t + i > e
            },
            _isFloating: function (e) {
                return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
            },
            _create: function () {
                var e = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (e, t) {
                this._super(e, t), "handle" === e && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) :
                        this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (t, i) {
                var s = null,
                    n = !1,
                    a = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                    return e.data(this,
                        a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
                }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
                    this === t.target && (n = !0)
                }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function (t, i, s) {
                var n, a, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(),
                    this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
                    this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                        this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                    for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager &&
                    (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function (t) {
                var i, s, n, a, o = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top +
                        this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft =
                            r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() +
                        o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 ===
                            a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                        if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                        break
                    } return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (t, i) {
                if (t) {
                    if (e.ui.ddmanager &&
                        !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var s = this,
                            n = this.placeholder.offset(),
                            a = this.options.axis,
                            o = {};
                        a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500,
                            function () {
                                s._clear(t)
                            })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over =
                        0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t =
                    t || {}, e(i).each(function () {
                        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                    }), !s.length && t.key && s.push(t.key + "="), s.join("&")
            },
            toArray: function (t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t = t || {}, i.each(function () {
                    s.push(e(t.item || this).attr(t.attribute || "id") || "")
                }), s
            },
            _intersectsWith: function (e) {
                var t = this.positionAbs.left,
                    i = t + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    a = e.left,
                    o = a + e.width,
                    r = e.top,
                    h = r + e.height,
                    l = this.offset.click.top,
                    u = this.offset.click.left,
                    d = "x" === this.options.axis || s + l > r && h > s + l,
                    c = "y" === this.options.axis || t + u > a && o > t + u,
                    p = d && c;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height /
                    2 > r && h > n - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function (e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    s = t && i,
                    n = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
            },
            _intersectsWithSides: function (e) {
                var t = this._isOverAxis(this.positionAbs.top +
                        this.offset.click.top, e.top + e.height / 2, e.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
            },
            _getDragVerticalDirection: function () {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? "right" : "left")
            },
            refresh: function (e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function (t) {
                function i() {
                    r.push(this)
                }
                var s, n, a, o, r = [],
                    h = [],
                    l = this._connectWith();
                if (l && t)
                    for (s = l.length - 1; s >= 0; s--)
                        for (a = e(l[s]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ?
                            o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o
                        ]);
                for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
                return e(r)
            },
            _removeCurrentsFromItems: function () {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function (e) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (t) {
                this.items = [], this.containers = [this];
                var i, s, n, a, o, r, h, l, u = this.items,
                    d = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (i = c.length - 1; i >= 0; i--)
                        for (n = e(c[i]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled &&
                            (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                                item: this.currentItem
                            }) : e(a.options.items, a.element), a]), this.containers.push(a));
                for (i = d.length - 1; i >= 0; i--)
                    for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, s, n, a;
                for (i = this.items.length - 1; i >= 0; i--) s = this.items[i],
                    s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left,
                        this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (t) {
                t = t || this;
                var i, s = t.options;
                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                    element: function () {
                        var s = t.currentItem[0].nodeName.toLowerCase(),
                            n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === s ? t.currentItem.children().each(function () {
                            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
                        }) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                    },
                    update: function (e, n) {
                        (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") ||
                            0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function (t) {
                var i, s, n, a, o, r, h, l, u, d, c = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                            c = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (c)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (n = 1E4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >=
                            0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                        if (!a && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over =
                            1), void 0;
                        a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function (t) {
                var i = this.options,
                    s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0],
                        [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
                    (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
            },
            _adjustOffsetFromHelper: function (t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"),
                        10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"),
                        10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var t, i, s, n = this.options;
                "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document : window).width() - this.helperProportions.width -
                    this.margins.left, (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"),
                    10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (t, i) {
                i || (i = this.position);
                var s = "absolute" ===
                    t ? 1 : -1,
                    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(n[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                    left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
                }
            },
            _generatePosition: function (t) {
                var i,
                    s, n = this.options,
                    a = t.pageX,
                    o = t.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    h = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] +
                    this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ?
                    i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                    left: a - this.offset.click.left -
                        this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function (e, t, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function () {
                    n === this.counter && this.refreshPositions(!s)
                })
            },
            _clear: function (e, t) {
                function i(e, t, i) {
                    return function (s) {
                        i._trigger(e,
                            s, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var s, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && n.push(function (e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }),
                    !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
                        this._trigger("update", e, this._uiHash())
                    }), this !== this.currentContainer && (t || (n.push(function (e) {
                        this._trigger("remove", e, this._uiHash())
                    }), n.push(function (e) {
                        return function (t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), n.push(function (e) {
                        return function (t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this,
                        this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                    this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (s = 0; n.length > s; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || e([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), e.widget("ui.spinner", {
            version: "1.11.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min",
                    this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var t = {},
                    i = this.element;
                return e.each(["min", "max", "step"], function (e, s) {
                    var n = i.attr(s);
                    void 0 !== n && n.length && (t[s] = n)
                }), t
            },
            _events: {
                keydown: function (e) {
                    this._start(e) && this._keydown(e) && e.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
                },
                mousewheel: function (e, t) {
                    if (t) {
                        if (!this.spinning && !this._start(e)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(e)
                        }, 100), e.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (t) {
                    function i() {
                        var e =
                            this.element[0] === this.document[0].activeElement;
                        e || (this.element.focus(), this.previous = s, this._delay(function () {
                            this.previous = s
                        }))
                    }
                    var s;
                    s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (t) {
                    return e(t.currentTarget).hasClass("ui-state-active") ?
                        this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function () {
                var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) &&
                    e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
            },
            _keydown: function (t) {
                var i = this.options,
                    s = e.ui.keyCode;
                switch (t.keyCode) {
                    case s.UP:
                        return this._repeat(null, 1, t), !0;
                    case s.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case s.PAGE_UP:
                        return this._repeat(null, i.page, t), !0;
                    case s.PAGE_DOWN:
                        return this._repeat(null, -i.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function () {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
                    this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
            },
            _start: function (e) {
                return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (e, t, i) {
                e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, t, i)
                }, e), this._spin(t * this.options.step, i)
            },
            _spin: function (e, t) {
                var i = this.value() ||
                    0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function (t) {
                var i = this.options.incremental;
                return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5E4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
            },
            _precisionOf: function (e) {
                var t = "" + e,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function (e) {
                var t, i, s = this.options;
                return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
            },
            _stop: function (e) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
            },
            _setOption: function (e, t) {
                if ("culture" === e || "numberFormat" === e) {
                    var i = this._parse(this.element.val());
                    return this.options[e] = t, this.element.val(this._format(i)), void 0
                }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
            },
            _setOptions: h(function (e) {
                this._super(e)
            }),
            _parse: function (e) {
                return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
            },
            _format: function (e) {
                return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var e =
                    this.value();
                return null === e ? !1 : e === this._adjustValue(e)
            },
            _value: function (e, t) {
                var i;
                "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
            },
            _destroy: function () {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: h(function (e) {
                this._stepUp(e)
            }),
            _stepUp: function (e) {
                this._start() && (this._spin((e || 1) * this.options.step), this._stop())
            },
            stepDown: h(function (e) {
                this._stepDown(e)
            }),
            _stepDown: function (e) {
                this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
            },
            pageUp: h(function (e) {
                this._stepUp((e || 1) * this.options.page)
            }),
            pageDown: h(function (e) {
                this._stepDown((e || 1) * this.options.page)
            }),
            value: function (e) {
                return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        }),
        e.widget("ui.tabs", {
            version: "1.11.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var e = /#.*$/;
                return function (t) {
                    var i, s;
                    t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (n$25) {}
                    try {
                        s = decodeURIComponent(s)
                    } catch (n$26) {}
                    return t.hash.length > 1 && i === s
                }
            }(),
            _create: function () {
                var t = this,
                    i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                    return t.tabs.index(e)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var t =
                    this.options.active,
                    i = this.options.collapsible,
                    s = location.hash.substring(1);
                return null === t && (s && this.tabs.each(function (i, n) {
                    return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0
                }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : e()
                }
            },
            _tabKeydown: function (t) {
                var i = e(this.document[0].activeElement).closest("li"),
                    s = this.tabs.index(i),
                    n = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            s++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            n = !1, s--;
                            break;
                        case e.ui.keyCode.END:
                            s = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            s = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                        case e.ui.keyCode.ENTER:
                            return t.preventDefault(),
                                clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", s)
                    }, this.delay))
                }
            },
            _panelKeydown: function (t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (t) {
                return t.altKey &&
                    t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (t, i) {
                function s() {
                    return t > n && (t = 0), 0 > t && (t = n), t
                }
                for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function (e, t) {
                return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
            },
            _setOption: function (e, t) {
                return "active" ===
                    e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
            },
            _sanitizeSelector: function (e) {
                return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = e.map(i.filter(".ui-state-disabled"),
                    function (e) {
                        return i.index(e)
                    }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle),
                    this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var t = this,
                    i = this.tabs,
                    s = this.anchors,
                    n = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
                        e(this).is(".ui-state-disabled") && t.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                        e(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }),
                    this.anchors = this.tabs.map(function () {
                        return e("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = e(), this.anchors.each(function (i, s) {
                        var n, a, o, r = e(s).uniqueId().attr("id"),
                            h = e(s).closest("li"),
                            l = h.attr("aria-controls");
                        t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live",
                            "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({
                            "aria-controls": o,
                            "aria-labelledby": r
                        }), a.attr("aria-labelledby", r)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (t) {
                return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",
                    !0)
            },
            _setupDisabled: function (t) {
                e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function (t) {
                var i = {};
                t && e.each(t.split(" "), function (e, t) {
                        i[t] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function (e) {
                            e.preventDefault()
                        }
                    }),
                    this._on(this.anchors, i), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (t) {
                var i, s = this.element.parent();
                "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var t = e(this),
                        s = t.css("position");
                    "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -=
                        e(this).outerHeight(!0)
                }), this.panels.each(function () {
                    e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                    i = Math.max(i, e(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (t) {
                var i = this.options,
                    s = this.active,
                    n = e(t.currentTarget),
                    a = n.closest("li"),
                    o = a[0] === s[0],
                    r = o && i.collapsible,
                    h = r ? e() : this._getPanelForTab(a),
                    l = s.length ? this._getPanelForTab(s) : e(),
                    u = {
                        oldTab: s,
                        oldPanel: l,
                        newTab: r ? e() : a,
                        newPanel: h
                    };
                t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
            },
            _toggle: function (t, i) {
                function s() {
                    a.running = !1, a._trigger("activate", t, i)
                }

                function n() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                        o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
                }
                var a = this,
                    o = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                    }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length &&
                    this.tabs.filter(function () {
                        return 0 === e(this).attr("tabIndex")
                    }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
            },
            _activate: function (t) {
                var i, s = this._findActive(t);
                s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return t === !1 ? e() : this.tabs.eq(t)
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e =
                    this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                    e.data(this,
                        "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var t = e(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") :
                        t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (t) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
                    return e !== t ? e : null
                }) : e.map(this.tabs, function (e, i) {
                    return i !== t ? i : null
                })), this._setupDisabled(i))
            },
            disable: function (t) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === t) i = !0;
                    else {
                        if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                        i = e.isArray(i) ? e.merge([t],
                            i).sort() : [t]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function (t, i) {
                t = this._getIndex(t);
                var s = this,
                    n = this.tabs.eq(t),
                    a = n.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(n),
                    r = {
                        tab: n,
                        panel: o
                    };
                this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function (e) {
                    setTimeout(function () {
                        o.html(e), s._trigger("load", i, r)
                    }, 1)
                }).complete(function (e, t) {
                    setTimeout(function () {
                        "abort" === t && s.panels.stop(!1,
                            !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function (t, i, s) {
                var n = this;
                return {
                    url: t.attr("href"),
                    beforeSend: function (t, a) {
                        return n._trigger("beforeLoad", i, e.extend({
                            jqXHR: t,
                            ajaxSettings: a
                        }, s))
                    }
                }
            },
            _getPanelForTab: function (t) {
                var i = e(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), e.widget("ui.tooltip", {
            version: "1.11.2",
            options: {
                content: function () {
                    var t = e(this).attr("title") || "";
                    return e("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function (t, i) {
                var s = (t.attr("aria-describedby") || "").split(/\s+/);
                s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
            },
            _removeDescribedBy: function (t) {
                var i = t.data("ui-tooltip-id"),
                    s = (t.attr("aria-describedby") || "").split(/\s+/),
                    n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"),
                    s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function (t, i) {
                var s = this;
                return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) :
                    (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
                        s._updateContent(t.element)
                    }), void 0)
            },
            _disable: function () {
                var t = this;
                e.each(this.tooltips, function (i, s) {
                    var n = e.Event("blur");
                    n.target = n.currentTarget = s.element[0], t.close(n, !0)
                }), this.element.find(this.options.items).addBack().each(function () {
                    var t = e(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            },
            _enable: function () {
                this.element.find(this.options.items).addBack().each(function () {
                    var t = e(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function (t) {
                var i = this,
                    s = e(t ? t.target : this.element).closest(this.options.items);
                s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
                    var t, s = e(this);
                    s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: s.attr("title")
                    }, s.attr("title", ""))
                }), this._updateContent(s, t))
            },
            _updateContent: function (e, t) {
                var i, s = this.options.content,
                    n = this,
                    a = t ? t.type : null;
                return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
                    e.data("ui-tooltip-open") && n._delay(function () {
                        t && (t.type = a), this._open(t, e, i)
                    })
                }), i && this._open(t, e, i), void 0)
            },
            _open: function (t, i, s) {
                function n(e) {
                    u.of = e, o.is(":hidden") || o.position(u)
                }
                var a, o, r, h, l, u = e.extend({}, this.options.position);
                if (s) {
                    if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s),
                        void 0;
                    i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (l = s.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = s, e("<div>").html(l).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                            mousemove: n
                        }), n(t)) : o.position(e.extend({
                            of: i
                        }, this.options.position)), o.hide(),
                        this._show(o, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                            o.is(":visible") && (n(u.of), clearInterval(h))
                        }, e.fx.interval)), this._trigger("open", t, {
                            tooltip: o
                        }), r = {
                            keyup: function (t) {
                                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                                    var s = e.Event(t);
                                    s.currentTarget = i[0], this.close(s, !0)
                                }
                            }
                        }, i[0] !== this.element[0] && (r.remove = function () {
                            this._removeTooltip(o)
                        }), t && "mouseover" !== t.type || (r.mouseleave = "close"), t && "focusin" !== t.type || (r.focusout = "close"), this._on(!0,
                            i, r)
                }
            },
            close: function (t) {
                var i, s = this,
                    n = e(t ? t.currentTarget : this.element),
                    a = this._find(n);
                a && (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                    s._removeTooltip(e(this))
                }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document,
                    "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
                    e(i.element).attr("title", i.title), delete s.parents[t]
                }), a.closing = !0, this._trigger("close", t, {
                    tooltip: i
                }), a.hiding || (a.closing = !1)))
            },
            _tooltip: function (t) {
                var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    s = i.uniqueId().attr("id");
                return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                    element: t,
                    tooltip: i
                }
            },
            _find: function (e) {
                var t = e.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            },
            _removeTooltip: function (e) {
                e.remove(), delete this.tooltips[e.attr("id")]
            },
            _destroy: function () {
                var t = this;
                e.each(this.tooltips, function (i, s) {
                    var n = e.Event("blur"),
                        a = s.element;
                    n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
});
/*
 Bootstrap v4.0.0 (https://getbootstrap.com)
 Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function r() {
        return (r =
            Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function (t) {
            var e = !1;

            function n(e) {
                var n = this,
                    s = !1;
                return t(this).one(i.TRANSITION_END, function () {
                    s = !0
                }), setTimeout(function () {
                    s || i.triggerTransitionEnd(n)
                }, e), this
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do t += ~~(1E6 * Math.random()); while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function (e) {
                    var n, i = e.getAttribute("data-target");
                    i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return t(document).find(i).length > 0 ? i : null
                    } catch (t$27) {
                        return null
                    }
                },
                reflow: function (t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function (n) {
                    t(n).trigger(e.end)
                },
                supportsTransitionEnd: function () {
                    return Boolean(e)
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function (t, e, n) {
                    for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                            var r = n[s],
                                o = e[s],
                                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!(new RegExp(r)).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
                        } var l
                }
            };
            return e = ("undefined" == typeof window || !window.QUnit) && {
                    end: "transitionend"
                },
                t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
                    bindType: e.end,
                    delegateType: e.end,
                    handle: function (e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                }), i
        }(e),
        L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
                CLOSE: "close" + h,
                CLOSED: "closed" + h,
                CLICK_DATA_API: "click" + h + ".data-api"
            }, f = "alert", d = "fade", _ = "show", g = function () {
                function t(t) {
                    this._element = t
                }
                var e = t.prototype;
                return e.close = function (t) {
                    t = t || this._element;
                    var e = this._getRootElement(t);
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }, e.dispose = function () {
                    o.removeData(this._element, l), this._element = null
                }, e._getRootElement = function (t) {
                    var e = P.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
                }, e._triggerCloseEvent = function (t) {
                    var e = o.Event(u.CLOSE);
                    return o(t).trigger(e), e
                }, e._removeElement = function (t) {
                    var e = this;
                    o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
                        return e._destroyElement(t,
                            n)
                    }).emulateTransitionEnd(150) : this._destroyElement(t)
                }, e._destroyElement = function (t) {
                    o(t).detach().trigger(u.CLOSED).remove()
                }, t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o(this),
                            i = n.data(l);
                        i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
                    })
                }, t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, s(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0"
                    }
                }]), t
            }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
            o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
                return o.fn[a] = c, g._jQueryInterface
            }, g),
        R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + E + T,
            FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
        }, k = function () {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = p(this._element).closest(D)[0];
                    if (n) {
                        var i = p(this._element).find(S)[0];
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && p(this._element).hasClass(C)) t = !1;
                                else {
                                    var s = p(n).find(w)[0];
                                    s && p(s).removeClass(C)
                                } if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
                            }
                            i.focus(), e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
                }, e.dispose =
                function () {
                    p.removeData(this._element, v), this._element = null
                }, t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = p(this).data(v);
                        n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
                    })
                }, s(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0"
                    }
                }]), t
        }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
            t.preventDefault();
            var e = t.target;
            p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
            var e = p(t.target).closest(N)[0];
            p(e).toggleClass(A,
                /^focus(in)?$/.test(t.type))
        }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
            return p.fn[m] = y, k._jQueryInterface
        }, k),
        j = function (t) {
            var e = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = t.fn[e],
                a = {
                    interval: 5E3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = "next",
                c = "prev",
                u = "left",
                f = "right",
                d = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" +
                        i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                _ = "carousel",
                g = "active",
                p = "slide",
                m = "carousel-item-right",
                v = "carousel-item-left",
                E = "carousel-item-next",
                T = "carousel-item-prev",
                y = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                C = function () {
                    function o(e,
                        n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
                    }
                    var C = o.prototype;
                    return C.next = function () {
                            this._isSliding || this._slide(h)
                        }, C.nextWhenVisible = function () {
                            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                        }, C.prev = function () {
                            this._isSliding ||
                                this._slide(c)
                        }, C.pause = function (e) {
                            e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, C.cycle = function (t) {
                            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        },
                        C.to = function (e) {
                            var n = this;
                            this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0))
                                if (this._isSliding) t(this._element).one(d.SLID, function () {
                                    return n.to(e)
                                });
                                else {
                                    if (i === e) return this.pause(), void this.cycle();
                                    var s = e > i ? h : c;
                                    this._slide(s, this._items[e])
                                }
                        }, C.dispose = function () {
                            t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused =
                                null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, C._getConfig = function (t) {
                            return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
                        }, C._addEventListeners = function () {
                            var e = this;
                            this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                                return e._keydown(t)
                            }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                                return e.pause(t)
                            }).on(d.MOUSELEAVE, function (t) {
                                return e.cycle(t)
                            }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND,
                                function () {
                                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                        return e.cycle(t)
                                    }, 500 + e._config.interval)
                                }))
                        }, C._keydown = function (t) {
                            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                                case 37:
                                    t.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(), this.next()
                            }
                        }, C._getItemIndex = function (e) {
                            return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
                        }, C._getItemByDirection = function (t, e) {
                            var n = t === h,
                                i = t === c,
                                s = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
                            var o = (s + (t === c ? -1 : 1)) % this._items.length;
                            return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                        }, C._triggerSlideEvent = function (e, n) {
                            var i = this._getItemIndex(e),
                                s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                                r = t.Event(d.SLIDE, {
                                    relatedTarget: e,
                                    direction: n,
                                    from: s,
                                    to: i
                                });
                            return t(this._element).trigger(r), r
                        }, C._setActiveIndicatorElement = function (e) {
                            if (this._indicatorsElement) {
                                t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                n && t(n).addClass(g)
                            }
                        }, C._slide = function (e, n) {
                            var i, s, r, o = this,
                                a = t(this._element).find(y.ACTIVE_ITEM)[0],
                                l = this._getItemIndex(a),
                                c = n || a && this._getItemByDirection(e, a),
                                _ = this._getItemIndex(c),
                                C = Boolean(this._interval);
                            if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                                this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
                                var I = t.Event(d.SLID, {
                                    relatedTarget: c,
                                    direction: r,
                                    from: l,
                                    to: _
                                });
                                P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
                                    t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
                                        return t(o._element).trigger(I)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
                            }
                        }, o._jQueryInterface = function (e) {
                            return this.each(function () {
                                var i =
                                    t(this).data(n),
                                    s = r({}, a, t(this).data());
                                "object" == typeof e && (s = r({}, s, e));
                                var l = "string" == typeof e ? e : s.slide;
                                if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
                                else if ("string" == typeof l) {
                                    if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
                                    i[l]()
                                } else s.interval && (i.pause(), i.cycle())
                            })
                        }, o._dataApiClickHandler = function (e) {
                            var i = P.getSelectorFromElement(this);
                            if (i) {
                                var s = t(i)[0];
                                if (s && t(s).hasClass(_)) {
                                    var a = r({}, t(s).data(), t(this).data()),
                                        l = this.getAttribute("data-slide-to");
                                    l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
                                }
                            }
                        }, s(o, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), o
                }();
            return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
                    t(y.DATA_RIDE).each(function () {
                        var e = t(this);
                        C._jQueryInterface.call(e, e.data())
                    })
                }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
                    return t.fn[e] = o, C._jQueryInterface
                },
                C
        }(e),
        H = function (t) {
            var e = "collapse",
                n = "bs.collapse",
                i = "." + n,
                o = t.fn[e],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                h = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "show",
                u = "collapse",
                f = "collapsing",
                d = "collapsed",
                _ = "width",
                g = "height",
                p = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function () {
                    function i(e, n) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray =
                            t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                            var r = i[s],
                                o = P.getSelectorFromElement(r);
                            null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var o = i.prototype;
                    return o.toggle = function () {
                        t(this._element).hasClass(c) ?
                            this.hide() : this.show()
                    }, o.show = function () {
                        var e, s, r = this;
                        if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                            var o = t.Event(h.SHOW);
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                                var a = this._getDimension();
                                t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function () {
                                    t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                                };
                                if (P.supportsTransitionEnd()) {
                                    var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] =
                                        this._element[_] + "px"
                                } else l()
                            }
                        }
                    }, o.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(c)) {
                            var n = t.Event(h.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                                    for (var s = 0; s < this._triggerArray.length; s++) {
                                        var r = this._triggerArray[s],
                                            o = P.getSelectorFromElement(r);
                                        if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                                    }
                                this.setTransitioning(!0);
                                var a = function () {
                                    e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                                };
                                this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, o.setTransitioning = function (t) {
                        this._isTransitioning = t
                    }, o.dispose = function () {
                        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray =
                            null, this._isTransitioning = null
                    }, o._getConfig = function (t) {
                        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
                    }, o._getDimension = function () {
                        return t(this._element).hasClass(_) ? _ : g
                    }, o._getParent = function () {
                        var e = this,
                            n = null;
                        P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(s).each(function (t,
                            n) {
                            e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, o._addAriaAndCollapsedClass = function (e, n) {
                        if (e) {
                            var i = t(e).hasClass(c);
                            n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function (e) {
                        var n = P.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, i._jQueryInterface = function (e) {
                        return this.each(function () {
                            var s = t(this),
                                o = s.data(n),
                                l = r({}, a, s.data(), "object" == typeof e && e);
                            if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)),
                                "string" == typeof e) {
                                if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), i
                }();
            return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
                    "A" === e.currentTarget.tagName && e.preventDefault();
                    var i = t(this),
                        s = P.getSelectorFromElement(this);
                    t(s).each(function () {
                        var e = t(this),
                            s = e.data(n) ? "toggle" : i.data();
                        m._jQueryInterface.call(e, s)
                    })
                }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor =
                m, t.fn[e].noConflict = function () {
                    return t.fn[e] = o, m._jQueryInterface
                }, m
        }(e),
        W = function (t) {
            var e = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                a = ".data-api",
                l = t.fn[e],
                h = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click" + o + a,
                    KEYDOWN_DATA_API: "keydown" + o + a,
                    KEYUP_DATA_API: "keyup" + o + a
                },
                u = "disabled",
                f = "show",
                d = "dropup",
                _ = "dropright",
                g = "dropleft",
                p = "dropdown-menu-right",
                m = "dropdown-menu-left",
                v = "position-static",
                E = '[data-toggle="dropdown"]',
                T = ".dropdown form",
                y = ".dropdown-menu",
                C = ".navbar-nav",
                I = ".dropdown-menu .dropdown-item:not(.disabled)",
                A = "top-start",
                b = "top-end",
                D = "bottom-start",
                S = "bottom-end",
                w = "right-start",
                N = "left-start",
                O = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                k = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                L = function () {
                    function a(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var l = a.prototype;
                    return l.toggle = function () {
                        if (!this._element.disabled && !t(this._element).hasClass(u)) {
                            var e = a._getParentFromElement(this._element),
                                i = t(this._menu).hasClass(f);
                            if (a._clearMenus(), !i) {
                                var s = {
                                        relatedTarget: this._element
                                    },
                                    r = t.Event(c.SHOW, s);
                                if (t(e).trigger(r), !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var o = this._element;
                                        t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) &&
                                            (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                                }
                            }
                        }
                    }, l.dispose = function () {
                        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !==
                            this._popper && (this._popper.destroy(), this._popper = null)
                    }, l.update = function () {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, l._addEventListeners = function () {
                        var e = this;
                        t(this._element).on(c.CLICK, function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        })
                    }, l._getConfig = function (n) {
                        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, l._getMenuElement = function () {
                        if (!this._menu) {
                            var e = a._getParentFromElement(this._element);
                            this._menu = t(e).find(y)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function () {
                        var e = t(this._element).parent(),
                            n = D;
                        return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
                    }, l._detectNavbar = function () {
                        return t(this._element).closest(".navbar").length > 0
                    }, l._getPopperConfig = function () {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function (e) {
                                return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                            } : e.offset =
                            this._config.offset, {
                                placement: this._getPlacement(),
                                modifiers: {
                                    offset: e,
                                    flip: {
                                        enabled: this._config.flip
                                    },
                                    preventOverflow: {
                                        boundariesElement: this._config.boundary
                                    }
                                }
                            }
                    }, a._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data(i);
                            if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                                if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, a._clearMenus = function (e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var n =
                                    t.makeArray(t(E)), s = 0; s < n.length; s++) {
                                var r = a._getParentFromElement(n[s]),
                                    o = t(n[s]).data(i),
                                    l = {
                                        relatedTarget: n[s]
                                    };
                                if (o) {
                                    var h = o._menu;
                                    if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                        var u = t.Event(c.HIDE, l);
                                        t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN,
                                            l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function (e) {
                        var n, i = P.getSelectorFromElement(e);
                        return i && (n = t(i)[0]), n || e.parentNode
                    }, a._dataApiKeydownHandler = function (e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                            var n = a._getParentFromElement(this),
                                i = t(n).hasClass(f);
                            if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !==
                                    e.which)) {
                                var s = t(n).find(I).get();
                                if (0 !== s.length) {
                                    var r = s.indexOf(e.target);
                                    38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var o = t(n).find(E)[0];
                                    t(o).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, s(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return O
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return k
                        }
                    }]), a
                }();
            return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API +
                " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
                e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
            }).on(c.CLICK_DATA_API, T, function (t) {
                t.stopPropagation()
            }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
                return t.fn[e] = l, L._jQueryInterface
            }, L
        }(e),
        M = function (t) {
            var e = "modal",
                n = "bs.modal",
                i = "." + n,
                o = t.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                h = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "modal-scrollbar-measure",
                u = "modal-backdrop",
                f = "modal-open",
                d = "fade",
                _ = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                p = function () {
                    function o(e, n) {
                        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var p = o.prototype;
                    return p.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }, p.show = function (e) {
                            var n = this;
                            if (!this._isTransitioning && !this._isShown) {
                                P.supportsTransitionEnd() &&
                                    t(this._element).hasClass(d) && (this._isTransitioning = !0);
                                var i = t.Event(h.SHOW, {
                                    relatedTarget: e
                                });
                                t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                                    return n.hide(t)
                                }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                                    t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                                        t(e.target).is(n._element) &&
                                            (n._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(function () {
                                    return n._showElement(e)
                                }))
                            }
                        }, p.hide = function (e) {
                            var n = this;
                            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                                var i = t.Event(h.HIDE);
                                if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                                    s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS),
                                        t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
                                            return n._hideModal(t)
                                        }).emulateTransitionEnd(300) : this._hideModal()
                                }
                            }
                        }, p.dispose = function () {
                            t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                        }, p.handleUpdate = function () {
                            this._adjustDialog()
                        }, p._getConfig =
                        function (t) {
                            return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
                        }, p._showElement = function (e) {
                            var n = this,
                                i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
                            var s = t.Event(h.SHOWN, {
                                    relatedTarget: e
                                }),
                                r = function () {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                                };
                            i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                        }, p._enforceFocus = function () {
                            var e = this;
                            t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
                                document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                            })
                        }, p._setEscapeEvent = function () {
                            var e = this;
                            this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                                27 ===
                                    t.which && (t.preventDefault(), e.hide())
                            }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
                        }, p._setResizeEvent = function () {
                            var e = this;
                            this._isShown ? t(window).on(h.RESIZE, function (t) {
                                return e.handleUpdate(t)
                            }) : t(window).off(h.RESIZE)
                        }, p._hideModal = function () {
                            var e = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                                t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
                            })
                        },
                        p._removeBackdrop = function () {
                            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                        }, p._showBackdrop = function (e) {
                            var n = this,
                                i = t(this._element).hasClass(d) ? d : "";
                            if (this._isShown && this._config.backdrop) {
                                var s = P.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
                                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target ===
                                            t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                    }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
                                if (!s) return void e();
                                t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(_);
                                var r = function () {
                                    n._removeBackdrop(), e && e()
                                };
                                P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                            } else e && e()
                        }, p._adjustDialog =
                        function () {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, p._resetAdjustments = function () {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, p._checkScrollbar = function () {
                            var t = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth =
                                this._getScrollbarWidth()
                        }, p._setScrollbar = function () {
                            var e = this;
                            if (this._isBodyOverflowing) {
                                t(g.FIXED_CONTENT).each(function (n, i) {
                                    var s = t(i)[0].style.paddingRight,
                                        r = t(i).css("padding-right");
                                    t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                                }), t(g.STICKY_CONTENT).each(function (n, i) {
                                    var s = t(i)[0].style.marginRight,
                                        r = t(i).css("margin-right");
                                    t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                                }), t(g.NAVBAR_TOGGLER).each(function (n,
                                    i) {
                                    var s = t(i)[0].style.marginRight,
                                        r = t(i).css("margin-right");
                                    t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                                });
                                var n = document.body.style.paddingRight,
                                    i = t("body").css("padding-right");
                                t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                            }
                        }, p._resetScrollbar = function () {
                            t(g.FIXED_CONTENT).each(function (e, n) {
                                var i = t(n).data("padding-right");
                                "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                            }), t(g.STICKY_CONTENT +
                                ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
                                var i = t(n).data("margin-right");
                                "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                            });
                            var e = t("body").data("padding-right");
                            "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
                        }, p._getScrollbarWidth = function () {
                            var t = document.createElement("div");
                            t.className = c, document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t), e
                        }, o._jQueryInterface = function (e,
                            i) {
                            return this.each(function () {
                                var s = t(this).data(n),
                                    a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                                if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
                                    if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
                                    s[e](i)
                                } else a.show && s.show(i)
                            })
                        }, s(o, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), o
                }();
            return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
                var i, s = this,
                    o = P.getSelectorFromElement(this);
                o && (i = t(o)[0]);
                var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(i).one(h.SHOW, function (e) {
                    e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
                        t(s).is(":visible") && s.focus()
                    })
                });
                p._jQueryInterface.call(t(i), a, this)
            }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
                return t.fn.modal = o, p._jQueryInterface
            }, p
        }(e),
        U = function (t) {
            var e = "tooltip",
                i = "bs.tooltip",
                o = "." + i,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+",
                    "g"),
                h = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                f = "show",
                d = "out",
                _ = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    INSERTED: "inserted" + o,
                    CLICK: "click" + o,
                    FOCUSIN: "focusin" + o,
                    FOCUSOUT: "focusout" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o
                },
                g = "fade",
                p = "show",
                m = ".tooltip-inner",
                v = ".arrow",
                E = "hover",
                T = "focus",
                y = "click",
                C = "manual",
                I = function () {
                    function a(t, e) {
                        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var I = a.prototype;
                    return I.enable = function () {
                            this._isEnabled = !0
                        }, I.disable = function () {
                            this._isEnabled = !1
                        }, I.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled
                        }, I.toggle = function (e) {
                            if (this._isEnabled)
                                if (e) {
                                    var n = this.constructor.DATA_KEY,
                                        i = t(e.currentTarget).data(n);
                                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                        t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                } else {
                                    if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                        }, I.dispose = function () {
                            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout =
                                null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                        }, I.show = function () {
                            var e = this;
                            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                t(this.element).trigger(i);
                                var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() ||
                                    !s) return;
                                var r = this.getTipElement(),
                                    o = P.getUID(this.constructor.NAME);
                                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                    h = this._getAttachment(l);
                                this.addAttachmentClass(h);
                                var c = !1 === this.config.container ? document.body : t(this.config.container);
                                t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement,
                                        this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                                        placement: h,
                                        modifiers: {
                                            offset: {
                                                offset: this.config.offset
                                            },
                                            flip: {
                                                behavior: this.config.fallbackPlacement
                                            },
                                            arrow: {
                                                element: v
                                            },
                                            preventOverflow: {
                                                boundariesElement: this.config.boundary
                                            }
                                        },
                                        onCreate: function (t) {
                                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                        },
                                        onUpdate: function (t) {
                                            e._handlePopperPlacementChange(t)
                                        }
                                    }), t(r).addClass(p), "ontouchstart" in document.documentElement &&
                                    t("body").children().on("mouseover", null, t.noop);
                                var u = function () {
                                    e.config.animation && e._fixTransition();
                                    var n = e._hoverState;
                                    e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
                                };
                                P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                            }
                        }, I.hide = function (e) {
                            var n = this,
                                i = this.getTipElement(),
                                s = t.Event(this.constructor.Event.HIDE),
                                r = function () {
                                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                                        n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                                };
                            t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) :
                                r(), this._hoverState = "")
                        }, I.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate()
                        }, I.isWithContent = function () {
                            return Boolean(this.getTitle())
                        }, I.addAttachmentClass = function (e) {
                            t(this.getTipElement()).addClass("bs-tooltip-" + e)
                        }, I.getTipElement = function () {
                            return this.tip = this.tip || t(this.config.template)[0], this.tip
                        }, I.setContent = function () {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
                        }, I.setElementContent = function (e, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                        }, I.getTitle = function () {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                        }, I._getAttachment = function (t) {
                            return c[t.toUpperCase()]
                        }, I._setListeners = function () {
                            var e = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n) t(e.element).on(e.constructor.Event.CLICK,
                                    e.config.selector,
                                    function (t) {
                                        return e.toggle(t)
                                    });
                                else if (n !== C) {
                                    var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element).on(i, e.config.selector, function (t) {
                                        return e._enter(t)
                                    }).on(s, e.config.selector, function (t) {
                                        return e._leave(t)
                                    })
                                }
                                t(e.element).closest(".modal").on("hide.bs.modal", function () {
                                    return e.hide()
                                })
                            }), this.config.selector ? this.config = r({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        },
                        I._fixTitle = function () {
                            var t = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, I._enter = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0),
                                t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                                    n._hoverState === f && n.show()
                                }, n.config.delay.show) : n.show())
                        }, I._leave = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() ||
                                (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                                    n._hoverState === d && n.hide()
                                }, n.config.delay.hide) : n.hide())
                        }, I._isWithActiveTrigger = function () {
                            for (var t in this._activeTrigger)
                                if (this._activeTrigger[t]) return !0;
                            return !1
                        }, I._getConfig = function (n) {
                            return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                                    show: n.delay,
                                    hide: n.delay
                                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" ==
                                typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                        }, I._getDelegateConfig = function () {
                            var t = {};
                            if (this.config)
                                for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t
                        }, I._cleanTipClass = function () {
                            var e = t(this.getTipElement()),
                                n = e.attr("class").match(l);
                            null !== n && n.length > 0 && e.removeClass(n.join(""))
                        }, I._handlePopperPlacementChange = function (t) {
                            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                        },
                        I._fixTransition = function () {
                            var e = this.getTipElement(),
                                n = this.config.animation;
                            null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        }, a._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(i),
                                    s = "object" == typeof e && e;
                                if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                    n[e]()
                                }
                            })
                        }, s(a,
                            null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return u
                                }
                            }, {
                                key: "NAME",
                                get: function () {
                                    return e
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function () {
                                    return i
                                }
                            }, {
                                key: "Event",
                                get: function () {
                                    return _
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function () {
                                    return o
                                }
                            }, {
                                key: "DefaultType",
                                get: function () {
                                    return h
                                }
                            }]), a
                }();
            return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
                return t.fn[e] = a, I._jQueryInterface
            }, I
        }(e),
        x = function (t) {
            var e = "popover",
                n = "bs.popover",
                i = "." + n,
                o = t.fn[e],
                a =
                new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = r({}, U.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                h = r({}, U.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = "fade",
                u = "show",
                f = ".popover-header",
                d = ".popover-body",
                _ = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" +
                        i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                g = function (r) {
                    var o, g;

                    function p() {
                        return r.apply(this, arguments) || this
                    }
                    g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
                    var m = p.prototype;
                    return m.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, m.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e)
                    }, m.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, m.setContent = function () {
                        var e =
                            t(this.getTipElement());
                        this.setElementContent(e.find(f), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
                    }, m._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, m._cleanTipClass = function () {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(a);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, p._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i =
                                t(this).data(n),
                                s = "object" == typeof e ? e : null;
                            if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, s(p, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return _
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return h
                        }
                    }]), p
                }(U);
            return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
                return t.fn[e] = o, g._jQueryInterface
            }, g
        }(e),
        K = function (t) {
            var e = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                o = t.fn[e],
                a = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                h = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + ".data-api"
                },
                c = "dropdown-item",
                u = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                d = "offset",
                _ = "position",
                g = function () {
                    function o(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget =
                            null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
                                return i._process(t)
                            }), this.refresh(), this._process()
                    }
                    var g = o.prototype;
                    return g.refresh = function () {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? d : _,
                            i = "auto" === this._config.method ? n : this._config.method,
                            s = i === _ ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                            var n, r = P.getSelectorFromElement(e);
                            if (r && (n = t(r)[0]),
                                n) {
                                var o = n.getBoundingClientRect();
                                if (o.width || o.height) return [t(n)[i]().top + s, r]
                            }
                            return null
                        }).filter(function (t) {
                            return t
                        }).sort(function (t, e) {
                            return t[0] - e[0]
                        }).forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, g.dispose = function () {
                        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, g._getConfig = function (n) {
                        if ("string" !=
                            typeof (n = r({}, a, n)).target) {
                            var i = t(n.target).attr("id");
                            i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return P.typeCheckConfig(e, n, l), n
                    }, g._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, g._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, g._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight :
                            this._scrollElement.getBoundingClientRect().height
                    }, g._process = function () {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var s = this._offsets.length; s--;) this._activeTarget !==
                                this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                        }
                    }, g._activate = function (e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = t(n.join(","));
                        i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u),
                            i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, g._clear = function () {
                        t(this._selector).filter(f.ACTIVE).removeClass(u)
                    }, o._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data(n);
                            if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, s(o, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        },
                        {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }
                    ]), o
                }();
            return t(window).on(h.LOAD_DATA_API, function () {
                for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    g._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
                return t.fn[e] = o, g._jQueryInterface
            }, g
        }(e),
        V = function (t) {
            var e = "bs.tab",
                n = "." + e,
                i = t.fn.tab,
                r = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                o = "dropdown-menu",
                a = "active",
                l = "disabled",
                h = "fade",
                c = "show",
                u = ".dropdown",
                f = ".nav, .list-group",
                d = ".active",
                _ = "> li > .active",
                g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                p = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                v = function () {
                    function n(t) {
                        this._element = t
                    }
                    var i = n.prototype;
                    return i.show = function () {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                            var n, i, s = t(this._element).closest(f)[0],
                                o = P.getSelectorFromElement(this._element);
                            if (s) {
                                var h = "UL" === s.nodeName ? _ : d;
                                i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                            }
                            var c = t.Event(r.HIDE, {
                                    relatedTarget: this._element
                                }),
                                u = t.Event(r.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                                o && (n = t(o)[0]), this._activate(this._element, s);
                                var g = function () {
                                    var n = t.Event(r.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        s = t.Event(r.SHOWN, {
                                            relatedTarget: i
                                        });
                                    t(i).trigger(n), t(e._element).trigger(s)
                                };
                                n ? this._activate(n, n.parentNode, g) : g()
                            }
                        }
                    }, i.dispose = function () {
                        t.removeData(this._element, e), this._element = null
                    }, i._activate = function (e, n, i) {
                        var s = this,
                            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                            a = function () {
                                return s._transitionComplete(e, r, i)
                            };
                        r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, i._transitionComplete = function (e, n, i) {
                        if (n) {
                            t(n).removeClass(c + " " + a);
                            var s = t(n.parentNode).find(m)[0];
                            s && t(s).removeClass(a), "tab" ===
                                n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                            var r = t(e).closest(u)[0];
                            r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var s = t(this),
                                r = s.data(e);
                            if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                                if ("undefined" == typeof r[i]) throw new TypeError('No method named "' +
                                    i + '"');
                                r[i]()
                            }
                        })
                    }, s(n, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }]), n
                }();
            return t(document).on(r.CLICK_DATA_API, g, function (e) {
                e.preventDefault(), v._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
                return t.fn.tab = i, v._jQueryInterface
            }, v
        }(e);
    ! function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
(function (root, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else if (typeof exports === "object") module.exports = factory();
    else root.NProgress = factory()
})(this, function () {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: false,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function (options) {
        var key, value;
        for (key in options) {
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value
        }
        return this
    };
    NProgress.status = null;
    NProgress.set = function (n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = n === 1 ? null : n;
        var progress = NProgress.render(!started),
            bar = progress.querySelector(Settings.barSelector),
            speed = Settings.speed,
            ease = Settings.easing;
        progress.offsetWidth;
        queue(function (next) {
            if (Settings.positionUsing ===
                "") Settings.positionUsing = NProgress.getPositioningCSS();
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
                css(progress, {
                    transition: "none",
                    opacity: 1
                });
                progress.offsetWidth;
                setTimeout(function () {
                    css(progress, {
                        transition: "all " + speed + "ms linear",
                        opacity: 0
                    });
                    setTimeout(function () {
                        NProgress.remove();
                        next()
                    }, speed)
                }, speed)
            } else setTimeout(next, speed)
        });
        return this
    };
    NProgress.isStarted = function () {
        return typeof NProgress.status === "number"
    };
    NProgress.start = function () {
        if (!NProgress.status) NProgress.set(0);
        var work =
            function () {
                setTimeout(function () {
                    if (!NProgress.status) return;
                    NProgress.trickle();
                    work()
                }, Settings.trickleSpeed)
            };
        if (Settings.trickle) work();
        return this
    };
    NProgress.done = function (force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(.3 + .5 * Math.random()).set(1)
    };
    NProgress.inc = function (amount) {
        var n = NProgress.status;
        if (!n) return NProgress.start();
        else {
            if (typeof amount !== "number") amount = (1 - n) * clamp(Math.random() * n, .1, .95);
            n = clamp(n + amount, 0, .994);
            return NProgress.set(n)
        }
    };
    NProgress.trickle =
        function () {
            return NProgress.inc(Math.random() * Settings.trickleRate)
        };
    (function () {
        var initial = 0,
            current = 0;
        NProgress.promise = function ($promise) {
            if (!$promise || $promise.state() === "resolved") return this;
            if (current === 0) NProgress.start();
            initial++;
            current++;
            $promise.always(function () {
                current--;
                if (current === 0) {
                    initial = 0;
                    NProgress.done()
                } else NProgress.set((initial - current) / initial)
            });
            return this
        }
    })();
    NProgress.render = function (fromStart) {
        if (NProgress.isRendered()) return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector),
            perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0),
            parent = document.querySelector(Settings.parent),
            spinner;
        css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner)
        }
        if (parent !=
            document.body) addClass(parent, "nprogress-custom-parent");
        parent.appendChild(progress);
        return progress
    };
    NProgress.remove = function () {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress)
    };
    NProgress.isRendered = function () {
        return !!document.getElementById("nprogress")
    };
    NProgress.getPositioningCSS = function () {
        var bodyStyle = document.body.style;
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) return "translate3d";
        else if (vendorPrefix + "Transform" in bodyStyle) return "translate";
        else return "margin"
    };

    function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n
    }

    function toBarPerc(n) {
        return (-1 + n) * 100
    }

    function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") barCSS = {
            transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
        };
        else if (Settings.positionUsing === "translate") barCSS = {
            transform: "translate(" + toBarPerc(n) + "%,0)"
        };
        else barCSS = {
            "margin-left": toBarPerc(n) + "%"
        };
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS
    }
    var queue = function () {
        var pending = [];

        function next() {
            var fn = pending.shift();
            if (fn) fn(next)
        }
        return function (fn) {
            pending.push(fn);
            if (pending.length == 1) next()
        }
    }();
    var css = function () {
        var cssPrefixes = ["Webkit", "O", "Moz", "ms"],
            cssProps = {};

        function camelCase(string) {
            return string.replace(/^-ms-/,
                "ms-").replace(/-([\da-z])/gi, function (match, letter) {
                return letter.toUpperCase()
            })
        }

        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;
            var i = cssPrefixes.length,
                capName = name.charAt(0).toUpperCase() + name.slice(1),
                vendorName;
            while (i--) {
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName
            }
            return name
        }

        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name))
        }

        function applyCss(element, prop, value) {
            prop =
                getStyleProp(prop);
            element.style[prop] = value
        }
        return function (element, properties) {
            var args = arguments,
                prop, value;
            if (args.length == 2)
                for (prop in properties) {
                    value = properties[prop];
                    if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value)
                } else applyCss(element, args[1], args[2])
        }
    }();

    function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0
    }

    function addClass(element, name) {
        var oldList = classList(element),
            newList =
            oldList + name;
        if (hasClass(oldList, name)) return;
        element.className = newList.substring(1)
    }

    function removeClass(element, name) {
        var oldList = classList(element),
            newList;
        if (!hasClass(element, name)) return;
        newList = oldList.replace(" " + name + " ", " ");
        element.className = newList.substring(1, newList.length - 1)
    }

    function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ")
    }

    function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element)
    }
    return NProgress
});
/*
 React v16.13.0
 react.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
(function (d, r) {
    "object" === typeof exports && "undefined" !== typeof module ? r(exports) : "function" === typeof define && define.amd ? define(["exports"], r) : (d = d || self, r(d.React = {}))
})(this, function (d) {
    function r(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function w(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = ba;
        this.updater = c || ca
    }

    function da() {}

    function L(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = ba;
        this.updater = c || ca
    }

    function ea(a, b, c) {
        var g, e = {},
            fa = null,
            d = null;
        if (null != b)
            for (g in void 0 !== b.ref && (d = b.ref), void 0 !== b.key && (fa = "" + b.key), b) ha.call(b, g) && !ia.hasOwnProperty(g) && (e[g] = b[g]);
        var h = arguments.length - 2;
        if (1 === h) e.children = c;
        else if (1 < h) {
            for (var k = Array(h), f = 0; f < h; f++) k[f] = arguments[f + 2];
            e.children = k
        }
        if (a && a.defaultProps)
            for (g in h = a.defaultProps,
                h) void 0 === e[g] && (e[g] = h[g]);
        return {
            $$typeof: x,
            type: a,
            key: fa,
            ref: d,
            props: e,
            _owner: M.current
        }
    }

    function va(a, b) {
        return {
            $$typeof: x,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner
        }
    }

    function N(a) {
        return "object" === typeof a && null !== a && a.$$typeof === x
    }

    function wa(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + a).replace(/[=:]/g, function (a) {
            return b[a]
        })
    }

    function ja(a, b, c, g) {
        if (C.length) {
            var e = C.pop();
            e.result = a;
            e.keyPrefix = b;
            e.func = c;
            e.context = g;
            e.count = 0;
            return e
        }
        return {
            result: a,
            keyPrefix: b,
            func: c,
            context: g,
            count: 0
        }
    }

    function ka(a) {
        a.result = null;
        a.keyPrefix = null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > C.length && C.push(a)
    }

    function O(a, b, c, g) {
        var e = typeof a;
        if ("undefined" === e || "boolean" === e) a = null;
        var d = !1;
        if (null === a) d = !0;
        else switch (e) {
            case "string":
            case "number":
                d = !0;
                break;
            case "object":
                switch (a.$$typeof) {
                    case x:
                    case xa:
                        d = !0
                }
        }
        if (d) return c(g, a, "" === b ? "." + P(a, 0) : b), 1;
        d = 0;
        b = "" === b ? "." : b + ":";
        if (Array.isArray(a))
            for (var f = 0; f < a.length; f++) {
                e = a[f];
                var h = b + P(e, f);
                d += O(e, h, c, g)
            } else if (null === a ||
                "object" !== typeof a ? h = null : (h = la && a[la] || a["@@iterator"], h = "function" === typeof h ? h : null), "function" === typeof h)
                for (a = h.call(a), f = 0; !(e = a.next()).done;) e = e.value, h = b + P(e, f++), d += O(e, h, c, g);
            else if ("object" === e) throw c = "" + a, Error(r(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
        return d
    }

    function Q(a, b, c) {
        return null == a ? 0 : O(a, "", b, c)
    }

    function P(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? wa(a.key) : b.toString(36)
    }

    function ya(a, b, c) {
        a.func.call(a.context, b,
            a.count++)
    }

    function za(a, b, c) {
        var g = a.result,
            e = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a) ? R(a, g, c, function (a) {
            return a
        }) : null != a && (N(a) && (a = va(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(ma, "$&/") + "/") + c)), g.push(a))
    }

    function R(a, b, c, g, e) {
        var d = "";
        null != c && (d = ("" + c).replace(ma, "$&/") + "/");
        b = ja(b, d, g, e);
        Q(a, za, b);
        ka(b)
    }

    function t() {
        var a = na.current;
        if (null === a) throw Error(r(321));
        return a
    }

    function S(a, b) {
        var c = a.length;
        a.push(b);
        a: for (;;) {
            var g = c - 1 >>> 1,
                e = a[g];
            if (void 0 !==
                e && 0 < D(e, b)) a[g] = b, a[c] = e, c = g;
            else break a
        }
    }

    function n(a) {
        a = a[0];
        return void 0 === a ? null : a
    }

    function E(a) {
        var b = a[0];
        if (void 0 !== b) {
            var c = a.pop();
            if (c !== b) {
                a[0] = c;
                a: for (var g = 0, e = a.length; g < e;) {
                    var d = 2 * (g + 1) - 1,
                        f = a[d],
                        h = d + 1,
                        k = a[h];
                    if (void 0 !== f && 0 > D(f, c)) void 0 !== k && 0 > D(k, f) ? (a[g] = k, a[h] = c, g = h) : (a[g] = f, a[d] = c, g = d);
                    else if (void 0 !== k && 0 > D(k, c)) a[g] = k, a[h] = c, g = h;
                    else break a
                }
            }
            return b
        }
        return null
    }

    function D(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id
    }

    function F(a) {
        for (var b = n(u); null !==
            b;) {
            if (null === b.callback) E(u);
            else if (b.startTime <= a) E(u), b.sortIndex = b.expirationTime, S(p, b);
            else break;
            b = n(u)
        }
    }

    function T(a) {
        y = !1;
        F(a);
        if (!v)
            if (null !== n(p)) v = !0, z(U);
            else {
                var b = n(u);
                null !== b && G(T, b.startTime - a)
            }
    }

    function U(a, b) {
        v = !1;
        y && (y = !1, V());
        H = !0;
        var c = m;
        try {
            F(b);
            for (l = n(p); null !== l && (!(l.expirationTime > b) || a && !W());) {
                var g = l.callback;
                if (null !== g) {
                    l.callback = null;
                    m = l.priorityLevel;
                    var e = g(l.expirationTime <= b);
                    b = q();
                    "function" === typeof e ? l.callback = e : l === n(p) && E(p);
                    F(b)
                } else E(p);
                l = n(p)
            }
            if (null !==
                l) var d = !0;
            else {
                var f = n(u);
                null !== f && G(T, f.startTime - b);
                d = !1
            }
            return d
        } finally {
            l = null, m = c, H = !1
        }
    }

    function oa(a) {
        switch (a) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1E4;
            default:
                return 5E3
        }
    }
    var f = "function" === typeof Symbol && Symbol.for,
        x = f ? Symbol.for("react.element") : 60103,
        xa = f ? Symbol.for("react.portal") : 60106,
        Aa = f ? Symbol.for("react.fragment") : 60107,
        Ba = f ? Symbol.for("react.strict_mode") : 60108,
        Ca = f ? Symbol.for("react.profiler") : 60114,
        Da = f ? Symbol.for("react.provider") : 60109,
        Ea = f ? Symbol.for("react.context") : 60110,
        Fa = f ? Symbol.for("react.forward_ref") : 60112,
        Ga = f ? Symbol.for("react.suspense") : 60113,
        Ha = f ? Symbol.for("react.memo") : 60115,
        Ia = f ? Symbol.for("react.lazy") : 60116,
        la = "function" === typeof Symbol && Symbol.iterator,
        pa = Object.getOwnPropertySymbols,
        Ja = Object.prototype.hasOwnProperty,
        Ka = Object.prototype.propertyIsEnumerable,
        I = function () {
            try {
                if (!Object.assign) return !1;
                var a = new String("abc");
                a[5] = "de";
                if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
                var b = {};
                for (a = 0; 10 > a; a++) b["_" +
                    String.fromCharCode(a)] = a;
                if ("0123456789" !== Object.getOwnPropertyNames(b).map(function (a) {
                        return b[a]
                    }).join("")) return !1;
                var c = {};
                "abcdefghijklmnopqrst".split("").forEach(function (a) {
                    c[a] = a
                });
                return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, c)).join("") ? !1 : !0
            } catch (g) {
                return !1
            }
        }() ? Object.assign : function (a, b) {
            if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
            var c = Object(a);
            for (var g, e = 1; e < arguments.length; e++) {
                var d = Object(arguments[e]);
                for (var f in d) Ja.call(d, f) && (c[f] = d[f]);
                if (pa) {
                    g = pa(d);
                    for (var h = 0; h < g.length; h++) Ka.call(d, g[h]) && (c[g[h]] = d[g[h]])
                }
            }
            return c
        },
        ca = {
            isMounted: function (a) {
                return !1
            },
            enqueueForceUpdate: function (a, b, c) {},
            enqueueReplaceState: function (a, b, c, d) {},
            enqueueSetState: function (a, b, c, d) {}
        },
        ba = {};
    w.prototype.isReactComponent = {};
    w.prototype.setState = function (a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(r(85));
        this.updater.enqueueSetState(this, a, b, "setState")
    };
    w.prototype.forceUpdate =
        function (a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate")
        };
    da.prototype = w.prototype;
    f = L.prototype = new da;
    f.constructor = L;
    I(f, w.prototype);
    f.isPureReactComponent = !0;
    var M = {
            current: null
        },
        ha = Object.prototype.hasOwnProperty,
        ia = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        ma = /\/+/g,
        C = [],
        na = {
            current: null
        },
        X;
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        var A = null,
            qa = null,
            ra = function () {
                if (null !== A) try {
                    var a = q();
                    A(!0, a);
                    A = null
                } catch (b) {
                    throw setTimeout(ra, 0), b;
                }
            },
            La = Date.now();
        var q =
            function () {
                return Date.now() - La
            };
        var z = function (a) {
            null !== A ? setTimeout(z, 0, a) : (A = a, setTimeout(ra, 0))
        };
        var G = function (a, b) {
            qa = setTimeout(a, b)
        };
        var V = function () {
            clearTimeout(qa)
        };
        var W = function () {
            return !1
        };
        f = X = function () {}
    } else {
        var Y = window.performance,
            sa = window.Date,
            Ma = window.setTimeout,
            Na = window.clearTimeout;
        "undefined" !== typeof console && (f = window.cancelAnimationFrame, "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
            "function" !== typeof f && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
        if ("object" === typeof Y && "function" === typeof Y.now) q = function () {
            return Y.now()
        };
        else {
            var Oa = sa.now();
            q = function () {
                return sa.now() - Oa
            }
        }
        var J = !1,
            K = null,
            Z = -1,
            ta = 5,
            ua = 0;
        W = function () {
            return q() >= ua
        };
        f = function () {};
        X = function (a) {
            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") :
                ta = 0 < a ? Math.floor(1E3 / a) : 5
        };
        var B = new MessageChannel,
            aa = B.port2;
        B.port1.onmessage = function () {
            if (null !== K) {
                var a = q();
                ua = a + ta;
                try {
                    K(!0, a) ? aa.postMessage(null) : (J = !1, K = null)
                } catch (b) {
                    throw aa.postMessage(null), b;
                }
            } else J = !1
        };
        z = function (a) {
            K = a;
            J || (J = !0, aa.postMessage(null))
        };
        G = function (a, b) {
            Z = Ma(function () {
                a(q())
            }, b)
        };
        V = function () {
            Na(Z);
            Z = -1
        }
    }
    var p = [],
        u = [],
        Pa = 1,
        l = null,
        m = 3,
        H = !1,
        v = !1,
        y = !1,
        Qa = 0;
    B = {
        ReactCurrentDispatcher: na,
        ReactCurrentOwner: M,
        IsSomeRendererActing: {
            current: !1
        },
        assign: I
    };
    I(B, {
        Scheduler: {
            __proto__: null,
            unstable_ImmediatePriority: 1,
            unstable_UserBlockingPriority: 2,
            unstable_NormalPriority: 3,
            unstable_IdlePriority: 5,
            unstable_LowPriority: 4,
            unstable_runWithPriority: function (a, b) {
                switch (a) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        a = 3
                }
                var c = m;
                m = a;
                try {
                    return b()
                } finally {
                    m = c
                }
            },
            unstable_next: function (a) {
                switch (m) {
                    case 1:
                    case 2:
                    case 3:
                        var b = 3;
                        break;
                    default:
                        b = m
                }
                var c = m;
                m = b;
                try {
                    return a()
                } finally {
                    m = c
                }
            },
            unstable_scheduleCallback: function (a, b, c) {
                var d = q();
                if ("object" === typeof c && null !== c) {
                    var e = c.delay;
                    e = "number" === typeof e && 0 < e ? d + e : d;
                    c = "number" === typeof c.timeout ? c.timeout : oa(a)
                } else c = oa(a), e = d;
                c = e + c;
                a = {
                    id: Pa++,
                    callback: b,
                    priorityLevel: a,
                    startTime: e,
                    expirationTime: c,
                    sortIndex: -1
                };
                e > d ? (a.sortIndex = e, S(u, a), null === n(p) && a === n(u) && (y ? V() : y = !0, G(T, e - d))) : (a.sortIndex = c, S(p, a), v || H || (v = !0, z(U)));
                return a
            },
            unstable_cancelCallback: function (a) {
                a.callback = null
            },
            unstable_wrapCallback: function (a) {
                var b = m;
                return function () {
                    var c = m;
                    m = b;
                    try {
                        return a.apply(this, arguments)
                    } finally {
                        m = c
                    }
                }
            },
            unstable_getCurrentPriorityLevel: function () {
                return m
            },
            unstable_shouldYield: function () {
                var a = q();
                F(a);
                var b = n(p);
                return b !== l && null !== l && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < l.expirationTime || W()
            },
            unstable_requestPaint: f,
            unstable_continueExecution: function () {
                v || H || (v = !0, z(U))
            },
            unstable_pauseExecution: function () {},
            unstable_getFirstCallbackNode: function () {
                return n(p)
            },
            get unstable_now() {
                return q
            },
            get unstable_forceFrameRate() {
                return X
            },
            unstable_Profiling: null
        },
        SchedulerTracing: {
            __proto__: null,
            __interactionsRef: null,
            __subscriberRef: null,
            unstable_clear: function (a) {
                return a()
            },
            unstable_getCurrent: function () {
                return null
            },
            unstable_getThreadID: function () {
                return ++Qa
            },
            unstable_trace: function (a, b, c) {
                return c()
            },
            unstable_wrap: function (a) {
                return a
            },
            unstable_subscribe: function (a) {},
            unstable_unsubscribe: function (a) {}
        }
    });
    d.Children = {
        map: function (a, b, c) {
            if (null == a) return a;
            var d = [];
            R(a, d, null, b, c);
            return d
        },
        forEach: function (a, b, c) {
            if (null == a) return a;
            b = ja(null, null, b, c);
            Q(a, ya, b);
            ka(b)
        },
        count: function (a) {
            return Q(a, function () {
                return null
            }, null)
        },
        toArray: function (a) {
            var b = [];
            R(a, b, null, function (a) {
                return a
            });
            return b
        },
        only: function (a) {
            if (!N(a)) throw Error(r(143));
            return a
        }
    };
    d.Component = w;
    d.Fragment = Aa;
    d.Profiler = Ca;
    d.PureComponent = L;
    d.StrictMode = Ba;
    d.Suspense = Ga;
    d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B;
    d.cloneElement = function (a, b, c) {
        if (null === a || void 0 === a) throw Error(r(267, a));
        var d = I({}, a.props),
            e = a.key,
            f = a.ref,
            m = a._owner;
        if (null != b) {
            void 0 !== b.ref && (f = b.ref, m = M.current);
            void 0 !== b.key && (e = "" + b.key);
            if (a.type && a.type.defaultProps) var h =
                a.type.defaultProps;
            for (k in b) ha.call(b, k) && !ia.hasOwnProperty(k) && (d[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k])
        }
        var k = arguments.length - 2;
        if (1 === k) d.children = c;
        else if (1 < k) {
            h = Array(k);
            for (var l = 0; l < k; l++) h[l] = arguments[l + 2];
            d.children = h
        }
        return {
            $$typeof: x,
            type: a.type,
            key: e,
            ref: f,
            props: d,
            _owner: m
        }
    };
    d.createContext = function (a, b) {
        void 0 === b && (b = null);
        a = {
            $$typeof: Ea,
            _calculateChangedBits: b,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        a.Provider = {
            $$typeof: Da,
            _context: a
        };
        return a.Consumer =
            a
    };
    d.createElement = ea;
    d.createFactory = function (a) {
        var b = ea.bind(null, a);
        b.type = a;
        return b
    };
    d.createRef = function () {
        return {
            current: null
        }
    };
    d.forwardRef = function (a) {
        return {
            $$typeof: Fa,
            render: a
        }
    };
    d.isValidElement = N;
    d.lazy = function (a) {
        return {
            $$typeof: Ia,
            _ctor: a,
            _status: -1,
            _result: null
        }
    };
    d.memo = function (a, b) {
        return {
            $$typeof: Ha,
            type: a,
            compare: void 0 === b ? null : b
        }
    };
    d.useCallback = function (a, b) {
        return t().useCallback(a, b)
    };
    d.useContext = function (a, b) {
        return t().useContext(a, b)
    };
    d.useDebugValue = function (a, b) {};
    d.useEffect = function (a, b) {
        return t().useEffect(a, b)
    };
    d.useImperativeHandle = function (a, b, c) {
        return t().useImperativeHandle(a, b, c)
    };
    d.useLayoutEffect = function (a, b) {
        return t().useLayoutEffect(a, b)
    };
    d.useMemo = function (a, b) {
        return t().useMemo(a, b)
    };
    d.useReducer = function (a, b, c) {
        return t().useReducer(a, b, c)
    };
    d.useRef = function (a) {
        return t().useRef(a)
    };
    d.useState = function (a) {
        return t().useState(a)
    };
    d.version = "16.13.0"
});
/*
 React v16.13.0
 react-dom.production.min.js

 Copyright (c) Facebook, Inc. and its affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
(function (I, ea) {
    "object" === typeof exports && "undefined" !== typeof module ? ea(exports, require("react")) : "function" === typeof define && define.amd ? define(["exports", "react"], ea) : (I = I || self, ea(I.ReactDOM = {}, I.React))
})(this, function (I, ea) {
    function k(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function ji(a, b, c, d, e, f, g, h, m) {
        yb = !1;
        gc = null;
        ki.apply(li, arguments)
    }

    function mi(a, b, c, d, e, f, g, h, m) {
        ji.apply(this, arguments);
        if (yb) {
            if (yb) {
                var n = gc;
                yb = !1;
                gc = null
            } else throw Error(k(198));
            hc || (hc = !0, pd = n)
        }
    }

    function lf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = mf(c);
        mi(d, b, void 0, a);
        a.currentTarget = null
    }

    function zb(a) {
        if (null === a || "object" !== typeof a) return null;
        a = nf && a[nf] || a["@@iterator"];
        return "function" === typeof a ? a : null
    }

    function ni(a) {
        if (-1 === a._status) {
            a._status = 0;
            var b = a._ctor;
            b = b();
            a._result = b;
            b.then(function (b) {
                0 === a._status && (b = b.default, a._status = 1, a._result = b)
            }, function (b) {
                0 === a._status && (a._status = 2, a._result = b)
            })
        }
    }

    function na(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
            case Ma:
                return "Fragment";
            case cb:
                return "Portal";
            case ic:
                return "Profiler";
            case of:
                return "StrictMode";
            case jc:
                return "Suspense";
            case qd:
                return "SuspenseList"
        }
        if ("object" === typeof a) switch (a.$$typeof) {
            case pf:
                return "Context.Consumer";
            case qf:
                return "Context.Provider";
            case rd:
                var b = a.render;
                b = b.displayName || b.name || "";
                return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
            case sd:
                return na(a.type);
            case rf:
                return na(a.render);
            case sf:
                if (a = 1 === a._status ? a._result : null) return na(a)
        }
        return null
    }

    function td(a) {
        var b = "";
        do {
            a: switch (a.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var c = "";
                    break a;
                default:
                    var d = a._debugOwner,
                        e = a._debugSource,
                        f = na(a.type);
                    c = null;
                    d && (c = na(d.type));
                    d = f;
                    f = "";
                    e ? f = " (at " + e.fileName.replace(oi, "") +
                        ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
                    c = "\n    in " + (d || "Unknown") + f
            }
            b += c;a = a.return
        } while (a);
        return b
    }

    function tf() {
        if (kc)
            for (var a in db) {
                var b = db[a],
                    c = kc.indexOf(a);
                if (!(-1 < c)) throw Error(k(96, a));
                if (!lc[c]) {
                    if (!b.extractEvents) throw Error(k(97, a));
                    lc[c] = b;
                    c = b.eventTypes;
                    for (var d in c) {
                        var e = void 0;
                        var f = c[d],
                            g = b,
                            h = d;
                        if (ud.hasOwnProperty(h)) throw Error(k(99, h));
                        ud[h] = f;
                        var m = f.phasedRegistrationNames;
                        if (m) {
                            for (e in m) m.hasOwnProperty(e) && uf(m[e], g, h);
                            e = !0
                        } else f.registrationName ? (uf(f.registrationName,
                            g, h), e = !0) : e = !1;
                        if (!e) throw Error(k(98, d, a));
                    }
                }
            }
    }

    function uf(a, b, c) {
        if (eb[a]) throw Error(k(100, a));
        eb[a] = b;
        vd[a] = b.eventTypes[c].dependencies
    }

    function vf(a) {
        var b = !1,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (!db.hasOwnProperty(c) || db[c] !== d) {
                    if (db[c]) throw Error(k(102, c));
                    db[c] = d;
                    b = !0
                }
            } b && tf()
    }

    function wf(a) {
        if (a = xf(a)) {
            if ("function" !== typeof wd) throw Error(k(280));
            var b = a.stateNode;
            b && (b = xd(b), wd(a.stateNode, a.type, b))
        }
    }

    function yf(a) {
        fb ? gb ? gb.push(a) : gb = [a] : fb = a
    }

    function zf() {
        if (fb) {
            var a =
                fb,
                b = gb;
            gb = fb = null;
            wf(a);
            if (b)
                for (a = 0; a < b.length; a++) wf(b[a])
        }
    }

    function yd() {
        if (null !== fb || null !== gb) zd(), zf()
    }

    function Af(a, b, c) {
        if (Ad) return a(b, c);
        Ad = !0;
        try {
            return Bf(a, b, c)
        } finally {
            Ad = !1, yd()
        }
    }

    function pi(a) {
        if (Cf.call(Df, a)) return !0;
        if (Cf.call(Ef, a)) return !1;
        if (qi.test(a)) return Df[a] = !0;
        Ef[a] = !0;
        return !1
    }

    function ri(a, b, c, d) {
        if (null !== c && 0 === c.type) return !1;
        switch (typeof b) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                if (d) return !1;
                if (null !== c) return !c.acceptsBooleans;
                a = a.toLowerCase().slice(0,
                    5);
                return "data-" !== a && "aria-" !== a;
            default:
                return !1
        }
    }

    function si(a, b, c, d) {
        if (null === b || "undefined" === typeof b || ri(a, b, c, d)) return !0;
        if (d) return !1;
        if (null !== c) switch (c.type) {
            case 3:
                return !b;
            case 4:
                return !1 === b;
            case 5:
                return isNaN(b);
            case 6:
                return isNaN(b) || 1 > b
        }
        return !1
    }

    function L(a, b, c, d, e, f) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f
    }

    function Bd(a, b, c, d) {
        var e = E.hasOwnProperty(b) ?
            E[b] : null;
        var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
        f || (si(b, c, e, d) && (c = null), d || null === e ? pi(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))))
    }

    function va(a) {
        switch (typeof a) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return a;
            default:
                return ""
        }
    }

    function Ff(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b)
    }

    function ti(a) {
        var b = Ff(a) ? "checked" : "value",
            c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
            d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
            var e = c.get,
                f = c.set;
            Object.defineProperty(a, b, {
                configurable: !0,
                get: function () {
                    return e.call(this)
                },
                set: function (a) {
                    d = "" + a;
                    f.call(this, a)
                }
            });
            Object.defineProperty(a,
                b, {
                    enumerable: c.enumerable
                });
            return {
                getValue: function () {
                    return d
                },
                setValue: function (a) {
                    d = "" + a
                },
                stopTracking: function () {
                    a._valueTracker = null;
                    delete a[b]
                }
            }
        }
    }

    function mc(a) {
        a._valueTracker || (a._valueTracker = ti(a))
    }

    function Gf(a) {
        if (!a) return !1;
        var b = a._valueTracker;
        if (!b) return !0;
        var c = b.getValue();
        var d = "";
        a && (d = Ff(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), !0) : !1
    }

    function Cd(a, b) {
        var c = b.checked;
        return M({}, b, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null !=
                c ? c : a._wrapperState.initialChecked
        })
    }

    function Hf(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue,
            d = null != b.checked ? b.checked : b.defaultChecked;
        c = va(null != b.value ? b.value : c);
        a._wrapperState = {
            initialChecked: d,
            initialValue: c,
            controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
        }
    }

    function If(a, b) {
        b = b.checked;
        null != b && Bd(a, "checked", b, !1)
    }

    function Dd(a, b) {
        If(a, b);
        var c = va(b.value),
            d = b.type;
        if (null != c)
            if ("number" === d) {
                if (0 === c && "" === a.value || a.value != c) a.value = "" + c
            } else a.value !==
                "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
            a.removeAttribute("value");
            return
        }
        b.hasOwnProperty("value") ? Ed(a, b.type, c) : b.hasOwnProperty("defaultValue") && Ed(a, b.type, va(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked)
    }

    function Jf(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
            var d = b.type;
            if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
            b = "" + a._wrapperState.initialValue;
            c || b === a.value || (a.value =
                b);
            a.defaultValue = b
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c)
    }

    function Ed(a, b, c) {
        if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c)
    }

    function ui(a) {
        var b = "";
        ea.Children.forEach(a, function (a) {
            null != a && (b += a)
        });
        return b
    }

    function Fd(a, b) {
        a = M({
            children: void 0
        }, b);
        if (b = ui(b.children)) a.children = b;
        return a
    }

    function hb(a, b, c, d) {
        a = a.options;
        if (b) {
            b = {};
            for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
            for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0)
        } else {
            c = "" + va(c);
            b = null;
            for (e = 0; e < a.length; e++) {
                if (a[e].value === c) {
                    a[e].selected = !0;
                    d && (a[e].defaultSelected = !0);
                    return
                }
                null !== b || a[e].disabled || (b = a[e])
            }
            null !== b && (b.selected = !0)
        }
    }

    function Gd(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(k(91));
        return M({}, b, {
            value: void 0,
            defaultValue: void 0,
            children: "" + a._wrapperState.initialValue
        })
    }

    function Kf(a, b) {
        var c = b.value;
        if (null == c) {
            c = b.children;
            b = b.defaultValue;
            if (null != c) {
                if (null != b) throw Error(k(92));
                if (Array.isArray(c)) {
                    if (!(1 >= c.length)) throw Error(k(93));
                    c = c[0]
                }
                b = c
            }
            null == b && (b = "");
            c = b
        }
        a._wrapperState = {
            initialValue: va(c)
        }
    }

    function Lf(a, b) {
        var c = va(b.value),
            d = va(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d)
    }

    function Mf(a, b) {
        b = a.textContent;
        b === a._wrapperState.initialValue && "" !==
            b && null !== b && (a.value = b)
    }

    function Nf(a) {
        switch (a) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Hd(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? Nf(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a
    }

    function nc(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c
    }

    function oc(a) {
        if (Id[a]) return Id[a];
        if (!ib[a]) return a;
        var b = ib[a],
            c;
        for (c in b)
            if (b.hasOwnProperty(c) && c in Of) return Id[a] = b[c];
        return a
    }

    function Jd(a) {
        var b = Pf.get(a);
        void 0 === b && (b = new Map, Pf.set(a, b));
        return b
    }

    function Na(a) {
        var b = a,
            c = a;
        if (a.alternate)
            for (; b.return;) b = b.return;
        else {
            a = b;
            do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return; while (a)
        }
        return 3 === b.tag ? c : null
    }

    function Qf(a) {
        if (13 === a.tag) {
            var b = a.memoizedState;
            null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
            if (null !== b) return b.dehydrated
        }
        return null
    }

    function Rf(a) {
        if (Na(a) !==
            a) throw Error(k(188));
    }

    function vi(a) {
        var b = a.alternate;
        if (!b) {
            b = Na(a);
            if (null === b) throw Error(k(188));
            return b !== a ? null : a
        }
        for (var c = a, d = b;;) {
            var e = c.return;
            if (null === e) break;
            var f = e.alternate;
            if (null === f) {
                d = e.return;
                if (null !== d) {
                    c = d;
                    continue
                }
                break
            }
            if (e.child === f.child) {
                for (f = e.child; f;) {
                    if (f === c) return Rf(e), a;
                    if (f === d) return Rf(e), b;
                    f = f.sibling
                }
                throw Error(k(188));
            }
            if (c.return !== d.return) c = e, d = f;
            else {
                for (var g = !1, h = e.child; h;) {
                    if (h === c) {
                        g = !0;
                        c = e;
                        d = f;
                        break
                    }
                    if (h === d) {
                        g = !0;
                        d = e;
                        c = f;
                        break
                    }
                    h = h.sibling
                }
                if (!g) {
                    for (h =
                        f.child; h;) {
                        if (h === c) {
                            g = !0;
                            c = f;
                            d = e;
                            break
                        }
                        if (h === d) {
                            g = !0;
                            d = f;
                            c = e;
                            break
                        }
                        h = h.sibling
                    }
                    if (!g) throw Error(k(189));
                }
            }
            if (c.alternate !== d) throw Error(k(190));
        }
        if (3 !== c.tag) throw Error(k(188));
        return c.stateNode.current === c ? a : b
    }

    function Sf(a) {
        a = vi(a);
        if (!a) return null;
        for (var b = a;;) {
            if (5 === b.tag || 6 === b.tag) return b;
            if (b.child) b.child.return = b, b = b.child;
            else {
                if (b === a) break;
                for (; !b.sibling;) {
                    if (!b.return || b.return === a) return null;
                    b = b.return
                }
                b.sibling.return = b.return;
                b = b.sibling
            }
        }
        return null
    }

    function jb(a, b) {
        if (null ==
            b) throw Error(k(30));
        if (null == a) return b;
        if (Array.isArray(a)) {
            if (Array.isArray(b)) return a.push.apply(a, b), a;
            a.push(b);
            return a
        }
        return Array.isArray(b) ? [a].concat(b) : [a, b]
    }

    function Kd(a, b, c) {
        Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a)
    }

    function pc(a) {
        null !== a && (Ab = jb(Ab, a));
        a = Ab;
        Ab = null;
        if (a) {
            Kd(a, wi);
            if (Ab) throw Error(k(95));
            if (hc) throw a = pd, hc = !1, pd = null, a;
        }
    }

    function Ld(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode :
            a
    }

    function Tf(a) {
        if (!wa) return !1;
        a = "on" + a;
        var b = a in document;
        b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
        return b
    }

    function Uf(a) {
        a.topLevelType = null;
        a.nativeEvent = null;
        a.targetInst = null;
        a.ancestors.length = 0;
        10 > qc.length && qc.push(a)
    }

    function Vf(a, b, c, d) {
        if (qc.length) {
            var e = qc.pop();
            e.topLevelType = a;
            e.eventSystemFlags = d;
            e.nativeEvent = b;
            e.targetInst = c;
            return e
        }
        return {
            topLevelType: a,
            eventSystemFlags: d,
            nativeEvent: b,
            targetInst: c,
            ancestors: []
        }
    }

    function Wf(a) {
        var b =
            a.targetInst,
            c = b;
        do {
            if (!c) {
                a.ancestors.push(c);
                break
            }
            var d = c;
            if (3 === d.tag) d = d.stateNode.containerInfo;
            else {
                for (; d.return;) d = d.return;
                d = 3 !== d.tag ? null : d.stateNode.containerInfo
            }
            if (!d) break;
            b = c.tag;
            5 !== b && 6 !== b || a.ancestors.push(c);
            c = Bb(d)
        } while (c);
        for (c = 0; c < a.ancestors.length; c++) {
            b = a.ancestors[c];
            var e = Ld(a.nativeEvent);
            d = a.topLevelType;
            var f = a.nativeEvent,
                g = a.eventSystemFlags;
            0 === c && (g |= 64);
            for (var h = null, m = 0; m < lc.length; m++) {
                var n = lc[m];
                n && (n = n.extractEvents(d, b, f, e, g)) && (h = jb(h, n))
            }
            pc(h)
        }
    }

    function Md(a,
        b, c) {
        if (!c.has(a)) {
            switch (a) {
                case "scroll":
                    Cb(b, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Cb(b, "focus", !0);
                    Cb(b, "blur", !0);
                    c.set("blur", null);
                    c.set("focus", null);
                    break;
                case "cancel":
                case "close":
                    Tf(a) && Cb(b, a, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Db.indexOf(a) && w(a, b)
            }
            c.set(a, null)
        }
    }

    function xi(a, b) {
        var c = Jd(b);
        Nd.forEach(function (a) {
            Md(a, b, c)
        });
        yi.forEach(function (a) {
            Md(a, b, c)
        })
    }

    function Od(a, b, c, d, e) {
        return {
            blockedOn: a,
            topLevelType: b,
            eventSystemFlags: c | 32,
            nativeEvent: e,
            container: d
        }
    }

    function Xf(a, b) {
        switch (a) {
            case "focus":
            case "blur":
                xa = null;
                break;
            case "dragenter":
            case "dragleave":
                ya = null;
                break;
            case "mouseover":
            case "mouseout":
                za = null;
                break;
            case "pointerover":
            case "pointerout":
                Eb.delete(b.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Fb.delete(b.pointerId)
        }
    }

    function Gb(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = Od(b, c, d, e, f), null !== b && (b = Hb(b), null !== b && Yf(b)), a;
        a.eventSystemFlags |= d;
        return a
    }

    function zi(a, b, c, d, e) {
        switch (b) {
            case "focus":
                return xa =
                    Gb(xa, a, b, c, d, e), !0;
            case "dragenter":
                return ya = Gb(ya, a, b, c, d, e), !0;
            case "mouseover":
                return za = Gb(za, a, b, c, d, e), !0;
            case "pointerover":
                var f = e.pointerId;
                Eb.set(f, Gb(Eb.get(f) || null, a, b, c, d, e));
                return !0;
            case "gotpointercapture":
                return f = e.pointerId, Fb.set(f, Gb(Fb.get(f) || null, a, b, c, d, e)), !0
        }
        return !1
    }

    function Ai(a) {
        var b = Bb(a.target);
        if (null !== b) {
            var c = Na(b);
            if (null !== c)
                if (b = c.tag, 13 === b) {
                    if (b = Qf(c), null !== b) {
                        a.blockedOn = b;
                        Pd(a.priority, function () {
                            Bi(c)
                        });
                        return
                    }
                } else if (3 === b && c.stateNode.hydrate) {
                a.blockedOn =
                    3 === c.tag ? c.stateNode.containerInfo : null;
                return
            }
        }
        a.blockedOn = null
    }

    function rc(a) {
        if (null !== a.blockedOn) return !1;
        var b = Qd(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
        if (null !== b) {
            var c = Hb(b);
            null !== c && Yf(c);
            a.blockedOn = b;
            return !1
        }
        return !0
    }

    function Zf(a, b, c) {
        rc(a) && c.delete(b)
    }

    function Ci() {
        for (Rd = !1; 0 < fa.length;) {
            var a = fa[0];
            if (null !== a.blockedOn) {
                a = Hb(a.blockedOn);
                null !== a && Di(a);
                break
            }
            var b = Qd(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
            null !== b ? a.blockedOn = b : fa.shift()
        }
        null !==
            xa && rc(xa) && (xa = null);
        null !== ya && rc(ya) && (ya = null);
        null !== za && rc(za) && (za = null);
        Eb.forEach(Zf);
        Fb.forEach(Zf)
    }

    function Ib(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Rd || (Rd = !0, $f(ag, Ci)))
    }

    function bg(a) {
        if (0 < fa.length) {
            Ib(fa[0], a);
            for (var b = 1; b < fa.length; b++) {
                var c = fa[b];
                c.blockedOn === a && (c.blockedOn = null)
            }
        }
        null !== xa && Ib(xa, a);
        null !== ya && Ib(ya, a);
        null !== za && Ib(za, a);
        b = function (b) {
            return Ib(b, a)
        };
        Eb.forEach(b);
        Fb.forEach(b);
        for (b = 0; b < Jb.length; b++) c = Jb[b], c.blockedOn === a && (c.blockedOn = null);
        for (; 0 < Jb.length &&
            (b = Jb[0], null === b.blockedOn);) Ai(b), null === b.blockedOn && Jb.shift()
    }

    function Sd(a, b) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c],
                e = a[c + 1],
                f = "on" + (e[0].toUpperCase() + e.slice(1));
            f = {
                phasedRegistrationNames: {
                    bubbled: f,
                    captured: f + "Capture"
                },
                dependencies: [d],
                eventPriority: b
            };
            Td.set(d, b);
            cg.set(d, f);
            dg[e] = f
        }
    }

    function w(a, b) {
        Cb(b, a, !1)
    }

    function Cb(a, b, c) {
        var d = Td.get(b);
        switch (void 0 === d ? 2 : d) {
            case 0:
                d = Ei.bind(null, b, 1, a);
                break;
            case 1:
                d = Fi.bind(null, b, 1, a);
                break;
            default:
                d = sc.bind(null, b, 1, a)
        }
        c ? a.addEventListener(b,
            d, !0) : a.addEventListener(b, d, !1)
    }

    function Ei(a, b, c, d) {
        Oa || zd();
        var e = sc,
            f = Oa;
        Oa = !0;
        try {
            eg(e, a, b, c, d)
        } finally {
            (Oa = f) || yd()
        }
    }

    function Fi(a, b, c, d) {
        Gi(Hi, sc.bind(null, a, b, c, d))
    }

    function sc(a, b, c, d) {
        if (tc)
            if (0 < fa.length && -1 < Nd.indexOf(a)) a = Od(null, a, b, c, d), fa.push(a);
            else {
                var e = Qd(a, b, c, d);
                if (null === e) Xf(a, d);
                else if (-1 < Nd.indexOf(a)) a = Od(e, a, b, c, d), fa.push(a);
                else if (!zi(e, a, b, c, d)) {
                    Xf(a, d);
                    a = Vf(a, d, null, b);
                    try {
                        Af(Wf, a)
                    } finally {
                        Uf(a)
                    }
                }
            }
    }

    function Qd(a, b, c, d) {
        c = Ld(d);
        c = Bb(c);
        if (null !== c) {
            var e = Na(c);
            if (null ===
                e) c = null;
            else {
                var f = e.tag;
                if (13 === f) {
                    c = Qf(e);
                    if (null !== c) return c;
                    c = null
                } else if (3 === f) {
                    if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null;
                    c = null
                } else e !== c && (c = null)
            }
        }
        a = Vf(a, d, c, b);
        try {
            Af(Wf, a)
        } finally {
            Uf(a)
        }
        return null
    }

    function fg(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || Kb.hasOwnProperty(a) && Kb[a] ? ("" + b).trim() : b + "px"
    }

    function gg(a, b) {
        a = a.style;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = 0 === c.indexOf("--"),
                    e = fg(c, b[c], d);
                "float" ===
                c && (c = "cssFloat");
                d ? a.setProperty(c, e) : a[c] = e
            }
    }

    function Ud(a, b) {
        if (b) {
            if (Ii[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(k(137, a, ""));
            if (null != b.dangerouslySetInnerHTML) {
                if (null != b.children) throw Error(k(60));
                if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(k(61));
            }
            if (null != b.style && "object" !== typeof b.style) throw Error(k(62, ""));
        }
    }

    function Vd(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function oa(a, b) {
        a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
        var c = Jd(a);
        b = vd[b];
        for (var d = 0; d < b.length; d++) Md(b[d], a, c)
    }

    function uc() {}

    function Wd(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }

    function hg(a) {
        for (; a && a.firstChild;) a = a.firstChild;
        return a
    }

    function ig(a, b) {
        var c = hg(a);
        a = 0;
        for (var d; c;) {
            if (3 === c.nodeType) {
                d = a + c.textContent.length;
                if (a <= b && d >= b) return {
                    node: c,
                    offset: b - a
                };
                a = d
            }
            a: {
                for (; c;) {
                    if (c.nextSibling) {
                        c = c.nextSibling;
                        break a
                    }
                    c = c.parentNode
                }
                c = void 0
            }
            c = hg(c)
        }
    }

    function jg(a, b) {
        return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? jg(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1
    }

    function kg() {
        for (var a = window, b = Wd(); b instanceof a.HTMLIFrameElement;) {
            try {
                var c = "string" === typeof b.contentWindow.location.href
            } catch (d) {
                c = !1
            }
            if (c) a = b.contentWindow;
            else break;
            b = Wd(a.document)
        }
        return b
    }

    function Xd(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable)
    }

    function lg(a, b) {
        switch (a) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!b.autoFocus
        }
        return !1
    }

    function Yd(a, b) {
        return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML &&
            null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html
    }

    function kb(a) {
        for (; null != a; a = a.nextSibling) {
            var b = a.nodeType;
            if (1 === b || 3 === b) break
        }
        return a
    }

    function mg(a) {
        a = a.previousSibling;
        for (var b = 0; a;) {
            if (8 === a.nodeType) {
                var c = a.data;
                if (c === ng || c === Zd || c === $d) {
                    if (0 === b) return a;
                    b--
                } else c === og && b++
            }
            a = a.previousSibling
        }
        return null
    }

    function Bb(a) {
        var b = a[Aa];
        if (b) return b;
        for (var c = a.parentNode; c;) {
            if (b = c[Lb] || c[Aa]) {
                c = b.alternate;
                if (null !== b.child || null !== c && null !== c.child)
                    for (a = mg(a); null !==
                        a;) {
                        if (c = a[Aa]) return c;
                        a = mg(a)
                    }
                return b
            }
            a = c;
            c = a.parentNode
        }
        return null
    }

    function Hb(a) {
        a = a[Aa] || a[Lb];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a
    }

    function Pa(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(k(33));
    }

    function ae(a) {
        return a[vc] || null
    }

    function pa(a) {
        do a = a.return; while (a && 5 !== a.tag);
        return a ? a : null
    }

    function pg(a, b) {
        var c = a.stateNode;
        if (!c) return null;
        var d = xd(c);
        if (!d) return null;
        c = d[b];
        a: switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                a = !d;
                break a;
            default:
                a = !1
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(k(231, b, typeof c));
        return c
    }

    function qg(a, b, c) {
        if (b = pg(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = jb(c._dispatchListeners, b), c._dispatchInstances = jb(c._dispatchInstances, a)
    }

    function Ji(a) {
        if (a && a.dispatchConfig.phasedRegistrationNames) {
            for (var b = a._targetInst, c = []; b;) c.push(b), b = pa(b);
            for (b = c.length; 0 < b--;) qg(c[b],
                "captured", a);
            for (b = 0; b < c.length; b++) qg(c[b], "bubbled", a)
        }
    }

    function be(a, b, c) {
        a && c && c.dispatchConfig.registrationName && (b = pg(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = jb(c._dispatchListeners, b), c._dispatchInstances = jb(c._dispatchInstances, a))
    }

    function Ki(a) {
        a && a.dispatchConfig.registrationName && be(a._targetInst, null, a)
    }

    function lb(a) {
        Kd(a, Ji)
    }

    function rg() {
        if (wc) return wc;
        var a, b = ce,
            c = b.length,
            d, e = "value" in Ba ? Ba.value : Ba.textContent,
            f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++);
        var g =
            c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
        return wc = e.slice(a, 1 < d ? 1 - d : void 0)
    }

    function xc() {
        return !0
    }

    function yc() {
        return !1
    }

    function R(a, b, c, d) {
        this.dispatchConfig = a;
        this._targetInst = b;
        this.nativeEvent = c;
        a = this.constructor.Interface;
        for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
        this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? xc : yc;
        this.isPropagationStopped = yc;
        return this
    }

    function Li(a, b, c, d) {
        if (this.eventPool.length) {
            var e =
                this.eventPool.pop();
            this.call(e, a, b, c, d);
            return e
        }
        return new this(a, b, c, d)
    }

    function Mi(a) {
        if (!(a instanceof this)) throw Error(k(279));
        a.destructor();
        10 > this.eventPool.length && this.eventPool.push(a)
    }

    function sg(a) {
        a.eventPool = [];
        a.getPooled = Li;
        a.release = Mi
    }

    function tg(a, b) {
        switch (a) {
            case "keyup":
                return -1 !== Ni.indexOf(b.keyCode);
            case "keydown":
                return 229 !== b.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function ug(a) {
        a = a.detail;
        return "object" === typeof a && "data" in
            a ? a.data : null
    }

    function Oi(a, b) {
        switch (a) {
            case "compositionend":
                return ug(b);
            case "keypress":
                if (32 !== b.which) return null;
                vg = !0;
                return wg;
            case "textInput":
                return a = b.data, a === wg && vg ? null : a;
            default:
                return null
        }
    }

    function Pi(a, b) {
        if (mb) return "compositionend" === a || !de && tg(a, b) ? (a = rg(), wc = ce = Ba = null, mb = !1, a) : null;
        switch (a) {
            case "paste":
                return null;
            case "keypress":
                if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                    if (b.char && 1 < b.char.length) return b.char;
                    if (b.which) return String.fromCharCode(b.which)
                }
                return null;
            case "compositionend":
                return xg && "ko" !== b.locale ? null : b.data;
            default:
                return null
        }
    }

    function yg(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!Qi[a.type] : "textarea" === b ? !0 : !1
    }

    function zg(a, b, c) {
        a = R.getPooled(Ag.change, a, b, c);
        a.type = "change";
        yf(c);
        lb(a);
        return a
    }

    function Ri(a) {
        pc(a)
    }

    function zc(a) {
        var b = Pa(a);
        if (Gf(b)) return a
    }

    function Si(a, b) {
        if ("change" === a) return b
    }

    function Bg() {
        Mb && (Mb.detachEvent("onpropertychange", Cg), Nb = Mb = null)
    }

    function Cg(a) {
        if ("value" === a.propertyName &&
            zc(Nb))
            if (a = zg(Nb, a, Ld(a)), Oa) pc(a);
            else {
                Oa = !0;
                try {
                    ee(Ri, a)
                } finally {
                    Oa = !1, yd()
                }
            }
    }

    function Ti(a, b, c) {
        "focus" === a ? (Bg(), Mb = b, Nb = c, Mb.attachEvent("onpropertychange", Cg)) : "blur" === a && Bg()
    }

    function Ui(a, b) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return zc(Nb)
    }

    function Vi(a, b) {
        if ("click" === a) return zc(b)
    }

    function Wi(a, b) {
        if ("input" === a || "change" === a) return zc(b)
    }

    function Xi(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Yi[a]) ? !!b[a] : !1
    }

    function fe(a) {
        return Xi
    }

    function Zi(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b
    }

    function Ob(a, b) {
        if (Qa(a, b)) return !0;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
        var c = Object.keys(a),
            d = Object.keys(b);
        if (c.length !== d.length) return !1;
        for (d = 0; d < c.length; d++)
            if (!$i.call(b, c[d]) || !Qa(a[c[d]], b[c[d]])) return !1;
        return !0
    }

    function Dg(a, b) {
        var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
        if (ge || null == nb || nb !== Wd(c)) return null;
        c = nb;
        "selectionStart" in c && Xd(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        });
        return Pb && Ob(Pb, c) ? null : (Pb = c, a = R.getPooled(Eg.select, he, a, b), a.type = "select", a.target = nb, lb(a), a)
    }

    function Ac(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0
    }

    function q(a, b) {
        0 > ob || (a.current = ie[ob], ie[ob] = null, ob--)
    }

    function y(a, b, c) {
        ob++;
        ie[ob] = a.current;
        a.current = b
    }

    function pb(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Ca;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {},
            f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e
    }

    function N(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a
    }

    function Fg(a, b, c) {
        if (B.current !== Ca) throw Error(k(168));
        y(B, b);
        y(G, c)
    }

    function Gg(a, b, c) {
        var d = a.stateNode;
        a = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d)
            if (!(e in a)) throw Error(k(108, na(b) || "Unknown", e));
        return M({}, c, {}, d)
    }

    function Bc(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Ca;
        Ra = B.current;
        y(B, a);
        y(G, G.current);
        return !0
    }

    function Hg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(k(169));
        c ? (a = Gg(a, b, Ra), d.__reactInternalMemoizedMergedChildContext = a, q(G), q(B), y(B, a)) : q(G);
        y(G, c)
    }

    function Cc() {
        switch (aj()) {
            case Dc:
                return 99;
            case Ig:
                return 98;
            case Jg:
                return 97;
            case Kg:
                return 96;
            case Lg:
                return 95;
            default:
                throw Error(k(332));
        }
    }

    function Mg(a) {
        switch (a) {
            case 99:
                return Dc;
            case 98:
                return Ig;
            case 97:
                return Jg;
            case 96:
                return Kg;
            case 95:
                return Lg;
            default:
                throw Error(k(332));
        }
    }

    function Da(a, b) {
        a = Mg(a);
        return bj(a, b)
    }

    function Ng(a, b, c) {
        a = Mg(a);
        return je(a, b, c)
    }

    function Og(a) {
        null === qa ? (qa = [a], Ec = je(Dc, Pg)) : qa.push(a);
        return Qg
    }

    function ha() {
        if (null !== Ec) {
            var a = Ec;
            Ec = null;
            Rg(a)
        }
        Pg()
    }

    function Pg() {
        if (!ke && null !== qa) {
            ke = !0;
            var a = 0;
            try {
                var b = qa;
                Da(99, function () {
                    for (; a < b.length; a++) {
                        var c = b[a];
                        do c = c(!0); while (null !== c)
                    }
                });
                qa = null
            } catch (c) {
                throw null !== qa && (qa = qa.slice(a + 1)), je(Dc, ha), c;
            } finally {
                ke = !1
            }
        }
    }

    function Fc(a, b, c) {
        c /= 10;
        return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c
    }

    function aa(a, b) {
        if (a && a.defaultProps) {
            b = M({}, b);
            a = a.defaultProps;
            for (var c in a) void 0 === b[c] && (b[c] = a[c])
        }
        return b
    }

    function le() {
        Gc = qb = Hc = null
    }

    function me(a) {
        var b = Ic.current;
        q(Ic);
        a.type._context._currentValue = b
    }

    function Sg(a, b) {
        for (; null !== a;) {
            var c =
                a.alternate;
            if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
            else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;
            else break;
            a = a.return
        }
    }

    function rb(a, b) {
        Hc = a;
        Gc = qb = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (a.expirationTime >= b && (ia = !0), a.firstContext = null)
    }

    function W(a, b) {
        if (Gc !== a && !1 !== b && 0 !== b) {
            if ("number" !== typeof b || 1073741823 === b) Gc = a, b = 1073741823;
            b = {
                context: a,
                observedBits: b,
                next: null
            };
            if (null === qb) {
                if (null ===
                    Hc) throw Error(k(308));
                qb = b;
                Hc.dependencies = {
                    expirationTime: 0,
                    firstContext: b,
                    responders: null
                }
            } else qb = qb.next = b
        }
        return a._currentValue
    }

    function ne(a) {
        a.updateQueue = {
            baseState: a.memoizedState,
            baseQueue: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }

    function oe(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = {
            baseState: a.baseState,
            baseQueue: a.baseQueue,
            shared: a.shared,
            effects: a.effects
        })
    }

    function Ea(a, b) {
        a = {
            expirationTime: a,
            suspenseConfig: b,
            tag: Tg,
            payload: null,
            callback: null,
            next: null
        };
        return a.next =
            a
    }

    function Fa(a, b) {
        a = a.updateQueue;
        if (null !== a) {
            a = a.shared;
            var c = a.pending;
            null === c ? b.next = b : (b.next = c.next, c.next = b);
            a.pending = b
        }
    }

    function Ug(a, b) {
        var c = a.alternate;
        null !== c && oe(c, a);
        a = a.updateQueue;
        c = a.baseQueue;
        null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b)
    }

    function Qb(a, b, c, d) {
        var e = a.updateQueue;
        Ga = !1;
        var f = e.baseQueue,
            g = e.shared.pending;
        if (null !== g) {
            if (null !== f) {
                var h = f.next;
                f.next = g.next;
                g.next = h
            }
            f = g;
            e.shared.pending = null;
            h = a.alternate;
            null !== h && (h = h.updateQueue, null !== h &&
                (h.baseQueue = g))
        }
        if (null !== f) {
            h = f.next;
            var m = e.baseState,
                n = 0,
                k = null,
                ba = null,
                l = null;
            if (null !== h) {
                var p = h;
                do {
                    g = p.expirationTime;
                    if (g < d) {
                        var t = {
                            expirationTime: p.expirationTime,
                            suspenseConfig: p.suspenseConfig,
                            tag: p.tag,
                            payload: p.payload,
                            callback: p.callback,
                            next: null
                        };
                        null === l ? (ba = l = t, k = m) : l = l.next = t;
                        g > n && (n = g)
                    } else {
                        null !== l && (l = l.next = {
                            expirationTime: 1073741823,
                            suspenseConfig: p.suspenseConfig,
                            tag: p.tag,
                            payload: p.payload,
                            callback: p.callback,
                            next: null
                        });
                        Vg(g, p.suspenseConfig);
                        a: {
                            var q = a,
                                r = p;g = b;t = c;
                            switch (r.tag) {
                                case 1:
                                    q =
                                        r.payload;
                                    if ("function" === typeof q) {
                                        m = q.call(t, m, g);
                                        break a
                                    }
                                    m = q;
                                    break a;
                                case 3:
                                    q.effectTag = q.effectTag & -4097 | 64;
                                case Tg:
                                    q = r.payload;
                                    g = "function" === typeof q ? q.call(t, m, g) : q;
                                    if (null === g || void 0 === g) break a;
                                    m = M({}, m, g);
                                    break a;
                                case Jc:
                                    Ga = !0
                            }
                        }
                        null !== p.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [p] : g.push(p))
                    }
                    p = p.next;
                    if (null === p || p === h)
                        if (g = e.shared.pending, null === g) break;
                        else p = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null
                } while (1)
            }
            null === l ? k = m : l.next = ba;
            e.baseState = k;
            e.baseQueue =
                l;
            Kc(n);
            a.expirationTime = n;
            a.memoizedState = m
        }
    }

    function Wg(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a)
            for (b = 0; b < a.length; b++) {
                var d = a[b],
                    e = d.callback;
                if (null !== e) {
                    d.callback = null;
                    d = e;
                    e = c;
                    if ("function" !== typeof d) throw Error(k(191, d));
                    d.call(e)
                }
            }
    }

    function Lc(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : M({}, b, c);
        a.memoizedState = c;
        0 === a.expirationTime && (a.updateQueue.baseState = c)
    }

    function Xg(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d,
            f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ob(c, d) || !Ob(e, f) : !0
    }

    function Yg(a, b, c) {
        var d = !1,
            e = Ca;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = W(f) : (e = N(b) ? Ra : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? pb(a, e) : Ca);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Mc;
        a.stateNode = b;
        b._reactInternalFiber = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b
    }

    function Zg(a,
        b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Mc.enqueueReplaceState(b, b.state, null)
    }

    function pe(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = $g;
        ne(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = W(f) : (f = N(b) ? Ra : B.current, e.context = pb(a, f));
        Qb(a, c, e, d);
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Lc(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Mc.enqueueReplaceState(e, e.state, null), Qb(a, c, e, d), e.state = a.memoizedState);
        "function" ===
        typeof e.componentDidMount && (a.effectTag |= 4)
    }

    function Rb(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
            if (c._owner) {
                c = c._owner;
                if (c) {
                    if (1 !== c.tag) throw Error(k(309));
                    var d = c.stateNode
                }
                if (!d) throw Error(k(147, a));
                var e = "" + a;
                if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
                b = function (a) {
                    var b = d.refs;
                    b === $g && (b = d.refs = {});
                    null === a ? delete b[e] : b[e] = a
                };
                b._stringRef = e;
                return b
            }
            if ("string" !== typeof a) throw Error(k(284));
            if (!c._owner) throw Error(k(290,
                a));
        }
        return a
    }

    function Nc(a, b) {
        if ("textarea" !== a.type) throw Error(k(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
    }

    function ah(a) {
        function b(b, c) {
            if (a) {
                var d = b.lastEffect;
                null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
                c.nextEffect = null;
                c.effectTag = 8
            }
        }

        function c(c, d) {
            if (!a) return null;
            for (; null !== d;) b(c, d), d = d.sibling;
            return null
        }

        function d(a, b) {
            for (a = new Map; null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index,
                b), b = b.sibling;
            return a
        }

        function e(a, b) {
            a = Sa(a, b);
            a.index = 0;
            a.sibling = null;
            return a
        }

        function f(b, c, d) {
            b.index = d;
            if (!a) return c;
            d = b.alternate;
            if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
            b.effectTag = 2;
            return c
        }

        function g(b) {
            a && null === b.alternate && (b.effectTag = 2);
            return b
        }

        function h(a, b, c, d) {
            if (null === b || 6 !== b.tag) return b = qe(c, a.mode, d), b.return = a, b;
            b = e(b, c);
            b.return = a;
            return b
        }

        function m(a, b, c, d) {
            if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Rb(a, b, c), d.return = a, d;
            d = Oc(c.type,
                c.key, c.props, null, a.mode, d);
            d.ref = Rb(a, b, c);
            d.return = a;
            return d
        }

        function n(a, b, c, d) {
            if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = re(c, a.mode, d), b.return = a, b;
            b = e(b, c.children || []);
            b.return = a;
            return b
        }

        function l(a, b, c, d, f) {
            if (null === b || 7 !== b.tag) return b = Ha(c, a.mode, d, f), b.return = a, b;
            b = e(b, c);
            b.return = a;
            return b
        }

        function ba(a, b, c) {
            if ("string" === typeof b || "number" === typeof b) return b = qe("" + b, a.mode, c), b.return = a, b;
            if ("object" ===
                typeof b && null !== b) {
                switch (b.$$typeof) {
                    case Pc:
                        return c = Oc(b.type, b.key, b.props, null, a.mode, c), c.ref = Rb(a, null, b), c.return = a, c;
                    case cb:
                        return b = re(b, a.mode, c), b.return = a, b
                }
                if (Qc(b) || zb(b)) return b = Ha(b, a.mode, c, null), b.return = a, b;
                Nc(a, b)
            }
            return null
        }

        function p(a, b, c, d) {
            var e = null !== b ? b.key : null;
            if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
            if ("object" === typeof c && null !== c) {
                switch (c.$$typeof) {
                    case Pc:
                        return c.key === e ? c.type === Ma ? l(a, b, c.props.children, d, e) : m(a, b, c,
                            d) : null;
                    case cb:
                        return c.key === e ? n(a, b, c, d) : null
                }
                if (Qc(c) || zb(c)) return null !== e ? null : l(a, b, c, d, null);
                Nc(a, c)
            }
            return null
        }

        function t(a, b, c, d, e) {
            if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
            if ("object" === typeof d && null !== d) {
                switch (d.$$typeof) {
                    case Pc:
                        return a = a.get(null === d.key ? c : d.key) || null, d.type === Ma ? l(b, a, d.props.children, e, d.key) : m(b, a, d, e);
                    case cb:
                        return a = a.get(null === d.key ? c : d.key) || null, n(b, a, d, e)
                }
                if (Qc(d) || zb(d)) return a = a.get(c) || null, l(b, a, d, e, null);
                Nc(b, d)
            }
            return null
        }

        function q(e, g, h, m) {
            for (var n = null, k = null, l = g, r = g = 0, C = null; null !== l && r < h.length; r++) {
                l.index > r ? (C = l, l = null) : C = l.sibling;
                var O = p(e, l, h[r], m);
                if (null === O) {
                    null === l && (l = C);
                    break
                }
                a && l && null === O.alternate && b(e, l);
                g = f(O, g, r);
                null === k ? n = O : k.sibling = O;
                k = O;
                l = C
            }
            if (r === h.length) return c(e, l), n;
            if (null === l) {
                for (; r < h.length; r++) l = ba(e, h[r], m), null !== l && (g = f(l, g, r), null === k ? n = l : k.sibling = l, k = l);
                return n
            }
            for (l = d(e, l); r < h.length; r++) C = t(l, e, r, h[r], m), null !== C && (a && null !== C.alternate && l.delete(null ===
                C.key ? r : C.key), g = f(C, g, r), null === k ? n = C : k.sibling = C, k = C);
            a && l.forEach(function (a) {
                return b(e, a)
            });
            return n
        }

        function w(e, g, h, n) {
            var m = zb(h);
            if ("function" !== typeof m) throw Error(k(150));
            h = m.call(h);
            if (null == h) throw Error(k(151));
            for (var l = m = null, r = g, C = g = 0, O = null, v = h.next(); null !== r && !v.done; C++, v = h.next()) {
                r.index > C ? (O = r, r = null) : O = r.sibling;
                var q = p(e, r, v.value, n);
                if (null === q) {
                    null === r && (r = O);
                    break
                }
                a && r && null === q.alternate && b(e, r);
                g = f(q, g, C);
                null === l ? m = q : l.sibling = q;
                l = q;
                r = O
            }
            if (v.done) return c(e, r), m;
            if (null === r) {
                for (; !v.done; C++, v = h.next()) v = ba(e, v.value, n), null !== v && (g = f(v, g, C), null === l ? m = v : l.sibling = v, l = v);
                return m
            }
            for (r = d(e, r); !v.done; C++, v = h.next()) v = t(r, e, C, v.value, n), null !== v && (a && null !== v.alternate && r.delete(null === v.key ? C : v.key), g = f(v, g, C), null === l ? m = v : l.sibling = v, l = v);
            a && r.forEach(function (a) {
                return b(e, a)
            });
            return m
        }
        return function (a, d, f, h) {
            var m = "object" === typeof f && null !== f && f.type === Ma && null === f.key;
            m && (f = f.props.children);
            var n = "object" === typeof f && null !== f;
            if (n) switch (f.$$typeof) {
                case Pc:
                    a: {
                        n =
                        f.key;
                        for (m = d; null !== m;) {
                            if (m.key === n) {
                                switch (m.tag) {
                                    case 7:
                                        if (f.type === Ma) {
                                            c(a, m.sibling);
                                            d = e(m, f.props.children);
                                            d.return = a;
                                            a = d;
                                            break a
                                        }
                                        break;
                                    default:
                                        if (m.elementType === f.type) {
                                            c(a, m.sibling);
                                            d = e(m, f.props);
                                            d.ref = Rb(a, m, f);
                                            d.return = a;
                                            a = d;
                                            break a
                                        }
                                }
                                c(a, m);
                                break
                            } else b(a, m);
                            m = m.sibling
                        }
                        f.type === Ma ? (d = Ha(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Oc(f.type, f.key, f.props, null, a.mode, h), h.ref = Rb(a, d, f), h.return = a, a = h)
                    }
                    return g(a);
                case cb:
                    a: {
                        for (m = f.key; null !== d;) {
                            if (d.key === m)
                                if (4 === d.tag && d.stateNode.containerInfo ===
                                    f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a
                                } else {
                                    c(a, d);
                                    break
                                }
                            else b(a, d);
                            d = d.sibling
                        }
                        d = re(f, a.mode, h);d.return = a;a = d
                    }
                    return g(a)
            }
            if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = qe(f, a.mode, h), d.return = a, a = d), g(a);
            if (Qc(f)) return q(a, d, f, h);
            if (zb(f)) return w(a, d, f, h);
            n && Nc(a, f);
            if ("undefined" === typeof f && !m) switch (a.tag) {
                case 1:
                case 0:
                    throw a =
                        a.type, Error(k(152, a.displayName || a.name || "Component"));
            }
            return c(a, d)
        }
    }

    function Ta(a) {
        if (a === Sb) throw Error(k(174));
        return a
    }

    function se(a, b) {
        y(Tb, b);
        y(Ub, a);
        y(ja, Sb);
        a = b.nodeType;
        switch (a) {
            case 9:
            case 11:
                b = (b = b.documentElement) ? b.namespaceURI : Hd(null, "");
                break;
            default:
                a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Hd(b, a)
        }
        q(ja);
        y(ja, b)
    }

    function tb(a) {
        q(ja);
        q(Ub);
        q(Tb)
    }

    function bh(a) {
        Ta(Tb.current);
        var b = Ta(ja.current);
        var c = Hd(b, a.type);
        b !== c && (y(Ub, a), y(ja, c))
    }

    function te(a) {
        Ub.current ===
            a && (q(ja), q(Ub))
    }

    function Rc(a) {
        for (var b = a; null !== b;) {
            if (13 === b.tag) {
                var c = b.memoizedState;
                if (null !== c && (c = c.dehydrated, null === c || c.data === $d || c.data === Zd)) return b
            } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                if (0 !== (b.effectTag & 64)) return b
            } else if (null !== b.child) {
                b.child.return = b;
                b = b.child;
                continue
            }
            if (b === a) break;
            for (; null === b.sibling;) {
                if (null === b.return || b.return === a) return null;
                b = b.return
            }
            b.sibling.return = b.return;
            b = b.sibling
        }
        return null
    }

    function ue(a, b) {
        return {
            responder: a,
            props: b
        }
    }

    function S() {
        throw Error(k(321));
    }

    function ve(a, b) {
        if (null === b) return !1;
        for (var c = 0; c < b.length && c < a.length; c++)
            if (!Qa(a[c], b[c])) return !1;
        return !0
    }

    function we(a, b, c, d, e, f) {
        Ia = f;
        z = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.expirationTime = 0;
        Sc.current = null === a || null === a.memoizedState ? dj : ej;
        a = c(d, e);
        if (b.expirationTime === Ia) {
            f = 0;
            do {
                b.expirationTime = 0;
                if (!(25 > f)) throw Error(k(301));
                f += 1;
                J = K = null;
                b.updateQueue = null;
                Sc.current = fj;
                a = c(d, e)
            } while (b.expirationTime === Ia)
        }
        Sc.current = Tc;
        b = null !== K && null !== K.next;
        Ia = 0;
        J = K = z = null;
        Uc = !1;
        if (b) throw Error(k(300));
        return a
    }

    function ub() {
        var a = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        null === J ? z.memoizedState = J = a : J = J.next = a;
        return J
    }

    function vb() {
        if (null === K) {
            var a = z.alternate;
            a = null !== a ? a.memoizedState : null
        } else a = K.next;
        var b = null === J ? z.memoizedState : J.next;
        if (null !== b) J = b, K = a;
        else {
            if (null === a) throw Error(k(310));
            K = a;
            a = {
                memoizedState: K.memoizedState,
                baseState: K.baseState,
                baseQueue: K.baseQueue,
                queue: K.queue,
                next: null
            };
            null === J ? z.memoizedState =
                J = a : J = J.next = a
        }
        return J
    }

    function Ua(a, b) {
        return "function" === typeof b ? b(a) : b
    }

    function Vc(a, b, c) {
        b = vb();
        c = b.queue;
        if (null === c) throw Error(k(311));
        c.lastRenderedReducer = a;
        var d = K,
            e = d.baseQueue,
            f = c.pending;
        if (null !== f) {
            if (null !== e) {
                var g = e.next;
                e.next = f.next;
                f.next = g
            }
            d.baseQueue = e = f;
            c.pending = null
        }
        if (null !== e) {
            e = e.next;
            d = d.baseState;
            var h = g = f = null,
                m = e;
            do {
                var n = m.expirationTime;
                if (n < Ia) {
                    var l = {
                        expirationTime: m.expirationTime,
                        suspenseConfig: m.suspenseConfig,
                        action: m.action,
                        eagerReducer: m.eagerReducer,
                        eagerState: m.eagerState,
                        next: null
                    };
                    null === h ? (g = h = l, f = d) : h = h.next = l;
                    n > z.expirationTime && (z.expirationTime = n, Kc(n))
                } else null !== h && (h = h.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: m.suspenseConfig,
                    action: m.action,
                    eagerReducer: m.eagerReducer,
                    eagerState: m.eagerState,
                    next: null
                }), Vg(n, m.suspenseConfig), d = m.eagerReducer === a ? m.eagerState : a(d, m.action);
                m = m.next
            } while (null !== m && m !== e);
            null === h ? f = d : h.next = g;
            Qa(d, b.memoizedState) || (ia = !0);
            b.memoizedState = d;
            b.baseState = f;
            b.baseQueue = h;
            c.lastRenderedState = d
        }
        return [b.memoizedState,
            c.dispatch
        ]
    }

    function Wc(a, b, c) {
        b = vb();
        c = b.queue;
        if (null === c) throw Error(k(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch,
            e = c.pending,
            f = b.memoizedState;
        if (null !== e) {
            c.pending = null;
            var g = e = e.next;
            do f = a(f, g.action), g = g.next; while (g !== e);
            Qa(f, b.memoizedState) || (ia = !0);
            b.memoizedState = f;
            null === b.baseQueue && (b.baseState = f);
            c.lastRenderedState = f
        }
        return [f, d]
    }

    function xe(a) {
        var b = ub();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = b.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Ua,
            lastRenderedState: a
        };
        a = a.dispatch = ch.bind(null, z, a);
        return [b.memoizedState, a]
    }

    function ye(a, b, c, d) {
        a = {
            tag: a,
            create: b,
            destroy: c,
            deps: d,
            next: null
        };
        b = z.updateQueue;
        null === b ? (b = {
            lastEffect: null
        }, z.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a
    }

    function dh(a) {
        return vb().memoizedState
    }

    function ze(a, b, c, d) {
        var e = ub();
        z.effectTag |= a;
        e.memoizedState = ye(1 | b, c, void 0, void 0 === d ? null : d)
    }

    function Ae(a, b, c, d) {
        var e = vb();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== K) {
            var g = K.memoizedState;
            f = g.destroy;
            if (null !== d && ve(d, g.deps)) {
                ye(b, c, f, d);
                return
            }
        }
        z.effectTag |= a;
        e.memoizedState = ye(1 | b, c, f, d)
    }

    function eh(a, b) {
        return ze(516, 4, a, b)
    }

    function Xc(a, b) {
        return Ae(516, 4, a, b)
    }

    function fh(a, b) {
        return Ae(4, 2, a, b)
    }

    function gh(a, b) {
        if ("function" === typeof b) return a = a(), b(a),
            function () {
                b(null)
            };
        if (null !== b && void 0 !== b) return a = a(), b.current = a,
            function () {
                b.current = null
            }
    }

    function hh(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Ae(4, 2, gh.bind(null, b, a), c)
    }

    function Be(a, b) {}

    function ih(a, b) {
        ub().memoizedState = [a, void 0 === b ? null : b];
        return a
    }

    function Yc(a, b) {
        var c = vb();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && ve(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a
    }

    function jh(a, b) {
        var c = vb();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && ve(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a
    }

    function Ce(a, b, c) {
        var d = Cc();
        Da(98 > d ? 98 : d, function () {
            a(!0)
        });
        Da(97 < d ? 97 : d, function () {
            var d =
                X.suspense;
            X.suspense = void 0 === b ? null : b;
            try {
                a(!1), c()
            } finally {
                X.suspense = d
            }
        })
    }

    function ch(a, b, c) {
        var d = ka(),
            e = Vb.suspense;
        d = Va(d, a, e);
        e = {
            expirationTime: d,
            suspenseConfig: e,
            action: c,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var f = b.pending;
        null === f ? e.next = e : (e.next = f.next, f.next = e);
        b.pending = e;
        f = a.alternate;
        if (a === z || null !== f && f === z) Uc = !0, e.expirationTime = Ia, z.expirationTime = Ia;
        else {
            if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
                var g = b.lastRenderedState,
                    h = f(g, c);
                e.eagerReducer = f;
                e.eagerState = h;
                if (Qa(h, g)) return
            } catch (m) {} finally {}
            Ja(a, d)
        }
    }

    function kh(a, b) {
        var c = la(5, null, null, 0);
        c.elementType = "DELETED";
        c.type = "DELETED";
        c.stateNode = b;
        c.return = a;
        c.effectTag = 8;
        null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c
    }

    function lh(a, b) {
        switch (a.tag) {
            case 5:
                var c = a.type;
                b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                return null !== b ? (a.stateNode = b, !0) : !1;
            case 6:
                return b = "" === a.pendingProps || 3 !== b.nodeType ?
                    null : b, null !== b ? (a.stateNode = b, !0) : !1;
            case 13:
                return !1;
            default:
                return !1
        }
    }

    function De(a) {
        if (Wa) {
            var b = Ka;
            if (b) {
                var c = b;
                if (!lh(a, b)) {
                    b = kb(c.nextSibling);
                    if (!b || !lh(a, b)) {
                        a.effectTag = a.effectTag & -1025 | 2;
                        Wa = !1;
                        ra = a;
                        return
                    }
                    kh(ra, c)
                }
                ra = a;
                Ka = kb(b.firstChild)
            } else a.effectTag = a.effectTag & -1025 | 2, Wa = !1, ra = a
        }
    }

    function mh(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
        ra = a
    }

    function Zc(a) {
        if (a !== ra) return !1;
        if (!Wa) return mh(a), Wa = !0, !1;
        var b = a.type;
        if (5 !== a.tag || "head" !== b && "body" !==
            b && !Yd(b, a.memoizedProps))
            for (b = Ka; b;) kh(a, b), b = kb(b.nextSibling);
        mh(a);
        if (13 === a.tag) {
            a = a.memoizedState;
            a = null !== a ? a.dehydrated : null;
            if (!a) throw Error(k(317));
            a: {
                a = a.nextSibling;
                for (b = 0; a;) {
                    if (8 === a.nodeType) {
                        var c = a.data;
                        if (c === og) {
                            if (0 === b) {
                                Ka = kb(a.nextSibling);
                                break a
                            }
                            b--
                        } else c !== ng && c !== Zd && c !== $d || b++
                    }
                    a = a.nextSibling
                }
                Ka = null
            }
        } else Ka = ra ? kb(a.stateNode.nextSibling) : null;
        return !0
    }

    function Ee() {
        Ka = ra = null;
        Wa = !1
    }

    function T(a, b, c, d) {
        b.child = null === a ? Fe(b, null, c, d) : wb(b, a.child, c, d)
    }

    function nh(a,
        b, c, d, e) {
        c = c.render;
        var f = b.ref;
        rb(b, e);
        d = we(a, b, c, d, f, e);
        if (null !== a && !ia) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), sa(a, b, e);
        b.effectTag |= 1;
        T(a, b, d, e);
        return b.child
    }

    function oh(a, b, c, d, e, f) {
        if (null === a) {
            var g = c.type;
            if ("function" === typeof g && !Ge(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ph(a, b, g, d, e, f);
            a = Oc(c.type, null, d, null, b.mode, f);
            a.ref = b.ref;
            a.return = b;
            return b.child = a
        }
        g = a.child;
        if (e <
            f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Ob, c(e, d) && a.ref === b.ref)) return sa(a, b, f);
        b.effectTag |= 1;
        a = Sa(g, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a
    }

    function ph(a, b, c, d, e, f) {
        return null !== a && Ob(a.memoizedProps, d) && a.ref === b.ref && (ia = !1, e < f) ? (b.expirationTime = a.expirationTime, sa(a, b, f)) : He(a, b, c, d, f)
    }

    function qh(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128
    }

    function He(a, b, c, d, e) {
        var f = N(c) ? Ra : B.current;
        f = pb(b, f);
        rb(b, e);
        c = we(a, b, c, d, f, e);
        if (null !== a && !ia) return b.updateQueue =
            a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), sa(a, b, e);
        b.effectTag |= 1;
        T(a, b, c, e);
        return b.child
    }

    function rh(a, b, c, d, e) {
        if (N(c)) {
            var f = !0;
            Bc(b)
        } else f = !1;
        rb(b, e);
        if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Yg(b, c, d), pe(b, c, d, e), d = !0;
        else if (null === a) {
            var g = b.stateNode,
                h = b.memoizedProps;
            g.props = h;
            var m = g.context,
                n = c.contextType;
            "object" === typeof n && null !== n ? n = W(n) : (n = N(c) ? Ra : B.current, n = pb(b, n));
            var l = c.getDerivedStateFromProps,
                k = "function" ===
                typeof l || "function" === typeof g.getSnapshotBeforeUpdate;
            k || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || m !== n) && Zg(b, g, d, n);
            Ga = !1;
            var p = b.memoizedState;
            g.state = p;
            Qb(b, d, g, e);
            m = b.memoizedState;
            h !== d || p !== m || G.current || Ga ? ("function" === typeof l && (Lc(b, c, l, d), m = b.memoizedState), (h = Ga || Xg(b, c, h, d, p, m, n)) ? (k || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount &&
                g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = m), g.props = d, g.state = m, g.context = n, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1)
        } else g = b.stateNode, oe(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : aa(b.type, h), m = g.context, n = c.contextType, "object" === typeof n && null !==
            n ? n = W(n) : (n = N(c) ? Ra : B.current, n = pb(b, n)), l = c.getDerivedStateFromProps, (k = "function" === typeof l || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || m !== n) && Zg(b, g, d, n), Ga = !1, m = b.memoizedState, g.state = m, Qb(b, d, g, e), p = b.memoizedState, h !== d || m !== p || G.current || Ga ? ("function" === typeof l && (Lc(b, c, l, d), p = b.memoizedState), (l = Ga || Xg(b, c, h, d, m, p, n)) ? (k || "function" !== typeof g.UNSAFE_componentWillUpdate &&
                "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, p, n), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, p, n)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && m === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && m ===
                a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = p), g.props = d, g.state = p, g.context = n, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && m === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && m === a.memoizedState || (b.effectTag |= 256), d = !1);
        return Ie(a, b, c, d, f, e)
    }

    function Ie(a, b, c, d, e, f) {
        qh(a, b);
        var g = 0 !== (b.effectTag & 64);
        if (!d && !g) return e && Hg(b, c, !1), sa(a, b, f);
        d = b.stateNode;
        gj.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ?
            null : d.render();
        b.effectTag |= 1;
        null !== a && g ? (b.child = wb(b, a.child, null, f), b.child = wb(b, null, h, f)) : T(a, b, h, f);
        b.memoizedState = d.state;
        e && Hg(b, c, !0);
        return b.child
    }

    function sh(a) {
        var b = a.stateNode;
        b.pendingContext ? Fg(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Fg(a, b.context, !1);
        se(a, b.containerInfo)
    }

    function th(a, b, c) {
        var d = b.mode,
            e = b.pendingProps,
            f = D.current,
            g = !1,
            h;
        (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
        h ? (g = !0, b.effectTag &= -65) : null !== a && null ===
            a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
        y(D, f & 1);
        if (null === a) {
            void 0 !== e.fallback && De(b);
            if (g) {
                g = e.fallback;
                e = Ha(null, d, 0, null);
                e.return = b;
                if (0 === (b.mode & 2))
                    for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
                c = Ha(g, d, c, null);
                c.return = b;
                e.sibling = c;
                b.memoizedState = Je;
                b.child = e;
                return c
            }
            d = e.children;
            b.memoizedState = null;
            return b.child = Fe(b, null, d, c)
        }
        if (null !== a.memoizedState) {
            a = a.child;
            d = a.sibling;
            if (g) {
                e = e.fallback;
                c = Sa(a, a.pendingProps);
                c.return = b;
                if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child))
                    for (c.child = g; null !== g;) g.return = c, g = g.sibling;
                d = Sa(d, e);
                d.return = b;
                c.sibling = d;
                c.childExpirationTime = 0;
                b.memoizedState = Je;
                b.child = c;
                return d
            }
            c = wb(b, a.child, e.children, c);
            b.memoizedState = null;
            return b.child = c
        }
        a = a.child;
        if (g) {
            g = e.fallback;
            e = Ha(null, d, 0, null);
            e.return = b;
            e.child = a;
            null !== a && (a.return = e);
            if (0 === (b.mode & 2))
                for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !==
                    a;) a.return = e, a = a.sibling;
            c = Ha(g, d, c, null);
            c.return = b;
            e.sibling = c;
            c.effectTag |= 2;
            e.childExpirationTime = 0;
            b.memoizedState = Je;
            b.child = e;
            return c
        }
        b.memoizedState = null;
        return b.child = wb(b, a, e.children, c)
    }

    function uh(a, b) {
        a.expirationTime < b && (a.expirationTime = b);
        var c = a.alternate;
        null !== c && c.expirationTime < b && (c.expirationTime = b);
        Sg(a.return, b)
    }

    function Ke(a, b, c, d, e, f) {
        var g = a.memoizedState;
        null === g ? a.memoizedState = {
            isBackwards: b,
            rendering: null,
            renderingStartTime: 0,
            last: d,
            tail: c,
            tailExpiration: 0,
            tailMode: e,
            lastEffect: f
        } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f)
    }

    function vh(a, b, c) {
        var d = b.pendingProps,
            e = d.revealOrder,
            f = d.tail;
        T(a, b, d.children, c);
        d = D.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;
        else {
            if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
                if (13 === a.tag) null !== a.memoizedState && uh(a, c);
                else if (19 === a.tag) uh(a, c);
                else if (null !== a.child) {
                    a.child.return = a;
                    a = a.child;
                    continue
                }
                if (a === b) break a;
                for (; null === a.sibling;) {
                    if (null ===
                        a.return || a.return === b) break a;
                    a = a.return
                }
                a.sibling.return = a.return;
                a = a.sibling
            }
            d &= 1
        }
        y(D, d);
        if (0 === (b.mode & 2)) b.memoizedState = null;
        else switch (e) {
            case "forwards":
                c = b.child;
                for (e = null; null !== c;) a = c.alternate, null !== a && null === Rc(a) && (e = c), c = c.sibling;
                c = e;
                null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                Ke(b, !1, e, c, f, b.lastEffect);
                break;
            case "backwards":
                c = null;
                e = b.child;
                for (b.child = null; null !== e;) {
                    a = e.alternate;
                    if (null !== a && null === Rc(a)) {
                        b.child = e;
                        break
                    }
                    a = e.sibling;
                    e.sibling = c;
                    c = e;
                    e = a
                }
                Ke(b,
                    !0, c, null, f, b.lastEffect);
                break;
            case "together":
                Ke(b, !1, null, null, void 0, b.lastEffect);
                break;
            default:
                b.memoizedState = null
        }
        return b.child
    }

    function sa(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        var d = b.expirationTime;
        0 !== d && Kc(d);
        if (b.childExpirationTime < c) return null;
        if (null !== a && b.child !== a.child) throw Error(k(153));
        if (null !== b.child) {
            a = b.child;
            c = Sa(a, a.pendingProps);
            b.child = c;
            for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Sa(a, a.pendingProps), c.return = b;
            c.sibling = null
        }
        return b.child
    }

    function $c(a, b) {
        switch (a.tailMode) {
            case "hidden":
                b = a.tail;
                for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
                null === c ? a.tail = null : c.sibling = null;
                break;
            case "collapsed":
                c = a.tail;
                for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
                null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null
        }
    }

    function hj(a, b, c) {
        var d = b.pendingProps;
        switch (b.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return N(b.type) && (q(G), q(B)),
                    null;
            case 3:
                return tb(), q(G), q(B), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Zc(b) || (b.effectTag |= 4), wh(b), null;
            case 5:
                te(b);
                c = Ta(Tb.current);
                var e = b.type;
                if (null !== a && null != b.stateNode) ij(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
                else {
                    if (!d) {
                        if (null === b.stateNode) throw Error(k(166));
                        return null
                    }
                    a = Ta(ja.current);
                    if (Zc(b)) {
                        d = b.stateNode;
                        e = b.type;
                        var f = b.memoizedProps;
                        d[Aa] = b;
                        d[vc] = f;
                        switch (e) {
                            case "iframe":
                            case "object":
                            case "embed":
                                w("load",
                                    d);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Db.length; a++) w(Db[a], d);
                                break;
                            case "source":
                                w("error", d);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                w("error", d);
                                w("load", d);
                                break;
                            case "form":
                                w("reset", d);
                                w("submit", d);
                                break;
                            case "details":
                                w("toggle", d);
                                break;
                            case "input":
                                Hf(d, f);
                                w("invalid", d);
                                oa(c, "onChange");
                                break;
                            case "select":
                                d._wrapperState = {
                                    wasMultiple: !!f.multiple
                                };
                                w("invalid", d);
                                oa(c, "onChange");
                                break;
                            case "textarea":
                                Kf(d, f), w("invalid", d), oa(c, "onChange")
                        }
                        Ud(e, f);
                        a = null;
                        for (var g in f)
                            if (f.hasOwnProperty(g)) {
                                var h =
                                    f[g];
                                "children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : eb.hasOwnProperty(g) && null != h && oa(c, g)
                            } switch (e) {
                            case "input":
                                mc(d);
                                Jf(d, f, !0);
                                break;
                            case "textarea":
                                mc(d);
                                Mf(d);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof f.onClick && (d.onclick = uc)
                        }
                        c = a;
                        b.updateQueue = c;
                        null !== c && (b.effectTag |= 4)
                    } else {
                        g = 9 === c.nodeType ? c : c.ownerDocument;
                        "http://www.w3.org/1999/xhtml" === a && (a = Nf(e));
                        "http://www.w3.org/1999/xhtml" ===
                        a ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, {
                            is: d.is
                        }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
                        a[Aa] = b;
                        a[vc] = d;
                        jj(a, b, !1, !1);
                        b.stateNode = a;
                        g = Vd(e, d);
                        switch (e) {
                            case "iframe":
                            case "object":
                            case "embed":
                                w("load", a);
                                h = d;
                                break;
                            case "video":
                            case "audio":
                                for (h = 0; h < Db.length; h++) w(Db[h], a);
                                h = d;
                                break;
                            case "source":
                                w("error", a);
                                h = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                w("error", a);
                                w("load", a);
                                h = d;
                                break;
                            case "form":
                                w("reset", a);
                                w("submit", a);
                                h = d;
                                break;
                            case "details":
                                w("toggle", a);
                                h = d;
                                break;
                            case "input":
                                Hf(a, d);
                                h = Cd(a, d);
                                w("invalid", a);
                                oa(c, "onChange");
                                break;
                            case "option":
                                h = Fd(a, d);
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                h = M({}, d, {
                                    value: void 0
                                });
                                w("invalid", a);
                                oa(c, "onChange");
                                break;
                            case "textarea":
                                Kf(a, d);
                                h = Gd(a, d);
                                w("invalid", a);
                                oa(c, "onChange");
                                break;
                            default:
                                h = d
                        }
                        Ud(e, h);
                        var m = h;
                        for (f in m)
                            if (m.hasOwnProperty(f)) {
                                var n =
                                    m[f];
                                "style" === f ? gg(a, n) : "dangerouslySetInnerHTML" === f ? (n = n ? n.__html : void 0, null != n && xh(a, n)) : "children" === f ? "string" === typeof n ? ("textarea" !== e || "" !== n) && Wb(a, n) : "number" === typeof n && Wb(a, "" + n) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (eb.hasOwnProperty(f) ? null != n && oa(c, f) : null != n && Bd(a, f, n, g))
                            } switch (e) {
                            case "input":
                                mc(a);
                                Jf(a, d, !1);
                                break;
                            case "textarea":
                                mc(a);
                                Mf(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + va(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                c = d.value;
                                null != c ? hb(a, !!d.multiple, c, !1) : null != d.defaultValue && hb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof h.onClick && (a.onclick = uc)
                        }
                        lg(e, d) && (b.effectTag |= 4)
                    }
                    null !== b.ref && (b.effectTag |= 128)
                }
                return null;
            case 6:
                if (a && null != b.stateNode) kj(a, b, a.memoizedProps, d);
                else {
                    if ("string" !== typeof d && null === b.stateNode) throw Error(k(166));
                    c = Ta(Tb.current);
                    Ta(ja.current);
                    Zc(b) ? (c = b.stateNode, d = b.memoizedProps, c[Aa] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ?
                        c : c.ownerDocument).createTextNode(d), c[Aa] = b, b.stateNode = c)
                }
                return null;
            case 13:
                q(D);
                d = b.memoizedState;
                if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
                c = null !== d;
                d = !1;
                null === a ? void 0 !== b.memoizedProps.fallback && Zc(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
                if (c && !d && 0 !== (b.mode & 2))
                    if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback ||
                        0 !== (D.current & 1)) F === Xa && (F = ad);
                    else {
                        if (F === Xa || F === ad) F = bd;
                        0 !== Xb && null !== U && (Ya(U, P), yh(U, Xb))
                    } if (c || d) b.effectTag |= 4;
                return null;
            case 4:
                return tb(), wh(b), null;
            case 10:
                return me(b), null;
            case 17:
                return N(b.type) && (q(G), q(B)), null;
            case 19:
                q(D);
                d = b.memoizedState;
                if (null === d) return null;
                e = 0 !== (b.effectTag & 64);
                f = d.rendering;
                if (null === f)
                    if (e) $c(d, !1);
                    else {
                        if (F !== Xa || null !== a && 0 !== (a.effectTag & 64))
                            for (f = b.child; null !== f;) {
                                a = Rc(f);
                                if (null !== a) {
                                    b.effectTag |= 64;
                                    $c(d, !1);
                                    e = a.updateQueue;
                                    null !== e && (b.updateQueue =
                                        e, b.effectTag |= 4);
                                    null === d.lastEffect && (b.firstEffect = null);
                                    b.lastEffect = d.lastEffect;
                                    for (d = b.child; null !== d;) e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState,
                                        e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : {
                                            expirationTime: f.expirationTime,
                                            firstContext: f.firstContext,
                                            responders: f.responders
                                        }), d = d.sibling;
                                    y(D, D.current & 1 | 2);
                                    return b.child
                                }
                                f = f.sibling
                            }
                    }
                else {
                    if (!e)
                        if (a = Rc(f), null !== a) {
                            if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), $c(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null
                        } else 2 * Y() - d.renderingStartTime > d.tailExpiration &&
                            1 < c && (b.effectTag |= 64, e = !0, $c(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
                    d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f)
                }
                return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = Y() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = Y(), c.sibling = null, b = D.current, y(D, e ? b & 1 | 2 : b & 1), c) : null
        }
        throw Error(k(156, b.tag));
    }

    function lj(a, b) {
        switch (a.tag) {
            case 1:
                return N(a.type) && (q(G), q(B)), b = a.effectTag, b & 4096 ?
                    (a.effectTag = b & -4097 | 64, a) : null;
            case 3:
                tb();
                q(G);
                q(B);
                b = a.effectTag;
                if (0 !== (b & 64)) throw Error(k(285));
                a.effectTag = b & -4097 | 64;
                return a;
            case 5:
                return te(a), null;
            case 13:
                return q(D), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
            case 19:
                return q(D), null;
            case 4:
                return tb(), null;
            case 10:
                return me(a), null;
            default:
                return null
        }
    }

    function Le(a, b) {
        return {
            value: a,
            source: b,
            stack: td(b)
        }
    }

    function Me(a, b) {
        var c = b.source,
            d = b.stack;
        null === d && null !== c && (d = td(c));
        null !== c && na(c.type);
        b = b.value;
        null !== a && 1 === a.tag &&
            na(a.type);
        try {
            console.error(b)
        } catch (e) {
            setTimeout(function () {
                throw e;
            })
        }
    }

    function mj(a, b) {
        try {
            b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount()
        } catch (c) {
            Za(a, c)
        }
    }

    function zh(a) {
        var b = a.ref;
        if (null !== b)
            if ("function" === typeof b) try {
                b(null)
            } catch (c) {
                Za(a, c)
            } else b.current = null
    }

    function nj(a, b) {
        switch (b.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (b.effectTag & 256 && null !== a) {
                    var c = a.memoizedProps,
                        d = a.memoizedState;
                    a = b.stateNode;
                    b = a.getSnapshotBeforeUpdate(b.elementType ===
                        b.type ? c : aa(b.type, c), d);
                    a.__reactInternalSnapshotBeforeUpdate = b
                }
                return;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return
        }
        throw Error(k(163));
    }

    function Ah(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
            var c = b = b.next;
            do {
                if ((c.tag & a) === a) {
                    var d = c.destroy;
                    c.destroy = void 0;
                    void 0 !== d && d()
                }
                c = c.next
            } while (c !== b)
        }
    }

    function Bh(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
            var c = b = b.next;
            do {
                if ((c.tag & a) === a) {
                    var d = c.create;
                    c.destroy = d()
                }
                c = c.next
            } while (c !== b)
        }
    }

    function oj(a, b, c, d) {
        switch (c.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                Bh(3,
                    c);
                return;
            case 1:
                a = c.stateNode;
                c.effectTag & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : aa(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
                b = c.updateQueue;
                null !== b && Wg(c, b, a);
                return;
            case 3:
                b = c.updateQueue;
                if (null !== b) {
                    a = null;
                    if (null !== c.child) switch (c.child.tag) {
                        case 5:
                            a = c.child.stateNode;
                            break;
                        case 1:
                            a = c.child.stateNode
                    }
                    Wg(c, b, a)
                }
                return;
            case 5:
                a = c.stateNode;
                null === b && c.effectTag & 4 && lg(c.type, c.memoizedProps) &&
                    a.focus();
                return;
            case 6:
                return;
            case 4:
                return;
            case 12:
                return;
            case 13:
                null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && bg(c))));
                return;
            case 19:
            case 17:
            case 20:
            case 21:
                return
        }
        throw Error(k(163));
    }

    function Ch(a, b, c) {
        "function" === typeof Ne && Ne(b);
        switch (b.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                a = b.updateQueue;
                if (null !== a && (a = a.lastEffect, null !== a)) {
                    var d = a.next;
                    Da(97 < c ? 97 : c, function () {
                        var a = d;
                        do {
                            var c = a.destroy;
                            if (void 0 !== c) {
                                var g = b;
                                try {
                                    c()
                                } catch (h) {
                                    Za(g,
                                        h)
                                }
                            }
                            a = a.next
                        } while (a !== d)
                    })
                }
                break;
            case 1:
                zh(b);
                c = b.stateNode;
                "function" === typeof c.componentWillUnmount && mj(b, c);
                break;
            case 5:
                zh(b);
                break;
            case 4:
                Dh(a, b, c)
        }
    }

    function Eh(a) {
        var b = a.alternate;
        a.return = null;
        a.child = null;
        a.memoizedState = null;
        a.updateQueue = null;
        a.dependencies = null;
        a.alternate = null;
        a.firstEffect = null;
        a.lastEffect = null;
        a.pendingProps = null;
        a.memoizedProps = null;
        a.stateNode = null;
        null !== b && Eh(b)
    }

    function Fh(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag
    }

    function Gh(a) {
        a: {
            for (var b = a.return; null !==
                b;) {
                if (Fh(b)) {
                    var c = b;
                    break a
                }
                b = b.return
            }
            throw Error(k(160));
        }
        b = c.stateNode;
        switch (c.tag) {
            case 5:
                var d = !1;
                break;
            case 3:
                b = b.containerInfo;
                d = !0;
                break;
            case 4:
                b = b.containerInfo;
                d = !0;
                break;
            default:
                throw Error(k(161));
        }
        c.effectTag & 16 && (Wb(b, ""), c.effectTag &= -17);a: b: for (c = a;;) {
            for (; null === c.sibling;) {
                if (null === c.return || Fh(c.return)) {
                    c = null;
                    break a
                }
                c = c.return
            }
            c.sibling.return = c.return;
            for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
                if (c.effectTag & 2) continue b;
                if (null === c.child || 4 === c.tag) continue b;
                else c.child.return = c, c = c.child
            }
            if (!(c.effectTag & 2)) {
                c = c.stateNode;
                break a
            }
        }
        d ? Oe(a, c, b) : Pe(a, c, b)
    }

    function Oe(a, b, c) {
        var d = a.tag,
            e = 5 === d || 6 === d;
        if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = uc));
        else if (4 !== d && (a = a.child, null !== a))
            for (Oe(a, b, c), a = a.sibling; null !== a;) Oe(a, b, c), a = a.sibling
    }

    function Pe(a, b, c) {
        var d = a.tag,
            e = 5 === d || 6 === d;
        if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a))
            for (Pe(a, b, c), a = a.sibling; null !== a;) Pe(a, b, c), a = a.sibling
    }

    function Dh(a, b, c) {
        for (var d = b, e = !1, f, g;;) {
            if (!e) {
                e = d.return;
                a: for (;;) {
                    if (null === e) throw Error(k(160));
                    f = e.stateNode;
                    switch (e.tag) {
                        case 5:
                            g = !1;
                            break a;
                        case 3:
                            f = f.containerInfo;
                            g = !0;
                            break a;
                        case 4:
                            f = f.containerInfo;
                            g = !0;
                            break a
                    }
                    e = e.return
                }
                e = !0
            }
            if (5 === d.tag || 6 === d.tag) {
                a: for (var h =
                        a, m = d, n = c, l = m;;)
                    if (Ch(h, l, n), null !== l.child && 4 !== l.tag) l.child.return = l, l = l.child;
                    else {
                        if (l === m) break a;
                        for (; null === l.sibling;) {
                            if (null === l.return || l.return === m) break a;
                            l = l.return
                        }
                        l.sibling.return = l.return;
                        l = l.sibling
                    }g ? (h = f, m = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(m) : h.removeChild(m)) : f.removeChild(d.stateNode)
            }
            else if (4 === d.tag) {
                if (null !== d.child) {
                    f = d.stateNode.containerInfo;
                    g = !0;
                    d.child.return = d;
                    d = d.child;
                    continue
                }
            } else if (Ch(a, d, c), null !== d.child) {
                d.child.return = d;
                d = d.child;
                continue
            }
            if (d ===
                b) break;
            for (; null === d.sibling;) {
                if (null === d.return || d.return === b) return;
                d = d.return;
                4 === d.tag && (e = !1)
            }
            d.sibling.return = d.return;
            d = d.sibling
        }
    }

    function Qe(a, b) {
        switch (b.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                Ah(3, b);
                return;
            case 1:
                return;
            case 5:
                var c = b.stateNode;
                if (null != c) {
                    var d = b.memoizedProps,
                        e = null !== a ? a.memoizedProps : d;
                    a = b.type;
                    var f = b.updateQueue;
                    b.updateQueue = null;
                    if (null !== f) {
                        c[vc] = d;
                        "input" === a && "radio" === d.type && null != d.name && If(c, d);
                        Vd(a, e);
                        b = Vd(a, d);
                        for (e = 0; e < f.length; e += 2) {
                            var g = f[e],
                                h = f[e + 1];
                            "style" === g ? gg(c, h) : "dangerouslySetInnerHTML" === g ? xh(c, h) : "children" === g ? Wb(c, h) : Bd(c, g, h, b)
                        }
                        switch (a) {
                            case "input":
                                Dd(c, d);
                                break;
                            case "textarea":
                                Lf(c, d);
                                break;
                            case "select":
                                b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? hb(c, !!d.multiple, d.defaultValue, !0) : hb(c, !!d.multiple, d.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === b.stateNode) throw Error(k(162));
                b.stateNode.nodeValue = b.memoizedProps;
                return;
            case 3:
                b = b.stateNode;
                b.hydrate && (b.hydrate = !1, bg(b.containerInfo));
                return;
            case 12:
                return;
            case 13:
                c = b;
                null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Re = Y());
                if (null !== c) a: for (a = c;;) {
                    if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = fg("display", e));
                    else if (6 === a.tag) a.stateNode.nodeValue = d ?
                        "" : a.memoizedProps;
                    else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
                        f = a.child.sibling;
                        f.return = a;
                        a = f;
                        continue
                    } else if (null !== a.child) {
                        a.child.return = a;
                        a = a.child;
                        continue
                    }
                    if (a === c) break;
                    for (; null === a.sibling;) {
                        if (null === a.return || a.return === c) break a;
                        a = a.return
                    }
                    a.sibling.return = a.return;
                    a = a.sibling
                }
                Hh(b);
                return;
            case 19:
                Hh(b);
                return;
            case 17:
                return
        }
        throw Error(k(163));
    }

    function Hh(a) {
        var b = a.updateQueue;
        if (null !== b) {
            a.updateQueue = null;
            var c = a.stateNode;
            null === c && (c = a.stateNode =
                new pj);
            b.forEach(function (b) {
                var d = qj.bind(null, a, b);
                c.has(b) || (c.add(b), b.then(d, d))
            })
        }
    }

    function Ih(a, b, c) {
        c = Ea(c, null);
        c.tag = 3;
        c.payload = {
            element: null
        };
        var d = b.value;
        c.callback = function () {
            cd || (cd = !0, Se = d);
            Me(a, b)
        };
        return c
    }

    function Jh(a, b, c) {
        c = Ea(c, null);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
            var e = b.value;
            c.payload = function () {
                Me(a, b);
                return d(e)
            }
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
            "function" !== typeof d &&
                (null === La ? La = new Set([this]) : La.add(this), Me(a, b));
            var c = b.stack;
            this.componentDidCatch(b.value, {
                componentStack: null !== c ? c : ""
            })
        });
        return c
    }

    function ka() {
        return (p & (ca | ma)) !== H ? 1073741821 - (Y() / 10 | 0) : 0 !== dd ? dd : dd = 1073741821 - (Y() / 10 | 0)
    }

    function Va(a, b, c) {
        b = b.mode;
        if (0 === (b & 2)) return 1073741823;
        var d = Cc();
        if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
        if ((p & ca) !== H) return P;
        if (null !== c) a = Fc(a, c.timeoutMs | 0 || 5E3, 250);
        else switch (d) {
            case 99:
                a = 1073741823;
                break;
            case 98:
                a = Fc(a, 150, 100);
                break;
            case 97:
            case 96:
                a =
                    Fc(a, 5E3, 250);
                break;
            case 95:
                a = 2;
                break;
            default:
                throw Error(k(326));
        }
        null !== U && a === P && --a;
        return a
    }

    function ed(a, b) {
        a.expirationTime < b && (a.expirationTime = b);
        var c = a.alternate;
        null !== c && c.expirationTime < b && (c.expirationTime = b);
        var d = a.return,
            e = null;
        if (null === d && 3 === a.tag) e = a.stateNode;
        else
            for (; null !== d;) {
                c = d.alternate;
                d.childExpirationTime < b && (d.childExpirationTime = b);
                null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
                if (null === d.return && 3 === d.tag) {
                    e = d.stateNode;
                    break
                }
                d = d.return
            }
        null !== e &&
            (U === e && (Kc(b), F === bd && Ya(e, P)), yh(e, b));
        return e
    }

    function fd(a) {
        var b = a.lastExpiredTime;
        if (0 !== b) return b;
        b = a.firstPendingTime;
        if (!Kh(a, b)) return b;
        var c = a.lastPingedTime;
        a = a.nextKnownPendingLevel;
        a = c > a ? c : a;
        return 2 >= a && b !== a ? 0 : a
    }

    function V(a) {
        if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = Og(Te.bind(null, a));
        else {
            var b = fd(a),
                c = a.callbackNode;
            if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
            else {
                var d = ka();
                1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
                if (null !== c) {
                    var e = a.callbackPriority;
                    if (a.callbackExpirationTime === b && e >= d) return;
                    c !== Qg && Rg(c)
                }
                a.callbackExpirationTime = b;
                a.callbackPriority = d;
                b = 1073741823 === b ? Og(Te.bind(null, a)) : Ng(d, Lh.bind(null, a), {
                    timeout: 10 * (1073741821 - b) - Y()
                });
                a.callbackNode = b
            }
        }
    }

    function Lh(a, b) {
        dd = 0;
        if (b) return b = ka(), Ue(a, b), V(a), null;
        var c = fd(a);
        if (0 !== c) {
            b = a.callbackNode;
            if ((p & (ca | ma)) !== H) throw Error(k(327));
            xb();
            a === U && c === P || $a(a, c);
            if (null !== t) {
                var d = p;
                p |= ca;
                var e = Mh();
                do try {
                    rj();
                    break
                } catch (h) {
                    Nh(a, h)
                }
                while (1);
                le();
                p = d;
                gd.current = e;
                if (F === hd) throw b = id, $a(a, c), Ya(a, c), V(a), b;
                if (null === t) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = F, U = null, d) {
                    case Xa:
                    case hd:
                        throw Error(k(345));
                    case Oh:
                        Ue(a, 2 < c ? 2 : c);
                        break;
                    case ad:
                        Ya(a, c);
                        d = a.lastSuspendedTime;
                        c === d && (a.nextKnownPendingLevel = Ve(e));
                        if (1073741823 === ta && (e = Re + Ph - Y(), 10 < e)) {
                            if (jd) {
                                var f = a.lastPingedTime;
                                if (0 === f || f >= c) {
                                    a.lastPingedTime =
                                        c;
                                    $a(a, c);
                                    break
                                }
                            }
                            f = fd(a);
                            if (0 !== f && f !== c) break;
                            if (0 !== d && d !== c) {
                                a.lastPingedTime = d;
                                break
                            }
                            a.timeoutHandle = We(ab.bind(null, a), e);
                            break
                        }
                        ab(a);
                        break;
                    case bd:
                        Ya(a, c);
                        d = a.lastSuspendedTime;
                        c === d && (a.nextKnownPendingLevel = Ve(e));
                        if (jd && (e = a.lastPingedTime, 0 === e || e >= c)) {
                            a.lastPingedTime = c;
                            $a(a, c);
                            break
                        }
                        e = fd(a);
                        if (0 !== e && e !== c) break;
                        if (0 !== d && d !== c) {
                            a.lastPingedTime = d;
                            break
                        }
                        1073741823 !== Yb ? d = 10 * (1073741821 - Yb) - Y() : 1073741823 === ta ? d = 0 : (d = 10 * (1073741821 - ta) - 5E3, e = Y(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d =
                            (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * sj(d / 1960)) - d, c < d && (d = c));
                        if (10 < d) {
                            a.timeoutHandle = We(ab.bind(null, a), d);
                            break
                        }
                        ab(a);
                        break;
                    case Xe:
                        if (1073741823 !== ta && null !== kd) {
                            f = ta;
                            var g = kd;
                            d = g.busyMinDurationMs | 0;
                            0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = Y() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);
                            if (10 < d) {
                                Ya(a, c);
                                a.timeoutHandle = We(ab.bind(null, a), d);
                                break
                            }
                        }
                        ab(a);
                        break;
                    default:
                        throw Error(k(329));
                }
                V(a);
                if (a.callbackNode === b) return Lh.bind(null, a)
            }
        }
        return null
    }

    function Te(a) {
        var b =
            a.lastExpiredTime;
        b = 0 !== b ? b : 1073741823;
        if ((p & (ca | ma)) !== H) throw Error(k(327));
        xb();
        a === U && b === P || $a(a, b);
        if (null !== t) {
            var c = p;
            p |= ca;
            var d = Mh();
            do try {
                tj();
                break
            } catch (e) {
                Nh(a, e)
            }
            while (1);
            le();
            p = c;
            gd.current = d;
            if (F === hd) throw c = id, $a(a, b), Ya(a, b), V(a), c;
            if (null !== t) throw Error(k(261));
            a.finishedWork = a.current.alternate;
            a.finishedExpirationTime = b;
            U = null;
            ab(a);
            V(a)
        }
        return null
    }

    function uj() {
        if (null !== bb) {
            var a = bb;
            bb = null;
            a.forEach(function (a, c) {
                Ue(c, a);
                V(c)
            });
            ha()
        }
    }

    function Qh(a, b) {
        var c = p;
        p |= 1;
        try {
            return a(b)
        } finally {
            p =
                c, p === H && ha()
        }
    }

    function Rh(a, b) {
        var c = p;
        p &= -2;
        p |= Ye;
        try {
            return a(b)
        } finally {
            p = c, p === H && ha()
        }
    }

    function $a(a, b) {
        a.finishedWork = null;
        a.finishedExpirationTime = 0;
        var c = a.timeoutHandle; - 1 !== c && (a.timeoutHandle = -1, vj(c));
        if (null !== t)
            for (c = t.return; null !== c;) {
                var d = c;
                switch (d.tag) {
                    case 1:
                        d = d.type.childContextTypes;
                        null !== d && void 0 !== d && (q(G), q(B));
                        break;
                    case 3:
                        tb();
                        q(G);
                        q(B);
                        break;
                    case 5:
                        te(d);
                        break;
                    case 4:
                        tb();
                        break;
                    case 13:
                        q(D);
                        break;
                    case 19:
                        q(D);
                        break;
                    case 10:
                        me(d)
                }
                c = c.return
            }
        U = a;
        t = Sa(a.current, null);
        P = b;
        F = Xa;
        id = null;
        Yb = ta = 1073741823;
        kd = null;
        Xb = 0;
        jd = !1
    }

    function Nh(a, b) {
        do {
            try {
                le();
                Sc.current = Tc;
                if (Uc)
                    for (var c = z.memoizedState; null !== c;) {
                        var d = c.queue;
                        null !== d && (d.pending = null);
                        c = c.next
                    }
                Ia = 0;
                J = K = z = null;
                Uc = !1;
                if (null === t || null === t.return) return F = hd, id = b, t = null;
                a: {
                    var e = a,
                        f = t.return,
                        g = t,
                        h = b;b = P;g.effectTag |= 2048;g.firstEffect = g.lastEffect = null;
                    if (null !== h && "object" === typeof h && "function" === typeof h.then) {
                        var m = h;
                        if (0 === (g.mode & 2)) {
                            var n = g.alternate;
                            n ? (g.memoizedState = n.memoizedState, g.expirationTime =
                                n.expirationTime) : g.memoizedState = null
                        }
                        var l = 0 !== (D.current & 1),
                            k = f;
                        do {
                            var p;
                            if (p = 13 === k.tag) {
                                var q = k.memoizedState;
                                if (null !== q) p = null !== q.dehydrated ? !0 : !1;
                                else {
                                    var w = k.memoizedProps;
                                    p = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : l ? !1 : !0
                                }
                            }
                            if (p) {
                                var y = k.updateQueue;
                                if (null === y) {
                                    var r = new Set;
                                    r.add(m);
                                    k.updateQueue = r
                                } else y.add(m);
                                if (0 === (k.mode & 2)) {
                                    k.effectTag |= 64;
                                    g.effectTag &= -2981;
                                    if (1 === g.tag)
                                        if (null === g.alternate) g.tag = 17;
                                        else {
                                            var O = Ea(1073741823, null);
                                            O.tag = Jc;
                                            Fa(g, O)
                                        } g.expirationTime =
                                        1073741823;
                                    break a
                                }
                                h = void 0;
                                g = b;
                                var v = e.pingCache;
                                null === v ? (v = e.pingCache = new wj, h = new Set, v.set(m, h)) : (h = v.get(m), void 0 === h && (h = new Set, v.set(m, h)));
                                if (!h.has(g)) {
                                    h.add(g);
                                    var x = xj.bind(null, e, m, g);
                                    m.then(x, x)
                                }
                                k.effectTag |= 4096;
                                k.expirationTime = b;
                                break a
                            }
                            k = k.return
                        } while (null !== k);
                        h = Error((na(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                            td(g))
                    }
                    F !== Xe && (F = Oh);h = Le(h, g);k = f;do {
                        switch (k.tag) {
                            case 3:
                                m = h;
                                k.effectTag |= 4096;
                                k.expirationTime = b;
                                var A = Ih(k, m, b);
                                Ug(k, A);
                                break a;
                            case 1:
                                m = h;
                                var u = k.type,
                                    B = k.stateNode;
                                if (0 === (k.effectTag & 64) && ("function" === typeof u.getDerivedStateFromError || null !== B && "function" === typeof B.componentDidCatch && (null === La || !La.has(B)))) {
                                    k.effectTag |= 4096;
                                    k.expirationTime = b;
                                    var H = Jh(k, m, b);
                                    Ug(k, H);
                                    break a
                                }
                        }
                        k = k.return
                    } while (null !== k)
                }
                t = Sh(t)
            } catch (cj) {
                b = cj;
                continue
            }
            break
        } while (1)
    }

    function Mh(a) {
        a = gd.current;
        gd.current =
            Tc;
        return null === a ? Tc : a
    }

    function Vg(a, b) {
        a < ta && 2 < a && (ta = a);
        null !== b && a < Yb && 2 < a && (Yb = a, kd = b)
    }

    function Kc(a) {
        a > Xb && (Xb = a)
    }

    function tj() {
        for (; null !== t;) t = Th(t)
    }

    function rj() {
        for (; null !== t && !yj();) t = Th(t)
    }

    function Th(a) {
        var b = zj(a.alternate, a, P);
        a.memoizedProps = a.pendingProps;
        null === b && (b = Sh(a));
        Uh.current = null;
        return b
    }

    function Sh(a) {
        t = a;
        do {
            var b = t.alternate;
            a = t.return;
            if (0 === (t.effectTag & 2048)) {
                b = hj(b, t, P);
                if (1 === P || 1 !== t.childExpirationTime) {
                    for (var c = 0, d = t.child; null !== d;) {
                        var e = d.expirationTime,
                            f = d.childExpirationTime;
                        e > c && (c = e);
                        f > c && (c = f);
                        d = d.sibling
                    }
                    t.childExpirationTime = c
                }
                if (null !== b) return b;
                null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = t.firstEffect), a.lastEffect = t.lastEffect), 1 < t.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = t : a.firstEffect = t, a.lastEffect = t))
            } else {
                b = lj(t);
                if (null !== b) return b.effectTag &= 2047, b;
                null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |=
                    2048)
            }
            b = t.sibling;
            if (null !== b) return b;
            t = a
        } while (null !== t);
        F === Xa && (F = Xe);
        return null
    }

    function Ve(a) {
        var b = a.expirationTime;
        a = a.childExpirationTime;
        return b > a ? b : a
    }

    function ab(a) {
        var b = Cc();
        Da(99, Aj.bind(null, a, b));
        return null
    }

    function Aj(a, b) {
        do xb(); while (null !== Zb);
        if ((p & (ca | ma)) !== H) throw Error(k(327));
        var c = a.finishedWork,
            d = a.finishedExpirationTime;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedExpirationTime = 0;
        if (c === a.current) throw Error(k(177));
        a.callbackNode = null;
        a.callbackExpirationTime =
            0;
        a.callbackPriority = 90;
        a.nextKnownPendingLevel = 0;
        var e = Ve(c);
        a.firstPendingTime = e;
        d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
        d <= a.lastPingedTime && (a.lastPingedTime = 0);
        d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
        a === U && (t = U = null, P = 0);
        1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
        if (null !== e) {
            var f = p;
            p |= ma;
            Uh.current = null;
            Ze = tc;
            var g = kg();
            if (Xd(g)) {
                if ("selectionStart" in
                    g) var h = {
                    start: g.selectionStart,
                    end: g.selectionEnd
                };
                else a: {
                    h = (h = g.ownerDocument) && h.defaultView || window;
                    var m = h.getSelection && h.getSelection();
                    if (m && 0 !== m.rangeCount) {
                        h = m.anchorNode;
                        var n = m.anchorOffset,
                            q = m.focusNode;
                        m = m.focusOffset;
                        try {
                            h.nodeType, q.nodeType
                        } catch (sb) {
                            h = null;
                            break a
                        }
                        var ba = 0,
                            w = -1,
                            y = -1,
                            B = 0,
                            D = 0,
                            r = g,
                            z = null;
                        b: for (;;) {
                            for (var v;;) {
                                r !== h || 0 !== n && 3 !== r.nodeType || (w = ba + n);
                                r !== q || 0 !== m && 3 !== r.nodeType || (y = ba + m);
                                3 === r.nodeType && (ba += r.nodeValue.length);
                                if (null === (v = r.firstChild)) break;
                                z = r;
                                r = v
                            }
                            for (;;) {
                                if (r === g) break b;
                                z === h && ++B === n && (w = ba);
                                z === q && ++D === m && (y = ba);
                                if (null !== (v = r.nextSibling)) break;
                                r = z;
                                z = r.parentNode
                            }
                            r = v
                        }
                        h = -1 === w || -1 === y ? null : {
                            start: w,
                            end: y
                        }
                    } else h = null
                }
                h = h || {
                    start: 0,
                    end: 0
                }
            } else h = null;
            $e = {
                activeElementDetached: null,
                focusedElem: g,
                selectionRange: h
            };
            tc = !1;
            l = e;
            do try {
                Bj()
            } catch (sb$28) {
                if (null === l) throw Error(k(330));
                Za(l, sb$28);
                l = l.nextEffect
            }
            while (null !== l);
            l = e;
            do try {
                for (g = a, h = b; null !== l;) {
                    var x = l.effectTag;
                    x & 16 && Wb(l.stateNode, "");
                    if (x & 128) {
                        var A = l.alternate;
                        if (null !==
                            A) {
                            var u = A.ref;
                            null !== u && ("function" === typeof u ? u(null) : u.current = null)
                        }
                    }
                    switch (x & 1038) {
                        case 2:
                            Gh(l);
                            l.effectTag &= -3;
                            break;
                        case 6:
                            Gh(l);
                            l.effectTag &= -3;
                            Qe(l.alternate, l);
                            break;
                        case 1024:
                            l.effectTag &= -1025;
                            break;
                        case 1028:
                            l.effectTag &= -1025;
                            Qe(l.alternate, l);
                            break;
                        case 4:
                            Qe(l.alternate, l);
                            break;
                        case 8:
                            n = l, Dh(g, n, h), Eh(n)
                    }
                    l = l.nextEffect
                }
            } catch (sb$29) {
                if (null === l) throw Error(k(330));
                Za(l, sb$29);
                l = l.nextEffect
            }
            while (null !== l);
            u = $e;
            A = kg();
            x = u.focusedElem;
            h = u.selectionRange;
            if (A !== x && x && x.ownerDocument &&
                jg(x.ownerDocument.documentElement, x)) {
                null !== h && Xd(x) && (A = h.start, u = h.end, void 0 === u && (u = A), "selectionStart" in x ? (x.selectionStart = A, x.selectionEnd = Math.min(u, x.value.length)) : (u = (A = x.ownerDocument || document) && A.defaultView || window, u.getSelection && (u = u.getSelection(), n = x.textContent.length, g = Math.min(h.start, n), h = void 0 === h.end ? g : Math.min(h.end, n), !u.extend && g > h && (n = h, h = g, g = n), n = ig(x, g), q = ig(x, h), n && q && (1 !== u.rangeCount || u.anchorNode !== n.node || u.anchorOffset !== n.offset || u.focusNode !== q.node || u.focusOffset !==
                    q.offset) && (A = A.createRange(), A.setStart(n.node, n.offset), u.removeAllRanges(), g > h ? (u.addRange(A), u.extend(q.node, q.offset)) : (A.setEnd(q.node, q.offset), u.addRange(A))))));
                A = [];
                for (u = x; u = u.parentNode;) 1 === u.nodeType && A.push({
                    element: u,
                    left: u.scrollLeft,
                    top: u.scrollTop
                });
                "function" === typeof x.focus && x.focus();
                for (x = 0; x < A.length; x++) u = A[x], u.element.scrollLeft = u.left, u.element.scrollTop = u.top
            }
            tc = !!Ze;
            $e = Ze = null;
            a.current = c;
            l = e;
            do try {
                for (x = a; null !== l;) {
                    var F = l.effectTag;
                    F & 36 && oj(x, l.alternate, l);
                    if (F &
                        128) {
                        A = void 0;
                        var E = l.ref;
                        if (null !== E) {
                            var G = l.stateNode;
                            switch (l.tag) {
                                case 5:
                                    A = G;
                                    break;
                                default:
                                    A = G
                            }
                            "function" === typeof E ? E(A) : E.current = A
                        }
                    }
                    l = l.nextEffect
                }
            } catch (sb$30) {
                if (null === l) throw Error(k(330));
                Za(l, sb$30);
                l = l.nextEffect
            }
            while (null !== l);
            l = null;
            Cj();
            p = f
        } else a.current = c;
        if (ld) ld = !1, Zb = a, $b = b;
        else
            for (l = e; null !== l;) b = l.nextEffect, l.nextEffect = null, l = b;
        b = a.firstPendingTime;
        0 === b && (La = null);
        1073741823 === b ? a === af ? ac++ : (ac = 0, af = a) : ac = 0;
        "function" === typeof bf && bf(c.stateNode, d);
        V(a);
        if (cd) throw cd = !1, a = Se, Se = null, a;
        if ((p & Ye) !== H) return null;
        ha();
        return null
    }

    function Bj() {
        for (; null !== l;) {
            var a = l.effectTag;
            0 !== (a & 256) && nj(l.alternate, l);
            0 === (a & 512) || ld || (ld = !0, Ng(97, function () {
                xb();
                return null
            }));
            l = l.nextEffect
        }
    }

    function xb() {
        if (90 !== $b) {
            var a = 97 < $b ? 97 : $b;
            $b = 90;
            return Da(a, Dj)
        }
    }

    function Dj() {
        if (null === Zb) return !1;
        var a = Zb;
        Zb = null;
        if ((p & (ca | ma)) !== H) throw Error(k(331));
        var b = p;
        p |= ma;
        for (a = a.current.firstEffect; null !== a;) {
            try {
                var c = a;
                if (0 !== (c.effectTag & 512)) switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        Ah(5,
                            c), Bh(5, c)
                }
            } catch (d) {
                if (null === a) throw Error(k(330));
                Za(a, d)
            }
            c = a.nextEffect;
            a.nextEffect = null;
            a = c
        }
        p = b;
        ha();
        return !0
    }

    function Vh(a, b, c) {
        b = Le(c, b);
        b = Ih(a, b, 1073741823);
        Fa(a, b);
        a = ed(a, 1073741823);
        null !== a && V(a)
    }

    function Za(a, b) {
        if (3 === a.tag) Vh(a, a, b);
        else
            for (var c = a.return; null !== c;) {
                if (3 === c.tag) {
                    Vh(c, a, b);
                    break
                } else if (1 === c.tag) {
                    var d = c.stateNode;
                    if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === La || !La.has(d))) {
                        a = Le(b, a);
                        a = Jh(c, a, 1073741823);
                        Fa(c, a);
                        c = ed(c, 1073741823);
                        null !== c && V(c);
                        break
                    }
                }
                c = c.return
            }
    }

    function xj(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        U === a && P === c ? F === bd || F === ad && 1073741823 === ta && Y() - Re < Ph ? $a(a, P) : jd = !0 : Kh(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, V(a)))
    }

    function qj(a, b) {
        var c = a.stateNode;
        null !== c && c.delete(b);
        b = 0;
        0 === b && (b = ka(), b = Va(b, a, null));
        a = ed(a, b);
        null !== a && V(a)
    }

    function Ej(a) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (b.isDisabled ||
            !b.supportsFiber) return !0;
        try {
            var c = b.inject(a);
            bf = function (a, e) {
                try {
                    b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64))
                } catch (f) {}
            };
            Ne = function (a) {
                try {
                    b.onCommitFiberUnmount(c, a)
                } catch (e) {}
            }
        } catch (d) {}
        return !0
    }

    function Fj(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.effectTag = 0;
        this.lastEffect = this.firstEffect = this.nextEffect = null;
        this.childExpirationTime = this.expirationTime = 0;
        this.alternate = null
    }

    function Ge(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent)
    }

    function Gj(a) {
        if ("function" === typeof a) return Ge(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
            a = a.$$typeof;
            if (a === rd) return 11;
            if (a === sd) return 14
        }
        return 2
    }

    function Sa(a, b) {
        var c = a.alternate;
        null === c ? (c = la(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps =
            b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
        c.childExpirationTime = a.childExpirationTime;
        c.expirationTime = a.expirationTime;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : {
            expirationTime: b.expirationTime,
            firstContext: b.firstContext,
            responders: b.responders
        };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c
    }

    function Oc(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) Ge(a) &&
            (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
            case Ma:
                return Ha(c.children, e, f, b);
            case Hj:
                g = 8;
                e |= 7;
                break;
            case of:
                g = 8;
                e |= 1;
                break;
            case ic:
                return a = la(12, c, b, e | 8), a.elementType = ic, a.type = ic, a.expirationTime = f, a;
            case jc:
                return a = la(13, c, b, e), a.type = jc, a.elementType = jc, a.expirationTime = f, a;
            case qd:
                return a = la(19, c, b, e), a.elementType = qd, a.expirationTime = f, a;
            default:
                if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                    case qf:
                        g = 10;
                        break a;
                    case pf:
                        g = 9;
                        break a;
                    case rd:
                        g = 11;
                        break a;
                    case sd:
                        g = 14;
                        break a;
                    case sf:
                        g = 16;
                        d = null;
                        break a;
                    case rf:
                        g = 22;
                        break a
                }
                throw Error(k(130, null == a ? a : typeof a, ""));
        }
        b = la(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.expirationTime = f;
        return b
    }

    function Ha(a, b, c, d) {
        a = la(7, a, d, b);
        a.expirationTime = c;
        return a
    }

    function qe(a, b, c) {
        a = la(6, a, null, b);
        a.expirationTime = c;
        return a
    }

    function re(a, b, c) {
        b = la(4, null !== a.children ? a.children : [], a.key, b);
        b.expirationTime = c;
        b.stateNode = {
            containerInfo: a.containerInfo,
            pendingChildren: null,
            implementation: a.implementation
        };
        return b
    }

    function Ij(a, b, c) {
        this.tag =
            b;
        this.current = null;
        this.containerInfo = a;
        this.pingCache = this.pendingChildren = null;
        this.finishedExpirationTime = 0;
        this.finishedWork = null;
        this.timeoutHandle = -1;
        this.pendingContext = this.context = null;
        this.hydrate = c;
        this.callbackNode = null;
        this.callbackPriority = 90;
        this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Kh(a, b) {
        var c = a.firstSuspendedTime;
        a = a.lastSuspendedTime;
        return 0 !== c && c >= b && a <= b
    }

    function Ya(a,
        b) {
        var c = a.firstSuspendedTime,
            d = a.lastSuspendedTime;
        c < b && (a.firstSuspendedTime = b);
        if (d > b || 0 === c) a.lastSuspendedTime = b;
        b <= a.lastPingedTime && (a.lastPingedTime = 0);
        b <= a.lastExpiredTime && (a.lastExpiredTime = 0)
    }

    function yh(a, b) {
        b > a.firstPendingTime && (a.firstPendingTime = b);
        var c = a.firstSuspendedTime;
        0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b))
    }

    function Ue(a, b) {
        var c =
            a.lastExpiredTime;
        if (0 === c || c > b) a.lastExpiredTime = b
    }

    function md(a, b, c, d) {
        var e = b.current,
            f = ka(),
            g = Vb.suspense;
        f = Va(f, e, g);
        a: if (c) {
            c = c._reactInternalFiber;
            b: {
                if (Na(c) !== c || 1 !== c.tag) throw Error(k(170));
                var h = c;do {
                    switch (h.tag) {
                        case 3:
                            h = h.stateNode.context;
                            break b;
                        case 1:
                            if (N(h.type)) {
                                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                                break b
                            }
                    }
                    h = h.return
                } while (null !== h);
                throw Error(k(171));
            }
            if (1 === c.tag) {
                var m = c.type;
                if (N(m)) {
                    c = Gg(c, m, h);
                    break a
                }
            }
            c = h
        } else c = Ca;
        null === b.context ? b.context = c : b.pendingContext =
            c;
        b = Ea(f, g);
        b.payload = {
            element: a
        };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        Fa(e, b);
        Ja(e, f);
        return f
    }

    function cf(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
            case 5:
                return a.child.stateNode;
            default:
                return a.child.stateNode
        }
    }

    function Wh(a, b) {
        a = a.memoizedState;
        null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b)
    }

    function df(a, b) {
        Wh(a, b);
        (a = a.alternate) && Wh(a, b)
    }

    function ef(a, b, c) {
        c = null != c && !0 === c.hydrate;
        var d = new Ij(a, b, c),
            e = la(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
        d.current = e;
        e.stateNode = d;
        ne(e);
        a[Lb] = d.current;
        c && 0 !== b && xi(a, 9 === a.nodeType ? a : a.ownerDocument);
        this._internalRoot = d
    }

    function bc(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue))
    }

    function Jj(a, b) {
        b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
        if (!b)
            for (var c; c = a.lastChild;) a.removeChild(c);
        return new ef(a, 0, b ? {
            hydrate: !0
        } : void 0)
    }

    function nd(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
            var g = f._internalRoot;
            if ("function" === typeof e) {
                var h = e;
                e = function () {
                    var a = cf(g);
                    h.call(a)
                }
            }
            md(b, g, a, e)
        } else {
            f = c._reactRootContainer = Jj(c, d);
            g = f._internalRoot;
            if ("function" === typeof e) {
                var m = e;
                e = function () {
                    var a = cf(g);
                    m.call(a)
                }
            }
            Rh(function () {
                md(b, g, a, e)
            })
        }
        return cf(g)
    }

    function Kj(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: cb,
            key: null == d ? null : "" + d,
            children: a,
            containerInfo: b,
            implementation: c
        }
    }

    function Xh(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ?
            arguments[2] : null;
        if (!bc(b)) throw Error(k(200));
        return Kj(a, b, null, c)
    }
    if (!ea) throw Error(k(227));
    var ki = function (a, b, c, d, e, f, g, h, m) {
            var n = Array.prototype.slice.call(arguments, 3);
            try {
                b.apply(c, n)
            } catch (C) {
                this.onError(C)
            }
        },
        yb = !1,
        gc = null,
        hc = !1,
        pd = null,
        li = {
            onError: function (a) {
                yb = !0;
                gc = a
            }
        },
        xd = null,
        xf = null,
        mf = null,
        da = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    da.hasOwnProperty("ReactCurrentDispatcher") || (da.ReactCurrentDispatcher = {
        current: null
    });
    da.hasOwnProperty("ReactCurrentBatchConfig") ||
        (da.ReactCurrentBatchConfig = {
            suspense: null
        });
    var oi = /^(.*)[\\\/]/,
        Q = "function" === typeof Symbol && Symbol.for,
        Pc = Q ? Symbol.for("react.element") : 60103,
        cb = Q ? Symbol.for("react.portal") : 60106,
        Ma = Q ? Symbol.for("react.fragment") : 60107,
        of = Q ? Symbol.for("react.strict_mode") : 60108,
        ic = Q ? Symbol.for("react.profiler") : 60114,
        qf = Q ? Symbol.for("react.provider") : 60109,
        pf = Q ? Symbol.for("react.context") : 60110,
        Hj = Q ? Symbol.for("react.concurrent_mode") : 60111,
        rd = Q ? Symbol.for("react.forward_ref") : 60112,
        jc = Q ? Symbol.for("react.suspense") :
        60113,
        qd = Q ? Symbol.for("react.suspense_list") : 60120,
        sd = Q ? Symbol.for("react.memo") : 60115,
        sf = Q ? Symbol.for("react.lazy") : 60116,
        rf = Q ? Symbol.for("react.block") : 60121,
        nf = "function" === typeof Symbol && Symbol.iterator,
        kc = null,
        db = {},
        lc = [],
        ud = {},
        eb = {},
        vd = {},
        wa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
        M = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,
        wd = null,
        fb = null,
        gb = null,
        ee = function (a, b) {
            return a(b)
        },
        eg = function (a, b,
            c, d, e) {
            return a(b, c, d, e)
        },
        zd = function () {},
        Bf = ee,
        Oa = !1,
        Ad = !1,
        Z = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,
        Lj = Z.unstable_cancelCallback,
        ff = Z.unstable_now,
        $f = Z.unstable_scheduleCallback,
        Mj = Z.unstable_shouldYield,
        Yh = Z.unstable_requestPaint,
        Pd = Z.unstable_runWithPriority,
        Nj = Z.unstable_getCurrentPriorityLevel,
        Oj = Z.unstable_ImmediatePriority,
        Zh = Z.unstable_UserBlockingPriority,
        ag = Z.unstable_NormalPriority,
        Pj = Z.unstable_LowPriority,
        Qj = Z.unstable_IdlePriority,
        qi = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Cf = Object.prototype.hasOwnProperty,
        Ef = {},
        Df = {},
        E = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
        E[a] = new L(a, 0, !1, a, null, !1)
    });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function (a) {
        var b = a[0];
        E[b] = new L(b, 1, !1, a[1], null, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
        E[a] = new L(a,
            2, !1, a.toLowerCase(), null, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
        E[a] = new L(a, 2, !1, a, null, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
        E[a] = new L(a, 3, !1, a.toLowerCase(), null, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function (a) {
        E[a] =
            new L(a, 3, !0, a, null, !1)
    });
    ["capture", "download"].forEach(function (a) {
        E[a] = new L(a, 4, !1, a, null, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function (a) {
        E[a] = new L(a, 6, !1, a, null, !1)
    });
    ["rowSpan", "start"].forEach(function (a) {
        E[a] = new L(a, 5, !1, a.toLowerCase(), null, !1)
    });
    var gf = /[\-:]([a-z])/g,
        hf = function (a) {
            return a[1].toUpperCase()
        };
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
        var b =
            a.replace(gf, hf);
        E[b] = new L(b, 1, !1, a, null, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
        var b = a.replace(gf, hf);
        E[b] = new L(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
        var b = a.replace(gf, hf);
        E[b] = new L(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function (a) {
        E[a] = new L(a, 1, !1, a.toLowerCase(), null, !1)
    });
    E.xlinkHref = new L("xlinkHref", 1,
        !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
    ["src", "href", "action", "formAction"].forEach(function (a) {
        E[a] = new L(a, 1, !1, a.toLowerCase(), null, !0)
    });
    var od, xh = function (a) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
                MSApp.execUnsafeLocalFunction(function () {
                    return a(b, c, d, e)
                })
            } : a
        }(function (a, b) {
            if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
            else {
                od = od || document.createElement("div");
                od.innerHTML = "<svg>" + b.valueOf().toString() +
                    "</svg>";
                for (b = od.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                for (; b.firstChild;) a.appendChild(b.firstChild)
            }
        }),
        Wb = function (a, b) {
            if (b) {
                var c = a.firstChild;
                if (c && c === a.lastChild && 3 === c.nodeType) {
                    c.nodeValue = b;
                    return
                }
            }
            a.textContent = b
        },
        ib = {
            animationend: nc("Animation", "AnimationEnd"),
            animationiteration: nc("Animation", "AnimationIteration"),
            animationstart: nc("Animation", "AnimationStart"),
            transitionend: nc("Transition", "TransitionEnd")
        },
        Id = {},
        Of = {};
    wa && (Of = document.createElement("div").style, "AnimationEvent" in
        window || (delete ib.animationend.animation, delete ib.animationiteration.animation, delete ib.animationstart.animation), "TransitionEvent" in window || delete ib.transitionend.transition);
    var $h = oc("animationend"),
        ai = oc("animationiteration"),
        bi = oc("animationstart"),
        ci = oc("transitionend"),
        Db = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Pf = new("function" === typeof WeakMap ? WeakMap : Map),
        Ab = null,
        wi = function (a) {
            if (a) {
                var b = a._dispatchListeners,
                    c = a._dispatchInstances;
                if (Array.isArray(b))
                    for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) lf(a, b[d], c[d]);
                else b && lf(a, b, c);
                a._dispatchListeners = null;
                a._dispatchInstances = null;
                a.isPersistent() || a.constructor.release(a)
            }
        },
        qc = [],
        Rd = !1,
        fa = [],
        xa = null,
        ya = null,
        za = null,
        Eb = new Map,
        Fb = new Map,
        Jb = [],
        Nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        yi = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" "),
        dg = {},
        cg = new Map,
        Td = new Map,
        Rj = ["abort", "abort", $h, "animationEnd", ai, "animationIteration", bi, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata",
            "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", ci, "transitionEnd", "waiting", "waiting"
        ];
    Sd("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
        0);
    Sd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    Sd(Rj, 2);
    (function (a, b) {
        for (var c = 0; c < a.length; c++) Td.set(a[c], b)
    })("change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), 0);
    var Hi = Zh,
        Gi = Pd,
        tc = !0,
        Kb = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Sj = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Kb).forEach(function (a) {
        Sj.forEach(function (b) {
            b = b + a.charAt(0).toUpperCase() + a.substring(1);
            Kb[b] = Kb[a]
        })
    });
    var Ii = M({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }),
        ng = "$",
        og = "/$",
        $d = "$?",
        Zd = "$!",
        Ze = null,
        $e = null,
        We = "function" === typeof setTimeout ? setTimeout : void 0,
        vj = "function" ===
        typeof clearTimeout ? clearTimeout : void 0,
        jf = Math.random().toString(36).slice(2),
        Aa = "__reactInternalInstance$" + jf,
        vc = "__reactEventHandlers$" + jf,
        Lb = "__reactContainere$" + jf,
        Ba = null,
        ce = null,
        wc = null;
    M(R.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = xc)
        },
        stopPropagation: function () {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !==
                typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = xc)
        },
        persist: function () {
            this.isPersistent = xc
        },
        isPersistent: yc,
        destructor: function () {
            var a = this.constructor.Interface,
                b;
            for (b in a) this[b] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null;
            this.isPropagationStopped = this.isDefaultPrevented = yc;
            this._dispatchInstances = this._dispatchListeners = null
        }
    });
    R.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (a) {
            return a.timeStamp ||
                Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    };
    R.extend = function (a) {
        function b() {
            return c.apply(this, arguments)
        }
        var c = this,
            d = function () {};
        d.prototype = c.prototype;
        d = new d;
        M(d, b.prototype);
        b.prototype = d;
        b.prototype.constructor = b;
        b.Interface = M({}, c.Interface, a);
        b.extend = c.extend;
        sg(b);
        return b
    };
    sg(R);
    var Tj = R.extend({
            data: null
        }),
        Uj = R.extend({
            data: null
        }),
        Ni = [9, 13, 27, 32],
        de = wa && "CompositionEvent" in window,
        cc = null;
    wa && "documentMode" in document && (cc = document.documentMode);
    var Vj = wa && "TextEvent" in window &&
        !cc,
        xg = wa && (!de || cc && 8 < cc && 11 >= cc),
        wg = String.fromCharCode(32),
        ua = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        vg = !1,
        mb = !1,
        Wj = {
            eventTypes: ua,
            extractEvents: function (a, b, c, d, e) {
                var f;
                if (de) b: {
                    switch (a) {
                        case "compositionstart":
                            var g = ua.compositionStart;
                            break b;
                        case "compositionend":
                            g = ua.compositionEnd;
                            break b;
                        case "compositionupdate":
                            g =
                                ua.compositionUpdate;
                            break b
                    }
                    g = void 0
                }
                else mb ? tg(a, c) && (g = ua.compositionEnd) : "keydown" === a && 229 === c.keyCode && (g = ua.compositionStart);
                g ? (xg && "ko" !== c.locale && (mb || g !== ua.compositionStart ? g === ua.compositionEnd && mb && (f = rg()) : (Ba = d, ce = "value" in Ba ? Ba.value : Ba.textContent, mb = !0)), e = Tj.getPooled(g, b, c, d), f ? e.data = f : (f = ug(c), null !== f && (e.data = f)), lb(e), f = e) : f = null;
                (a = Vj ? Oi(a, c) : Pi(a, c)) ? (b = Uj.getPooled(ua.beforeInput, b, c, d), b.data = a, lb(b)) : b = null;
                return null === f ? b : null === b ? f : [f, b]
            }
        },
        Qi = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        },
        Ag = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        },
        Mb = null,
        Nb = null,
        kf = !1;
    wa && (kf = Tf("input") && (!document.documentMode || 9 < document.documentMode));
    var Xj = {
            eventTypes: Ag,
            _isInputEventSupported: kf,
            extractEvents: function (a, b, c, d, e) {
                e = b ? Pa(b) : window;
                var f =
                    e.nodeName && e.nodeName.toLowerCase();
                if ("select" === f || "input" === f && "file" === e.type) var g = Si;
                else if (yg(e))
                    if (kf) g = Wi;
                    else {
                        g = Ui;
                        var h = Ti
                    }
                else(f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Vi);
                if (g && (g = g(a, b))) return zg(g, c, d);
                h && h(a, e, b);
                "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Ed(e, "number", e.value)
            }
        },
        dc = R.extend({
            view: null,
            detail: null
        }),
        Yi = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        },
        di = 0,
        ei = 0,
        fi = !1,
        gi = !1,
        ec = dc.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: fe,
            button: null,
            buttons: null,
            relatedTarget: function (a) {
                return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement)
            },
            movementX: function (a) {
                if ("movementX" in a) return a.movementX;
                var b = di;
                di = a.screenX;
                return fi ? "mousemove" === a.type ? a.screenX - b : 0 : (fi = !0, 0)
            },
            movementY: function (a) {
                if ("movementY" in a) return a.movementY;
                var b = ei;
                ei = a.screenY;
                return gi ? "mousemove" ===
                    a.type ? a.screenY - b : 0 : (gi = !0, 0)
            }
        }),
        hi = ec.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        fc = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout",
                    "pointerover"
                ]
            }
        },
        Yj = {
            eventTypes: fc,
            extractEvents: function (a, b, c, d, e) {
                var f = "mouseover" === a || "pointerover" === a,
                    g = "mouseout" === a || "pointerout" === a;
                if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
                f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
                if (g) {
                    if (g = b, b = (b = c.relatedTarget || c.toElement) ? Bb(b) : null, null !== b) {
                        var h = Na(b);
                        if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null
                    }
                } else g = null;
                if (g === b) return null;
                if ("mouseout" === a || "mouseover" === a) {
                    var m = ec;
                    var n = fc.mouseLeave;
                    var l = fc.mouseEnter;
                    var k = "mouse"
                } else if ("pointerout" === a || "pointerover" === a) m = hi, n = fc.pointerLeave, l = fc.pointerEnter, k = "pointer";
                a = null == g ? f : Pa(g);
                f = null == b ? f : Pa(b);
                n = m.getPooled(n, g, c, d);
                n.type = k + "leave";
                n.target = a;
                n.relatedTarget = f;
                c = m.getPooled(l, b, c, d);
                c.type = k + "enter";
                c.target = f;
                c.relatedTarget = a;
                d = g;
                k = b;
                if (d && k) a: {
                    m = d;l = k;g = 0;
                    for (a = m; a; a = pa(a)) g++;a = 0;
                    for (b = l; b; b = pa(b)) a++;
                    for (; 0 < g - a;) m = pa(m),
                    g--;
                    for (; 0 < a - g;) l = pa(l),
                    a--;
                    for (; g--;) {
                        if (m === l || m === l.alternate) break a;
                        m = pa(m);
                        l = pa(l)
                    }
                    m = null
                }
                else m =
                    null;
                l = m;
                for (m = []; d && d !== l;) {
                    g = d.alternate;
                    if (null !== g && g === l) break;
                    m.push(d);
                    d = pa(d)
                }
                for (d = []; k && k !== l;) {
                    g = k.alternate;
                    if (null !== g && g === l) break;
                    d.push(k);
                    k = pa(k)
                }
                for (k = 0; k < m.length; k++) be(m[k], "bubbled", n);
                for (k = d.length; 0 < k--;) be(d[k], "captured", c);
                return 0 === (e & 64) ? [n] : [n, c]
            }
        },
        Qa = "function" === typeof Object.is ? Object.is : Zi,
        $i = Object.prototype.hasOwnProperty,
        Zj = wa && "documentMode" in document && 11 >= document.documentMode,
        Eg = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        nb = null,
        he = null,
        Pb = null,
        ge = !1,
        ak = {
            eventTypes: Eg,
            extractEvents: function (a, b, c, d, e, f) {
                e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);
                if (!(f = !e)) {
                    a: {
                        e = Jd(e);f = vd.onSelect;
                        for (var g = 0; g < f.length; g++)
                            if (!e.has(f[g])) {
                                e = !1;
                                break a
                            } e = !0
                    }
                    f = !e
                }
                if (f) return null;
                e = b ? Pa(b) : window;
                switch (a) {
                    case "focus":
                        if (yg(e) || "true" === e.contentEditable) nb = e, he = b, Pb = null;
                        break;
                    case "blur":
                        Pb = he = nb = null;
                        break;
                    case "mousedown":
                        ge = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return ge = !1, Dg(c, d);
                    case "selectionchange":
                        if (Zj) break;
                    case "keydown":
                    case "keyup":
                        return Dg(c, d)
                }
                return null
            }
        },
        bk = R.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        ck = R.extend({
            clipboardData: function (a) {
                return "clipboardData" in a ? a.clipboardData : window.clipboardData
            }
        }),
        dk = dc.extend({
            relatedTarget: null
        }),
        ek = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        fk = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        gk = dc.extend({
            key: function (a) {
                if (a.key) {
                    var b = ek[a.key] || a.key;
                    if ("Unidentified" !== b) return b
                }
                return "keypress" === a.type ? (a = Ac(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? fk[a.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: fe,
            charCode: function (a) {
                return "keypress" === a.type ? Ac(a) : 0
            },
            keyCode: function (a) {
                return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
            },
            which: function (a) {
                return "keypress" ===
                    a.type ? Ac(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
            }
        }),
        hk = ec.extend({
            dataTransfer: null
        }),
        ik = dc.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: fe
        }),
        jk = R.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        kk = ec.extend({
            deltaX: function (a) {
                return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0
            },
            deltaY: function (a) {
                return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ?
                    -a.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        lk = {
            eventTypes: dg,
            extractEvents: function (a, b, c, d, e) {
                e = cg.get(a);
                if (!e) return null;
                switch (a) {
                    case "keypress":
                        if (0 === Ac(c)) return null;
                    case "keydown":
                    case "keyup":
                        a = gk;
                        break;
                    case "blur":
                    case "focus":
                        a = dk;
                        break;
                    case "click":
                        if (2 === c.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        a = ec;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        a =
                            hk;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        a = ik;
                        break;
                    case $h:
                    case ai:
                    case bi:
                        a = bk;
                        break;
                    case ci:
                        a = jk;
                        break;
                    case "scroll":
                        a = dc;
                        break;
                    case "wheel":
                        a = kk;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        a = ck;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        a = hi;
                        break;
                    default:
                        a = R
                }
                b = a.getPooled(e, b, c, d);
                lb(b);
                return b
            }
        };
    (function (a) {
        if (kc) throw Error(k(101));
        kc = Array.prototype.slice.call(a);
        tf()
    })("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
    (function (a, b, c) {
        xd = a;
        xf = b;
        mf = c
    })(ae, Hb, Pa);
    vf({
        SimpleEventPlugin: lk,
        EnterLeaveEventPlugin: Yj,
        ChangeEventPlugin: Xj,
        SelectEventPlugin: ak,
        BeforeInputEventPlugin: Wj
    });
    var ie = [],
        ob = -1,
        Ca = {},
        B = {
            current: Ca
        },
        G = {
            current: !1
        },
        Ra = Ca,
        bj = Pd,
        je = $f,
        Rg = Lj,
        aj = Nj,
        Dc = Oj,
        Ig = Zh,
        Jg = ag,
        Kg = Pj,
        Lg = Qj,
        Qg = {},
        yj = Mj,
        Cj = void 0 !== Yh ? Yh : function () {},
        qa = null,
        Ec = null,
        ke = !1,
        ii = ff(),
        Y = 1E4 > ii ? ff : function () {
            return ff() - ii
        },
        Ic = {
            current: null
        },
        Hc = null,
        qb = null,
        Gc = null,
        Tg = 0,
        Jc = 2,
        Ga = !1,
        Vb = da.ReactCurrentBatchConfig,
        $g = (new ea.Component).refs,
        Mc = {
            isMounted: function (a) {
                return (a = a._reactInternalFiber) ? Na(a) === a : !1
            },
            enqueueSetState: function (a, b, c) {
                a = a._reactInternalFiber;
                var d = ka(),
                    e = Vb.suspense;
                d = Va(d, a, e);
                e = Ea(d, e);
                e.payload = b;
                void 0 !== c && null !== c && (e.callback = c);
                Fa(a, e);
                Ja(a, d)
            },
            enqueueReplaceState: function (a, b, c) {
                a = a._reactInternalFiber;
                var d = ka(),
                    e = Vb.suspense;
                d = Va(d, a, e);
                e = Ea(d, e);
                e.tag = 1;
                e.payload = b;
                void 0 !== c && null !== c && (e.callback = c);
                Fa(a, e);
                Ja(a, d)
            },
            enqueueForceUpdate: function (a, b) {
                a = a._reactInternalFiber;
                var c = ka(),
                    d = Vb.suspense;
                c = Va(c, a, d);
                d = Ea(c, d);
                d.tag = Jc;
                void 0 !== b && null !== b && (d.callback = b);
                Fa(a, d);
                Ja(a, c)
            }
        },
        Qc = Array.isArray,
        wb = ah(!0),
        Fe = ah(!1),
        Sb = {},
        ja = {
            current: Sb
        },
        Ub = {
            current: Sb
        },
        Tb = {
            current: Sb
        },
        D = {
            current: 0
        },
        Sc = da.ReactCurrentDispatcher,
        X = da.ReactCurrentBatchConfig,
        Ia = 0,
        z = null,
        K = null,
        J = null,
        Uc = !1,
        Tc = {
            readContext: W,
            useCallback: S,
            useContext: S,
            useEffect: S,
            useImperativeHandle: S,
            useLayoutEffect: S,
            useMemo: S,
            useReducer: S,
            useRef: S,
            useState: S,
            useDebugValue: S,
            useResponder: S,
            useDeferredValue: S,
            useTransition: S
        },
        dj = {
            readContext: W,
            useCallback: ih,
            useContext: W,
            useEffect: eh,
            useImperativeHandle: function (a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([a]) : null;
                return ze(4, 2, gh.bind(null, b, a), c)
            },
            useLayoutEffect: function (a, b) {
                return ze(4, 2, a, b)
            },
            useMemo: function (a, b) {
                var c = ub();
                b = void 0 === b ? null : b;
                a = a();
                c.memoizedState = [a, b];
                return a
            },
            useReducer: function (a, b, c) {
                var d =
                    ub();
                b = void 0 !== c ? c(b) : b;
                d.memoizedState = d.baseState = b;
                a = d.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: a,
                    lastRenderedState: b
                };
                a = a.dispatch = ch.bind(null, z, a);
                return [d.memoizedState, a]
            },
            useRef: function (a) {
                var b = ub();
                a = {
                    current: a
                };
                return b.memoizedState = a
            },
            useState: xe,
            useDebugValue: Be,
            useResponder: ue,
            useDeferredValue: function (a, b) {
                var c = xe(a),
                    d = c[0],
                    e = c[1];
                eh(function () {
                    var c = X.suspense;
                    X.suspense = void 0 === b ? null : b;
                    try {
                        e(a)
                    } finally {
                        X.suspense = c
                    }
                }, [a, b]);
                return d
            },
            useTransition: function (a) {
                var b =
                    xe(!1),
                    c = b[0];
                b = b[1];
                return [ih(Ce.bind(null, b, a), [b, a]), c]
            }
        },
        ej = {
            readContext: W,
            useCallback: Yc,
            useContext: W,
            useEffect: Xc,
            useImperativeHandle: hh,
            useLayoutEffect: fh,
            useMemo: jh,
            useReducer: Vc,
            useRef: dh,
            useState: function (a) {
                return Vc(Ua)
            },
            useDebugValue: Be,
            useResponder: ue,
            useDeferredValue: function (a, b) {
                var c = Vc(Ua),
                    d = c[0],
                    e = c[1];
                Xc(function () {
                    var c = X.suspense;
                    X.suspense = void 0 === b ? null : b;
                    try {
                        e(a)
                    } finally {
                        X.suspense = c
                    }
                }, [a, b]);
                return d
            },
            useTransition: function (a) {
                var b = Vc(Ua),
                    c = b[0];
                b = b[1];
                return [Yc(Ce.bind(null,
                    b, a), [b, a]), c]
            }
        },
        fj = {
            readContext: W,
            useCallback: Yc,
            useContext: W,
            useEffect: Xc,
            useImperativeHandle: hh,
            useLayoutEffect: fh,
            useMemo: jh,
            useReducer: Wc,
            useRef: dh,
            useState: function (a) {
                return Wc(Ua)
            },
            useDebugValue: Be,
            useResponder: ue,
            useDeferredValue: function (a, b) {
                var c = Wc(Ua),
                    d = c[0],
                    e = c[1];
                Xc(function () {
                    var c = X.suspense;
                    X.suspense = void 0 === b ? null : b;
                    try {
                        e(a)
                    } finally {
                        X.suspense = c
                    }
                }, [a, b]);
                return d
            },
            useTransition: function (a) {
                var b = Wc(Ua),
                    c = b[0];
                b = b[1];
                return [Yc(Ce.bind(null, b, a), [b, a]), c]
            }
        },
        ra = null,
        Ka = null,
        Wa = !1,
        gj = da.ReactCurrentOwner,
        ia = !1,
        Je = {
            dehydrated: null,
            retryTime: 0
        };
    var jj = function (a, b, c, d) {
        for (c = b.child; null !== c;) {
            if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
            else if (4 !== c.tag && null !== c.child) {
                c.child.return = c;
                c = c.child;
                continue
            }
            if (c === b) break;
            for (; null === c.sibling;) {
                if (null === c.return || c.return === b) return;
                c = c.return
            }
            c.sibling.return = c.return;
            c = c.sibling
        }
    };
    var wh = function (a) {};
    var ij = function (a, b, c, d, e) {
        var f = a.memoizedProps;
        if (f !== d) {
            var g = b.stateNode;
            Ta(ja.current);
            a = null;
            switch (c) {
                case "input":
                    f =
                        Cd(g, f);
                    d = Cd(g, d);
                    a = [];
                    break;
                case "option":
                    f = Fd(g, f);
                    d = Fd(g, d);
                    a = [];
                    break;
                case "select":
                    f = M({}, f, {
                        value: void 0
                    });
                    d = M({}, d, {
                        value: void 0
                    });
                    a = [];
                    break;
                case "textarea":
                    f = Gd(g, f);
                    d = Gd(g, d);
                    a = [];
                    break;
                default:
                    "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = uc)
            }
            Ud(c, d);
            var h, m;
            c = null;
            for (h in f)
                if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h])
                    if ("style" === h)
                        for (m in g = f[h], g) g.hasOwnProperty(m) && (c || (c = {}), c[m] = "");
                    else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !==
                        h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (eb.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
            for (h in d) {
                var k = d[h];
                g = null != f ? f[h] : void 0;
                if (d.hasOwnProperty(h) && k !== g && (null != k || null != g))
                    if ("style" === h)
                        if (g) {
                            for (m in g) !g.hasOwnProperty(m) || k && k.hasOwnProperty(m) || (c || (c = {}), c[m] = "");
                            for (m in k) k.hasOwnProperty(m) && g[m] !== k[m] && (c || (c = {}), c[m] = k[m])
                        } else c || (a || (a = []), a.push(h, c)), c = k;
                else "dangerouslySetInnerHTML" === h ? (k = k ? k.__html : void 0, g = g ? g.__html : void 0, null != k && g !== k && (a = a || []).push(h, k)) : "children" === h ? g === k || "string" !== typeof k && "number" !== typeof k || (a = a || []).push(h, "" + k) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (eb.hasOwnProperty(h) ? (null != k && oa(e, h), a || g === k || (a = [])) : (a = a || []).push(h, k))
            }
            c && (a = a || []).push("style", c);
            e = a;
            if (b.updateQueue = e) b.effectTag |= 4
        }
    };
    var kj = function (a, b, c, d) {
        c !== d && (b.effectTag |= 4)
    };
    var pj = "function" === typeof WeakSet ? WeakSet : Set,
        wj = "function" === typeof WeakMap ? WeakMap : Map,
        sj = Math.ceil,
        gd = da.ReactCurrentDispatcher,
        Uh = da.ReactCurrentOwner,
        H = 0,
        Ye = 8,
        ca = 16,
        ma = 32,
        Xa = 0,
        hd = 1,
        Oh = 2,
        ad = 3,
        bd = 4,
        Xe = 5,
        p = H,
        U = null,
        t = null,
        P = 0,
        F = Xa,
        id = null,
        ta = 1073741823,
        Yb = 1073741823,
        kd = null,
        Xb = 0,
        jd = !1,
        Re = 0,
        Ph = 500,
        l = null,
        cd = !1,
        Se = null,
        La = null,
        ld = !1,
        Zb = null,
        $b = 90,
        bb = null,
        ac = 0,
        af = null,
        dd = 0,
        Ja = function (a, b) {
            if (50 < ac) throw ac = 0, af = null, Error(k(185));
            a = ed(a, b);
            if (null !== a) {
                var c = Cc();
                1073741823 === b ? (p & Ye) !== H && (p & (ca | ma)) === H ? Te(a) : (V(a), p === H && ha()) : V(a);
                (p & 4) === H || 98 !== c && 99 !== c || (null === bb ? bb = new Map([
                    [a, b]
                ]) : (c = bb.get(a), (void 0 === c || c > b) && bb.set(a,
                    b)))
            }
        };
    var zj = function (a, b, c) {
        var d = b.expirationTime;
        if (null !== a) {
            var e = b.pendingProps;
            if (a.memoizedProps !== e || G.current) ia = !0;
            else {
                if (d < c) {
                    ia = !1;
                    switch (b.tag) {
                        case 3:
                            sh(b);
                            Ee();
                            break;
                        case 5:
                            bh(b);
                            if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
                            break;
                        case 1:
                            N(b.type) && Bc(b);
                            break;
                        case 4:
                            se(b, b.stateNode.containerInfo);
                            break;
                        case 10:
                            d = b.memoizedProps.value;
                            e = b.type._context;
                            y(Ic, e._currentValue);
                            e._currentValue = d;
                            break;
                        case 13:
                            if (null !== b.memoizedState) {
                                d = b.child.childExpirationTime;
                                if (0 !== d && d >= c) return th(a, b, c);
                                y(D, D.current & 1);
                                b = sa(a, b, c);
                                return null !== b ? b.sibling : null
                            }
                            y(D, D.current & 1);
                            break;
                        case 19:
                            d = b.childExpirationTime >= c;
                            if (0 !== (a.effectTag & 64)) {
                                if (d) return vh(a, b, c);
                                b.effectTag |= 64
                            }
                            e = b.memoizedState;
                            null !== e && (e.rendering = null, e.tail = null);
                            y(D, D.current);
                            if (!d) return null
                    }
                    return sa(a, b, c)
                }
                ia = !1
            }
        } else ia = !1;
        b.expirationTime = 0;
        switch (b.tag) {
            case 2:
                d = b.type;
                null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
                a = b.pendingProps;
                e = pb(b, B.current);
                rb(b, c);
                e = we(null,
                    b, d, a, e, c);
                b.effectTag |= 1;
                if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
                    b.tag = 1;
                    b.memoizedState = null;
                    b.updateQueue = null;
                    if (N(d)) {
                        var f = !0;
                        Bc(b)
                    } else f = !1;
                    b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
                    ne(b);
                    var g = d.getDerivedStateFromProps;
                    "function" === typeof g && Lc(b, d, g, a);
                    e.updater = Mc;
                    b.stateNode = e;
                    e._reactInternalFiber = b;
                    pe(b, d, a, c);
                    b = Ie(null, b, d, !0, f, c)
                } else b.tag = 0, T(null, b, e, c), b = b.child;
                return b;
            case 16:
                a: {
                    e = b.elementType;null !== a && (a.alternate =
                        null, b.alternate = null, b.effectTag |= 2);a = b.pendingProps;ni(e);
                    if (1 !== e._status) throw e._result;e = e._result;b.type = e;f = b.tag = Gj(e);a = aa(e, a);
                    switch (f) {
                        case 0:
                            b = He(null, b, e, a, c);
                            break a;
                        case 1:
                            b = rh(null, b, e, a, c);
                            break a;
                        case 11:
                            b = nh(null, b, e, a, c);
                            break a;
                        case 14:
                            b = oh(null, b, e, aa(e.type, a), d, c);
                            break a
                    }
                    throw Error(k(306, e, ""));
                }
                return b;
            case 0:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : aa(d, e), He(a, b, d, e, c);
            case 1:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : aa(d, e), rh(a, b, d, e, c);
            case 3:
                sh(b);
                d = b.updateQueue;
                if (null === a || null === d) throw Error(k(282));
                d = b.pendingProps;
                e = b.memoizedState;
                e = null !== e ? e.element : null;
                oe(a, b);
                Qb(b, d, null, c);
                d = b.memoizedState.element;
                if (d === e) Ee(), b = sa(a, b, c);
                else {
                    if (e = b.stateNode.hydrate) Ka = kb(b.stateNode.containerInfo.firstChild), ra = b, e = Wa = !0;
                    if (e)
                        for (c = Fe(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
                    else T(a, b, d, c), Ee();
                    b = b.child
                }
                return b;
            case 5:
                return bh(b), null === a && De(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps :
                    null, g = e.children, Yd(d, e) ? g = null : null !== f && Yd(d, f) && (b.effectTag |= 16), qh(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (T(a, b, g, c), b = b.child), b;
            case 6:
                return null === a && De(b), null;
            case 13:
                return th(a, b, c);
            case 4:
                return se(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = wb(b, null, d, c) : T(a, b, d, c), b.child;
            case 11:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : aa(d, e), nh(a, b, d, e, c);
            case 7:
                return T(a, b, b.pendingProps, c), b.child;
            case 8:
                return T(a,
                    b, b.pendingProps.children, c), b.child;
            case 12:
                return T(a, b, b.pendingProps.children, c), b.child;
            case 10:
                a: {
                    d = b.type._context;e = b.pendingProps;g = b.memoizedProps;f = e.value;
                    var h = b.type._context;y(Ic, h._currentValue);h._currentValue = f;
                    if (null !== g)
                        if (h = g.value, f = Qa(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
                            if (g.children === e.children && !G.current) {
                                b = sa(a, b, c);
                                break a
                            }
                        } else
                            for (h = b.child, null !== h && (h.return = b); null !== h;) {
                                var m = h.dependencies;
                                if (null !==
                                    m) {
                                    g = h.child;
                                    for (var l = m.firstContext; null !== l;) {
                                        if (l.context === d && 0 !== (l.observedBits & f)) {
                                            1 === h.tag && (l = Ea(c, null), l.tag = Jc, Fa(h, l));
                                            h.expirationTime < c && (h.expirationTime = c);
                                            l = h.alternate;
                                            null !== l && l.expirationTime < c && (l.expirationTime = c);
                                            Sg(h.return, c);
                                            m.expirationTime < c && (m.expirationTime = c);
                                            break
                                        }
                                        l = l.next
                                    }
                                } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
                                if (null !== g) g.return = h;
                                else
                                    for (g = h; null !== g;) {
                                        if (g === b) {
                                            g = null;
                                            break
                                        }
                                        h = g.sibling;
                                        if (null !== h) {
                                            h.return = g.return;
                                            g = h;
                                            break
                                        }
                                        g = g.return
                                    }
                                h =
                                    g
                            }
                    T(a, b, e.children, c);b = b.child
                }
                return b;
            case 9:
                return e = b.type, f = b.pendingProps, d = f.children, rb(b, c), e = W(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, T(a, b, d, c), b.child;
            case 14:
                return e = b.type, f = aa(e, b.pendingProps), f = aa(e.type, f), oh(a, b, e, f, d, c);
            case 15:
                return ph(a, b, b.type, b.pendingProps, d, c);
            case 17:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : aa(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, N(d) ? (a = !0, Bc(b)) : a = !1, rb(b, c), Yg(b, d, e), pe(b, d, e, c), Ie(null,
                    b, d, !0, a, c);
            case 19:
                return vh(a, b, c)
        }
        throw Error(k(156, b.tag));
    };
    var bf = null,
        Ne = null,
        la = function (a, b, c, d) {
            return new Fj(a, b, c, d)
        };
    ef.prototype.render = function (a) {
        md(a, this._internalRoot, null, null)
    };
    ef.prototype.unmount = function () {
        var a = this._internalRoot,
            b = a.containerInfo;
        md(null, a, null, function () {
            b[Lb] = null
        })
    };
    var Di = function (a) {
        if (13 === a.tag) {
            var b = Fc(ka(), 150, 100);
            Ja(a, b);
            df(a, b)
        }
    };
    var Yf = function (a) {
        13 === a.tag && (Ja(a, 3), df(a, 3))
    };
    var Bi = function (a) {
        if (13 === a.tag) {
            var b = ka();
            b = Va(b, a, null);
            Ja(a,
                b);
            df(a, b)
        }
    };
    wd = function (a, b, c) {
        switch (b) {
            case "input":
                Dd(a, c);
                b = c.name;
                if ("radio" === c.type && null != b) {
                    for (c = a; c.parentNode;) c = c.parentNode;
                    c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                    for (b = 0; b < c.length; b++) {
                        var d = c[b];
                        if (d !== a && d.form === a.form) {
                            var e = ae(d);
                            if (!e) throw Error(k(90));
                            Gf(d);
                            Dd(d, e)
                        }
                    }
                }
                break;
            case "textarea":
                Lf(a, c);
                break;
            case "select":
                b = c.value, null != b && hb(a, !!c.multiple, b, !1)
        }
    };
    (function (a, b, c, d) {
        ee = a;
        eg = b;
        zd = c;
        Bf = d
    })(Qh, function (a, b, c, d, e) {
        var f = p;
        p |= 4;
        try {
            return Da(98, a.bind(null, b, c, d, e))
        } finally {
            p = f, p === H && ha()
        }
    }, function () {
        (p & (1 | ca | ma)) === H && (uj(), xb())
    }, function (a, b) {
        var c = p;
        p |= 2;
        try {
            return a(b)
        } finally {
            p = c, p === H && ha()
        }
    });
    var mk = {
        Events: [Hb, Pa, ae, vf, ud, lb, function (a) {
            Kd(a, Ki)
        }, yf, zf, sc, pc, xb, {
            current: !1
        }]
    };
    (function (a) {
        var b = a.findFiberByHostInstance;
        return Ej(M({}, a, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: da.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (a) {
                a = Sf(a);
                return null === a ? null : a.stateNode
            },
            findFiberByHostInstance: function (a) {
                return b ? b(a) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }))
    })({
        findFiberByHostInstance: Bb,
        bundleType: 0,
        version: "16.13.0",
        rendererPackageName: "react-dom"
    });
    I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mk;
    I.createPortal = Xh;
    I.findDOMNode = function (a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternalFiber;
        if (void 0 === b) {
            if ("function" ===
                typeof a.render) throw Error(k(188));
            throw Error(k(268, Object.keys(a)));
        }
        a = Sf(b);
        a = null === a ? null : a.stateNode;
        return a
    };
    I.flushSync = function (a, b) {
        if ((p & (ca | ma)) !== H) throw Error(k(187));
        var c = p;
        p |= 1;
        try {
            return Da(99, a.bind(null, b))
        } finally {
            p = c, ha()
        }
    };
    I.hydrate = function (a, b, c) {
        if (!bc(b)) throw Error(k(200));
        return nd(null, a, b, !0, c)
    };
    I.render = function (a, b, c) {
        if (!bc(b)) throw Error(k(200));
        return nd(null, a, b, !1, c)
    };
    I.unmountComponentAtNode = function (a) {
        if (!bc(a)) throw Error(k(40));
        return a._reactRootContainer ?
            (Rh(function () {
                nd(null, null, a, !1, function () {
                    a._reactRootContainer = null;
                    a[Lb] = null
                })
            }), !0) : !1
    };
    I.unstable_batchedUpdates = Qh;
    I.unstable_createPortal = function (a, b) {
        return Xh(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
    };
    I.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
        if (!bc(c)) throw Error(k(200));
        if (null == a || void 0 === a._reactInternalFiber) throw Error(k(38));
        return nd(a, b, c, !1, d)
    };
    I.version = "16.13.0"
});
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        e.exports = n(1)
    }, function (e, t, n) {
        function r(e) {
            var t = new s(e),
                n = i(s.prototype.request,
                    t);
            return o.extend(n, s.prototype, t), o.extend(n, t), n
        }
        var o = n(2),
            i = n(3),
            s = n(4),
            a = n(22),
            u = n(10),
            c = r(u);
        c.Axios = s, c.create = function (e) {
            return r(a(c.defaults, e))
        }, c.Cancel = n(23), c.CancelToken = n(24), c.isCancel = n(9), c.all = function (e) {
            return Promise.all(e)
        }, c.spread = n(25), e.exports = c, e.exports.default = c
    }, function (e, t, n) {
        function r(e) {
            return "[object Array]" === j.call(e)
        }

        function o(e) {
            return "undefined" == typeof e
        }

        function i(e) {
            return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
        }

        function s(e) {
            return "[object ArrayBuffer]" === j.call(e)
        }

        function a(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }

        function u(e) {
            var t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function c(e) {
            return "string" == typeof e
        }

        function f(e) {
            return "number" == typeof e
        }

        function p(e) {
            return null !== e && "object" == typeof e
        }

        function d(e) {
            return "[object Date]" === j.call(e)
        }

        function l(e) {
            return "[object File]" ===
                j.call(e)
        }

        function h(e) {
            return "[object Blob]" === j.call(e)
        }

        function m(e) {
            return "[object Function]" === j.call(e)
        }

        function y(e) {
            return p(e) && m(e.pipe)
        }

        function g(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function v(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function x() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function w(e, t) {
            if (null !== e && "undefined" != typeof e)
                if ("object" != typeof e && (e = [e]), r(e))
                    for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }

        function b() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : t[n] = e
            }
            for (var t = {}, n = 0, r = arguments.length; n < r; n++) w(arguments[n], e);
            return t
        }

        function E() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = E(t[n], e) : "object" == typeof e ? t[n] = E({},
                    e) : t[n] = e
            }
            for (var t = {}, n = 0, r = arguments.length; n < r; n++) w(arguments[n], e);
            return t
        }

        function S(e, t, n) {
            return w(t, function (t, r) {
                n && "function" == typeof t ? e[r] = C(t, n) : e[r] = t
            }), e
        }
        var C = n(3),
            j = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: s,
            isBuffer: i,
            isFormData: a,
            isArrayBufferView: u,
            isString: c,
            isNumber: f,
            isObject: p,
            isUndefined: o,
            isDate: d,
            isFile: l,
            isBlob: h,
            isFunction: m,
            isStream: y,
            isURLSearchParams: g,
            isStandardBrowserEnv: x,
            forEach: w,
            merge: b,
            deepMerge: E,
            extend: S,
            trim: v
        }
    }, function (e, t) {
        e.exports =
            function (e, t) {
                return function () {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
    }, function (e, t, n) {
        function r(e) {
            this.defaults = e, this.interceptors = {
                request: new s,
                response: new s
            }
        }
        var o = n(2),
            i = n(5),
            s = n(6),
            a = n(7),
            u = n(22);
        r.prototype.request = function (e) {
                "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = u(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [a, void 0],
                    n = Promise.resolve(e);
                for (this.interceptors.request.forEach(function (e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }), this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected)
                    }); t.length;) n = n.then(t.shift(), t.shift());
                return n
            }, r.prototype.getUri = function (e) {
                return e = u(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, o.forEach(["delete", "get", "head", "options"], function (e) {
                r.prototype[e] = function (t, n) {
                    return this.request(o.merge(n || {}, {
                        method: e,
                        url: t
                    }))
                }
            }),
            o.forEach(["post", "put", "patch"], function (e) {
                r.prototype[e] = function (t, n, r) {
                    return this.request(o.merge(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            }), e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var o = n(2);
        e.exports = function (e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (o.isURLSearchParams(t)) i = t.toString();
            else {
                var s = [];
                o.forEach(t, function (e,
                    t) {
                    null !== e && "undefined" != typeof e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function (e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e))
                    }))
                }), i = s.join("&")
            }
            if (i) {
                var a = e.indexOf("#");
                a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
            }
            return e
        }
    }, function (e, t, n) {
        function r() {
            this.handlers = []
        }
        var o = n(2);
        r.prototype.use = function (e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, r.prototype.eject = function (e) {
            this.handlers[e] &&
                (this.handlers[e] = null)
        }, r.prototype.forEach = function (e) {
            o.forEach(this.handlers, function (t) {
                null !== t && e(t)
            })
        }, e.exports = r
    }, function (e, t, n) {
        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        var o = n(2),
            i = n(8),
            s = n(9),
            a = n(10);
        e.exports = function (e) {
            r(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                delete e.headers[t]
            });
            var t = e.adapter || a.adapter;
            return t(e).then(function (t) {
                return r(e), t.data = i(t.data, t.headers, e.transformResponse), t
            }, function (t) {
                return s(t) || (r(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function (e, t, n) {
        var r = n(2);
        e.exports = function (e, t, n) {
            return r.forEach(n, function (n) {
                e = n(e, t)
            }), e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, n) {
        function r(e, t) {
            !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) &&
                (e["Content-Type"] = t)
        }

        function o() {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = n(12) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (e = n(12)), e
        }
        var i = n(2),
            s = n(11),
            a = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            u = {
                adapter: o(),
                transformRequest: [function (e, t) {
                    return s(t, "Accept"), s(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ?
                        (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function (e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e$31) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                }
            };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, i.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {}
        }), i.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = i.merge(a)
        }), e.exports = u
    }, function (e, t, n) {
        var r = n(2);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, function (e, t, n) {
        var r = n(2),
            o = n(13),
            i = n(5),
            s = n(16),
            a = n(19),
            u = n(20),
            c = n(14);
        e.exports = function (e) {
            return new Promise(function (t, f) {
                var p = e.data,
                    d = e.headers;
                r.isFormData(p) && delete d["Content-Type"];
                var l = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        m = e.auth.password ||
                        "";
                    d.Authorization = "Basic " + btoa(h + ":" + m)
                }
                var y = s(e.baseURL, e.url);
                if (l.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function () {
                        if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                            var n = "getAllResponseHeaders" in l ? a(l.getAllResponseHeaders()) : null,
                                r = e.responseType && "text" !== e.responseType ? l.response : l.responseText,
                                i = {
                                    data: r,
                                    status: l.status,
                                    statusText: l.statusText,
                                    headers: n,
                                    config: e,
                                    request: l
                                };
                            o(t, f,
                                i), l = null
                        }
                    }, l.onabort = function () {
                        l && (f(c("Request aborted", e, "ECONNABORTED", l)), l = null)
                    }, l.onerror = function () {
                        f(c("Network Error", e, null, l)), l = null
                    }, l.ontimeout = function () {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(c(t, e, "ECONNABORTED", l)), l = null
                    }, r.isStandardBrowserEnv()) {
                    var g = n(21),
                        v = (e.withCredentials || u(y)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                    v && (d[e.xsrfHeaderName] = v)
                }
                if ("setRequestHeader" in l && r.forEach(d, function (e, t) {
                        "undefined" ==
                        typeof p && "content-type" === t.toLowerCase() ? delete d[t] : l.setRequestHeader(t, e)
                    }), r.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), e.responseType) try {
                    l.responseType = e.responseType
                } catch (t$32) {
                    if ("json" !== e.responseType) throw t$32;
                }
                "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                    l &&
                        (l.abort(), f(e), l = null)
                }), void 0 === p && (p = null), l.send(p)
            })
        }
    }, function (e, t, n) {
        var r = n(14);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function (e, t, n) {
        var r = n(15);
        e.exports = function (e, t, n, o, i) {
            var s = new Error(e);
            return r(s, t, n, o, i)
        }
    }, function (e, t) {
        e.exports = function (e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function (e, t, n) {
        var r = n(17),
            o = n(18);
        e.exports = function (e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    }, function (e, t) {
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, n) {
        var r = n(2),
            o = ["age",
                "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"
            ];
        e.exports = function (e) {
            var t, n, i, s = {};
            return e ? (r.forEach(e.split("\n"), function (e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        "set-cookie" === t ? s[t] = (s[t] ? s[t] : []).concat([n]) : s[t] = s[t] ? s[t] + ", " + n : n
                    }
                }), s) :
                s
        }
    }, function (e, t, n) {
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            function e(e) {
                var t = e;
                return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                }
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");
            return t = e(window.location.href),
                function (n) {
                    var o = r.isString(n) ? e(n) : n;
                    return o.protocol === t.protocol && o.host === t.host
                }
        }() : function () {
            return function () {
                return !0
            }
        }()
    }, function (e, t, n) {
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            return {
                write: function (e, t, n, o, i, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + (new Date(n)).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), s === !0 && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function (e) {
                    this.write(e, "", Date.now() - 864E5)
                }
            }
        }() : function () {
            return {
                write: function () {},
                read: function () {
                    return null
                },
                remove: function () {}
            }
        }()
    }, function (e, t, n) {
        var r = n(2);
        e.exports = function (e, t) {
            t = t || {};
            var n = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials",
                    "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"
                ];
            r.forEach(o, function (e) {
                "undefined" != typeof t[e] && (n[e] = t[e])
            }), r.forEach(i, function (o) {
                r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : "undefined" != typeof t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : "undefined" != typeof e[o] && (n[o] = e[o])
            }), r.forEach(s, function (r) {
                "undefined" != typeof t[r] ? n[r] =
                    t[r] : "undefined" != typeof e[r] && (n[r] = e[r])
            });
            var a = o.concat(i).concat(s),
                u = Object.keys(t).filter(function (e) {
                    return a.indexOf(e) === -1
                });
            return r.forEach(u, function (r) {
                "undefined" != typeof t[r] ? n[r] = t[r] : "undefined" != typeof e[r] && (n[r] = e[r])
            }), n
        }
    }, function (e, t) {
        function n(e) {
            this.message = e
        }
        n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    }, function (e, t, n) {
        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e
            });
            var n = this;
            e(function (e) {
                n.reason || (n.reason = new o(e), t(n.reason))
            })
        }
        var o = n(23);
        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }, r.source = function () {
            var e, t = new r(function (t) {
                e = t
            });
            return {
                token: t,
                cancel: e
            }
        }, e.exports = r
    }, function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }])
});
/*
 Hammer.JS - v2.0.7 - 2016-04-22
 http://hammerjs.github.io/

 Copyright (c) 2016 Jorik Tangelder;
 Licensed under the MIT license */
! function (a, b, c, d) {
    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
            for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
        else
            for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function () {
            var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm,
                    "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
    }

    function j(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b,
                c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {
        return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
                return a[b] > c[b]
            }) :
            d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function v() {
        return ua++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new(b = c ? c : xa ?
            M : ya ? P : wa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & Ea && d - e === 0,
            g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = E(d);
        b.timeStamp =
            ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target),
            b.target = k
    }

    function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity,
            e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: pa(a.pointers[c].clientX),
            clientY: pa(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function E(a) {
        var b = a.length;
        if (1 === b) return {
            x: pa(a[0].clientX),
            y: pa(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        }
    }

    function F(a, b, c) {
        return {
            x: b /
                a || 0,
            y: c / a || 0
        }
    }

    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }

    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }

    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }

    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Xa, this.evWin =
            Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches),
            d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches),
            d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches),
            h = [],
            i = this.target;
        if (f = c.filter(function (a) {
                return o(a.target, i)
            }), b === Ea)
            for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
    }

    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this,
            b)) : a & (Ga | Ha) && T.call(this, b)
    }

    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches,
                e = function () {
                    var a = d.indexOf(c);
                    a > -1 && d.splice(a, 1)
                };
            setTimeout(e, cb)
        }
    }

    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d],
                f = Math.abs(b - e.x),
                g = Math.abs(c - e.y);
            if (db >= f && db >= g) return !0
        }
        return !1
    }

    function V(a, b) {
        this.manager = a, this.set(b)
    }

    function W(a) {
        if (p(a,
                jb)) return jb;
        var b = p(a, kb),
            c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }

    function X() {
        if (!fb) return !1;
        var b = {},
            c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }), b
    }

    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
    }

    function Z(a) {
        return a & sb ? "cancel" : a & qb ?
            "end" : a & pb ? "move" : a & ob ? "start" : ""
    }

    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }

    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ca() {
        aa.apply(this, arguments)
    }

    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ea() {
        aa.apply(this, arguments)
    }

    function fa() {
        aa.apply(this, arguments)
    }

    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
    }

    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }), b || (a.oldCssProps = {})
        }
    }

    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;
    la = "function" !=
        typeof Object.assign ? function (a) {
            if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var e = arguments[c];
                if (e !== d && null !== e)
                    for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
            }
            return b
        } : Object.assign;
    var sa = h(function (a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a
        }, "extend", "Use `assign`."),
        ta = h(function (a, b) {
            return sa(a, b, !0)
        }, "merge", "Use `assign`."),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = "ontouchstart" in a,
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && n(this.element,
                this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {
            mousedown: Ea,
            mousemove: Fa,
            mouseup: Ga
        },
        Ta = "mousedown",
        Ua = "mousemove mouseup";
    i(L, x, {
        handler: function (a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {
            pointerdown: Ea,
            pointermove: Fa,
            pointerup: Ga,
            pointercancel: Ha,
            pointerout: Ha
        },
        Wa = {
            2: za,
            3: Aa,
            4: Ba,
            5: Ca
        },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function (a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Va[d],
                f = Wa[a.pointerType] || a.pointerType,
                g = f == za,
                h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager,
                e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
        }
    });
    var Za = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function (a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        },
        bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function (a) {
            var b = ab[a.type],
                c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            })
        }
    });
    var cb = 2500,
        db = 25;
    i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == za,
                e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c);
                else if (e && U.call(this, c)) return;
                this.callback(a, b, c)
            }
        },
        destroy: function () {
            this.touch.destroy(),
                this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();
    V.prototype = {
        set: function (a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                    k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }),
                W(a.join(" "))
        },
        preventDefaults: function (a) {
            var b = a.srcEvent,
                c = a.offsetDirection;
            if (this.manager.session.prevented) return void b.preventDefault();
            var d = this.actions,
                e = p(d, jb) && !mb[jb],
                f = p(d, lb) && !mb[lb],
                g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length,
                    i = a.distance < 2,
                    j = a.deltaTime < 250;
                if (h && i && j) return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        },
        preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;
    Y.prototype = {
            defaults: {},
            set: function (a) {
                return la(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function (a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function (a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function (a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = _(a, this),
                    -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function (a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = _(a, this);
                var b = r(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function () {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function (a) {
                return !!this.simultaneous[a.id]
            },
            emit: function (a) {
                function b(b) {
                    c.manager.emit(b, a)
                }
                var c = this,
                    d = this.state;
                qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent),
                    d >= qb && b(c.options.event + Z(d))
            },
            tryEmit: function (a) {
                return this.canEmit() ? this.emit(a) : void(this.state = tb)
            },
            canEmit: function () {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (tb | nb))) return !1;
                    a++
                }
                return !0
            },
            recognize: function (a) {
                var b = la({}, a);
                return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
            },
            process: function (a) {},
            getTouchAction: function () {},
            reset: function () {}
        }, i(aa, Y, {
            defaults: {
                pointers: 1
            },
            attrTest: function (a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function (a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (ob | pb),
                    e = this.attrTest(a);
                return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
            }
        }), i(ba, aa, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Pa
            },
            getTouchAction: function () {
                var a = this.options.direction,
                    b = [];
                return a & Na && b.push(lb), a & Oa && b.push(kb), b
            },
            directionTest: function (a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function (a) {
                return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
            },
            emit: function (a) {
                this.pX = a.deltaX, this.pY = a.deltaY;
                var b = $(a.direction);
                b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this,
                    a)
            }
        }), i(ca, aa, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [jb]
            },
            attrTest: function (a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
            },
            emit: function (a) {
                if (1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    a.additionalEvent = this.options.event + b
                }
                this._super.emit.call(this, a)
            }
        }), i(da, Y, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function () {
                return [hb]
            },
            process: function (a) {
                var b = this.options,
                    c =
                    a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
                else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
                    this.state = rb, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & Ga) return rb;
                return tb
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function (a) {
                this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
            }
        }),
        i(ea, aa, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [jb]
            },
            attrTest: function (a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
            }
        }), i(fa, aa, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Na | Oa,
                pointers: 1
            },
            getTouchAction: function () {
                return ba.prototype.getTouchAction.call(this)
            },
            attrTest: function (a) {
                var b, c = this.options.direction;
                return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa &&
                    (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
            },
            emit: function (a) {
                var b = $(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
        }), i(ga, Y, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function () {
                return [ib]
            },
            process: function (a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != Ga) return this.failTimeout();
                    var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                        h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                        this.state =
                            rb, this.tryEmit()
                    }, b.interval, this), ob) : rb
                }
                return tb
            },
            failTimeout: function () {
                return this._timer = e(function () {
                    this.state = tb
                }, this.options.interval, this), tb
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function () {
                this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ha.VERSION = "2.0.7", ha.defaults = {
            domEvents: !1,
            touchAction: gb,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ea, {
                    enable: !1
                }],
                [ca, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [fa, {
                    direction: Na
                }],
                [ba, {
                        direction: Na
                    },
                    ["swipe"]
                ],
                [ga],
                [ga, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [da]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
    var ub = 1,
        vb = 2;
    ia.prototype = {
        set: function (a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function (a) {
            this.session.stopped = a ? vb : ub
        },
        recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
            }
        },
        get: function (a) {
            if (a instanceof Y) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function (a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a),
                a.manager = this, this.touchAction.update(), a
        },
        remove: function (a) {
            if (f(a, "remove", this)) return this;
            if (a = this.get(a)) {
                var b = this.recognizers,
                    c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        },
        on: function (a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            }
        },
        off: function (a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }), this
            }
        },
        emit: function (a, b) {
            this.options.domEvents && ka(a,
                b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function () {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha, "function" == typeof define && define.amd ?
        define(function () {
            return ha
        }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");