var OneTrustStub = (function (t) {
  "use strict";
  var a,
    o,
    p = new (function () {
      (this.optanonCookieName = "OptanonConsent"),
        (this.optanonHtmlGroupData = []),
        (this.optanonHostData = []),
        (this.genVendorsData = []),
        (this.vendorsServiceData = []),
        (this.IABCookieValue = ""),
        (this.oneTrustIABCookieName = "eupubconsent"),
        (this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal"),
        (this.isStubReady = !0),
        (this.geolocationCookiesParam = "geolocation"),
        (this.EUCOUNTRIES = [
          "BE",
          "BG",
          "CZ",
          "DK",
          "DE",
          "EE",
          "IE",
          "GR",
          "ES",
          "FR",
          "IT",
          "CY",
          "LV",
          "LT",
          "LU",
          "HU",
          "MT",
          "NL",
          "AT",
          "PL",
          "PT",
          "RO",
          "SI",
          "SK",
          "FI",
          "SE",
          "GB",
          "HR",
          "LI",
          "NO",
          "IS",
        ]),
        (this.stubFileName = "otSDKStub"),
        (this.DATAFILEATTRIBUTE = "data-domain-script"),
        (this.bannerScriptName = "otBannerSdk.js"),
        (this.mobileOnlineURL = []),
        (this.isMigratedURL = !1),
        (this.migratedCCTID = "[[OldCCTID]]"),
        (this.migratedDomainId = "[[NewDomainId]]"),
        (this.userLocation = { country: "", state: "" });
    })();
  ((m = g = g || {})[(m.Days = 1)] = "Days"),
    (m[(m.Weeks = 7)] = "Weeks"),
    (m[(m.Months = 30)] = "Months"),
    (m[(m.Years = 365)] = "Years"),
    ((m = i = i || {}).Name = "OTGPPConsent"),
    (m[(m.ChunkSize = 4e3)] = "ChunkSize"),
    (m.ChunkCountParam = "GPPCookiesCount"),
    ((m = a = a || {}).CPRA = "uscav1"),
    (m.CCPA = "uscav1"),
    (m.CDPA = "usvav1"),
    (m.USNATIONAL = "usnatv1"),
    (m.COLORADO = "uscov1"),
    (m.CTDPA = "usctv1"),
    (m.UCPA = "usutv1"),
    (m.IAB2V2 = "tcfeuv2"),
    ((m = o = o || {})[(m.CPRA = 8)] = "CPRA"),
    (m[(m.CCPA = 8)] = "CCPA"),
    (m[(m.CDPA = 9)] = "CDPA"),
    (m[(m.USNATIONAL = 7)] = "USNATIONAL"),
    (m[(m.COLORADO = 10)] = "COLORADO"),
    (m[(m.UCPA = 11)] = "UCPA"),
    (m[(m.CTDPA = 12)] = "CTDPA"),
    (m[(m.IAB2V2 = 2)] = "IAB2V2");
  var s = "geo",
    r = "otpreview",
    u = (i.Name, "PRODUCTION"),
    n =
      (((m = {})[g.Days] = "PCenterVendorListLifespanDay"),
      (m[g.Weeks] = "LfSpnWk"),
      (m[g.Months] = "PCenterVendorListLifespanMonth"),
      (m[g.Years] = "LfSpnYr"),
      (e.prototype.camelize = function (t) {
        return (t = t.replace("--", ""))
          .split("-")
          .map(function (t, e) {
            var i = t ? t[0].toUpperCase() + t.slice(1) : "";
            return 0 === e ? t : i;
          })
          .join("");
      }),
      (e.prototype.strToObj = function (t) {
        for (
          var e = {},
            i = t.split(";").map(function (t) {
              return t.trim();
            }),
            n = 0,
            a = void 0;
          n < i.length;
          ++n
        )
          if (/:/.test(i[n])) {
            if (!(a = i[n].split(/:(.+)/))[1]) return null;
            e[this.camelize(a[0])] = a[1].trim();
          }
        return e;
      }),
      e);
  function e() {
    var t = this;
    this.implementThePolyfill = function () {
      var a = t,
        o = Element.prototype.setAttribute;
      return (
        (Element.prototype.setAttribute = function (t, e) {
          if (
            ("style" !== t.toLowerCase() && o.apply(this, [t, e]),
            "style" !== t.toLowerCase() || e || this.removeAttribute("style"),
            "style" === t.toLowerCase() && e)
          ) {
            this.removeAttribute("style");
            var i,
              n = a.strToObj(e);
            for (i in n) this.style[i] = n[i];
          }
        }),
        !0
      );
    };
  }
  function l(t, e, i) {
    void 0 === i && (i = !1);
    function n(t) {
      return t
        ? (";" !== (t = t.trim()).charAt(t.length - 1) && (t += ";"), t.trim())
        : null;
    }
    var o = n(t.getAttribute("style")),
      s = n(e),
      e = "",
      e =
        i && o
          ? (function () {
              for (
                var t = o
                    .split(";")
                    .concat(s.split(";"))
                    .filter(function (t) {
                      return 0 !== t.length;
                    }),
                  e = "",
                  i = "",
                  n = t.length - 1;
                0 <= n;
                n--
              ) {
                var a = t[n].substring(0, t[n].indexOf(":") + 1).trim();
                e.indexOf(a) < 0 && ((e += a), (i += t[n] + ";"));
              }
              return i;
            })()
          : s;
    t.setAttribute("style", e);
  }
  var c, i;
  ((i = c = c || {}).ping = "ping"),
    (i.addEventListener = "addEventListener"),
    (i.removeEventListener = "removeEventListener"),
    (i.hasSection = "hasSection"),
    (i.getSection = "getSection"),
    (i.getField = "getField"),
    (i.getGPPData = "getGPPData");
  var d = new (function () {
      var s = this;
      (this.LOCATOR_NAME = "__gppLocator"),
        (this.win = window),
        (this.customInit = "CUSTOMINIT"),
        (this.init = function () {
          (s.win.__gpp && "function" == typeof s.win.__gpp) ||
            ((s.win.__gpp = s.executeGppApi),
            window.addEventListener("message", s.messageHandler, !1),
            s.addFrame(s.LOCATOR_NAME));
        }),
        (this.removeGppApi = function () {
          delete s.win.__gpp;
          var t = document.querySelectorAll(
            "iframe[name=" + s.LOCATOR_NAME + "]",
          )[0];
          t && t.parentElement.removeChild(t);
        }),
        (this.executeGppApi = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var i = null == (i = s.win) ? void 0 : i.__gpp;
          if (
            ((i.queue = i.queue || []),
            (i.events = i.events || []),
            !t.length || (1 === t.length && "queue" === t[0]))
          )
            return i.queue;
          if (1 === t.length && "events" === t[0]) return i.events;
          var n = t[0],
            a = 1 < t.length ? t[1] : null,
            o = 2 < t.length ? t[2] : null;
          switch (n) {
            case c.ping:
              return s.getPingRequest(a);
            case c.addEventListener:
              return s.addEventListener(a, o);
            case c.removeEventListener:
              return s.removeEventListener(o);
            default:
              return void s.addToQueue(n, a, o);
          }
        }),
        (this.getPingRequest = function (t) {
          var i,
            n,
            e = {
              gppVersion: 1.1,
              cmpStatus: "stub",
              cmpDisplayStatus: "hidden",
              signalStatus: "not ready",
              supportedAPIs:
                ((i = []),
                (n = {}),
                Object.keys(o).forEach(function (t) {
                  var e = {},
                    t = ((e[t] = o[t]), Object.assign(e, n));
                  n = t;
                }),
                Object.keys(a)
                  .map(function (t) {
                    return { name: t, value: a[t] };
                  })
                  .forEach(function (t) {
                    t = n[t.name] + ":" + t.value;
                    i.push(t);
                  }),
                i.filter(function (t, e) {
                  return i.indexOf(t) === e;
                })),
              currentAPI: "",
              cmpId: Number.parseInt("28"),
              sectionList: [],
              applicableSections: [0],
              gppString: "",
              parsedSections: {},
            };
          return t && t(e, !0), e;
        }),
        (this.addFrame = function (t) {
          var e,
            i = s.win.document,
            n = Boolean(s.win.frames[t]);
          return (
            n ||
              (i.body
                ? (((e = i.createElement("iframe")).style.cssText =
                    "display:none"),
                  (e.name = t),
                  e.setAttribute("title", "GPP Locator"),
                  i.body.appendChild(e))
                : setTimeout(function () {
                    s.addFrame(t);
                  }, 5)),
            !n
          );
        }),
        (this.addEventListener = function (t, e) {
          var i,
            n = s.win.__gpp;
          return (
            (n.events = n.events || []),
            (null != (i = n) && i.lastId) || (n.lastId = 0),
            n.lastId++,
            n.events.push({ id: n.lastId, callback: t, parameter: e }),
            {
              eventName: "listenerRegistered",
              listenerId: n.lastId,
              data: !0,
              pingData: s.getPingRequest(),
            }
          );
        }),
        (this.removeEventListener = function (e) {
          var i = !1,
            t = s.win.__gpp;
          return (
            (t.events = t.events || []),
            (t.events = t.events.filter(function (t) {
              return t.id.toString() !== e.toString() || !(i = !0);
            })),
            {
              eventName: "listenerRemoved",
              listenerId: e,
              data: i,
              pingData: s.getPingRequest(),
            }
          );
        }),
        (this.addToQueue = function (t, e, i) {
          var n = s.win.__gpp;
          (n.queue = n.queue || []), n.queue.push([t, e, i]);
        }),
        (this.messageHandler = function (i) {
          var e,
            n,
            a = "string" == typeof i.data;
          try {
            e = a ? JSON.parse(i.data) : i.data;
          } catch (t) {
            e = null;
          }
          e &&
            e.__gppCall &&
            ((n = e.__gppCall),
            (0, s.win.__gpp)(
              n.command,
              function (t, e) {
                t = {
                  __gppReturn: { returnValue: t, success: e, callId: n.callId },
                };
                i &&
                  i.source &&
                  i.source.postMessage &&
                  i.source.postMessage(
                    a ? JSON.stringify(t) : t,
                    i.origin || "*",
                  );
              },
              n.parameter,
            ));
        }),
        this.customInit || this.init();
    })(),
    m =
      ((h.prototype.initConsentSDK = function () {
        this.initCustomEventPolyfill(),
          this.ensureHtmlGroupDataInitialised(),
          this.setStubScriptElement(),
          this.setOTDataLayer(),
          this.getParam(),
          this.fetchBannerSDKDependency(),
          this.captureNonce();
      }),
      (h.prototype.captureNonce = function () {
        this.nonce =
          p.stubScriptElement.nonce ||
          p.stubScriptElement.getAttribute("nonce") ||
          null;
      }),
      (h.prototype.fetchBannerSDKDependency = function () {
        this.setDomainDataFileURL(),
          (this.crossOrigin =
            p.stubScriptElement.getAttribute("crossorigin") || null),
          (this.previewMode =
            "true" === p.stubScriptElement.getAttribute("data-preview-mode")),
          this.otFetch(p.bannerDataParentURL, this.getLocation.bind(this));
      }),
      (h.prototype.setDomainIfBulkDomainEnabled = function (t) {
        var e = t && t.TenantFeatures,
          i = window.location.hostname,
          n = t.Domain,
          a = t.BulkDomainCheckUrl;
        e &&
          e.CookieV2BulkDomainManagement &&
          i !== n &&
          t.ScriptType === u &&
          ((e = window.sessionStorage) && e.getItem("bulkDomainMgmtEnabled")
            ? this.handleBulkDomainMgmt(
                {
                  isValid:
                    "true" ===
                    window.sessionStorage.getItem("bulkDomainMgmtEnabled"),
                },
                t,
              )
            : ((n = {
                location: p.storageBaseURL.replace(/^https?:\/\//, ""),
                domainId: this.domainId,
                url: i,
              }),
              this.otFetch(a, this.handleBulkDomainMgmt, !1, n, t)));
      }),
      (h.prototype.getLocation = function (t) {
        if (
          (this.setDomainIfBulkDomainEnabled(t),
          this.updateVersion(t),
          ((t.TenantFeatures && t.TenantFeatures.CookieV2CSP) ||
            t.CookieV2CSPEnabled) &&
            this.nonce &&
            ((this.setAttributePolyfillIsActive = !0),
            new n().implementThePolyfill()),
          !t.RuleSet[0].Type)
        )
          return (
            (this.iabTypeAdded = !1),
            (window.__tcfapi = this.executeTcfApi),
            this.intializeIabStub(),
            this.addBannerSDKScript(t)
          );
        var e,
          i = window;
        i.OneTrust && i.OneTrust.geolocationResponse
          ? ((i = i.OneTrust.geolocationResponse),
            this.setGeoLocation(i.countryCode, i.stateCode),
            this.addBannerSDKScript(t))
          : (i = this.readCookieParam(
                p.optanonCookieName,
                p.geolocationCookiesParam,
              )) || t.SkipGeolocation
            ? ((e = i.split(";")[0]),
              (i = i.split(";")[1]),
              this.setGeoLocation(e, i),
              this.addBannerSDKScript(t))
            : this.getGeoLocation(t);
      }),
      (h.prototype.handleBulkDomainMgmt = function (t, e) {
        window.sessionStorage &&
          window.sessionStorage.setItem(
            "bulkDomainMgmtEnabled",
            JSON.stringify(t.isValid),
          ),
          t.isValid && (e.Domain = window.location.hostname);
      }),
      (h.prototype.getGeolocationURL = function (t) {
        t.TenantFeatures;
        var e =
          "" +
          p.stubScriptElement.getAttribute("src").split(p.stubFileName)[0] +
          t.Version;
        return new RegExp("^file://", "i").test(e) && t.MobileSDK
          ? ((e =
              "/" +
              t.GeolocationUrl.replace(/^(http|https):\/\//, "")
                .split("/")
                .slice(1)
                .join("/") +
              ".js"),
            p.storageBaseURL + e)
          : t.GeolocationUrl;
      }),
      (h.prototype.geoLocationJsonCallback = function (t, e) {
        e && this.setGeoLocation(e.country, e.state),
          this.addBannerSDKScript(t);
      }),
      (h.prototype.getGeoLocation = function (t) {
        var e = this.getGeolocationURL(t);
        this.otFetch(e, this.geoLocationJsonCallback.bind(this, t), !0);
      }),
      (h.prototype.setOTDataLayer = function () {
        var t = "data-dLayer-ignore",
          e = p.stubScriptElement.hasAttribute(t),
          t = p.stubScriptElement.getAttribute(t);
        this.otDataLayer = {
          ignore: (e && "true" === t) || (e && "" === t),
          name:
            p.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer",
        };
      }),
      (h.prototype.setGeoLocation = function (t, e) {
        p.userLocation = { country: t, state: (e = void 0 === e ? "" : e) };
      }),
      (h.prototype.otFetch = function (t, i, e, n, a) {
        void 0 === e && (e = !1), void 0 === n && (n = null);
        var o =
          window.sessionStorage &&
          window.sessionStorage.getItem("otPreviewData");
        if (new RegExp("^file://", "i").test(t)) this.otFetchOfflineFile(t, i);
        else if (0 <= t.indexOf("/consent/") && this.previewMode && o) {
          o = JSON.parse(o).domainJson;
          i(o);
        } else {
          p.mobileOnlineURL.push(t);
          var s = new XMLHttpRequest();
          if (
            ((s.onload = function (t) {
              var e;
              this && this.responseText
                ? (e = this.responseText)
                : t && t.target && (e = t.target.responseText),
                a ? i(JSON.parse(e), a) : i(JSON.parse(e));
            }),
            (s.onerror = function () {
              i();
            }),
            s.open("GET", t),
            (s.withCredentials = !1),
            e && s.setRequestHeader("accept", "application/json"),
            n)
          )
            for (var r in n) s.setRequestHeader(r, n[r]);
          s.send();
        }
      }),
      (h.prototype.otFetchOfflineFile = function (t, e) {
        var i = (t = t.replace(".json", ".js")).split("/"),
          n = i[i.length - 1].split(".js")[0];
        this.jsonp(t, function () {
          e(window[n]);
        });
      }),
      (h.prototype.jsonp = function (t, e) {
        var i = document.createElement("script");
        i.setAttribute("src", t),
          this.nonce && i.setAttribute("nonce", this.nonce),
          (i.async = !0),
          (i.type = "text/javascript"),
          this.crossOrigin && i.setAttribute("crossorigin", this.crossOrigin),
          document.getElementsByTagName("head")[0].appendChild(i),
          new RegExp("^file://", "i").test(t) || p.mobileOnlineURL.push(t),
          e &&
            (i.onload = i.onerror =
              function () {
                e();
              });
      }),
      (h.prototype.getRegionSet = function (t) {
        var e,
          i,
          n,
          a = p.userLocation,
          o = t.RuleSet.filter(function (t) {
            return !0 === t.Default;
          });
        if (!a.country && !a.state) return o && 0 < o.length ? o[0] : null;
        for (
          var s = a.state.toLowerCase(), r = a.country.toLowerCase(), u = 0;
          u < t.RuleSet.length;
          u++
        )
          if (!0 === t.RuleSet[u].Global) n = t.RuleSet[u];
          else {
            var l = t.RuleSet[u].States;
            if (l[r] && 0 <= l[r].indexOf(s)) {
              i = t.RuleSet[u];
              break;
            }
            0 <= t.RuleSet[u].Countries.indexOf(r) && (e = t.RuleSet[u]);
          }
        return i || e || n;
      }),
      (h.prototype.ensureHtmlGroupDataInitialised = function () {
        this.initializeIABData(),
          this.initializeGroupData(),
          this.initializeHostData(),
          this.initializeGenVenData();
      }),
      (h.prototype.initializeGroupData = function () {
        var t = this.readCookieParam(p.optanonCookieName, "groups");
        t && (p.optanonHtmlGroupData = this.deserialiseStringToArray(t));
      }),
      (h.prototype.initializeHostData = function () {
        var t = this.readCookieParam(p.optanonCookieName, "hosts");
        t && (p.optanonHostData = this.deserialiseStringToArray(t));
      }),
      (h.prototype.initializeGenVenData = function () {
        var t = this.readCookieParam(p.optanonCookieName, "genVendors");
        t && (p.genVendorsData = this.deserialiseStringToArray(t));
      }),
      (h.prototype.initializeIABData = function () {
        this.validateIABGDPRApplied(), this.validateIABGlobalScope();
      }),
      (h.prototype.validateIABGlobalScope = function () {
        var t = this.readCookieParam(
          p.optanonCookieName,
          p.oneTrustIsIABCrossConsentEnableParam,
        );
        t
          ? "true" === t
            ? ((p.hasIABGlobalScope = !0), (p.isStubReady = !1))
            : ((p.hasIABGlobalScope = !1),
              (p.IABCookieValue = this.getCookie(p.oneTrustIABCookieName)))
          : (p.isStubReady = !1);
      }),
      (h.prototype.validateIABGDPRApplied = function () {
        var t = this.readCookieParam(
          p.optanonCookieName,
          p.geolocationCookiesParam,
        ).split(";")[0];
        t
          ? this.isBoolean(t)
            ? (p.oneTrustIABgdprAppliesGlobally = "true" === t)
            : (p.oneTrustIABgdprAppliesGlobally = 0 <= p.EUCOUNTRIES.indexOf(t))
          : (p.isStubReady = !1);
      }),
      (h.prototype.isBoolean = function (t) {
        return "true" === t || "false" === t;
      }),
      (h.prototype.readCookieParam = function (t, e) {
        var i,
          n,
          a,
          o,
          t = this.getCookie(t);
        if (t) {
          for (n = {}, a = t.split("&"), i = 0; i < a.length; i += 1)
            (o = a[i].split("=")),
              (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]).replace(
                /\+/g,
                " ",
              ));
          return e && n[e] ? n[e] : e && !n[e] ? "" : n;
        }
        return "";
      }),
      (h.prototype.getCookie = function (t) {
        if (this.isAmp) {
          var e = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
          if (e) return e[t] || null;
        }
        for (
          var i, n = t + "=", a = document.cookie.split(";"), o = 0;
          o < a.length;
          o += 1
        ) {
          for (i = a[o]; " " == i.charAt(0); ) i = i.substring(1, i.length);
          if (0 == i.indexOf(n)) return i.substring(n.length, i.length);
        }
        return null;
      }),
      (h.prototype.updateGtmMacros = function () {
        for (var t = [], e = p.optanonHtmlGroupData.length, i = 0; i < e; i++)
          this.endsWith(p.optanonHtmlGroupData[i], ":1") &&
            t.push(p.optanonHtmlGroupData[i].replace(":1", ""));
        for (e = p.optanonHostData.length, i = 0; i < e; i++)
          this.endsWith(p.optanonHostData[i], ":1") &&
            t.push(p.optanonHostData[i].replace(":1", ""));
        for (e = p.genVendorsData.length, i = 0; i < e; i++)
          this.endsWith(p.genVendorsData[i], ":1") &&
            t.push(p.genVendorsData[i].replace(":1", ""));
        for (e = p.vendorsServiceData.length, i = 0; i < e; i++)
          this.endsWith(p.vendorsServiceData[i], ":1") &&
            t.push(p.vendorsServiceData[i].replace(":1", ""));
        var n,
          a = "," + this.serialiseArrayToString(t) + ",",
          o =
            ((window.OnetrustActiveGroups = a),
            (window.OptanonActiveGroups = a),
            window),
          s =
            (this.otDataLayer.ignore || void 0 === o[this.otDataLayer.name]
              ? this.otDataLayer.ignore ||
                (o[this.otDataLayer.name] = [
                  { event: "OneTrustLoaded", OnetrustActiveGroups: a },
                  { event: "OptanonLoaded", OptanonActiveGroups: a },
                ])
              : o[this.otDataLayer.name].constructor === Array &&
                (o[this.otDataLayer.name].push({ OnetrustActiveGroups: a }),
                o[this.otDataLayer.name].push({ OptanonActiveGroups: a })),
            new CustomEvent("consent.onetrust", { detail: t }));
        !this.otDataLayer.ignore &&
          t.length &&
          (o[this.otDataLayer.name].constructor === Array &&
            o[this.otDataLayer.name].push({
              event: "OneTrustGroupsUpdated",
              OnetrustActiveGroups: a,
            }),
          (n = new CustomEvent("OneTrustGroupsUpdated", { detail: t }))),
          setTimeout(function () {
            t.length && window.dispatchEvent(s), n && window.dispatchEvent(n);
          });
      }),
      (h.prototype.deserialiseStringToArray = function (t) {
        return t ? t.split(",") : [];
      }),
      (h.prototype.endsWith = function (t, e) {
        return -1 !== t.indexOf(e, t.length - e.length);
      }),
      (h.prototype.serialiseArrayToString = function (t) {
        return t.toString();
      }),
      (h.prototype.setStubScriptElement = function () {
        p.stubScriptElement = document.querySelector(
          "script[src*='" + p.stubFileName + "']",
        );
        var t =
          p.stubScriptElement &&
          0 <= p.stubScriptElement.getAttribute("src").indexOf("did=");
        p.stubScriptElement &&
        p.stubScriptElement.hasAttribute(p.DATAFILEATTRIBUTE)
          ? (this.domainId = p.stubScriptElement
              .getAttribute(p.DATAFILEATTRIBUTE)
              .trim())
          : t
            ? (this.domainId = p.stubScriptElement
                .getAttribute("src")
                .split("did=")[1])
            : p.stubScriptElement ||
              ((p.stubScriptElement = document.querySelector(
                "script[src*='" + p.migratedCCTID + "']",
              )),
              p.stubScriptElement &&
                ((p.isMigratedURL = !0),
                (this.domainId = p.migratedDomainId.trim())));
      }),
      (h.prototype.setDomainDataFileURL = function () {
        var t = p.stubScriptElement.getAttribute("src"),
          e = -1 < t.indexOf("/consent");
        t &&
          (p.isMigratedURL
            ? (p.storageBaseURL = t.split("/consent/" + p.migratedCCTID)[0])
            : (p.storageBaseURL = (
                e
                  ? t.split("/consent")
                  : t.split("/scripttemplates/" + p.stubFileName)
              )[0])),
          (this.storageBaseURL = p.storageBaseURL),
          this.isPreview && -1 === this.domainId.indexOf("test")
            ? (this.domainId = this.domainId + "-test")
            : (this.isPreview = !1),
          (p.bannerBaseDataURL =
            p.storageBaseURL && p.storageBaseURL + "/consent/" + this.domainId),
          (p.bannerDataParentURL =
            p.bannerBaseDataURL + "/" + this.domainId + ".json");
      }),
      (h.prototype.initCustomEventPolyfill = function () {
        if ("function" == typeof window.CustomEvent) return !1;
        function t(t, e) {
          e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
        }
        (t.prototype = window.Event.prototype), (window.CustomEvent = t);
      }),
      (h.prototype.removeTcf = function () {
        delete window.__tcfapi;
        var t = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        t && t.parentElement.removeChild(t);
      }),
      (h.prototype.getParamForIE = function () {
        return {
          get: function (t) {
            t = new RegExp("[?&]" + t + "=([^&#]*)").exec(
              window.location.search,
            );
            return null === t ? null : decodeURI(t[1]) || "";
          },
        };
      }),
      (h.prototype.getParam = function () {
        window.document.documentMode || !window.URLSearchParams
          ? (this.urlParams = this.getParamForIE())
          : (this.urlParams = new URLSearchParams(window.location.search));
        var t = "true" === this.urlParams.get("otreset"),
          e = "true" === this.urlParams.get("otpreview"),
          i =
            ((this.geoFromUrl = (
              this.urlParams.get("otgeo") || ""
            ).toLowerCase()),
            this.readCookieParam(r, "expiry")),
          n = this.readCookieParam(r, s);
        (this.isReset = t || (i && new Date(i) < new Date())),
          (this.isPreview =
            !this.isReset && (e || (i && new Date(i) > new Date()))),
          this.setGeoParam(this.geoFromUrl || n);
      }),
      (h.prototype.setGeoParam = function (t) {
        var e;
        t &&
          ((e = window).OneTrust || (e.OneTrust = {}),
          (t = t.split(",")),
          (e.OneTrust.geolocationResponse = {
            countryCode: t[0],
            stateCode: t[1],
          }));
      }),
      (h.prototype.updateVersion = function (t) {
        ("debug" !== this.buildType && "cybuild" !== this.buildType) ||
          (t.Version = "202312.1.0");
      }),
      h);
  function h() {
    var s = this;
    (this.iabType = null),
      (this.iabTypeAdded = !0),
      (this.crossOrigin = null),
      (this.isAmp = !1),
      (this.domainId = ""),
      (this.isReset = !1),
      (this.isPreview = !1),
      (this.geoFromUrl = ""),
      (this.nonce = ""),
      (this.setAttributePolyfillIsActive = !1),
      (this.storageBaseURL = ""),
      (this.charset = null),
      (this.buildType = "undefined"),
      (this.addBannerSDKScript = function (t) {
        var e = s.getRegionSet(t),
          i =
            (e.GCEnable || (s.updateGtmMacros(), (s.gtmUpdated = !0)),
            s.iabTypeAdded &&
              (("IAB2" !== e.Type && "IAB2V2" !== e.Type) ||
                ((s.iabType = e.Type), s.intializeIabStub()),
              "IAB2" !== e.Type) &&
              "IAB2V2" !== e.Type &&
              s.removeTcf(),
            e.IsGPPEnabled ? d.init() : d.removeGppApi(),
            p.stubScriptElement.cloneNode(!0)),
          n = "",
          n = t.UseSDKRefactor
            ? (p.isMigratedURL &&
                (i.src =
                  p.storageBaseURL +
                  "/scripttemplates/new/scripttemplates/" +
                  p.stubFileName +
                  ".js"),
              p.storageBaseURL +
                "/scripttemplates/new/scripttemplates/" +
                t.Version +
                "/" +
                p.bannerScriptName)
            : "5.11.0" === t.Version
              ? (p.isMigratedURL &&
                  (i.src =
                    p.storageBaseURL +
                    "/scripttemplates/old/scripttemplates/" +
                    p.stubFileName +
                    ".js"),
                p.storageBaseURL +
                  "/scripttemplates/old/scripttemplates/5.11.0/" +
                  p.bannerScriptName)
              : (p.isMigratedURL &&
                  (i.src =
                    p.storageBaseURL +
                    "/scripttemplates/" +
                    p.stubFileName +
                    ".js"),
                p.storageBaseURL +
                  "/scripttemplates/" +
                  t.Version +
                  "/" +
                  p.bannerScriptName);
        [
          "charset",
          "data-language",
          "data-document-language",
          "data-domain-script",
          "crossorigin",
          "data-ignore-ga",
        ].forEach(function (t) {
          p.stubScriptElement.getAttribute(t) &&
            i.setAttribute(t, p.stubScriptElement.getAttribute(t));
        }),
          (s.charset = p.stubScriptElement.getAttribute("charset")),
          (s.isAmp = !!p.stubScriptElement.getAttribute("amp")),
          (window.otStubData = {
            bannerBaseDataURL: p.bannerBaseDataURL,
            crossOrigin: s.crossOrigin,
            domainData: t,
            domainId: s.domainId,
            geoFromUrl: s.geoFromUrl,
            isAmp: s.isAmp,
            isPreview: s.isPreview,
            isReset: s.isReset,
            mobileOnlineURL: p.mobileOnlineURL,
            nonce: s.nonce,
            otDataLayer: s.otDataLayer,
            regionRule: e,
            setAttributePolyfillIsActive: s.setAttributePolyfillIsActive,
            storageBaseURL: s.storageBaseURL,
            stubElement: i,
            urlParams: s.urlParams,
            userLocation: p.userLocation,
            gtmUpdated: s.gtmUpdated,
            previewMode: s.previewMode,
            charset: s.charset,
          }),
          s.jsonp(n, null);
      }),
      (this.intializeIabStub = function () {
        var t = window;
        s.iabTypeAdded
          ? (void 0 === t.__tcfapi && (window.__tcfapi = s.executeTcfApi),
            s.addIabFrame())
          : s.addBackwardIabFrame(),
          (t.receiveOTMessage = s.receiveIabMessage),
          (t.attachEvent || window.addEventListener)(
            "message",
            t.receiveOTMessage,
            !1,
          );
      }),
      (this.addIabFrame = function () {
        var t = window,
          e = "__tcfapiLocator";
        !t.frames[e] &&
          (t.document.body
            ? s.addLocator(e, "CMP")
            : setTimeout(s.addIabFrame, 5));
      }),
      (this.addBackwardIabFrame = function () {
        var t = window,
          e = "__tcfapiLocator";
        !t.frames[e] &&
          (t.document.body
            ? s.addLocator(e, "TCF")
            : setTimeout(s.addIabFrame, 5));
      }),
      (this.addLocator = function (t, e) {
        var i = window,
          n = i.document.createElement("iframe");
        l(n, "display: none;", !0),
          (n.name = t),
          n.setAttribute("title", e + " Locator"),
          i.document.body.appendChild(n);
      }),
      (this.receiveIabMessage = function (i) {
        var n,
          a,
          t,
          o = "string" == typeof i.data,
          e = {};
        try {
          e = o ? JSON.parse(i.data) : i.data;
        } catch (t) {}
        e.__cmpCall &&
          "IAB2" === s.iabType &&
          console.log(
            "Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1",
          ),
          e.__tcfapiCall &&
            "IAB2" === s.iabType &&
            ((n = e.__tcfapiCall.callId),
            (a = e.__tcfapiCall.command),
            (t = e.__tcfapiCall.parameter),
            (e = e.__tcfapiCall.version),
            s.executeTcfApi(
              a,
              t,
              function (t, e) {
                t = {
                  __tcfapiReturn: {
                    returnValue: t,
                    success: e,
                    callId: n,
                    command: a,
                  },
                };
                i &&
                  i.source &&
                  i.source.postMessage &&
                  i.source.postMessage(o ? JSON.stringify(t) : t, "*");
              },
              e,
            ));
      }),
      (this.executeTcfApi = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (((s.iabType = "IAB2"), !t.length)) return window.__tcfapi.a || [];
        var i = t[0],
          n = t[1],
          a = t[2],
          o = t[3];
        "function" == typeof a &&
          i &&
          ("ping" === i ? s.getPingRequest(a) : s.addToQueue(i, n, a, o));
      }),
      (this.addToQueue = function (t, e, i, n) {
        var a = window,
          o = "__tcfapi";
        (a[o].a = a[o].a || []), a[o].a.push([t, e, i, n]);
      }),
      (this.getPingRequest = function (t, e) {
        var i;
        void 0 === e && (e = !1),
          t &&
            ((i = !(e = {})),
            ("IAB2" !== s.iabType && "IAB2V2" !== s.iabType) ||
              ((e = {
                gdprApplies: p.oneTrustIABgdprAppliesGlobally,
                cmpLoaded: !1,
                cmpStatus: "stub",
                displayStatus: "stub",
                apiVersion: "2.0",
                cmpVersion: void 0,
                cmpId: void 0,
                gvlVersion: void 0,
                tcfPolicyVersion: void 0,
              }),
              (i = !0)),
            t(e, i));
      }),
      (this.getConsentDataRequest = function (t) {
        t &&
          p.IABCookieValue &&
          t(
            {
              gdprApplies: p.oneTrustIABgdprAppliesGlobally,
              hasGlobalScope: p.hasIABGlobalScope,
              consentData: p.IABCookieValue,
            },
            !0,
          );
      }),
      this.initConsentSDK();
  }
  var g = new m();
  return (t.OtSDKStub = m), (t.otSdkStub = g), t;
})({});
