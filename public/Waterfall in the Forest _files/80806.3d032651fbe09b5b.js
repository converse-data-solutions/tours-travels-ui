"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [80806],
  {
    80806: function (e, c, n) {
      n.r(c),
        n.d(c, {
          default: function () {
            return d;
          },
        });
      var l = n(98431),
        o = n(4562),
        a = n(67597),
        t = n(49977),
        s = n(87460),
        r = n(134),
        i = n(62860),
        u = n(57410),
        p = n(59048),
        h = n(85656),
        m = n(21874),
        f = n(25570),
        Z = n(24651),
        g = n(57611);
      function d(e) {
        var c = e.locales,
          n = (0, t.Z)(),
          d = n.t,
          k = n.lang,
          x = (0, r.Z)(),
          w = (0, l.Z)(x, 2),
          _ = w[0].switchLocale.open,
          b = w[1],
          v = (0, Z.Z)();
        (0, f.Z)();
        var C = (0, i.Z)("#".concat(o.QT));
        return (0, g.jsxs)(s.Z, {
          appElement: C,
          isOpen: _,
          onRequestClose: (0, a.useCallback)(
            function () {
              return b({ type: "switch-locale-modal-close" });
            },
            [b],
          ),
          closeButtonInOverlay: !0,
          children: [
            (0, g.jsxs)(u.Z, {
              size: "h$21",
              marginBottom: 15,
              children: [d("common:locale.choose_your_language"), ":"],
            }),
            (0, g.jsx)(m.Z, {
              spaceBetween: 8,
              responsive: "wrap",
              children: c.map(function (e) {
                var c = e.locale,
                  n = e.href;
                return (0, g.jsx)(
                  h.Z,
                  {
                    href: n,
                    onClick: v(c),
                    disabled: k === c,
                    imgixIcon: "https://images.pexels.com/lib/flags/".concat(
                      c,
                      ".png",
                    ),
                    imgixIconFit: "crop",
                    imgixIconCrop: "left",
                    trackName: "switch_locale",
                    trackLabel: c,
                    children: p.Z[c],
                  },
                  c,
                );
              }),
            }),
          ],
        });
      }
    },
  },
]);
