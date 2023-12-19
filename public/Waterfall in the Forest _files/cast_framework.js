// Copyright Google Inc. All Rights Reserved.
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var h = this || self,
    aa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    ba = function (a) {
      var b = aa(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    ca = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    da = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    k = function (a, b, c) {
      k =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? da
          : ea;
      return k.apply(null, arguments);
    },
    l = function (a, b) {
      a = a.split(".");
      var c = h;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b);
    },
    m = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.jc = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.hc = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), p = 2;
          p < arguments.length;
          p++
        )
          g[p - 2] = arguments[p];
        return b.prototype[e].apply(d, g);
      };
    },
    n = function (a) {
      return a;
    };
  function r(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, r);
    else {
      const c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  m(r, Error);
  r.prototype.name = "CustomError";
  function t(a, b) {
    a = a.split("%s");
    let c = "";
    const d = a.length - 1;
    for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    r.call(this, c + a[d]);
  }
  m(t, r);
  t.prototype.name = "AssertionError";
  var u = function (a, b) {
    throw new t(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1),
    );
  };
  var v = class {
      constructor(a, b) {
        this.name = a;
        this.value = b;
      }
      toString() {
        return this.name;
      }
    },
    w = new v("OFF", Infinity),
    x = new v("SEVERE", 1e3),
    y = new v("WARNING", 900),
    z = new v("CONFIG", 700),
    A = [
      w,
      new v("SHOUT", 1200),
      x,
      y,
      new v("INFO", 800),
      z,
      new v("FINE", 500),
      new v("FINER", 400),
      new v("FINEST", 300),
      new v("ALL", 0),
    ],
    B = null,
    fa = class {
      constructor() {
        this.ca = 0;
        this.clear();
      }
      clear() {
        this.La = Array(this.ca);
        this.Na = -1;
        this.Sa = !1;
      }
    },
    ha,
    ia = class {
      constructor(a, b, c) {
        this.ea = void 0;
        this.reset(a || w, b, c, void 0, void 0);
      }
      reset(a, b, c, d) {
        this.hb = d || Date.now();
        this.Ta = a;
        this.Jb = b;
        this.Ua = c;
        this.ea = void 0;
      }
      getMessage() {
        return this.Jb;
      }
    },
    ja = function (a) {
      if (a.level) return a.level;
      if (a.parent) return ja(a.parent);
      u("Root logger has no level set.");
      return w;
    },
    ka = class {
      constructor(a, b = null) {
        this.level = null;
        this.Qa = [];
        this.parent = b || null;
        this.children = [];
        this.V = { T: () => a };
      }
      publish(a) {
        let b = this;
        for (; b; )
          b.Qa.forEach((c) => {
            c(a);
          }),
            (b = b.parent);
      }
    },
    C = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = C(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      const d = new ka(b, c);
      a.entries[b] = d;
      c.children.push(d);
      return d;
    },
    la = class {
      constructor() {
        this.entries = {};
        const a = new ka("");
        a.level = z;
        this.entries[""] = a;
      }
    },
    ma,
    D = function () {
      ma || (ma = new la());
      return ma;
    },
    E = function (a, b, c, d) {
      var e;
      if ((e = a))
        if ((e = a && b)) {
          e = b.value;
          var f = a ? ja(C(D(), a.T())) : w;
          e = e >= f.value;
        }
      if (e) {
        b = b || w;
        e = C(D(), a.T());
        "function" === typeof c && (c = c());
        ha || (ha = new fa());
        f = ha;
        a = a.T();
        if (0 < f.ca) {
          var g = (f.Na + 1) % f.ca;
          f.Na = g;
          f.Sa
            ? ((f = f.La[g]), f.reset(b, c, a), (a = f))
            : ((f.Sa = g == f.ca - 1), (a = f.La[g] = new ia(b, c, a)));
        } else a = new ia(b, c, a);
        a.ea = d;
        e.publish(a);
      }
    };
  var F = function () {
      this.Za = Date.now();
    },
    na = null;
  F.prototype.set = function (a) {
    this.Za = a;
  };
  F.prototype.reset = function () {
    this.set(Date.now());
  };
  F.prototype.get = function () {
    return this.Za;
  };
  var oa;
  var pa = /&/g,
    qa = /</g,
    ra = />/g,
    sa = /"/g,
    ta = /'/g,
    ua = /\x00/g,
    va = /[\x00&<>"']/;
  function G() {
    var a = h.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  const wa = {};
  var xa = function (a) {
      if (a instanceof I && a.constructor === I) return a.Fa;
      u(`expected object of type SafeHtml, got '${a}' of type ` + aa(a));
      return "type_error:SafeHtml";
    },
    za = function (a) {
      a instanceof I ||
        ((a = "object" == typeof a && a.Eb ? a.Cb() : String(a)),
        va.test(a) &&
          (-1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")),
          -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")),
          -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")),
          -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")),
          -1 != a.indexOf("'") && (a = a.replace(ta, "&#39;")),
          -1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"))),
        (a = ya(a)));
      return a;
    },
    ya = function (a) {
      if (void 0 === oa) {
        var b = null;
        var c = h.trustedTypes;
        if (c && c.createPolicy)
          try {
            b = c.createPolicy("goog#html", {
              createHTML: n,
              createScript: n,
              createScriptURL: n,
            });
          } catch (d) {
            h.console && h.console.error(d.message);
          }
        oa = b;
      }
      a = (b = oa) ? b.createHTML(a) : a;
      return new I(a, wa);
    };
  class I {
    constructor(a, b) {
      this.Fa = b === wa ? a : "";
      this.Eb = !0;
    }
    Cb() {
      return this.Fa.toString();
    }
    toString() {
      return this.Fa.toString();
    }
  }
  var Aa = new I((h.trustedTypes && h.trustedTypes.emptyHTML) || "", wa);
  var J = function (a) {
    this.Pb = a || "";
    na || (na = new F());
    this.cc = na;
  };
  J.prototype.Ka = !0;
  J.prototype.eb = !0;
  J.prototype.Zb = !0;
  J.prototype.Yb = !0;
  J.prototype.fb = !1;
  J.prototype.ac = !1;
  var K = function (a) {
      return 10 > a ? "0" + a : String(a);
    },
    Ba = function (a) {
      J.call(this, a);
    };
  m(Ba, J);
  var Ca = function (a, b) {
    var c = [];
    c.push(a.Pb, " ");
    if (a.eb) {
      var d = new Date(b.hb);
      c.push(
        "[",
        K(d.getFullYear() - 2e3) +
          K(d.getMonth() + 1) +
          K(d.getDate()) +
          " " +
          K(d.getHours()) +
          ":" +
          K(d.getMinutes()) +
          ":" +
          K(d.getSeconds()) +
          "." +
          K(Math.floor(d.getMilliseconds() / 10)),
        "] ",
      );
    }
    if (a.Zb) {
      d = c.push;
      var e = a.cc.get();
      e = (b.hb - e) / 1e3;
      var f = e.toFixed(3),
        g = 0;
      if (1 > e) g = 2;
      else for (; 100 > e; ) g++, (e *= 10);
      for (; 0 < g--; ) f = " " + f;
      d.call(c, "[", f, "s] ");
    }
    a.Yb && c.push("[", b.Ua, "] ");
    a.ac && c.push("[", b.Ta.name, "] ");
    c.push(b.getMessage());
    a.fb &&
      ((b = b.ea),
      void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
    a.Ka && c.push("\n");
    return c.join("");
  };
  var Da = function () {
    this.Qb = k(this.ib, this);
    this.fa = new Ba();
    this.fa.eb = !1;
    this.fa.fb = !1;
    this.Ra = this.fa.Ka = !1;
    this.sb = {};
  };
  Da.prototype.ib = function (a) {
    function b(f) {
      if (f) {
        if (f.value >= x.value) return "error";
        if (f.value >= y.value) return "warn";
        if (f.value >= z.value) return "log";
      }
      return "debug";
    }
    if (!this.sb[a.Ua]) {
      var c = Ca(this.fa, a),
        d = Ea;
      if (d) {
        var e = b(a.Ta);
        Fa(d, e, c, a.ea);
      }
    }
  };
  var L = null,
    Ea = h.console,
    Fa = function (a, b, c, d) {
      if (a[b]) a[b](c, void 0 === d ? "" : d);
      else a.log(c, void 0 === d ? "" : d);
    };
  var Ga = function () {};
  var Ha = (function (a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    if ("undefined" === typeof document) return !1;
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild) return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = xa(Aa);
    return !b.parentElement;
  });
  var Ia = function () {
    var a = document;
    var b = "IFRAME";
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  const Ja = [];
  var Ka = (a) => {
    var b = C(D(), "safevalues").V;
    b && E(b, y, `A URL with content '${a}' was sanitized away.`);
  };
  -1 === Ja.indexOf(Ka) && Ja.push(Ka);
  var La = { ic: !0 },
    M = function () {
      throw Error("Do not instantiate directly");
    };
  M.prototype.lb = null;
  M.prototype.getContent = function () {
    return this.content;
  };
  M.prototype.toString = function () {
    return this.content;
  };
  var Ma = function () {
    M.call(this);
  };
  m(Ma, M);
  Ma.prototype.mb = La; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  function Na() {
    var a = Oa(Pa);
    if (!ca(a)) return za(String(a));
    if (a instanceof M) {
      if (a.mb !== La) throw Error("Sanitized content was not of kind HTML.");
      return ya(a.toString());
    }
    u(`Soy template output is unsafe for use as HTML: ${a}`);
    return za("zSoyz");
  }
  const Pa = {};
  class Qa {
    constructor(a, b) {
      this.Gb = 100;
      this.nb = a;
      this.Tb = b;
      this.ka = 0;
      this.ha = null;
    }
    get() {
      let a;
      0 < this.ka
        ? (this.ka--, (a = this.ha), (this.ha = a.next), (a.next = null))
        : (a = this.nb());
      return a;
    }
    put(a) {
      this.Tb(a);
      this.ka < this.Gb && (this.ka++, (a.next = this.ha), (this.ha = a));
    }
  }
  var Ra,
    Sa = function () {
      var a = h.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        -1 == G().indexOf("Presto") &&
        (a = function () {
          var e = Ia();
          e.style.display = "none";
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = "callImmediate" + Math.random(),
            p =
              "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
          e = k(function (q) {
            if (("*" == p || q.origin == p) && q.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, p);
            },
          };
        });
      if (
        "undefined" !== typeof a &&
        -1 == G().indexOf("Trident") &&
        -1 == G().indexOf("MSIE")
      ) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Ma;
            c.Ma = null;
            e();
          }
        };
        return function (e) {
          d.next = { Ma: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        h.setTimeout(e, 0);
      };
    };
  function Ta(a) {
    h.setTimeout(() => {
      throw a;
    }, 0);
  }
  class Ua {
    constructor() {
      this.na = this.R = null;
    }
    add(a, b) {
      const c = Va.get();
      c.set(a, b);
      this.na ? (this.na.next = c) : (this.R = c);
      this.na = c;
    }
    remove() {
      let a = null;
      this.R &&
        ((a = this.R),
        (this.R = this.R.next),
        this.R || (this.na = null),
        (a.next = null));
      return a;
    }
  }
  var Va = new Qa(
    () => new Wa(),
    (a) => a.reset(),
  );
  class Wa {
    constructor() {
      this.next = this.scope = this.ta = null;
    }
    set(a, b) {
      this.ta = a;
      this.scope = b;
      this.next = null;
    }
    reset() {
      this.next = this.scope = this.ta = null;
    }
  }
  let N,
    Xa = !1,
    Ya = new Ua(),
    $a = (a, b) => {
      N || Za();
      Xa || (N(), (Xa = !0));
      Ya.add(a, b);
    },
    Za = () => {
      if (h.Promise && h.Promise.resolve) {
        const a = h.Promise.resolve(void 0);
        N = () => {
          a.then(ab);
        };
      } else
        N = () => {
          var a = ab,
            b;
          !(b = "function" !== typeof h.setImmediate) &&
            (b = h.Window && h.Window.prototype) &&
            (b =
              -1 == G().indexOf("Edge") &&
              h.Window.prototype.setImmediate == h.setImmediate);
          b ? (Ra || (Ra = Sa()), Ra(a)) : h.setImmediate(a);
        };
    };
  var ab = () => {
    let a;
    for (; (a = Ya.remove()); ) {
      try {
        a.ta.call(a.scope);
      } catch (b) {
        Ta(b);
      }
      Va.put(a);
    }
    Xa = !1;
  };
  var Q = function (a) {
      this.l = 0;
      this.ab = void 0;
      this.I = this.A = this.G = null;
      this.ga = this.sa = !1;
      if (a != Ga)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              O(b, 2, c);
            },
            function (c) {
              if (!(c instanceof P))
                try {
                  if (c instanceof Error) throw c;
                  throw Error("Promise rejected.");
                } catch (d) {}
              O(b, 3, c);
            },
          );
        } catch (c) {
          O(this, 3, c);
        }
    },
    bb = function () {
      this.next = this.context = this.N = this.W = this.F = null;
      this.aa = !1;
    };
  bb.prototype.reset = function () {
    this.context = this.N = this.W = this.F = null;
    this.aa = !1;
  };
  var cb = new Qa(
      function () {
        return new bb();
      },
      function (a) {
        a.reset();
      },
    ),
    db = function (a, b, c) {
      var d = cb.get();
      d.W = a;
      d.N = b;
      d.context = c;
      return d;
    },
    R = function () {
      var a,
        b,
        c = new Q(function (d, e) {
          a = d;
          b = e;
        });
      return new eb(c, a, b);
    };
  Q.prototype.then = function (a, b, c) {
    return fb(
      this,
      "function" === typeof a ? a : null,
      "function" === typeof b ? b : null,
      c,
    );
  };
  Q.prototype.$goog_Thenable = !0;
  Q.prototype.gb = function (a, b) {
    return fb(this, null, a, b);
  };
  Q.prototype.catch = Q.prototype.gb;
  Q.prototype.cancel = function (a) {
    if (0 == this.l) {
      var b = new P(a);
      $a(function () {
        gb(this, b);
      }, this);
    }
  };
  var gb = function (a, b) {
      if (0 == a.l)
        if (a.G) {
          var c = a.G;
          if (c.A) {
            for (
              var d = 0, e = null, f = null, g = c.A;
              g && (g.aa || (d++, g.F == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.l && 1 == d
                ? gb(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.I && (c.I = d),
                      (d.next = d.next.next))
                    : hb(c),
                  ib(c, e, 3, b)));
          }
          a.G = null;
        } else O(a, 3, b);
    },
    kb = function (a, b) {
      a.A || (2 != a.l && 3 != a.l) || jb(a);
      a.I ? (a.I.next = b) : (a.A = b);
      a.I = b;
    },
    fb = function (a, b, c, d) {
      var e = db(null, null, null);
      e.F = new Q(function (f, g) {
        e.W = b
          ? function (p) {
              try {
                var q = b.call(d, p);
                f(q);
              } catch (H) {
                g(H);
              }
            }
          : f;
        e.N = c
          ? function (p) {
              try {
                var q = c.call(d, p);
                void 0 === q && p instanceof P ? g(p) : f(q);
              } catch (H) {
                g(H);
              }
            }
          : g;
      });
      e.F.G = a;
      kb(a, e);
      return e.F;
    };
  Q.prototype.dc = function (a) {
    this.l = 0;
    O(this, 2, a);
  };
  Q.prototype.ec = function (a) {
    this.l = 0;
    O(this, 3, a);
  };
  var O = function (a, b, c) {
      if (0 == a.l) {
        a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.l = 1;
        a: {
          var d = c,
            e = a.dc,
            f = a.ec;
          if (d instanceof Q) {
            kb(d, db(e || Ga, f || null, a));
            var g = !0;
          } else {
            if (d)
              try {
                var p = !!d.$goog_Thenable;
              } catch (H) {
                p = !1;
              }
            else p = !1;
            if (p) d.then(e, f, a), (g = !0);
            else {
              if (ca(d))
                try {
                  var q = d.then;
                  if ("function" === typeof q) {
                    lb(d, q, e, f, a);
                    g = !0;
                    break a;
                  }
                } catch (H) {
                  f.call(a, H);
                  g = !0;
                  break a;
                }
              g = !1;
            }
          }
        }
        g ||
          ((a.ab = c),
          (a.l = b),
          (a.G = null),
          jb(a),
          3 != b || c instanceof P || mb(a, c));
      }
    },
    lb = function (a, b, c, d, e) {
      var f = !1,
        g = function (q) {
          f || ((f = !0), c.call(e, q));
        },
        p = function (q) {
          f || ((f = !0), d.call(e, q));
        };
      try {
        b.call(a, g, p);
      } catch (q) {
        p(q);
      }
    },
    jb = function (a) {
      a.sa || ((a.sa = !0), $a(a.qb, a));
    },
    hb = function (a) {
      var b = null;
      a.A && ((b = a.A), (a.A = b.next), (b.next = null));
      a.A || (a.I = null);
      return b;
    };
  Q.prototype.qb = function () {
    for (var a; (a = hb(this)); ) ib(this, a, this.l, this.ab);
    this.sa = !1;
  };
  var ib = function (a, b, c, d) {
      if (3 == c && b.N && !b.aa) for (; a && a.ga; a = a.G) a.ga = !1;
      if (b.F) (b.F.G = null), nb(b, c, d);
      else
        try {
          b.aa ? b.W.call(b.context) : nb(b, c, d);
        } catch (e) {
          ob.call(null, e);
        }
      cb.put(b);
    },
    nb = function (a, b, c) {
      2 == b ? a.W.call(a.context, c) : a.N && a.N.call(a.context, c);
    },
    mb = function (a, b) {
      a.ga = !0;
      $a(function () {
        a.ga && ob.call(null, b);
      });
    },
    ob = Ta,
    P = function (a) {
      r.call(this, a);
    };
  m(P, r);
  P.prototype.name = "cancel";
  var eb = function (a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c;
  };
  var S = function () {
    this.da = this.da;
    this.la = this.la;
  };
  S.prototype.da = !1;
  S.prototype.qa = function () {
    this.da || ((this.da = !0), this.ra());
  };
  S.prototype.ra = function () {
    if (this.la) for (; this.la.length; ) this.la.shift()();
  };
  var pb = function (a, b) {
    if ("function" !== typeof a)
      if (a && "function" == typeof a.handleEvent) a = k(a.handleEvent, a);
      else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0);
  };
  var qb = function (a) {
    a.H = pb(() => {
      a.H = null;
      a.P && !a.X && ((a.P = !1), qb(a));
    }, a.Fb);
    const b = a.ba;
    a.ba = null;
    a.Hb.apply(null, b);
  };
  class rb extends S {
    constructor(a, b) {
      super();
      this.Hb = null != b ? a.bind(b) : a;
      this.Fb = 200;
      this.ba = null;
      this.P = !1;
      this.X = 0;
      this.H = null;
    }
    tb(a) {
      this.ba = arguments;
      this.H || this.X ? (this.P = !0) : qb(this);
    }
    stop() {
      this.H &&
        (h.clearTimeout(this.H),
        (this.H = null),
        (this.P = !1),
        (this.ba = null));
    }
    pause() {
      this.X++;
    }
    resume() {
      this.X--;
      this.X || !this.P || this.H || ((this.P = !1), qb(this));
    }
    ra() {
      super.ra();
      this.stop();
    }
  }
  var T = function (a) {
      return (
        !!a && void 0 !== a.currentBreakClipTime && void 0 !== a.breakClipId
      );
    },
    sb = function (a, b) {
      return T(a)
        ? ((b && b.breaks) || []).find((c) => c.id === a.breakId) || null
        : null;
    },
    tb = function (a, b) {
      return T(a)
        ? ((b && b.breakClips) || []).find((c) => c.id === a.breakClipId) ||
            null
        : null;
    },
    ub = function (a) {
      if (!a.j)
        for (var b = 0, c = a.h.media; b < c.length; b++)
          if (!c[b].idleReason) {
            a.j = c[b];
            a.j.addUpdateListener(a.Ib.bind(a));
            break;
          }
    },
    vb = function (a, b) {
      a.h = b;
      b.addMediaListener(a.Va.bind(a));
      b.addUpdateListener(a.Ia.bind(a));
      ub(a);
      a.D();
    };
  const wb = class {
    constructor(a) {
      a.controller = this;
      this.g = a;
      this.C = this.j = this.h = null;
      this.Xa = this.Ob.bind(this);
      this.L = this.Lb.bind(this);
      this.M = this.Mb.bind(this);
      this.v = 0;
      this.fc = new rb(this.rb, this);
    }
    Ea() {
      this.j &&
        (this.v++,
        (this.g.isPaused = !this.g.isPaused),
        this.g.isPaused
          ? this.j.pause(null, this.M, this.L)
          : this.j.play(null, this.M, this.L));
    }
    stop() {
      this.j && (this.v++, this.j.stop(null, this.M, this.L));
    }
    seek() {
      if (this.j) {
        this.C && (clearTimeout(this.C), (this.C = null));
        this.v++;
        var a = new chrome.cast.media.SeekRequest();
        a.currentTime = this.g.currentTime;
        this.j.seek(a, this.M, this.L);
      }
    }
    Ca() {
      this.h &&
        (this.v++,
        (this.g.isMuted = !this.g.isMuted),
        this.h.setReceiverMuted(this.g.isMuted, this.M, this.L));
    }
    Ja() {
      this.fc.tb();
    }
    rb() {
      this.h &&
        (this.v++,
        this.h.setReceiverVolumeLevel(this.g.volumeLevel, this.M, this.L));
    }
    Mb() {
      this.v--;
      this.D();
    }
    Lb() {
      this.v--;
      this.j &&
        this.j.getStatus(
          null,
          () => {},
          () => {},
        );
    }
    Ob() {
      this.j &&
        ("function" === typeof this.j.getEstimatedBreakTime &&
          (this.g.currentBreakTime = this.j.getEstimatedBreakTime()),
        "function" === typeof this.j.getEstimatedBreakClipTime &&
          (this.g.currentBreakClipTime = this.j.getEstimatedBreakClipTime()),
        "function" === typeof this.j.getEstimatedLiveSeekableRange &&
          (this.g.liveSeekableRange = this.j.getEstimatedLiveSeekableRange()),
        (this.g.currentTime = this.j.getEstimatedTime()),
        (this.C = setTimeout(this.Xa, 1e3)));
    }
    D(a) {
      if (!(0 < this.v))
        if (this.h) {
          this.g.displayName = this.h.displayName || "";
          var b = this.h.statusText || "";
          this.g.displayStatus = b != this.g.displayName ? b : "";
          !a &&
            this.h.receiver &&
            (a = this.h.receiver.volume) &&
            (null != a.muted && (this.g.isMuted = a.muted),
            null != a.level && (this.g.volumeLevel = a.level),
            (this.g.canControlVolume = "fixed" != a.controlType));
          if (this.j) {
            a = this.j.breakStatus;
            b = this.j;
            if (T(a)) {
              var c = sb(a, b.media);
              const d = tb(a, b.media);
              this.g.isPlayingBreak = !0;
              this.g.numberBreakClips =
                c && Array.isArray(c.breakClipIds) ? c.breakClipIds.length : 0;
              c && d
                ? ((c = c.breakClipIds.indexOf(d.id)), (c = 0 > c ? 0 : c))
                : (c = 0);
              this.g.currentBreakClipNumber = c;
              this.g.currentBreakTime =
                "function" === typeof b.getEstimatedBreakTime
                  ? b.getEstimatedBreakTime()
                  : a.currentBreakTime;
              this.g.currentBreakClipTime =
                "function" === typeof b.getEstimatedBreakClipTime
                  ? b.getEstimatedBreakClipTime()
                  : a.currentBreakClipTime;
              this.g.breakId = a.breakId;
              this.g.breakClipId = a.breakClipId;
              this.g.whenSkippable = a.whenSkippable;
            } else
              (this.g.isPlayingBreak = !1),
                (this.g.numberBreakClips = 0),
                (this.g.currentBreakClipNumber = 0),
                (this.g.currentBreakTime = void 0),
                (this.g.currentBreakClipTime = void 0),
                (this.g.breakId = void 0),
                (this.g.breakClipId = void 0),
                (this.g.whenSkippable = void 0);
            this.g.isMediaLoaded =
              b.playerState != chrome.cast.media.PlayerState.IDLE;
            this.g.isPaused =
              b.playerState == chrome.cast.media.PlayerState.PAUSED;
            this.g.canPause =
              0 <=
              b.supportedMediaCommands.indexOf(
                chrome.cast.media.MediaCommand.PAUSE,
              );
            this.Z(b.media);
            this.g.canSeek =
              T(a) &&
              (void 0 == a.whenSkippable ||
                0 > a.whenSkippable ||
                a.currentBreakClipTime < a.whenSkippable)
                ? !1
                : 0 <=
                    b.supportedMediaCommands.indexOf(
                      chrome.cast.media.MediaCommand.SEEK,
                    ) && 0 != this.g.duration;
            this.g.currentTime = b.getEstimatedTime();
            this.C && (clearTimeout(this.C), (this.C = null));
            b.playerState == chrome.cast.media.PlayerState.PLAYING &&
              (this.C = setTimeout(this.Xa, 1e3));
          } else this.Z(null);
        } else
          (this.g.displayName = ""), (this.g.displayStatus = ""), this.Z(null);
    }
    Z(a) {
      a
        ? ((this.g.duration = a.duration || 0),
          a.metadata &&
            a.metadata.title &&
            (this.g.displayStatus = a.metadata.title))
        : ((this.g.isMediaLoaded = !1),
          (this.g.canPause = !1),
          (this.g.canSeek = !1),
          (this.g.currentTime = 0),
          (this.g.duration = 0),
          (this.g.isPlayingBreak = !1),
          (this.g.numberBreakClips = 0),
          (this.g.currentBreakClipNumber = 0),
          (this.g.currentBreakTime = void 0),
          (this.g.currentBreakClipTime = void 0),
          (this.g.breakId = void 0),
          (this.g.breakClipId = void 0),
          (this.g.whenSkippable = void 0));
    }
    Ia(a) {
      a || (this.j = this.h = null);
      this.D();
    }
    Va() {
      ub(this);
      this.D(!0);
    }
    Ib(a) {
      a || (this.j = null);
      this.D(!0);
    }
    wa(a, b) {
      return b ? (100 * a) / b : 0;
    }
    xa(a, b) {
      return b ? (a * b) / 100 : 0;
    }
    ua(a) {
      return 0 > a
        ? ""
        : [
            ("0" + Math.floor(a / 3600)).substr(-2),
            ("0" + (Math.floor(a / 60) % 60)).substr(-2),
            ("0" + (Math.floor(a) % 60)).substr(-2),
          ].join(":");
    }
  };
  var xb = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.lb = d);
      return c;
    };
  })(Ma);
  const yb = {};
  var Oa = function (a) {
    return yb["cast.framework.CastButtonTemplate.icon"]
      ? yb["cast.framework.CastButtonTemplate.icon"](a, void 0)
      : xb(
          '<style>.cast_caf_state_c {fill: var(--connected-color, #4285f4);}.cast_caf_state_d {fill: var(--disconnected-color, #7d7d7d);}.cast_caf_state_h {opacity: 0;}</style><svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><g><path id="cast_caf_icon_arch0" class="cast_caf_status_d" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path id="cast_caf_icon_arch1" class="cast_caf_status_d" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path id="cast_caf_icon_arch2" class="cast_caf_status_d" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path id="cast_caf_icon_box" class="cast_caf_status_d" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path id="cast_caf_icon_boxfill" class="cast_caf_state_h" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',
        );
  };
  l("cast.framework.VERSION", "1.0.15");
  l("cast.framework.LoggerLevel", {
    DEBUG: 0,
    INFO: 800,
    WARNING: 900,
    ERROR: 1e3,
    NONE: 1500,
  });
  l("cast.framework.CastState", {
    NO_DEVICES_AVAILABLE: "NO_DEVICES_AVAILABLE",
    NOT_CONNECTED: "NOT_CONNECTED",
    CONNECTING: "CONNECTING",
    CONNECTED: "CONNECTED",
  });
  l("cast.framework.SessionState", {
    NO_SESSION: "NO_SESSION",
    SESSION_STARTING: "SESSION_STARTING",
    SESSION_STARTED: "SESSION_STARTED",
    SESSION_START_FAILED: "SESSION_START_FAILED",
    SESSION_ENDING: "SESSION_ENDING",
    SESSION_ENDED: "SESSION_ENDED",
    SESSION_RESUMED: "SESSION_RESUMED",
  });
  l("cast.framework.CastContextEventType", {
    CAST_STATE_CHANGED: "caststatechanged",
    SESSION_STATE_CHANGED: "sessionstatechanged",
  });
  l("cast.framework.SessionEventType", {
    APPLICATION_STATUS_CHANGED: "applicationstatuschanged",
    APPLICATION_METADATA_CHANGED: "applicationmetadatachanged",
    ACTIVE_INPUT_STATE_CHANGED: "activeinputstatechanged",
    VOLUME_CHANGED: "volumechanged",
    MEDIA_SESSION: "mediasession",
  });
  l("cast.framework.RemotePlayerEventType", {
    ANY_CHANGE: "anyChanged",
    IS_CONNECTED_CHANGED: "isConnectedChanged",
    IS_MEDIA_LOADED_CHANGED: "isMediaLoadedChanged",
    QUEUE_DATA_CHANGED: "queueDataChanged",
    VIDEO_INFO_CHANGED: "videoInfoChanged",
    DURATION_CHANGED: "durationChanged",
    CURRENT_TIME_CHANGED: "currentTimeChanged",
    IS_PAUSED_CHANGED: "isPausedChanged",
    VOLUME_LEVEL_CHANGED: "volumeLevelChanged",
    CAN_CONTROL_VOLUME_CHANGED: "canControlVolumeChanged",
    IS_MUTED_CHANGED: "isMutedChanged",
    CAN_PAUSE_CHANGED: "canPauseChanged",
    CAN_SEEK_CHANGED: "canSeekChanged",
    DISPLAY_NAME_CHANGED: "displayNameChanged",
    STATUS_TEXT_CHANGED: "statusTextChanged",
    TITLE_CHANGED: "titleChanged",
    DISPLAY_STATUS_CHANGED: "displayStatusChanged",
    MEDIA_INFO_CHANGED: "mediaInfoChanged",
    IMAGE_URL_CHANGED: "imageUrlChanged",
    PLAYER_STATE_CHANGED: "playerStateChanged",
    IS_PLAYING_BREAK_CHANGED: "isPlayingBreakChanged",
    NUMBER_BREAK_CLIPS_CHANGED: "numberBreakClipsChanged",
    CURRENT_BREAK_CLIP_NUMBER_CHANGED: "currentBreakClipNumberChanged",
    CURRENT_BREAK_TIME_CHANGED: "currentBreakTimeChanged",
    CURRENT_BREAK_CLIP_TIME_CHANGED: "currentBreakClipTimeChanged",
    BREAK_ID_CHANGED: "breakIdChanged",
    BREAK_CLIP_ID_CHANGED: "breakClipIdChanged",
    WHEN_SKIPPABLE_CHANGED: "whenSkippableChanged",
    LIVE_SEEKABLE_RANGE_CHANGED: "liveSeekableRangeChanged",
  });
  l("cast.framework.ActiveInputState", {
    ACTIVE_INPUT_STATE_UNKNOWN: -1,
    ACTIVE_INPUT_STATE_NO: 0,
    ACTIVE_INPUT_STATE_YES: 1,
  });
  var zb = function (a) {
    var b = C(D(), "").V;
    a: {
      if (!B) {
        B = {};
        for (let c = 0, d; (d = A[c]); c++) (B[d.value] = d), (B[d.name] = d);
      }
      if (a in B) a = B[a];
      else {
        for (let c = 0; c < A.length; ++c) {
          let d = A[c];
          if (d.value <= a) {
            a = d;
            break a;
          }
        }
        a = null;
      }
    }
    b && (C(D(), b.T()).level = a);
  };
  l("cast.framework.setLoggerLevel", zb);
  L || (L = new Da());
  if (L) {
    var Ab = L;
    if (1 != Ab.Ra) {
      var Bb = C(D(), "").V,
        Cb = Ab.Qb;
      Bb && C(D(), Bb.T()).Qa.push(Cb);
      Ab.Ra = !0;
    }
  }
  zb(1e3);
  var U = class {
    constructor(a) {
      this.type = a;
    }
  };
  l("cast.framework.EventData", U);
  var Db = class extends U {
    constructor(a) {
      super("activeinputstatechanged");
      this.activeInputState = a;
    }
  };
  l("cast.framework.ActiveInputStateEventData", Db);
  var Eb = class {
    constructor(a) {
      this.applicationId = a.appId;
      this.name = a.displayName;
      this.images = a.appImages;
      this.namespaces = this.Da(a.namespaces || []);
    }
    Da(a) {
      return a.map((b) => b.name);
    }
  };
  l("cast.framework.ApplicationMetadata", Eb);
  var Fb = class extends U {
    constructor(a) {
      super("applicationmetadatachanged");
      this.metadata = a;
    }
  };
  l("cast.framework.ApplicationMetadataEventData", Fb);
  var Gb = class extends U {
    constructor(a) {
      super("applicationstatuschanged");
      this.status = a;
    }
  };
  l("cast.framework.ApplicationStatusEventData", Gb);
  var Hb = class {
    constructor(a) {
      a = a || {};
      this.receiverApplicationId = a.receiverApplicationId || null;
      this.resumeSavedSession =
        void 0 !== a.resumeSavedSession ? a.resumeSavedSession : !0;
      this.autoJoinPolicy =
        void 0 !== a.autoJoinPolicy
          ? a.autoJoinPolicy
          : chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
      this.language = a.language || null;
      this.androidReceiverCompatible = a.androidReceiverCompatible || !1;
      this.credentialsData = a.credentialsData || null;
    }
  };
  l("cast.framework.CastOptions", Hb);
  var Ib = class extends U {
    constructor(a) {
      super("mediasession");
      this.mediaSession = a;
    }
  };
  l("cast.framework.MediaSessionEventData", Ib);
  var Jb = class extends U {
    constructor(a, b) {
      super("volumechanged");
      this.volume = a;
      this.isMute = b;
    }
  };
  l("cast.framework.VolumeEventData", Jb);
  const Kb = C(D(), "cast.framework.EventTarget").V;
  var Lb = class {
    constructor() {
      this.U = {};
    }
    addEventListener(a, b) {
      a in this.U || (this.U[a] = []);
      a = this.U[a];
      a.includes(b) || a.push(b);
    }
    removeEventListener(a, b) {
      a = this.U[a] || [];
      b = a.indexOf(b);
      0 <= b && a.splice(b, 1);
    }
    dispatchEvent(a) {
      a &&
        a.type &&
        (this.U[a.type] || []).slice().forEach((b) => {
          try {
            b(a);
          } catch (c) {
            Kb && E(Kb, x, "Handler for " + a.type + " event failed: " + c, c);
          }
        });
    }
  };
  var Mb = function (a) {
      const b = a.i.loadMedia.bind(a.i);
      a.i.loadMedia = (d, e, f) => {
        b(
          d,
          (g) => {
            e && e(g);
            a.Ba(g);
          },
          f,
        );
      };
      const c = a.i.queueLoad.bind(a.i);
      a.i.queueLoad = (d, e, f) => {
        c(
          d,
          (g) => {
            e && e(g);
            a.Ba(g);
          },
          f,
        );
      };
    },
    Nb = function (a, b) {
      a.Ya = b;
      !b.volume ||
        (a.o && a.o.muted == b.volume.muted && a.o.level == b.volume.level) ||
        ((a.o = b.volume), a.m.dispatchEvent(new Jb(a.o.level, a.o.muted)));
      a.ia != b.isActiveInput &&
        ((a.ia = b.isActiveInput),
        (b = a.ia),
        a.m.dispatchEvent(new Db(null == b ? -1 : b ? 1 : 0)));
    },
    V = class {
      constructor(a, b) {
        this.m = new Lb();
        this.l = b;
        this.i = a;
        this.bb = a.sessionId;
        this.Y = a.statusText;
        this.Ya = a.receiver;
        this.o = a.receiver.volume;
        this.ja = new Eb(a);
        this.ia = a.receiver.isActiveInput;
        this.i.addMediaListener(this.Ba.bind(this));
        Mb(this);
      }
      addEventListener(a, b) {
        this.m.addEventListener(a, b);
      }
      removeEventListener(a, b) {
        this.m.removeEventListener(a, b);
      }
      Bb() {
        return this.i;
      }
      Ab() {
        return this.bb;
      }
      ya() {
        return this.l;
      }
      xb() {
        return this.Ya;
      }
      vb() {
        return this.ja;
      }
      wb() {
        return this.Y;
      }
      ub() {
        var a = this.ia;
        return null == a ? -1 : a ? 1 : 0;
      }
      Pa(a) {
        "SESSION_ENDED" != this.l &&
          (a
            ? this.i.stop(
                () => {},
                () => {},
              )
            : this.i.leave(
                () => {},
                () => {},
              ));
      }
      setVolume(a) {
        const b = R(),
          c = Promise.resolve(b.promise);
        this.o && ((this.o.level = a), (this.o.muted = !1));
        this.i.setReceiverVolumeLevel(
          a,
          () => b.resolve(),
          (d) => b.reject(d.code),
        );
        return c;
      }
      Db() {
        return this.o ? this.o.level : null;
      }
      Wb(a) {
        const b = R(),
          c = Promise.resolve(b.promise);
        this.o && (this.o.muted = a);
        this.i.setReceiverMuted(
          a,
          () => b.resolve(),
          (d) => b.reject(d.code),
        );
        return c;
      }
      isMute() {
        return this.o ? this.o.muted : null;
      }
      sendMessage(a, b) {
        const c = R(),
          d = Promise.resolve(c.promise);
        this.i.sendMessage(
          a,
          b,
          () => c.resolve(),
          (e) => c.reject(e.code),
        );
        return d;
      }
      addMessageListener(a, b) {
        this.i.addMessageListener(a, b);
      }
      removeMessageListener(a, b) {
        this.i.removeMessageListener(a, b);
      }
      loadMedia(a) {
        const b = R(),
          c = Promise.resolve(b.promise);
        this.i.loadMedia(
          a,
          () => {
            b.resolve();
          },
          (d) => {
            b.reject(d.code);
          },
        );
        return c;
      }
      va() {
        a: {
          var a = this.i;
          if (a.media)
            for (let b of a.media)
              if (!b.idleReason) {
                a = b;
                break a;
              }
          a = null;
        }
        return a;
      }
      Ba(a) {
        a.media && this.m.dispatchEvent(new Ib(a));
      }
      Da(a) {
        return a.map((b, c) => c.name);
      }
    };
  l("cast.framework.CastSession", V);
  V.prototype.getMediaSession = V.prototype.va;
  V.prototype.loadMedia = V.prototype.loadMedia;
  V.prototype.removeMessageListener = V.prototype.removeMessageListener;
  V.prototype.addMessageListener = V.prototype.addMessageListener;
  V.prototype.sendMessage = V.prototype.sendMessage;
  V.prototype.isMute = V.prototype.isMute;
  V.prototype.setMute = V.prototype.Wb;
  V.prototype.getVolume = V.prototype.Db;
  V.prototype.setVolume = V.prototype.setVolume;
  V.prototype.endSession = V.prototype.Pa;
  V.prototype.getActiveInputState = V.prototype.ub;
  V.prototype.getApplicationStatus = V.prototype.wb;
  V.prototype.getApplicationMetadata = V.prototype.vb;
  V.prototype.getCastDevice = V.prototype.xb;
  V.prototype.getSessionState = V.prototype.ya;
  V.prototype.getSessionId = V.prototype.Ab;
  V.prototype.getSessionObj = V.prototype.Bb;
  V.prototype.removeEventListener = V.prototype.removeEventListener;
  V.prototype.addEventListener = V.prototype.addEventListener;
  var Ob = class extends U {
    constructor(a, b, c) {
      super("sessionstatechanged");
      this.session = a;
      this.sessionState = b;
      this.errorCode = void 0 !== c ? c : null;
    }
  };
  l("cast.framework.SessionStateEventData", Ob);
  var Pb = class extends U {
    constructor(a) {
      super("caststatechanged");
      this.castState = a;
    }
  };
  l("cast.framework.CastStateEventData", Pb);
  const W = C(D(), "cast.framework.CastContext").V;
  var Qb = function (a) {
      if (!a.s || !a.s.receiverApplicationId)
        throw Error("Missing application id in cast options");
      var b = new chrome.cast.SessionRequest(a.s.receiverApplicationId);
      a.s.language && (b.language = a.s.language);
      b.androidReceiverCompatible = a.s.androidReceiverCompatible;
      b.credentialsData = a.s.credentialsData;
      b = new chrome.cast.ApiConfig(
        b,
        a.cb.bind(a),
        a.Sb.bind(a),
        a.s.autoJoinPolicy,
      );
      chrome.cast.initialize(
        b,
        () => {},
        () => {},
      );
      a.Aa || chrome.cast.addReceiverActionListener(a.Rb.bind(a));
      a.Aa = !0;
    },
    Rb = function (a) {
      let b = "NO_DEVICES_AVAILABLE";
      switch (a.u) {
        case "SESSION_STARTING":
        case "SESSION_ENDING":
          b = "CONNECTING";
          break;
        case "SESSION_STARTED":
        case "SESSION_RESUMED":
          b = "CONNECTED";
          break;
        case "NO_SESSION":
        case "SESSION_ENDED":
        case "SESSION_START_FAILED":
          b = a.Ha ? "NOT_CONNECTED" : "NO_DEVICES_AVAILABLE";
          break;
        default:
          W && E(W, y, "Unexpected session state: " + a.u);
      }
      b !== a.S && ((a.S = b), a.m.dispatchEvent(new Pb(b)));
    },
    X = function (a, b, c) {
      b == a.u
        ? "SESSION_START_FAILED" == b && a.m.dispatchEvent(new Ob(a.h, a.u, c))
        : ((a.u = b),
          a.h && (a.h.l = a.u),
          a.m.dispatchEvent(new Ob(a.h, a.u, c)),
          Rb(a));
    },
    Y = class {
      constructor() {
        this.m = new Lb();
        this.Aa = !1;
        this.s = null;
        this.Ha = !1;
        this.S = "NO_DEVICES_AVAILABLE";
        this.u = "NO_SESSION";
        this.ma = this.h = null;
      }
      addEventListener(a, b) {
        this.m.addEventListener(a, b);
      }
      removeEventListener(a, b) {
        this.m.removeEventListener(a, b);
      }
      Xb(a) {
        this.s = new Hb(a);
        Qb(this);
      }
      yb() {
        return this.S;
      }
      ya() {
        return this.u;
      }
      requestSession() {
        if (!this.Aa)
          throw Error("Cannot start session before cast options are provided");
        const a = R(),
          b = Promise.resolve(a.promise);
        a.promise.gb(() => {});
        b.catch(() => {});
        const c = "NOT_CONNECTED" == this.S;
        chrome.cast.requestSession(
          (d) => {
            this.cb(d);
            a.resolve(null);
          },
          (d) => {
            c && X(this, "SESSION_START_FAILED", d ? d.code : void 0);
            a.reject(d.code);
          },
        );
        return b;
      }
      zb() {
        return this.h;
      }
      pb(a) {
        this.h && this.h.Pa(a);
      }
      Vb(a) {
        this.s
          ? ((this.s.credentialsData = a), Qb(this))
          : W &&
            E(
              W,
              y,
              "setLaunchCredentialsData was ignored because it was called before setOptions.",
            );
      }
      Sb(a) {
        (this.Ha = a == chrome.cast.ReceiverAvailability.AVAILABLE) &&
          !this.h &&
          this.ma &&
          this.s.resumeSavedSession &&
          chrome.cast.requestSessionById(this.ma);
        Rb(this);
      }
      Rb(a, b) {
        this.h || b != chrome.cast.ReceiverAction.CAST
          ? this.h && b == chrome.cast.ReceiverAction.STOP
            ? X(this, "SESSION_ENDING")
            : a && Nb(this.h, a)
          : X(this, "SESSION_STARTING");
      }
      cb(a) {
        const b =
          "SESSION_STARTING" == this.u ? "SESSION_STARTED" : "SESSION_RESUMED";
        this.ma = null;
        this.h = new V(a, b);
        a.addUpdateListener(this.Ia.bind(this));
        X(this, b);
      }
      Ia() {
        if (this.h)
          switch (this.h.i.status) {
            case chrome.cast.SessionStatus.DISCONNECTED:
            case chrome.cast.SessionStatus.STOPPED:
              X(this, "SESSION_ENDED");
              this.ma = this.h.bb;
              this.h = null;
              break;
            case chrome.cast.SessionStatus.CONNECTED:
              var a = this.h,
                b = a.ja,
                c = a.i,
                d;
              if ((d = b.applicationId == c.appId && b.name == c.displayName))
                a: if (
                  ((d = b.namespaces),
                  (b = b.Da(c.namespaces || [])),
                  ba(d) && ba(b) && d.length == b.length)
                ) {
                  c = d.length;
                  for (let e = 0; e < c; e++)
                    if (d[e] !== b[e]) {
                      d = !1;
                      break a;
                    }
                  d = !0;
                } else d = !1;
              d || ((a.ja = new Eb(a.i)), a.m.dispatchEvent(new Fb(a.ja)));
              Nb(a, a.i.receiver);
              a.Y != a.i.statusText &&
                ((a.Y = a.i.statusText), a.m.dispatchEvent(new Gb(a.Y)));
              break;
            default:
              W && E(W, y, "Unknown session status " + this.h.i.status);
          }
        else
          W && E(W, y, "Received session update event without known session");
      }
    };
  l("cast.framework.CastContext", Y);
  Y.prototype.setLaunchCredentialsData = Y.prototype.Vb;
  Y.prototype.endCurrentSession = Y.prototype.pb;
  Y.prototype.getCurrentSession = Y.prototype.zb;
  Y.prototype.requestSession = Y.prototype.requestSession;
  Y.prototype.getSessionState = Y.prototype.ya;
  Y.prototype.getCastState = Y.prototype.yb;
  Y.prototype.setOptions = Y.prototype.Xb;
  Y.prototype.removeEventListener = Y.prototype.removeEventListener;
  Y.prototype.addEventListener = Y.prototype.addEventListener;
  Y.za = void 0;
  Y.K = function () {
    return Y.za ? Y.za : (Y.za = new Y());
  };
  Y.getInstance = Y.K;
  var Sb = function () {
      Y.K().requestSession();
    },
    Tb = function (a, b) {
      a.setAttribute("class", b ? "cast_caf_state_c" : "cast_caf_state_d");
    },
    Vb = function (a) {
      if ("NO_DEVICES_AVAILABLE" == a.l) a.J.style.display = "none";
      else
        switch (((a.J.style.display = a.ob), a.l)) {
          case "NOT_CONNECTED":
            Ub(a, !1, "cast_caf_state_h");
            break;
          case "CONNECTING":
            Ub(a, !1, "cast_caf_state_h");
            a.O || a.Oa();
            break;
          case "CONNECTED":
            Ub(a, !0, "cast_caf_state_c");
        }
    },
    Wb = function (a, b) {
      a.pa = Y.K();
      a.Wa = a.Nb.bind(a);
      a.oa = [];
      for (let c = 0; 3 > c; c++)
        a.oa.push(b.querySelector("#cast_caf_icon_arch" + c));
      a.jb = b.querySelector("#cast_caf_icon_box");
      a.kb = b.querySelector("#cast_caf_icon_boxfill");
      a.Ga = 0;
      a.O = null;
      a.ob = window.getComputedStyle(a.J, null).display;
      a.l = a.pa.S;
      Vb(a);
      a.J.addEventListener("click", Sb);
      a.pa.addEventListener("caststatechanged", a.Wa);
    },
    Xb = function (a) {
      a.pa.removeEventListener("caststatechanged", a.Wa);
      null !== a.O && (window.clearTimeout(a.O), (a.O = null));
    },
    Ub = function (a, b, c) {
      for (let d of a.oa) Tb(d, b);
      Tb(a.jb, b);
      a.kb.setAttribute("class", c);
    };
  const Yb = class {
      constructor(a) {
        this.J = a;
        try {
          this.J.attachShadow({ mode: "open" }).innerHTML = Oa().getContent();
        } catch (c) {
          a = this.J;
          var b = Na();
          if (Ha()) for (; a.lastChild; ) a.removeChild(a.lastChild);
          a.innerHTML = xa(b);
        }
      }
      Nb(a) {
        this.l = a.castState;
        Vb(this);
      }
      Oa() {
        this.O = null;
        if ("CONNECTING" == this.l) {
          for (let a = 0; 3 > a; a++) Tb(this.oa[a], a == this.Ga);
          this.Ga = (this.Ga + 1) % 3;
          this.O = window.setTimeout(this.Oa.bind(this), 300);
        }
      }
    },
    Zb = class extends HTMLElement {
      constructor() {
        super();
        this.B = new Yb(this);
      }
      connectedCallback() {
        Wb(this.B, this.shadowRoot || this);
      }
      disconnectedCallback() {
        Xb(this.B);
      }
      qa() {}
    },
    $b = class extends HTMLButtonElement {
      constructor() {
        super();
        this.B = new Yb(this);
      }
      connectedCallback() {
        Wb(this.B, this.shadowRoot || this);
      }
      disconnectedCallback() {
        Xb(this.B);
      }
      qa() {}
    };
  var bc = function () {
      const a = document.createElement.bind(document);
      document.createElement = function (b, c) {
        if (
          "google-cast-launcher" === b ||
          ("button" === b &&
            c &&
            ("google-cast-button" === c || "google-cast-button" === c.is))
        ) {
          const d = a(b, c);
          ac(d);
          return d;
        }
        return a(...arguments);
      };
    },
    cc = function () {
      document
        .querySelectorAll("button[is=google-cast-button], google-cast-launcher")
        .forEach((a) => ac(a));
    },
    ac = function (a) {
      a.B = new Yb(a);
      Wb(a.B, a.shadowRoot || a);
      a.qa = function () {
        Xb(a.B);
      };
    };
  customElements.define
    ? (customElements.define("google-cast-button", $b, { extends: "button" }),
      customElements.define("google-cast-launcher", Zb))
    : ("complete" !== document.readyState
        ? window.addEventListener("load", cc)
        : cc(),
      bc());
  l(
    "cast.framework.RemotePlayer",
    class {
      constructor() {
        this.isMediaLoaded = this.isConnected = !1;
        this.videoInfo = this.queueData = void 0;
        this.currentTime = this.duration = 0;
        this.volumeLevel = 1;
        this.canControlVolume = !0;
        this.canSeek = this.canPause = this.isMuted = this.isPaused = !1;
        this.displayStatus =
          this.title =
          this.statusText =
          this.displayName =
            "";
        this.controller =
          this.savedPlayerState =
          this.playerState =
          this.imageUrl =
          this.mediaInfo =
            null;
        this.isPlayingBreak = !1;
        this.currentBreakClipNumber = this.numberBreakClips = 0;
        this.liveSeekableRange =
          this.whenSkippable =
          this.breakClipId =
          this.breakId =
          this.currentBreakClipTime =
          this.currentBreakTime =
            void 0;
      }
    },
  );
  var dc = class extends U {
    constructor(a, b, c) {
      super(a);
      this.field = b;
      this.value = c;
    }
  };
  l("cast.framework.RemotePlayerChangedEvent", dc);
  var ec = function (a, b) {
      return new window.Proxy(a, {
        set: (c, d, e) => {
          if (e === c[d]) return !0;
          c[d] = e;
          b.dispatchEvent(new dc(d + "Changed", d, e));
          b.dispatchEvent(new dc("anyChanged", d, e));
          return !0;
        },
      });
    },
    Z = class extends wb {
      constructor(a) {
        const b = new Lb();
        super(ec(a, b));
        this.m = b;
        this.Kb = 0;
        a = Y.K();
        a.addEventListener("sessionstatechanged", this.Ub.bind(this));
        (a = a.h) ? vb(this, a.i) : this.D();
      }
      addEventListener(a, b) {
        this.m.addEventListener(a, b);
      }
      removeEventListener(a, b) {
        this.m.removeEventListener(a, b);
      }
      Ub(a) {
        switch (a.sessionState) {
          case "SESSION_STARTED":
          case "SESSION_RESUMED":
            this.g.isConnected = !0;
            const b = a.session && a.session.i;
            b &&
              (vb(this, b),
              a.session.addEventListener("mediasession", this.Va.bind(this)));
        }
      }
      D(a) {
        const b = Y.K().h;
        b
          ? (this.g.savedPlayerState = null)
          : this.g.isConnected &&
            (this.g.savedPlayerState = {
              mediaInfo: this.g.mediaInfo,
              currentTime: this.g.currentTime,
              isPaused: this.g.isPaused,
            });
        super.D(a);
        this.g.isConnected = !!b;
        this.g.statusText = (b && b.Y) || "";
        a = b && b.va();
        this.g.playerState =
          (a && a.playerState) || chrome.cast.media.PlayerState.IDLE;
        a
          ? ((this.g.queueData = a.queueData),
            (this.g.videoInfo = a.videoInfo),
            (this.g.liveSeekableRange =
              "function" === typeof a.getEstimatedLiveSeekableRange
                ? a.getEstimatedLiveSeekableRange()
                : a.liveSeekableRange))
          : ((this.g.queueData = void 0),
            (this.g.videoInfo = void 0),
            (this.g.liveSeekableRange = void 0));
      }
      Z(a) {
        super.Z(a);
        var b = (this.g.mediaInfo = a) && a.metadata;
        a = null;
        let c = "";
        b &&
          ((c = b.title || ""),
          (b = b.images) && 0 < b.length && (a = b[0].url));
        this.g.title = c;
        this.g.imageUrl = a;
      }
      Ea() {
        super.Ea();
      }
      stop() {
        super.stop();
      }
      seek() {
        super.seek();
      }
      Ca() {
        super.Ca();
      }
      Ja() {
        super.Ja();
      }
      ua(a) {
        return super.ua(a);
      }
      wa(a, b) {
        return super.wa(a, b);
      }
      xa(a, b) {
        return super.xa(a, b);
      }
      bc() {
        let a = Y.K().h;
        if (a) {
          var b = a.va();
          b &&
            a &&
            a.sendMessage("urn:x-cast:com.google.cast.media", {
              type: "SKIP_AD",
              requestId: this.Kb++,
              mediaSessionId: b.mediaSessionId,
            });
        }
      }
    };
  l("cast.framework.RemotePlayerController", Z);
  Z.prototype.skipAd = Z.prototype.bc;
  Z.prototype.getSeekTime = Z.prototype.xa;
  Z.prototype.getSeekPosition = Z.prototype.wa;
  Z.prototype.getFormattedTime = Z.prototype.ua;
  Z.prototype.setVolumeLevel = Z.prototype.Ja;
  Z.prototype.muteOrUnmute = Z.prototype.Ca;
  Z.prototype.seek = Z.prototype.seek;
  Z.prototype.stop = Z.prototype.stop;
  Z.prototype.playOrPause = Z.prototype.Ea;
  Z.prototype.removeEventListener = Z.prototype.removeEventListener;
  Z.prototype.addEventListener = Z.prototype.addEventListener;
}).call(window);
