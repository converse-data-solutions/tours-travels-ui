(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59056],
  {
    16873: function (e, t, r) {
      var n = {
        "./ca-ES/routes.yml": [83141, 83141],
        "./cs-CZ/routes.yml": [9922, 9922],
        "./da-DK/routes.yml": [20624, 20624],
        "./de-DE/routes.yml": [57530, 57530],
        "./el-GR/routes.yml": [5618, 5618],
        "./en-US/routes.yml": [65773, 65773],
        "./es-ES/routes.yml": [70629, 70629],
        "./fi-FI/routes.yml": [46877, 46877],
        "./fr-FR/routes.yml": [59811, 59811],
        "./hu-HU/routes.yml": [63852, 63852],
        "./id-ID/routes.yml": [32510, 32510],
        "./it-IT/routes.yml": [96962, 96962],
        "./ja-JP/routes.yml": [64750, 64750],
        "./ko-KR/routes.yml": [79943, 79943],
        "./nb-NO/routes.yml": [1386, 1386],
        "./nl-NL/routes.yml": [49902, 49902],
        "./pl-PL/routes.yml": [30874, 30874],
        "./pt-BR/routes.yml": [74432, 74432],
        "./ro-RO/routes.yml": [55323, 55323],
        "./ru-RU/routes.yml": [10448, 94128],
        "./sk-SK/routes.yml": [78672, 78672],
        "./sv-SE/routes.yml": [1897, 1897],
        "./th-TH/routes.yml": [38538, 38538],
        "./tr-TR/routes.yml": [76974, 76974],
        "./uk-UA/routes.yml": [17375, 17375],
        "./vi-VN/routes.yml": [43840, 43840],
        "./zh-CN/routes.yml": [53312, 53312],
        "./zh-TW/routes.yml": [68155, 68155],
      };
      function o(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          o = t[0];
        return r.e(t[1]).then(function () {
          return r.t(o, 19);
        });
      }
      (o.keys = function () {
        return Object.keys(n);
      }),
        (o.id = 16873),
        (e.exports = o);
    },
    56772: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              " argument" +
              (e > 1 ? "s" : "") +
              " required, but only " +
              t.length +
              " present",
          );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    54201: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(93169),
        o = r(56772);
      function a(e) {
        return (0, o.Z)(1, arguments), (0, n.Z)(e).getFullYear();
      }
    },
    93169: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(61808),
        o = r(56772);
      function a(e) {
        (0, o.Z)(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date ||
          ("object" === (0, n.Z)(e) && "[object Date]" === t)
          ? new Date(e.getTime())
          : "number" === typeof e || "[object Number]" === t
            ? new Date(e)
            : (("string" !== typeof e && "[object String]" !== t) ||
                "undefined" === typeof console ||
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
                ),
                console.warn(new Error().stack)),
              new Date(NaN));
      }
    },
    97656: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(67597),
        o = r(20362),
        a = o.jU ? n.useLayoutEffect : n.useEffect,
        u = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        };
      var c =
        o.jU && "undefined" !== typeof window.ResizeObserver
          ? function () {
              var e = (0, n.useState)(null),
                t = e[0],
                r = e[1],
                o = (0, n.useState)(u),
                c = o[0],
                i = o[1],
                s = (0, n.useMemo)(function () {
                  return new window.ResizeObserver(function (e) {
                    if (e[0]) {
                      var t = e[0].contentRect,
                        r = t.x,
                        n = t.y,
                        o = t.width,
                        a = t.height,
                        u = t.top,
                        c = t.left,
                        s = t.bottom,
                        l = t.right;
                      i({
                        x: r,
                        y: n,
                        width: o,
                        height: a,
                        top: u,
                        left: c,
                        bottom: s,
                        right: l,
                      });
                    }
                  });
                }, []);
              return (
                a(
                  function () {
                    if (t)
                      return (
                        s.observe(t),
                        function () {
                          s.disconnect();
                        }
                      );
                  },
                  [t],
                ),
                [r, c]
              );
            }
          : function () {
              return [o.ZT, u];
            };
    },
    32686: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(2844),
        o = r(14730),
        a = r(87957),
        u = r(57410),
        c = r(49977),
        i = r(50766),
        s = r(9134),
        l = r.n(s),
        p = r(98990),
        f = r.n(p),
        g = r(17075),
        d = r(12074),
        h = r(57611),
        b = ["collection", "estimatedWidth", "className", "discoverSlug"];
      function m(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function v(e) {
        var t = e.collection,
          r = t.id,
          n = t.attributes,
          s = e.estimatedWidth,
          p = e.className,
          m = e.discoverSlug,
          v = (0, o.Z)(e, b),
          O = n.collection_media_count,
          j = n.preview_images,
          w = n.title,
          P = (0, c.Z)(),
          k = Math.max(O - 4, 0);
        if (!j[0]) return null;
        return (0, h.jsxs)(
          i.Z,
          y(
            y(
              {
                href: function () {
                  return m
                    ? (0, g.Nj)({ i18n: P, slug: m })
                    : (0, g.vd)({ i18n: P, slug: n.slug });
                },
                trackAction: "collections",
                trackName: "discover",
                trackLabel: "collection-".concat(r),
                className: l()(p, f().imageGrid),
              },
              v,
            ),
            {},
            {
              children: [
                (0, h.jsx)(a.Z, {
                  url: j[0],
                  w: null !== s && void 0 !== s ? s : 400,
                  h: 250,
                  fit: "crop",
                  crop: "focalpoint",
                  className: f().featuredImage,
                }),
                (0, h.jsxs)("div", {
                  className: f().otherImages,
                  children: [
                    (0, h.jsx)(a.Z, {
                      url: j[1],
                      w: 140,
                      h: 100,
                      fit: "crop",
                      crop: "focalpoint",
                      className: f().otherImage,
                    }),
                    (0, h.jsx)(a.Z, {
                      url: j[2],
                      w: 140,
                      h: 100,
                      fit: "crop",
                      crop: "focalpoint",
                      className: f().otherImage,
                    }),
                    (0, h.jsxs)("div", {
                      className: f().otherImage,
                      children: [
                        (0, h.jsx)(a.Z, {
                          url: j[3],
                          w: 140,
                          h: 100,
                          fit: "crop",
                          crop: "focalpoint",
                        }),
                        k &&
                          (0, h.jsxs)(u.Z, {
                            size: "h$33",
                            color: "white$FFFFFF",
                            className: f().mediaCount,
                            children: ["+", (0, d.Z)(k, P)],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, h.jsx)(u.Z, {
                  size: "h$23",
                  marginTop: 20,
                  ellipsis: !0,
                  children: w,
                }),
              ],
            },
          ),
        );
      }
    },
    67545: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = r(24666),
        o = r(85656),
        a = r(21874),
        u = r(67659),
        c = r(61254),
        i = r(40183),
        s = r(17075),
        l = r(36086),
        p = r.n(l),
        f = r(57611);
      function g(e) {
        var t = e.tracker,
          r = void 0 === t ? "related-search" : t,
          l = e.relatedSearches;
        return e.isLoading
          ? (0, f.jsx)(a.Z, {
              spaceBetween: 8,
              responsive: "overflow",
              className: p().loadingBoxes,
              children: (0, n.Z)(Array(15)).map(function (e, t) {
                return (0, f.jsx)(i.Z, { width: 100, height: "100%" }, t);
              }),
            })
          : !l || l.length <= 0
            ? null
            : (0, f.jsx)(a.Z, {
                spaceBetween: 8,
                responsive: "overflow",
                overflowArrowColor: "greyPlus1$4A4A4A",
                assumeContentWillOverflow: !0,
                children: l.map(function (e) {
                  var t, n;
                  "object" === typeof e
                    ? ((n = e.title), (t = e.slug))
                    : ((n = e), (t = e));
                  var a = (0, u.Z)(n);
                  return (0, f.jsx)(
                    o.Z,
                    {
                      href: function (e) {
                        return (function (e) {
                          var t = e.i18n,
                            r = e.tracker,
                            n = e.query;
                          return "related-collection" === r
                            ? (0, s.Nj)({ i18n: t, slug: n.toLowerCase() })
                            : (0, c.yC)({
                                i18n: t,
                                mode: "photos",
                                query: n.toLowerCase(),
                              });
                        })({ i18n: e, query: t, tracker: r });
                      },
                      trackAction: r,
                      trackName: "discover",
                      trackLabel: "collection-tag-".concat(t),
                      children: a,
                    },
                    t,
                  );
                }),
              });
      }
    },
    31529: function (e, t) {
      "use strict";
      t.Z = {
        photography: [
          {
            collectionId: "yn0fxes",
            slug: "underwater-photography",
            title: "underwater",
            type: "photography",
            blogs: [
              "underwater-photography-protect-ocean-life",
              "underwater-photography-magical-ideas",
            ],
            tags: [
              "people swimming underwater",
              "fish underwater",
              "sea turtle",
              "woman underwater",
              "coral reef",
              "diving",
              "marine wildlife",
              "scuba diving",
              "snorkeling",
              "aquarium",
            ],
          },
          {
            collectionId: "nn83wc0",
            slug: "night-photography",
            title: "night",
            type: "photography",
            blogs: [
              "how-to-shoot-night-street-photography",
              "light-painting-night-photography-tip",
            ],
            tags: [
              "firework",
              "starry sky",
              "night sky",
              "galaxy",
              "night sky wallpaper",
              "moon",
              "night forest",
              "night portrait",
              "neon lights",
              "city lights",
            ],
          },
          {
            collectionId: "f8b743z",
            slug: "nature-photography",
            title: "nature",
            type: "photography",
            blogs: [
              "nature-photography-back-yard-how-to",
              "nature-photography-for-beginners",
            ],
            tags: [
              "sunrise",
              "sky",
              "full moon",
              "space",
              "beach",
              "snow",
              "mountain",
              "sunset",
              "tree",
              "forest background",
            ],
          },
          {
            collectionId: "jccm1w6",
            slug: "food-photography",
            title: "food",
            type: "photography",
            blogs: [
              "food-photography-inspired-ideas",
              "food-photography-at-home-tips",
            ],
            tags: [
              "fried chicken",
              "apple",
              "coffee",
              "cupcake",
              "wine",
              "cake",
              "pizza",
              "chocolate",
              "donut",
            ],
          },
          {
            collectionId: "ljgj0yy",
            slug: "people-photography",
            title: "people",
            type: "photography",
            blogs: [
              "portrait-photography-find-and-work-with-subjects",
              "portrait-photography-personality-tips",
            ],
            tags: [
              "happy people",
              "people smiling",
              "old people",
              "people kissing",
              "baby",
              "people dancing",
              "people walking",
              "family",
              "business people",
              "people holding hands",
            ],
          },
        ],
        backgrounds: [
          {
            collectionId: "930yk3y",
            slug: "cover-photos",
            title: "cover_photos",
            type: "backgrounds",
            blogs: [
              "how-to-choose-stock-photos-blog",
              "best-stock-photos-social-media",
            ],
            tags: [
              "facebook cover",
              "book cover",
              "love",
              "banner background",
              "black and white",
              "tumblr wallpaper",
              "header images",
              "inspirational",
              "quote background",
              "lifestyle",
            ],
          },
          {
            collectionId: "5ddk9ze",
            slug: "pretty-backgrounds",
            title: "pretty_backgrounds",
            type: "backgrounds",
            blogs: [
              "beautiful-photos-photography-composition-tips",
              "beautiful-photo-background-anywhere",
            ],
            tags: [
              "summer background",
              "texture",
              "sunflower",
              "cherry blossom",
              "flower background",
              "stars background",
              "gold glitter background",
              "art backgrounds",
              "waterfall background",
              "fantasy background",
            ],
          },
          {
            collectionId: "j24p0sz",
            slug: "color-backgrounds",
            title: "color_backgrounds",
            type: "backgrounds",
            blogs: ["color-photography-mood", "color-theory-photography-tips"],
            tags: [
              "gold background",
              "pastel background",
              "brown background",
              "turquoise background",
              "red and black background",
              "dark blue background",
              "black and gold background",
              "red white and blue background",
              "yellow background",
              "orange background",
            ],
          },
          {
            collectionId: "q1bbckv",
            slug: "animated-backgrounds",
            title: "animated_backgrounds",
            type: "backgrounds",
            blogs: ["video-backgrounds-tips", "motion-graphics-videos-how-to"],
          },
        ],
      };
    },
    4768: function (e, t, r) {
      "use strict";
      r.d(t, {
        C0: function () {
          return s;
        },
        I9: function () {
          return u;
        },
        Nb: function () {
          return a;
        },
        _g: function () {
          return i;
        },
        cg: function () {
          return c;
        },
        ju: function () {
          return o;
        },
        xc: function () {
          return l;
        },
      });
      var n = r(18338),
        o = (0, n.ZP)({
          pathname: "/communities/[slug]/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props.slug;
            return t.replace("[slug]", r);
          },
        }),
        a = (0, n.ZP)({
          pathname: "/communities/[slug]/events/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props.slug;
            return t.replace("[slug]", r);
          },
        }),
        u = (0, n.ZP)({
          pathname: "/communities/[slug]/leaderboard/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props.slug;
            return t.replace("[slug]", r);
          },
        }),
        c = (0, n.ZP)({
          pathname: "/communities/[slug]/discussion-board/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props.slug;
            return t.replace("[slug]", r);
          },
        }),
        i = (0, n.ZP)({
          pathname:
            "/communities/[communitySlug]/discussion-board/[discussionId]/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props,
              n = r.communitySlug,
              o = r.discussionId;
            return t.replace("[communitySlug]", n).replace("[discussionId]", o);
          },
        }),
        s = (0, n.ZP)({
          pathname: "/communities/[slug]/members/",
          buildPathname: function (e) {
            var t = e.pathname,
              r = e.props.slug;
            return t.replace("[slug]", r);
          },
        }),
        l =
          ((0, n.ZP)({
            pathname: "/communities/[slug]/recent-uploads/",
            buildPathname: function (e) {
              var t = e.pathname,
                r = e.props.slug;
              return t.replace("[slug]", r);
            },
          }),
          (0, n.ZP)({
            pathname: "/communities/[slug]/challenges/",
            buildPathname: function (e) {
              var t = e.pathname,
                r = e.props.slug;
              return t.replace("[slug]", r);
            },
          }));
    },
    75290: function (e, t, r) {
      "use strict";
      function n(e) {
        return e.page
          ? Number.isNaN(parseInt(e.page, 10))
            ? null
            : parseInt(e.page, 10)
          : null;
      }
      r.d(t, {
        A: function () {
          return n;
        },
      });
    },
    95458: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return w;
        },
      });
      var n = r(2844),
        o = r(14730),
        a = (r(34587), r(63066)),
        u = r(71365),
        c = r(15129),
        i = r(36161),
        s = r(67597),
        l = r(37361);
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : p(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function g(e) {
        var t = e.options,
          r = e.initialData,
          n = (0, s.useRef)(!1),
          o = (0, l.ZP)().getStateFor;
        return f(
          f({}, t),
          {},
          {
            onSettled: function (e) {
              if (
                null !== e &&
                void 0 !== e &&
                e.pages &&
                Array.isArray(e.pages)
              ) {
                var t = e.pages[e.pages.length - 1];
                o(t.data);
              }
            },
            getNextPageParam: function (e) {
              var t = e.pagination,
                r = t.current_page;
              if (r < t.total_pages) return r + 1;
            },
            getPreviousPageParam: function (e) {
              var t = e.pagination.current_page;
              if (t > 1) return t - 1;
            },
            initialData: function () {
              if (r && !n.current)
                return (n.current = !0), { pages: [r], pageParams: [1] };
            },
          },
        );
      }
      var d = r(75290),
        h = r(25924),
        b = r(46130);
      function m(e) {
        var t = {
          currentPage: 1,
          pageCount: 1,
          totalResults: 0,
          included: void 0,
        };
        if (!e || !e.pages) return t;
        var r = e.pages,
          n = r[r.length - 1];
        return (
          n &&
            ((t.currentPage = n.pagination.current_page),
            (t.pageCount = n.pagination.total_pages),
            (t.totalResults = n.pagination.total_results),
            (t.included = n.included)),
          t
        );
      }
      function y(e) {
        return function (t) {
          var r = t.pageParam,
            n = parseInt(r, 10);
          return (
            (Number.isNaN(n) || n <= 0) && (n = 1), (0, a.A3)(e({ page: n }))
          );
        };
      }
      var v = ["data"];
      function O(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function w(e, t, r) {
        var n,
          a,
          l =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          p = (0, c.useRouter)(),
          f = p.query,
          O = (0, d.A)(f),
          w = (0, h.Z)(e, O),
          P = w.queryKeyString,
          k = w.metaKey,
          Z = g({ options: l, initialData: r }),
          _ = (0, s.useMemo)(
            function () {
              return l.queryKeyPrefix ? [l.queryKeyPrefix, P] : P;
            },
            [l.queryKeyPrefix, P],
          ),
          x = (0, u.useInfiniteQuery)(_, y(t), Z),
          S = x.data,
          D = (0, o.Z)(x, v),
          N =
            (null === r || void 0 === r ? void 0 : r.meta) ||
            (null === S ||
            void 0 === S ||
            null === (n = S.pages) ||
            void 0 === n ||
            null === (a = n[0]) ||
            void 0 === a
              ? void 0
              : a.meta),
          E = (0, i.Z)(k, N),
          I = m(S),
          C = I.currentPage,
          R = I.pageCount,
          A = I.totalResults,
          L = I.included;
        return j(
          j({}, D),
          {},
          {
            meta: E,
            data: (0, b.Z)(S),
            pageCount: R,
            totalResults: A,
            included: L,
            page: O || C,
            queryKey: _,
          },
        );
      }
    },
    25654: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return b;
        },
      });
      var n = r(2844),
        o = r(14730),
        a = r(49977),
        u = r(16482),
        c = r(17075),
        i = r(67396),
        s = r(21010),
        l = r(38895),
        p = r(4768),
        f = r(57611),
        g = ["canAccessPhotographerExperience", "isLeaderboardPage"];
      function d(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function b(e) {
        var t = e.canAccessPhotographerExperience,
          r = e.isLeaderboardPage,
          n = void 0 !== r && r,
          d = (0, o.Z)(e, g),
          b = (0, a.Z)().t,
          m = (0, l.ZP)().communities;
        return (0, f.jsxs)(
          i.Z,
          h(
            h({ center: "horizontal" }, d),
            {},
            {
              children: [
                (0, f.jsx)(s.Z, {
                  href: function (e) {
                    return (0, u.s)({ i18n: e });
                  },
                  children: b("common:subnav.home"),
                }),
                t &&
                  (0, f.jsx)(s.Z, {
                    href: function (e) {
                      return (0, c.Q0)({ i18n: e });
                    },
                    children: b("common:subnav.feed"),
                  }),
                null === m || void 0 === m
                  ? void 0
                  : m.map(function (e) {
                      var t = e.attributes,
                        r = t.name,
                        n = t.slug;
                      return (0, f.jsx)(
                        s.Z,
                        {
                          href: function (e) {
                            return (0, p.ju)({ i18n: e, slug: n });
                          },
                          children: 1 === m.length ? b("common:community") : r,
                        },
                        n,
                      );
                    }),
                (0, f.jsx)(s.Z, {
                  href: function (e) {
                    return (0, c.Xh)({ i18n: e });
                  },
                  children: b("common:subnav.videos"),
                }),
                (0, f.jsx)(s.Z, {
                  href: function (e) {
                    return (0, c.Eb)({ i18n: e });
                  },
                  active: n,
                  children: b("common:subnav.leaderboard"),
                }),
                (0, f.jsx)(s.Z, {
                  href: function (e) {
                    return (0, c.b5)({ i18n: e });
                  },
                  children: b("common:subnav.challenges"),
                }),
              ],
            },
          ),
        );
      }
    },
    21010: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return O;
        },
      });
      var n = r(2844),
        o = r(14730),
        a = r(50766),
        u = r(67597),
        c = r(9134),
        i = r.n(c),
        s = r(49977),
        l = r(12074),
        p = r(12818),
        f = r(15129),
        g = r(17177),
        d = r(30720),
        h = r.n(d),
        b = r(57611),
        m = ["active", "number", "className"];
      function y(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function O(e) {
        var t,
          r = e.active,
          c = e.className,
          d = (0, s.Z)(),
          y = (0, f.useRouter)(),
          O = (0, p.dw)(e).href,
          j = (0, u.useState)(r),
          w = j[0],
          P = j[1],
          k = (0, u.useRef)(null);
        function Z() {
          if (k.current) {
            var e = k.current.parentNode,
              t =
                k.current.offsetLeft -
                e.offsetWidth / 2 +
                k.current.offsetWidth / 2;
            e.scrollLeft = t;
          }
        }
        return (
          (0, u.useEffect)(
            function () {
              P(r || (0, p.OO)({ href: O, router: y }));
            },
            [O, r, y],
          ),
          (0, u.useEffect)(
            function () {
              w &&
                null !== k &&
                void 0 !== k &&
                k.current &&
                (document.fonts
                  ? document.fonts.ready.then(function () {
                      Z();
                    })
                  : setTimeout(function () {
                      Z();
                    }, 500));
            },
            [k, w],
          ),
          (0, b.jsxs)(
            a.Z,
            v(
              v(
                {},
                (function (e) {
                  e.active, e.number, e.className;
                  var t = (0, o.Z)(e, m);
                  return (0, g.K)(t);
                })(e),
              ),
              {},
              {
                className: i()(
                  h().tab,
                  (0, g.Z)(e),
                  ((t = {}),
                  (0, n.Z)(t, h().active, w),
                  (0, n.Z)(t, "".concat(c), !!c),
                  t),
                ),
                ref: k,
                hoverAnimation: !1,
                children: [
                  e.children,
                  void 0 !== e.number &&
                    (0, b.jsx)("span", {
                      className: h().number,
                      children:
                        null !== e.number ? (0, l.Z)(e.number, d) : "--",
                    }),
                ],
              },
            ),
          )
        );
      }
    },
    67396: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(2844),
        o = r(14730),
        a = r(21874),
        u = r(57611),
        c = ["children"];
      function i(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function l(e) {
        var t = e.children,
          r = (0, o.Z)(e, c);
        return (0, u.jsx)(
          a.Z,
          s(
            s({}, r),
            {},
            { spaceBetween: 0, responsive: "overflow", children: t },
          ),
        );
      }
    },
    54971: function (e, t, r) {
      "use strict";
      var n = r(2844),
        o = r(14730),
        a = r(67597),
        u = r(87957),
        c = r(57611),
        i = ["id"];
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function p(e) {
        return "https://images.pexels.com/photos/"
          .concat(e, "/pexels-photo-")
          .concat(e, ".jpeg");
      }
      t.Z = (0, a.forwardRef)(function (e, t) {
        var r = e.id,
          n = (0, o.Z)(e, i);
        return (0, c.jsx)(u.Z, l(l({}, n), {}, { url: p(r), ref: t }));
      });
    },
    10386: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n,
        o = r(98431),
        a = r(35835),
        u = r(34587),
        c = r.n(u),
        i = r(96357),
        s = r(79458);
      function l() {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, a.Z)(
          c().mark(function e() {
            var t, o;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!n) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", n);
                  case 2:
                    return (
                      (t = i.availableLocales.map(function (e) {
                        return r(16873)("./".concat(e, "/routes.yml")).then(
                          function (t) {
                            var r;
                            return [
                              e,
                              (null === (r = t.default) || void 0 === r
                                ? void 0
                                : r.slugs) || {},
                            ];
                          },
                        );
                      })),
                      (e.next = 5),
                      Promise.all(t)
                    );
                  case 5:
                    return (
                      (o = e.sent), (n = new Map(o)), e.abrupt("return", n)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function f(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, a.Z)(
          c().mark(function e(t) {
            var r, n, a;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = (0, s.h)(t)), (e.next = 3), l();
                  case 3:
                    return (
                      (n = e.sent),
                      (a = Array.from(n).reduce(function (e, t) {
                        var n = (0, o.Z)(t, 2),
                          a = n[0],
                          u = n[1],
                          c = a === i.defaultLocale ? r : u[r];
                        return c && (e[a] = c), e;
                      }, {})),
                      e.abrupt("return", a)
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
    },
    98990: function (e) {
      e.exports = {
        imageGrid: "CollectionCard_imageGrid___zPkR",
        featuredImage: "CollectionCard_featuredImage__2jSyF",
        otherImage: "CollectionCard_otherImage__UawEs",
        curated: "CollectionCard_curated__OYUvG",
        otherImages: "CollectionCard_otherImages__h3ovj",
        mediaCount: "CollectionCard_mediaCount__DvJnn",
      };
    },
    36086: function (e) {
      e.exports = { loadingBoxes: "RelatedSearchBar_loadingBoxes__VLWHV" };
    },
    30720: function (e) {
      e.exports = {
        tab: "Tab_tab__LykKB",
        number: "Tab_number__k5SYC",
        active: "Tab_active__8PGWR",
        hover: "Tab_hover__lnxXM",
      };
    },
    61808: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
