(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43977],
  {
    43977: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return g;
          },
        });
      var i = t(2844),
        r = t(9134),
        o = t.n(r),
        u = t(57409),
        a = t(45910),
        d = t.n(a),
        c = t(67597);
      function l(e) {
        var n = e.video,
          t = e.mouseOver,
          i = e.disabled,
          r = (0, c.useState)(!1),
          o = r[0],
          u = r[1];
        return (
          (0, c.useEffect)(
            function () {
              var e;
              t ||
                i ||
                (null === (e = n.current) || void 0 === e || e.pause(), u(!1));
            },
            [t, i, n],
          ),
          (function (e, n) {
            var t = (0, c.useRef)(!1),
              i = (0, c.useRef)(null);
            (0, c.useEffect)(
              function () {
                i.current = e;
              },
              [e],
            ),
              (0, c.useEffect)(
                function () {
                  if (null === n) return function () {};
                  var e;
                  if (t.current)
                    return (
                      null === (e = i.current) || void 0 === e || e.call(i),
                      function () {}
                    );
                  var r = setTimeout(function () {
                    var e;
                    null === (e = i.current) || void 0 === e || e.call(i),
                      (t.current = !0);
                  }, n);
                  return function () {
                    clearInterval(r);
                  };
                },
                [n],
              );
          })(
            function () {
              var e, t, i;
              u(!0),
                null === (e = n.current) ||
                  void 0 === e ||
                  null === (t = e.play()) ||
                  void 0 === t ||
                  null ===
                    (i = t.then(function () {
                      u(!0);
                    })) ||
                  void 0 === i ||
                  i.catch(function () {
                    u(!1);
                  });
            },
            t && !i ? 1e3 : null,
          ),
          o
        );
      }
      var s = t(47332),
        v = t(91136),
        f = t.n(v),
        p = t(19881),
        _ = t.n(p),
        b = new (f())({
          id: "InvertedVideoIcon-a263f1066b53374fb7ee4f4fa699a697",
          use: "InvertedVideoIcon-a263f1066b53374fb7ee4f4fa699a697-usage",
          viewBox: "0 0 28.248 22.598",
          content:
            '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.248 22.598" id="InvertedVideoIcon-a263f1066b53374fb7ee4f4fa699a697"><path d="M27.423,4H4.825A2.833,2.833,0,0,0,2,6.825V23.773A2.833,2.833,0,0,0,4.825,26.6h22.6a2.833,2.833,0,0,0,2.825-2.825V6.825A2.833,2.833,0,0,0,27.423,4ZM12.593,21.655V8.943L22.48,15.3Z" transform="translate(-2 -4)" /></symbol>',
        }),
        m = (_().add(b), b),
        h = t(57611);
      function g(e) {
        var n,
          t = e.mouseOver,
          r = e.autoPlay,
          a = e.video,
          v = e.style,
          f = "string" === typeof a ? a : a.attributes.video.preview_src,
          p = (0, u.Z)({ threshold: 0.2 }),
          _ = p.ref,
          b = p.isIntersecting;
        !(function (e) {
          (0, c.useEffect)(
            function () {
              var n = e.current,
                t = function () {
                  if (n && !(n.readyState >= n.HAVE_FUTURE_DATA)) {
                    var e = n.querySelector("source"),
                      t = null === e || void 0 === e ? void 0 : e.src,
                      i = null === n || void 0 === n ? void 0 : n.currentTime;
                    e &&
                      ((e.src = ""),
                      n.load(),
                      t && (e.src = t),
                      (n.currentTime = i));
                  }
                };
              return (
                null === n || void 0 === n || n.addEventListener("pause", t),
                function () {
                  null === n ||
                    void 0 === n ||
                    n.removeEventListener("pause", t);
                }
              );
            },
            [e],
          );
        })(_);
        var g = l({ video: _, mouseOver: t, disabled: !!r });
        return (
          (function (e) {
            var n,
              t,
              i = e.video,
              r = e.isIntersecting;
            e.disabled ||
              (r
                ? null === (n = i.current) ||
                  void 0 === n ||
                  n.play().catch(function () {})
                : null === (t = i.current) || void 0 === t || t.pause());
          })({ video: _, isIntersecting: b, disabled: !r }),
          (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)("video", {
                ref: _,
                preload: "none",
                loop: !0,
                muted: !0,
                className: d().video,
                playsInline: !0,
                style: v,
                children: (0, h.jsx)("source", { src: f, type: "video/mp4" }),
              }),
              (0, h.jsx)(s.Z, {
                symbol: m,
                className: o()(
                  d().videoIcon,
                  ((n = {}),
                  (0, i.Z)(n, d().hidden, !!r || g),
                  (0, i.Z)(n, d().loading, !g && t),
                  n),
                ),
              }),
            ],
          })
        );
      }
    },
    45910: function (e) {
      e.exports = {
        video: "VideoTag_video__i0yT6",
        videoIcon: "VideoTag_videoIcon__bMRVN",
        hidden: "VideoTag_hidden__Y5Q1A",
        loading: "VideoTag_loading__ttGsi",
      };
    },
  },
]);
