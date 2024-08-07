!(function () {
    "use strict";
    !(function () {
        function t(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function e(t, e) {
            (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
        }
        /*!
         * GSAP 3.11.0
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n,
            r,
            i,
            a,
            s,
            o,
            l,
            c,
            u,
            d,
            h,
            f,
            p,
            m,
            _,
            g = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
            v = { duration: 0.5, overwrite: !1, delay: 0 },
            y = 1e8,
            w = 1e-8,
            b = 2 * Math.PI,
            x = b / 4,
            T = 0,
            E = Math.sqrt,
            M = Math.cos,
            C = Math.sin,
            k = function (t) {
                return "string" == typeof t;
            },
            S = function (t) {
                return "function" == typeof t;
            },
            L = function (t) {
                return "number" == typeof t;
            },
            A = function (t) {
                return void 0 === t;
            },
            O = function (t) {
                return "object" == typeof t;
            },
            z = function (t) {
                return !1 !== t;
            },
            D = function () {
                return "undefined" != typeof window;
            },
            P = function (t) {
                return S(t) || k(t);
            },
            F = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
            I = Array.isArray,
            R = /(?:-?\.?\d|\.)+/gi,
            N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            B = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            q = /[+-]=-?[.\d]+/,
            H = /[^,'"\[\]\s]+/gi,
            V = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            G = {},
            U = {},
            Y = function (t) {
                return (U = bt(t, G)) && xn;
            },
            X = function (t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
            },
            W = function (t, e) {
                return !e && console.warn(t);
            },
            K = function (t, e) {
                return (t && (G[t] = e) && U && (U[t] = e)) || G;
            },
            Q = function () {
                return 0;
            },
            Z = { suppressEvents: !0, isStart: !0 },
            J = { suppressEvents: !0 },
            tt = {},
            et = [],
            nt = {},
            rt = {},
            it = {},
            at = 30,
            st = [],
            ot = "",
            lt = function (t) {
                var e,
                    n,
                    r = t[0];
                if ((O(r) || S(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
                    for (n = st.length; n-- && !st[n].targetTest(r); );
                    e = st[n];
                }
                for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e)))) || t.splice(n, 1);
                return t;
            },
            ct = function (t) {
                return t._gsap || lt(te(t))[0]._gsap;
            },
            ut = function (t, e, n) {
                return (n = t[e]) && S(n) ? t[e]() : (A(n) && t.getAttribute && t.getAttribute(e)) || n;
            },
            dt = function (t, e) {
                return (t = t.split(",")).forEach(e) || t;
            },
            ht = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0;
            },
            ft = function (t) {
                return Math.round(1e7 * t) / 1e7 || 0;
            },
            pt = function (t, e) {
                var n = e.charAt(0),
                    r = parseFloat(e.substr(2));
                return (t = parseFloat(t)), "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r;
            },
            mt = function (t, e) {
                for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
                return r < n;
            },
            _t = function () {
                var t,
                    e,
                    n = et.length,
                    r = et.slice(0);
                for (nt = {}, et.length = 0, t = 0; t < n; t++) (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
            },
            gt = function (t, e, n, i) {
                et.length && _t(), t.render(e, n, i || r), et.length && _t();
            },
            vt = function (t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(H).length < 2 ? e : k(t) ? t.trim() : t;
            },
            yt = function (t) {
                return t;
            },
            wt = function (t, e) {
                for (var n in e) n in t || (t[n] = e[n]);
                return t;
            },
            bt = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            },
            xt = function t(e, n) {
                for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = O(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
                return e;
            },
            Tt = function (t, e) {
                var n,
                    r = {};
                for (n in t) n in e || (r[n] = t[n]);
                return r;
            },
            Et = function (t) {
                var e,
                    n = t.parent || a,
                    r = t.keyframes
                        ? ((e = I(t.keyframes)),
                          function (t, n) {
                              for (var r in n) r in t || ("duration" === r && e) || "ease" === r || (t[r] = n[r]);
                          })
                        : wt;
                if (z(t.inherit)) for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
                return t;
            },
            Mt = function (t, e, n, r, i) {
                void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                var a,
                    s = t[r];
                if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
                return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = s), (e.parent = e._dp = t), e;
            },
            Ct = function (t, e, n, r) {
                void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                var i = e._prev,
                    a = e._next;
                i ? (i._next = a) : t[n] === e && (t[n] = a), a ? (a._prev = i) : t[r] === e && (t[r] = i), (e._next = e._prev = e.parent = null);
            },
            kt = function (t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
            },
            St = function (t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
                return t;
            },
            Lt = function (t) {
                for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
            },
            At = function (t, e, n, i) {
                return t._startAt && (r ? t._startAt.revert(J) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, i));
            },
            Ot = function t(e) {
                return !e || (e._ts && t(e.parent));
            },
            zt = function (t) {
                return t._repeat ? Dt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
            },
            Dt = function (t, e) {
                var n = Math.floor((t /= e));
                return t && n === t ? n - 1 : n;
            },
            Pt = function (t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
            },
            Ft = function (t) {
                return (t._end = ft(t._start + (t._tDur / Math.abs(t._ts || t._rts || w) || 0)));
            },
            It = function (t, e) {
                var n = t._dp;
                return n && n.smoothChildTiming && t._ts && ((t._start = ft(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Ft(t), n._dirty || St(n, t)), t;
            },
            Rt = function (t, e) {
                var n;
                if (((e._time || (e._initted && !e._dur)) && ((n = Pt(t.rawTime(), e)), (!e._dur || $t(0, e.totalDuration(), n) - e._tTime > w) && e.render(n, !0)), St(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                    if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
                    t._zTime = -1e-8;
                }
            },
            Nt = function (t, e, n, r) {
                return (
                    e.parent && kt(e),
                    (e._start = ft((L(n) ? n : n || t !== a ? Yt(t, n, e) : t._time) + e._delay)),
                    (e._end = ft(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                    Mt(t, e, "_first", "_last", t._sort ? "_start" : 0),
                    Ht(e) || (t._recent = e),
                    r || Rt(t, e),
                    t._ts < 0 && It(t, t._tTime),
                    t
                );
            },
            jt = function (t, e) {
                return (G.ScrollTrigger || X("scrollTrigger", e)) && G.ScrollTrigger.create(e, t);
            },
            Bt = function (t, e, n, r) {
                return Ge(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && u !== Te.frame ? (et.push(t), (t._lazy = [e, r]), 1) : void 0) : 1;
            },
            qt = function t(e) {
                var n = e.parent;
                return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
            },
            Ht = function (t) {
                var e = t.data;
                return "isFromStart" === e || "isStart" === e;
            },
            Vt = function (t, e, n, r) {
                var i = t._repeat,
                    a = ft(e) || 0,
                    s = t._tTime / t._tDur;
                return s && !r && (t._time *= a / t._dur), (t._dur = a), (t._tDur = i ? (i < 0 ? 1e10 : ft(a * (i + 1) + t._rDelay * i)) : a), s > 0 && !r ? It(t, (t._tTime = t._tDur * s)) : t.parent && Ft(t), n || St(t.parent, t), t;
            },
            Gt = function (t) {
                return t instanceof Ne ? St(t) : Vt(t, t._dur);
            },
            Ut = { _start: 0, endTime: Q, totalDuration: Q },
            Yt = function t(e, n, r) {
                var i,
                    a,
                    s,
                    o = e.labels,
                    l = e._recent || Ut,
                    c = e.duration() >= y ? l.endTime(!1) : e._dur;
                return k(n) && (isNaN(n) || n in o)
                    ? ((a = n.charAt(0)),
                      (s = "%" === n.substr(-1)),
                      (i = n.indexOf("=")),
                      "<" === a || ">" === a
                          ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === a ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? l : r).totalDuration() / 100 : 1))
                          : i < 0
                          ? (n in o || (o[n] = c), o[n])
                          : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))), s && r && (a = (a / 100) * (I(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + a : c + a))
                    : null == n
                    ? c
                    : +n;
            },
            Xt = function (t, e, n) {
                var r,
                    i,
                    a = L(e[1]),
                    s = (a ? 2 : 1) + (t < 2 ? 0 : 1),
                    o = e[s];
                if ((a && (o.duration = e[1]), (o.parent = n), t)) {
                    for (r = o, i = n; i && !("immediateRender" in r); ) (r = i.vars.defaults || {}), (i = z(i.vars.inherit) && i.parent);
                    (o.immediateRender = z(r.immediateRender)), t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
                }
                return new $e(e[0], o, e[s + 1]);
            },
            Wt = function (t, e) {
                return t || 0 === t ? e(t) : e;
            },
            $t = function (t, e, n) {
                return n < t ? t : n > e ? e : n;
            },
            Kt = function (t, e) {
                return k(t) && (e = V.exec(t)) ? e[1] : "";
            },
            Qt = [].slice,
            Zt = function (t, e) {
                return t && O(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && O(t[0]))) && !t.nodeType && t !== s;
            },
            Jt = function (t, e, n) {
                return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                        var r;
                        return (k(t) && !e) || Zt(t, 1) ? (r = n).push.apply(r, te(t)) : n.push(t);
                    }) || n
                );
            },
            te = function (t, e, n) {
                return i && !e && i.selector ? i.selector(t) : !k(t) || n || (!o && Ee()) ? (I(t) ? Jt(t, n) : Zt(t) ? Qt.call(t, 0) : t ? [t] : []) : Qt.call((e || l).querySelectorAll(t), 0);
            },
            ee = function (t) {
                return (
                    (t = te(t)[0] || W("Invalid scope") || {}),
                    function (e) {
                        var n = t.current || t.nativeElement || t;
                        return te(e, n.querySelectorAll ? n : n === t ? W("Invalid scope") || l.createElement("div") : t);
                    }
                );
            },
            ne = function (t) {
                return t.sort(function () {
                    return 0.5 - Math.random();
                });
            },
            re = function (t) {
                if (S(t)) return t;
                var e = O(t) ? t : { each: t },
                    n = Oe(e.ease),
                    r = e.from || 0,
                    i = parseFloat(e.base) || 0,
                    a = {},
                    s = r > 0 && r < 1,
                    o = isNaN(r) || s,
                    l = e.axis,
                    c = r,
                    u = r;
                return (
                    k(r) ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !s && o && ((c = r[0]), (u = r[1])),
                    function (t, s, d) {
                        var h,
                            f,
                            p,
                            m,
                            _,
                            g,
                            v,
                            w,
                            b,
                            x = (d || e).length,
                            T = a[x];
                        if (!T) {
                            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, y])[1])) {
                                for (v = -y; v < (v = d[b++].getBoundingClientRect().left) && b < x; );
                                b--;
                            }
                            for (T = a[x] = [], h = o ? Math.min(b, x) * c - 0.5 : r % b, f = b === y ? 0 : o ? (x * u) / b - 0.5 : (r / b) | 0, v = 0, w = y, g = 0; g < x; g++)
                                (p = (g % b) - h), (m = f - ((g / b) | 0)), (T[g] = _ = l ? Math.abs("y" === l ? m : p) : E(p * p + m * m)), _ > v && (v = _), _ < w && (w = _);
                            "random" === r && ne(T),
                                (T.max = v - w),
                                (T.min = w),
                                (T.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (b > x ? x - 1 : l ? ("y" === l ? x / b : b) : Math.max(b, x / b)) || 0) * ("edges" === r ? -1 : 1)),
                                (T.b = x < 0 ? i - x : i),
                                (T.u = Kt(e.amount || e.each) || 0),
                                (n = n && x < 0 ? Le(n) : n);
                        }
                        return (x = (T[t] - T.min) / T.max || 0), ft(T.b + (n ? n(x) : x) * T.v) + T.u;
                    }
                );
            },
            ie = function (t) {
                var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                return function (n) {
                    var r = ft(Math.round(parseFloat(n) / t) * t * e);
                    return (r - (r % 1)) / e + (L(n) ? 0 : Kt(n));
                };
            },
            ae = function (t, e) {
                var n,
                    r,
                    i = I(t);
                return (
                    !i && O(t) && ((n = i = t.radius || y), t.values ? ((t = te(t.values)), (r = !L(t[0])) && (n *= n)) : (t = ie(t.increment))),
                    Wt(
                        e,
                        i
                            ? S(t)
                                ? function (e) {
                                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                                  }
                                : function (e) {
                                      for (var i, a, s = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), l = y, c = 0, u = t.length; u--; )
                                          (i = r ? (i = t[u].x - s) * i + (a = t[u].y - o) * a : Math.abs(t[u] - s)) < l && ((l = i), (c = u));
                                      return (c = !n || l <= n ? t[c] : e), r || c === e || L(e) ? c : c + Kt(e);
                                  }
                            : ie(t)
                    )
                );
            },
            se = function (t, e, n, r) {
                return Wt(I(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
                    return I(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n) * n * r) / r;
                });
            },
            oe = function (t, e, n) {
                return Wt(n, function (n) {
                    return t[~~e(n)];
                });
            },
            le = function (t) {
                for (var e, n, r, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
                    (r = t.indexOf(")", e)), (i = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, r - e - 7).match(i ? H : R)), (s += t.substr(a, e - a) + se(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)), (a = r + 1);
                return s + t.substr(a, t.length - a);
            },
            ce = function (t, e, n, r, i) {
                var a = e - t,
                    s = r - n;
                return Wt(i, function (e) {
                    return n + (((e - t) / a) * s || 0);
                });
            },
            ue = function (t, e, n) {
                var r,
                    i,
                    a,
                    s = t.labels,
                    o = y;
                for (r in s) (i = s[r] - e) < 0 == !!n && i && o > (i = Math.abs(i)) && ((a = r), (o = i));
                return a;
            },
            de = function (t, e, n) {
                var r,
                    a,
                    s,
                    o = t.vars,
                    l = o[e],
                    c = i,
                    u = t._ctx;
                if (l) return (r = o[e + "Params"]), (a = o.callbackScope || t), n && et.length && _t(), u && (i = u), (s = r ? l.apply(a, r) : l.call(a)), (i = c), s;
            },
            he = function (t) {
                return kt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && de(t, "onInterrupt"), t;
            },
            fe = function (t) {
                var e = (t = (!t.name && t.default) || t).name,
                    n = S(t),
                    r =
                        e && !n && t.init
                            ? function () {
                                  this._props = [];
                              }
                            : t,
                    i = { init: Q, render: an, add: He, kill: on, modifier: sn, rawVars: 0 },
                    a = { targetTest: 0, get: 0, getSetter: tn, aliases: {}, register: 0 };
                if ((Ee(), t !== r)) {
                    if (rt[e]) return;
                    wt(r, wt(Tt(t, i), a)), bt(r.prototype, bt(i, Tt(t, a))), (rt[(r.prop = e)] = r), t.targetTest && (st.push(r), (tt[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                }
                K(e, r), t.register && t.register(xn, r, un);
            },
            pe = 255,
            me = {
                aqua: [0, pe, pe],
                lime: [0, pe, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, pe],
                navy: [0, 0, 128],
                white: [pe, pe, pe],
                olive: [128, 128, 0],
                yellow: [pe, pe, 0],
                orange: [pe, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [pe, 0, 0],
                pink: [pe, 192, 203],
                cyan: [0, pe, pe],
                transparent: [pe, pe, pe, 0],
            },
            _e = function (t, e, n) {
                return ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * pe + 0.5) | 0;
            },
            ge = function (t, e, n) {
                var r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    c,
                    u,
                    d,
                    h,
                    f = t ? (L(t) ? [t >> 16, (t >> 8) & pe, t & pe] : 0) : me.black;
                if (!f) {
                    if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t])) f = me[t];
                    else if ("#" === t.charAt(0)) {
                        if ((t.length < 6 && ((r = t.charAt(1)), (i = t.charAt(2)), (a = t.charAt(3)), (t = "#" + r + r + i + i + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                            return [(f = parseInt(t.substr(1, 6), 16)) >> 16, (f >> 8) & pe, f & pe, parseInt(t.substr(7), 16) / 255];
                        f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & pe, t & pe];
                    } else if ("hsl" === t.substr(0, 3))
                        if (((f = h = t.match(R)), e)) {
                            if (~t.indexOf("=")) return (f = t.match(N)), n && f.length < 4 && (f[3] = 1), f;
                        } else
                            (s = (+f[0] % 360) / 360),
                                (o = +f[1] / 100),
                                (r = 2 * (l = +f[2] / 100) - (i = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                                f.length > 3 && (f[3] *= 1),
                                (f[0] = _e(s + 1 / 3, r, i)),
                                (f[1] = _e(s, r, i)),
                                (f[2] = _e(s - 1 / 3, r, i));
                    else f = t.match(R) || me.transparent;
                    f = f.map(Number);
                }
                return (
                    e &&
                        !h &&
                        ((r = f[0] / pe),
                        (i = f[1] / pe),
                        (a = f[2] / pe),
                        (l = ((c = Math.max(r, i, a)) + (u = Math.min(r, i, a))) / 2),
                        c === u ? (s = o = 0) : ((d = c - u), (o = l > 0.5 ? d / (2 - c - u) : d / (c + u)), (s = c === r ? (i - a) / d + (i < a ? 6 : 0) : c === i ? (a - r) / d + 2 : (r - i) / d + 4), (s *= 60)),
                        (f[0] = ~~(s + 0.5)),
                        (f[1] = ~~(100 * o + 0.5)),
                        (f[2] = ~~(100 * l + 0.5))),
                    n && f.length < 4 && (f[3] = 1),
                    f
                );
            },
            ve = function (t) {
                var e = [],
                    n = [],
                    r = -1;
                return (
                    t.split(we).forEach(function (t) {
                        var i = t.match(j) || [];
                        e.push.apply(e, i), n.push((r += i.length + 1));
                    }),
                    (e.c = n),
                    e
                );
            },
            ye = function (t, e, n) {
                var r,
                    i,
                    a,
                    s,
                    o = "",
                    l = (t + o).match(we),
                    c = e ? "hsla(" : "rgba(",
                    u = 0;
                if (!l) return t;
                if (
                    ((l = l.map(function (t) {
                        return (t = ge(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                    })),
                    n && ((a = ve(t)), (r = n.c).join(o) !== a.c.join(o)))
                )
                    for (s = (i = t.replace(we, "1").split(j)).length - 1; u < s; u++) o += i[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
                if (!i) for (s = (i = t.split(we)).length - 1; u < s; u++) o += i[u] + l[u];
                return o + i[s];
            },
            we = (function () {
                var t,
                    e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in me) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi");
            })(),
            be = /hsl[a]?\(/,
            xe = function (t) {
                var e,
                    n = t.join(" ");
                if (((we.lastIndex = 0), we.test(n))) return (e = be.test(n)), (t[1] = ye(t[1], e)), (t[0] = ye(t[0], e, ve(t[1]))), !0;
            },
            Te = (function () {
                var t,
                    e,
                    n,
                    r,
                    i,
                    a,
                    u = Date.now,
                    d = 500,
                    f = 33,
                    p = u(),
                    m = p,
                    _ = 1e3 / 240,
                    g = _,
                    v = [],
                    y = function n(s) {
                        var o,
                            l,
                            c,
                            h,
                            y = u() - m,
                            w = !0 === s;
                        if ((y > d && (p += y - f), ((o = (c = (m += y) - p) - g) > 0 || w) && ((h = ++r.frame), (i = c - 1e3 * r.time), (r.time = c /= 1e3), (g += o + (o >= _ ? 4 : _ - o)), (l = 1)), w || (t = e(n)), l))
                            for (a = 0; a < v.length; a++) v[a](c, i, h, s);
                    };
                return (r = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        y(!0);
                    },
                    deltaRatio: function (t) {
                        return i / (1e3 / (t || 60));
                    },
                    wake: function () {
                        c &&
                            (!o &&
                                D() &&
                                ((s = o = window), (l = s.document || {}), (G.gsap = xn), (s.gsapVersions || (s.gsapVersions = [])).push(xn.version), Y(U || s.GreenSockGlobals || (!s.gsap && s) || {}), (n = s.requestAnimationFrame)),
                            t && r.sleep(),
                            (e =
                                n ||
                                function (t) {
                                    return setTimeout(t, (g - 1e3 * r.time + 1) | 0);
                                }),
                            (h = 1),
                            y(2));
                    },
                    sleep: function () {
                        (n ? s.cancelAnimationFrame : clearTimeout)(t), (h = 0), (e = Q);
                    },
                    lagSmoothing: function (t, e) {
                        (d = t || 1e8), (f = Math.min(e, d, 0));
                    },
                    fps: function (t) {
                        (_ = 1e3 / (t || 240)), (g = 1e3 * r.time + _);
                    },
                    add: function (t, e, n) {
                        var i = e
                            ? function (e, n, a, s) {
                                  t(e, n, a, s), r.remove(i);
                              }
                            : t;
                        return r.remove(t), v[n ? "unshift" : "push"](i), Ee(), i;
                    },
                    remove: function (t, e) {
                        ~(e = v.indexOf(t)) && v.splice(e, 1) && a >= e && a--;
                    },
                    _listeners: v,
                });
            })(),
            Ee = function () {
                return !h && Te.wake();
            },
            Me = {},
            Ce = /^[\d.\-M][\d.\-,\s]/,
            ke = /["']/g,
            Se = function (t) {
                for (var e, n, r, i = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, l = a.length; o < l; o++)
                    (n = a[o]), (e = o !== l - 1 ? n.lastIndexOf(",") : n.length), (r = n.substr(0, e)), (i[s] = isNaN(r) ? r.replace(ke, "").trim() : +r), (s = n.substr(e + 1).trim());
                return i;
            },
            Le = function (t) {
                return function (e) {
                    return 1 - t(1 - e);
                };
            },
            Ae = function t(e, n) {
                for (var r, i = e._first; i; )
                    i instanceof Ne ? t(i, n) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === n || (i.timeline ? t(i.timeline, n) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))), (i = i._next);
            },
            Oe = function (t, e) {
                return (
                    (t &&
                        (S(t)
                            ? t
                            : Me[t] ||
                              (function (t) {
                                  var e,
                                      n,
                                      r,
                                      i,
                                      a = (t + "").split("("),
                                      s = Me[a[0]];
                                  return s && a.length > 1 && s.config
                                      ? s.config.apply(
                                            null,
                                            ~t.indexOf("{") ? [Se(a[1])] : ((e = t), (n = e.indexOf("(") + 1), (r = e.indexOf(")")), (i = e.indexOf("(", n)), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(vt)
                                        )
                                      : Me._CE && Ce.test(t)
                                      ? Me._CE("", t)
                                      : s;
                              })(t))) ||
                    e
                );
            },
            ze = function (t, e, n, r) {
                void 0 === n &&
                    (n = function (t) {
                        return 1 - e(1 - t);
                    }),
                    void 0 === r &&
                        (r = function (t) {
                            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                        });
                var i,
                    a = { easeIn: e, easeOut: n, easeInOut: r };
                return (
                    dt(t, function (t) {
                        for (var e in ((Me[t] = G[t] = a), (Me[(i = t.toLowerCase())] = n), a)) Me[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Me[t + "." + e] = a[e];
                    }),
                    a
                );
            },
            De = function (t) {
                return function (e) {
                    return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                };
            },
            Pe = function t(e, n, r) {
                var i = n >= 1 ? n : 1,
                    a = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
                    s = (a / b) * (Math.asin(1 / i) || 0),
                    o = function (t) {
                        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * C((t - s) * a) + 1;
                    },
                    l =
                        "out" === e
                            ? o
                            : "in" === e
                            ? function (t) {
                                  return 1 - o(1 - t);
                              }
                            : De(o);
                return (
                    (a = b / a),
                    (l.config = function (n, r) {
                        return t(e, n, r);
                    }),
                    l
                );
            },
            Fe = function t(e, n) {
                void 0 === n && (n = 1.70158);
                var r = function (t) {
                        return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
                    },
                    i =
                        "out" === e
                            ? r
                            : "in" === e
                            ? function (t) {
                                  return 1 - r(1 - t);
                              }
                            : De(r);
                return (
                    (i.config = function (n) {
                        return t(e, n);
                    }),
                    i
                );
            };
        dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var n = e < 5 ? e + 1 : e;
            ze(
                t + ",Power" + (n - 1),
                e
                    ? function (t) {
                          return Math.pow(t, n);
                      }
                    : function (t) {
                          return t;
                      },
                function (t) {
                    return 1 - Math.pow(1 - t, n);
                },
                function (t) {
                    return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
                }
            );
        }),
            (Me.Linear.easeNone = Me.none = Me.Linear.easeIn),
            ze("Elastic", Pe("in"), Pe("out"), Pe()),
            (f = 7.5625),
            (m = 1 / (p = 2.75)),
            ze(
                "Bounce",
                function (t) {
                    return 1 - _(1 - t);
                },
                (_ = function (t) {
                    return t < m ? f * t * t : t < 0.7272727272727273 ? f * Math.pow(t - 1.5 / p, 2) + 0.75 : t < 0.9090909090909092 ? f * (t -= 2.25 / p) * t + 0.9375 : f * Math.pow(t - 2.625 / p, 2) + 0.984375;
                })
            ),
            ze("Expo", function (t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            ze("Circ", function (t) {
                return -(E(1 - t * t) - 1);
            }),
            ze("Sine", function (t) {
                return 1 === t ? 1 : 1 - M(t * x);
            }),
            ze("Back", Fe("in"), Fe("out"), Fe()),
            (Me.SteppedEase = Me.steps = G.SteppedEase = {
                config: function (t, e) {
                    void 0 === t && (t = 1);
                    var n = 1 / t,
                        r = t + (e ? 0 : 1),
                        i = e ? 1 : 0;
                    return function (t) {
                        return (((r * $t(0, 0.99999999, t)) | 0) + i) * n;
                    };
                },
            }),
            (v.ease = Me["quad.out"]),
            dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                return (ot += t + "," + t + "Params,");
            });
        var Ie = function (t, e) {
                (this.id = T++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : ut), (this.set = e ? e.getSetter : tn);
            },
            Re = (function () {
                function t(t) {
                    (this.vars = t),
                        (this._delay = +t.delay || 0),
                        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                        (this._ts = 1),
                        Vt(this, +t.duration, 1, 1),
                        (this.data = t.data),
                        i && ((this._ctx = i), i.data.push(this)),
                        h || Te.wake();
                }
                var e = t.prototype;
                return (
                    (e.delay = function (t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                    }),
                    (e.duration = function (t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                    }),
                    (e.totalDuration = function (t) {
                        return arguments.length ? ((this._dirty = 0), Vt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                    }),
                    (e.totalTime = function (t, e) {
                        if ((Ee(), !arguments.length)) return this._tTime;
                        var n = this._dp;
                        if (n && n.smoothChildTiming && this._ts) {
                            for (It(this, t), !n._dp || n.parent || Rt(n, this); n && n.parent; )
                                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                            !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Nt(this._dp, this, this._start - this._delay);
                        }
                        return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === w) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), gt(this, t, e)), this;
                    }),
                    (e.time = function (t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                    }),
                    (e.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                    }),
                    (e.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                    }),
                    (e.iteration = function (t, e) {
                        var n = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Dt(this._tTime, n) + 1 : 1;
                    }),
                    (e.timeScale = function (t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? Pt(this.parent._time, this) : this._tTime;
                        return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), this.totalTime($t(-this._delay, this._tDur, e), !0), Ft(this), Lt(this);
                    }),
                    (e.paused = function (t) {
                        return arguments.length
                            ? (this._ps !== t &&
                                  ((this._ps = t),
                                  t
                                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                      : (Ee(),
                                        (this._ts = this._rts),
                                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== w && (this._tTime -= w)))),
                              this)
                            : this._ps;
                    }),
                    (e.startTime = function (t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && Nt(e, this, t - this._delay), this;
                        }
                        return this._start;
                    }),
                    (e.endTime = function (t) {
                        return this._start + (z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                    }),
                    (e.rawTime = function (t) {
                        var e = this.parent || this._dp;
                        return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Pt(e.rawTime(t), this) : this._tTime) : this._tTime;
                    }),
                    (e.revert = function (t) {
                        void 0 === t && (t = J);
                        var e = r;
                        return (r = t), this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents), "nested" !== this.data && kt(this), (r = e), this;
                    }),
                    (e.globalTime = function (t) {
                        for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
                        return !this.parent && this.vars.immediateRender ? -1 : n;
                    }),
                    (e.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                    }),
                    (e.repeatDelay = function (t) {
                        if (arguments.length) {
                            var e = this._time;
                            return (this._rDelay = t), Gt(this), e ? this.time(e) : this;
                        }
                        return this._rDelay;
                    }),
                    (e.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (e.seek = function (t, e) {
                        return this.totalTime(Yt(this, t), z(e));
                    }),
                    (e.restart = function (t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, z(e));
                    }),
                    (e.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                    }),
                    (e.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                    }),
                    (e.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0);
                    }),
                    (e.resume = function () {
                        return this.paused(!1);
                    }),
                    (e.reversed = function (t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                    }),
                    (e.invalidate = function () {
                        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                    }),
                    (e.isActive = function () {
                        var t,
                            e = this.parent || this._dp,
                            n = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - w));
                    }),
                    (e.eventCallback = function (t, e, n) {
                        var r = this.vars;
                        return arguments.length > 1 ? (e ? ((r[t] = e), n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t];
                    }),
                    (e.then = function (t) {
                        var e = this;
                        return new Promise(function (n) {
                            var r = S(t) ? t : yt,
                                i = function () {
                                    var t = e.then;
                                    (e.then = null), S(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), (e.then = t);
                                };
                            (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
                        });
                    }),
                    (e.kill = function () {
                        he(this);
                    }),
                    t
                );
            })();
        wt(Re.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
        var Ne = (function (n) {
            function i(e, r) {
                var i;
                return (
                    void 0 === e && (e = {}),
                    ((i = n.call(this, e) || this).labels = {}),
                    (i.smoothChildTiming = !!e.smoothChildTiming),
                    (i.autoRemoveChildren = !!e.autoRemoveChildren),
                    (i._sort = z(e.sortChildren)),
                    a && Nt(e.parent || a, t(i), r),
                    e.reversed && i.reverse(),
                    e.paused && i.paused(!0),
                    e.scrollTrigger && jt(t(i), e.scrollTrigger),
                    i
                );
            }
            e(i, n);
            var s = i.prototype;
            return (
                (s.to = function (t, e, n) {
                    return Xt(0, arguments, this), this;
                }),
                (s.from = function (t, e, n) {
                    return Xt(1, arguments, this), this;
                }),
                (s.fromTo = function (t, e, n, r) {
                    return Xt(2, arguments, this), this;
                }),
                (s.set = function (t, e, n) {
                    return (e.duration = 0), (e.parent = this), Et(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new $e(t, e, Yt(this, n), 1), this;
                }),
                (s.call = function (t, e, n) {
                    return Nt(this, $e.delayedCall(0, t, e), n);
                }),
                (s.staggerTo = function (t, e, n, r, i, a, s) {
                    return (n.duration = e), (n.stagger = n.stagger || r), (n.onComplete = a), (n.onCompleteParams = s), (n.parent = this), new $e(t, n, Yt(this, i)), this;
                }),
                (s.staggerFrom = function (t, e, n, r, i, a, s) {
                    return (n.runBackwards = 1), (Et(n).immediateRender = z(n.immediateRender)), this.staggerTo(t, e, n, r, i, a, s);
                }),
                (s.staggerFromTo = function (t, e, n, r, i, a, s, o) {
                    return (r.startAt = n), (Et(r).immediateRender = z(r.immediateRender)), this.staggerTo(t, e, r, i, a, s, o);
                }),
                (s.render = function (t, e, n) {
                    var i,
                        s,
                        o,
                        l,
                        c,
                        u,
                        d,
                        h,
                        f,
                        p,
                        m,
                        _,
                        g = this._time,
                        v = this._dirty ? this.totalDuration() : this._tDur,
                        y = this._dur,
                        b = t <= 0 ? 0 : ft(t),
                        x = this._zTime < 0 != t < 0 && (this._initted || !y);
                    if ((this !== a && b > v && t >= 0 && (b = v), b !== this._tTime || n || x)) {
                        if ((g !== this._time && y && ((b += this._time - g), (t += this._time - g)), (i = b), (f = this._start), (u = !(h = this._ts)), x && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                            if (((m = this._yoyo), (c = y + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * c + t, e, n);
                            if (
                                ((i = ft(b % c)),
                                b === v ? ((l = this._repeat), (i = y)) : ((l = ~~(b / c)) && l === b / c && ((i = y), l--), i > y && (i = y)),
                                (p = Dt(this._tTime, c)),
                                !g && this._tTime && p !== l && (p = l),
                                m && 1 & l && ((i = y - i), (_ = 1)),
                                l !== p && !this._lock)
                            ) {
                                var T = m && 1 & p,
                                    E = T === (m && 1 & l);
                                if (
                                    (l < p && (T = !T),
                                    (g = T ? 0 : y),
                                    (this._lock = 1),
                                    (this.render(g || (_ ? 0 : ft(l * c)), e, !y)._lock = 0),
                                    (this._tTime = b),
                                    !e && this.parent && de(this, "onRepeat"),
                                    this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                                    (g && g !== this._time) || u !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                )
                                    return this;
                                if (((y = this._dur), (v = this._tDur), E && ((this._lock = 2), (g = T ? y : -1e-4), this.render(g, !0), this.vars.repeatRefresh && !_ && this.invalidate()), (this._lock = 0), !this._ts && !u)) return this;
                                Ae(this, _);
                            }
                        }
                        if (
                            (this._hasPause &&
                                !this._forcing &&
                                this._lock < 2 &&
                                ((d = (function (t, e, n) {
                                    var r;
                                    if (n > e)
                                        for (r = t._first; r && r._start <= n; ) {
                                            if ("isPause" === r.data && r._start > e) return r;
                                            r = r._next;
                                        }
                                    else
                                        for (r = t._last; r && r._start >= n; ) {
                                            if ("isPause" === r.data && r._start < e) return r;
                                            r = r._prev;
                                        }
                                })(this, ft(g), ft(i))),
                                d && (b -= i - (i = d._start))),
                            (this._tTime = b),
                            (this._time = i),
                            (this._act = !h),
                            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (g = 0)),
                            !g && i && !e && (de(this, "onStart"), this._tTime !== b))
                        )
                            return this;
                        if (i >= g && t >= 0)
                            for (s = this._first; s; ) {
                                if (((o = s._next), (s._act || i >= s._start) && s._ts && d !== s)) {
                                    if (s.parent !== this) return this.render(t, e, n);
                                    if ((s.render(s._ts > 0 ? (i - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (i - s._start) * s._ts, e, n), i !== this._time || (!this._ts && !u))) {
                                        (d = 0), o && (b += this._zTime = -1e-8);
                                        break;
                                    }
                                }
                                s = o;
                            }
                        else {
                            (n = n || r), (s = this._last);
                            for (var M = t < 0 ? t : i; s; ) {
                                if (((o = s._prev), (s._act || M <= s._end) && s._ts && d !== s)) {
                                    if (s.parent !== this) return this.render(t, e, n);
                                    if ((s.render(s._ts > 0 ? (M - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (M - s._start) * s._ts, e, n), i !== this._time || (!this._ts && !u))) {
                                        (d = 0), o && (b += this._zTime = M ? -1e-8 : w);
                                        break;
                                    }
                                }
                                s = o;
                            }
                        }
                        if (d && !e && (this.pause(), (d.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1), this._ts)) return (this._start = f), Ft(this), this.render(t, e, n);
                        this._onUpdate && !e && de(this, "onUpdate", !0),
                            ((b === v && this._tTime >= this.totalDuration()) || (!b && g)) &&
                                ((f !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                                    this._lock ||
                                    ((t || !y) && ((b === v && this._ts > 0) || (!b && this._ts < 0)) && kt(this, 1),
                                    e || (t < 0 && !g) || (!b && !g && v) || (de(this, b === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())));
                    }
                    return this;
                }),
                (s.add = function (t, e) {
                    var n = this;
                    if ((L(e) || (e = Yt(this, e, t)), !(t instanceof Re))) {
                        if (I(t))
                            return (
                                t.forEach(function (t) {
                                    return n.add(t, e);
                                }),
                                this
                            );
                        if (k(t)) return this.addLabel(t, e);
                        if (!S(t)) return this;
                        t = $e.delayedCall(0, t);
                    }
                    return this !== t ? Nt(this, t, e) : this;
                }),
                (s.getChildren = function (t, e, n, r) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -y);
                    for (var i = [], a = this._first; a; ) a._start >= r && (a instanceof $e ? e && i.push(a) : (n && i.push(a), t && i.push.apply(i, a.getChildren(!0, e, n)))), (a = a._next);
                    return i;
                }),
                (s.getById = function (t) {
                    for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
                }),
                (s.remove = function (t) {
                    return k(t) ? this.removeLabel(t) : S(t) ? this.killTweensOf(t) : (Ct(this, t), t === this._recent && (this._recent = this._last), St(this));
                }),
                (s.totalTime = function (t, e) {
                    return arguments.length
                        ? ((this._forcing = 1),
                          !this._dp && this._ts && (this._start = ft(Te.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
                          n.prototype.totalTime.call(this, t, e),
                          (this._forcing = 0),
                          this)
                        : this._tTime;
                }),
                (s.addLabel = function (t, e) {
                    return (this.labels[t] = Yt(this, e)), this;
                }),
                (s.removeLabel = function (t) {
                    return delete this.labels[t], this;
                }),
                (s.addPause = function (t, e, n) {
                    var r = $e.delayedCall(0, e || Q, n);
                    return (r.data = "isPause"), (this._hasPause = 1), Nt(this, r, Yt(this, t));
                }),
                (s.removePause = function (t) {
                    var e = this._first;
                    for (t = Yt(this, t); e; ) e._start === t && "isPause" === e.data && kt(e), (e = e._next);
                }),
                (s.killTweensOf = function (t, e, n) {
                    for (var r = this.getTweensOf(t, n), i = r.length; i--; ) je !== r[i] && r[i].kill(t, e);
                    return this;
                }),
                (s.getTweensOf = function (t, e) {
                    for (var n, r = [], i = te(t), a = this._first, s = L(e); a; )
                        a instanceof $e
                            ? mt(a._targets, i) && (s ? (!je || (a._initted && a._ts)) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && r.push(a)
                            : (n = a.getTweensOf(i, e)).length && r.push.apply(r, n),
                            (a = a._next);
                    return r;
                }),
                (s.tweenTo = function (t, e) {
                    e = e || {};
                    var n,
                        r = this,
                        i = Yt(r, t),
                        a = e,
                        s = a.startAt,
                        o = a.onStart,
                        l = a.onStartParams,
                        c = a.immediateRender,
                        u = $e.to(
                            r,
                            wt(
                                {
                                    ease: e.ease || "none",
                                    lazy: !1,
                                    immediateRender: !1,
                                    time: i,
                                    overwrite: "auto",
                                    duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || w,
                                    onStart: function () {
                                        if ((r.pause(), !n)) {
                                            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                                            u._dur !== t && Vt(u, t, 0, 1).render(u._time, !0, !0), (n = 1);
                                        }
                                        o && o.apply(u, l || []);
                                    },
                                },
                                e
                            )
                        );
                    return c ? u.render(0) : u;
                }),
                (s.tweenFromTo = function (t, e, n) {
                    return this.tweenTo(e, wt({ startAt: { time: Yt(this, t) } }, n));
                }),
                (s.recent = function () {
                    return this._recent;
                }),
                (s.nextLabel = function (t) {
                    return void 0 === t && (t = this._time), ue(this, Yt(this, t));
                }),
                (s.previousLabel = function (t) {
                    return void 0 === t && (t = this._time), ue(this, Yt(this, t), 1);
                }),
                (s.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + w);
                }),
                (s.shiftChildren = function (t, e, n) {
                    void 0 === n && (n = 0);
                    for (var r, i = this._first, a = this.labels; i; ) i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
                    if (e) for (r in a) a[r] >= n && (a[r] += t);
                    return St(this);
                }),
                (s.invalidate = function () {
                    var t = this._first;
                    for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
                    return n.prototype.invalidate.call(this);
                }),
                (s.clear = function (t) {
                    void 0 === t && (t = !0);
                    for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), St(this);
                }),
                (s.totalDuration = function (t) {
                    var e,
                        n,
                        r,
                        i = 0,
                        s = this,
                        o = s._last,
                        l = y;
                    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                    if (s._dirty) {
                        for (r = s.parent; o; )
                            (e = o._prev),
                                o._dirty && o.totalDuration(),
                                (n = o._start) > l && s._sort && o._ts && !s._lock ? ((s._lock = 1), (Nt(s, o, n - o._delay, 1)._lock = 0)) : (l = n),
                                n < 0 && o._ts && ((i -= n), ((!r && !s._dp) || (r && r.smoothChildTiming)) && ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)), s.shiftChildren(-n, !1, -Infinity), (l = 0)),
                                o._end > i && o._ts && (i = o._end),
                                (o = e);
                        Vt(s, s === a && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
                    }
                    return s._tDur;
                }),
                (i.updateRoot = function (t) {
                    if ((a._ts && (gt(a, Pt(t, a)), (u = Te.frame)), Te.frame >= at)) {
                        at += g.autoSleep || 120;
                        var e = a._first;
                        if ((!e || !e._ts) && g.autoSleep && Te._listeners.length < 2) {
                            for (; e && !e._ts; ) e = e._next;
                            e || Te.sleep();
                        }
                    }
                }),
                i
            );
        })(Re);
        wt(Ne.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var je,
            Be,
            qe = function (t, e, n, r, i, a, s) {
                var o,
                    l,
                    c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m = new un(this._pt, t, e, 0, 1, rn, null, i),
                    _ = 0,
                    g = 0;
                for (m.b = n, m.e = r, n += "", (f = ~(r += "").indexOf("random(")) && (r = le(r)), a && (a((p = [n, r]), t, e), (n = p[0]), (r = p[1])), l = n.match(B) || []; (o = B.exec(r)); )
                    (u = o[0]),
                        (d = r.substring(_, o.index)),
                        c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
                        u !== l[g++] &&
                            ((h = parseFloat(l[g - 1]) || 0), (m._pt = { _next: m._pt, p: d || 1 === g ? d : ",", s: h, c: "=" === u.charAt(1) ? pt(h, u) - h : parseFloat(u) - h, m: c && c < 4 ? Math.round : 0 }), (_ = B.lastIndex));
                return (m.c = _ < r.length ? r.substring(_, r.length) : ""), (m.fp = s), (q.test(r) || f) && (m.e = 0), (this._pt = m), m;
            },
            He = function (t, e, n, r, i, a, s, o, l, c) {
                S(r) && (r = r(i || 0, t, a));
                var u,
                    d = t[e],
                    h = "get" !== n ? n : S(d) ? (l ? t[e.indexOf("set") || !S(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : d,
                    f = S(d) ? (l ? Ze : Qe) : Ke;
                if ((k(r) && (~r.indexOf("random(") && (r = le(r)), "=" === r.charAt(1) && ((u = pt(h, r) + (Kt(h) || 0)) || 0 === u) && (r = u)), !c || h !== r || Be))
                    return isNaN(h * r) || "" === r
                        ? (!d && !(e in t) && X(e, r), qe.call(this, t, e, h, r, f, o || g.stringFilter, l))
                        : ((u = new un(this._pt, t, e, +h || 0, r - (h || 0), "boolean" == typeof d ? nn : en, 0, f)), l && (u.fp = l), s && u.modifier(s, this, t), (this._pt = u));
            },
            Ve = function (t, e, n, r, i, a) {
                var s, o, l, c;
                if (
                    rt[t] &&
                    !1 !==
                        (s = new rt[t]()).init(
                            i,
                            s.rawVars
                                ? e[t]
                                : (function (t, e, n, r, i) {
                                      if ((S(t) && (t = Ye(t, i, e, n, r)), !O(t) || (t.style && t.nodeType) || I(t) || F(t))) return k(t) ? Ye(t, i, e, n, r) : t;
                                      var a,
                                          s = {};
                                      for (a in t) s[a] = Ye(t[a], i, e, n, r);
                                      return s;
                                  })(e[t], r, i, a, n),
                            n,
                            r,
                            a
                        ) &&
                    ((n._pt = o = new un(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)), n !== d)
                )
                    for (l = n._ptLookup[n._targets.indexOf(i)], c = s._props.length; c--; ) l[s._props[c]] = o;
                return s;
            },
            Ge = function t(e, i) {
                var s,
                    o,
                    l,
                    c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m,
                    _,
                    g,
                    b,
                    x = e.vars,
                    T = x.ease,
                    E = x.startAt,
                    M = x.immediateRender,
                    C = x.lazy,
                    k = x.onUpdate,
                    S = x.onUpdateParams,
                    L = x.callbackScope,
                    A = x.runBackwards,
                    O = x.yoyoEase,
                    D = x.keyframes,
                    P = x.autoRevert,
                    F = e._dur,
                    I = e._startAt,
                    R = e._targets,
                    N = e.parent,
                    j = N && "nested" === N.data ? N.parent._targets : R,
                    B = "auto" === e._overwrite && !n,
                    q = e.timeline;
                if (
                    (q && (!D || !T) && (T = "none"),
                    (e._ease = Oe(T, v.ease)),
                    (e._yEase = O ? Le(Oe(!0 === O ? T : O, v.ease)) : 0),
                    O && e._yoyo && !e._repeat && ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
                    (e._from = !q && !!x.runBackwards),
                    !q || (D && !x.stagger))
                ) {
                    if (((g = (f = R[0] ? ct(R[0]).harness : 0) && x[f.prop]), (s = Tt(x, tt)), I && (I.revert(A && F ? J : Z), (I._lazy = 0)), E)) {
                        if (
                            (kt((e._startAt = $e.set(R, wt({ data: "isStart", overwrite: !1, parent: N, immediateRender: !0, lazy: z(C), startAt: null, delay: 0, onUpdate: k, onUpdateParams: S, callbackScope: L, stagger: 0 }, E)))),
                            i < 0 && (r || (!M && !P)) && e._startAt.revert(J),
                            M && F && i <= 0)
                        )
                            return void (i && (e._zTime = i));
                    } else if (A && F && !I)
                        if (
                            (i && (M = !1),
                            (l = wt({ overwrite: !1, data: "isFromStart", lazy: M && z(C), immediateRender: M, stagger: 0, parent: N }, s)),
                            g && (l[f.prop] = g),
                            kt((e._startAt = $e.set(R, l))),
                            i < 0 && (r ? e._startAt.revert(J) : e._startAt.render(-1, !0)),
                            (e._zTime = i),
                            M)
                        ) {
                            if (!i) return;
                        } else t(e._startAt, w);
                    for (e._pt = e._ptCache = 0, C = (F && z(C)) || (C && !F), o = 0; o < R.length; o++) {
                        if (
                            ((h = (u = R[o])._gsap || lt(R)[o]._gsap),
                            (e._ptLookup[o] = m = {}),
                            nt[h.id] && et.length && _t(),
                            (_ = j === R ? o : j.indexOf(u)),
                            f &&
                                !1 !== (p = new f()).init(u, g || s, e, _, j) &&
                                ((e._pt = c = new un(e._pt, u, p.name, 0, 1, p.render, p, 0, p.priority)),
                                p._props.forEach(function (t) {
                                    m[t] = c;
                                }),
                                p.priority && (d = 1)),
                            !f || g)
                        )
                            for (l in s) rt[l] && (p = Ve(l, s, e, _, u, j)) ? p.priority && (d = 1) : (m[l] = c = He.call(e, u, l, "get", s[l], _, j, 0, x.stringFilter));
                        e._op && e._op[o] && e.kill(u, e._op[o]), B && e._pt && ((je = e), a.killTweensOf(u, m, e.globalTime(i)), (b = !e.parent), (je = 0)), e._pt && C && (nt[h.id] = 1);
                    }
                    d && cn(e), e._onInit && e._onInit(e);
                }
                (e._onUpdate = k), (e._initted = (!e._op || e._pt) && !b), D && i <= 0 && q.render(y, !0, !0);
            },
            Ue = function (t, e, n, r) {
                var i,
                    a,
                    s = e.ease || r || "power1.inOut";
                if (I(e))
                    (a = n[t] || (n[t] = [])),
                        e.forEach(function (t, n) {
                            return a.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
                        });
                else for (i in e) (a = n[i] || (n[i] = [])), "ease" === i || a.push({ t: parseFloat(t), v: e[i], e: s });
            },
            Ye = function (t, e, n, r, i) {
                return S(t) ? t.call(e, n, r, i) : k(t) && ~t.indexOf("random(") ? le(t) : t;
            },
            Xe = ot + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            We = {};
        dt(Xe + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
            return (We[t] = 1);
        });
        var $e = (function (i) {
            function s(e, r, s, o) {
                var l;
                "number" == typeof r && ((s.duration = r), (r = s), (s = null));
                var c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m,
                    _,
                    v = (l = i.call(this, o ? r : Et(r)) || this).vars,
                    y = v.duration,
                    w = v.delay,
                    b = v.immediateRender,
                    x = v.stagger,
                    T = v.overwrite,
                    E = v.keyframes,
                    M = v.defaults,
                    C = v.scrollTrigger,
                    k = v.yoyoEase,
                    S = r.parent || a,
                    A = (I(e) || F(e) ? L(e[0]) : "length" in r) ? [e] : te(e);
                if (((l._targets = A.length ? lt(A) : W("GSAP target " + e + " not found. https://greensock.com", !g.nullTargetWarn) || []), (l._ptLookup = []), (l._overwrite = T), E || x || P(y) || P(w))) {
                    if (((r = l.vars), (c = l.timeline = new Ne({ data: "nested", defaults: M || {} })).kill(), (c.parent = c._dp = t(l)), (c._start = 0), x || P(y) || P(w))) {
                        if (((h = A.length), (m = x && re(x)), O(x))) for (f in x) ~Xe.indexOf(f) && (_ || (_ = {}), (_[f] = x[f]));
                        for (u = 0; u < h; u++)
                            ((d = Tt(r, We)).stagger = 0),
                                k && (d.yoyoEase = k),
                                _ && bt(d, _),
                                (p = A[u]),
                                (d.duration = +Ye(y, t(l), u, p, A)),
                                (d.delay = (+Ye(w, t(l), u, p, A) || 0) - l._delay),
                                !x && 1 === h && d.delay && ((l._delay = w = d.delay), (l._start += w), (d.delay = 0)),
                                c.to(p, d, m ? m(u, p, A) : 0),
                                (c._ease = Me.none);
                        c.duration() ? (y = w = 0) : (l.timeline = 0);
                    } else if (E) {
                        Et(wt(c.vars.defaults, { ease: "none" })), (c._ease = Oe(E.ease || r.ease || "none"));
                        var D,
                            R,
                            N,
                            j = 0;
                        if (I(E))
                            E.forEach(function (t) {
                                return c.to(A, t, ">");
                            }),
                                c.duration();
                        else {
                            for (f in ((d = {}), E)) "ease" === f || "easeEach" === f || Ue(f, E[f], d, E.easeEach);
                            for (f in d)
                                for (
                                    D = d[f].sort(function (t, e) {
                                        return t.t - e.t;
                                    }),
                                        j = 0,
                                        u = 0;
                                    u < D.length;
                                    u++
                                )
                                    ((N = { ease: (R = D[u]).e, duration: ((R.t - (u ? D[u - 1].t : 0)) / 100) * y })[f] = R.v), c.to(A, N, j), (j += N.duration);
                            c.duration() < y && c.to({}, { duration: y - c.duration() });
                        }
                    }
                    y || l.duration((y = c.duration()));
                } else l.timeline = 0;
                return (
                    !0 !== T || n || ((je = t(l)), a.killTweensOf(A), (je = 0)),
                    Nt(S, t(l), s),
                    r.reversed && l.reverse(),
                    r.paused && l.paused(!0),
                    (b || (!y && !E && l._start === ft(S._time) && z(b) && Ot(t(l)) && "nested" !== S.data)) && ((l._tTime = -1e-8), l.render(Math.max(0, -w))),
                    C && jt(t(l), C),
                    l
                );
            }
            e(s, i);
            var o = s.prototype;
            return (
                (o.render = function (t, e, n) {
                    var i,
                        a,
                        s,
                        o,
                        l,
                        c,
                        u,
                        d,
                        h,
                        f = this._time,
                        p = this._tDur,
                        m = this._dur,
                        _ = t < 0,
                        g = t > p - w && !_ ? p : t < w ? 0 : t;
                    if (m) {
                        if (g !== this._tTime || !t || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== _)) {
                            if (((i = g), (d = this.timeline), this._repeat)) {
                                if (((o = m + this._rDelay), this._repeat < -1 && _)) return this.totalTime(100 * o + t, e, n);
                                if (
                                    ((i = ft(g % o)),
                                    g === p ? ((s = this._repeat), (i = m)) : ((s = ~~(g / o)) && s === g / o && ((i = m), s--), i > m && (i = m)),
                                    (c = this._yoyo && 1 & s) && ((h = this._yEase), (i = m - i)),
                                    (l = Dt(this._tTime, o)),
                                    i === f && !n && this._initted)
                                )
                                    return (this._tTime = g), this;
                                s !== l && (d && this._yEase && Ae(d, c), !this.vars.repeatRefresh || c || this._lock || ((this._lock = n = 1), (this.render(ft(o * s), !0).invalidate()._lock = 0)));
                            }
                            if (!this._initted) {
                                if (Bt(this, _ ? t : i, n, e)) return (this._tTime = 0), this;
                                if (f !== this._time) return this;
                                if (m !== this._dur) return this.render(t, e, n);
                            }
                            if (
                                ((this._tTime = g),
                                (this._time = i),
                                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                (this.ratio = u = (h || this._ease)(i / m)),
                                this._from && (this.ratio = u = 1 - u),
                                i && !f && !e && (de(this, "onStart"), this._tTime !== g))
                            )
                                return this;
                            for (a = this._pt; a; ) a.r(u, a.d), (a = a._next);
                            (d && d.render(t < 0 ? t : !i && c ? -1e-8 : d._dur * d._ease(i / this._dur), e, n)) || (this._startAt && (this._zTime = t)),
                                this._onUpdate && !e && (_ && At(this, t, 0, n), de(this, "onUpdate")),
                                this._repeat && s !== l && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"),
                                (g !== this._tDur && g) ||
                                    this._tTime !== g ||
                                    (_ && !this._onUpdate && At(this, t, 0, !0),
                                    (t || !m) && ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) && kt(this, 1),
                                    e || (_ && !f) || (!g && !f) || (de(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()));
                        }
                    } else
                        !(function (t, e, n, i) {
                            var a,
                                s,
                                o,
                                l = t.ratio,
                                c = e < 0 || (!e && ((!t._start && qt(t) && (t._initted || !Ht(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Ht(t)))) ? 0 : 1,
                                u = t._rDelay,
                                d = 0;
                            if (
                                (u && t._repeat && ((d = $t(0, t._tDur, e)), (s = Dt(d, u)), t._yoyo && 1 & s && (c = 1 - c), s !== Dt(t._tTime, u) && ((l = 1 - c), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                c !== l || r || i || t._zTime === w || (!e && t._zTime))
                            ) {
                                if (!t._initted && Bt(t, e, i, n)) return;
                                for (o = t._zTime, t._zTime = e || (n ? w : 0), n || (n = e && !o), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = d, a = t._pt; a; ) a.r(c, a.d), (a = a._next);
                                e < 0 && At(t, e, 0, !0),
                                    t._onUpdate && !n && de(t, "onUpdate"),
                                    d && t._repeat && !n && t.parent && de(t, "onRepeat"),
                                    (e >= t._tDur || e < 0) && t.ratio === c && (c && kt(t, 1), n || (de(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                            } else t._zTime || (t._zTime = e);
                        })(this, t, e, n);
                    return this;
                }),
                (o.targets = function () {
                    return this._targets;
                }),
                (o.invalidate = function () {
                    return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), i.prototype.invalidate.call(this);
                }),
                (o.resetTo = function (t, e, n, r) {
                    h || Te.wake(), this._ts || this.play();
                    var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return (
                        this._initted || Ge(this, i),
                        (function (t, e, n, r, i, a, s) {
                            var o,
                                l,
                                c,
                                u,
                                d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                            if (!d)
                                for (d = t._ptCache[e] = [], c = t._ptLookup, u = t._targets.length; u--; ) {
                                    if ((o = c[u][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                                    if (!o) return (Be = 1), (t.vars[e] = "+=0"), Ge(t, s), (Be = 0), 1;
                                    d.push(o);
                                }
                            for (u = d.length; u--; ) ((o = (l = d[u])._pt || l).s = (!r && 0 !== r) || i ? o.s + (r || 0) + a * o.c : r), (o.c = n - o.s), l.e && (l.e = ht(n) + Kt(l.e)), l.b && (l.b = o.s + Kt(l.b));
                        })(this, t, e, n, r, this._ease(i / this._dur), i)
                            ? this.resetTo(t, e, n, r)
                            : (It(this, 0), this.parent || Mt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                    );
                }),
                (o.kill = function (t, e) {
                    if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? he(this) : this;
                    if (this.timeline) {
                        var n = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || he(this), this.parent && n !== this.timeline.totalDuration() && Vt(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
                    }
                    var r,
                        i,
                        a,
                        s,
                        o,
                        l,
                        c,
                        u = this._targets,
                        d = t ? te(t) : u,
                        h = this._ptLookup,
                        f = this._pt;
                    if (
                        (!e || "all" === e) &&
                        (function (t, e) {
                            for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; );
                            return n < 0;
                        })(u, d)
                    )
                        return "all" === e && (this._pt = 0), he(this);
                    for (
                        r = this._op = this._op || [],
                            "all" !== e &&
                                (k(e) &&
                                    ((o = {}),
                                    dt(e, function (t) {
                                        return (o[t] = 1);
                                    }),
                                    (e = o)),
                                (e = (function (t, e) {
                                    var n,
                                        r,
                                        i,
                                        a,
                                        s = t[0] ? ct(t[0]).harness : 0,
                                        o = s && s.aliases;
                                    if (!o) return e;
                                    for (r in ((n = bt({}, e)), o)) if ((r in n)) for (i = (a = o[r].split(",")).length; i--; ) n[a[i]] = n[r];
                                    return n;
                                })(u, e))),
                            c = u.length;
                        c--;

                    )
                        if (~d.indexOf(u[c]))
                            for (o in ((i = h[c]), "all" === e ? ((r[c] = e), (s = i), (a = {})) : ((a = r[c] = r[c] || {}), (s = e)), s))
                                (l = i && i[o]) && (("kill" in l.d && !0 !== l.d.kill(o)) || Ct(this, l, "_pt"), delete i[o]), "all" !== a && (a[o] = 1);
                    return this._initted && !this._pt && f && he(this), this;
                }),
                (s.to = function (t, e) {
                    return new s(t, e, arguments[2]);
                }),
                (s.from = function (t, e) {
                    return Xt(1, arguments);
                }),
                (s.delayedCall = function (t, e, n, r) {
                    return new s(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: r });
                }),
                (s.fromTo = function (t, e, n) {
                    return Xt(2, arguments);
                }),
                (s.set = function (t, e) {
                    return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
                }),
                (s.killTweensOf = function (t, e, n) {
                    return a.killTweensOf(t, e, n);
                }),
                s
            );
        })(Re);
        wt($e.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            dt("staggerTo,staggerFrom,staggerFromTo", function (t) {
                $e[t] = function () {
                    var e = new Ne(),
                        n = Qt.call(arguments, 0);
                    return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
                };
            });
        var Ke = function (t, e, n) {
                return (t[e] = n);
            },
            Qe = function (t, e, n) {
                return t[e](n);
            },
            Ze = function (t, e, n, r) {
                return t[e](r.fp, n);
            },
            Je = function (t, e, n) {
                return t.setAttribute(e, n);
            },
            tn = function (t, e) {
                return S(t[e]) ? Qe : A(t[e]) && t.setAttribute ? Je : Ke;
            },
            en = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
            },
            nn = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            rn = function (t, e) {
                var n = e._pt,
                    r = "";
                if (!t && e.b) r = e.b;
                else if (1 === t && e.e) r = e.e;
                else {
                    for (; n; ) (r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r), (n = n._next);
                    r += e.c;
                }
                e.set(e.t, e.p, r, e);
            },
            an = function (t, e) {
                for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            },
            sn = function (t, e, n, r) {
                for (var i, a = this._pt; a; ) (i = a._next), a.p === r && a.modifier(t, e, n), (a = i);
            },
            on = function (t) {
                for (var e, n, r = this._pt; r; ) (n = r._next), (r.p === t && !r.op) || r.op === t ? Ct(this, r, "_pt") : r.dep || (e = 1), (r = n);
                return !e;
            },
            ln = function (t, e, n, r) {
                r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
            },
            cn = function (t) {
                for (var e, n, r, i, a = t._pt; a; ) {
                    for (e = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                    (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a), (a._next = n) ? (n._prev = a) : (i = a), (a = e);
                }
                t._pt = r;
            },
            un = (function () {
                function t(t, e, n, r, i, a, s, o, l) {
                    (this.t = e), (this.s = r), (this.c = i), (this.p = n), (this.r = a || en), (this.d = s || this), (this.set = o || Ke), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
                }
                return (
                    (t.prototype.modifier = function (t, e, n) {
                        (this.mSet = this.mSet || this.set), (this.set = ln), (this.m = t), (this.mt = n), (this.tween = e);
                    }),
                    t
                );
            })();
        dt(
            ot +
                "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
                return (tt[t] = 1);
            }
        ),
            (G.TweenMax = G.TweenLite = $e),
            (G.TimelineLite = G.TimelineMax = Ne),
            (a = new Ne({ sortChildren: !1, defaults: v, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
            (g.stringFilter = xe);
        var dn = [],
            hn = {},
            fn = [],
            pn = 0,
            mn = function (t) {
                return (hn[t] || fn).map(function (t) {
                    return t();
                });
            },
            _n = function () {
                var t = Date.now(),
                    e = [];
                t - pn > 2 &&
                    (mn("matchMediaInit"),
                    dn.forEach(function (t) {
                        var n,
                            r,
                            i,
                            a,
                            o = t.queries,
                            l = t.conditions;
                        for (r in o) (n = s.matchMedia(o[r]).matches) && (i = 1), n !== l[r] && ((l[r] = n), (a = 1));
                        a && (t.revert(), i && e.push(t));
                    }),
                    mn("matchMediaRevert"),
                    e.forEach(function (t) {
                        return t.onMatch(t);
                    }),
                    (pn = t),
                    mn("matchMedia"));
            },
            gn = (function () {
                function t(t, e) {
                    (this.selector = e && ee(e)), (this.data = []), (this._r = []), (this.isReverted = !1), t && this.add(t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, n) {
                        S(t) && ((n = e), (e = t), (t = S));
                        var r = this,
                            a = function () {
                                var t,
                                    a = i,
                                    s = r.selector;
                                return a && a.data.push(r), n && (r.selector = ee(n)), (i = r), (t = e.apply(r, arguments)), S(t) && r._r.push(t), (i = a), (r.selector = s), (r.isReverted = !1), t;
                            };
                        return (r.last = a), t === S ? a(r) : t ? (r[t] = a) : a;
                    }),
                    (e.ignore = function (t) {
                        var e = i;
                        (i = null), t(this), (i = e);
                    }),
                    (e.getTweens = function () {
                        var e = [];
                        return (
                            this.data.forEach(function (n) {
                                return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof $e && n._targets[0] !== n.vars.onComplete && e.push(n);
                            }),
                            e
                        );
                    }),
                    (e.clear = function () {
                        this._r.length = this.data.length = 0;
                    }),
                    (e.kill = function (t, e) {
                        var n = this;
                        if (
                            (t
                                ? (this.getTweens()
                                      .map(function (t) {
                                          return { g: t.globalTime(0), t: t };
                                      })
                                      .sort(function (t, e) {
                                          return e.g - t.g || -1;
                                      })
                                      .forEach(function (e) {
                                          return e.t.revert(t);
                                      }),
                                  this.data.forEach(function (e) {
                                      return !(e instanceof Re) && e.revert && e.revert(t);
                                  }),
                                  this._r.forEach(function (e) {
                                      return e(t, n);
                                  }),
                                  (this.isReverted = !0))
                                : this.data.forEach(function (t) {
                                      return t.kill && t.kill();
                                  }),
                            this.clear(),
                            e)
                        ) {
                            var r = dn.indexOf(this);
                            ~r && dn.splice(r, 1);
                        }
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    t
                );
            })(),
            vn = (function () {
                function t(t) {
                    (this.contexts = []), (this.scope = t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, n) {
                        O(t) || (t = { matches: t });
                        var r,
                            i,
                            a,
                            o = new gn(0, n || this.scope),
                            l = (o.conditions = {});
                        for (i in (this.contexts.push(o), (e = o.add("onMatch", e)), (o.queries = t), t))
                            "all" === i ? (a = 1) : (r = s.matchMedia(t[i])) && (dn.indexOf(o) < 0 && dn.push(o), (l[i] = r.matches) && (a = 1), r.addListener ? r.addListener(_n) : r.addEventListener("change", _n));
                        return a && e(o), this;
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    (e.kill = function (t) {
                        this.contexts.forEach(function (e) {
                            return e.kill(t, !0);
                        });
                    }),
                    t
                );
            })(),
            yn = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e.forEach(function (t) {
                        return fe(t);
                    });
                },
                timeline: function (t) {
                    return new Ne(t);
                },
                getTweensOf: function (t, e) {
                    return a.getTweensOf(t, e);
                },
                getProperty: function (t, e, n, r) {
                    k(t) && (t = te(t)[0]);
                    var i = ct(t || {}).get,
                        a = n ? yt : vt;
                    return (
                        "native" === n && (n = ""),
                        t
                            ? e
                                ? a(((rt[e] && rt[e].get) || i)(t, e, n, r))
                                : function (e, n, r) {
                                      return a(((rt[e] && rt[e].get) || i)(t, e, n, r));
                                  }
                            : t
                    );
                },
                quickSetter: function (t, e, n) {
                    if ((t = te(t)).length > 1) {
                        var r = t.map(function (t) {
                                return xn.quickSetter(t, e, n);
                            }),
                            i = r.length;
                        return function (t) {
                            for (var e = i; e--; ) r[e](t);
                        };
                    }
                    t = t[0] || {};
                    var a = rt[e],
                        s = ct(t),
                        o = (s.harness && (s.harness.aliases || {})[e]) || e,
                        l = a
                            ? function (e) {
                                  var r = new a();
                                  (d._pt = 0), r.init(t, n ? e + n : e, d, 0, [t]), r.render(1, r), d._pt && an(1, d);
                              }
                            : s.set(t, o);
                    return a
                        ? l
                        : function (e) {
                              return l(t, o, n ? e + n : e, s, 1);
                          };
                },
                quickTo: function (t, e, n) {
                    var r,
                        i = xn.to(t, bt((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})),
                        a = function (t, n, r) {
                            return i.resetTo(e, t, n, r);
                        };
                    return (a.tween = i), a;
                },
                isTweening: function (t) {
                    return a.getTweensOf(t, !0).length > 0;
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = Oe(t.ease, v.ease)), xt(v, t || {});
                },
                config: function (t) {
                    return xt(g, t || {});
                },
                registerEffect: function (t) {
                    var e = t.name,
                        n = t.effect,
                        r = t.plugins,
                        i = t.defaults,
                        a = t.extendTimeline;
                    (r || "").split(",").forEach(function (t) {
                        return t && !rt[t] && !G[t] && W(e + " effect requires " + t + " plugin.");
                    }),
                        (it[e] = function (t, e, r) {
                            return n(te(t), wt(e || {}, i), r);
                        }),
                        a &&
                            (Ne.prototype[e] = function (t, n, r) {
                                return this.add(it[e](t, O(n) ? n : (r = n) && {}, this), r);
                            });
                },
                registerEase: function (t, e) {
                    Me[t] = Oe(e);
                },
                parseEase: function (t, e) {
                    return arguments.length ? Oe(t, e) : Me;
                },
                getById: function (t) {
                    return a.getById(t);
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var n,
                        r,
                        i = new Ne(t);
                    for (i.smoothChildTiming = z(t.smoothChildTiming), a.remove(i), i._dp = 0, i._time = i._tTime = a._time, n = a._first; n; )
                        (r = n._next), (!e && !n._dur && n instanceof $e && n.vars.onComplete === n._targets[0]) || Nt(i, n, n._start - n._delay), (n = r);
                    return Nt(a, i, 0), i;
                },
                context: function (t, e) {
                    return t ? new gn(t, e) : i;
                },
                matchMedia: function (t) {
                    return new vn(t);
                },
                matchMediaRefresh: function () {
                    return (
                        dn.forEach(function (t) {
                            var e,
                                n,
                                r = t.conditions;
                            for (n in r) r[n] && ((r[n] = !1), (e = 1));
                            e && t.revert();
                        }) || _n()
                    );
                },
                addEventListener: function (t, e) {
                    var n = hn[t] || (hn[t] = []);
                    ~n.indexOf(e) || n.push(e);
                },
                removeEventListener: function (t, e) {
                    var n = hn[t],
                        r = n && n.indexOf(e);
                    r >= 0 && n.splice(r, 1);
                },
                utils: {
                    wrap: function t(e, n, r) {
                        var i = n - e;
                        return I(e)
                            ? oe(e, t(0, e.length), n)
                            : Wt(r, function (t) {
                                  return ((i + ((t - e) % i)) % i) + e;
                              });
                    },
                    wrapYoyo: function t(e, n, r) {
                        var i = n - e,
                            a = 2 * i;
                        return I(e)
                            ? oe(e, t(0, e.length - 1), n)
                            : Wt(r, function (t) {
                                  return e + ((t = (a + ((t - e) % a)) % a || 0) > i ? a - t : t);
                              });
                    },
                    distribute: re,
                    random: se,
                    snap: ae,
                    normalize: function (t, e, n) {
                        return ce(t, e, 0, 1, n);
                    },
                    getUnit: Kt,
                    clamp: function (t, e, n) {
                        return Wt(n, function (n) {
                            return $t(t, e, n);
                        });
                    },
                    splitColor: ge,
                    toArray: te,
                    selector: ee,
                    mapRange: ce,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    unitize: function (t, e) {
                        return function (n) {
                            return t(parseFloat(n)) + (e || Kt(n));
                        };
                    },
                    interpolate: function t(e, n, r, i) {
                        var a = isNaN(e + n)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * n;
                              };
                        if (!a) {
                            var s,
                                o,
                                l,
                                c,
                                u,
                                d = k(e),
                                h = {};
                            if ((!0 === r && (i = 1) && (r = null), d)) (e = { p: e }), (n = { p: n });
                            else if (I(e) && !I(n)) {
                                for (l = [], c = e.length, u = c - 2, o = 1; o < c; o++) l.push(t(e[o - 1], e[o]));
                                c--,
                                    (a = function (t) {
                                        t *= c;
                                        var e = Math.min(u, ~~t);
                                        return l[e](t - e);
                                    }),
                                    (r = n);
                            } else i || (e = bt(I(e) ? [] : {}, e));
                            if (!l) {
                                for (s in n) He.call(h, e, s, "get", n[s]);
                                a = function (t) {
                                    return an(t, h) || (d ? e.p : e);
                                };
                            }
                        }
                        return Wt(r, a);
                    },
                    shuffle: ne,
                },
                install: Y,
                effects: it,
                ticker: Te,
                updateRoot: Ne.updateRoot,
                plugins: rt,
                globalTimeline: a,
                core: {
                    PropTween: un,
                    globals: K,
                    Tween: $e,
                    Timeline: Ne,
                    Animation: Re,
                    getCache: ct,
                    _removeLinkedListItem: Ct,
                    reverting: function () {
                        return r;
                    },
                    context: function (t) {
                        return t && i && (i.data.push(t), (t._ctx = i)), i;
                    },
                    suppressOverwrites: function (t) {
                        return (n = t);
                    },
                },
            };
        dt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
            return (yn[t] = $e[t]);
        }),
            Te.add(Ne.updateRoot),
            (d = yn.to({}, { duration: 0 }));
        var wn = function (t, e) {
                for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
                return n;
            },
            bn = function (t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function (t, n, r) {
                        r._onInit = function (t) {
                            var r, i;
                            if (
                                (k(n) &&
                                    ((r = {}),
                                    dt(n, function (t) {
                                        return (r[t] = 1);
                                    }),
                                    (n = r)),
                                e)
                            ) {
                                for (i in ((r = {}), n)) r[i] = e(n[i]);
                                n = r;
                            }
                            !(function (t, e) {
                                var n,
                                    r,
                                    i,
                                    a = t._targets;
                                for (n in e) for (r = a.length; r--; ) (i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = wn(i, n)), i && i.modifier && i.modifier(e[n], t, a[r], n));
                            })(t, n);
                        };
                    },
                };
            },
            xn =
                yn.registerPlugin(
                    {
                        name: "attr",
                        init: function (t, e, n, r, i) {
                            var a, s, o;
                            for (a in ((this.tween = n), e)) (o = t.getAttribute(a) || ""), ((s = this.add(t, "setAttribute", (o || 0) + "", e[a], r, i, 0, 0, a)).op = a), (s.b = o), this._props.push(a);
                        },
                        render: function (t, e) {
                            for (var n = e._pt; n; ) r ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
                        },
                    },
                    {
                        name: "endArray",
                        init: function (t, e) {
                            for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
                        },
                    },
                    bn("roundProps", ie),
                    bn("modifiers"),
                    bn("snap", ae)
                ) || yn;
        ($e.version = Ne.version = xn.version = "3.11.0"), (c = 1), D() && Ee();
        Me.Power0, Me.Power1, Me.Power2, Me.Power3, Me.Power4, Me.Linear, Me.Quad, Me.Cubic, Me.Quart, Me.Quint, Me.Strong, Me.Elastic, Me.Back, Me.SteppedEase, Me.Bounce, Me.Sine, Me.Expo, Me.Circ;
        var Tn,
            En,
            Mn,
            Cn,
            kn,
            Sn,
            Ln,
            An,
            On = {},
            zn = 180 / Math.PI,
            Dn = Math.PI / 180,
            Pn = Math.atan2,
            Fn = /([A-Z])/g,
            In = /(left|right|width|margin|padding|x)/i,
            Rn = /[\s,\(]\S/,
            Nn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
            jn = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            Bn = function (t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            qn = function (t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
            },
            Hn = function (t, e) {
                var n = e.s + e.c * t;
                e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
            },
            Vn = function (t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e);
            },
            Gn = function (t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
            },
            Un = function (t, e, n) {
                return (t.style[e] = n);
            },
            Yn = function (t, e, n) {
                return t.style.setProperty(e, n);
            },
            Xn = function (t, e, n) {
                return (t._gsap[e] = n);
            },
            Wn = function (t, e, n) {
                return (t._gsap.scaleX = t._gsap.scaleY = n);
            },
            $n = function (t, e, n, r, i) {
                var a = t._gsap;
                (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
            },
            Kn = function (t, e, n, r, i) {
                var a = t._gsap;
                (a[e] = n), a.renderTransform(i, a);
            },
            Qn = "transform",
            Zn = Qn + "Origin",
            Jn = function (t) {
                var e = this,
                    n = this.target,
                    r = n.style;
                if (t in On) {
                    if (
                        ((this.tfm = this.tfm || {}),
                        "transform" !== t &&
                            (~(t = Nn[t] || t).indexOf(",")
                                ? t.split(",").forEach(function (t) {
                                      return (e.tfm[t] = gr(n, t));
                                  })
                                : (this.tfm[t] = n._gsap.x ? n._gsap[t] : gr(n, t))),
                        n._gsap.svg && (this.svg = n.getAttribute(t) || ""),
                        this.props.indexOf(Qn) >= 0)
                    )
                        return;
                    t = Qn;
                }
                r && this.props.push(t, r[t]);
            },
            tr = function (t) {
                t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
            },
            er = function () {
                var t,
                    e,
                    n = this.props,
                    r = this.target,
                    i = r.style,
                    a = r._gsap;
                for (t = 0; t < n.length; t += 2) n[t + 1] ? (i[n[t]] = n[t + 1]) : i.removeProperty(n[t].replace(Fn, "-$1").toLowerCase());
                if (this.tfm) {
                    for (e in (a.svg && r.setAttribute("transform", this.svg || ""), this.tfm)) a[e] = this.tfm[e];
                    !(t = Ln()) || t.isStart || i[Qn] || (tr(i), (a.uncache = 1));
                }
            },
            nr = function (t, e) {
                var n = { target: t, props: [], revert: er, save: Jn };
                return (
                    e &&
                        e.split(",").forEach(function (t) {
                            return n.save(t);
                        }),
                    n
                );
            },
            rr = function (t, e) {
                var n = En.createElementNS ? En.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : En.createElement(t);
                return n.style ? n : En.createElement(t);
            },
            ir = function t(e, n, r) {
                var i = getComputedStyle(e);
                return i[n] || i.getPropertyValue(n.replace(Fn, "-$1").toLowerCase()) || i.getPropertyValue(n) || (!r && t(e, sr(n) || n, 1)) || "";
            },
            ar = "O,Moz,ms,Ms,Webkit".split(","),
            sr = function (t, e, n) {
                var r = (e || kn).style,
                    i = 5;
                if (t in r && !n) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ar[i] + t in r); );
                return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ar[i] : "") + t;
            },
            or = function () {
                "undefined" != typeof window &&
                    window.document &&
                    ((Tn = window),
                    (En = Tn.document),
                    (Mn = En.documentElement),
                    (kn = rr("div") || { style: {} }),
                    rr("div"),
                    (Qn = sr(Qn)),
                    (Zn = Qn + "Origin"),
                    (kn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                    (An = !!sr("perspective")),
                    (Ln = xn.core.reverting),
                    (Cn = 1));
            },
            lr = function t(e) {
                var n,
                    r = rr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                    i = this.parentNode,
                    a = this.nextSibling,
                    s = this.style.cssText;
                if ((Mn.appendChild(r), r.appendChild(this), (this.style.display = "block"), e))
                    try {
                        (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                    } catch (t) {}
                else this._gsapBBox && (n = this._gsapBBox());
                return i && (a ? i.insertBefore(this, a) : i.appendChild(this)), Mn.removeChild(r), (this.style.cssText = s), n;
            },
            cr = function (t, e) {
                for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
            },
            ur = function (t) {
                var e;
                try {
                    e = t.getBBox();
                } catch (n) {
                    e = lr.call(t, !0);
                }
                return (e && (e.width || e.height)) || t.getBBox === lr || (e = lr.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +cr(t, ["x", "cx", "x1"]) || 0, y: +cr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
            },
            dr = function (t) {
                return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ur(t));
            },
            hr = function (t, e) {
                if (e) {
                    var n = t.style;
                    e in On && e !== Zn && (e = Qn), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(Fn, "-$1").toLowerCase())) : n.removeAttribute(e);
                }
            },
            fr = function (t, e, n, r, i, a) {
                var s = new un(t._pt, e, n, 0, 1, a ? Gn : Vn);
                return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
            },
            pr = { deg: 1, rad: 1, turn: 1 },
            mr = { grid: 1, flex: 1 },
            _r = function t(e, n, r, i) {
                var a,
                    s,
                    o,
                    l,
                    c = parseFloat(r) || 0,
                    u = (r + "").trim().substr((c + "").length) || "px",
                    d = kn.style,
                    h = In.test(n),
                    f = "svg" === e.tagName.toLowerCase(),
                    p = (f ? "client" : "offset") + (h ? "Width" : "Height"),
                    m = 100,
                    _ = "px" === i,
                    g = "%" === i;
                return i === u || !c || pr[i] || pr[u]
                    ? c
                    : ("px" !== u && !_ && (c = t(e, n, r, "px")),
                      (l = e.getCTM && dr(e)),
                      (!g && "%" !== u) || (!On[n] && !~n.indexOf("adius"))
                          ? ((d[h ? "width" : "height"] = m + (_ ? u : i)),
                            (s = ~n.indexOf("adius") || ("em" === i && e.appendChild && !f) ? e : e.parentNode),
                            l && (s = (e.ownerSVGElement || {}).parentNode),
                            (s && s !== En && s.appendChild) || (s = En.body),
                            (o = s._gsap) && g && o.width && h && o.time === Te.time && !o.uncache
                                ? ht((c / o.width) * m)
                                : ((g || "%" === u) && !mr[ir(s, "display")] && (d.position = ir(e, "position")),
                                  s === e && (d.position = "static"),
                                  s.appendChild(kn),
                                  (a = kn[p]),
                                  s.removeChild(kn),
                                  (d.position = "absolute"),
                                  h && g && (((o = ct(s)).time = Te.time), (o.width = s[p])),
                                  ht(_ ? (a * c) / m : a && c ? (m / a) * c : 0)))
                          : ((a = l ? e.getBBox()[h ? "width" : "height"] : e[p]), ht(g ? (c / a) * m : (c / 100) * a)));
            },
            gr = function (t, e, n, r) {
                var i;
                return (
                    Cn || or(),
                    e in Nn && "transform" !== e && ~(e = Nn[e]).indexOf(",") && (e = e.split(",")[0]),
                    On[e] && "transform" !== e
                        ? ((i = Sr(t, r)), (i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Lr(ir(t, Zn)) + " " + i.zOrigin + "px"))
                        : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = (br[e] && br[e](t, e, n)) || ir(t, e) || ut(t, e) || ("opacity" === e ? 1 : 0)),
                    n && !~(i + "").trim().indexOf(" ") ? _r(t, e, i, n) + n : i
                );
            },
            vr = function (t, e, n, r) {
                if (!n || "none" === n) {
                    var i = sr(e, t, 1),
                        a = i && ir(t, i, 1);
                    a && a !== n ? ((e = i), (n = a)) : "borderColor" === e && (n = ir(t, "borderTopColor"));
                }
                var s,
                    o,
                    l,
                    c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m,
                    _,
                    v = new un(this._pt, t.style, e, 0, 1, rn),
                    y = 0,
                    w = 0;
                if (((v.b = n), (v.e = r), (n += ""), "auto" === (r += "") && ((t.style[e] = r), (r = ir(t, e) || r), (t.style[e] = n)), xe((s = [n, r])), (r = s[1]), (l = (n = s[0]).match(j) || []), (r.match(j) || []).length)) {
                    for (; (o = j.exec(r)); )
                        (h = o[0]),
                            (p = r.substring(y, o.index)),
                            u ? (u = (u + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (u = 1),
                            h !== (d = l[w++] || "") &&
                                ((c = parseFloat(d) || 0),
                                (_ = d.substr((c + "").length)),
                                "=" === h.charAt(1) && (h = pt(c, h) + _),
                                (f = parseFloat(h)),
                                (m = h.substr((f + "").length)),
                                (y = j.lastIndex - m.length),
                                m || ((m = m || g.units[e] || _), y === r.length && ((r += m), (v.e += m))),
                                _ !== m && (c = _r(t, e, d, m) || 0),
                                (v._pt = { _next: v._pt, p: p || 1 === w ? p : ",", s: c, c: f - c, m: (u && u < 4) || "zIndex" === e ? Math.round : 0 }));
                    v.c = y < r.length ? r.substring(y, r.length) : "";
                } else v.r = "display" === e && "none" === r ? Gn : Vn;
                return q.test(r) && (v.e = 0), (this._pt = v), v;
            },
            yr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
            wr = function (t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var n,
                        r,
                        i,
                        a = e.t,
                        s = a.style,
                        o = e.u,
                        l = a._gsap;
                    if ("all" === o || !0 === o) (s.cssText = ""), (r = 1);
                    else for (i = (o = o.split(",")).length; --i > -1; ) (n = o[i]), On[n] && ((r = 1), (n = "transformOrigin" === n ? Zn : Qn)), hr(a, n);
                    r && (hr(a, Qn), l && (l.svg && a.removeAttribute("transform"), Sr(a, 1), (l.uncache = 1), tr(s)));
                }
            },
            br = {
                clearProps: function (t, e, n, r, i) {
                    if ("isFromStart" !== i.data) {
                        var a = (t._pt = new un(t._pt, e, n, 0, 0, wr));
                        return (a.u = r), (a.pr = -10), (a.tween = i), t._props.push(n), 1;
                    }
                },
            },
            xr = [1, 0, 0, 1, 0, 0],
            Tr = {},
            Er = function (t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
            },
            Mr = function (t) {
                var e = ir(t, Qn);
                return Er(e) ? xr : e.substr(7).match(N).map(ht);
            },
            Cr = function (t, e) {
                var n,
                    r,
                    i,
                    a,
                    s = t._gsap || ct(t),
                    o = t.style,
                    l = Mr(t);
                return s.svg && t.getAttribute("transform")
                    ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
                        ? xr
                        : l
                    : (l !== xr ||
                          t.offsetParent ||
                          t === Mn ||
                          s.svg ||
                          ((i = o.display),
                          (o.display = "block"),
                          ((n = t.parentNode) && t.offsetParent) || ((a = 1), (r = t.nextElementSibling), Mn.appendChild(t)),
                          (l = Mr(t)),
                          i ? (o.display = i) : hr(t, "display"),
                          a && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Mn.removeChild(t))),
                      e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
            },
            kr = function (t, e, n, r, i, a) {
                var s,
                    o,
                    l,
                    c = t._gsap,
                    u = i || Cr(t, !0),
                    d = c.xOrigin || 0,
                    h = c.yOrigin || 0,
                    f = c.xOffset || 0,
                    p = c.yOffset || 0,
                    m = u[0],
                    _ = u[1],
                    g = u[2],
                    v = u[3],
                    y = u[4],
                    w = u[5],
                    b = e.split(" "),
                    x = parseFloat(b[0]) || 0,
                    T = parseFloat(b[1]) || 0;
                n
                    ? u !== xr && (o = m * v - _ * g) && ((l = x * (-_ / o) + T * (m / o) - (m * w - _ * y) / o), (x = x * (v / o) + T * (-g / o) + (g * w - v * y) / o), (T = l))
                    : ((x = (s = ur(t)).x + (~b[0].indexOf("%") ? (x / 100) * s.width : x)), (T = s.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * s.height : T))),
                    r || (!1 !== r && c.smooth) ? ((y = x - d), (w = T - h), (c.xOffset = f + (y * m + w * g) - y), (c.yOffset = p + (y * _ + w * v) - w)) : (c.xOffset = c.yOffset = 0),
                    (c.xOrigin = x),
                    (c.yOrigin = T),
                    (c.smooth = !!r),
                    (c.origin = e),
                    (c.originIsAbsolute = !!n),
                    (t.style[Zn] = "0px 0px"),
                    a && (fr(a, c, "xOrigin", d, x), fr(a, c, "yOrigin", h, T), fr(a, c, "xOffset", f, c.xOffset), fr(a, c, "yOffset", p, c.yOffset)),
                    t.setAttribute("data-svg-origin", x + " " + T);
            },
            Sr = function (t, e) {
                var n = t._gsap || new Ie(t);
                if ("x" in n && !e && !n.uncache) return n;
                var r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    c,
                    u,
                    d,
                    h,
                    f,
                    p,
                    m,
                    _,
                    v,
                    y,
                    w,
                    b,
                    x,
                    T,
                    E,
                    M,
                    C,
                    k,
                    S,
                    L,
                    A,
                    O,
                    z,
                    D,
                    P,
                    F,
                    I = t.style,
                    R = n.scaleX < 0,
                    N = "px",
                    j = "deg",
                    B = getComputedStyle(t),
                    q = ir(t, Zn) || "0";
                return (
                    (r = i = a = l = c = u = d = h = f = 0),
                    (s = o = 1),
                    (n.svg = !(!t.getCTM || !dr(t))),
                    B.translate &&
                        (("none" === B.translate && "none" === B.scale && "none" === B.rotate) ||
                            (I[Qn] =
                                ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
                                ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                                ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") +
                                B[Qn]),
                        (I.scale = I.rotate = I.translate = "none")),
                    (_ = Cr(t, n.svg)),
                    n.svg && ((k = (!n.uncache || "0px 0px" === q) && !e && t.getAttribute("data-svg-origin")), kr(t, k || q, !!k || n.originIsAbsolute, !1 !== n.smooth, _)),
                    (p = n.xOrigin || 0),
                    (m = n.yOrigin || 0),
                    _ !== xr &&
                        ((b = _[0]),
                        (x = _[1]),
                        (T = _[2]),
                        (E = _[3]),
                        (r = M = _[4]),
                        (i = C = _[5]),
                        6 === _.length
                            ? ((s = Math.sqrt(b * b + x * x)),
                              (o = Math.sqrt(E * E + T * T)),
                              (l = b || x ? Pn(x, b) * zn : 0),
                              (d = T || E ? Pn(T, E) * zn + l : 0) && (o *= Math.abs(Math.cos(d * Dn))),
                              n.svg && ((r -= p - (p * b + m * T)), (i -= m - (p * x + m * E))))
                            : ((F = _[6]),
                              (D = _[7]),
                              (A = _[8]),
                              (O = _[9]),
                              (z = _[10]),
                              (P = _[11]),
                              (r = _[12]),
                              (i = _[13]),
                              (a = _[14]),
                              (c = (v = Pn(F, z)) * zn),
                              v &&
                                  ((k = M * (y = Math.cos(-v)) + A * (w = Math.sin(-v))),
                                  (S = C * y + O * w),
                                  (L = F * y + z * w),
                                  (A = M * -w + A * y),
                                  (O = C * -w + O * y),
                                  (z = F * -w + z * y),
                                  (P = D * -w + P * y),
                                  (M = k),
                                  (C = S),
                                  (F = L)),
                              (u = (v = Pn(-T, z)) * zn),
                              v && ((y = Math.cos(-v)), (P = E * (w = Math.sin(-v)) + P * y), (b = k = b * y - A * w), (x = S = x * y - O * w), (T = L = T * y - z * w)),
                              (l = (v = Pn(x, b)) * zn),
                              v && ((k = b * (y = Math.cos(v)) + x * (w = Math.sin(v))), (S = M * y + C * w), (x = x * y - b * w), (C = C * y - M * w), (b = k), (M = S)),
                              c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
                              (s = ht(Math.sqrt(b * b + x * x + T * T))),
                              (o = ht(Math.sqrt(C * C + F * F))),
                              (v = Pn(M, C)),
                              (d = Math.abs(v) > 2e-4 ? v * zn : 0),
                              (f = P ? 1 / (P < 0 ? -P : P) : 0)),
                        n.svg && ((k = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !Er(ir(t, Qn))), k && t.setAttribute("transform", k))),
                    Math.abs(d) > 90 && Math.abs(d) < 270 && (R ? ((s *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((o *= -1), (d += d <= 0 ? 180 : -180))),
                    (e = e || n.uncache),
                    (n.x = r - ((n.xPercent = r && ((!e && n.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetWidth * n.xPercent) / 100 : 0) + N),
                    (n.y = i - ((n.yPercent = i && ((!e && n.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * n.yPercent) / 100 : 0) + N),
                    (n.z = a + N),
                    (n.scaleX = ht(s)),
                    (n.scaleY = ht(o)),
                    (n.rotation = ht(l) + j),
                    (n.rotationX = ht(c) + j),
                    (n.rotationY = ht(u) + j),
                    (n.skewX = d + j),
                    (n.skewY = h + j),
                    (n.transformPerspective = f + N),
                    (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (I[Zn] = Lr(q)),
                    (n.xOffset = n.yOffset = 0),
                    (n.force3D = g.force3D),
                    (n.renderTransform = n.svg ? Ir : An ? Fr : Or),
                    (n.uncache = 0),
                    n
                );
            },
            Lr = function (t) {
                return (t = t.split(" "))[0] + " " + t[1];
            },
            Ar = function (t, e, n) {
                var r = Kt(e);
                return ht(parseFloat(e) + parseFloat(_r(t, "x", n + "px", r))) + r;
            },
            Or = function (t, e) {
                (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Fr(t, e);
            },
            zr = "0deg",
            Dr = "0px",
            Pr = ") ",
            Fr = function (t, e) {
                var n = e || this,
                    r = n.xPercent,
                    i = n.yPercent,
                    a = n.x,
                    s = n.y,
                    o = n.z,
                    l = n.rotation,
                    c = n.rotationY,
                    u = n.rotationX,
                    d = n.skewX,
                    h = n.skewY,
                    f = n.scaleX,
                    p = n.scaleY,
                    m = n.transformPerspective,
                    _ = n.force3D,
                    g = n.target,
                    v = n.zOrigin,
                    y = "",
                    w = ("auto" === _ && t && 1 !== t) || !0 === _;
                if (v && (u !== zr || c !== zr)) {
                    var b,
                        x = parseFloat(c) * Dn,
                        T = Math.sin(x),
                        E = Math.cos(x);
                    (x = parseFloat(u) * Dn), (b = Math.cos(x)), (a = Ar(g, a, T * b * -v)), (s = Ar(g, s, -Math.sin(x) * -v)), (o = Ar(g, o, E * b * -v + v));
                }
                m !== Dr && (y += "perspective(" + m + Pr),
                    (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
                    (w || a !== Dr || s !== Dr || o !== Dr) && (y += o !== Dr || w ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Pr),
                    l !== zr && (y += "rotate(" + l + Pr),
                    c !== zr && (y += "rotateY(" + c + Pr),
                    u !== zr && (y += "rotateX(" + u + Pr),
                    (d === zr && h === zr) || (y += "skew(" + d + ", " + h + Pr),
                    (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + Pr),
                    (g.style[Qn] = y || "translate(0, 0)");
            },
            Ir = function (t, e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o = e || this,
                    l = o.xPercent,
                    c = o.yPercent,
                    u = o.x,
                    d = o.y,
                    h = o.rotation,
                    f = o.skewX,
                    p = o.skewY,
                    m = o.scaleX,
                    _ = o.scaleY,
                    g = o.target,
                    v = o.xOrigin,
                    y = o.yOrigin,
                    w = o.xOffset,
                    b = o.yOffset,
                    x = o.forceCSS,
                    T = parseFloat(u),
                    E = parseFloat(d);
                (h = parseFloat(h)),
                    (f = parseFloat(f)),
                    (p = parseFloat(p)) && ((f += p = parseFloat(p)), (h += p)),
                    h || f
                        ? ((h *= Dn),
                          (f *= Dn),
                          (n = Math.cos(h) * m),
                          (r = Math.sin(h) * m),
                          (i = Math.sin(h - f) * -_),
                          (a = Math.cos(h - f) * _),
                          f && ((p *= Dn), (s = Math.tan(f - p)), (i *= s = Math.sqrt(1 + s * s)), (a *= s), p && ((s = Math.tan(p)), (n *= s = Math.sqrt(1 + s * s)), (r *= s))),
                          (n = ht(n)),
                          (r = ht(r)),
                          (i = ht(i)),
                          (a = ht(a)))
                        : ((n = m), (a = _), (r = i = 0)),
                    ((T && !~(u + "").indexOf("px")) || (E && !~(d + "").indexOf("px"))) && ((T = _r(g, "x", u, "px")), (E = _r(g, "y", d, "px"))),
                    (v || y || w || b) && ((T = ht(T + v - (v * n + y * i) + w)), (E = ht(E + y - (v * r + y * a) + b))),
                    (l || c) && ((s = g.getBBox()), (T = ht(T + (l / 100) * s.width)), (E = ht(E + (c / 100) * s.height))),
                    (s = "matrix(" + n + "," + r + "," + i + "," + a + "," + T + "," + E + ")"),
                    g.setAttribute("transform", s),
                    x && (g.style[Qn] = s);
            },
            Rr = function (t, e, n, r, i) {
                var a,
                    s,
                    o = 360,
                    l = k(i),
                    c = parseFloat(i) * (l && ~i.indexOf("rad") ? zn : 1) - r,
                    u = r + c + "deg";
                return (
                    l && ("short" === (a = i.split("_")[1]) && (c %= o) !== c % 180 && (c += c < 0 ? o : -360), "cw" === a && c < 0 ? (c = ((c + 36e9) % o) - ~~(c / o) * o) : "ccw" === a && c > 0 && (c = ((c - 36e9) % o) - ~~(c / o) * o)),
                    (t._pt = s = new un(t._pt, e, n, r, c, Bn)),
                    (s.e = u),
                    (s.u = "deg"),
                    t._props.push(n),
                    s
                );
            },
            Nr = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            },
            jr = function (t, e, n) {
                var r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    c,
                    u = Nr({}, n._gsap),
                    d = n.style;
                for (i in (u.svg
                    ? ((a = n.getAttribute("transform")), n.setAttribute("transform", ""), (d[Qn] = e), (r = Sr(n, 1)), hr(n, Qn), n.setAttribute("transform", a))
                    : ((a = getComputedStyle(n)[Qn]), (d[Qn] = e), (r = Sr(n, 1)), (d[Qn] = a)),
                On))
                    (a = u[i]) !== (s = r[i]) &&
                        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
                        ((o = Kt(a) !== (c = Kt(s)) ? _r(n, i, a, c) : parseFloat(a)), (l = parseFloat(s)), (t._pt = new un(t._pt, r, i, o, l - o, jn)), (t._pt.u = c || 0), t._props.push(i));
                Nr(r, u);
            };
        dt("padding,margin,Width,Radius", function (t, e) {
            var n = "Top",
                r = "Right",
                i = "Bottom",
                a = "Left",
                s = (e < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
                    return e < 2 ? t + n : "border" + n + t;
                });
            br[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
                var a, o;
                if (arguments.length < 4)
                    return (
                        (a = s.map(function (e) {
                            return gr(t, e, n);
                        })),
                        5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
                    );
                (a = (r + "").split(" ")),
                    (o = {}),
                    s.forEach(function (t, e) {
                        return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
                    }),
                    t.init(e, o, i);
            };
        });
        var Br,
            qr,
            Hr,
            Vr = {
                name: "css",
                register: or,
                targetTest: function (t) {
                    return t.style && t.nodeType;
                },
                init: function (t, e, n, r, i) {
                    var a,
                        s,
                        o,
                        l,
                        c,
                        u,
                        d,
                        h,
                        f,
                        p,
                        m,
                        _,
                        v,
                        y,
                        w,
                        b,
                        x,
                        T,
                        E,
                        M,
                        C = this._props,
                        S = t.style,
                        L = n.vars.startAt;
                    for (d in (Cn || or(), (this.styles = this.styles || nr(t)), (b = this.styles.props), (this.tween = n), e))
                        if ("autoRound" !== d && ((s = e[d]), !rt[d] || !Ve(d, e, n, r, t, i)))
                            if (((c = typeof s), (u = br[d]), "function" === c && (c = typeof (s = s.call(n, r, t, i))), "string" === c && ~s.indexOf("random(") && (s = le(s)), u)) u(this, t, d, s, n) && (w = 1);
                            else if ("--" === d.substr(0, 2))
                                (a = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                                    (s += ""),
                                    (we.lastIndex = 0),
                                    we.test(a) || ((h = Kt(a)), (f = Kt(s))),
                                    f ? h !== f && (a = _r(t, d, a, f) + f) : h && (s += h),
                                    this.add(S, "setProperty", a, s, r, i, 0, 0, d),
                                    C.push(d),
                                    b.push(d, S[d]);
                            else if ("undefined" !== c) {
                                if (
                                    (L && d in L
                                        ? ((a = "function" == typeof L[d] ? L[d].call(n, r, t, i) : L[d]),
                                          k(a) && ~a.indexOf("random(") && (a = le(a)),
                                          Kt(a + "") || (a += g.units[d] || Kt(gr(t, d)) || ""),
                                          "=" === (a + "").charAt(1) && (a = gr(t, d)))
                                        : (a = gr(t, d)),
                                    (l = parseFloat(a)),
                                    (p = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                                    (o = parseFloat(s)),
                                    d in Nn &&
                                        ("autoAlpha" === d &&
                                            (1 === l && "hidden" === gr(t, "visibility") && o && (l = 0), b.push("visibility", S.visibility), fr(this, S, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                                        "scale" !== d && "transform" !== d && ~(d = Nn[d]).indexOf(",") && (d = d.split(",")[0])),
                                    (m = d in On))
                                )
                                    if (
                                        (this.styles.save(d),
                                        _ ||
                                            (((v = t._gsap).renderTransform && !e.parseTransform) || Sr(t, e.parseTransform),
                                            (y = !1 !== e.smoothOrigin && v.smooth),
                                            ((_ = this._pt = new un(this._pt, S, Qn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                        "scale" === d)
                                    )
                                        (this._pt = new un(this._pt, v, "scaleY", v.scaleY, (p ? pt(v.scaleY, p + o) : o) - v.scaleY || 0, jn)), (this._pt.u = 0), C.push("scaleY", d), (d += "X");
                                    else {
                                        if ("transformOrigin" === d) {
                                            b.push(Zn, S[Zn]),
                                                (T = void 0),
                                                (E = void 0),
                                                (M = void 0),
                                                (T = (x = s).split(" ")),
                                                (E = T[0]),
                                                (M = T[1] || "50%"),
                                                ("top" !== E && "bottom" !== E && "left" !== M && "right" !== M) || ((x = E), (E = M), (M = x)),
                                                (T[0] = yr[E] || E),
                                                (T[1] = yr[M] || M),
                                                (s = T.join(" ")),
                                                v.svg ? kr(t, s, 0, y, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && fr(this, v, "zOrigin", v.zOrigin, f), fr(this, S, d, Lr(a), Lr(s)));
                                            continue;
                                        }
                                        if ("svgOrigin" === d) {
                                            kr(t, s, 1, y, 0, this);
                                            continue;
                                        }
                                        if (d in Tr) {
                                            Rr(this, v, d, l, p ? pt(l, p + s) : s);
                                            continue;
                                        }
                                        if ("smoothOrigin" === d) {
                                            fr(this, v, "smooth", v.smooth, s);
                                            continue;
                                        }
                                        if ("force3D" === d) {
                                            v[d] = s;
                                            continue;
                                        }
                                        if ("transform" === d) {
                                            jr(this, s, t);
                                            continue;
                                        }
                                    }
                                else d in S || (d = sr(d) || d);
                                if (m || ((o || 0 === o) && (l || 0 === l) && !Rn.test(s) && d in S))
                                    o || (o = 0),
                                        (h = (a + "").substr((l + "").length)) !== (f = Kt(s) || (d in g.units ? g.units[d] : h)) && (l = _r(t, d, a, f)),
                                        (this._pt = new un(this._pt, m ? v : S, d, l, (p ? pt(l, p + o) : o) - l, m || ("px" !== f && "zIndex" !== d) || !1 === e.autoRound ? jn : Hn)),
                                        (this._pt.u = f || 0),
                                        h !== f && "%" !== f && ((this._pt.b = a), (this._pt.r = qn));
                                else if (d in S) vr.call(this, t, d, a, p ? p + s : s);
                                else {
                                    if (!(d in t)) {
                                        X(d, s);
                                        continue;
                                    }
                                    this.add(t, d, a || t[d], p ? p + s : s, r, i);
                                }
                                m || b.push(d, S[d]), C.push(d);
                            }
                    w && cn(this);
                },
                render: function (t, e) {
                    if (e.tween._time || !Ln()) for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
                    else e.styles.revert();
                },
                get: gr,
                aliases: Nn,
                getSetter: function (t, e, n) {
                    var r = Nn[e];
                    return (
                        r && r.indexOf(",") < 0 && (e = r),
                        e in On && e !== Zn && (t._gsap.x || gr(t, "x")) ? (n && Sn === n ? ("scale" === e ? Wn : Xn) : (Sn = n || {}) && ("scale" === e ? $n : Kn)) : t.style && !A(t.style[e]) ? Un : ~e.indexOf("-") ? Yn : tn(t, e)
                    );
                },
                core: { _removeProperty: hr, _getMatrix: Cr },
            };
        (xn.utils.checkPrefix = sr),
            (xn.core.getStyleSaver = nr),
            (Hr = dt((Br = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (qr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                On[t] = 1;
            })),
            dt(qr, function (t) {
                (g.units[t] = "deg"), (Tr[t] = 1);
            }),
            (Nn[Hr[13]] = Br + "," + qr),
            dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                var e = t.split(":");
                Nn[e[1]] = Hr[e[0]];
            }),
            dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                g.units[t] = "px";
            }),
            xn.registerPlugin(Vr);
        var Gr = xn.registerPlugin(Vr) || xn;
        Gr.core.Tween;
        function Ur(t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }
        var Yr = document.querySelector(".popover"),
            Xr = "drawer--active",
            Wr = function () {
                (document.body.style.overflow = "hidden"), (Yr.style.display = "block"), Gr.to(Yr, { opacity: 1, duration: 0.25 });
            },
            $r = function () {
                (document.body.style.overflow = ""),
                    Gr.to(Yr, {
                        opacity: 0,
                        duration: 0.25,
                        onComplete: function () {
                            Yr.style.display = "none";
                        },
                    });
            },
            Kr = function (t) {
                var e,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0%",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x";
                Wr(), Gr.to(t, (Ur((e = {}), r, n), Ur(e, "duration", 0.4), Ur(e, "ease", "power2.inOut"), e)), t.classList.add(Xr);
            },
            Qr = function (t) {
                var e,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-100%",
                    r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "x";
                r && $r(),
                    Gr.to(
                        t,
                        (Ur((e = {}), i, n),
                        Ur(e, "duration", 0.4),
                        Ur(e, "ease", "power2.inOut"),
                        Ur(e, "onComplete", function () {
                            t.scrollTop = 0;
                        }),
                        e)
                    ),
                    t.classList.remove(Xr);
            },
            Zr = window.innerWidth,
            Jr = document.getElementById("legacy-action"),
            ti = document.getElementById("core-action"),
            ei = document.querySelectorAll(".team-action"),
            ni = document.getElementById("drawer-legacy"),
            ri = document.getElementById("drawer-core"),
            ii = document.getElementById("drawer-team"),
            ai = document.getElementById("close-legacy"),
            si = document.getElementById("close-core"),
            oi = document.getElementById("close-team"),
            li = function (t) {
                var e,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
                return function () {
                    var r = this,
                        i = arguments;
                    e && clearTimeout(e),
                        (e = setTimeout(function () {
                            return t.apply(r, i);
                        }, n));
                };
            },
            ci = null,
            ui = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0%",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "x";
                t &&
                    e &&
                    (ci && t.removeEventListener("click", ci),
                    (ci = li(function (t) {
                        Kr(e, n, r), t.stopPropagation;
                    })),
                    t.addEventListener("click", ci));
            },
            di = function (t, e) {
                e &&
                    e.addEventListener("click", function (e) {
                        Qr(t, "100%"), e.stopPropagation();
                    }),
                    document.addEventListener("click", function (e) {
                        if (t && !t.contains(e.target) && t.classList.contains("drawer--active")) {
                            if (window.matchMedia("(max-width: 1055px)").matches && (ni.contains(e.target) || ri.contains(e.target))) return;
                            Qr(t, "100%");
                        }
                    });
            },
            hi = function () {
                ui(Jr, ni),
                    di(ni, ai),
                    ui(ti, ri),
                    di(ri, si),
                    ei.forEach(function (t) {
                        ui(t, ii);
                    }),
                    di(ii, oi),
                    window.addEventListener(
                        "resize",
                        li(function () {
                            window.innerWidth !== Zr &&
                                ((Zr = window.innerWidth),
                                [ni, ri].forEach(function (t) {
                                    t && t.classList.contains("drawer--active") && Qr(t, "100%");
                                }),
                                ui(Jr, ni),
                                ui(ti, ri));
                        })
                    );
            },
            fi = document.getElementById("mobile-nav-action"),
            pi = document.getElementById("mobile-nav"),
            mi = document.getElementById("mobile-nav-close"),
            _i = pi.querySelectorAll("a.on-page"),
            gi = function () {
                pi.classList.toggle("visible-nav"), document.body.classList.toggle("no-scroll");
            },
            vi = function () {
                fi.addEventListener("click", gi),
                    mi.addEventListener("click", function () {
                        pi.classList.remove("visible-nav"), document.body.classList.remove("no-scroll");
                    }),
                    _i.forEach(function (t) {
                        t.addEventListener("click", function () {
                            pi.classList.remove("visible-nav"), document.body.classList.remove("no-scroll");
                        });
                    });
            },
            yi = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            wi = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            bi = Math.PI / 180,
            xi = (Math.PI, Math.sin),
            Ti = Math.cos,
            Ei = Math.abs,
            Mi = Math.sqrt,
            Ci =
                (Math.atan2,
                function (t) {
                    return "number" == typeof t;
                }),
            ki = 1e5,
            Si = function (t) {
                return Math.round(t * ki) / ki || 0;
            };
        function Li(t, e, n, r, i, a, s, o, l) {
            if (t !== o || e !== l) {
                (n = Ei(n)), (r = Ei(r));
                var c = (i % 360) * bi,
                    u = Ti(c),
                    d = xi(c),
                    h = Math.PI,
                    f = 2 * h,
                    p = (t - o) / 2,
                    m = (e - l) / 2,
                    _ = u * p + d * m,
                    g = -d * p + u * m,
                    v = _ * _,
                    y = g * g,
                    w = v / (n * n) + y / (r * r);
                w > 1 && ((n = Mi(w) * n), (r = Mi(w) * r));
                var b = n * n,
                    x = r * r,
                    T = (b * x - b * y - x * v) / (b * y + x * v);
                T < 0 && (T = 0);
                var E = (a === s ? -1 : 1) * Mi(T),
                    M = E * ((n * g) / r),
                    C = E * ((-r * _) / n),
                    k = (t + o) / 2 + (u * M - d * C),
                    S = (e + l) / 2 + (d * M + u * C),
                    L = (_ - M) / n,
                    A = (g - C) / r,
                    O = (-_ - M) / n,
                    z = (-g - C) / r,
                    D = L * L + A * A,
                    P = (A < 0 ? -1 : 1) * Math.acos(L / Mi(D)),
                    F = (L * z - A * O < 0 ? -1 : 1) * Math.acos((L * O + A * z) / Mi(D * (O * O + z * z)));
                isNaN(F) && (F = h), !s && F > 0 ? (F -= f) : s && F < 0 && (F += f), (P %= f), (F %= f);
                var I,
                    R = Math.ceil(Ei(F) / (f / 4)),
                    N = [],
                    j = F / R,
                    B = ((4 / 3) * xi(j / 2)) / (1 + Ti(j / 2)),
                    q = u * n,
                    H = d * n,
                    V = d * -r,
                    G = u * r;
                for (I = 0; I < R; I++) (_ = Ti((i = P + I * j))), (g = xi(i)), (L = Ti((i += j))), (A = xi(i)), N.push(_ - B * g, g + B * _, L + B * A, A - B * L, L, A);
                for (I = 0; I < N.length; I += 2) (_ = N[I]), (g = N[I + 1]), (N[I] = _ * q + g * V + k), (N[I + 1] = _ * H + g * G + S);
                return (N[I - 2] = o), (N[I - 1] = l), N;
            }
        }
        function Ai(t) {
            var e,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                c,
                u,
                d,
                h,
                f,
                p,
                m,
                _ =
                    (t + "")
                        .replace(wi, function (t) {
                            var e = +t;
                            return e < 1e-4 && e > -1e-4 ? 0 : e;
                        })
                        .match(yi) || [],
                g = [],
                v = 0,
                y = 0,
                w = 2 / 3,
                b = _.length,
                x = 0,
                T = "ERROR: malformed path: " + t,
                E = function (t, e, n, r) {
                    (u = (n - t) / 3), (d = (r - e) / 3), o.push(t + u, e + d, n - u, r - d, n, r);
                };
            if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(T), g;
            for (e = 0; e < b; e++)
                if (((f = a), isNaN(_[e]) ? (s = (a = _[e].toUpperCase()) !== _[e]) : e--, (r = +_[e + 1]), (i = +_[e + 2]), s && ((r += v), (i += y)), e || ((l = r), (c = i)), "M" === a))
                    o && (o.length < 8 ? (g.length -= 1) : (x += o.length)), (v = l = r), (y = c = i), (o = [r, i]), g.push(o), (e += 2), (a = "L");
                else if ("C" === a) o || (o = [0, 0]), s || (v = y = 0), o.push(r, i, v + 1 * _[e + 3], y + 1 * _[e + 4], (v += 1 * _[e + 5]), (y += 1 * _[e + 6])), (e += 6);
                else if ("S" === a) (u = v), (d = y), ("C" !== f && "S" !== f) || ((u += v - o[o.length - 4]), (d += y - o[o.length - 3])), s || (v = y = 0), o.push(u, d, r, i, (v += 1 * _[e + 3]), (y += 1 * _[e + 4])), (e += 4);
                else if ("Q" === a) (u = v + (r - v) * w), (d = y + (i - y) * w), s || (v = y = 0), (v += 1 * _[e + 3]), (y += 1 * _[e + 4]), o.push(u, d, v + (r - v) * w, y + (i - y) * w, v, y), (e += 4);
                else if ("T" === a) (u = v - o[o.length - 4]), (d = y - o[o.length - 3]), o.push(v + u, y + d, r + (v + 1.5 * u - r) * w, i + (y + 1.5 * d - i) * w, (v = r), (y = i)), (e += 2);
                else if ("H" === a) E(v, y, (v = r), y), (e += 1);
                else if ("V" === a) E(v, y, v, (y = r + (s ? y - v : 0))), (e += 1);
                else if ("L" === a || "Z" === a) "Z" === a && ((r = l), (i = c), (o.closed = !0)), ("L" === a || Ei(v - r) > 0.5 || Ei(y - i) > 0.5) && (E(v, y, r, i), "L" === a && (e += 2)), (v = r), (y = i);
                else if ("A" === a) {
                    if (
                        ((p = _[e + 4]),
                        (m = _[e + 5]),
                        (u = _[e + 6]),
                        (d = _[e + 7]),
                        (n = 7),
                        p.length > 1 && (p.length < 3 ? ((d = u), (u = m), n--) : ((d = m), (u = p.substr(2)), (n -= 2)), (m = p.charAt(1)), (p = p.charAt(0))),
                        (h = Li(v, y, +_[e + 1], +_[e + 2], +_[e + 3], +p, +m, (s ? v : 0) + 1 * u, (s ? y : 0) + 1 * d)),
                        (e += n),
                        h)
                    )
                        for (n = 0; n < h.length; n++) o.push(h[n]);
                    (v = o[o.length - 2]), (y = o[o.length - 1]);
                } else console.log(T);
            return (e = o.length) < 6 ? (g.pop(), (e = 0)) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), (g.totalPoints = x + e), g;
        }
        function Oi(t) {
            Ci(t[0]) && (t = [t]);
            var e,
                n,
                r,
                i,
                a = "",
                s = t.length;
            for (n = 0; n < s; n++) {
                for (i = t[n], a += "M" + Si(i[0]) + "," + Si(i[1]) + " C", e = i.length, r = 2; r < e; r++) a += Si(i[r++]) + "," + Si(i[r++]) + " " + Si(i[r++]) + "," + Si(i[r++]) + " " + Si(i[r++]) + "," + Si(i[r]) + " ";
                i.closed && (a += "z");
            }
            return a;
        }
        /*!
         * CustomEase 3.11.0
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var zi,
            Di,
            Pi = function () {
                return zi || ("undefined" != typeof window && (zi = window.gsap) && zi.registerPlugin && zi);
            },
            Fi = function () {
                (zi = Pi()) ? (zi.registerEase("_CE", Bi.create), (Di = 1)) : console.warn("Please gsap.registerPlugin(CustomEase)");
            },
            Ii = function (t) {
                return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
            },
            Ri = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            Ni = /[cLlsSaAhHvVtTqQ]/g,
            ji = function t(e, n, r, i, a, s, o, l, c, u, d) {
                var h,
                    f = (e + r) / 2,
                    p = (n + i) / 2,
                    m = (r + a) / 2,
                    _ = (i + s) / 2,
                    g = (a + o) / 2,
                    v = (s + l) / 2,
                    y = (f + m) / 2,
                    w = (p + _) / 2,
                    b = (m + g) / 2,
                    x = (_ + v) / 2,
                    T = (y + b) / 2,
                    E = (w + x) / 2,
                    M = o - e,
                    C = l - n,
                    k = Math.abs((r - o) * C - (i - l) * M),
                    S = Math.abs((a - o) * C - (s - l) * M);
                return (
                    u ||
                        ((u = [
                            { x: e, y: n },
                            { x: o, y: l },
                        ]),
                        (d = 1)),
                    u.splice(d || u.length - 1, 0, { x: T, y: E }),
                    (k + S) * (k + S) > c * (M * M + C * C) && ((h = u.length), t(e, n, f, p, y, w, T, E, c, u, d), t(T, E, b, x, g, v, o, l, c, u, d + 1 + (u.length - h))),
                    u
                );
            },
            Bi = (function () {
                function t(t, e, n) {
                    Di || Fi(), (this.id = t), this.setData(e, n);
                }
                var e = t.prototype;
                return (
                    (e.setData = function (t, e) {
                        e = e || {};
                        var n,
                            r,
                            i,
                            a,
                            s,
                            o,
                            l,
                            c,
                            u,
                            d = (t = t || "0,0,1,1").match(Ri),
                            h = 1,
                            f = [],
                            p = [],
                            m = e.precision || 1,
                            _ = m <= 1;
                        if (((this.data = t), (Ni.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) && (d = Ai(t)[0]), 4 === (n = d.length))) d.unshift(0, 0), d.push(1, 1), (n = 8);
                        else if ((n - 2) % 6) throw "Invalid CustomEase";
                        for (
                            (0 == +d[0] && 1 == +d[n - 2]) ||
                                (function (t, e, n) {
                                    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                                    var r,
                                        i = -1 * +t[0],
                                        a = -n,
                                        s = t.length,
                                        o = 1 / (+t[s - 2] + i),
                                        l =
                                            -e ||
                                            (Math.abs(+t[s - 1] - +t[1]) < 0.01 * (+t[s - 2] - +t[0])
                                                ? (function (t) {
                                                      var e,
                                                          n = t.length,
                                                          r = 1e20;
                                                      for (e = 1; e < n; e += 6) +t[e] < r && (r = +t[e]);
                                                      return r;
                                                  })(t) + a
                                                : +t[s - 1] + a);
                                    for (l = l ? 1 / l : -o, r = 0; r < s; r += 2) (t[r] = (+t[r] + i) * o), (t[r + 1] = (+t[r + 1] + a) * l);
                                })(d, e.height, e.originY),
                                this.segment = d,
                                a = 2;
                            a < n;
                            a += 6
                        )
                            (r = { x: +d[a - 2], y: +d[a - 1] }), (i = { x: +d[a + 4], y: +d[a + 5] }), f.push(r, i), ji(r.x, r.y, +d[a], +d[a + 1], +d[a + 2], +d[a + 3], i.x, i.y, 1 / (2e5 * m), f, f.length - 1);
                        for (n = f.length, a = 0; a < n; a++)
                            (l = f[a]),
                                (c = f[a - 1] || l),
                                (l.x > c.x || (c.y !== l.y && c.x === l.x) || l === c) && l.x <= 1
                                    ? ((c.cx = l.x - c.x),
                                      (c.cy = l.y - c.y),
                                      (c.n = l),
                                      (c.nx = l.x),
                                      _ && a > 1 && Math.abs(c.cy / c.cx - f[a - 2].cy / f[a - 2].cx) > 2 && (_ = 0),
                                      c.cx < h && (c.cx ? (h = c.cx) : ((c.cx = 0.001), a === n - 1 && ((c.x -= 0.001), (h = Math.min(h, 0.001)), (_ = 0)))))
                                    : (f.splice(a--, 1), n--);
                        if (((s = 1 / (n = (1 / h + 1) | 0)), (o = 0), (l = f[0]), _)) {
                            for (a = 0; a < n; a++) (u = a * s), l.nx < u && (l = f[++o]), (r = l.y + ((u - l.x) / l.cx) * l.cy), (p[a] = { x: u, cx: s, y: r, cy: 0, nx: 9 }), a && (p[a - 1].cy = r - p[a - 1].y);
                            p[n - 1].cy = f[f.length - 1].y - r;
                        } else {
                            for (a = 0; a < n; a++) l.nx < a * s && (l = f[++o]), (p[a] = l);
                            o < f.length - 1 && (p[a - 1] = f[f.length - 2]);
                        }
                        return (
                            (this.ease = function (t) {
                                var e = p[(t * n) | 0] || p[n - 1];
                                return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                            }),
                            (this.ease.custom = this),
                            this.id && zi && zi.registerEase(this.id, this.ease),
                            this
                        );
                    }),
                    (e.getSVGData = function (e) {
                        return t.getSVGData(this, e);
                    }),
                    (t.create = function (e, n, r) {
                        return new t(e, n, r).ease;
                    }),
                    (t.register = function (t) {
                        (zi = t), Fi();
                    }),
                    (t.get = function (t) {
                        return zi.parseEase(t);
                    }),
                    (t.getSVGData = function (e, n) {
                        var r,
                            i,
                            a,
                            s,
                            o,
                            l,
                            c,
                            u,
                            d,
                            h,
                            f = (n = n || {}).width || 100,
                            p = n.height || 100,
                            m = n.x || 0,
                            _ = (n.y || 0) + p,
                            g = zi.utils.toArray(n.path)[0];
                        if ((n.invert && ((p = -p), (_ = 0)), "string" == typeof e && (e = zi.parseEase(e)), e.custom && (e = e.custom), e instanceof t))
                            r = Oi(
                                (function (t, e, n, r, i, a, s) {
                                    for (var o, l, c, u, d, h = t.length; --h > -1; ) for (l = (o = t[h]).length, c = 0; c < l; c += 2) (u = o[c]), (d = o[c + 1]), (o[c] = u * e + d * r + a), (o[c + 1] = u * n + d * i + s);
                                    return (t._dirty = 1), t;
                                })([e.segment], f, 0, 0, -p, m, _)
                            );
                        else {
                            for (r = [m, _], s = 1 / (c = Math.max(5, 200 * (n.precision || 1))), u = 5 / (c += 2), d = Ii(m + s * f), i = ((h = Ii(_ + e(s) * -p)) - _) / (d - m), a = 2; a < c; a++)
                                (o = Ii(m + a * s * f)), (l = Ii(_ + e(a * s) * -p)), (Math.abs((l - h) / (o - d) - i) > u || a === c - 1) && (r.push(d, h), (i = (l - h) / (o - d))), (d = o), (h = l);
                            r = "M" + r.join(",");
                        }
                        return g && g.setAttribute("d", r), r;
                    }),
                    t
                );
            })();
        Pi() && zi.registerPlugin(Bi), (Bi.version = "3.11.0"), Gr.registerPlugin(Bi);
        var qi = $(".faq__questions"),
            Hi = $(".faq__question-container"),
            Vi = $(".faq__open-icon"),
            Gi = $(".faq__question-answer"),
            Ui = "faq__question-container--active",
            Yi = "faq__answer-container--active",
            Xi = "faq__open-icon--active",
            Wi = 0;
        Bi.create("basicEase", "M0,0 C0.17,0.67 0.83,0.67 1,1 ");
        var $i = function () {
                Hi.on("click", function () {
                    var t = $(this),
                        e = t.parent().siblings().find(Hi);
                    e.each(function () {
                        var t = $(this);
                        if (t.hasClass(Ui)) {
                            t.removeClass(Ui).attr("aria-selected", "false"), t.next().removeClass(Yi).css("max-height", "0").attr("aria-expanded", "false");
                            var e = t.find(Vi);
                            e.removeClass(Xi), Gr.fromTo(e, { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: "basicEase" });
                        }
                    });
                    var n = t.find(Vi);
                    t.hasClass(Ui)
                        ? (n.removeClass(Xi), Gr.fromTo(n, { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: "basicEase" }))
                        : (n.addClass(Xi), Gr.fromTo(n, { duration: 0.3, rotation: 90 }, { duration: 0.3, rotation: 180, ease: "basicEase" })),
                        t.attr("aria-selected", "true"),
                        e.find(Hi).attr("aria-selected", "false"),
                        t.toggleClass(Ui);
                    var r = t.next();
                    r.toggleClass(Yi);
                    var i = r.hasClass(Yi) ? r[0].scrollHeight + "px" : "0";
                    r.css("max-height", i), t.hasClass(Ui) || t.attr("aria-selected", "false"), r.hasClass(Yi) ? r.attr("aria-expanded", "true") : r.hasClass(Yi) || r.attr("aria-expanded", "false");
                }),
                    Hi.on("keyup", function (t) {
                        if (13 === t.keyCode) {
                            var e = $(this),
                                n = e.parent().siblings().find(Hi);
                            n.each(function () {
                                var t = $(this);
                                if (t.hasClass(Ui)) {
                                    t.removeClass(Ui).attr("aria-selected", "false"), t.next().removeClass(Yi).css("max-height", "0").attr("aria-expanded", "false");
                                    var e = t.find(Vi);
                                    e.removeClass(Xi), Gr.fromTo(e, { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: "basicEase" });
                                }
                            });
                            var r = e.find(Vi);
                            e.hasClass(Ui)
                                ? (r.removeClass(Xi), Gr.fromTo(r, { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: "basicEase" }))
                                : (r.addClass(Xi), Gr.fromTo(r, { duration: 0.3, rotation: 90 }, { duration: 0.3, rotation: 180, ease: "basicEase" })),
                                e.attr("aria-selected", "true"),
                                n.find(Hi).attr("aria-selected", "false"),
                                e.toggleClass(Ui);
                            var i = e.next();
                            i.toggleClass(Yi);
                            var a = i.hasClass(Yi) ? i[0].scrollHeight + "px" : "0";
                            i.css("max-height", a), e.hasClass(Ui) || e.attr("aria-selected", "false"), i.hasClass(Yi) ? i.attr("aria-expanded", "true") : i.hasClass(Yi) || i.attr("aria-expanded", "false");
                        }
                    }),
                    qi.on("keydown", function (t) {
                        (39 !== t.keyCode && 37 !== t.keyCode) ||
                            (Gi[Wi].firstChild.setAttribute("tabindex", -1),
                            Gi[Wi].firstChild.setAttribute("aria-selected", "false"),
                            39 === t.keyCode ? ++Wi >= Gi.length && (Wi = 0) : 37 === t.keyCode && --Wi < 0 && (Wi = Gi.length - 1),
                            Gi[Wi].firstChild.setAttribute("tabindex", 0),
                            Gi[Wi].firstChild.setAttribute("aria-selected", "true"),
                            Gi[Wi].firstChild.focus());
                    });
            },
            Ki = function () {
                var t;
                ((t = t || {}).hasClass = function (t, e) {
                    return t.classList.contains(e);
                }),
                    (t.addClass = function (e, n) {
                        var r = n.split(" ");
                        e.classList.add(r[0]), r.length > 1 && t.addClass(e, r.slice(1).join(" "));
                    }),
                    (t.removeClass = function (e, n) {
                        var r = n.split(" ");
                        e.classList.remove(r[0]), r.length > 1 && t.removeClass(e, r.slice(1).join(" "));
                    }),
                    (function () {
                        var e = function (t) {
                            (this.element = t),
                                (this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute("id") + '"]')),
                                (this.firstFocusable = null),
                                (this.lastFocusable = null),
                                (this.moveFocusEl = null),
                                (this.modalFocus = this.element.getAttribute("data-modal-first-focus") ? this.element.querySelector(this.element.getAttribute("data-modal-first-focus")) : null),
                                (this.selectedTrigger = null),
                                (this.preventScrollEl = this.getPreventScrollEl()),
                                (this.showClass = "modal--is-visible"),
                                this.initModal();
                        };
                        function n(t) {
                            return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
                        }
                        (e.prototype.getPreventScrollEl = function () {
                            var t = !1,
                                e = this.element.getAttribute("data-modal-prevent-scroll");
                            return e && (t = document.querySelector(e)), t;
                        }),
                            (e.prototype.initModal = function () {
                                var e = this;
                                if (this.triggers)
                                    for (var n = 0; n < this.triggers.length; n++)
                                        this.triggers[n].addEventListener("click", function (n) {
                                            n.preventDefault(), t.hasClass(e.element, e.showClass) ? e.closeModal() : ((e.selectedTrigger = n.currentTarget), e.showModal(), e.initModalEvents());
                                        });
                                this.element.addEventListener("openModal", function (t) {
                                    t.detail && (e.selectedTrigger = t.detail), e.showModal(), e.initModalEvents();
                                }),
                                    this.element.addEventListener("closeModal", function (t) {
                                        t.detail && (e.selectedTrigger = t.detail), e.closeModal();
                                    }),
                                    t.hasClass(this.element, this.showClass) && this.initModalEvents();
                            }),
                            (e.prototype.showModal = function () {
                                var e = this;
                                t.addClass(this.element, this.showClass),
                                    this.getFocusableElements(),
                                    this.moveFocusEl &&
                                        (this.moveFocusEl.focus(),
                                        this.element.addEventListener("transitionend", function t(n) {
                                            e.moveFocusEl.focus(), e.element.removeEventListener("transitionend", t);
                                        })),
                                    this.emitModalEvents("modalIsOpen"),
                                    this.preventScrollEl && (this.preventScrollEl.style.overflow = "hidden");
                            }),
                            (e.prototype.closeModal = function () {
                                t.hasClass(this.element, this.showClass) &&
                                    (t.removeClass(this.element, this.showClass),
                                    (this.firstFocusable = null),
                                    (this.lastFocusable = null),
                                    (this.moveFocusEl = null),
                                    this.selectedTrigger && this.selectedTrigger.focus(),
                                    this.cancelModalEvents(),
                                    this.emitModalEvents("modalIsClose"),
                                    this.preventScrollEl && (this.preventScrollEl.style.overflow = ""));
                            }),
                            (e.prototype.initModalEvents = function () {
                                this.element.addEventListener("keydown", this), this.element.addEventListener("click", this);
                            }),
                            (e.prototype.cancelModalEvents = function () {
                                this.element.removeEventListener("keydown", this), this.element.removeEventListener("click", this);
                            }),
                            (e.prototype.handleEvent = function (t) {
                                switch (t.type) {
                                    case "click":
                                        this.initClick(t);
                                    case "keydown":
                                        this.initKeyDown(t);
                                }
                            }),
                            (e.prototype.initKeyDown = function (t) {
                                (t.keyCode && 9 == t.keyCode) || (t.key && "Tab" == t.key)
                                    ? this.trapFocus(t)
                                    : ((t.keyCode && 13 == t.keyCode) || (t.key && "Enter" == t.key)) && t.target.closest(".js-modal__close") && (t.preventDefault(), this.closeModal());
                            }),
                            (e.prototype.initClick = function (e) {
                                (e.target.closest(".js-modal__close") || t.hasClass(e.target, "js-modal")) && (e.preventDefault(), this.closeModal());
                            }),
                            (e.prototype.trapFocus = function (t) {
                                this.firstFocusable == document.activeElement && t.shiftKey && (t.preventDefault(), this.lastFocusable.focus()),
                                    this.lastFocusable != document.activeElement || t.shiftKey || (t.preventDefault(), this.firstFocusable.focus());
                            }),
                            (e.prototype.getFocusableElements = function () {
                                var t = this.element.querySelectorAll(i);
                                this.getFirstVisible(t), this.getLastVisible(t), this.getFirstFocusable();
                            }),
                            (e.prototype.getFirstVisible = function (t) {
                                for (var e = 0; e < t.length; e++)
                                    if (n(t[e])) {
                                        this.firstFocusable = t[e];
                                        break;
                                    }
                            }),
                            (e.prototype.getLastVisible = function (t) {
                                for (var e = t.length - 1; e >= 0; e--)
                                    if (n(t[e])) {
                                        this.lastFocusable = t[e];
                                        break;
                                    }
                            }),
                            (e.prototype.getFirstFocusable = function () {
                                if (this.modalFocus && Element.prototype.matches)
                                    if (this.modalFocus.matches(i)) this.moveFocusEl = this.modalFocus;
                                    else {
                                        this.moveFocusEl = !1;
                                        for (var t = this.modalFocus.querySelectorAll(i), e = 0; e < t.length; e++)
                                            if (n(t[e])) {
                                                this.moveFocusEl = t[e];
                                                break;
                                            }
                                        this.moveFocusEl || (this.moveFocusEl = this.firstFocusable);
                                    }
                                else this.moveFocusEl = this.firstFocusable;
                            }),
                            (e.prototype.emitModalEvents = function (t) {
                                var e = new CustomEvent(t, { detail: this.selectedTrigger });
                                this.element.dispatchEvent(e);
                            }),
                            (window.Modal = e);
                        var r = document.getElementsByClassName("js-modal"),
                            i =
                                '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
                        if (r.length > 0) {
                            for (var a = [], s = 0; s < r.length; s++)
                                !(function (t) {
                                    a.push(new e(r[t]));
                                })(s);
                            window.addEventListener("keydown", function (t) {
                                if ((t.keyCode && 27 == t.keyCode) || (t.key && "escape" == t.key.toLowerCase()))
                                    for (var e = 0; e < a.length; e++)
                                        !(function (t) {
                                            a[t].closeModal();
                                        })(e);
                            });
                        }
                    })(),
                    (function () {
                        var t = t || {};
                        (t.addClass = function (e, n) {
                            var r = n.split(" ");
                            e.classList.add(r[0]), r.length > 1 && t.addClass(e, r.slice(1).join(" "));
                        }),
                            (t.removeClass = function (e, n) {
                                var r = n.split(" ");
                                e.classList.remove(r[0]), r.length > 1 && t.removeClass(e, r.slice(1).join(" "));
                            }),
                            (function () {
                                var e = function (t) {
                                    (this.element = t),
                                        (this.modalContent = this.element.getElementsByClassName("js-modal-video__content")[0]),
                                        (this.media = this.element.getElementsByClassName("js-modal-video__media")[0]),
                                        (this.contentIsIframe = "iframe" == this.media.tagName.toLowerCase()),
                                        (this.modalIsOpen = !1),
                                        this.initModalVideo();
                                };
                                (e.prototype.initModalVideo = function () {
                                    var e = this;
                                    this.addLoadListener(),
                                        this.element.addEventListener("modalIsOpen", function (t) {
                                            (e.modalIsOpen = !0), e.media.setAttribute("src", t.detail.closest("[aria-controls]").getAttribute("data-url"));
                                        }),
                                        this.element.addEventListener("modalIsClose", function (n) {
                                            (e.modalIsOpen = !1), t.addClass(e.element, "modal--is-loading"), e.media.setAttribute("src", "");
                                        });
                                }),
                                    (e.prototype.addLoadListener = function () {
                                        var t = this;
                                        this.contentIsIframe
                                            ? (this.media.onload = function () {
                                                  t.revealContent();
                                              })
                                            : this.media.addEventListener("loadedmetadata", function () {
                                                  t.revealContent();
                                              });
                                    }),
                                    (e.prototype.revealContent = function () {
                                        this.modalIsOpen &&
                                            (t.removeClass(this.element, "modal--is-loading"), this.element.getAttribute("data-modal-first-focus") || (this.contentIsIframe ? this.media.contentWindow.focus() : this.media.focus()));
                                    });
                                var n = document.getElementsByClassName("js-modal-video__media");
                                if (n.length > 0)
                                    for (var r = 0; r < n.length; r++)
                                        !(function (t) {
                                            new e(n[t].closest(".js-modal"));
                                        })(r);
                            })();
                    })();
            },
            Qi = document.getElementById("spending-profile-core-action"),
            Zi = document.getElementById("spending-profile-core-card"),
            Ji = document.getElementById("see-core-spending-profile"),
            ta = document.getElementById("hide-core-spending-profile"),
            ea = document.getElementById("spending-profile-legacy-action"),
            na = document.getElementById("spending-profile-legacy-card"),
            ra = document.getElementById("see-legacy-spending-profile"),
            ia = document.getElementById("hide-legacy-spending-profile"),
            aa = function () {
                Qi.addEventListener("click", function () {
                    Zi.classList.toggle("spending-profile--active"), Ji.classList.toggle("hide"), ta.classList.toggle("show");
                }),
                    ea.addEventListener("click", function () {
                        na.classList.toggle("spending-profile--active"), ra.classList.toggle("hide"), ia.classList.toggle("show");
                    });
            };
        function sa(t) {
            return "number" == typeof t;
        }
        function oa(t) {
            return "string" == typeof t;
        }
        function la(t) {
            return "boolean" == typeof t;
        }
        function ca(t) {
            return "[object Object]" === Object.prototype.toString.call(t);
        }
        function ua(t) {
            return Math.abs(t);
        }
        function da(t) {
            return Math.sign(t);
        }
        function ha(t, e) {
            return ua(t - e);
        }
        function fa(t) {
            return va(t).map(Number);
        }
        function pa(t) {
            return t[ma(t)];
        }
        function ma(t) {
            return Math.max(0, t.length - 1);
        }
        function _a(t, e) {
            return e === ma(t);
        }
        function ga(t, e = 0) {
            return Array.from(Array(t), (t, n) => e + n);
        }
        function va(t) {
            return Object.keys(t);
        }
        function ya(t, e) {
            return [t, e].reduce(
                (t, e) => (
                    va(e).forEach((n) => {
                        const r = t[n],
                            i = e[n],
                            a = ca(r) && ca(i);
                        t[n] = a ? ya(r, i) : i;
                    }),
                    t
                ),
                {}
            );
        }
        function wa(t, e) {
            return void 0 !== e.MouseEvent && t instanceof e.MouseEvent;
        }
        function ba(t, e) {
            const n = ua(t - e);
            function r(e) {
                return e < t;
            }
            function i(t) {
                return t > e;
            }
            function a(t) {
                return r(t) || i(t);
            }
            const s = {
                length: n,
                max: e,
                min: t,
                constrain: function (n) {
                    return a(n) ? (r(n) ? t : e) : n;
                },
                reachedAny: a,
                reachedMax: i,
                reachedMin: r,
                removeOffset: function (t) {
                    return n ? t - n * Math.ceil((t - e) / n) : t;
                },
            };
            return s;
        }
        function xa(t, e, n) {
            const { constrain: r } = ba(0, t),
                i = t + 1;
            let a = s(e);
            function s(t) {
                return n ? ua((i + t) % i) : r(t);
            }
            function o() {
                return a;
            }
            function l() {
                return xa(t, o(), n);
            }
            const c = {
                get: o,
                set: function (t) {
                    return (a = s(t)), c;
                },
                add: function (t) {
                    return l().set(o() + t);
                },
                clone: l,
            };
            return c;
        }
        function Ta() {
            let t = [];
            const e = {
                add: function (n, r, i, a = { passive: !0 }) {
                    let s;
                    if ("addEventListener" in n) n.addEventListener(r, i, a), (s = () => n.removeEventListener(r, i, a));
                    else {
                        const t = n;
                        t.addListener(i), (s = () => t.removeListener(i));
                    }
                    return t.push(s), e;
                },
                clear: function () {
                    t = t.filter((t) => t());
                },
            };
            return e;
        }
        function Ea(t, e, n, r, i, a, s, o, l, c, u, d, h, f, p, m, _, g, v, y) {
            const { cross: w } = t,
                b = ["INPUT", "SELECT", "TEXTAREA"],
                x = { passive: !1 },
                T = Ta(),
                E = Ta(),
                M = ba(50, 225).constrain(p.measure(20)),
                C = { mouse: 300, touch: 400 },
                k = { mouse: 500, touch: 600 },
                S = m ? 43 : 25;
            let L = !1,
                A = 0,
                O = 0,
                z = !1,
                D = !1,
                P = !1,
                F = !1;
            function I(t) {
                const n = s.readPoint(t),
                    r = s.readPoint(t, w),
                    i = ha(n, A),
                    o = ha(r, O);
                if (!D && !F) {
                    if (!t.cancelable) return R(t);
                    if (((D = i > o), !D)) return R(t);
                }
                const c = s.pointerMove(t);
                i > _ && (P = !0), u.useFriction(0.3).useDuration(1), l.start(), a.add(e.apply(c)), t.preventDefault();
            }
            function R(t) {
                const n = d.byDistance(0, !1).index !== h.get(),
                    r = s.pointerUp(t) * (m ? k : C)[F ? "mouse" : "touch"],
                    i = (function (t, e) {
                        const n = h.add(-1 * da(t)),
                            r = d.byDistance(t, !m).distance;
                        return m || ua(t) < M ? r : g && e ? 0.5 * r : d.byIndex(n.get(), 0).distance;
                    })(e.apply(r), n),
                    a = (function (t, e) {
                        if (0 === t || 0 === e) return 0;
                        if (ua(t) <= ua(e)) return 0;
                        const n = ha(ua(t), ua(e));
                        return ua(n / t);
                    })(r, i),
                    o = S - 10 * a,
                    l = v + a / 50;
                (D = !1), (z = !1), E.clear(), u.useDuration(o).useFriction(l), c.distance(i, !m), (F = !1), f.emit("pointerUp");
            }
            function N(t) {
                P && (t.stopPropagation(), t.preventDefault());
            }
            return {
                init: function (t) {
                    if (!y) return;
                    function e(e) {
                        (la(y) || y(t, e)) &&
                            (function (t) {
                                const e = wa(t, i);
                                if (((F = e), e && 0 !== t.button)) return;
                                if (
                                    (function (t) {
                                        const e = t.nodeName || "";
                                        return b.includes(e);
                                    })(t.target)
                                )
                                    return;
                                (P = m && e && !t.buttons && L),
                                    (L = ha(a.get(), o.get()) >= 2),
                                    (z = !0),
                                    s.pointerDown(t),
                                    u.useFriction(0).useDuration(0),
                                    a.set(o),
                                    (function () {
                                        const t = F ? r : n;
                                        E.add(t, "touchmove", I, x).add(t, "touchend", R).add(t, "mousemove", I, x).add(t, "mouseup", R);
                                    })(),
                                    (A = s.readPoint(t)),
                                    (O = s.readPoint(t, w)),
                                    f.emit("pointerDown");
                            })(e);
                    }
                    const l = n;
                    T.add(l, "dragstart", (t) => t.preventDefault(), x)
                        .add(l, "touchmove", () => {}, x)
                        .add(l, "touchend", () => {})
                        .add(l, "touchstart", e)
                        .add(l, "mousedown", e)
                        .add(l, "touchcancel", R)
                        .add(l, "contextmenu", R)
                        .add(l, "click", N, !0);
                },
                pointerDown: function () {
                    return z;
                },
                destroy: function () {
                    T.clear(), E.clear();
                },
            };
        }
        function Ma(t, e) {
            let n, r;
            function i(t) {
                return t.timeStamp;
            }
            function a(n, r) {
                const i = "client" + ("x" === (r || t.scroll) ? "X" : "Y");
                return (wa(n, e) ? n : n.touches[0])[i];
            }
            return {
                pointerDown: function (t) {
                    return (n = t), (r = t), a(t);
                },
                pointerMove: function (t) {
                    const e = a(t) - a(r),
                        s = i(t) - i(n) > 170;
                    return (r = t), s && (n = t), e;
                },
                pointerUp: function (t) {
                    if (!n || !r) return 0;
                    const e = a(r) - a(n),
                        s = i(t) - i(n),
                        o = i(t) - i(r) > 170,
                        l = e / s;
                    return s && !o && ua(l) > 0.1 ? l : 0;
                },
                readPoint: a,
            };
        }
        function Ca(t, e, n, r, i, a, s) {
            let o,
                l,
                c = [],
                u = !1;
            function d(t) {
                return i.measureSize(s.measure(t));
            }
            return {
                init: function (i) {
                    if (!a) return;
                    (l = d(t)),
                        (c = r.map(d)),
                        (o = new ResizeObserver((s) => {
                            u ||
                                ((la(a) || a(i, s)) &&
                                    (function (a) {
                                        for (const s of a) {
                                            const a = s.target === t,
                                                o = r.indexOf(s.target),
                                                u = a ? l : c[o];
                                            if (ua(d(a ? t : r[o]) - u) >= 0.5) {
                                                n.requestAnimationFrame(() => {
                                                    i.reInit(), e.emit("resize");
                                                });
                                                break;
                                            }
                                        }
                                    })(s));
                        })),
                        [t].concat(r).forEach((t) => o.observe(t));
                },
                destroy: function () {
                    o && o.disconnect(), (u = !0);
                },
            };
        }
        function ka(t, e, n, r, i) {
            const a = i.measure(10),
                s = i.measure(50),
                o = ba(0.1, 0.99);
            let l = !1;
            return {
                constrain: function (i) {
                    if (l || !t.reachedAny(n.get()) || !t.reachedAny(e.get())) return;
                    const c = t.reachedMin(e.get()) ? "min" : "max",
                        u = ua(t[c] - e.get()),
                        d = n.get() - e.get(),
                        h = o.constrain(u / s);
                    n.subtract(d * h), !i && ua(d) < a && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
                },
                toggleActive: function (t) {
                    l = !t;
                },
            };
        }
        function Sa(t, e, n, r) {
            const i = e.min + 0.1,
                a = e.max + 0.1,
                { reachedMin: s, reachedMax: o } = ba(i, a);
            return {
                loop: function (e) {
                    if (
                        !(function (t) {
                            return 1 === t ? o(n.get()) : -1 === t && s(n.get());
                        })(e)
                    )
                        return;
                    const i = t * (-1 * e);
                    r.forEach((t) => t.add(i));
                },
            };
        }
        function La(t, e, n, r, i) {
            const { reachedAny: a, removeOffset: s, constrain: o } = r;
            function l(t) {
                return t.concat().sort((t, e) => ua(t) - ua(e))[0];
            }
            function c(e, r) {
                const i = [e, e + n, e - n];
                if (!t) return i[0];
                if (!r) return l(i);
                const a = i.filter((t) => da(t) === r);
                return a.length ? l(a) : pa(i) - n;
            }
            const u = {
                byDistance: function (n, r) {
                    const l = i.get() + n,
                        { index: u, distance: d } = (function (n) {
                            const r = t ? s(n) : o(n),
                                i = e
                                    .map((t) => t - r)
                                    .map((t) => c(t, 0))
                                    .map((t, e) => ({ diff: t, index: e }))
                                    .sort((t, e) => ua(t.diff) - ua(e.diff)),
                                { index: a } = i[0];
                            return { index: a, distance: r };
                        })(l),
                        h = !t && a(l);
                    return !r || h ? { index: u, distance: n } : { index: u, distance: n + c(e[u] - d, 0) };
                },
                byIndex: function (t, n) {
                    return { index: t, distance: c(e[t] - i.get(), n) };
                },
                shortcut: c,
            };
            return u;
        }
        function Aa(t) {
            let e = t;
            function n(t) {
                return sa(t) ? t : t.get();
            }
            const r = {
                get: function () {
                    return e;
                },
                set: function (t) {
                    e = n(t);
                },
                add: function (t) {
                    e += n(t);
                },
                subtract: function (t) {
                    e -= n(t);
                },
            };
            return r;
        }
        function Oa(t, e, n) {
            const r =
                    "x" === t.scroll
                        ? function (t) {
                              return `translate3d(${t}px,0px,0px)`;
                          }
                        : function (t) {
                              return `translate3d(0px,${t}px,0px)`;
                          },
                i = n.style;
            let a = !1;
            return {
                clear: function () {
                    a || ((i.transform = ""), n.getAttribute("style") || n.removeAttribute("style"));
                },
                to: function (t) {
                    a || (i.transform = r(e.apply(t)));
                },
                toggleActive: function (t) {
                    a = !t;
                },
            };
        }
        function za(t, e, n, r, i, a, s, o, l, c) {
            const u = fa(a),
                d = fa(a).reverse(),
                h = (function () {
                    const t = o[0];
                    return m(p(d, t), r, !1);
                })().concat(
                    (function () {
                        const t = n - o[0] - 1;
                        return m(p(u, t), -r, !0);
                    })()
                );
            function f(t, e) {
                return t.reduce((t, e) => t - a[e], e);
            }
            function p(t, e) {
                return t.reduce((t, n) => (f(t, e) > 0 ? t.concat([n]) : t), []);
            }
            function m(a, o, u) {
                const d = (function (t) {
                    return s.map((e, r) => ({ start: e - i[r] + 0.5 + t, end: e + n - 0.5 + t }));
                })(o);
                return a.map((n) => {
                    const i = u ? 0 : -r,
                        a = u ? r : 0,
                        s = u ? "end" : "start",
                        o = d[n][s];
                    return { index: n, loopPoint: o, slideLocation: Aa(-1), translate: Oa(t, e, c[n]), target: () => (l.get() > o ? i : a) };
                });
            }
            return {
                canLoop: function () {
                    return h.every(
                        ({ index: t }) =>
                            f(
                                u.filter((e) => e !== t),
                                n
                            ) <= 0.1
                    );
                },
                clear: function () {
                    h.forEach((t) => t.translate.clear());
                },
                loop: function () {
                    h.forEach((t) => {
                        const { target: e, translate: n, slideLocation: r } = t,
                            i = e();
                        i !== r.get() && (n.to(i), r.set(i));
                    });
                },
                loopPoints: h,
            };
        }
        function Da(t, e, n) {
            let r,
                i = !1;
            return {
                init: function (a) {
                    n &&
                        ((r = new MutationObserver((t) => {
                            i ||
                                ((la(n) || n(a, t)) &&
                                    (function (t) {
                                        for (const n of t)
                                            if ("childList" === n.type) {
                                                a.reInit(), e.emit("slidesChanged");
                                                break;
                                            }
                                    })(t));
                        })),
                        r.observe(t, { childList: !0 }));
                },
                destroy: function () {
                    r && r.disconnect(), (i = !0);
                },
            };
        }
        function Pa(t, e, n, r) {
            const i = {};
            let a,
                s = null,
                o = null,
                l = !1;
            return {
                init: function () {
                    (a = new IntersectionObserver(
                        (t) => {
                            l ||
                                (t.forEach((t) => {
                                    const n = e.indexOf(t.target);
                                    i[n] = t;
                                }),
                                (s = null),
                                (o = null),
                                n.emit("slidesInView"));
                        },
                        { root: t.parentElement, threshold: r }
                    )),
                        e.forEach((t) => a.observe(t));
                },
                destroy: function () {
                    a && a.disconnect(), (l = !0);
                },
                get: function (t = !0) {
                    if (t && s) return s;
                    if (!t && o) return o;
                    const e = (function (t) {
                        return va(i).reduce((e, n) => {
                            const r = parseInt(n),
                                { isIntersecting: a } = i[r];
                            return ((t && a) || (!t && !a)) && e.push(r), e;
                        }, []);
                    })(t);
                    return t && (s = e), t || (o = e), e;
                },
            };
        }
        function Fa(t, e, n, r, i, a, s, o, l) {
            const { startEdge: c, endEdge: u } = t,
                d = sa(r);
            return {
                groupSlides: function (t) {
                    return d
                        ? (function (t, e) {
                              return fa(t)
                                  .filter((t) => t % e == 0)
                                  .map((n) => t.slice(n, n + e));
                          })(t, r)
                        : (function (t) {
                              return t.length
                                  ? fa(t)
                                        .reduce((r, d) => {
                                            const h = pa(r) || 0,
                                                f = 0 === h,
                                                p = d === ma(t),
                                                m = a[c] - s[h][c],
                                                _ = a[c] - s[d][u],
                                                g = !i && f ? e.apply(o) : 0;
                                            return ua(_ - (!i && p ? e.apply(l) : 0) - (m + g)) > n && r.push(d), p && r.push(t.length), r;
                                        }, [])
                                        .map((e, n, r) => {
                                            const i = Math.max(r[n - 1] || 0);
                                            return t.slice(i, e);
                                        })
                                  : [];
                          })(t);
                },
            };
        }
        function Ia(t, e, n, r, i, a, s, o) {
            const {
                    align: l,
                    axis: c,
                    direction: u,
                    startIndex: d,
                    loop: h,
                    duration: f,
                    dragFree: p,
                    dragThreshold: m,
                    inViewThreshold: _,
                    slidesToScroll: g,
                    skipSnaps: v,
                    containScroll: y,
                    watchResize: w,
                    watchSlides: b,
                    watchDrag: x,
                } = a,
                T = {
                    measure: function (t) {
                        const { offsetTop: e, offsetLeft: n, offsetWidth: r, offsetHeight: i } = t;
                        return { top: e, right: n + r, bottom: e + i, left: n, width: r, height: i };
                    },
                },
                E = T.measure(e),
                M = n.map(T.measure),
                C = (function (t) {
                    const e = "rtl" === t ? -1 : 1,
                        n = {
                            apply: function (t) {
                                return t * e;
                            },
                        };
                    return n;
                })(u),
                k = (function (t, e) {
                    const n = "y" === t ? "y" : "x";
                    return {
                        scroll: n,
                        cross: "y" === t ? "x" : "y",
                        startEdge: "y" === n ? "top" : "rtl" === e ? "right" : "left",
                        endEdge: "y" === n ? "bottom" : "rtl" === e ? "left" : "right",
                        measureSize: function (t) {
                            const { width: e, height: r } = t;
                            return "x" === n ? e : r;
                        },
                    };
                })(c, u),
                S = k.measureSize(E),
                L = (function (t) {
                    const e = {
                        measure: function (e) {
                            return t * (e / 100);
                        },
                    };
                    return e;
                })(S),
                A = (function (t, e) {
                    const n = {
                        start: function () {
                            return 0;
                        },
                        center: function (t) {
                            return r(t) / 2;
                        },
                        end: r,
                    };
                    function r(t) {
                        return e - t;
                    }
                    const i = {
                        measure: function (r, i) {
                            return oa(t) ? n[t](r) : t(e, r, i);
                        },
                    };
                    return i;
                })(l, S),
                O = !h && !!y,
                z = h || !!y,
                { slideSizes: D, slideSizesWithGaps: P, startGap: F, endGap: I } = (function (t, e, n, r, i, a) {
                    const { measureSize: s, startEdge: o, endEdge: l } = t,
                        c = n[0] && i,
                        u = (function () {
                            if (!c) return 0;
                            const t = n[0];
                            return ua(e[o] - t[o]);
                        })(),
                        d = (function () {
                            if (!c) return 0;
                            const t = a.getComputedStyle(pa(r));
                            return parseFloat(t.getPropertyValue(`margin-${l}`));
                        })(),
                        h = n.map(s),
                        f = n
                            .map((t, e, n) => {
                                const r = !e,
                                    i = _a(n, e);
                                return r ? h[e] + u : i ? h[e] + d : n[e + 1][o] - t[o];
                            })
                            .map(ua);
                    return { slideSizes: h, slideSizesWithGaps: f, startGap: u, endGap: d };
                })(k, E, M, n, z, i),
                R = Fa(k, C, S, g, h, E, M, F, I),
                { snaps: N, snapsAligned: j } = (function (t, e, n, r, i) {
                    const { startEdge: a, endEdge: s } = t,
                        { groupSlides: o } = i,
                        l = o(r)
                            .map((t) => pa(t)[s] - t[0][a])
                            .map(ua)
                            .map(e.measure),
                        c = r.map((t) => n[a] - t[a]).map((t) => -ua(t)),
                        u = o(c)
                            .map((t) => t[0])
                            .map((t, e) => t + l[e]);
                    return { snaps: c, snapsAligned: u };
                })(k, A, E, M, R),
                B = -pa(N) + pa(P),
                { snapsContained: q, scrollContainLimit: H } = (function (t, e, n, r) {
                    const i = ba(-e + t, 0),
                        a = n
                            .map((t, e) => {
                                const r = !e,
                                    a = _a(n, e);
                                return r ? i.max : a ? i.min : i.constrain(t);
                            })
                            .map((t) => parseFloat(t.toFixed(3))),
                        s = (function () {
                            const t = a[0],
                                e = pa(a);
                            return ba(a.lastIndexOf(t), a.indexOf(e) + 1);
                        })();
                    return {
                        snapsContained: (function () {
                            if (e <= t) return [i.max];
                            if ("keepSnaps" === r) return a;
                            const { min: n, max: o } = s;
                            return a.slice(n, o);
                        })(),
                        scrollContainLimit: s,
                    };
                })(S, B, j, y),
                V = O ? q : j,
                { limit: G } = (function (t, e, n) {
                    const r = e[0];
                    return { limit: ba(n ? r - t : pa(e), r) };
                })(B, V, h),
                U = xa(ma(V), d, h),
                Y = U.clone(),
                X = fa(n),
                W = {
                    start: () => o.start(ot),
                    stop: () => o.stop(ot),
                    update: () =>
                        (({ dragHandler: t, scrollBody: e, scrollBounds: n, options: { loop: r } }) => {
                            r || n.constrain(t.pointerDown()), e.seek();
                        })(ot),
                    render: (t) =>
                        (({ scrollBody: t, translate: e, location: n, offsetLocation: r, scrollLooper: i, slideLooper: a, dragHandler: s, animation: o, eventHandler: l, options: { loop: c } }, u) => {
                            const d = t.velocity(),
                                h = t.settled();
                            h && !s.pointerDown() && (o.stop(), l.emit("settle")), h || l.emit("scroll"), r.set(n.get() - d + d * u), c && (i.loop(t.direction()), a.loop()), e.to(r.get());
                        })(ot, t),
                },
                $ = V[U.get()],
                K = Aa($),
                Q = Aa($),
                Z = Aa($),
                J = (function (t, e, n, r, i) {
                    let a = 0,
                        s = 0,
                        o = r,
                        l = i,
                        c = t.get(),
                        u = 0;
                    function d(t) {
                        return (o = t), f;
                    }
                    function h(t) {
                        return (l = t), f;
                    }
                    const f = {
                        direction: function () {
                            return s;
                        },
                        duration: function () {
                            return o;
                        },
                        velocity: function () {
                            return a;
                        },
                        seek: function () {
                            const e = n.get() - t.get();
                            let r = 0;
                            return o ? ((a += e / o), (a *= l), (c += a), t.add(a), (r = c - u)) : ((a = 0), t.set(n), (r = e)), (s = da(r)), (u = c), f;
                        },
                        settled: function () {
                            return ua(n.get() - e.get()) < 0.001;
                        },
                        useBaseFriction: function () {
                            return h(i);
                        },
                        useBaseDuration: function () {
                            return d(r);
                        },
                        useFriction: h,
                        useDuration: d,
                    };
                    return f;
                })(K, Q, Z, f, 0.68),
                tt = La(h, V, B, G, Z),
                et = (function (t, e, n, r, i, a) {
                    function s(r) {
                        const s = r.distance,
                            o = r.index !== e.get();
                        i.add(s), s && t.start(), o && (n.set(e.get()), e.set(r.index), a.emit("select"));
                    }
                    const o = {
                        distance: function (t, e) {
                            s(r.byDistance(t, e));
                        },
                        index: function (t, n) {
                            const i = e.clone().set(t);
                            s(r.byIndex(i.get(), n));
                        },
                    };
                    return o;
                })(W, U, Y, tt, Z, s),
                nt = (function (t) {
                    const { max: e, length: n } = t,
                        r = {
                            get: function (t) {
                                return n ? (t - e) / -n : 0;
                            },
                        };
                    return r;
                })(G),
                rt = Ta(),
                it = Pa(e, n, s, _),
                { slideRegistry: at } = (function (t, e, n, r, i, a, s) {
                    const { groupSlides: o } = a,
                        { min: l, max: c } = i;
                    return {
                        slideRegistry: (function () {
                            const i = o(s);
                            return !n || "keepSnaps" === r || e <= t
                                ? i
                                : i.slice(l, c).map((t, e, n) => {
                                      const r = !e,
                                          i = _a(n, e);
                                      return r ? ga(pa(n[0]) + 1) : i ? ga(ma(s) - pa(n)[0] + 1, pa(n)[0]) : t;
                                  });
                        })(),
                    };
                })(S, B, O, y, H, R, X),
                st = (function (t, e, n, r, i, a) {
                    let s = 0;
                    function o(t) {
                        "Tab" === t.code && (s = new Date().getTime());
                    }
                    function l(o) {
                        a.add(
                            o,
                            "focus",
                            () => {
                                if (new Date().getTime() - s > 10) return;
                                t.scrollLeft = 0;
                                const a = e.indexOf(o),
                                    l = n.findIndex((t) => t.includes(a));
                                sa(l) && (i.useDuration(0), r.index(l, 0));
                            },
                            { passive: !0, capture: !0 }
                        );
                    }
                    return {
                        init: function () {
                            a.add(document, "keydown", o, !1), e.forEach(l);
                        },
                    };
                })(t, n, at, et, J, rt),
                ot = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: s,
                    containerRect: E,
                    slideRects: M,
                    animation: W,
                    axis: k,
                    direction: C,
                    dragHandler: Ea(k, C, t, r, i, Z, Ma(k, i), K, W, et, J, tt, U, s, L, p, m, v, 0.68, x),
                    eventStore: rt,
                    percentOfView: L,
                    index: U,
                    indexPrevious: Y,
                    limit: G,
                    location: K,
                    offsetLocation: Q,
                    options: a,
                    resizeHandler: Ca(e, s, i, n, k, w, T),
                    scrollBody: J,
                    scrollBounds: ka(G, K, Z, J, L),
                    scrollLooper: Sa(B, G, Q, [K, Q, Z]),
                    scrollProgress: nt,
                    scrollSnapList: V.map(nt.get),
                    scrollSnaps: V,
                    scrollTarget: tt,
                    scrollTo: et,
                    slideLooper: za(k, C, S, B, D, P, N, V, Q, n),
                    slideFocus: st,
                    slidesHandler: Da(e, s, b),
                    slidesInView: it,
                    slideIndexes: X,
                    slideRegistry: at,
                    slidesToScroll: R,
                    target: Z,
                    translate: Oa(k, C, e),
                };
            return ot;
        }
        const Ra = {
            align: "center",
            axis: "x",
            container: null,
            slides: null,
            containScroll: "trimSnaps",
            direction: "ltr",
            slidesToScroll: 1,
            inViewThreshold: 0,
            breakpoints: {},
            dragFree: !1,
            dragThreshold: 10,
            loop: !1,
            skipSnaps: !1,
            duration: 25,
            startIndex: 0,
            active: !0,
            watchDrag: !0,
            watchResize: !0,
            watchSlides: !0,
        };
        function Na(t) {
            function e(t, e) {
                return ya(t, e || {});
            }
            const n = {
                mergeOptions: e,
                optionsAtMedia: function (n) {
                    const r = n.breakpoints || {},
                        i = va(r)
                            .filter((e) => t.matchMedia(e).matches)
                            .map((t) => r[t])
                            .reduce((t, n) => e(t, n), {});
                    return e(n, i);
                },
                optionsMediaQueries: function (e) {
                    return e
                        .map((t) => va(t.breakpoints || {}))
                        .reduce((t, e) => t.concat(e), [])
                        .map(t.matchMedia);
                },
            };
            return n;
        }
        function ja(t, e, n) {
            const r = t.ownerDocument,
                i = r.defaultView,
                a = Na(i),
                s = (function (t) {
                    let e = [];
                    return {
                        init: function (n, r) {
                            return (e = r.filter(({ options: e }) => !1 !== t.optionsAtMedia(e).active)), e.forEach((e) => e.init(n, t)), r.reduce((t, e) => Object.assign(t, { [e.name]: e }), {});
                        },
                        destroy: function () {
                            e = e.filter((t) => t.destroy());
                        },
                    };
                })(a),
                o = Ta(),
                l = Ta(),
                c = (function () {
                    const t = {};
                    let e;
                    function n(e) {
                        return t[e] || [];
                    }
                    const r = {
                        init: function (t) {
                            e = t;
                        },
                        emit: function (t) {
                            return n(t).forEach((n) => n(e, t)), r;
                        },
                        off: function (e, i) {
                            return (t[e] = n(e).filter((t) => t !== i)), r;
                        },
                        on: function (e, i) {
                            return (t[e] = n(e).concat([i])), r;
                        },
                    };
                    return r;
                })(),
                { animationRealms: u } = ja,
                { mergeOptions: d, optionsAtMedia: h, optionsMediaQueries: f } = a,
                { on: p, off: m, emit: _ } = c,
                g = S;
            let v,
                y,
                w,
                b,
                x = !1,
                T = d(Ra, ja.globalOptions),
                E = d(T),
                M = [];
            function C(e, n) {
                const a = Ia(t, w, b, r, i, e, c, n);
                if (e.loop && !a.slideLooper.canLoop()) {
                    return C(Object.assign({}, e, { loop: !1 }), n);
                }
                return a;
            }
            function k(e, n) {
                if (x) return;
                const a = u.find((t) => t.window === i),
                    c =
                        a ||
                        (function (t) {
                            const e = 1e3 / 60;
                            let n = [],
                                r = null,
                                i = 0,
                                a = 0;
                            function s(o) {
                                r || (r = o);
                                const l = o - r;
                                for (r = o, i += l; i >= e; ) n.forEach(({ animation: t }) => t.update()), (i -= e);
                                const c = ua(i / e);
                                n.forEach(({ animation: t }) => t.render(c)), a && t.requestAnimationFrame(s);
                            }
                            return {
                                start: function (e) {
                                    n.includes(e) || n.push(e), a || (a = t.requestAnimationFrame(s));
                                },
                                stop: function (e) {
                                    (n = n.filter((t) => t !== e)), n.length || (t.cancelAnimationFrame(a), (r = null), (i = 0), (a = 0));
                                },
                                reset: function () {
                                    (r = null), (i = 0);
                                },
                                window: t,
                            };
                        })(i);
                a || u.push(c),
                    (T = d(T, e)),
                    (E = h(T)),
                    (M = n || M),
                    (function () {
                        const { container: e, slides: n } = E,
                            r = oa(e) ? t.querySelector(e) : e;
                        w = r || t.children[0];
                        const i = oa(n) ? w.querySelectorAll(n) : n;
                        b = [].slice.call(i || w.children);
                    })(),
                    (v = C(E, c)),
                    f([T, ...M.map(({ options: t }) => t)]).forEach((t) => o.add(t, "change", S)),
                    E.active &&
                        (v.translate.to(v.location.get()),
                        v.slidesInView.init(),
                        v.slideFocus.init(),
                        v.eventHandler.init(z),
                        v.resizeHandler.init(z),
                        v.slidesHandler.init(z),
                        l.add(r, "visibilitychange", () => {
                            r.hidden && c.reset();
                        }),
                        v.options.loop && v.slideLooper.loop(),
                        w.offsetParent && b.length && v.dragHandler.init(z),
                        (y = s.init(z, M)));
            }
            function S(t, e) {
                const n = O();
                L(), k(d({ startIndex: n }, t), e), c.emit("reInit");
            }
            function L() {
                v.dragHandler.destroy(),
                    v.animation.stop(),
                    v.eventStore.clear(),
                    v.translate.clear(),
                    v.slideLooper.clear(),
                    v.resizeHandler.destroy(),
                    v.slidesHandler.destroy(),
                    v.slidesInView.destroy(),
                    s.destroy(),
                    o.clear(),
                    l.clear();
            }
            function A(t, e, n) {
                E.active && !x && (v.scrollBody.useBaseFriction().useDuration(e ? 0 : E.duration), v.scrollTo.index(t, n || 0));
            }
            function O() {
                return v.index.get();
            }
            const z = {
                canScrollNext: function () {
                    return v.index.add(1).get() !== O();
                },
                canScrollPrev: function () {
                    return v.index.add(-1).get() !== O();
                },
                containerNode: function () {
                    return w;
                },
                internalEngine: function () {
                    return v;
                },
                destroy: function () {
                    x || ((x = !0), o.clear(), L(), c.emit("destroy"));
                },
                off: m,
                on: p,
                emit: _,
                plugins: function () {
                    return y;
                },
                previousScrollSnap: function () {
                    return v.indexPrevious.get();
                },
                reInit: g,
                rootNode: function () {
                    return t;
                },
                scrollNext: function (t) {
                    A(v.index.add(1).get(), !0 === t, -1);
                },
                scrollPrev: function (t) {
                    A(v.index.add(-1).get(), !0 === t, 1);
                },
                scrollProgress: function () {
                    return v.scrollProgress.get(v.location.get());
                },
                scrollSnapList: function () {
                    return v.scrollSnapList;
                },
                scrollTo: A,
                selectedScrollSnap: O,
                slideNodes: function () {
                    return b;
                },
                slidesInView: function () {
                    return v.slidesInView.get();
                },
                slidesNotInView: function () {
                    return v.slidesInView.get(!1);
                },
            };
            return k(e, n), setTimeout(() => c.emit("init"), 0), z;
        }
        function Ba(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = document.querySelectorAll(t),
                r = [];
            return (
                n.forEach(function (t) {
                    var n = ja(t, e);
                    r.push(n);
                }),
                r
            );
        }
        (ja.animationRealms = []), (ja.globalOptions = void 0);
        var qa = function () {
                var t = Ba("#service-highlights-carousel .embla__viewport", { loop: !1, align: "start" })[0],
                    e = "service-highlights-carousel",
                    n = document.querySelector("#".concat(e, " #service-highlights-prev")),
                    r = document.querySelector("#".concat(e, " #service-highlights-next")),
                    i = function () {
                        n && r && (n.classList.toggle("is-disabled", !t.canScrollPrev()), r.classList.toggle("is-disabled", !t.canScrollNext()));
                    };
                n &&
                    r &&
                    (n.addEventListener("click", function () {
                        t.scrollPrev(), i();
                    }),
                    r.addEventListener("click", function () {
                        t.scrollNext(), i();
                    })),
                    t.on("scroll", i),
                    i();
            },
            Ha = function () {
                var t,
                    e,
                    n,
                    r,
                    i = { loop: !1, align: "start" },
                    a = !1,
                    s = function () {
                        e.scrollPrev(), l();
                    },
                    o = function () {
                        e.scrollNext(), l();
                    },
                    l = function () {
                        n && r && (n.classList.toggle("is-disabled", !e.canScrollPrev()), r.classList.toggle("is-disabled", !e.canScrollNext()));
                    },
                    c = function () {
                        var c,
                            u = window.matchMedia("(max-width: 991px)").matches;
                        u !== a &&
                            ((a = u)
                                ? ((i.active = !0),
                                  (t = Ba("#testimonials-highlights-carousel .embla__viewport", i)),
                                  (e = t[0]),
                                  (c = "testimonials-highlights-carousel"),
                                  (n = document.querySelector("#".concat(c, " #testimonials-highlights-prev"))),
                                  (r = document.querySelector("#".concat(c, " #testimonials-highlights-next"))),
                                  n && r && (n.removeEventListener("click", s), r.removeEventListener("click", o), n.addEventListener("click", s), r.addEventListener("click", o), l()),
                                  e.on("scroll", l))
                                : ((i.active = !1), e && e.destroy()));
                    };
                c(), window.addEventListener("resize", c);
            },
            Va = function () {
                var t,
                    e,
                    n,
                    r,
                    i = { loop: !1, align: "start" },
                    a = !1,
                    s = function () {
                        e.scrollPrev(), l();
                    },
                    o = function () {
                        e.scrollNext(), l();
                    },
                    l = function () {
                        n && r && (n.classList.toggle("is-disabled", !e.canScrollPrev()), r.classList.toggle("is-disabled", !e.canScrollNext()));
                    },
                    c = function () {
                        var c,
                            u = window.matchMedia("(max-width: 991px)").matches;
                        u !== a &&
                            ((a = u)
                                ? ((i.active = !0),
                                  (t = Ba("#insights-highlights-carousel .embla__viewport", i)),
                                  (e = t[0]),
                                  (c = "insights-highlights-carousel"),
                                  (n = document.querySelector("#".concat(c, " #insights-highlights-prev"))),
                                  (r = document.querySelector("#".concat(c, " #insights-highlights-next"))),
                                  n && r && (n.removeEventListener("click", s), r.removeEventListener("click", o), n.addEventListener("click", s), r.addEventListener("click", o), l()),
                                  e.on("scroll", l))
                                : ((i.active = !1), e && e.destroy()));
                    };
                c(), window.addEventListener("resize", c);
            },
            Ga = function () {
                document.querySelectorAll(".team-action").forEach(function (t) {
                    t.addEventListener("click", function () {
                        var e = document.querySelector(".team-drawer__container");
                        switch (((e.innerHTML = ""), t.getAttribute("data-team-member"))) {
                            case "mark-mcnulty":
                                var n = document.createElement("h2");
                                (n.className = "body-text--secondary heading--team-member team-drawer__heading "),
                                    (n.innerHTML = 'Mark McNulty<span class="small-regular small-regular--designations-drawer team-drawer__designation">BA, CIM, CFP®</span>'),
                                    e.appendChild(n);
                                var r = document.createElement("h3");
                                (r.className = "all-caps team-member-role--drawer team-drawer__role"), (r.innerHTML = "Senior Wealth Manager"), e.appendChild(r);
                                var i = document.createElement("img");
                                (i.src = "https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized.jpg"),
                                    (i.loading = "lazy"),
                                    (i.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (i.alt = ""),
                                    (i.width = "1410"),
                                    (i.srcset =
                                        "https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-500.jpg 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-800.jpg 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-1080.jpg 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized.jpg 1410w"),
                                    (i.className = "team-drawer__img"),
                                    e.appendChild(i);
                                var a = document.createElement("div");
                                (a.className = "team-drawer__bio"),
                                    (a.innerHTML =
                                        '<p class="body-text--primary team-drawer__bio-paragraph">Mark is a widely recognized expert in Canada on financial and retirement planning for dentists. For over twenty years Mark has been a speaker for the Ontario Dental Association and a regular contributor to Ontario Dentist, the journal of the Ontario Dental Association.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark is also the co-founder of The Professional Advisory, a publication designed to provide non-clinical information to dentists, with close to 100 issues to date. In addition to multiple television and radio appearances, Mark has authored three books, the most recent is The $6 Million Dentist.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark has been with his wife, Krystyna for 24 years. They have three daughters ages 13, 11 and 9 and live in Unionville, Ontario. In his free time, Mark plays tennis, volleyball and touch football, which is why he is often injured</p>'),
                                    e.appendChild(a);
                                break;
                            case "michael-wilson":
                                var s = document.createElement("h2");
                                (s.className = "body-text--secondary heading--team-member team-drawer__heading"),
                                    (s.innerHTML = 'Michael Wilson<span class="small-regular small-regular--designations-drawer team-drawer__designation">CPA, CA, CIM, CFP®</span>'),
                                    e.appendChild(s);
                                var o = document.createElement("h3");
                                (o.className = "all-caps team-member-role--drawer team-drawer__role"), (o.innerHTML = "Senior Financial Planner"), e.appendChild(o);
                                var l = document.createElement("img");
                                (l.src = "https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569d3c354626e83313_team-members_drawer_michael-wilson_1404w_v3_optimized.jpg"),
                                    (l.loading = "lazy"),
                                    (l.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (l.alt = ""),
                                    (l.width = "1410"),
                                    (l.srcset =
                                        "https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569d3c354626e83313_team-members_drawer_michael-wilson_1404w_v3_optimized-p-500.jpg 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569d3c354626e83313_team-members_drawer_michael-wilson_1404w_v3_optimized-p-800.jpg 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569d3c354626e83313_team-members_drawer_michael-wilson_1404w_v3_optimized-p-1080.jpg 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569d3c354626e83313_team-members_drawer_michael-wilson_1404w_v3_optimized.jpg 1410w"),
                                    (l.className = "team-drawer__img"),
                                    e.appendChild(l);
                                var c = document.createElement("div");
                                (c.className = "team-drawer__bio"),
                                    (c.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>Michael's approach to financial advice is rooted in a deep understanding that it's about more than just having a plan—it's about having the right plan tailored to your entire life, not just your finances. This philosophy is built on a foundation of trusted relationships and a true grasp of each client's unique life situation.</p><p class='body-text--primary team-drawer__bio-paragraph'>A proud alumnus of the Queen’s School of Business, Michael’s academic journey led him to acquire a diverse array of professional designations including Chartered Accountant (CPA, CA), Chartered Investment Management (CIM®), and Certified Financial Planner® (CFP®).</p><p class='body-text--primary team-drawer__bio-paragraph'>Since 2012, Michael has dedicated himself to working closely with Mark and serving the specific needs of Dentists. His commitment and expertise have earned him the position of equity partner at McNulty Group.</p><p class='body-text--primary team-drawer__bio-paragraph'>Outside of his professional realm, Michael's life is deeply rooted in Vancouver, where he resides with his wife Meagan and their daughter Elsie. A man of varied interests, he is an avid cook and cyclist, with a passion for the great outdoors. His love for skiing is a lifelong affair, having grown up as a member of the Devils Glen Country Club.</p><p class='body-text--primary team-drawer__bio-paragraph'>Michael has worked very closely with Mark and Dentists since 2012. Today he is an equity partner at McNulty Group.</p>"),
                                    e.appendChild(c);
                                break;
                            case "karen-barrow":
                                var u = document.createElement("h2");
                                (u.className = "body-text--secondary heading--team-member team-drawer__heading"),
                                    (u.innerHTML = 'Karen Barrow<span class="small-regular small-regular--designations-drawer team-drawer__designation">BSc</span>'),
                                    e.appendChild(u);
                                var d = document.createElement("h3");
                                (d.className = "all-caps team-member-role--drawer team-drawer__role"), (d.innerHTML = "Senior Client Services Manager"), e.appendChild(d);
                                var h = document.createElement("img");
                                (h.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc540f87898bea381495_team-members_drawer_karen-barrow_1404w_v3_optimized.jpg"),
                                    (h.loading = "lazy"),
                                    (h.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (h.alt = ""),
                                    (h.width = "1410"),
                                    (h.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc540f87898bea381495_team-members_drawer_karen-barrow_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc540f87898bea381495_team-members_drawer_karen-barrow_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc540f87898bea381495_team-members_drawer_karen-barrow_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc540f87898bea381495_team-members_drawer_karen-barrow_1404w_v3_optimized.jpg 1410w"),
                                    (h.className = "team-drawer__img"),
                                    e.appendChild(h);
                                var f = document.createElement("div");
                                (f.className = "team-drawer__bio"),
                                    (f.innerHTML =
                                        '<p class="body-text--primary team-drawer__bio-paragraph">Karen has been a member of the McNulty Group for over fifteen years. She brought with her national and international financial industry experience, having worked in Toronto for a fund company and in London, England for J.P. Morgan. Since she arrived at McNulty Group, she has worked in all areas of the business as an assistant financial planner, portfolio administrator, branch administrator, account executive, and most recently as Manager of Client Services.</p><p class="body-text--primary team-drawer__bio-paragraph">She strives to provide a high level of client service through her day-to-day operations and communication with McNulty Group families and offers a personal, friendly touch with her easygoing and energetic nature.</p><p class="body-text--primary team-drawer__bio-paragraph">In her free time, Karen enjoys running, skiing, spin class, music, and spending time with her son Jack and daughter Lauren.</p>'),
                                    e.appendChild(f);
                                break;
                            case "robert-mark":
                                var p = document.createElement("h2");
                                (p.className = "body-text--secondary heading--team-member team-drawer__heading"),
                                    (p.innerHTML = 'Robert Mark<span class="small-regular small-regular--designations-drawer team-drawer__designation">CFA</span>'),
                                    e.appendChild(p);
                                var m = document.createElement("h3");
                                (m.className = "all-caps team-member-role--drawer team-drawer__role"), (m.innerHTML = "Senior Portfolio Manager"), e.appendChild(m);
                                var _ = document.createElement("img");
                                (_.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56d2f91a30381a6832_team-members_drawer_robert-mark_1404w_v3_optimized.jpg"),
                                    (_.loading = "lazy"),
                                    (_.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (_.alt = ""),
                                    (_.width = "1410"),
                                    (_.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56d2f91a30381a6832_team-members_drawer_robert-mark_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56d2f91a30381a6832_team-members_drawer_robert-mark_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56d2f91a30381a6832_team-members_drawer_robert-mark_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56d2f91a30381a6832_team-members_drawer_robert-mark_1404w_v3_optimized.jpg 1410w"),
                                    (_.className = "team-drawer__img"),
                                    e.appendChild(_);
                                var g = document.createElement("div");
                                (g.className = "team-drawer__bio"),
                                    (g.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>Rob joined the McNulty Group after a twenty-plus-year career on Bay Street. Prior to joining the firm, Rob was a portfolio manager and investment strategist at two of Canada’s most respected investment firms, MacDougall, MacDougall &amp; MacTier (3Macs) and Raymond James Canada.</p><p class='body-text--primary team-drawer__bio-paragraph'>Rob graduated from Queen’s University in 1996 and was awarded his CFA Charter (Chartered Financial Analyst) in 2003.</p><p class='body-text--primary team-drawer__bio-paragraph'>Rob lives in Toronto with his wife Jane and their two boys, James and Graham. In his free time, Rob is a passionate guitarist, avid skier, terrible golfer and aspiring mechanic/carpenter/arborist at the family cottage in Muskoka.</p>"),
                                    e.appendChild(g);
                                break;
                            case "graeme-moreau":
                                var v = document.createElement("h2");
                                (v.className = "body-text--secondary heading--team-member team-drawer__heading"),
                                    (v.innerHTML = 'Graeme Moreau<span class="small-regular small-regular--designations-drawer team-drawer__designation">CPA</span>'),
                                    e.appendChild(v);
                                var y = document.createElement("h3");
                                (y.className = "all-caps team-member-role--drawer team-drawer__role"), (y.innerHTML = "Associate Financial Planner"), e.appendChild(y);
                                var w = document.createElement("img");
                                (w.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc5402f1cec94a95c2c8_team-members_drawer_graeme-moreau_1404w_v3_optimized.jpg"),
                                    (w.loading = "lazy"),
                                    (w.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (w.alt = ""),
                                    (w.width = "1410"),
                                    (w.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc5402f1cec94a95c2c8_team-members_drawer_graeme-moreau_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc5402f1cec94a95c2c8_team-members_drawer_graeme-moreau_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc5402f1cec94a95c2c8_team-members_drawer_graeme-moreau_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc5402f1cec94a95c2c8_team-members_drawer_graeme-moreau_1404w_v3_optimized.jpg 1410w"),
                                    (w.className = "team-drawer__img"),
                                    e.appendChild(w);
                                var b = document.createElement("div");
                                (b.className = "team-drawer__bio"),
                                    (b.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>Graeme is a Chartered Professional Accountant (CPA) and has held various corporate reporting and financial analyst positions in the Railroad, Oil &amp; Gas, and Radio Broadcasting industries.</p><p class='body-text--primary team-drawer__bio-paragraph'>Graeme has extensive experience in financial reporting, analysis, and budgeting for publicly traded companies.</p>"),
                                    e.appendChild(b);
                                break;
                            case "lisa-clementi":
                                var x = document.createElement("h2");
                                (x.className = "body-text--secondary heading--team-member team-drawer__heading"), (x.innerHTML = "Lisa Clementi"), e.appendChild(x);
                                var T = document.createElement("h3");
                                (T.className = "all-caps team-member-role--drawer team-drawer__role"), (T.innerHTML = "Associate Client Services"), e.appendChild(T);
                                var E = document.createElement("img");
                                (E.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54abb095632cc4285f_team-members_drawer_lisa-clementi_1404w_v3_optimized.jpg"),
                                    (E.loading = "lazy"),
                                    (E.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (E.alt = ""),
                                    (E.width = "1410"),
                                    (E.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54abb095632cc4285f_team-members_drawer_lisa-clementi_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54abb095632cc4285f_team-members_drawer_lisa-clementi_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54abb095632cc4285f_team-members_drawer_lisa-clementi_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54abb095632cc4285f_team-members_drawer_lisa-clementi_1404w_v3_optimized.jpg 1410w"),
                                    (E.className = "team-drawer__img"),
                                    e.appendChild(E);
                                var M = document.createElement("div");
                                (M.className = "team-drawer__bio"),
                                    (M.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>Lisa brings with her over 20 years of experience in the banking industry. She is highly organized with a dedicated work ethic. Lisa has a strong track record in building trusting, supportive partnerships all the while connecting in a friendly professional manner. She strives to provide a high level of client service through her daily operations and communications with everyone she comes in contact with.</p><p class='body-text--primary team-drawer__bio-paragraph'>In her spare time, she enjoys spending time cooking with her husband Walter and her adult children Eric and Claudia, and travelling.</p>"),
                                    e.appendChild(M);
                                break;
                            case "kim-yates":
                                var C = document.createElement("h2");
                                (C.className = "body-text--secondary heading--team-member team-drawer__heading"), (C.innerHTML = "Kim Yates"), e.appendChild(C);
                                var k = document.createElement("h3");
                                (k.className = "all-caps team-member-role--drawer team-drawer__role"), (k.innerHTML = "Associate Portfolio Administrator"), e.appendChild(k);
                                var S = document.createElement("img");
                                (S.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54f4019420d5321230_team-members_drawer_kim-yates_1404w_v3_optimized.jpg"),
                                    (S.loading = "lazy"),
                                    (S.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (S.alt = ""),
                                    (S.width = "1410"),
                                    (S.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54f4019420d5321230_team-members_drawer_kim-yates_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54f4019420d5321230_team-members_drawer_kim-yates_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54f4019420d5321230_team-members_drawer_kim-yates_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc54f4019420d5321230_team-members_drawer_kim-yates_1404w_v3_optimized.jpg 1410w"),
                                    (S.className = "team-drawer__img"),
                                    e.appendChild(S);
                                var L = document.createElement("div");
                                (L.className = "team-drawer__bio"),
                                    (L.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>Kim brings along a combination of skills and competencies that span across various industries, including consumer goods, not-for-profit, and financial sectors. With a strong emphasis on enhancing processes and generating efficiencies, Kim focuses on providing excellent service and support within her work environment.</p><p class='body-text--primary team-drawer__bio-paragraph'>Beyond the office, Kim enjoys outdoor activities, music, and hanging out with her husband Brian and their three children, Alex, Andrew, and Kaitlyn.</p>"),
                                    e.appendChild(L);
                                break;
                                case "jay-peng":
                                var C = document.createElement("h2");
                                (C.className = "body-text--secondary heading--team-member team-drawer__heading"), (C.innerHTML = "Jay Peng <span class='small-regular small-regular--designations-drawer team-drawer__designation'>CFA</span>"), e.appendChild(C);
                                var k = document.createElement("h3");
                                (k.className = "all-caps team-member-role--drawer team-drawer__role"), (k.innerHTML = "Portfolio Manager"), e.appendChild(k);
                                var S = document.createElement("img");
                                (S.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/66218028bdd9b5fdb0fe355f_img-Jay-_McNulty.webp"),
                                    (S.loading = "lazy"),
                                    (S.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (S.alt = ""),
                                    (S.width = "1410"),
                                    (S.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/66218028bdd9b5fdb0fe355f_img-Jay-_McNulty.webp 1410w"),
                                    (S.className = "team-drawer__img"),
                                    e.appendChild(S);
                                var L = document.createElement("div");
                                (L.className = "team-drawer__bio"),
                                    (L.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>As a CFA Chartered holder and a Registered Portfolio Manager, Jay brings a wealth of expertise in portfolio management and trading, cultivated through his tenure at several major Canadian banks. He ensures that our clients receive top-tier service and strategic guidance tailored to their needs.</p><p class='body-text--primary team-drawer__bio-paragraph'>Residing in Markham with his wife, Kaylen, and son, Ayden, Jay prioritizes a healthy, active lifestyle and values quality time spent with loved ones.</p>"),
                                    e.appendChild(L);
                                break;
                            case "tim-vlahopoulos":
                                var A = document.createElement("h2");
                                (A.className = "body-text--secondary heading--team-member team-drawer__heading"),
                                    (A.innerHTML = 'Tim Vlahopoulos<span class="small-regular small-regular--designations-drawer team-drawer__designation">BCom (Hons), CIM</span>'),
                                    e.appendChild(A);
                                var O = document.createElement("h3");
                                (O.className = "all-caps team-member-role--drawer team-drawer__role"), (O.innerHTML = "Senior portfolio manager"), e.appendChild(O);
                                var z = document.createElement("img");
                                (z.src = "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56f0bbe08336a683ed_team-members_drawer_tim-vlahopoulos_1404w_v3_optimized.jpg"),
                                    (z.loading = "lazy"),
                                    (z.sizes = "(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px"),
                                    (z.alt = ""),
                                    (z.width = "1410"),
                                    (z.srcset =
                                        "https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56f0bbe08336a683ed_team-members_drawer_tim-vlahopoulos_1404w_v3_optimized-p-500.jpg 500w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56f0bbe08336a683ed_team-members_drawer_tim-vlahopoulos_1404w_v3_optimized-p-800.jpg 800w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56f0bbe08336a683ed_team-members_drawer_tim-vlahopoulos_1404w_v3_optimized-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6552714dc2b17e1f98aa393d/65aebc56f0bbe08336a683ed_team-members_drawer_tim-vlahopoulos_1404w_v3_optimized.jpg 1410w"),
                                    (z.className = "team-drawer__img"),
                                    e.appendChild(z);
                                var D = document.createElement("div");
                                (D.className = "team-drawer__bio"),
                                    (D.innerHTML =
                                        "<p class='body-text--primary team-drawer__bio-paragraph'>With over 25 years of experience in the Financial Services industry, Tim has honed his expertise through notable tenures at TD Bank Finance Group and Scotiawealth. At Scotiawealth, he most recently spearheaded the Fixed Income and Foreign Exchange Trading desk, showcasing his robust analytical abilities and adeptness in trade execution.</p><p class='body-text--primary team-drawer__bio-paragraph'>Outside of his professional life, Tim is an avid hockey fan and cherishes moments spent with his family and their dog.</p>"),
                                    e.appendChild(D);
                        }
                    });
                });
            },
            Ua = function () {
                var t = document.querySelectorAll(".fade-in"),
                    e = new IntersectionObserver(
                        function (t, e) {
                            t.forEach(function (t) {
                                t.isIntersecting && (t.target.classList.add("is--visible"), e.unobserve(t.target));
                            });
                        },
                        { threshold: 0.5 }
                    );
                t.forEach(function (t) {
                    e.observe(t);
                });
            },
            Ya = function () {
                Ua(), hi(), vi(), $i(), aa(), qa(), Ha(), Va(), Ga(), Ki();
            };
        $(function () {
            Ya();
        });
    })();
})();
