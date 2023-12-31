(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [42626],
  {
    84710: function (e, t, r) {
      "use strict";
      function n(e) {
        var t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds(),
          ),
        );
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    99518: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(93169),
        o = r(84710),
        i = r(56772);
      function c(e) {
        (0, i.Z)(1, arguments);
        var t = (0, n.Z)(e);
        return t.setHours(0, 0, 0, 0), t;
      }
      var a = 864e5;
      function l(e, t) {
        (0, i.Z)(2, arguments);
        var r = c(e),
          n = c(t),
          l = r.getTime() - (0, o.Z)(r),
          s = n.getTime() - (0, o.Z)(n);
        return Math.round((l - s) / a);
      }
      function s(e, t) {
        var r =
          e.getFullYear() - t.getFullYear() ||
          e.getMonth() - t.getMonth() ||
          e.getDate() - t.getDate() ||
          e.getHours() - t.getHours() ||
          e.getMinutes() - t.getMinutes() ||
          e.getSeconds() - t.getSeconds() ||
          e.getMilliseconds() - t.getMilliseconds();
        return r < 0 ? -1 : r > 0 ? 1 : r;
      }
      function u(e, t) {
        (0, i.Z)(2, arguments);
        var r = (0, n.Z)(e),
          o = (0, n.Z)(t),
          c = s(r, o),
          a = Math.abs(l(r, o));
        r.setDate(r.getDate() - c * a);
        var u = Number(s(r, o) === -c),
          d = c * (a - u);
        return 0 === d ? 0 : d;
      }
    },
    65425: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return ve;
          },
          default: function () {
            return je;
          },
        });
      var n = r(21879),
        o = r(25654),
        i = r(49977),
        c = r(10876),
        a = r(80705),
        l = r(17075),
        s = r(57410),
        u = r(59050),
        d = r(21874),
        f = r(34324),
        g = r(2844),
        m = r(14730),
        p = r(87957),
        h = r(93169),
        v = r(56772);
      var j = r(99518),
        _ = r(40100),
        b = r(50766),
        y = r(36121),
        w = r.n(y),
        x = r(57611),
        O = ["challenge"];
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Z(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var P = function (e) {
        return (function (e, t) {
          (0, v.Z)(2, arguments);
          var r = (0, h.Z)(e),
            n = (0, h.Z)(t);
          return r.getTime() > n.getTime();
        })(new Date(), new Date(e));
      };
      function D(e) {
        var t = e.challenge,
          r = t.attributes,
          n = r.end_date,
          o = r.prize_title,
          c = r.title,
          a = r.featured_media,
          u = r.sponsor_image,
          f = r.sponsor_name,
          g = r.slug,
          h = t.id,
          v = (0, m.Z)(e, O),
          y = (0, i.Z)("discover").t,
          Z = (0, j.Z)(new Date(n), new Date()),
          D = P(n)
            ? y("sections.challenges_section.expired")
            : y("sections.challenges_section.days_left", { count: Z });
        if (!u) return null;
        if (!f) return null;
        var k = {
            size: "h$18",
            responsiveSize: "p$16",
            color: "greyPlus1$4A4A4A",
            weight: "book",
          },
          S = {
            size: "h$18",
            responsiveSize: "p$16",
            color: "black$000000",
            weight: "bold",
          };
        return (0, x.jsxs)(
          b.Z,
          C(
            C(
              {
                href: function (e) {
                  return (0, l.kB)({ i18n: e, slug: g });
                },
                trackAction: "challenge",
                trackName: "discover",
                trackLabel: "challenge-".concat(h),
                className: w().container,
              },
              v,
            ),
            {},
            {
              children: [
                (0, x.jsxs)("section", {
                  className: w().content,
                  children: [
                    (0, x.jsx)(
                      s.Z,
                      C(C({}, k), {}, { marginBottom: 20, children: D }),
                    ),
                    (0, x.jsx)(s.Z, {
                      size: "h$23",
                      color: "black$000000",
                      marginBottom: 50,
                      className: w().title,
                      children: c,
                    }),
                    (0, x.jsxs)("div", {
                      className: w().headers,
                      children: [
                        (0, x.jsx)(
                          s.Z,
                          C(
                            C({}, k),
                            {},
                            {
                              children: y(
                                "sections.challenges_section.presented_by",
                              ),
                            },
                          ),
                        ),
                        (0, x.jsx)(
                          s.Z,
                          C(
                            C({}, k),
                            {},
                            {
                              children: y("sections.challenges_section.prize"),
                            },
                          ),
                        ),
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      className: w().texts,
                      children: [
                        (0, x.jsxs)(d.Z, {
                          spaceBetween: 8,
                          center: "vertical",
                          children: [
                            (0, x.jsx)(_.Z, {
                              src: u.url || "",
                              size: "30",
                              alt: f,
                            }),
                            (0, x.jsx)(
                              s.Z,
                              C(C({}, S), {}, { ellipsis: !0, children: f }),
                            ),
                          ],
                        }),
                        (0, x.jsx)(
                          s.Z,
                          C(C({}, S), {}, { children: o || "-" }),
                        ),
                      ],
                    }),
                  ],
                }),
                (0, x.jsx)("section", {
                  className: w().image,
                  children: (0, x.jsx)(p.Z, {
                    url: a[0].image.small,
                    w: 200,
                    h: 200,
                  }),
                }),
              ],
            },
          ),
        );
      }
      var k = r(9134),
        S = r.n(k),
        A = r(54971),
        $ = r(50752),
        B = r.n($),
        z = ["interview"];
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : N(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function I(e) {
        var t = e.interview,
          r = t.id,
          n = t.attributes,
          o = (0, m.Z)(e, z),
          i = n.blog_author,
          c = n.medium_id,
          a = n.title,
          u = n.slug,
          d = n.post_type;
        return (0, x.jsxs)(
          b.Z,
          E(
            E(
              {
                href: function (e) {
                  return (0, l.mG)({ slug: u, postType: d, i18n: e });
                },
                trackAction: "photographer-interviews",
                trackName: "discover",
                trackLabel: "hero-story-".concat(r),
                className: S()(B().container),
              },
              o,
            ),
            {},
            {
              children: [
                (0, x.jsxs)("div", {
                  className: B().images,
                  children: [
                    c &&
                      (0, x.jsx)(A.Z, {
                        id: c,
                        h: 400,
                        w: 300,
                        width: "100%",
                        height: "100%",
                        fit: "crop",
                        crop: "focalpoint",
                      }),
                    i &&
                      (0, x.jsx)(_.Z, {
                        src: i.avatar,
                        size: "80",
                        alt: "author",
                        border: !0,
                      }),
                  ],
                }),
                (0, x.jsx)(s.Z, {
                  size: "h$23",
                  center: !0,
                  className: B().text,
                  children: null === i || void 0 === i ? void 0 : i.full_name,
                }),
                (0, x.jsx)(s.Z, {
                  size: "p$14",
                  color: "grey$7F7F7F",
                  center: !0,
                  className: B().text,
                  children: a,
                }),
              ],
            },
          ),
        );
      }
      var T = r(61254),
        M = r(42956),
        Y = r.n(M),
        F = ["collection"];
      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function W(e) {
        var t = e.collection,
          r = t.mediumIds,
          n = t.slug,
          o = t.title,
          i = (0, m.Z)(e, F);
        return (0, x.jsxs)(
          b.Z,
          L(
            L(
              {
                href: function (e) {
                  return (0, T.yC)({ i18n: e, query: n, mode: "photos" });
                },
                trackAction: "photo-by-collection",
                trackName: "discover",
                trackLabel: "color-".concat(o),
                className: S()(Y().container),
              },
              i,
            ),
            {},
            {
              children: [
                (0, x.jsx)("div", {
                  className: Y().images,
                  children: r.slice(0, 4).map(function (e, t) {
                    return (0, x.jsx)(
                      A.Z,
                      {
                        keyOverride: e,
                        className: Y()["image-".concat(t)],
                        id: e,
                        width: "100%",
                        height: "100%",
                        fit: "crop",
                        crop: "focalpoint",
                      },
                      e,
                    );
                  }),
                }),
                (0, x.jsx)(s.Z, {
                  size: "h$23",
                  center: !0,
                  marginTop: 20,
                  children: o,
                }),
              ],
            },
          ),
        );
      }
      r(34587), r(53565), r(10386);
      var X = r(37004),
        R = r(7396),
        U = (r(63066), r(95458)),
        G = r(31529);
      function J() {
        return function (e) {
          var t = e.page;
          return (0, R.J)({ page: t, per_page: 12 });
        };
      }
      l.mY;
      var Q = [
          "healthy",
          "sea",
          "fashion",
          "art",
          "creative",
          "summer",
          "drink",
          "freedom",
          "animals",
          "colorful",
          "mockup",
          "white",
          "plants",
          "portrait",
          "style",
          "adventure",
          "health",
          "family",
          "concept",
          "wallpaper",
          "artistic",
          "moody",
          "learn",
          "explore",
          "cozy",
          "flatlay",
        ],
        V = [
          {
            mediumIds: ["2115695", "1493226", "533280", "1813947"],
            slug: "color: red",
            title: "Red",
          },
          {
            mediumIds: ["9363178", "2563462", "5217774", "1213859"],
            slug: "color: green",
            title: "Green",
          },
          {
            mediumIds: ["1147124", "443413", "1546249", "281260"],
            slug: "color: blue",
            title: "Blue",
          },
          {
            mediumIds: ["3662579", "2872755", "3101527", "1759619", "403768"],
            slug: "color: yellow",
            title: "Yellow",
          },
          {
            mediumIds: ["19670", "1843717", "62693", "930478"],
            slug: "color: white",
            title: "White",
          },
          {
            mediumIds: ["604684", "1097456", "1114900", "159872", "3648850"],
            slug: "color: black",
            title: "Black",
          },
        ];
      var q = r(24666),
        K = r(67597),
        ee = r(26349),
        te = r(71365);
      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : re(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var oe = r(32686),
        ie = r(67545);
      function ce(e) {
        var t = e.collections,
          r = e.renderSection,
          n = t[0];
        return r(
          (0, te.useQuery)(
            (0, R.Sj)((null === n || void 0 === n ? void 0 : n.id) || ""),
          ),
        );
      }
      function ae(e) {
        var t = e.data,
          r = e.discoverSlugs;
        if (!t || !t.data) return null;
        var n = function (e) {
          var n, o, i, c;
          return (0, x.jsxs)(
            f.Z,
            {
              flexDirection: "column",
              marginBottom: 80,
              children: [
                (0, x.jsx)(s.Z, {
                  size: "h$33",
                  color: "midnight$2C343E",
                  marginBottom: 20,
                  capitalize: !0,
                  children: t.title,
                }),
                (0, x.jsx)(ie.Z, {
                  relatedSearches:
                    t.tags ||
                    (null === e ||
                    void 0 === e ||
                    null === (n = e.data) ||
                    void 0 === n ||
                    null === (o = n.data) ||
                    void 0 === o ||
                    null === (i = o.attributes) ||
                    void 0 === i
                      ? void 0
                      : i.tags),
                  isLoading:
                    t.fetchTags &&
                    (null === e || void 0 === e ? void 0 : e.isLoading),
                  tracker:
                    "object" === (t.tags && typeof t.tags[0])
                      ? "related-collection"
                      : "related-search",
                }),
                (0, x.jsx)(d.Z, {
                  spaceBetween: 30,
                  marginTop: 30,
                  responsive: "overflow",
                  overflowArrowColor: "greyPlus1$4A4A4A",
                  assumeContentWillOverflow: !0,
                  children:
                    null === (c = t.data) || void 0 === c
                      ? void 0
                      : c.map(function (e) {
                          return (
                            e &&
                            (0, x.jsx)(
                              oe.Z,
                              { collection: e, discoverSlug: r[e.id] },
                              e.id,
                            )
                          );
                        }),
                }),
              ],
            },
            t.title,
          );
        };
        return t.fetchTags
          ? (0, x.jsx)(ce, { collections: t.data, renderSection: n })
          : n();
      }
      var le = r(47706),
        se = r(98990),
        ue = r.n(se),
        de = { mobile: 1, tablet: 2, desktop: 3, oversized: 4 };
      function fe(e) {
        var t = e.collections,
          r = (0, i.Z)().t,
          n = (0, U.ZP)("curated-collections", J(), t);
        return (0, x.jsxs)(f.Z, {
          flexDirection: "column",
          marginBottom: 80,
          children: [
            (0, x.jsx)(s.Z, {
              size: "h$33",
              color: "midnight$2C343E",
              marginBottom: 20,
              capitalize: !0,
              children: r("discover:sections.curated_collections"),
            }),
            (0, x.jsx)(le.Z, {
              columnGap: 30,
              pagination: n,
              renderItem: function (e) {
                var t = e.datum,
                  r = e.estimatedColumnWidth;
                return {
                  aspectRatio: 1,
                  itemKeyId: t.id,
                  component: (0, x.jsx)(
                    oe.Z,
                    {
                      collection: t,
                      estimatedWidth: r,
                      className: ue().curated,
                    },
                    t.id,
                  ),
                };
              },
              marginBottom: 50,
              columnSizing: de,
            }),
          ],
        });
      }
      function ge(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return me(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return me(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          c = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var pe = l.mY,
        he = {};
      Object.values(G.Z).forEach(function (e) {
        var t,
          r = ge(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var n = t.value;
            he[n.collectionId] = n.slug;
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      });
      var ve = !0,
        je = function (e) {
          var t = e.initialData,
            r = e.translatedSlugs,
            l = (0, i.Z)().t,
            g = (function (e) {
              var t = (0, i.Z)().t,
                r = e.popular,
                n = e.photography,
                o = e.backgrounds,
                c = e.collections,
                a = (0, ee.Z)().history,
                l = (0, te.useQuery)((0, X.wf)(a.slice(0, 3)), {
                  enabled: Boolean(a.length),
                });
              return (0, K.useMemo)(
                function () {
                  var e, i;
                  return [
                    {
                      data: null === r || void 0 === r ? void 0 : r.slice(0, 3),
                      title: t("discover:sections.popular_collections"),
                      fetchTags: !0,
                    },
                    {
                      data:
                        null === (e = l.data) ||
                        void 0 === e ||
                        null === (i = e.data) ||
                        void 0 === i
                          ? void 0
                          : i.slice(0, 3),
                      title: t("discover:sections.recommended_collection"),
                      tags: a.slice(3),
                    },
                    {
                      data: n,
                      title: t(
                        "discover:sections.seo_hub_section.photography.page_title",
                      ),
                      tags: G.Z.photography.slice(3).map(function (e) {
                        return ne(
                          ne({}, e),
                          {},
                          {
                            title: t(
                              "discover:sections.seo_hub_section.photography.".concat(
                                e.title,
                              ),
                            ),
                          },
                        );
                      }),
                    },
                    {
                      data: o,
                      title: t(
                        "discover:sections.seo_hub_section.backgrounds.page_title",
                      ),
                      tags: G.Z.backgrounds.slice(3).map(function (e) {
                        return ne(
                          ne({}, e),
                          {},
                          {
                            title: t(
                              "discover:sections.seo_hub_section.backgrounds.".concat(
                                e.title,
                              ),
                            ),
                          },
                        );
                      }),
                    },
                  ].concat(
                    (0, q.Z)(
                      c.map(function (e, r) {
                        return e
                          ? {
                              data:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.slice(0, 3),
                              title: t("discover:sections.collection_section", {
                                term: Q[r],
                              }),
                              fetchTags: !0,
                            }
                          : null;
                      }),
                    ),
                  );
                },
                [
                  o,
                  c,
                  a,
                  n,
                  r,
                  null === l || void 0 === l ? void 0 : l.data,
                  t,
                ],
              );
            })(t);
          if (!t) return null;
          var m,
            p = t.curatedCollections,
            h = t.challenges,
            v = t.interviews;
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(n.Z, {
                title: l("discover:header.title"),
                description: l("discover:header.subtitle"),
                translatedSlugs: r,
                metaRoute: pe.metaAdapter,
              }),
              (0, x.jsx)(c.Z, {}),
              (0, x.jsxs)(u.Z, {
                children: [
                  (0, x.jsx)(o.Z, { marginTop: 30 }),
                  (0, x.jsx)(s.Z, {
                    size: "h$33",
                    marginTop: 50,
                    marginBottom: 50,
                    color: "midnight$2C343E",
                    center: !0,
                    children: l("discover:header.title"),
                  }),
                  (0, x.jsxs)(f.Z, {
                    flexDirection: "column",
                    children: [
                      g.slice(0, 4).map(function (e, t) {
                        return (0, x.jsx)(
                          ae,
                          { data: e, discoverSlugs: he },
                          (null === e || void 0 === e ? void 0 : e.title) || t,
                        );
                      }),
                      ((m = V),
                      (0, x.jsxs)(f.Z, {
                        flexDirection: "column",
                        marginBottom: 80,
                        children: [
                          (0, x.jsx)(s.Z, {
                            size: "h$33",
                            color: "midnight$2C343E",
                            marginBottom: 20,
                            children: l("discover:sections.color_section"),
                          }),
                          (0, x.jsx)(d.Z, {
                            spaceBetween: 30,
                            responsive: "overflow",
                            overflowArrowColor: "greyPlus1$4A4A4A",
                            assumeContentWillOverflow: !0,
                            children: m.map(function (e) {
                              return (0, x.jsx)(W, { collection: e }, e.slug);
                            }),
                          }),
                        ],
                      })),
                      h &&
                        (function (e) {
                          return (0, x.jsxs)(f.Z, {
                            flexDirection: "column",
                            marginBottom: 80,
                            children: [
                              (0, x.jsx)(s.Z, {
                                size: "h$33",
                                color: "midnight$2C343E",
                                marginBottom: 20,
                                children: l(
                                  "discover:sections.challenges_section.title",
                                ),
                              }),
                              (0, x.jsx)(d.Z, {
                                spaceBetween: 30,
                                responsive: "overflow",
                                overflowArrowColor: "greyPlus1$4A4A4A",
                                assumeContentWillOverflow: !0,
                                children: e.map(function (e) {
                                  return (0, x.jsx)(D, { challenge: e }, e.id);
                                }),
                              }),
                            ],
                          });
                        })(h),
                      v &&
                        (function (e) {
                          return (0, x.jsxs)(f.Z, {
                            flexDirection: "column",
                            marginBottom: 80,
                            children: [
                              (0, x.jsx)(s.Z, {
                                size: "h$33",
                                color: "midnight$2C343E",
                                marginBottom: 20,
                                children: l(
                                  "discover:sections.hero_stories_section",
                                ),
                              }),
                              (0, x.jsx)(d.Z, {
                                spaceBetween: 30,
                                responsive: "overflow",
                                overflowArrowColor: "greyPlus1$4A4A4A",
                                assumeContentWillOverflow: !0,
                                children: e.map(function (e) {
                                  return (0, x.jsx)(I, { interview: e }, e.id);
                                }),
                              }),
                            ],
                          });
                        })(v),
                      g.slice(4).map(function (e, t) {
                        return (0, x.jsx)(
                          ae,
                          { data: e, discoverSlugs: he },
                          (null === e || void 0 === e ? void 0 : e.title) || t,
                        );
                      }),
                    ],
                  }),
                  p && (0, x.jsx)(fe, { collections: p }),
                ],
              }),
              (0, x.jsx)(a.Z, {}),
            ],
          });
        };
    },
    7396: function (e, t, r) {
      "use strict";
      r.d(t, {
        $k: function () {
          return s;
        },
        HX: function () {
          return l;
        },
        J: function () {
          return d;
        },
        Sj: function () {
          return f;
        },
        VK: function () {
          return i;
        },
        au: function () {
          return o;
        },
        cy: function () {
          return g;
        },
        ro: function () {
          return c;
        },
        s7: function () {
          return a;
        },
        vd: function () {
          return u;
        },
      });
      var n = r(89969),
        o = function (e) {
          return "/api/v2/me/collections/medium/".concat(e);
        },
        i = function (e) {
          return "/api/v2/collections?title=".concat(e);
        },
        c = function (e) {
          var t = e.mediumId,
            r = e.collectionId;
          return "/api/v2/collections/"
            .concat(r, "/photos?photo_id=")
            .concat(t);
        },
        a = function (e) {
          return "/api/v2/collections/".concat(e);
        },
        l = function (e) {
          return "/api/v2/collections/".concat(e);
        },
        s = function (e) {
          var t = e.mediumId,
            r = e.collectionId;
          return "/api/v2/collections/"
            .concat(r, "/photos?photo_id=")
            .concat(t);
        },
        u = function (e) {
          return "/api/v2/collections/".concat(e);
        },
        d = function (e) {
          return "/api/v2/collections?".concat((0, n.stringify)(e));
        },
        f = function (e) {
          return "/api/v3/collections/".concat(e, "/tags");
        },
        g = function (e) {
          var t = e.id,
            r = e.page,
            n = e.per_page;
          return "/api/v3/collections/"
            .concat(t, "/media?page=")
            .concat(r, "&per_page=")
            .concat(n);
        };
    },
    29022: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/discover",
        function () {
          return r(65425);
        },
      ]);
    },
    36121: function (e) {
      e.exports = {
        container: "ChallengeCard_container__0vaRi",
        content: "ChallengeCard_content__hxLjL",
        image: "ChallengeCard_image__B5HZ9",
        headers: "ChallengeCard_headers__A_XxA",
        texts: "ChallengeCard_texts__VR_YU",
        haders: "ChallengeCard_haders__1cAiY",
        title: "ChallengeCard_title__GJPE7",
      };
    },
    42956: function (e) {
      e.exports = {
        container: "ColorCard_container__yXrBC",
        images: "ColorCard_images__qUHHS",
        "image-0": "ColorCard_image-0__OmVxQ",
        "image-1": "ColorCard_image-1__O9igM",
        "image-2": "ColorCard_image-2__H96MY",
        "image-3": "ColorCard_image-3__tx4cz",
      };
    },
    50752: function (e) {
      e.exports = {
        container: "InterviewCard_container__XDif_",
        images: "InterviewCard_images__g6vSD",
        text: "InterviewCard_text__5ksZa",
      };
    },
  },
  function (e) {
    e.O(0, [21879, 80705, 50434, 59056, 49774, 92888, 40179], function () {
      return (t = 29022), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
