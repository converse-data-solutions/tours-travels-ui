(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21879],
  {
    24651: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(98431),
        r = n(49740),
        o = n(67597),
        i = n(134),
        c = n(25570);
      function l() {
        var e = (0, i.Z)(),
          t = (0, a.Z)(e, 2)[1];
        return (0, o.useCallback)(
          function (e) {
            return function () {
              (0, r.d8)("locale", e),
                t({ type: "switch-locale-modal-close" }),
                t({ type: "switch-locale-banner-close" }),
                (0, c.D)(e);
            };
          },
          [t],
        );
      }
    },
    25570: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return g;
        },
        Z: function () {
          return m;
        },
      });
      var a = n(98431),
        r = n(70001),
        o = n(96357),
        i = n(49977),
        c = n(71084),
        l = n(48358),
        s = n(134),
        u = n(74961),
        p = "hide_switch_locale";
      function g(e) {
        var t = new Date();
        t.setDate(t.getDate() + 60);
        var n = { hideUntil: t, language: (0, c.Z)(e) };
        localStorage.setItem(p, JSON.stringify(n));
      }
      function f(e) {
        var t = e.userLanguage,
          n = e.pageLanguage,
          a = (function () {
            var e = localStorage.getItem(p);
            if (!e) return null;
            try {
              var t = JSON.parse(e),
                n = t.hideUntil,
                a = t.language;
              return n > new Date() ? null : a ? (0, c.Z)(a) : null;
            } catch (r) {
              return (0, u.Tb)(r), null;
            }
          })();
        return (!a || a !== n) && n !== t && !!(0, c.j)().has(t);
      }
      function m() {
        var e = (0, i.Z)().lang,
          t = (0, s.Z)(),
          n = (0, a.Z)(t, 2)[1];
        (0, l.Z)(function () {
          if ((0, r.Z)()) {
            var t = (0, c.Z)(
                navigator.language || navigator.userLanguage || o.defaultLocale,
              ),
              a = (0, c.Z)(e);
            f({ userLanguage: t, pageLanguage: a }) &&
              n({
                type: "switch-locale-banner-open",
                payload: { pageLanguage: a, userLanguage: t },
              });
          }
        });
      }
    },
    21879: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return J;
        },
      });
      var a = n(2844),
        r = n(98431),
        o = n(9605),
        i = n(44419);
      function c() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (0, i.Z)("/images".concat(e));
      }
      var l = n(96357),
        s = n(49977),
        u = n(84035),
        p = n(70001),
        g = n(17075),
        f = n(33770),
        m = n(71084),
        h = n(134),
        d = n(85656),
        x = n(47332),
        v = n(21874),
        j = n(57410);
      function w(e) {
        return l.availableLocales.find(function (t) {
          return t.startsWith(e);
        });
      }
      var y = n(59048),
        b = n(43530),
        Z = n(72934),
        S = n(4562),
        k = n(62860),
        L = n(42342),
        _ = n.n(L),
        O = n(24651),
        D = n(67597),
        I = n(63115),
        N = n.n(I),
        P = n(57611);
      function T(e) {
        var t = e.locales,
          n = (0, h.Z)(),
          a = (0, r.Z)(n, 2),
          o = a[0].switchLocaleBanner,
          i = a[1],
          c = (0, O.Z)(),
          l = (0, s.Z)("common").t;
        if (
          ((0, D.useEffect)(
            function () {
              (0, p.Z)() &&
                document.body.classList.add(N().contentAboveSwitchLocaleModal);
            },
            [o],
          ),
          !o)
        )
          return null;
        var u = (0, k.Z)("#".concat(S.jU));
        if (!u) return null;
        var g = o.pageLanguage,
          f = o.userLanguage,
          m = w(g),
          L = w(f),
          I = t.find(function (e) {
            return e.locale === m;
          }),
          T = t.find(function (e) {
            return e.locale === L;
          });
        return I && T
          ? (0, Z.createPortal)(
              (0, P.jsxs)("div", {
                className: _().container,
                children: [
                  (0, P.jsxs)(j.Z, {
                    size: "h$18",
                    weight: "bold",
                    className: _().title,
                    children: [l("locale.choose_your_language"), ":"],
                  }),
                  (0, P.jsxs)(v.Z, {
                    spaceBetween: 8,
                    className: _().buttons,
                    children: [
                      (0, P.jsx)(d.Z, {
                        href: I.href,
                        onClick: c(I.locale),
                        imgixIcon:
                          "https://images.pexels.com/lib/flags/".concat(
                            I.locale,
                            ".png",
                          ),
                        imgixIconFit: "crop",
                        imgixIconCrop: "left",
                        children: y.Z[I.locale],
                      }),
                      (0, P.jsx)(d.Z, {
                        href: T.href,
                        onClick: c(T.locale),
                        imgixIcon:
                          "https://images.pexels.com/lib/flags/".concat(
                            T.locale,
                            ".png",
                          ),
                        imgixIconFit: "crop",
                        imgixIconCrop: "left",
                        children: y.Z[T.locale],
                      }),
                      (0, P.jsx)(d.C, {
                        onClick: function () {
                          return i({ type: "switch-locale-banner-close" });
                        },
                        icon: (0, P.jsx)(x.Z, { symbol: b.Z }),
                      }),
                    ],
                  }),
                ],
              }),
              u,
            )
          : null;
      }
      var C = n(15129),
        R = n(89969),
        E = n.n(R),
        U = n(52415),
        B = n(96418);
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var M = (0, f.default)(
        function () {
          return n.e(80806).then(n.bind(n, 80806));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [80806];
            },
          },
        },
      );
      function z(e) {
        var t = e.metaRoute,
          n = e.canonicalMetaRoute,
          o = e.translatedSlugs,
          i = void 0 === o ? {} : o,
          c = e.canonicalLocaleOverride,
          l = (0, s.Z)(),
          u = (0, C.useRouter)().query,
          p = (n || t)({
            i18n: l,
            includeDomain: !0,
            locale: c || l.lang,
            translatedSlugs: i,
          }).href.split("?"),
          g = (0, r.Z)(p, 2),
          f = g[0],
          m = g[1],
          h = E().stringify(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? F(Object(n), !0).forEach(function (t) {
                      (0, a.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : F(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            })({ page: u.page }, E().parse(m)),
          );
        return h ? "".concat(f, "?").concat(h) : f;
      }
      function J(e) {
        var t = e.onlyDefaultLocale,
          n = e.title,
          a = e.description,
          r = e.ogImage,
          i = e.ogTitle,
          f = e.ogDescription,
          h = e.ogSiteName,
          d = e.ogType,
          x = e.metaRoute,
          v = e.translatedSlugs,
          j = void 0 === v ? {} : v,
          w = e.robots,
          y = e.keywords,
          b = e.articleModifiedTime,
          Z = e.articleTag,
          S = e.trackingUrl,
          k = e.noIndex,
          L = e.xDefault,
          _ = e.isMediumHead,
          O = e.showGoogleOneTap,
          D = void 0 === O || O,
          I = (0, s.Z)(),
          N = I.t,
          C = I.lang,
          R = z(e),
          E = (0, U.Z)().state;
        (0, u.Z)(S || ((0, p.Z)() && window.location.href) || null);
        var F = l.availableLocales.map(function (e) {
          return {
            href: x({ i18n: I, locale: e, translatedSlugs: j }).href,
            locale: e,
          };
        });
        if (E && !_) return null;
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(M, { locales: F }),
            (0, P.jsx)(T, { locales: F }),
            D && (0, P.jsx)(B.Z, {}),
            (0, P.jsxs)(o.default, {
              children: [
                (0, P.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, P.jsx)("meta", { name: "theme-color", content: "#232a34" }),
                (0, P.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#05a081",
                }),
                (0, P.jsx)("title", { children: n || N("common:meta.title") }),
                (0, P.jsx)("meta", {
                  name: "description",
                  content: a || N("common:meta.description"),
                }),
                (0, P.jsx)("meta", {
                  name: "robots",
                  content: (function () {
                    var e = "max-image-preview:large";
                    return k || w
                      ? k
                        ? "noindex, ".concat(e)
                        : w
                          ? "".concat(w, ", ").concat(e)
                          : void 0
                      : e;
                  })(),
                }),
                y && (0, P.jsx)("meta", { name: "keywords", content: y }),
                b &&
                  (0, P.jsx)("meta", {
                    property: "article:modified_time",
                    content: b,
                  }),
                Z &&
                  (0, P.jsx)("meta", { property: "article:tag", content: Z }),
                (0, P.jsx)("meta", {
                  property: "og:image",
                  content: r || c("/meta/pexels-stock-photos.jpg"),
                }),
                i && (0, P.jsx)("meta", { property: "og:title", content: i }),
                f &&
                  (0, P.jsx)("meta", {
                    property: "og:description",
                    content: f,
                  }),
                h &&
                  (0, P.jsx)("meta", { property: "og:site_name", content: h }),
                d && (0, P.jsx)("meta", { property: "og:type", content: d }),
                (0, P.jsx)("meta", { property: "og:url", content: R }),
                (0, P.jsx)("link", { href: R, rel: "canonical" }),
                (0, P.jsx)("link", {
                  rel: "alternate",
                  hrefLang: "x-default",
                  href: (L || x)({
                    i18n: I,
                    includeDomain: !0,
                    locale: "en-US",
                    translatedSlugs: j,
                  }).href,
                }),
                !t &&
                  l.availableLocales.map(function (e) {
                    var t = x({
                      i18n: I,
                      includeDomain: !0,
                      locale: e,
                      translatedSlugs: j,
                    }).href;
                    return (
                      e === C && (t = R),
                      (0, P.jsx)(
                        "link",
                        { rel: "alternate", hrefLang: (0, m.Z)(e), href: t },
                        e,
                      )
                    );
                  }),
                (0, P.jsx)("link", {
                  href: (0, g.JV)({ i18n: I, includeDomain: !0 }).href,
                  rel: "alternate",
                  title: "RSS",
                  type: "application/rss+xml",
                }),
                (0, P.jsx)("link", {
                  rel: "search",
                  type: "application/opensearchdescription+xml",
                  title: "Pexels",
                  href: (0, g.us)({ i18n: I }).href,
                }),
                (0, P.jsx)("link", {
                  href: c("/meta/favicon.ico"),
                  rel: "shortcut icon",
                  type: "image/x-icon",
                }),
                (0, P.jsx)("link", {
                  rel: "icon",
                  sizes: "192x192",
                  href: c("/meta/pexels-icon.png"),
                }),
                (0, P.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: c("/meta/apple-touch-icon.png"),
                }),
                (0, P.jsx)("link", {
                  rel: "mask-icon",
                  href: c("/meta/safari-pinned-tab.svg"),
                  color: "#05a081",
                }),
                (0, P.jsx)("meta", {
                  name: "application-name",
                  content: "Pexels",
                }),
                (0, P.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                      "@context": "http://schema.org",
                      "@type": "WebSite",
                      name: "Pexels",
                      url: "https://www.pexels.com/",
                      potentialAction: {
                        "@type": "SearchAction",
                        target:
                          "https://www.pexels.com/search/{search_term_string}/",
                        "query-input": "required name=search_term_string",
                      },
                    }),
                  },
                }),
                (0, P.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                      "@context": "http://schema.org",
                      "@type": "Organization",
                      name: "Pexels",
                      url: "https://www.pexels.com",
                      logo: c("/meta/pexels-logo.png"),
                      sameAs: [
                        "https://www.facebook.com/pexels",
                        "https://twitter.com/pexels",
                        "https://www.pinterest.com/pexels/",
                        "https://instagram.com/pexels/",
                      ],
                    }),
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    71084: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
        j: function () {
          return c;
        },
      });
      var a = n(98431),
        r = n(96357);
      var o = (function () {
        var e = new Set(),
          t = {};
        return (
          r.availableLocales.forEach(function (n) {
            var r = n.split("-"),
              o = (0, a.Z)(r, 1)[0];
            t[o] ? e.add(o) : (t[o] = !0);
          }),
          e
        );
      })();
      function i(e) {
        var t = e.split("-"),
          n = (0, a.Z)(t, 1)[0];
        return o.has(n) ? e : n;
      }
      function c() {
        return new Set(r.availableLocales.map(i));
      }
    },
    59048: function (e, t, n) {
      "use strict";
      n(96357);
      t.Z = {
        "en-US": "English",
        "pt-BR": "Portugu\xeas",
        "es-ES": "Espa\xf1ol",
        "ca-ES": "Catal\xe0",
        "de-DE": "Deutsch",
        "it-IT": "Italiano",
        "fr-FR": "Fran\xe7ais",
        "sv-SE": "Svenska",
        "id-ID": "Bahasa Indonesia",
        "pl-PL": "Polski",
        "ja-JP": "\u65e5\u672c\u8a9e",
        "zh-TW": "\u7e41\u9ad4\u4e2d\u6587",
        "zh-CN": "\u7b80\u4f53\u4e2d\u6587",
        "ko-KR": "\ud55c\uad6d\uc5b4",
        "th-TH": "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        "nl-NL": "Nederlands",
        "hu-HU": "Magyar",
        "vi-VN": "Ti\u1ebfng Vi\u1ec7t",
        "cs-CZ": "\u010ce\u0161tina",
        "da-DK": "Dansk",
        "fi-FI": "Suomi",
        "uk-UA": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        "el-GR": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        "ro-RO": "Rom\xe2n\u0103",
        "nb-NO": "Norsk",
        "sk-SK": "Sloven\u010dina",
        "tr-TR": "T\xfcrk\xe7e",
        "ru-RU": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
      };
    },
    44419: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(16482);
      function r() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = e;
        return (
          t.startsWith("/") || (t = "/".concat(t)),
          "".concat(a.n, "/assets/static").concat(t)
        );
      }
    },
    42342: function (e) {
      e.exports = {
        container: "SwitchLocaleBanner_container__oFXdq",
        title: "SwitchLocaleBanner_title__u4DfX",
        buttons: "SwitchLocaleBanner_buttons__NDznn",
      };
    },
  },
]);
