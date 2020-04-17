/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";
    var t = [],
        v = g.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        y = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        l = a.call(Object),
        b = {},
        x = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        w = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function C(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function T(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
        E = function(e, t) { return new E.fn.init(e, t) },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !x(e) && !w(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = E.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return E.each(this, e) },
        map: function(n) { return this.pushStack(E.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || x(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t) { C(e, { nonce: t && t.nonce }) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(d, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return y.apply([], a)
        },
        guid: 1,
        support: b
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, N = "sizzle" + 1 * new Date,
            m = n.document,
            A = 0,
            r = 0,
            d = ue(),
            b = ue(),
            k = ue(),
            S = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            L = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            O = t.push,
            P = t.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            $ = new RegExp(R + "+", "g"),
            F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(W),
            X = new RegExp("^" + B + "$"),
            Q = { ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), TAG: new RegExp("^(" + B + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { C() },
            ae = xe(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { O.apply(t = P.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) {
            O = {
                apply: t.length ? function(e, t) { q.apply(e, P.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== T && C(e), e = e || T, E)) {
                if (11 !== d && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === d) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n }
                if (p.qsa && !S[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === d && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = N), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + be(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try { return O.apply(n, f.querySelectorAll(c)), n } catch (e) { S(t, !0) } finally { s === N && e.removeAttribute("id") }
                }
            }
            return g(t.replace(F, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[N] = !0, e }

        function ce(e) { var t = T.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) x.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, C = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), m !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), p.getElementsByTagName = ce(function(e) { return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function(e) { return a.appendChild(e).id = N, !T.getElementsByName || !T.getElementsByName(N).length }), p.getById ? (x.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, x.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (x.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) { a.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + N + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || v.push(".#.+[+~]") }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === m && y(m, e) ? -1 : t === T || t.ownerDocument === m && y(m, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === T ? -1 : t === T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return de(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? de(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), T
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && C(e), p.matchesSelector && E && !S[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { S(t, !0) }
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) !== T && C(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = d[e + " "]; return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && d(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                    p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++p && a === e) { i[h] = [A, s, p]; break }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]), !1 === p)
                                    while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                        if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [A, p]), a === e)) break;
                                return (p -= v) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = H(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(F, "$1"));
                        return s[N] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !x.pseudos.empty(e) },
                    header: function(e) { return K.test(e.nodeName) },
                    input: function(e) { return G.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = x.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[e] = pe(e);
        for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);

        function me() {}

        function be(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function xe(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [A, d];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === A && r[1] === d) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Ce(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Te(p, h, g, v, y, e) {
            return v && !v[N] && (v = Te(v)), y && !y[N] && (y = Te(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : Ce(c, s, p, n, r),
                    d = g ? y || (e ? p : l || v) ? [] : t : f;
                if (g && g(f, d, n, r), v) { i = Ce(d, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || p) {
                        if (y) {
                            i = [], o = d.length;
                            while (o--)(a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        o = d.length;
                        while (o--)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) { return e === i }, a, !0), l = xe(function(e) { return -1 < H(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[N]) {
                        for (n = ++s; n < r; n++)
                            if (x.relative[e[n].type]) break;
                        return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(F, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = x.preFilter;
            while (a) { for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(F, " ") }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, b, r, i = [],
                o = [],
                a = k[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[N] ? i.push(a) : o.push(a);
                (a = k(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        p = e || b && x.find.TAG("*", i),
                        h = A += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t === T || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            a = 0, t || o.ownerDocument === T || (C(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || T, n)) { r.push(o); break }
                            i && (A = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = j.call(r));
                            f = Ce(f)
                        }
                        O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (A = h, w = d), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = Q.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], x.relative[s = a.type]) break; if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, p.sortStable = N.split("").sort(D).join("") === N, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(T.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), p.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(I, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(g);
    E.find = h, E.expr = h.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = h.uniqueSort, E.text = h.getText, E.isXMLDoc = h.isXML, E.contains = h.contains, E.escapeSelector = h.escape;
    var N = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        A = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = E.expr.match.needsContext;

    function S(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, n, r) { return x(n) ? E.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? E.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? E.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : E.filter(n, e, r) }
    E.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) { return 1 === e.nodeType })) }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(L(this, e || [], !1)) },
        not: function(e) { return this.pushStack(L(this, e || [], !0)) },
        is: function(e) { return !!L(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), D.test(r[1]) && E.isPlainObject(t))
                    for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, j = E(v);
    var O = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };

    function H(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), E.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return N(e, "parentNode") }, parentsUntil: function(e, t, n) { return N(e, "parentNode", n) }, next: function(e) { return H(e, "nextSibling") }, prev: function(e) { return H(e, "previousSibling") }, nextAll: function(e) { return N(e, "nextSibling") }, prevAll: function(e) { return N(e, "previousSibling") }, nextUntil: function(e, t, n) { return N(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return N(e, "previousSibling", n) }, siblings: function(e) { return A((e.parentNode || {}).firstChild, e) }, children: function(e) { return A(e.firstChild) }, contents: function(e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes)) } }, function(r, i) { E.fn[r] = function(e, t) { var n = E.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (P[r] || E.uniqueSort(n), O.test(r) && n.reverse()), this.pushStack(n) } });
    var I = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function B(e) { throw e }

    function M(e, t, n, r) { var i; try { e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(I) || [], function(e, t) { n[t] = !0 }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { E.each(e, function(e, t) { x(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return E.each(arguments, function(e, t) { var n; while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < E.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = x(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, B, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, B, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== B && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) { o[0][3].add(l(0, e, x(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, x(t) ? t : R)), o[2][3].add(l(0, e, x(n) ? n : B)) }).promise()
                    },
                    promise: function(e) { return null != e ? E.extend(e, a) : a }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || x(i[t] && i[t].then))) return o.then();
            while (t--) M(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) { g.console && g.console.warn && e && W.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, E.readyException = function(e) { g.setTimeout(function() { throw e }) };
    var $ = E.Deferred();

    function F() { v.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready() }
    E.fn.ready = function(e) { return $.then(e)["catch"](function(e) { E.readyException(e) }), this }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || $.resolveWith(v, [E])
        }
    }), E.ready.then = $.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? g.setTimeout(E.ready) : (v.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
    var z = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === T(n))
                for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, x(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(E(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(U, V) }
    var Q = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function Y() { this.expando = E.expando + Y.uid++ }
    Y.uid = 1, Y.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(I) || []).length; while (n--) delete r[t[n]] }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !E.isEmptyObject(t) }
    };
    var G = new Y,
        K = new Y,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({ hasData: function(e) { return K.hasData(e) || G.hasData(e) }, data: function(e, t, n) { return K.access(e, t, n) }, removeData: function(e, t) { K.remove(e, t) }, _data: function(e, t, n) { return G.access(e, t, n) }, _removeData: function(e, t) { G.remove(e, t) } }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), ee(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { K.set(this, n) }) : z(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = K.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() { K.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { K.remove(this, e) }) }
    }), E.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, E.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { E.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return G.get(e, n) || G.access(e, n, { empty: E.Callbacks("once memory").add(function() { G.remove(e, [t + "queue", n]) }) }) }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { E.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = G.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = v.documentElement,
        oe = function(e) { return E.contains(e.ownerDocument, e) },
        ae = { composed: !0 };
    ie.getRootNode && (oe = function(e) { return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument });
    var se = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display") },
        ue = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };
    var le = {};

    function ce(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = G.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = le[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), le[s] = u)))) : "none" !== n && (l[c] = "none", G.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    E.fn.extend({ show: function() { return ce(this, !0) }, hide: function() { return ce(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { se(this) ? E(this).show() : E(this).hide() }) } });
    var fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        he = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ge(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n }

    function ve(e, t) { for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval")) }
    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var ye, me, be = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        f.textContent = "", p = 0;
        while (o = d[p++])
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) pe.test(o.type || "") && n.push(o) }
        return f
    }
    ye = v.createDocumentFragment().appendChild(v.createElement("div")), (me = v.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ye.appendChild(me), b.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var we = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ee() { return !0 }

    function Ne() { return !1 }

    function Ae(e, t) { return e === function() { try { return v.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return E().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = E.guid++)), e.each(function() { E.event.add(this, t, i, r, n) })
    }

    function Se(e, i, o) {
        o ? (G.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = G.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), G.set(this, i, r), t = o(this, i), this[i](), r !== (n = G.get(this, i)) || t ? G.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (G.set(this, i, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, i) && E.event.add(e, i, Ee)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, d, p, h, g, v = G.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(ie, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(I) || [""]).length; while (l--) p = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && E.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = G.hasData(e) && G.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(I) || [""]).length;
                while (l--)
                    if (p = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
                        while (o--) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = E.event.fix(e),
                u = new Array(arguments.length),
                l = (G.get(this, "events") || {})[s.type] || [],
                c = E.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = E.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(E.Event.prototype, t, { enumerable: !0, configurable: !0, get: x(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[E.expando] ? e : new E.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return fe.test(t.type) && t.click && S(t, "input") && Se(t, "click", Ee), !1 }, trigger: function(e) { var t = this || e; return fe.test(t.type) && t.click && S(t, "input") && Se(t, "click"), !0 }, _default: function(e) { var t = e.target; return fe.test(t.type) && t.click && S(t, "input") && G.get(t, "click") || S(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, E.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, E.event.addProp), E.each({ focus: "focusin", blur: "focusout" }, function(e, t) { E.event.special[e] = { setup: function() { return Se(this, e, Ae), !1 }, trigger: function() { return Se(this, e), !0 }, delegateType: t } }), E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() { E.event.remove(this, e, n, t) }) } });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) { return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e }

    function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Ie(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e), a = G.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
            K.hasData(e) && (s = K.access(e), u = E.extend({}, s), K.set(t, u))
        }
    }

    function Re(n, r, i, o) {
        r = y.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = x(p);
        if (h || 1 < f && "string" == typeof p && !b.checkClone && je.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), Re(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ge(e, "script"), Pe)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, He), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !G.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : C(u.textContent.replace(qe, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) { for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && oe(r) && ve(ge(r, "script")), r.parentNode.removeChild(r)); return e }
    E.extend({
        htmlPrefilter: function(e) { return e.replace(De, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
                else Ie(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) { return Be(this, e, !0) },
        remove: function(e) { return Be(this, e) },
        text: function(e) { return z(this, function(e) { return void 0 === e ? E.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Re(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return E.clone(this, e, t) }) },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { E.fn[e] = function(e) { for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        We = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = g), t.getComputedStyle(e) },
        $e = new RegExp(re.join("|"), "i");

    function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = E.style(e, t)), !b.pixelBoxStyles() && Me.test(a) && $e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = g.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s = v.createElement("div"),
            u = v.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(b, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), i } }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        Ue = v.createElement("div").style,
        Ve = {};

    function Xe(e) {
        var t = E.cssProps[e] || Ve[e];
        return t || (e in Ue ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in Ue) return e
        }(e) || e)
    }
    var Qe, Ye, Ge = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ze = { letterSpacing: "0", fontWeight: "400" };

    function et(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function tt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + re[a] + "Width", !0, i))) : (u += E.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += E.css(e, "border" + re[a] + "Width", !0, i) : s += E.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function nt(e, t, n) {
        var r = We(e),
            i = (!b.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Fe(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!b.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    E.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ke.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() { return r.cur() } : function() { return E.css(e, t, "") },
                        u = s(),
                        l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && ne.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        u /= 2, l = l || c[3], c = +u || 1;
                        while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, E.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = X(t); return Ke.test(t) || (t = Xe(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, u, n) : ue(e, Je, function() { return nt(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = We(e),
                    o = !b.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? tt(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - tt(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), et(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = ze(b.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), E.each({ margin: "", padding: "", border: "Width" }, function(i, o) { E.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (E.cssHooks[i + o].set = et) }), E.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = We(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r); return o }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = g.setTimeout(e, r);
            t.stop = function() { g.clearTimeout(n) }
        })
    }, Qe = v.createElement("input"), Ye = v.createElement("select").appendChild(v.createElement("option")), Qe.type = "checkbox", b.checkOn = "" !== Qe.value, b.optSelected = Ye.selected, (Qe = v.createElement("input")).value = "t", Qe.type = "radio", b.radioValue = "t" === Qe.value;
    var rt, it = E.expr.attrHandle;
    E.fn.extend({ attr: function(e, t) { return z(this, E.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { E.removeAttr(this, e) }) } }), E.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? rt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!b.radioValue && "radio" === t && S(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(I);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), rt = { set: function(e, t, n) { return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n } }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = it[t] || E.find.attr;
        it[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = it[o], it[o] = r, r = null != a(e, t, n) ? o : null, it[o] = i), r }
    });
    var ot = /^(?:input|select|textarea|button)$/i,
        at = /^(?:a|area)$/i;

    function st(e) { return (e.match(I) || []).join(" ") }

    function ut(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function lt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || [] }
    E.fn.extend({ prop: function(e, t) { return z(this, E.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[E.propFix[e] || e] }) } }), E.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = E.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), b.optSelected || (E.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { E.propFix[this.toLowerCase()] = this }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (x(t)) return this.each(function(e) { E(this).addClass(t.call(this, e, ut(this))) });
            if ((e = lt(t)).length)
                while (n = this[u++])
                    if (i = ut(n), r = 1 === n.nodeType && " " + st(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = st(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (x(t)) return this.each(function(e) { E(this).removeClass(t.call(this, e, ut(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = lt(t)).length)
                while (n = this[u++])
                    if (i = ut(n), r = 1 === n.nodeType && " " + st(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = st(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) { E(this).toggleClass(i.call(this, e, ut(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = E(this), r = lt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = ut(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + st(ut(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ct = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = x(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) { return null == e ? "" : e + "" })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ct, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: { get: function(e) { var t = E.find.attr(e, "value"); return null != t ? t : st(E.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = E.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() { E.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t) } }, b.checkOn || (E.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), b.focusin = "onfocusin" in g;
    var ft = /^(?:focusinfocus|focusoutblur)$/,
        dt = function(e) { e.stopPropagation() };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = [n || v],
                p = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || v, 3 !== n.nodeType && 8 !== n.nodeType && !ft.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !w(n)) {
                    for (s = c.delegateType || p, ft.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || v) && d.push(a.defaultView || a.parentWindow || g)
                }
                i = 0;
                while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && Q(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Q(n) || u && x(n[p]) && !w(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, dt), n[p](), e.isPropagationStopped() && f.removeEventListener(p, dt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, { type: e, isSimulated: !0 });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({ trigger: function(e, t) { return this.each(function() { E.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return E.event.trigger(e, t, n, !0) } }), b.focusin || E.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { E.event.simulate(r, e.target, E.event.fix(e)) };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r);
                t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r) - 1;
                t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
            }
        }
    });
    var pt, ht = /\[\]$/,
        gt = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;

    function mt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) { r || ht.test(n) ? i(n, t) : mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== T(e)) i(n, e);
        else
            for (t in e) mt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = x(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) mt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({ serialize: function() { return E.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = E.prop(this, "elements"); return e ? E.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !E(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !fe.test(e)) }).map(function(e, t) { var n = E(this).val(); return null == n ? null : Array.isArray(n) ? E.map(n, function(e) { return { name: t.name, value: e.replace(gt, "\r\n") } }) : { name: t.name, value: n.replace(gt, "\r\n") } }).get() } }), E.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (x(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) { E(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = x(t); return this.each(function(e) { E(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { E(this).replaceWith(this.childNodes) }), this }
    }), E.expr.pseudos.hidden = function(e) { return !E.expr.pseudos.visible(e) }, E.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, b.createHTMLDocument = ((pt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === pt.childNodes.length), E.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes))); var r, i, o }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), x(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { E.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - E.css(r, "marginTop", !0), left: t.left - i.left - E.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === E.css(e, "position")) e = e.offsetParent; return e || ie }) }
    }), E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var r;
                if (w(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) { E.cssHooks[n] = ze(b.pixelPosition, function(e, t) { if (t) return t = Fe(e, n), Me.test(t) ? E(e).position()[n] + "px" : t }) }), E.each({ Height: "height", Width: "width" }, function(a, s) {
        E.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) { var r; return w(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { E.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), E.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), E.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), E.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || E.guid++, i }, E.holdReady = function(e) { e ? E.readyWait++ : E.ready(!0) }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = x, E.isWindow = w, E.camelCase = X, E.type = T, E.now = Date.now, E.isNumeric = function(e) { var t = E.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return E });
    var bt = g.jQuery,
        xt = g.$;
    return E.noConflict = function(e) { return g.$ === E && (g.$ = xt), e && g.jQuery === E && (g.jQuery = bt), E }, e || (g.jQuery = g.$ = E), E
});
/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery) }(this, function(e, p) { "use strict";

    function i(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

    function s(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }

    function t(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, i) } return n }

    function l(o) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(r), !0).forEach(function(e) { var t, n, i;
                t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = i }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(e) { Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e)) }) } return o }
    p = p && p.hasOwnProperty("default") ? p.default : p; var n = "transitionend";

    function o(e) { var t = this,
            n = !1; return p(this).one(m.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || m.triggerTransitionEnd(t) }, e), this } var m = { TRANSITION_END: "bsTransitionEnd", getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e }, getSelectorFromElement: function(e) { var t = e.getAttribute("data-target"); if (!t || "#" === t) { var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(t) ? t : null } catch (e) { return null } }, getTransitionDurationFromElement: function(e) { if (!e) return 0; var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                o = parseFloat(n); return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0 }, reflow: function(e) { return e.offsetHeight }, triggerTransitionEnd: function(e) { p(e).trigger(n) }, supportsTransitionEnd: function() { return Boolean(n) }, isElement: function(e) { return (e[0] || e).nodeType }, typeCheckConfig: function(e, t, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i],
                        r = t[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') }
            var a }, findShadowRoot: function(e) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null; var t = e.getRootNode(); return t instanceof ShadowRoot ? t : null }, jQueryDetection: function() { if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = p.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") } };
    m.jQueryDetection(), p.fn.emulateTransitionEnd = o, p.event.special[m.TRANSITION_END] = { bindType: n, delegateType: n, handle: function(e) { if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }; var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = p.fn[r],
        u = { CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api" },
        f = "alert",
        d = "fade",
        g = "show",
        _ = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.close = function(e) { var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t) }, e.dispose = function() { p.removeData(this._element, a), this._element = null }, e._getRootElement = function(e) { var t = m.getSelectorFromElement(e),
                    n = !1; return t && (n = document.querySelector(t)), n = n || p(e).closest("." + f)[0] }, e._triggerCloseEvent = function(e) { var t = p.Event(u.CLOSE); return p(e).trigger(t), t }, e._removeElement = function(t) { var n = this; if (p(t).removeClass(g), p(t).hasClass(d)) { var e = m.getTransitionDurationFromElement(t);
                    p(t).one(m.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(e) } else this._destroyElement(t) }, e._destroyElement = function(e) { p(e).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) { return this.each(function() { var e = p(this),
                        t = e.data(a);
                    t || (t = new i(this), e.data(a, t)), "close" === n && t[n](this) }) }, i._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), i }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), p.fn[r] = _._jQueryInterface, p.fn[r].Constructor = _, p.fn[r].noConflict = function() { return p.fn[r] = h, _._jQueryInterface }; var v = "button",
        y = "bs.button",
        E = "." + y,
        b = ".data-api",
        w = p.fn[v],
        T = "active",
        C = "btn",
        S = "focus",
        D = '[data-toggle^="button"]',
        I = '[data-toggle="buttons"]',
        A = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        N = 'input:not([type="hidden"])',
        k = ".active",
        L = ".btn",
        P = { CLICK_DATA_API: "click" + E + b, FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b, LOAD_DATA_API: "load" + E + b },
        x = function() {
            function n(e) { this._element = e } var e = n.prototype; return e.toggle = function() { var e = !0,
                    t = !0,
                    n = p(this._element).closest(I)[0]; if (n) { var i = this._element.querySelector(N); if (i) { if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(T)) e = !1;
                            else { var o = n.querySelector(k);
                                o && p(o).removeClass(T) }
                        else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(T) && (e = !1) : e = !1;
                        e && (i.checked = !this._element.classList.contains(T), p(i).trigger("change")), i.focus(), t = !1 } }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && p(this._element).toggleClass(T)) }, e.dispose = function() { p.removeData(this._element, y), this._element = null }, n._jQueryInterface = function(t) { return this.each(function() { var e = p(this).data(y);
                    e || (e = new n(this), p(this).data(y, e)), "toggle" === t && e[t]() }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), n }();
    p(document).on(P.CLICK_DATA_API, D, function(e) { var t = e.target; if (p(t).hasClass(C) || (t = p(t).closest(L)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else { var n = t.querySelector(N); if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void e.preventDefault();
            x._jQueryInterface.call(p(t), "toggle") } }).on(P.FOCUS_BLUR_DATA_API, D, function(e) { var t = p(e.target).closest(L)[0];
        p(t).toggleClass(S, /^focus(in)?$/.test(e.type)) }), p(window).on(P.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll(O)), t = 0, n = e.length; t < n; t++) { var i = e[t],
                o = i.querySelector(N);
            o.checked || o.hasAttribute("checked") ? i.classList.add(T) : i.classList.remove(T) } for (var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length; r < s; r++) { var a = e[r]; "true" === a.getAttribute("aria-pressed") ? a.classList.add(T) : a.classList.remove(T) } }), p.fn[v] = x._jQueryInterface, p.fn[v].Constructor = x, p.fn[v].noConflict = function() { return p.fn[v] = w, x._jQueryInterface }; var j = "carousel",
        H = "bs.carousel",
        R = "." + H,
        F = ".data-api",
        M = p.fn[j],
        W = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        B = "next",
        q = "prev",
        K = "left",
        Q = "right",
        V = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHSTART: "touchstart" + R, TOUCHMOVE: "touchmove" + R, TOUCHEND: "touchend" + R, POINTERDOWN: "pointerdown" + R, POINTERUP: "pointerup" + R, DRAG_START: "dragstart" + R, LOAD_DATA_API: "load" + R + F, CLICK_DATA_API: "click" + R + F },
        Y = "carousel",
        z = "active",
        X = "slide",
        G = "carousel-item-right",
        $ = "carousel-item-left",
        J = "carousel-item-next",
        Z = "carousel-item-prev",
        ee = "pointer-event",
        te = ".active",
        ne = ".active.carousel-item",
        ie = ".carousel-item",
        oe = ".carousel-item img",
        re = ".carousel-item-next, .carousel-item-prev",
        se = ".carousel-indicators",
        ae = "[data-slide], [data-slide-to]",
        le = '[data-ride="carousel"]',
        ce = { TOUCH: "touch", PEN: "pen" },
        he = function() {
            function r(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(se), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var e = r.prototype; return e.next = function() { this._isSliding || this._slide(B) }, e.nextWhenVisible = function() {!document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide(q) }, e.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(re) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) { var t = this;
                this._activeElement = this._element.querySelector(ne); var n = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p(this._element).one(V.SLID, function() { return t.to(e) });
                    else { if (n === e) return this.pause(), void this.cycle(); var i = n < e ? B : q;
                        this._slide(i, this._items[e]) } }, e.dispose = function() { p(this._element).off(R), p.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(e) { return e = l({}, W, {}, e), m.typeCheckConfig(j, e, U), e }, e._handleSwipe = function() { var e = Math.abs(this.touchDeltaX); if (!(e <= 40)) { var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next() } }, e._addEventListeners = function() { var t = this;
                this._config.keyboard && p(this._element).on(V.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function(e) { return t.pause(e) }).on(V.MOUSELEAVE, function(e) { return t.cycle(e) }), this._config.touch && this._addTouchEventListeners() }, e._addTouchEventListeners = function() { var t = this; if (this._touchSupported) { var n = function(e) { t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                        i = function(e) { t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, 500 + t._config.interval)) };
                    p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function(e) { return e.preventDefault() }), this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function(e) { return n(e) }), p(this._element).on(V.POINTERUP, function(e) { return i(e) }), this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function(e) { return n(e) }), p(this._element).on(V.TOUCHMOVE, function(e) { return function(e) { e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX }(e) }), p(this._element).on(V.TOUCHEND, function(e) { return i(e) })) } }, e._keydown = function(e) { if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev(); break;
                    case 39:
                        e.preventDefault(), this.next() } }, e._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e) }, e._getItemByDirection = function(e, t) { var n = e === B,
                    i = e === q,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return t; var s = (o + (e === q ? -1 : 1)) % this._items.length; return -1 == s ? this._items[this._items.length - 1] : this._items[s] }, e._triggerSlideEvent = function(e, t) { var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(ne)),
                    o = p.Event(V.SLIDE, { relatedTarget: e, direction: t, from: i, to: n }); return p(this._element).trigger(o), o }, e._setActiveIndicatorElement = function(e) { if (this._indicatorsElement) { var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
                    p(t).removeClass(z); var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p(n).addClass(z) } }, e._slide = function(e, t) { var n, i, o, r = this,
                    s = this._element.querySelector(ne),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval); if (o = e === B ? (n = $, i = J, K) : (n = G, i = Z, Q), l && p(l).hasClass(z)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = p.Event(V.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (p(this._element).hasClass(X)) { p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval; var d = m.getTransitionDurationFromElement(s);
                        p(s).one(m.TRANSITION_END, function() { p(l).removeClass(n + " " + i).addClass(z), p(s).removeClass(z + " " + i + " " + n), r._isSliding = !1, setTimeout(function() { return p(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else p(s).removeClass(z), p(l).addClass(z), this._isSliding = !1, p(this._element).trigger(u);
                    h && this.cycle() } }, r._jQueryInterface = function(i) { return this.each(function() { var e = p(this).data(H),
                        t = l({}, W, {}, p(this).data()); "object" == typeof i && (t = l({}, t, {}, i)); var n = "string" == typeof i ? i : t.slide; if (e || (e = new r(this, t), p(this).data(H, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } else t.interval && t.ride && (e.pause(), e.cycle()) }) }, r._dataApiClickHandler = function(e) { var t = m.getSelectorFromElement(this); if (t) { var n = p(t)[0]; if (n && p(n).hasClass(Y)) { var i = l({}, p(n).data(), {}, p(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(H).to(o), e.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return W } }]), r }();
    p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler), p(window).on(V.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) { var i = p(e[t]);
            he._jQueryInterface.call(i, i.data()) } }), p.fn[j] = he._jQueryInterface, p.fn[j].Constructor = he, p.fn[j].noConflict = function() { return p.fn[j] = M, he._jQueryInterface }; var ue = "collapse",
        fe = "bs.collapse",
        de = "." + fe,
        pe = p.fn[ue],
        me = { toggle: !0, parent: "" },
        ge = { toggle: "boolean", parent: "(string|element)" },
        _e = { SHOW: "show" + de, SHOWN: "shown" + de, HIDE: "hide" + de, HIDDEN: "hidden" + de, CLICK_DATA_API: "click" + de + ".data-api" },
        ve = "show",
        ye = "collapse",
        Ee = "collapsing",
        be = "collapsed",
        we = "width",
        Te = "height",
        Ce = ".show, .collapsing",
        Se = '[data-toggle="collapse"]',
        De = function() {
            function a(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, o = n.length; i < o; i++) { var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) { return e === t });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var e = a.prototype; return e.toggle = function() { p(this._element).hasClass(ve) ? this.hide() : this.show() }, e.show = function() { var e, t, n = this; if (!this._isTransitioning && !p(this._element).hasClass(ve) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e) { return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ye) })).length && (e = null), !(e && (t = p(e).not(this._selector).data(fe)) && t._isTransitioning))) { var i = p.Event(_e.SHOW); if (p(this._element).trigger(i), !i.isDefaultPrevented()) { e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(fe, null)); var o = this._getDimension();
                        p(this._element).removeClass(ye).addClass(Ee), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { p(n._element).removeClass(Ee).addClass(ye).addClass(ve), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(_e.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, e.hide = function() { var e = this; if (!this._isTransitioning && p(this._element).hasClass(ve)) { var t = p.Event(_e.HIDE); if (p(this._element).trigger(t), !t.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(Ee).removeClass(ye).removeClass(ve); var i = this._triggerArray.length; if (0 < i)
                            for (var o = 0; o < i; o++) { var r = this._triggerArray[o],
                                    s = m.getSelectorFromElement(r); if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(ve) || p(r).addClass(be).attr("aria-expanded", !1) }
                        this.setTransitioning(!0);
                        this._element.style[n] = ""; var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { e.setTransitioning(!1), p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN) }).emulateTransitionEnd(a) } } }, e.setTransitioning = function(e) { this._isTransitioning = e }, e.dispose = function() { p.removeData(this._element, fe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(e) { return (e = l({}, me, {}, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(ue, e, ge), e }, e._getDimension = function() { return p(this._element).hasClass(we) ? we : Te }, e._getParent = function() { var e, n = this;
                m.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t)); return p(i).each(function(e, t) { n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]) }), e }, e._addAriaAndCollapsedClass = function(e, t) { var n = p(e).hasClass(ve);
                t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function(e) { var t = m.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, a._jQueryInterface = function(i) { return this.each(function() { var e = p(this),
                        t = e.data(fe),
                        n = l({}, me, {}, e.data(), {}, "object" == typeof i && i ? i : {}); if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(fe, t)), "string" == typeof i) { if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]() } }) }, s(a, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return me } }]), a }();
    p(document).on(_e.CLICK_DATA_API, Se, function(e) { "A" === e.currentTarget.tagName && e.preventDefault(); var n = p(this),
            t = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() { var e = p(this),
                t = e.data(fe) ? "toggle" : n.data();
            De._jQueryInterface.call(e, t) }) }), p.fn[ue] = De._jQueryInterface, p.fn[ue].Constructor = De, p.fn[ue].noConflict = function() { return p.fn[ue] = pe, De._jQueryInterface }; var Ie = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Ae = function() { for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0 }(); var Oe = Ie && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, Ae)) } };

    function Ne(e) { return e && "[object Function]" === {}.toString.call(e) }

    function ke(e, t) { if (1 !== e.nodeType) return []; var n = e.ownerDocument.defaultView.getComputedStyle(e, null); return t ? n[t] : n }

    function Le(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

    function Pe(e) { if (!e) return document.body; switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body } var t = ke(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY; return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e)) }

    function xe(e) { return e && e.referenceNode ? e.referenceNode : e } var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
        He = Ie && /MSIE 10/.test(navigator.userAgent);

    function Re(e) { return 11 === e ? je : 10 === e ? He : je || He }

    function Fe(e) { if (!e) return document.documentElement; for (var t = Re(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function Me(e) { return null !== e.parentNode ? Me(e.parentNode) : e }

    function We(e, t) { if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement; var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0); var s = r.commonAncestorContainer; if (e !== s && t !== s || i.contains(o)) return function(e) { var t = e.nodeName; return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e) }(s) ? s : Fe(s); var a = Me(e); return a.host ? We(a.host, t) : We(e, Me(t).host) }

    function Ue(e, t) { var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName; if ("BODY" !== i && "HTML" !== i) return e[n]; var o = e.ownerDocument.documentElement; return (e.ownerDocument.scrollingElement || o)[n] }

    function Be(e, t) { var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom"; return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10) }

    function qe(e, t, n, i) { return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Re(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0) }

    function Ke(e) { var t = e.body,
            n = e.documentElement,
            i = Re(10) && getComputedStyle(n); return { height: qe("Height", t, n, i), width: qe("Width", t, n, i) } } var Qe = function(e, t, n) { return t && Ve(e.prototype, t), n && Ve(e, n), e };

    function Ve(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

    function Ye(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var ze = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e };

    function Xe(e) { return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function Ge(e) { var t = {}; try { if (Re(10)) { t = e.getBoundingClientRect(); var n = Ue(e, "top"),
                    i = Ue(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i } else t = e.getBoundingClientRect() } catch (e) {} var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
            s = r.width || e.clientWidth || o.width,
            a = r.height || e.clientHeight || o.height,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a; if (l || c) { var h = ke(e);
            l -= Be(h, "x"), c -= Be(h, "y"), o.width -= l, o.height -= c } return Xe(o) }

    function $e(e, t, n) { var i = 2 < arguments.length && void 0 !== n && n,
            o = Re(10),
            r = "HTML" === t.nodeName,
            s = Ge(e),
            a = Ge(t),
            l = Pe(e),
            c = ke(t),
            h = parseFloat(c.borderTopWidth, 10),
            u = parseFloat(c.borderLeftWidth, 10);
        i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0)); var f = Xe({ top: s.top - a.top - h, left: s.left - a.left - u, width: s.width, height: s.height }); if (f.marginTop = 0, f.marginLeft = 0, !o && r) { var d = parseFloat(c.marginTop, 10),
                p = parseFloat(c.marginLeft, 10);
            f.top -= h - d, f.bottom -= h - d, f.left -= u - p, f.right -= u - p, f.marginTop = d, f.marginLeft = p } return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function(e, t, n) { var i = 2 < arguments.length && void 0 !== n && n,
                o = Ue(t, "top"),
                r = Ue(t, "left"),
                s = i ? -1 : 1; return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e }(f, t)), f }

    function Je(e) { if (!e || !e.parentElement || Re()) return document.documentElement; for (var t = e.parentElement; t && "none" === ke(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function Ze(e, t, n, i, o) { var r = 4 < arguments.length && void 0 !== o && o,
            s = { top: 0, left: 0 },
            a = r ? Je(e) : We(e, xe(t)); if ("viewport" === i) s = function(e, t) { var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                o = $e(e, i),
                r = Math.max(i.clientWidth, window.innerWidth || 0),
                s = Math.max(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : Ue(i),
                l = n ? 0 : Ue(i, "left"); return Xe({ top: a - o.top + o.marginTop, left: l - o.left + o.marginLeft, width: r, height: s }) }(a, r);
        else { var l = void 0; "scrollParent" === i ? "BODY" === (l = Pe(Le(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i; var c = $e(l, a, r); if ("HTML" !== l.nodeName || function e(t) { var n = t.nodeName; if ("BODY" === n || "HTML" === n) return !1; if ("fixed" === ke(t, "position")) return !0; var i = Le(t); return !!i && e(i) }(a)) s = c;
            else { var h = Ke(e.ownerDocument),
                    u = h.height,
                    f = h.width;
                s.top += c.top - c.marginTop, s.bottom = u + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left } } var d = "number" == typeof(n = n || 0); return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s }

    function et(e, t, i, n, o, r) { var s = 5 < arguments.length && void 0 !== r ? r : 0; if (-1 === e.indexOf("auto")) return e; var a = Ze(i, n, s, o),
            l = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
            c = Object.keys(l).map(function(e) { return ze({ key: e }, l[e], { area: function(e) { return e.width * e.height }(l[e]) }) }).sort(function(e, t) { return t.area - e.area }),
            h = c.filter(function(e) { var t = e.width,
                    n = e.height; return t >= i.clientWidth && n >= i.clientHeight }),
            u = 0 < h.length ? h[0].key : c[0].key,
            f = e.split("-")[1]; return u + (f ? "-" + f : "") }

    function tt(e, t, n, i) { var o = 3 < arguments.length && void 0 !== i ? i : null; return $e(n, o ? Je(t) : We(t, xe(n)), o) }

    function nt(e) { var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0); return { width: e.offsetWidth + i, height: e.offsetHeight + n } }

    function it(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function ot(e, t, n) { n = n.split("-")[0]; var i = nt(e),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height"; return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[it(a)], o }

    function rt(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function st(e, n, t) { return (void 0 === t ? e : e.slice(0, function(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = rt(e, function(e) { return e[t] === n }); return e.indexOf(i) }(e, "name", t))).forEach(function(e) { e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var t = e.function || e.fn;
            e.enabled && Ne(t) && (n.offsets.popper = Xe(n.offsets.popper), n.offsets.reference = Xe(n.offsets.reference), n = t(n, e)) }), n }

    function at(e, n) { return e.some(function(e) { var t = e.name; return e.enabled && t === n }) }

    function lt(e) { for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) { var o = t[i],
                r = o ? "" + o + n : e; if ("undefined" != typeof document.body.style[r]) return r } return null }

    function ct(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function ht(e, t, n, i) { n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, { passive: !0 }); var o = Pe(e); return function e(t, n, i, o) { var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, { passive: !0 }), r || e(Pe(s.parentNode), n, i, o), o.push(s) }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n }

    function ut() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) { return ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }(this.reference, this.state)) }

    function ft(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function dt(n, i) { Object.keys(i).forEach(function(e) { var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ft(i[e]) && (t = "px"), n.style[e] = i[e] + t }) }

    function pt(e, t) {
        function n(e) { return e } var i = e.offsets,
            o = i.popper,
            r = i.reference,
            s = Math.round,
            a = Math.floor,
            l = s(r.width),
            c = s(o.width),
            h = -1 !== ["left", "right"].indexOf(e.placement),
            u = -1 !== e.placement.indexOf("-"),
            f = t ? h || u || l % 2 == c % 2 ? s : a : n,
            d = t ? s : n; return { left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left), top: d(o.top), bottom: d(o.bottom), right: f(o.right) } } var mt = Ie && /Firefox/i.test(navigator.userAgent);

    function gt(e, t, n) { var i = rt(e, function(e) { return e.name === t }),
            o = !!i && e.some(function(e) { return e.name === n && e.enabled && e.order < i.order }); if (!o) { var r = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!") } return o } var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        vt = _t.slice(3);

    function yt(e, t) { var n = 1 < arguments.length && void 0 !== t && t,
            i = vt.indexOf(e),
            o = vt.slice(i + 1).concat(vt.slice(0, i)); return n ? o.reverse() : o } var Et = "flip",
        bt = "clockwise",
        wt = "counterclockwise";

    function Tt(e, o, r, t) { var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            i = n.indexOf(rt(n, function(e) { return -1 !== e.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n]; return (c = c.map(function(e, t) { var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1; return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t) }, []).map(function(e) { return function(e, t, n, i) { var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2]; if (!r) return e; if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r; var a = void 0; switch (s) {
                        case "%p":
                            a = n; break;
                        case "%":
                        case "%r":
                        default:
                            a = i } return Xe(a)[t] / 100 * r }(e, n, o, r) }) })).forEach(function(n, i) { n.forEach(function(e, t) { ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1)) }) }), s } var Ct = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1]; if (i) { var o = e.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = { start: Ye({}, l, r[l]), end: Ye({}, l, r[l] + r[c] - s[c]) };
                            e.offsets.popper = ze({}, s, h[i]) } return e } }, offset: { order: 200, enabled: !0, fn: function(e, t) { var n = t.offset,
                            i = e.placement,
                            o = e.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0; return l = ft(+n) ? [+n, 0] : Tt(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, i) { var t = i.boundariesElement || Fe(e.instance.popper);
                        e.instance.reference === t && (t = Fe(t)); var n = lt("transform"),
                            o = e.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = ""; var l = Ze(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        o.top = r, o.left = s, o[n] = a, i.boundaries = l; var c = i.priority,
                            h = e.offsets.popper,
                            u = { primary: function(e) { var t = h[e]; return h[e] < l[e] && !i.escapeWithReference && (t = Math.max(h[e], l[e])), Ye({}, e, t) }, secondary: function(e) { var t = "right" === e ? "left" : "top",
                                        n = h[t]; return h[e] > l[e] && !i.escapeWithReference && (n = Math.min(h[t], l[e] - ("right" === e ? h.width : h.height))), Ye({}, t, n) } }; return c.forEach(function(e) { var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            h = ze({}, h, u[t](e)) }), e.offsets.popper = h, e }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            o = e.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height"; return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, t) { var n; if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e; var i = t.element; if ("string" == typeof i) { if (!(i = e.instance.popper.querySelector(i))) return e } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e; var o = e.placement.split("-")[0],
                            r = e.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]), e.offsets.popper = Xe(e.offsets.popper); var m = a[u] + a[c] / 2 - p / 2,
                            g = ke(e.instance.popper),
                            _ = parseFloat(g["margin" + h], 10),
                            v = parseFloat(g["border" + h + "Width"], 10),
                            y = m - e.offsets.popper[u] - _ - v; return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ye(n = {}, u, Math.round(y)), Ye(n, f, ""), n), e }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(m, g) { if (at(m.instance.modifiers, "inner")) return m; if (m.flipped && m.placement === m.originalPlacement) return m; var _ = Ze(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
                            v = m.placement.split("-")[0],
                            y = it(v),
                            E = m.placement.split("-")[1] || "",
                            b = []; switch (g.behavior) {
                            case Et:
                                b = [v, y]; break;
                            case bt:
                                b = yt(v); break;
                            case wt:
                                b = yt(v, !0); break;
                            default:
                                b = g.behavior } return b.forEach(function(e, t) { if (v !== e || b.length === t + 1) return m;
                            v = m.placement.split("-")[0], y = it(v); var n = m.offsets.popper,
                                i = m.offsets.reference,
                                o = Math.floor,
                                r = "left" === v && o(n.right) > o(i.left) || "right" === v && o(n.left) < o(i.right) || "top" === v && o(n.bottom) > o(i.top) || "bottom" === v && o(n.top) < o(i.bottom),
                                s = o(n.left) < o(_.left),
                                a = o(n.right) > o(_.right),
                                l = o(n.top) < o(_.top),
                                c = o(n.bottom) > o(_.bottom),
                                h = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && c,
                                u = -1 !== ["top", "bottom"].indexOf(v),
                                f = !!g.flipVariations && (u && "start" === E && s || u && "end" === E && a || !u && "start" === E && l || !u && "end" === E && c),
                                d = !!g.flipVariationsByContent && (u && "start" === E && a || u && "end" === E && s || !u && "start" === E && c || !u && "end" === E && l),
                                p = f || d;
                            (r || h || p) && (m.flipped = !0, (r || h) && (v = b[t + 1]), p && (E = function(e) { return "end" === e ? "start" : "start" === e ? "end" : e }(E)), m.placement = v + (E ? "-" + E : ""), m.offsets.popper = ze({}, m.offsets.popper, ot(m.instance.popper, m.offsets.reference, m.placement)), m = st(m.instance.modifiers, m, "flip")) }), m }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n); return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Xe(o), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e; var t = e.offsets.reference,
                            n = rt(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries; if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) { if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = "" } else { if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var n = t.x,
                            i = t.y,
                            o = e.offsets.popper,
                            r = rt(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var s = void 0 !== r ? r : t.gpuAcceleration,
                            a = Fe(e.instance.popper),
                            l = Ge(a),
                            c = { position: o.position },
                            h = pt(e, window.devicePixelRatio < 2 || !mt),
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            d = lt("transform"),
                            p = void 0,
                            m = void 0; if (m = "bottom" == u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top, p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[u] = 0, c[f] = 0, c.willChange = "transform";
                        else { var g = "bottom" == u ? -1 : 1,
                                _ = "right" == f ? -1 : 1;
                            c[u] = m * g, c[f] = p * _, c.willChange = u + ", " + f } var v = { "x-placement": e.placement }; return e.attributes = ze({}, v, e.attributes), e.styles = ze({}, c, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(e) { return dt(e.instance.popper, e.styles),
                            function(t, n) { Object.keys(n).forEach(function(e) {!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e) }) }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, n, i, o) { var r = tt(o, t, e, n.positionFixed),
                            s = et(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return t.setAttribute("x-placement", s), dt(t, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
        St = (Qe(Dt, [{ key: "update", value: function() { return function() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ot(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }.call(this) } }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return ut.call(this) } }]), Dt);

    function Dt(e, t) { var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Dt), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = Oe(this.update.bind(this)), this.options = ze({}, Dt.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function(e) { n.options.modifiers[e] = ze({}, Dt.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return ze({ name: e }, n.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(e) { e.enabled && Ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state) }), this.update(); var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), this.state.eventsEnabled = o }
    St.Utils = ("undefined" != typeof window ? window : global).PopperUtils, St.placements = _t, St.Defaults = Ct; var It = "dropdown",
        At = "bs.dropdown",
        Ot = "." + At,
        Nt = ".data-api",
        kt = p.fn[It],
        Lt = new RegExp("38|40|27"),
        Pt = { HIDE: "hide" + Ot, HIDDEN: "hidden" + Ot, SHOW: "show" + Ot, SHOWN: "shown" + Ot, CLICK: "click" + Ot, CLICK_DATA_API: "click" + Ot + Nt, KEYDOWN_DATA_API: "keydown" + Ot + Nt, KEYUP_DATA_API: "keyup" + Ot + Nt },
        xt = "disabled",
        jt = "show",
        Ht = "dropup",
        Rt = "dropright",
        Ft = "dropleft",
        Mt = "dropdown-menu-right",
        Wt = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Bt = ".dropdown form",
        qt = ".dropdown-menu",
        Kt = ".navbar-nav",
        Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Vt = "top-start",
        Yt = "top-end",
        zt = "bottom-start",
        Xt = "bottom-end",
        Gt = "right-start",
        $t = "left-start",
        Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        en = function() {
            function c(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var e = c.prototype; return e.toggle = function() { if (!this._element.disabled && !p(this._element).hasClass(xt)) { var e = p(this._menu).hasClass(jt);
                    c._clearMenus(), e || this.show(!0) } }, e.show = function(e) { if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass(xt) || p(this._menu).hasClass(jt))) { var t = { relatedTarget: this._element },
                        n = p.Event(Pt.SHOW, t),
                        i = c._getParentFromElement(this._element); if (p(i).trigger(n), !n.isDefaultPrevented()) { if (!this._inNavbar && e) { if ("undefined" == typeof St) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = i : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(i).addClass(Wt), this._popper = new St(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === p(i).closest(Kt).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(jt), p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t)) } } }, e.hide = function() { if (!this._element.disabled && !p(this._element).hasClass(xt) && p(this._menu).hasClass(jt)) { var e = { relatedTarget: this._element },
                        t = p.Event(Pt.HIDE, e),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass(jt), p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e))) } }, e.dispose = function() { p.removeData(this._element, At), p(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() { var t = this;
                p(this._element).on(Pt.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() }) }, e._getConfig = function(e) { return e = l({}, this.constructor.Default, {}, p(this._element).data(), {}, e), m.typeCheckConfig(It, e, this.constructor.DefaultType), e }, e._getMenuElement = function() { if (!this._menu) { var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(qt)) } return this._menu }, e._getPlacement = function() { var e = p(this._element.parentNode),
                    t = zt; return e.hasClass(Ht) ? (t = Vt, p(this._menu).hasClass(Mt) && (t = Yt)) : e.hasClass(Rt) ? t = Gt : e.hasClass(Ft) ? t = $t : p(this._menu).hasClass(Mt) && (t = Xt), t }, e._detectNavbar = function() { return 0 < p(this._element).closest(".navbar").length }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e }, e._getPopperConfig = function() { var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), l({}, e, {}, this._config.popperConfig) }, c._jQueryInterface = function(t) { return this.each(function() { var e = p(this).data(At); if (e || (e = new c(this, "object" == typeof t ? t : null), p(this).data(At, e)), "string" == typeof t) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, c._clearMenus = function(e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = t.length; n < i; n++) { var o = c._getParentFromElement(t[n]),
                            r = p(t[n]).data(At),
                            s = { relatedTarget: t[n] }; if (e && "click" === e.type && (s.clickEvent = e), r) { var a = r._menu; if (p(o).hasClass(jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(o, e.target))) { var l = p.Event(Pt.HIDE, s);
                                p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), p(a).removeClass(jt), p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s))) } } } }, c._getParentFromElement = function(e) { var t, n = m.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, c._dataApiKeydownHandler = function(e) { if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qt).length)) : Lt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(xt))) { var t = c._getParentFromElement(this),
                        n = p(t).hasClass(jt); if (n || 27 !== e.which)
                        if (n && (!n || 27 !== e.which && 32 !== e.which)) { var i = [].slice.call(t.querySelectorAll(Qt)).filter(function(e) { return p(e).is(":visible") }); if (0 !== i.length) { var o = i.indexOf(e.target);
                                38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === e.which) { var r = t.querySelector(Ut);
                                p(r).trigger("focus") }
                            p(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return Jt } }, { key: "DefaultType", get: function() { return Zt } }]), c }();
    p(document).on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus).on(Pt.CLICK_DATA_API, Ut, function(e) { e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(p(this), "toggle") }).on(Pt.CLICK_DATA_API, Bt, function(e) { e.stopPropagation() }), p.fn[It] = en._jQueryInterface, p.fn[It].Constructor = en, p.fn[It].noConflict = function() { return p.fn[It] = kt, en._jQueryInterface }; var tn = "modal",
        nn = "bs.modal",
        on = "." + nn,
        rn = p.fn[tn],
        sn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        an = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        ln = { HIDE: "hide" + on, HIDE_PREVENTED: "hidePrevented" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, FOCUSIN: "focusin" + on, RESIZE: "resize" + on, CLICK_DISMISS: "click.dismiss" + on, KEYDOWN_DISMISS: "keydown.dismiss" + on, MOUSEUP_DISMISS: "mouseup.dismiss" + on, MOUSEDOWN_DISMISS: "mousedown.dismiss" + on, CLICK_DATA_API: "click" + on + ".data-api" },
        cn = "modal-dialog-scrollable",
        hn = "modal-scrollbar-measure",
        un = "modal-backdrop",
        fn = "modal-open",
        dn = "fade",
        pn = "show",
        mn = "modal-static",
        gn = ".modal-dialog",
        _n = ".modal-body",
        vn = '[data-toggle="modal"]',
        yn = '[data-dismiss="modal"]',
        En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        bn = ".sticky-top",
        wn = function() {
            function o(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(gn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var e = o.prototype; return e.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, e.show = function(e) { var t = this; if (!this._isShown && !this._isTransitioning) { p(this._element).hasClass(dn) && (this._isTransitioning = !0); var n = p.Event(ln.SHOW, { relatedTarget: e });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(ln.CLICK_DISMISS, yn, function(e) { return t.hide(e) }), p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function() { p(t._element).one(ln.MOUSEUP_DISMISS, function(e) { p(e.target).is(t._element) && (t._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return t._showElement(e) })) } }, e.hide = function(e) { var t = this; if (e && e.preventDefault(), this._isShown && !this._isTransitioning) { var n = p.Event(ln.HIDE); if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = p(this._element).hasClass(dn); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(ln.FOCUSIN), p(this._element).removeClass(pn), p(this._element).off(ln.CLICK_DISMISS), p(this._dialog).off(ln.MOUSEDOWN_DISMISS), i) { var o = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function(e) { return t._hideModal(e) }).emulateTransitionEnd(o) } else this._hideModal() } } }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) { return p(e).off(on) }), p(document).off(ln.FOCUSIN), p.removeData(this._element, nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(e) { return e = l({}, sn, {}, e), m.typeCheckConfig(tn, e, an), e }, e._triggerBackdropTransition = function() { var e = this; if ("static" === this._config.backdrop) { var t = p.Event(ln.HIDE_PREVENTED); if (p(this._element).trigger(t), t.defaultPrevented) return;
                    this._element.classList.add(mn); var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() { e._element.classList.remove(mn) }).emulateTransitionEnd(n), this._element.focus() } else this.hide() }, e._showElement = function(e) { var t = this,
                    n = p(this._element).hasClass(dn),
                    i = this._dialog ? this._dialog.querySelector(_n) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(pn), this._config.focus && this._enforceFocus();

                function o() { t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r) } var r = p.Event(ln.SHOWN, { relatedTarget: e }); if (n) { var s = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s) } else o() }, e._enforceFocus = function() { var t = this;
                p(document).off(ln.FOCUSIN).on(ln.FOCUSIN, function(e) { document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus() }) }, e._setEscapeEvent = function() { var t = this;
                this._isShown && this._config.keyboard ? p(this._element).on(ln.KEYDOWN_DISMISS, function(e) { 27 === e.which && t._triggerBackdropTransition() }) : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS) }, e._setResizeEvent = function() { var t = this;
                this._isShown ? p(window).on(ln.RESIZE, function(e) { return t.handleUpdate(e) }) : p(window).off(ln.RESIZE) }, e._hideModal = function() { var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { p(document.body).removeClass(fn), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(ln.HIDDEN) }) }, e._removeBackdrop = function() { this._backdrop && (p(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) { var t = this,
                    n = p(this._element).hasClass(dn) ? dn : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = un, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(ln.CLICK_DISMISS, function(e) { t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition() }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(pn), !e) return; if (!n) return void e(); var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { p(this._backdrop).removeClass(pn); var o = function() { t._removeBackdrop(), e && e() }; if (p(this._element).hasClass(dn)) { var r = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else e && e() }, e._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() { var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var o = this; if (this._isBodyOverflowing) { var e = [].slice.call(document.querySelectorAll(En)),
                        t = [].slice.call(document.querySelectorAll(bn));
                    p(e).each(function(e, t) { var n = t.style.paddingRight,
                            i = p(t).css("padding-right");
                        p(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), p(t).each(function(e, t) { var n = t.style.marginRight,
                            i = p(t).css("margin-right");
                        p(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") }
                p(document.body).addClass(fn) }, e._resetScrollbar = function() { var e = [].slice.call(document.querySelectorAll(En));
                p(e).each(function(e, t) { var n = p(t).data("padding-right");
                    p(t).removeData("padding-right"), t.style.paddingRight = n || "" }); var t = [].slice.call(document.querySelectorAll("" + bn));
                p(t).each(function(e, t) { var n = p(t).data("margin-right"); "undefined" != typeof n && p(t).css("margin-right", n).removeData("margin-right") }); var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, e._getScrollbarWidth = function() { var e = document.createElement("div");
                e.className = hn, document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t }, o._jQueryInterface = function(n, i) { return this.each(function() { var e = p(this).data(nn),
                        t = l({}, sn, {}, p(this).data(), {}, "object" == typeof n && n ? n : {}); if (e || (e = new o(this, t), p(this).data(nn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i) } else t.show && e.show(i) }) }, s(o, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return sn } }]), o }();
    p(document).on(ln.CLICK_DATA_API, vn, function(e) { var t, n = this,
            i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i)); var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(); var r = p(t).one(ln.SHOW, function(e) { e.isDefaultPrevented() || r.one(ln.HIDDEN, function() { p(n).is(":visible") && n.focus() }) });
        wn._jQueryInterface.call(p(t), o, this) }), p.fn[tn] = wn._jQueryInterface, p.fn[tn].Constructor = wn, p.fn[tn].noConflict = function() { return p.fn[tn] = rn, wn._jQueryInterface }; var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Cn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function In(e, r, t) { if (0 === e.length) return e; if (t && "function" == typeof t) return t(e); for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function(e) { var t = a[e],
                    n = t.nodeName.toLowerCase(); if (-1 === s.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t), "continue"; var i = [].slice.call(t.attributes),
                    o = [].concat(r["*"] || [], r[n] || []);
                i.forEach(function(e) {! function(e, t) { var n = e.nodeName.toLowerCase(); if (-1 !== t.indexOf(n)) return -1 === Tn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn)); for (var i = t.filter(function(e) { return e instanceof RegExp }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1 }(e, o) && t.removeAttribute(e.nodeName) }) }, o = 0, l = a.length; o < l; o++) i(o); return n.body.innerHTML } var An = "tooltip",
        On = "bs.tooltip",
        Nn = "." + On,
        kn = p.fn[An],
        Ln = "bs-tooltip",
        Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
        xn = ["sanitize", "whiteList", "sanitizeFn"],
        jn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        Hn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Rn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Cn, popperConfig: null },
        Fn = "show",
        Mn = "out",
        Wn = { HIDE: "hide" + Nn, HIDDEN: "hidden" + Nn, SHOW: "show" + Nn, SHOWN: "shown" + Nn, INSERTED: "inserted" + Nn, CLICK: "click" + Nn, FOCUSIN: "focusin" + Nn, FOCUSOUT: "focusout" + Nn, MOUSEENTER: "mouseenter" + Nn, MOUSELEAVE: "mouseleave" + Nn },
        Un = "fade",
        Bn = "show",
        qn = ".tooltip-inner",
        Kn = ".arrow",
        Qn = "hover",
        Vn = "focus",
        Yn = "click",
        zn = "manual",
        Xn = function() {
            function i(e, t) { if ("undefined" == typeof St) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners() } var e = i.prototype; return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) { if (this._isEnabled)
                    if (e) { var t = this.constructor.DATA_KEY,
                            n = p(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (p(this.getTipElement()).hasClass(Bn)) return void this._leave(null, this);
                        this._enter(null, this) } }, e.dispose = function() { clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() { var t = this; if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements"); var e = p.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { p(this.element).trigger(e); var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !i) return; var o = this.getTipElement(),
                        r = m.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Un); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a); var l = this._getContainer();
                    p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new St(this.element, o, this._getPopperConfig(a)), p(o).addClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop); var c = function() { t.config.animation && t._fixTransition(); var e = t._hoverState;
                        t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Mn && t._leave(null, t) }; if (p(this.tip).hasClass(Un)) { var h = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, e.hide = function(e) {
                function t() { n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() } var n = this,
                    i = this.getTipElement(),
                    o = p.Event(this.constructor.Event.HIDE); if (p(this.element).trigger(o), !o.isDefaultPrevented()) { if (p(i).removeClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Yn] = !1, this._activeTrigger[Vn] = !1, this._activeTrigger[Qn] = !1, p(this.tip).hasClass(Un)) { var r = m.getTransitionDurationFromElement(i);
                        p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r) } else t();
                    this._hoverState = "" } }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { p(this.getTipElement()).addClass(Ln + "-" + e) }, e.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, e.setContent = function() { var e = this.getTipElement();
                this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()), p(e).removeClass(Un + " " + Bn) }, e.setElementContent = function(e, t) { "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = In(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text()) }, e.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title) }, e._getPopperConfig = function(e) { var t = this; return l({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Kn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }, {}, this.config.popperConfig) }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e }, e._getContainer = function() { return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container) }, e._getAttachment = function(e) { return Hn[e.toUpperCase()] }, e._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(e) { if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) { return i.toggle(e) });
                    else if (e !== zn) { var t = e === Qn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Qn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(t, i.config.selector, function(e) { return i._enter(e) }).on(n, i.config.selector, function(e) { return i._leave(e) }) } }), this._hideModalHandler = function() { i.element && i.hide() }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, e._fixTitle = function() { var e = typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0), p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn ? t._hoverState = Fn : (clearTimeout(t._timeout), t._hoverState = Fn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() { t._hoverState === Fn && t.show() }, t.config.delay.show) : t.show()) }, e._leave = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Mn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() { t._hoverState === Mn && t.hide() }, t.config.delay.hide) : t.hide()) }, e._isWithActiveTrigger = function() { for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1 }, e._getConfig = function(e) { var t = p(this.element).data(); return Object.keys(t).forEach(function(e) {-1 !== xn.indexOf(e) && delete t[e] }), "number" == typeof(e = l({}, this.constructor.Default, {}, t, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(An, e, this.constructor.DefaultType), e.sanitize && (e.template = In(e.template, e.whiteList, e.sanitizeFn)), e }, e._getDelegateConfig = function() { var e = {}; if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]); return e }, e._cleanTipClass = function() { var e = p(this.getTipElement()),
                    t = e.attr("class").match(Pn);
                null !== t && t.length && e.removeClass(t.join("")) }, e._handlePopperPlacementChange = function(e) { var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement)) }, e._fixTransition = function() { var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p(e).removeClass(Un), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t) }, i._jQueryInterface = function(n) { return this.each(function() { var e = p(this).data(On),
                        t = "object" == typeof n && n; if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(On, e)), "string" == typeof n)) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return Rn } }, { key: "NAME", get: function() { return An } }, { key: "DATA_KEY", get: function() { return On } }, { key: "Event", get: function() { return Wn } }, { key: "EVENT_KEY", get: function() { return Nn } }, { key: "DefaultType", get: function() { return jn } }]), i }();
    p.fn[An] = Xn._jQueryInterface, p.fn[An].Constructor = Xn, p.fn[An].noConflict = function() { return p.fn[An] = kn, Xn._jQueryInterface }; var Gn = "popover",
        $n = "bs.popover",
        Jn = "." + $n,
        Zn = p.fn[Gn],
        ei = "bs-popover",
        ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
        ni = l({}, Xn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        ii = l({}, Xn.DefaultType, { content: "(string|element|function)" }),
        oi = "fade",
        ri = "show",
        si = ".popover-header",
        ai = ".popover-body",
        li = { HIDE: "hide" + Jn, HIDDEN: "hidden" + Jn, SHOW: "show" + Jn, SHOWN: "shown" + Jn, INSERTED: "inserted" + Jn, CLICK: "click" + Jn, FOCUSIN: "focusin" + Jn, FOCUSOUT: "focusout" + Jn, MOUSEENTER: "mouseenter" + Jn, MOUSELEAVE: "mouseleave" + Jn },
        ci = function(e) {
            function i() { return e.apply(this, arguments) || this }! function(e, t) { e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t }(i, e); var t = i.prototype; return t.isWithContent = function() { return this.getTitle() || this._getContent() }, t.addAttachmentClass = function(e) { p(this.getTipElement()).addClass(ei + "-" + e) }, t.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, t.setContent = function() { var e = p(this.getTipElement());
                this.setElementContent(e.find(si), this.getTitle()); var t = this._getContent(); "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(ai), t), e.removeClass(oi + " " + ri) }, t._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, t._cleanTipClass = function() { var e = p(this.getTipElement()),
                    t = e.attr("class").match(ti);
                null !== t && 0 < t.length && e.removeClass(t.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var e = p(this).data($n),
                        t = "object" == typeof n ? n : null; if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data($n, e)), "string" == typeof n)) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return ni } }, { key: "NAME", get: function() { return Gn } }, { key: "DATA_KEY", get: function() { return $n } }, { key: "Event", get: function() { return li } }, { key: "EVENT_KEY", get: function() { return Jn } }, { key: "DefaultType", get: function() { return ii } }]), i }(Xn);
    p.fn[Gn] = ci._jQueryInterface, p.fn[Gn].Constructor = ci, p.fn[Gn].noConflict = function() { return p.fn[Gn] = Zn, ci._jQueryInterface }; var hi = "scrollspy",
        ui = "bs.scrollspy",
        fi = "." + ui,
        di = p.fn[hi],
        pi = { offset: 10, method: "auto", target: "" },
        mi = { offset: "number", method: "string", target: "(string|element)" },
        gi = { ACTIVATE: "activate" + fi, SCROLL: "scroll" + fi, LOAD_DATA_API: "load" + fi + ".data-api" },
        _i = "dropdown-item",
        vi = "active",
        yi = '[data-spy="scroll"]',
        Ei = ".nav, .list-group",
        bi = ".nav-link",
        wi = ".nav-item",
        Ti = ".list-group-item",
        Ci = ".dropdown",
        Si = ".dropdown-item",
        Di = ".dropdown-toggle",
        Ii = "offset",
        Ai = "position",
        Oi = function() {
            function n(e, t) { var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + bi + "," + this._config.target + " " + Ti + "," + this._config.target + " " + Si, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(gi.SCROLL, function(e) { return n._process(e) }), this.refresh(), this._process() } var e = n.prototype; return e.refresh = function() { var t = this,
                    e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
                    o = "auto" === this._config.method ? e : this._config.method,
                    r = o === Ai ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var t, n = m.getSelectorFromElement(e); if (n && (t = document.querySelector(n)), t) { var i = t.getBoundingClientRect(); if (i.width || i.height) return [p(t)[o]().top + r, n] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) }) }, e.dispose = function() { p.removeData(this._element, ui), p(this._scrollElement).off(fi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) { if ("string" != typeof(e = l({}, pi, {}, "object" == typeof e && e ? e : {})).target) { var t = p(e.target).attr("id");
                    t || (t = m.getUID(hi), p(e.target).attr("id", t)), e.target = "#" + t } return m.typeCheckConfig(hi, e, mi), e }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() { var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight(); if (this._scrollHeight !== t && this.refresh(), n <= e) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, e._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",").map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }),
                    n = p([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(_i) ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi)) : (n.addClass(vi), n.parents(Ei).prev(bi + ", " + Ti).addClass(vi), n.parents(Ei).prev(wi).children(bi).addClass(vi)), p(this._scrollElement).trigger(gi.ACTIVATE, { relatedTarget: t }) }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) { return e.classList.contains(vi) }).forEach(function(e) { return e.classList.remove(vi) }) }, n._jQueryInterface = function(t) { return this.each(function() { var e = p(this).data(ui); if (e || (e = new n(this, "object" == typeof t && t), p(this).data(ui, e)), "string" == typeof t) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "Default", get: function() { return pi } }]), n }();
    p(window).on(gi.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll(yi)), t = e.length; t--;) { var n = p(e[t]);
            Oi._jQueryInterface.call(n, n.data()) } }), p.fn[hi] = Oi._jQueryInterface, p.fn[hi].Constructor = Oi, p.fn[hi].noConflict = function() { return p.fn[hi] = di, Oi._jQueryInterface }; var Ni = "bs.tab",
        ki = "." + Ni,
        Li = p.fn.tab,
        Pi = { HIDE: "hide" + ki, HIDDEN: "hidden" + ki, SHOW: "show" + ki, SHOWN: "shown" + ki, CLICK_DATA_API: "click" + ki + ".data-api" },
        xi = "dropdown-menu",
        ji = "active",
        Hi = "disabled",
        Ri = "fade",
        Fi = "show",
        Mi = ".dropdown",
        Wi = ".nav, .list-group",
        Ui = ".active",
        Bi = "> li > .active",
        qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Ki = ".dropdown-toggle",
        Qi = "> .dropdown-menu .active",
        Vi = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(ji) || p(this._element).hasClass(Hi))) { var e, i, t = p(this._element).closest(Wi)[0],
                        o = m.getSelectorFromElement(this._element); if (t) { var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
                        i = (i = p.makeArray(p(t).find(r)))[i.length - 1] } var s = p.Event(Pi.HIDE, { relatedTarget: this._element }),
                        a = p.Event(Pi.SHOW, { relatedTarget: i }); if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (e = document.querySelector(o)), this._activate(this._element, t); var l = function() { var e = p.Event(Pi.HIDDEN, { relatedTarget: n._element }),
                                t = p.Event(Pi.SHOWN, { relatedTarget: i });
                            p(i).trigger(e), p(n._element).trigger(t) };
                        e ? this._activate(e, e.parentNode, l) : l() } } }, e.dispose = function() { p.removeData(this._element, Ni), this._element = null }, e._activate = function(e, t, n) {
                function i() { return o._transitionComplete(e, r, n) } var o = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ui) : p(t).find(Bi))[0],
                    s = n && r && p(r).hasClass(Ri); if (r && s) { var a = m.getTransitionDurationFromElement(r);
                    p(r).removeClass(Fi).one(m.TRANSITION_END, i).emulateTransitionEnd(a) } else i() }, e._transitionComplete = function(e, t, n) { if (t) { p(t).removeClass(ji); var i = p(t.parentNode).find(Qi)[0];
                    i && p(i).removeClass(ji), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1) } if (p(e).addClass(ji), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(Ri) && e.classList.add(Fi), e.parentNode && p(e.parentNode).hasClass(xi)) { var o = p(e).closest(Mi)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(Ki));
                        p(r).addClass(ji) }
                    e.setAttribute("aria-expanded", !0) }
                n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var e = p(this),
                        t = e.data(Ni); if (t || (t = new i(this), e.data(Ni, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }]), i }();
    p(document).on(Pi.CLICK_DATA_API, qi, function(e) { e.preventDefault(), Vi._jQueryInterface.call(p(this), "show") }), p.fn.tab = Vi._jQueryInterface, p.fn.tab.Constructor = Vi, p.fn.tab.noConflict = function() { return p.fn.tab = Li, Vi._jQueryInterface }; var Yi = "toast",
        zi = "bs.toast",
        Xi = "." + zi,
        Gi = p.fn[Yi],
        $i = { CLICK_DISMISS: "click.dismiss" + Xi, HIDE: "hide" + Xi, HIDDEN: "hidden" + Xi, SHOW: "show" + Xi, SHOWN: "shown" + Xi },
        Ji = "fade",
        Zi = "hide",
        eo = "show",
        to = "showing",
        no = { animation: "boolean", autohide: "boolean", delay: "number" },
        io = { animation: !0, autohide: !0, delay: 500 },
        oo = '[data-dismiss="toast"]',
        ro = function() {
            function i(e, t) { this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners() } var e = i.prototype; return e.show = function() { var e = this,
                    t = p.Event($i.SHOW); if (p(this._element).trigger(t), !t.isDefaultPrevented()) { this._config.animation && this._element.classList.add(Ji); var n = function() { e._element.classList.remove(to), e._element.classList.add(eo), p(e._element).trigger($i.SHOWN), e._config.autohide && (e._timeout = setTimeout(function() { e.hide() }, e._config.delay)) }; if (this._element.classList.remove(Zi), m.reflow(this._element), this._element.classList.add(to), this._config.animation) { var i = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i) } else n() } }, e.hide = function() { if (this._element.classList.contains(eo)) { var e = p.Event($i.HIDE);
                    p(this._element).trigger(e), e.isDefaultPrevented() || this._close() } }, e.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(eo) && this._element.classList.remove(eo), p(this._element).off($i.CLICK_DISMISS), p.removeData(this._element, zi), this._element = null, this._config = null }, e._getConfig = function(e) { return e = l({}, io, {}, p(this._element).data(), {}, "object" == typeof e && e ? e : {}), m.typeCheckConfig(Yi, e, this.constructor.DefaultType), e }, e._setListeners = function() { var e = this;
                p(this._element).on($i.CLICK_DISMISS, oo, function() { return e.hide() }) }, e._close = function() {
                function e() { t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN) } var t = this; if (this._element.classList.remove(eo), this._config.animation) { var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, i._jQueryInterface = function(n) { return this.each(function() { var e = p(this),
                        t = e.data(zi); if (t || (t = new i(this, "object" == typeof n && n), e.data(zi, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.4.1" } }, { key: "DefaultType", get: function() { return no } }, { key: "Default", get: function() { return io } }]), i }();
    p.fn[Yi] = ro._jQueryInterface, p.fn[Yi].Constructor = ro, p.fn[Yi].noConflict = function() { return p.fn[Yi] = Gi, ro._jQueryInterface }, e.Alert = _, e.Button = x, e.Carousel = he, e.Collapse = De, e.Dropdown = en, e.Modal = wn, e.Popover = ci, e.Scrollspy = Oi, e.Tab = Vi, e.Toast = ro, e.Tooltip = Xn, e.Util = m, Object.defineProperty(e, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.bundle.min.js.map