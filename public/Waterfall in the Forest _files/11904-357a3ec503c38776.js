(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11904],
  {
    87462: function (e, t, r) {
      "use strict";
      var n = r(91136),
        i = r.n(n),
        o = r(19881),
        a = r.n(o),
        c = new (i())({
          id: "content_copy-e2113e80f8290106aa40ec6420ae9634",
          use: "content_copy-e2113e80f8290106aa40ec6420ae9634-usage",
          viewBox: "0 0 24 24",
          content:
            '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="content_copy-e2113e80f8290106aa40ec6420ae9634"><path id="content_copy-e2113e80f8290106aa40ec6420ae9634_Trac\xe9_2216" d="M77.805,81.611H84.73a1.655,1.655,0,0,1,1.659,1.631v6.953a1.655,1.655,0,0,1-1.659,1.631H77.805a1.649,1.649,0,0,1-1.631-1.631V83.242A1.649,1.649,0,0,1,77.805,81.611Zm5.436-5.436h6.953a1.649,1.649,0,0,1,1.631,1.631V84.73a1.655,1.655,0,0,1-1.631,1.659H88.564V83.242a3.766,3.766,0,0,0-1.116-2.661v-.029h-.029a3.783,3.783,0,0,0-2.69-1.116H81.611V77.805A1.649,1.649,0,0,1,83.242,76.175Zm5.322,12.389h1.631a3.766,3.766,0,0,0,2.661-1.116h0l.029-.029h0A3.782,3.782,0,0,0,94,84.73V77.805a3.885,3.885,0,0,0-1.116-2.69h-.029A3.766,3.766,0,0,0,90.195,74H83.242a3.766,3.766,0,0,0-2.661,1.116h-.029a3.833,3.833,0,0,0-1.116,2.69v1.631H77.805a3.885,3.885,0,0,0-2.69,1.116h0A3.885,3.885,0,0,0,74,83.242v6.953a3.766,3.766,0,0,0,1.116,2.661h0v.029h0A3.833,3.833,0,0,0,77.805,94H84.73a3.782,3.782,0,0,0,2.69-1.116h0l.029-.029a3.766,3.766,0,0,0,1.116-2.661Z" transform="translate(-72.001 -72)" /></symbol>',
        });
      a().add(c);
      t.Z = c;
    },
    80889: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return W;
        },
      });
      var n = r(2844),
        i = r(14730),
        o = r(47706),
        a = r(51791),
        c = r(67597),
        l = r(53174),
        u = r(15129),
        s = r(24666),
        d = r(17177),
        g = r(98431),
        h = r(97656),
        f = r(90650),
        p = r(29649),
        m = r.n(p),
        w = r(48358),
        b = r(66089);
      function v(e) {
        var t = e.columnGap,
          r = (0, h.Z)(),
          n = (0, g.Z)(r, 2),
          i = n[0],
          o = n[1].width,
          a = (function (e) {
            var t = e.renderItem,
              r = e.pagination,
              n = e.renderSpecificItemsAtNthPosition,
              i = e.rowSizing,
              o = e.columnGap,
              a = e.renderSpecificItems,
              l = (0, c.useState)(!1),
              u = l[0],
              s = l[1],
              d = (0, b.Z)().deviceSize,
              h =
                "number" === typeof i
                  ? i
                  : (null === i || void 0 === i ? void 0 : i[d]) || 350;
            (0, w.Z)(function () {
              s(!0);
            });
            var p = r.data.map(function (e) {
              return [e, t];
            });
            if (
              (a &&
                Object.entries(a)
                  .sort(function (e, t) {
                    return +(0, g.Z)(e, 1)[0] - +(0, g.Z)(t, 1)[0];
                  })
                  .forEach(function (e) {
                    var t = (0, g.Z)(e, 2),
                      r = t[0],
                      n = t[1];
                    p.splice(+r, 0, n);
                  }),
              n && u)
            ) {
              var v = n.intervalConfig,
                y = n.renderer,
                j = (0, f.Z)(v, e.countryCode),
                x = m()() ? j.mobile : j.desktop,
                O = x.nth,
                Z = x.offset;
              if (O > 0)
                for (var k = void 0 === Z ? 0 : Z; k < p.length; k += O)
                  p.splice(k, 0, y);
            }
            return p.map(function (e, t) {
              var r = h;
              if (Array.isArray(e)) {
                var n = (0, g.Z)(e, 2),
                  a = n[0],
                  c = n[1];
                if ("number" !== typeof a) {
                  var l,
                    u =
                      (null === a ||
                      void 0 === a ||
                      null === (l = a.attributes) ||
                      void 0 === l
                        ? void 0
                        : l.aspect_ratio) || 1;
                  r = h * u;
                }
                return c
                  ? {
                      index: t,
                      datum: a,
                      width: r,
                      height: h,
                      renderer: c({
                        datum: a,
                        index: t,
                        estimatedColumnWidth: r,
                        rowSizing: i || 350,
                        columnGap: o,
                      }),
                    }
                  : null;
              }
              return {
                index: t,
                datum: t,
                width: r,
                height: h,
                renderer: e({
                  datum: t,
                  index: t,
                  estimatedColumnWidth: r,
                  rowSizing: i || 350,
                  columnGap: o,
                }),
              };
            });
          })(e);
        if (!o) return { rows: [], wrapperRef: i };
        var l = a.reduce(
          function (e, r) {
            var n = e.width,
              i = e.rows,
              a = e.row,
              c = e.lowestWidthElem;
            if (!r) return { width: n, rows: i, row: a, lowestWidthElem: c };
            var l = a.concat(r),
              u = Math.ceil(n + r.width),
              s = l.length,
              d = s - 1,
              g = u + t * d - o,
              h = !1;
            if (
              (c
                ? (c.data.width >= r.width &&
                    (c = { data: r, rowIndex: s - 1 }),
                  g > c.data.width &&
                    ((h = !0),
                    l.splice(c.rowIndex, 1),
                    (u = Math.ceil(u - c.data.width)),
                    (g = u + t * (d -= 1) - o)))
                : (c = { data: r, rowIndex: l.length - 1 }),
              g > 0 || h)
            ) {
              var f = l.reduce(
                function (e, t) {
                  var r = e.newRow,
                    n = e.widthDiff,
                    i = e.newHeight,
                    o = t.width,
                    a = o - (o / u) * g;
                  return (
                    (i = i || Math.round(t.height * (a / o))),
                    n + 1 - (a % 1) >= 0.5
                      ? ((n -= a % 1), (a = Math.floor(a)))
                      : ((n += 1 - (a % 1)), (a = Math.ceil(a))),
                    {
                      newRow: r.concat({
                        index: t.index,
                        width: a,
                        height: i,
                        datum: t.datum,
                        renderer: t.renderer,
                      }),
                      widthDiff: n,
                      newHeight: i,
                    }
                  );
                },
                { newRow: [], widthDiff: 0, newHeight: null },
              );
              return (
                i.push(f.newRow),
                {
                  width: 0,
                  rows: i,
                  row: (a = h && c ? [c.data] : []),
                  lowestWidthElem: null,
                }
              );
            }
            return { width: u, rows: i, row: l, lowestWidthElem: c };
          },
          { width: 0, rows: [], row: [], lowestWidthElem: null },
        );
        return (
          l.row.length > 0 && l.rows.push(l.row),
          { rows: l.rows, wrapperRef: i }
        );
      }
      var y = r(60576),
        j = r(80025),
        x = r(49977),
        O = r(99736),
        Z = r(40183),
        k = r(99346),
        P = r.n(k),
        _ = r(57611);
      function C() {
        return (0, _.jsxs)("div", {
          className: P().mockRow,
          children: [
            (0, _.jsx)(Z.Z, { height: 200 }),
            (0, _.jsx)(Z.Z, { height: 200 }),
            (0, _.jsx)(Z.Z, { height: 200 }),
            (0, _.jsx)(Z.Z, { height: 200 }),
          ],
        });
      }
      var S = r(34324),
        E = r(51453);
      function B(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : B(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function z(e) {
        var t = e.item,
          r = e.index,
          n = e.columnGap,
          i = (0, O.Z)({
            width: t.width,
            height: t.height,
            marginLeft: 0 != r ? n : void 0,
          });
        return (0, _.jsx)("div", { style: i, children: t.renderer.component });
      }
      function I(e) {
        var t = e.loadingStyle,
          r = void 0 === t ? "infinite-scroll" : t,
          n = e.infiniteScrollListenerElement,
          i = e.paginationRoute,
          o = e.columnGap,
          a = e.pagination,
          c = (0, x.Z)(),
          l = (0, b.Z)().deviceSize,
          u = "number" === typeof o ? o : o[l] || 0,
          g = v(D(D({}, e), {}, { columnGap: u })),
          h = g.rows,
          f = g.wrapperRef,
          p = (0, y.Z)({
            pagination: a,
            disabled: "button" === r,
            scrollElement: n || void 0,
          });
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: (0, d.Z)(e),
              ref: f,
              id: "-",
              children: [
                !h.length &&
                  (0, s.Z)(Array(6)).map(function (e, t) {
                    return (0, _.jsx)(C, {}, t);
                  }),
                h.map(function (e, t) {
                  return (0, _.jsx)(
                    S.Z,
                    {
                      marginBottom: u,
                      children: e.map(function (e, t) {
                        return (
                          e &&
                          (0, _.jsx)(
                            z,
                            { item: e, index: t, columnGap: u },
                            e.renderer.itemKeyId,
                          )
                        );
                      }),
                    },
                    t,
                  );
                }),
                (0, _.jsx)(E.Z, D({}, e)),
                p,
              ],
            }),
            i && (0, _.jsx)(j.Z, { pagination: a, marginTop: 15, route: i(c) }),
          ],
        });
      }
      var G = [
        "autoPlay",
        "lazyLoad",
        "showFeaturedBadge",
        "pagination",
        "mediumClassName",
        "renderItemOverride",
        "searchQuery",
        "pageMediumId",
        "gridFlow",
      ];
      function R(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : R(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var H = { mobile: 15, tablet: 15, desktop: 20, oversized: 20 },
        N = [150, 300, 400, 600, 800, 1200, 1600];
      function W(e) {
        var t = e.autoPlay,
          r = e.lazyLoad,
          n = e.showFeaturedBadge,
          s = e.pagination,
          d = e.mediumClassName,
          g = e.renderItemOverride,
          h = e.searchQuery,
          f = e.pageMediumId,
          p = e.gridFlow,
          m = void 0 === p ? "column" : p,
          w = (0, i.Z)(e, G),
          v = (0, u.useRouter)().asPath,
          y = (0, l.Z)(v),
          j = (0, c.useState)(v !== y),
          x = j[0],
          O = j[1],
          Z = (0, b.Z)().deviceSize,
          k = "mobile" == Z || "tablet" == Z || "column" == m;
        (0, c.useEffect)(
          function () {
            x || (v !== y && O(!0));
          },
          [v, y, x],
        );
        var P = (0, c.useCallback)(
          function (e) {
            var i = e.datum,
              o = e.columnSizing,
              c = e.rowSizing,
              l = e.columnGap,
              u = e.estimatedColumnWidth,
              g = e.index;
            return {
              aspectRatio: i.attributes.aspect_ratio,
              itemKeyId: i.id,
              component: (0, _.jsx)(
                a.Z,
                {
                  className: d,
                  medium: i,
                  autoPlay: t,
                  estimatedWidth: u,
                  lazyLoad: r,
                  columnSizing: o,
                  rowSizing: c,
                  columnGap: l,
                  sourceSetWidths: N,
                  showFeaturedBadge: n,
                  index: g,
                  queryKey: s.queryKey,
                  searchQuery: h,
                  pageMediumId: f,
                  isNewPath: x,
                  setIsNewPath: O,
                },
                i.id,
              ),
            };
          },
          [t, r, n, s.queryKey, d, h, f, x],
        );
        return k
          ? (0, _.jsx)(
              o.Z,
              F(
                F({}, w),
                {},
                {
                  pagination: s,
                  columnGap: e.columnGap || H,
                  renderItem: g || P,
                },
              ),
            )
          : (0, _.jsx)(
              I,
              F(
                F({}, w),
                {},
                { pagination: s, columnGap: e.columnGap || H, renderItem: P },
              ),
            );
      }
    },
    85262: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = r(2844),
        i = r(9134),
        o = r.n(i),
        a = r(91136),
        c = r.n(a),
        l = r(19881),
        u = r.n(l),
        s = new (c())({
          id: "linkedin-1eeec9de73607187125c896cb1eff47d",
          use: "linkedin-1eeec9de73607187125c896cb1eff47d-usage",
          viewBox: "0 0 512 512",
          content:
            '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" id="linkedin-1eeec9de73607187125c896cb1eff47d"><g><g><rect y="160" width="114.496" height="352" /></g></g><g><g><path d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896\r\n\t\t\tc-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320\r\n\t\t\tc0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z" /></g></g><g><g><circle cx="56" cy="56" r="56" /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></symbol>',
        }),
        d = (u().add(s), s),
        g = r(60025),
        h = r(39139),
        f = new (c())({
          id: "tumblr-dd317712b29d723333f4090c081db596",
          use: "tumblr-dd317712b29d723333f4090c081db596-usage",
          viewBox: "0 0 512 512",
          content:
            '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" id="tumblr-dd317712b29d723333f4090c081db596"><g><g><path d="M348.832,428.544c-14.208,0-27.52-3.328-38.528-10.048c-8.8-5.12-16.544-13.824-19.616-22.112\r\n\t\t\tc-3.072-8.448-2.752-25.728-2.752-55.296V223.84h128.096v-95.808H287.936V0h-82.528c-3.328,26.336-9.312,48.192-18.112,65.088\r\n\t\t\tc-8.416,17.216-20.256,31.776-34.24,44.096c-14.464,12.192-36.864,21.504-57.088,28.128v72.544h68.704V389.28\r\n\t\t\tc0,23.52,2.368,41.472,7.424,53.728c4.96,12.352,13.44,23.968,26.4,34.848c12.736,11.008,27.968,19.456,46.176,25.408\r\n\t\t\tC262.4,509.12,276.352,512,299.808,512c20.576,0,39.808-1.952,57.408-6.272c17.632-4,36.8-10.08,58.816-20.352v-76.96\r\n\t\t\tC390.304,425.216,374.784,428.544,348.832,428.544z" /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></symbol>',
        }),
        p = (u().add(f), f),
        m = r(18080),
        w = r(47332),
        b = r(85656),
        v = r(97720),
        y = r.n(v),
        j = r(57611);
      function x(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : x(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Z(e) {
        var t,
          r = o()(y().social, y()[e.social]);
        switch (e.social) {
          case "linkedin":
            t = d;
            break;
          case "twitter":
            t = m.Z;
            break;
          case "facebook":
            t = g.Z;
            break;
          case "pinterest":
            t = h.Z;
            break;
          case "tumblr":
            t = p;
        }
        return (0, j.jsx)(
          b.Z,
          O(
            O({}, e),
            {},
            { icon: (0, j.jsx)(w.Z, { symbol: t }), className: r, ref: null },
          ),
        );
      }
    },
    16770: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(49977),
        i = r(87460),
        o = r(21874),
        a = r(57410),
        c = r(4562),
        l = r(10203),
        u = r(18338),
        s = r(85262),
        d = r(23842),
        g = r(62860),
        h = r(57611);
      function f(e) {
        var t = (0, n.Z)("common"),
          r = e.open,
          f = e.onRequestClose,
          p = e.hrefWithoutDomain,
          m = e.linkText,
          w = e.textToCopy,
          b = e.type,
          v = e.trackCallback,
          y = (0, g.Z)("#".concat(c.g8));
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)("div", { id: c.g8 }),
            (0, h.jsxs)(i.Z, {
              isOpen: r,
              horizontalPadding: 30,
              verticalPadding: 30,
              onRequestClose: f,
              appElement: y,
              maxWidth: 500,
              closeButtonInOverlay: !0,
              children: [
                (0, h.jsx)(a.Z, {
                  size: "h$33",
                  marginBottom: 20,
                  center: !0,
                  tag: (0, h.jsx)("h4", {}),
                  weight: "bold",
                  children: t.t("share_modal.title"),
                }),
                (0, h.jsxs)(o.Z, {
                  spaceBetween: 15,
                  center: "both",
                  marginBottom: 20,
                  children: [
                    (0, h.jsx)(s.Z, {
                      social: "pinterest",
                      target: "_blank",
                      href: function () {
                        return (0, d.Bn)({
                          i18n: t,
                          url: (0, u.ZP)({ pathname: p }),
                        });
                      },
                      title: t.t("share_modal.pinterest"),
                      trackCallback: function () {
                        return null === v || void 0 === v
                          ? void 0
                          : v("share_interact", "pinterest");
                      },
                    }),
                    (0, h.jsx)(s.Z, {
                      social: "twitter",
                      target: "_blank",
                      href: function () {
                        return (0, d.JC)({
                          i18n: t,
                          url: (0, u.ZP)({ pathname: p }),
                          text: m,
                        });
                      },
                      title: t.t("share_modal.twitter"),
                      trackCallback: function () {
                        return null === v || void 0 === v
                          ? void 0
                          : v("share_interact", "twitter");
                      },
                    }),
                    (0, h.jsx)(s.Z, {
                      social: "linkedin",
                      target: "_blank",
                      href: function () {
                        return (0, d.Aq)({
                          i18n: t,
                          url: (0, u.ZP)({ pathname: p }),
                        });
                      },
                      title: t.t("share_modal.linkedin"),
                      trackCallback: function () {
                        return null === v || void 0 === v
                          ? void 0
                          : v("share_interact", "linkedin");
                      },
                    }),
                    (0, h.jsx)(s.Z, {
                      social: "facebook",
                      target: "_blank",
                      href: function () {
                        return (0, d.uo)({
                          i18n: t,
                          url: (0, u.ZP)({ pathname: p }),
                          title: m,
                        });
                      },
                      title: t.t("share_modal.facebook"),
                      trackCallback: function () {
                        return null === v || void 0 === v
                          ? void 0
                          : v("share_interact", "facebook");
                      },
                    }),
                    (0, h.jsx)(s.Z, {
                      social: "tumblr",
                      target: "_blank",
                      href: function () {
                        return (0, d.Jx)({
                          i18n: t,
                          url: (0, u.ZP)({ pathname: p }),
                        });
                      },
                      title: t.t("share_modal.tumblr"),
                      trackCallback: function () {
                        return null === v || void 0 === v
                          ? void 0
                          : v("share_interact", "tumblr");
                      },
                    }),
                  ],
                }),
                (0, h.jsx)(a.Z, {
                  size: "p$16",
                  marginBottom: 4,
                  color: "grey$7F7F7F",
                  children: t.t("share_modal.set_link_back.".concat(b)),
                }),
                (0, h.jsx)(l.Z, {
                  copyText: w,
                  labelText: m,
                  trackName: "share",
                  trackCallback: function () {
                    return null === v || void 0 === v
                      ? void 0
                      : v("share_interact", "copy_link");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    10203: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return b;
        },
      });
      var n = r(2844),
        i = r(98431),
        o = r(14730),
        a = r(67597),
        c = r(94898),
        l = r(85656),
        u = r(49977),
        s = r(47332),
        d = r(87462),
        g = r(1902),
        h = r.n(g),
        f = r(57611),
        p = ["labelText", "copyText"];
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
      function w(e) {
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
      function b(e) {
        var t = e.labelText,
          r = e.copyText,
          n = (0, o.Z)(e, p),
          g = (0, u.Z)("common").t,
          m = (0, a.useRef)(null),
          b = (0, c.Z)(),
          v = (0, i.Z)(b, 2),
          y = v[0].value,
          j = v[1],
          x = (0, a.useState)(!1),
          O = x[0],
          Z = x[1];
        return (
          (0, a.useEffect)(
            function () {
              if (!y) return function () {};
              Z(!0);
              var e = setTimeout(function () {
                Z(!1);
              }, 2500);
              return function () {
                Z(!1), clearTimeout(e);
              };
            },
            [y],
          ),
          (0, f.jsx)(
            l.C,
            w(
              w({}, n),
              {},
              {
                theme: "greyMinus3$F7F7F7",
                fullWidth: !0,
                ref: m,
                onClick: function () {
                  return j(r);
                },
                rightIcon: (0, f.jsx)(s.Z, { symbol: d.Z }),
                className: h().copyButton,
                trackLabel: "copy",
                children: O ? g("copied") : t,
              },
            ),
          )
        );
      }
    },
    1902: function (e) {
      e.exports = { copyButton: "CopyButton_copyButton__JGE1P" };
    },
  },
]);
