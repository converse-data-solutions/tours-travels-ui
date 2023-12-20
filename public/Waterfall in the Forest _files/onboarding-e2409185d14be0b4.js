(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [76216],
  {
    26807: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var r = t(49977),
        o = t(21879),
        i = t(2844),
        a = t(77175),
        s = t(85656),
        c = t(59050),
        l = t(47332),
        u = t(50766),
        d = t(16482),
        h = t(24171),
        p = t(5523),
        g = t.n(p),
        b = t(34324),
        f = t(57611);
      function _(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function m(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? _(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var j = { oversized: 50, desktop: 30, mobile: 15, tablet: 15 },
        v = { oversized: 30, desktop: 30, mobile: 8, tablet: 15 };
      function x(e) {
        var n = (0, r.Z)("common").t;
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("div", { className: g().placeholderPadding }),
            (0, f.jsx)("div", {
              className: g().container,
              children: (0, f.jsx)(c.Z, {
                tag: (0, f.jsx)("nav", {}),
                paddingLeft: v,
                paddingRight: v,
                horizontalPadding: !1,
                children: (0, f.jsxs)(b.Z, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  className: g().flex,
                  children: [
                    (0, f.jsx)(u.Z, {
                      href: function (e) {
                        return (0, d.s)({ i18n: e });
                      },
                      className: g().logo,
                      children: (0, f.jsx)(l.Z, {
                        symbol: h.Z,
                        inline: !0,
                        width: 130,
                        height: 50,
                        marginRight: j,
                      }),
                    }),
                    (0, f.jsx)(
                      s.Z,
                      m(
                        m(
                          {},
                          {
                            theme: "greyMinus2$DFDFE0",
                            marginLeft: 15,
                            paddingLeft: 20,
                            paddingRight: 20,
                          },
                        ),
                        {},
                        {
                          theme: "green$05A081",
                          marginLeft: 15,
                          paddingLeft: 20,
                          paddingRight: 20,
                          responsive: !0,
                          href: function (n) {
                            return (e.showLoginBtn ? a.Qv : a.au)({ i18n: n });
                          },
                          noBorder: !0,
                          children: e.showLoginBtn
                            ? n("navbar.login")
                            : n("navbar.join"),
                        },
                      ),
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var y = t(36198),
        k = t.n(y),
        O = t(38895),
        P = t(67597),
        Z = t(15129),
        N = t(4286);
      var w = t(48358),
        C = t(52415),
        R = ["register", "onboarding"];
      function T(e) {
        var n = e.translatedSlugs,
          t = e.children,
          i = e.isPhotographer,
          a = (function (e) {
            var n = e.tab,
              t = (0, r.Z)("auth").t;
            return {
              title: t("meta.".concat(n, ".title")),
              description: t("meta.".concat(n, ".description")),
            };
          })(e),
          s = (0, C.Z)().close;
        return (
          (0, w.Z)(function () {
            s();
          }),
          (function () {
            var e = (0, O.ZP)().user,
              n = (0, r.Z)(),
              t = (0, Z.useRouter)();
            (0, P.useEffect)(
              function () {
                if (e) {
                  var r = (0, N.Z)(t, n, e);
                  t.push(r);
                }
              },
              [e, t, n],
            );
          })(),
          (0, f.jsxs)("div", {
            className: i ? void 0 : k().layout,
            children: [
              (0, f.jsx)(o.Z, {
                translatedSlugs: n,
                metaRoute: function (n) {
                  return e.metaRoute(n);
                },
                title: a.title,
                description: a.description,
                showGoogleOneTap: !1,
              }),
              (0, f.jsx)("div", {
                className: k().navbar,
                children: (0, f.jsx)(x, { showLoginBtn: R.includes(e.tab) }),
              }),
              t,
            ],
          })
        );
      }
    },
    69008: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return T;
          },
          default: function () {
            return B;
          },
        });
      var r = t(2844),
        o = t(26807),
        i = t(49977),
        a = t(77175),
        s = t(57410),
        c = t(34324),
        l = t(36198),
        u = t.n(l),
        d = t(96201),
        h = t.n(d),
        p = t(47326),
        g = t(25590),
        b = t.n(g),
        f = t(67597),
        _ = t(85656),
        m = t(9134),
        j = t.n(m),
        v = t(57611);
      function x(e) {
        return (0, v.jsxs)("label", {
          className: b().root,
          children: [
            (0, v.jsx)("input", {
              type: "radio",
              className: b().input,
              checked: e.checked,
              onChange: e.onChange,
            }),
            (0, v.jsx)("span", {
              className: j()(
                b().checkMark,
                (0, r.Z)({}, b().checkMarkChecked, e.checked),
              ),
            }),
            (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)(s.Z, { size: "h$21", children: e.title }),
                (0, v.jsx)(s.Z, { size: "p$16", children: e.bodyText }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        var n = (0, f.useState)(!0),
          t = n[0],
          r = n[1],
          o = (0, i.Z)("auth").t,
          s = t ? a.l6 : a.aQ;
        return (0, v.jsxs)("section", {
          className: e.className,
          children: [
            (0, v.jsx)(x, {
              bodyText: o("onboarding.consumer_label"),
              title: o("onboarding.consumer_title"),
              checked: t,
              onChange: function () {
                return r(!0);
              },
            }),
            (0, v.jsx)(x, {
              bodyText: o("onboarding.contributor_label"),
              title: o("onboarding.contributor_title"),
              checked: !t,
              onChange: function () {
                return r(!1);
              },
            }),
            (0, v.jsx)(_.Z, {
              href: function (e) {
                return s({ i18n: e });
              },
              fullWidth: !0,
              theme: "green$05A081",
              className: b().linkBtn,
              marginTop: 20,
              children: o("onboarding.confirm"),
            }),
          ],
        });
      }
      var k = t(21376),
        O = t.n(k),
        P = t(15129);
      function Z(e) {
        var n,
          t =
            null === (n = (0, P.useRouter)().query.redirect_to) || void 0 === n
              ? void 0
              : n.toString();
        return (0, v.jsxs)(c.Z, {
          tag: (0, v.jsx)("section", {}),
          flexDirection: "column",
          className: O().panel,
          children: [
            (0, v.jsx)("img", { className: O().image, src: e.imgSrc, alt: "" }),
            (0, v.jsx)(s.Z, {
              size: "p$18",
              marginTop: 30,
              marginBottom: 30,
              center: !0,
              paddingLeft: 15,
              paddingRight: 15,
              children: e.bodyText,
            }),
            (0, v.jsx)(_.Z, {
              href: function (n) {
                return e.linkPath({ i18n: n, redirectTo: t, onboarding: !0 });
              },
              fullWidth: !0,
              theme: "green$05A081",
              className: O().linkBtn,
              children: e.btnText,
            }),
          ],
        });
      }
      function N(e) {
        var n = (0, i.Z)("auth").t;
        return (0, v.jsxs)(c.Z, {
          className: j()(O().panelContainer, e.className),
          children: [
            (0, v.jsx)(Z, {
              imgSrc:
                "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712",
              bodyText: n("onboarding.consumer_label"),
              btnText: n("onboarding.consumer_button"),
              linkPath: a.l6,
            }),
            (0, v.jsx)(Z, {
              imgSrc:
                "https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712",
              bodyText: n("onboarding.contributor_label"),
              btnText: n("onboarding.contributor_button"),
              linkPath: a.aQ,
            }),
          ],
        });
      }
      function w(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function C(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? w(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var R = { paddingTop: 30, paddingRight: 30, paddingLeft: 30 };
      var T = !0,
        B = function (e) {
          var n = (0, i.Z)("auth").t,
            t = (0, p.v)({ visibleRange: "mobile-tablet" }),
            r = (0, p.v)({ visibleRange: "desktop-oversized" });
          return (0, v.jsx)(
            o.Z,
            C(
              C(
                {
                  tab: "onboarding",
                  metaRoute: function (e) {
                    return a.au.metaAdapter(e);
                  },
                },
                e,
              ),
              {},
              {
                children: (0, v.jsxs)(
                  c.Z,
                  C(
                    C(
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        className: u().bothCols,
                      },
                      R,
                    ),
                    {},
                    {
                      children: [
                        (0, v.jsx)(s.Z, {
                          size: "h$49",
                          weight: "semibold",
                          color: "midnight$2C343E",
                          center: !0,
                          className: h().title,
                          children: n("onboarding.title"),
                        }),
                        (0, v.jsx)(y, { className: t }),
                        (0, v.jsx)(N, { className: r }),
                        (0, v.jsx)(s.Z, {
                          size: "p$16",
                          weight: "semibold",
                          color: "grey$7F7F7F",
                          center: !0,
                          marginTop: 30,
                          className: h().additionalInfo,
                          children: n("onboarding.additional_info"),
                        }),
                      ],
                    },
                  ),
                ),
              },
            ),
          );
        };
    },
    4286: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(74961),
        o = t(90012),
        i = t(10948);
      function a(e, n, t) {
        var a,
          s =
            null === (a = e.query.redirect_to) || void 0 === a
              ? void 0
              : a.toString(),
          c = t.attributes.slug,
          l = (0, i.BW)({ i18n: n, slug: c }).href,
          u = e.asPath.includes("join-contributor"),
          d = e.asPath.includes("upload");
        try {
          if (u) return (0, o.Tp)({ i18n: n }).href;
          if (!s) return d ? (0, i.m$)({ i18n: n, slug: c }).href : l;
          var h = decodeURIComponent(s);
          if ("/" === (null === h || void 0 === h ? void 0 : h[0])) return h;
        } catch (p) {
          console.error(p), (0, r.Tb)(p);
        }
        return l;
      }
    },
    32472: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/onboarding",
        function () {
          return t(69008);
        },
      ]);
    },
    5523: function (e) {
      e.exports = {
        container: "Navbar_container__Jqip_",
        placeholderPadding: "Navbar_placeholderPadding__hI6w_",
        flex: "Navbar_flex__yA1gK",
        logo: "Navbar_logo__GbI9v",
      };
    },
    36198: function (e) {
      e.exports = {
        layout: "AuthWrapper_layout__lEbss",
        alertContainer: "AuthWrapper_alertContainer__GX7i2",
        navbar: "AuthWrapper_navbar__eiPCp",
        leftCol: "AuthWrapper_leftCol__PchjS",
        rightCol: "AuthWrapper_rightCol__qaYzX",
        bothCols: "AuthWrapper_bothCols__euuXV",
      };
    },
    21376: function (e) {
      e.exports = {
        panelContainer: "Panels_panelContainer__ACdk3",
        panel: "Panels_panel__aR_Zp",
        image: "Panels_image__2pIbA",
        linkBtn: "Panels_linkBtn__kgW5p",
      };
    },
    25590: function (e) {
      e.exports = {
        root: "RadioButtons_root__nvksM",
        input: "RadioButtons_input___JF8G",
        checkMark: "RadioButtons_checkMark__Hw06x",
        checkMarkChecked: "RadioButtons_checkMarkChecked__dIbJO",
      };
    },
    96201: function (e) {
      e.exports = {
        title: "onboarding_title__N2BWk",
        additionalInfo: "onboarding_additionalInfo__rJBsG",
      };
    },
  },
  function (e) {
    e.O(0, [21879, 49774, 92888, 40179], function () {
      return (n = 32472), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
