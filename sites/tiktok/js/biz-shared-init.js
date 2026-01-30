"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  ["18754"],
  {
    80701: function (e, t, n) {
      n.d(t, {
        A8: function () {
          return l;
        },
        qk: function () {
          return s;
        },
      });
      var r,
        i = n(54333),
        o = n(42107),
        a = n(3595),
        u = n(3297),
        s = [a.OZ.home, a.OZ.foryou].concat((0, i._)(a.OZ.foryouWithLang));
      ([u.Ob.home, u.Ob.foryou].concat((0, i._)(u.Ob.foryouWithLang)),
        u.Ob.discover,
        u.Ob.topics,
        a.OZ.expansion,
        a.OZ.challenge);
      var c = [u.Ob.report, u.Ob.reportInbox];
      (0, o.A)(Object.values(u.Ob)).filter(function (e) {
        return !c.includes(e);
      });
      var l =
        (((r = {}).Video = "video"),
        (r.User = "user"),
        (r.Challenge = "hashtag"),
        (r.Trending = "fyp"),
        (r.Live = "live"),
        (r.Message = "message"),
        (r.Setting = "setting"),
        (r.Music = "music"),
        (r.SearchResults = "search"),
        (r.Discover = "discover"),
        (r.Following = "following"),
        (r.Topics = "topics"),
        (r.Profile = "profile"),
        (r.Expansion = "expansion"),
        (r.Inbox = "inbox"),
        (r.Report = "report"),
        (r.Feedback = "feedback"),
        (r.ChooseTime = "custom-choose-time"),
        r);
    },
    6037: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
      });
      var r = n(79066),
        i = n(72516),
        o = ["fetch"],
        a = ["includes"],
        u = ["values", "entries", "getOwnPropertyDescriptors"];
      function s() {
        return (0, r._)(function () {
          return (0, i.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                if (!("Promise" in window))
                  return (
                    (window.location.href =
                      "https://www.tiktok.com/unsupported"),
                    [2]
                  );
                if (
                  !o.some(function (e) {
                    return !(e in window);
                  })
                )
                  return [3, 2];
                return [4, n.e("93565").then(n.bind(n, 23596))];
              case 1:
                (e.sent(), (e.label = 2));
              case 2:
                if (
                  !(
                    a.some(function (e) {
                      return !(e in Array.prototype);
                    }) ||
                    u.some(function (e) {
                      return !(e in Object);
                    })
                  )
                )
                  return [3, 4];
                return [
                  4,
                  Promise.all([
                    n.e("61077").then(n.t.bind(n, 99380, 23)),
                    n.e("87490").then(n.t.bind(n, 74617, 23)),
                    n.e("18800").then(n.t.bind(n, 40435, 23)),
                    n.e("50672").then(n.t.bind(n, 53363, 23)),
                  ]),
                ];
              case 3:
                (e.sent(), (e.label = 4));
              case 4:
                return [2];
            }
          });
        })();
      }
    },
    44928: function (e, t, n) {
      n.d(t, {
        $2: function () {
          return l;
        },
        AT: function () {
          return a;
        },
        G2: function () {
          return i;
        },
        WD: function () {
          return s;
        },
        fJ: function () {
          return u;
        },
        l3: function () {
          return c;
        },
        pH: function () {
          return o;
        },
        ws: function () {
          return p;
        },
        zp: function () {
          return d;
        },
      });
      var r = n(94810),
        i = r.h.getPureLivePath,
        o = r.h.getPureMusicPath,
        a = r.h.getPureTagPath,
        u = (r.h.getPureStickerPath, r.h.getPureUserPath),
        s = (r.h.getPureVideoPath, r.h.getPureQuestionPath),
        c = r.A.getPureUniqueId,
        l = (r.A.hasIllegalText, r.A.isPureNumber, r.A.isRealUniqueId),
        p = r.A.purifyMusicName,
        d = r.A.purifyPlainText;
    },
    78263: function (e, t, n) {
      n.d(t, {
        v: function () {
          return c;
        },
      });
      var r = n(48631),
        i = n(73628),
        o = n(90432),
        a = n(10449),
        u = n(81047),
        s = n(72701),
        c = function () {
          var e,
            t,
            n =
              null !=
              (e = (0, a.W)(function () {
                return [
                  "language",
                  "wid",
                  "region",
                  "user",
                  "env",
                  "webIdCreatedTime",
                ];
              }, []))
                ? e
                : null,
            c =
              null !=
              (t = (0, u.U)(function () {
                return ["isMobile", "vregion"];
              }, []))
                ? t
                : null;
          return {
            initCommunicationServiceSDK: (0, i.useCallback)(
              function () {
                if (!n || !c) return !1;
                var e,
                  t,
                  i = n.language,
                  a = n.wid,
                  u = n.region,
                  l = n.user,
                  p = n.env,
                  d = n.webIdCreatedTime,
                  f = c.isMobile,
                  v = c.vregion,
                  _ = {
                    apiDomain: "",
                    appId: 1988,
                    uid: null != (t = null == l ? void 0 : l.uid) ? t : "",
                    wid: null != a ? a : "",
                    lang: null != i ? i : "en",
                    isMobile: null != f && f,
                    WebIdLastTime: String(null != d ? d : ""),
                    region: null != u ? u : "",
                    debug:
                      (null == p ? void 0 : p.type) === "boe" ||
                      (null == p ? void 0 : p.type) === "ppe",
                    deploymentRegion: "-" !== v ? v : void 0,
                    slardarInstance:
                      null === s.ng ||
                      void 0 === s.ng ||
                      null == (e = s.ng._slardar)
                        ? void 0
                        : e.rawInstance(),
                    teaInstance: o.f.getInstance(),
                  };
                try {
                  r.Ay.init(_);
                } catch (e) {
                  return (
                    console.error("init CommunicationServiceSDK failed"),
                    !1
                  );
                }
                return !0;
              },
              [n, c],
            ),
          };
        };
    },
    40577: function (e, t, n) {
      n.d(t, {
        Uk: function () {
          return m;
        },
        _F: function () {
          return d;
        },
        LS: function () {
          return A;
        },
      });
      var r = n(79066),
        i = n(72516),
        o = n(71111),
        a = n(66905),
        u = n(12683),
        s = n(35383),
        c = n(44957),
        l = n(54149);
      function p(e) {
        if (void 0 === e) return {};
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.id_value] = e;
          }),
          t
        );
      }
      var d = "ppf_eligibility_v2",
        f = (0, u.atomWithStorage)(d, void 0, (0, u.createJSONStorage)(), {
          getOnInit: !0,
        });
      f.debugLabel = "eligibility_list_atom";
      var v = (0, o.atom)(
          function (e) {
            return p(e(f));
          },
          function (e, t, n) {
            if (void 0 === n) return void t(f, void 0);
            t(f, Object.values(n));
          },
        ),
        _ = !1,
        g = !1,
        h = (0, a.i)(v, function (e, t) {
          var n = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r._)(function () {
              var n;
              return (0, i.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (g || (_ && !e)) return [2];
                    ((g = !0), (o.label = 1));
                  case 1:
                    return (
                      o.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        (0, r._)(function () {
                          return (0, i.__generator)(this, function (e) {
                            return [
                              2,
                              c.h.post("/tiktok/ppf/api/eligibility/v2", {
                                baseUrlType: l.Z4.FixedWww,
                                headers: (0, s._)({}, l.nk, c.h.csrfToken),
                              }),
                            ];
                          });
                        })(),
                      ]
                    );
                  case 2:
                    return (
                      0 === (n = o.sent()).status_code
                        ? (_ || (_ = !0), t(v, p(n.eligibility_list)))
                        : console.error(
                            "Feature access control not initialized",
                            n,
                          ),
                      [3, 5]
                    );
                  case 3:
                    return (
                      console.error(
                        "Feature access control initialization error",
                        o.sent(),
                      ),
                      [3, 5]
                    );
                  case 4:
                    return (g && (g = !1), [7]);
                  case 5:
                    return [2];
                }
              });
            })();
          };
          return {
            getState: function () {
              return e(v);
            },
            isInitialized: function () {
              return _;
            },
            fetchAndInitialize: function () {
              return (0, r._)(function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, n(!1)];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              })();
            },
            refresh: function () {
              return (0, r._)(function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, n(!0)];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              })();
            },
            updateEligibility: function (n) {
              var r = e(v);
              ((r[n.id_value] = n), t(v, r));
            },
          };
        }),
        m = h.useServiceState,
        A = (h.useServiceDispatchers, h.getStaticApi);
    },
    4991: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
        _K: function () {
          return v;
        },
        Tf: function () {
          return _;
        },
        sc: function () {
          return g;
        },
      });
      var r = n(73628),
        i = n(78263),
        o = n(40577),
        a = n(48631),
        u = n(48748),
        s = n(95170),
        c = n(7120),
        l = (function (e) {
          function t(e) {
            var n;
            return (
              (0, s._)(this, t),
              ((n = (0, u._)(this, t))._config = e),
              n
            );
          }
          (0, c._)(t, e);
          var n = t.prototype;
          return (
            (n.getActionType = function () {
              return a.W9.PPF;
            }),
            (n.processData = function (e) {
              this.dataModel = JSON.parse(e);
            }),
            (n.executeAction = function () {
              this._config.onServerPush(this.dataModel);
            }),
            t
          );
        })(a.Yg),
        p = (function (e) {
          function t(e) {
            var n;
            return (
              (0, s._)(this, t),
              ((n = (0, u._)(this, t))._config = e),
              n
            );
          }
          return (
            (0, c._)(t, e),
            (t.prototype.createAction = function () {
              return new l(this._config);
            }),
            t
          );
        })(a.tL),
        d = (function (e) {
          function t(e) {
            var n;
            return (
              (0, s._)(this, t),
              ((n = (0, u._)(this, t))._config = e),
              n
            );
          }
          (0, c._)(t, e);
          var n = t.prototype;
          return (
            (n.getActionType = function () {
              return a.W9.PPFRefresh;
            }),
            (n.processData = function (e) {}),
            (n.executeAction = function () {
              this._config.onServerPush();
            }),
            t
          );
        })(a.Yg),
        f = (function (e) {
          function t(e) {
            var n;
            return (
              (0, s._)(this, t),
              ((n = (0, u._)(this, t))._config = e),
              n
            );
          }
          return (
            (0, c._)(t, e),
            (t.prototype.createAction = function () {
              return new d(this._config);
            }),
            t
          );
        })(a.tL);
      function v(e) {
        var t,
          n,
          r =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != (n = null == (t = g(e)) ? void 0 : t.is_eligible)
          ? n
          : r;
      }
      function _(e) {
        var t, n;
        return null != (n = null == (t = g(e)) ? void 0 : t.action_list)
          ? n
          : [];
      }
      function g(e) {
        var t = (0, o.Uk)();
        return null == t ? void 0 : t[e];
      }
      function h() {
        var e;
        ((0, r.useEffect)(function () {
          (0, o.LS)().fetchAndInitialize();
        }, []),
          (e = (0, i.v)().initCommunicationServiceSDK),
          (0, r.useEffect)(
            function () {
              var t, n;
              (e(),
                (t = (0, o.LS)().updateEligibility),
                a.Ay.registerActionFactory([
                  { key: a.W9.PPF, instance: new p({ onServerPush: t }) },
                ]),
                (n = (0, o.LS)().refresh),
                a.Ay.registerActionFactory([
                  {
                    key: a.W9.PPFRefresh,
                    instance: new f({ onServerPush: n }),
                  },
                ]));
            },
            [e],
          ));
      }
    },
    54305: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
        c: function () {
          return o;
        },
      });
      var r = n(40577);
      function i() {
        return (0, r.LS)().isInitialized();
      }
      function o() {
        var e;
        null == (e = localStorage) || e.removeItem(r._F);
      }
    },
    38326: function (e, t, n) {
      n.d(t, {
        H: function () {
          return o;
        },
      });
      var r = n(6586),
        i = n(73628);
      function o() {
        var e = (0, r._)((0, i.useState)(0), 2),
          t = e[0],
          n = e[1],
          o = (0, i.useCallback)(function () {
            n(0);
          }, []);
        return {
          popupHeight: t,
          handlePopupShow: (0, i.useCallback)(function (e) {
            n(e);
          }, []),
          handlePopupHide: o,
        };
      }
    },
    41163: function (e, t, n) {
      n.d(t, {
        H: function () {
          return Z;
        },
      });
      var r,
        i,
        o = n(5377),
        a = n(51070),
        u = n(49339),
        s = n(79066),
        c = n(6586),
        l = n(72516),
        p = n(99789),
        d = n(48631),
        f = n(73628),
        v = n(10449),
        _ = n(81047),
        g = n(48748),
        h = n(95170),
        m = n(7120),
        A = (function (e) {
          function t() {
            return ((0, h._)(this, t), (0, g._)(this, t, arguments));
          }
          (0, m._)(t, e);
          var n = t.prototype;
          return (
            (n.getActionType = function () {
              return d.W9.LOGOUT;
            }),
            (n.processData = function (e) {
              this.dataModel = JSON.parse(e);
            }),
            (n.executeAction = function () {
              window.location.href = "https://www.tiktok.com/logout";
            }),
            t
          );
        })(d.Yg),
        y = (function (e) {
          function t() {
            return ((0, h._)(this, t), (0, g._)(this, t, arguments));
          }
          return (
            (0, m._)(t, e),
            (t.prototype.createAction = function () {
              return new A();
            }),
            t
          );
        })(d.tL),
        b = n(79262),
        w = n(94456),
        T = "pns-communication-service",
        S = (((r = {}).CALLBACK = "callback"), (r.H5 = "h5"), r),
        L = (((i = {}).INFO = "info"), (i.ACTION = "action"), i),
        k = n(99247);
      function P(e) {
        var t = e.link,
          n = e.lang;
        return t.replace("${locale}", n);
      }
      function E(e) {
        if (e) return { url: e, width: "auto", height: "48px" };
      }
      var C = n(90432),
        I = function (e) {
          var t = e.data,
            n = e.uiConfig,
            r = n.isDark,
            i = n.direction,
            o = n.showFullSideNav,
            u = n.debug,
            s = n.deploymentRegion;
          return (
            t &&
            (0, a.Y)(k.GP, {
              eventReport: C.f.event.bind(C.f),
              pnsPopupConfig: t,
              colorScheme: r ? "dark" : "light",
              textDirection: void 0 === i ? "ltr" : i,
              componentConfig: o ? { pcBanner: { topOffset: "0" } } : void 0,
              monitorConfig: {
                sdkConfig: {
                  bid: "pns_communication_service",
                  debug: u,
                  appId: 1988,
                  deploymentRegion: s,
                },
              },
            })
          );
        },
        V = (function (e) {
          function t(e) {
            var n;
            return (
              (0, h._)(this, t),
              ((n = (0, g._)(this, t))._onActionCallbackV1 = function (e, t) {
                if (t.callback) {
                  var r = {
                    business: e.business,
                    policy_version: e.policyVersion,
                    style: n._style,
                    extra: t.extra,
                    operation: t.operation,
                  };
                  d.Ay.sendCallbackRequest(r);
                }
              }),
              (n._onActionCallbackV2 = function (e, t) {
                if (t.callback) {
                  if (n._extraData)
                    try {
                      var r,
                        i,
                        o = JSON.parse(n._extraData);
                      if (
                        (void 0 === o ? "undefined" : (0, b._)(o)) ===
                          "object" &&
                        null !== o
                      ) {
                        var a = null;
                        (t.actionId && (a = o[t.actionId] || null),
                          a && ((i = a.operation), (r = JSON.stringify(a))));
                      }
                    } catch (e) {
                      console.error("Failed to parse _extraData:", e);
                    }
                  var u = {
                    business: e.business,
                    policy_version: e.policyVersion,
                    style: n._style,
                    extra: r,
                    operation: i,
                  };
                  d.Ay.sendCallbackRequest(u);
                }
              }),
              (n._onDismissCallback = function () {
                n.completeAction();
              }),
              (n._uiConfig = e),
              n
            );
          }
          (0, m._)(t, e);
          var n = t.prototype;
          return (
            (n.getActionType = function () {
              return d.W9.POPUP;
            }),
            (n._generatePopupDataV1 = function (e) {
              var t = {
                eventInfo: { style: e.style, business: e.business },
                popupType: e.style,
                title: e.title,
                icon: E(e.icon_url),
                iconDark: E(e.icon_url_dark),
                body: (function (e) {
                  var t = e.lang,
                    n = e.body,
                    r = e.bodyLinks;
                  if (n) {
                    if (!r || 0 === r.length)
                      return [{ type: k.Vq.TEXT, text: n }];
                    var i = [],
                      o = 0,
                      a = /%s/g;
                    return (
                      r.forEach(function (e) {
                        var r,
                          u = e.name,
                          s = e.link,
                          c = void 0 === s ? "" : s,
                          l = e.operation,
                          p = e.dismiss,
                          d = e.approve,
                          f = e.new_web_tab,
                          v = e.extra,
                          _ = e.link_type,
                          g = e.color,
                          h = a.exec(n);
                        if (h) {
                          var m = P({ link: c, lang: t }),
                            A = _ === S.CALLBACK || d;
                          r = c
                            ? f
                              ? k.Uc.LINK_EXTERNAL
                              : k.Uc.LINK_INTERNAL
                            : "";
                          var y = {
                            type: c ? k.Vq.LINK : k.Vq.BUTTON,
                            text: u,
                            link: m,
                            linkType: f ? k.J.EXTERNAL : k.J.INTERNAL,
                            action: {
                              actionType: r,
                              link: m,
                              dismiss: !!(d || p),
                              callback: A,
                              extra: v,
                              operation: l,
                            },
                            color: g,
                          };
                          (i.push({
                            type: k.Vq.TEXT,
                            text: n.slice(o, h.index),
                          }),
                            i.push(y),
                            (o = Number(h.index) + h[0].length));
                        }
                      }),
                      i.push({ type: k.Vq.TEXT, text: n.slice(o) }),
                      i
                    );
                  }
                })({
                  lang: this.lang,
                  body: e.body,
                  bodyLinks: e.body_link_list,
                }),
                buttons: (function (e) {
                  var t = e.lang,
                    n = e.first_button_highlight,
                    r = e.rawButtons;
                  if (0 !== r.length) {
                    var i = [];
                    return (
                      r.forEach(function (e, r) {
                        var o,
                          a = e.text,
                          u = e.is_bold,
                          s = e.link_type,
                          c = e.link,
                          l = e.extra,
                          p = e.approve,
                          d = e.operation,
                          f = e.dismiss,
                          v = e.dismiss_all,
                          _ = e.new_web_tab,
                          g = e.is_close_style,
                          h = s === S.CALLBACK || p;
                        o = c
                          ? _
                            ? k.Uc.LINK_EXTERNAL
                            : k.Uc.LINK_INTERNAL
                          : "";
                        var m = {
                          text: a,
                          isCloseStyle: g,
                          isBold: !!u,
                          isHighlight: 0 === r && n,
                          link: c ? P({ link: c, lang: t }) : void 0,
                          linkType: _ ? k.J.EXTERNAL : k.J.INTERNAL,
                          action: {
                            actionType: o,
                            link: c ? P({ link: c, lang: t }) : void 0,
                            dismiss: !!(p || f || v),
                            callback: h,
                            extra: l,
                            operation: d,
                          },
                        };
                        i.push(m);
                      }),
                      i
                    );
                  }
                })({
                  lang: this.lang,
                  first_button_highlight: !!e.first_button_highlight,
                  rawButtons: e.actions || [],
                }),
              };
              return ((this._style = e.style), t);
            }),
            (n._processV1ResData = function (e) {
              return {
                metaData: {
                  business: e.business,
                  popup_id: e.business,
                  policyVersion: e.policy_version,
                },
                popupData: this._generatePopupDataV1(e),
                callback: {
                  onAction: this._onActionCallbackV1,
                  onDismiss: this._onDismissCallback,
                },
              };
            }),
            (n._generateBlocks = function (e) {
              var t = this,
                n = [];
              return (
                e.forEach(function (e) {
                  var r = {
                      marginLeft:
                        null == (o = e.format) ? void 0 : o.margin_left,
                      marginRight:
                        null == (a = e.format) ? void 0 : a.margin_right,
                      marginTop: null == (u = e.format) ? void 0 : u.margin_top,
                      marginBottom:
                        null == (s = e.format) ? void 0 : s.margin_bottom,
                      paddingLeft:
                        null == (c = e.format) ? void 0 : c.padding_left,
                      paddingRight:
                        null == (l = e.format) ? void 0 : l.padding_right,
                      paddingTop:
                        null == (p = e.format) ? void 0 : p.padding_top,
                      paddingBottom:
                        null == (d = e.format) ? void 0 : d.padding_bottom,
                      cornerRadius:
                        null == (f = e.format) ? void 0 : f.corner_radius,
                      cornerPosition:
                        null == (v = e.format) ? void 0 : v.corner_position,
                    },
                    i = new Map();
                  switch (e.type) {
                    case L.ACTION:
                      [
                        {
                          name: "action_left",
                          rawAction:
                            null == (_ = e.elements) ? void 0 : _.action_left,
                        },
                        {
                          name: "action_center",
                          rawAction:
                            null == (g = e.elements) ? void 0 : g.action_center,
                        },
                        {
                          name: "action_right",
                          rawAction:
                            null == (h = e.elements) ? void 0 : h.action_right,
                        },
                      ].forEach(function (n) {
                        var r = n.name,
                          o = n.rawAction;
                        if (o) {
                          var a,
                            u,
                            s,
                            c,
                            l,
                            p,
                            d,
                            f,
                            v,
                            _,
                            g,
                            h,
                            m,
                            A = (null == (a = o.action) ? void 0 : a.id)
                              ? "".concat(e.id, "_").concat(o.action.id)
                              : null == (u = o.action)
                                ? void 0
                                : u.id,
                            y = {
                              subtype: null != (g = o.subtype) ? g : "",
                              action: {
                                actionType:
                                  null !=
                                  (h =
                                    null == (c = o.action) ||
                                    null == (s = c.action_type)
                                      ? void 0
                                      : s[0])
                                    ? h
                                    : "",
                                actionId: A,
                                link: P({
                                  link:
                                    null !=
                                    (m =
                                      null == (l = o.action) ? void 0 : l.link)
                                      ? m
                                      : "",
                                  lang: t.lang,
                                }),
                                dismiss:
                                  null == (p = o.action) ? void 0 : p.dismiss,
                                defaultOn:
                                  null == (d = o.action)
                                    ? void 0
                                    : d.default_on,
                                callback:
                                  null == (f = o.action) ? void 0 : f.callback,
                                extra:
                                  null == (v = o.action) ? void 0 : v.extra,
                                isHighlighted:
                                  null == (_ = o.action)
                                    ? void 0
                                    : _.is_highlighted,
                              },
                              text: o.text,
                            };
                          i.set(r, y);
                        }
                      });
                      break;
                    case L.INFO:
                    default:
                      if (null == (m = e.elements) ? void 0 : m.content) {
                        var o,
                          a,
                          u,
                          s,
                          c,
                          l,
                          p,
                          d,
                          f,
                          v,
                          _,
                          g,
                          h,
                          m,
                          A,
                          y = e.elements.content,
                          b = {
                            subtype: null != (A = y.subtype) ? A : "",
                            text: y.text,
                            font: y.font,
                            align: y.align,
                            iconUrl: y.icon_url,
                            iconUrlDark: y.icon_url_dark,
                            iconStyle: y.icon_style,
                            groupId: y.group_id,
                            bodyLinks: (function (e) {
                              var t = e.links,
                                n = e.lang,
                                r = e.blockId;
                              if (t && 0 !== t.length) {
                                var i = [];
                                return (
                                  t.forEach(function (e) {
                                    var t,
                                      o,
                                      a,
                                      u = e.text,
                                      s = e.action,
                                      c = e.color,
                                      l =
                                        s.id && r
                                          ? "".concat(r, "_").concat(s.id)
                                          : s.id,
                                      p = {
                                        name: u,
                                        action: {
                                          actionType:
                                            null !=
                                            (o =
                                              null == (t = s.action_type)
                                                ? void 0
                                                : t[0])
                                              ? o
                                              : "",
                                          actionId: l,
                                          link: P({
                                            link: null != (a = s.link) ? a : "",
                                            lang: n,
                                          }),
                                          dismiss: s.dismiss,
                                          defaultOn: s.default_on,
                                          callback: s.callback,
                                          extra: s.extra,
                                          operation: s.operation,
                                          isHighlighted: s.is_highlighted,
                                        },
                                        color: c,
                                      };
                                    i.push(p);
                                  }),
                                  i
                                );
                              }
                            })({
                              links: y.body_links,
                              lang: t.lang,
                              blockId: e.id,
                            }),
                          };
                        i.set("content", b);
                      }
                  }
                  var w = { id: e.id, type: e.type, format: r, elements: i };
                  n.push(w);
                }),
                n
              );
            }),
            (n._generateBlockData = function (e) {
              var t,
                n,
                r,
                i = {
                  topPinnedBlocks: this._generateBlocks(
                    null != (t = e.top_pinned_blocks) ? t : [],
                  ),
                  blocks: this._generateBlocks(null != (n = e.blocks) ? n : []),
                  bottomPinnedBlocks: this._generateBlocks(
                    null != (r = e.bottom_pinned_blocks) ? r : [],
                  ),
                  style: e.style,
                  upperRightClose: e.upper_right_close,
                  upperLeftBack: e.upper_left_back,
                  dismissOutside: e.dismiss_click_outside,
                  minWidth: e.minimum_width ? Number(e.minimum_width) : void 0,
                };
              return ((this._style = e.style), i);
            }),
            (n._processV2ResData = function (e) {
              var t, n, r, i, o;
              return (
                (this._extraData = null == (t = e.popup_ui) ? void 0 : t.extra),
                {
                  metaData: {
                    business: null == (n = e.popup_meta) ? void 0 : n.business,
                    popup_id: null == (r = e.popup_meta) ? void 0 : r.popup_id,
                    policyVersion:
                      null !=
                      (o = null == (i = e.popup_meta) ? void 0 : i.version)
                        ? o
                        : "",
                  },
                  blockData: this._generateBlockData(e.popup_ui),
                  callback: {
                    onAction: this._onActionCallbackV2,
                    onDismiss: this._onDismissCallback,
                  },
                }
              );
            }),
            (n.processData = function (e) {
              var t = JSON.parse(e),
                n = t.popup_responses,
                r = t.policy_notices;
              n && 0 !== n.length
                ? (this.dataModel = this._processV2ResData(n[0]))
                : r &&
                  0 !== r.length &&
                  (this.dataModel = this._processV1ResData(r[0]));
            }),
            (n.executeAction = function () {
              var e = document.getElementById(T),
                t = (0, a.Y)(I, {
                  data: this.dataModel,
                  uiConfig: this._uiConfig,
                });
              if (e) w.render(t, e);
              else throw Error("popup action error: no root element found");
            }),
            t
          );
        })(d.Yg),
        O = (function (e) {
          function t(e) {
            var n;
            return (
              (0, h._)(this, t),
              ((n = (0, g._)(this, t))._uiConfig = e),
              n
            );
          }
          return (
            (0, m._)(t, e),
            (t.prototype.createAction = function () {
              return new V(this._uiConfig);
            }),
            t
          );
        })(d.tL),
        M = n(78263),
        R = function () {
          var e,
            t,
            n = (0, M.v)().initCommunicationServiceSDK,
            r = (0, p.u)(),
            i = r.isDark,
            o = r.direction,
            g = (0, u.vYE)().showFullSideNav,
            h = (
              null !=
              (e = (0, v.W)(function () {
                return ["env"];
              }, []))
                ? e
                : {}
            ).env,
            m = (
              null !=
              (t = (0, _.U)(function () {
                return ["vregion"];
              }, []))
                ? t
                : {}
            ).vregion,
            A = (0, c._)((0, f.useState)(!1), 2),
            b = A[0],
            w = A[1];
          return (
            (0, f.useEffect)(
              function () {
                (w(n()),
                  d.Ay.registerActionFactory([
                    {
                      key: d.W9.POPUP,
                      instance: new O({
                        showFullSideNav: g,
                        isDark: i,
                        direction: o,
                        debug:
                          (null == h ? void 0 : h.type) === "boe" ||
                          (null == h ? void 0 : h.type) === "ppe",
                        deploymentRegion: "-" !== m ? m : void 0,
                      }),
                    },
                    { key: d.W9.LOGOUT, instance: new y() },
                  ]));
              },
              [n, i, o, g, h, m],
            ),
            (0, f.useEffect)(
              function () {
                b &&
                  (0, s._)(function () {
                    var e;
                    return (0, l.__generator)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, d.Ay.execute(d.aZ.COLD_START)];
                        case 1:
                          return (
                            t.sent(),
                            ((e = document.createElement("div")).id =
                              "pns-communication-ready"),
                            document.body.appendChild(e),
                            [2]
                          );
                      }
                    });
                  })();
              },
              [b],
            ),
            (0, a.Y)("div", { id: T })
          );
        },
        x = n(4991),
        W = n(41386),
        F = n(54333),
        q = n(94279),
        D = n(54305),
        U = function () {
          var e = (0, M.v)().initCommunicationServiceSDK,
            t = (0, D.$)(),
            n = (0, x.Tf)("account_control"),
            r = (0, x.Tf)("user_notice"),
            i = (0, F._)(n).concat((0, F._)(r)),
            o = i.map(function (e) {
              return e.processor;
            }),
            a = (0, c._)((0, f.useState)(!1), 2),
            u = a[0],
            s = a[1];
          ((0, f.useEffect)(function () {
            var e = document.body;
            if (e) {
              var t = new MutationObserver(function (e) {
                var n = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (
                    var o, a = e[Symbol.iterator]();
                    !(n = (o = a.next()).done);
                    n = !0
                  ) {
                    var u = o.value;
                    if ("childList" === u.type) {
                      var c = !0,
                        l = !1,
                        p = void 0;
                      try {
                        for (
                          var d, f = u.addedNodes[Symbol.iterator]();
                          !(c = (d = f.next()).done);
                          c = !0
                        ) {
                          var v = d.value;
                          if (
                            (0, W._)(v, HTMLDivElement) &&
                            "pns-communication-ready" === v.id
                          ) {
                            (s(!0), t.disconnect());
                            break;
                          }
                        }
                      } catch (e) {
                        ((l = !0), (p = e));
                      } finally {
                        try {
                          c || null == f.return || f.return();
                        } finally {
                          if (l) throw p;
                        }
                      }
                    }
                  }
                } catch (e) {
                  ((r = !0), (i = e));
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (r) throw i;
                  }
                }
              });
              return (
                t.observe(e, { childList: !0, subtree: !0 }),
                function () {
                  return t.disconnect();
                }
              );
            }
          }, []),
            (0, f.useEffect)(
              function () {
                e();
              },
              [e],
            ),
            (0, f.useEffect)(
              function () {
                t &&
                  u &&
                  o.forEach(function (e) {
                    switch (e) {
                      case "PopupAPIProcessor":
                        var t = i.find(function (e) {
                          return "PopupAPIProcessor" === e.processor;
                        });
                        d.Ay.execute(d.aZ.PULL, {
                          extra: null == t ? void 0 : t.params,
                        });
                        break;
                      case "LogoutProcessor":
                        var n = i.find(function (e) {
                          return "LogoutProcessor" === e.processor;
                        });
                        if (n && "LogoutProcessor" === n.processor)
                          try {
                            var r,
                              o = JSON.parse(null != (r = n.params) ? r : "{}");
                            (null == o ? void 0 : o.webapp) &&
                              ((0, D.c)(), (0, q.i)());
                          } catch (e) {}
                    }
                  });
              },
              [t].concat((0, F._)(o), [u]),
            ));
        },
        N = function () {
          return ((0, x.E)(), U(), null);
        },
        B = n(8707),
        j = n(96057),
        $ = n(39117),
        G = function (e) {
          var t,
            n,
            r = e.onHide,
            i = e.hideByDefault,
            o = (0, f.useRef)(!1),
            s = (0, c._)((0, f.useState)(!1), 2),
            l = s[0],
            d = s[1],
            g = (0, f.useCallback)(
              function () {
                (null == r || r(), d(!1));
              },
              [r],
            ),
            h =
              null !=
              (t = (0, v.W)(function () {
                return ["language", "wid", "region"];
              }, []))
                ? t
                : {},
            m = h.language,
            A = h.wid,
            y = h.region,
            b = (
              null !=
              (n = (0, _.U)(function () {
                return ["isMobile"];
              }, []))
                ? n
                : {}
            ).isMobile,
            w = (0, p.u)(),
            T = w.isDark,
            S = w.direction,
            L = (0, u.vYE)().showFullSideNav,
            P = (0, f.useCallback)(function (e) {
              o.current ||
                ((o.current = !0),
                (0, k.Fd)({ scene: 555, extra: JSON.stringify(e) }).catch(
                  null,
                ));
            }, []),
            E = (0, f.useCallback)(function (e) {
              (0, k.Fd)({ scene: 555, extra: JSON.stringify(e) }).catch(null);
            }, []);
          if (
            ((0, f.useEffect)(
              function () {
                return (
                  $.LZ.on($.Rh, (0, j.A)(P, 2e3)),
                  $.LZ.on($.gk, (0, j.A)(E, 2e3)),
                  function () {
                    ($.LZ.clear($.Rh), $.LZ.clear($.gk));
                  }
                );
              },
              [P, E],
            ),
            !A || !y || !m)
          )
            return null;
          var I = {
            appId: 1988,
            wid: A,
            isMobile: b,
            region: y,
            lang: m,
            apiDomain: "https://www.tiktok.com",
            apiPath: B.POPUP_API_V1,
          };
          return (0, a.Y)("div", {
            id: "web-universal-popup",
            children: (0, a.Y)(k.IC, {
              eventReport: C.f.event.bind(C.f),
              noFetchDataAtInit: i,
              SDKConfig: I,
              visible: l,
              colorScheme: T ? "dark" : "light",
              textDirection: S,
              onReadyToClose: g,
              onReadyToShow: function () {
                return d(!0);
              },
              componentConfig: L ? { pcBanner: { topOffset: "0" } } : void 0,
            }),
          });
        },
        Z = function (e) {
          return (0, u.KKS)()
            ? (0, a.FD)(a.FK, { children: [(0, a.Y)(R, {}), (0, a.Y)(N, {})] })
            : (0, a.Y)(G, (0, o._)({}, e));
        };
    },
    13788: function (e, t, n) {
      n.d(t, {
        B9: function () {
          return c;
        },
        OK: function () {
          return u;
        },
        Pl: function () {
          return l;
        },
        Rj: function () {
          return a;
        },
        Rp: function () {
          return s;
        },
        Vb: function () {
          return p;
        },
      });
      var r = n(79066),
        i = n(6586),
        o = n(72516);
      function a(e, t) {
        var n = (function (e) {
          var t = [],
            n = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var a, u = Object.entries(e)[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            ) {
              var s = (0, i._)(a.value, 1)[0],
                c = "".concat(s, "=").concat(encodeURIComponent(e[s]));
              t.push(c);
            }
          } catch (e) {
            ((r = !0), (o = e));
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (r) throw o;
            }
          }
          return t.join("&");
        })(t);
        return e.indexOf("?") > -1
          ? "".concat(e, "&").concat(n)
          : "".concat(e, "?").concat(n);
      }
      function u(e, t) {
        var n = {},
          r = (function (e) {
            if ("string" != typeof e) return e;
            var t = {};
            try {
              t = JSON.parse(e);
            } catch (e) {
              return {};
            }
            return t;
          })(e),
          o = !0,
          a = !1,
          u = void 0;
        try {
          for (
            var s, c = Object.entries(r)[Symbol.iterator]();
            !(o = (s = c.next()).done);
            o = !0
          ) {
            var l = (0, i._)(s.value, 1)[0],
              p = r[l];
            if ("string" == typeof p) {
              for (
                var d, f = p.split("."), v = t;
                f.length > 0 && void 0 !== v;
              )
                v = v[null != (d = f.shift()) ? d : ""];
              n[l] = v;
            }
          }
        } catch (e) {
          ((a = !0), (u = e));
        } finally {
          try {
            o || null == c.return || c.return();
          } finally {
            if (a) throw u;
          }
        }
        return n;
      }
      function s(e, t) {
        if (void 0 !== t) {
          var n = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var o, a = e[Symbol.iterator]();
              !(n = (o = a.next()).done);
              n = !0
            ) {
              var u = o.value;
              if (t === u.reason_code) return u;
            }
          } catch (e) {
            ((r = !0), (i = e));
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (r) throw i;
            }
          }
        }
        return null;
      }
      function c(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e,
        );
      }
      function l(e) {
        return ["live", "live_comment", "live_star_comment"].includes(e);
      }
      var p = function (e, t, i) {
        if (null == t || !t.need_captcha || null == t || !t.decision_conf)
          return Promise.resolve();
        var a,
          u = JSON.parse(t.decision_conf).region;
        switch (u) {
          case "ttp":
          case "ttp2":
            a = n.e("99513").then(n.bind(n, 10906));
            break;
          case "in":
          case "ie":
          case "ie2":
            a = n.e("53174").then(n.bind(n, 17819));
            break;
          default:
            a = n.e("5643").then(n.bind(n, 41002));
        }
        null == a ||
          a.then(function (n) {
            return (0, r._)(function () {
              var r;
              return (0, o.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, n.getFp()];
                  case 1:
                    return (
                      (r = o.sent()),
                      n.init(
                        {
                          commonOptions: { aid: 1988, iid: "0", did: e },
                          captchaOptions: {
                            fp: r,
                            showMode: "mask",
                            successCb: function () {
                              (console.log("verification passed, retry report"),
                                null == i || i());
                            },
                          },
                        },
                        function () {
                          console.log(
                            "verification sdk (region: "
                              .concat(u, ", wid: ")
                              .concat(e, ") initialize successfully"),
                          );
                        },
                        function (t) {
                          console.log(
                            "verification sdk (region: "
                              .concat(u, ", wid: ")
                              .concat(e, ") initialize failed"),
                            t,
                          );
                        },
                      ),
                      n.render({ verify_data: t.decision_conf }),
                      [2]
                    );
                }
              });
            })();
          });
      };
    },
    49339: function (e, t, n) {
      n.d(t, {
        EgB: function () {
          return tS;
        },
        vpk: function () {
          return ty;
        },
        Vs9: function () {
          return tj;
        },
        oJW: function () {
          return H;
        },
        qlL: function () {
          return ne;
        },
        tcM: function () {
          return el;
        },
        Q5W: function () {
          return e9;
        },
        gR3: function () {
          return G;
        },
        E1k: function () {
          return ti;
        },
        Fly: function () {
          return eU;
        },
        lZ1: function () {
          return tf;
        },
        ZOE: function () {
          return eA;
        },
        lwy: function () {
          return nr;
        },
        $r3: function () {
          return eg;
        },
        cVR: function () {
          return tD;
        },
        Dd5: function () {
          return nn;
        },
        k05: function () {
          return tl;
        },
        M4n: function () {
          return ei;
        },
        VkO: function () {
          return tJ;
        },
        T8z: function () {
          return ev;
        },
        aUT: function () {
          return t8;
        },
        oJN: function () {
          return tB;
        },
        Ftt: function () {
          return t3;
        },
        cEO: function () {
          return D;
        },
        W8W: function () {
          return ns;
        },
        fHK: function () {
          return e0;
        },
        jwS: function () {
          return ex;
        },
        prK: function () {
          return e1;
        },
        rqU: function () {
          return e6;
        },
        eZs: function () {
          return eX;
        },
        aQG: function () {
          return tX;
        },
        tUU: function () {
          return tz;
        },
        RC$: function () {
          return eb;
        },
        Avr: function () {
          return nd;
        },
        ZTF: function () {
          return tA;
        },
        c8: function () {
          return tW;
        },
        NYA: function () {
          return Z;
        },
        QNq: function () {
          return td;
        },
        FIz: function () {
          return tV;
        },
        mzi: function () {
          return nt;
        },
        BMt: function () {
          return eT;
        },
        ejr: function () {
          return nu;
        },
        EqO: function () {
          return eZ;
        },
        scK: function () {
          return t7;
        },
        oc: function () {
          return ed;
        },
        o53: function () {
          return t6;
        },
        ZOK: function () {
          return eV;
        },
        ZJN: function () {
          return t9;
        },
        Kjk: function () {
          return eR;
        },
        T4d: function () {
          return tw;
        },
        eb3: function () {
          return ey;
        },
        JBK: function () {
          return J;
        },
        xK7: function () {
          return tx;
        },
        bb3: function () {
          return no;
        },
        JXM: function () {
          return eq;
        },
        _bc: function () {
          return tn;
        },
        wXb: function () {
          return eW;
        },
        KSM: function () {
          return ee;
        },
        WOe: function () {
          return Y;
        },
        mf1: function () {
          return tC;
        },
        APT: function () {
          return eO;
        },
        URi: function () {
          return tQ;
        },
        fsB: function () {
          return e3;
        },
        T3x: function () {
          return nl;
        },
        Pl8: function () {
          return ez;
        },
        QFN: function () {
          return na;
        },
        tcd: function () {
          return es;
        },
        gyO: function () {
          return tY;
        },
        Eg6: function () {
          return nf;
        },
        rlS: function () {
          return tO;
        },
        ykb: function () {
          return eH;
        },
        PV8: function () {
          return eI;
        },
        acM: function () {
          return K;
        },
        vkb: function () {
          return tH;
        },
        Jlu: function () {
          return e5;
        },
        Whe: function () {
          return j;
        },
        sFF: function () {
          return eh;
        },
        tj4: function () {
          return tP;
        },
        s0Q: function () {
          return eB;
        },
        reW: function () {
          return t2;
        },
        kbv: function () {
          return eo;
        },
        ulz: function () {
          return eP;
        },
        kG$: function () {
          return nc;
        },
        ylw: function () {
          return tu;
        },
        fHb: function () {
          return tp;
        },
        WE4: function () {
          return eQ;
        },
        zyj: function () {
          return tT;
        },
        kwr: function () {
          return ec;
        },
        Gey: function () {
          return th;
        },
        HhM: function () {
          return eE;
        },
        lPE: function () {
          return er;
        },
        hn: function () {
          return eN;
        },
        Pk: function () {
          return tk;
        },
        mTt: function () {
          return tL;
        },
        euY: function () {
          return eF;
        },
        $4L: function () {
          return tE;
        },
        EoX: function () {
          return F;
        },
        TFl: function () {
          return t1;
        },
        lki: function () {
          return nv;
        },
        AdC: function () {
          return eM;
        },
        ngG: function () {
          return eJ;
        },
        rAu: function () {
          return tK;
        },
        Yud: function () {
          return ep;
        },
        jCA: function () {
          return eK;
        },
        QYZ: function () {
          return tt;
        },
        QcT: function () {
          return ef;
        },
        OQi: function () {
          return e8;
        },
        vYE: function () {
          return tI;
        },
        AAM: function () {
          return e2;
        },
        JAg: function () {
          return tZ;
        },
        bsr: function () {
          return tb;
        },
        vh1: function () {
          return ta;
        },
        Vns: function () {
          return tM;
        },
        bbb: function () {
          return ni;
        },
        pJf: function () {
          return tG;
        },
        izJ: function () {
          return eC;
        },
        pCP: function () {
          return tm;
        },
        c89: function () {
          return ea;
        },
        Rp$: function () {
          return np;
        },
        Vv$: function () {
          return e7;
        },
        tYB: function () {
          return ts;
        },
        Sc: function () {
          return N;
        },
        q6o: function () {
          return eu;
        },
        zDU: function () {
          return eL;
        },
        kTC: function () {
          return eD;
        },
        KKS: function () {
          return tN;
        },
        ycN: function () {
          return tc;
        },
        d18: function () {
          return ek;
        },
        HWN: function () {
          return t$;
        },
        l28: function () {
          return et;
        },
        u98: function () {
          return q;
        },
        NF3: function () {
          return to;
        },
        aLB: function () {
          return e$;
        },
        xZG: function () {
          return $;
        },
        Rym: function () {
          return Q;
        },
        kbf: function () {
          return U;
        },
        EyK: function () {
          return tF;
        },
        FTg: function () {
          return eS;
        },
        jCE: function () {
          return t0;
        },
        r6I: function () {
          return ew;
        },
        JcC: function () {
          return X;
        },
        W3$: function () {
          return en;
        },
        bx6: function () {
          return te;
        },
        O_v: function () {
          return em;
        },
        lYd: function () {
          return t4;
        },
        _og: function () {
          return eY;
        },
        y9g: function () {
          return z;
        },
        W4t: function () {
          return B;
        },
        HLh: function () {
          return tq;
        },
        Fb5: function () {
          return tU;
        },
        Kg7: function () {
          return ej;
        },
        fyk: function () {
          return e4;
        },
        ZC0: function () {
          return e_;
        },
        gQs: function () {
          return tr;
        },
        QzJ: function () {
          return t5;
        },
        aOe: function () {
          return tR;
        },
      });
      var r = n(5377),
        i = n(45996),
        o = n(6586),
        a = n(54333),
        u = n(85943),
        s = n(73628),
        c = n(10874),
        l = n(73515),
        p = n(40832),
        d = n(3595),
        f = n(12499),
        v = n(19904),
        _ = n(50144),
        g = n(53069),
        h = n(8710),
        m = n(18397),
        A = n(80660),
        y = n(10449),
        b = n(67500),
        w = n(81047),
        T = n(22606),
        S = n(21708),
        L = n(9602),
        k = n(22174),
        P = n(22481),
        E = n(95086),
        C = n(87611),
        I = n(26045),
        V = n(238),
        O = n(87825),
        M = n(70721),
        R = n(3660),
        x = n(33772),
        W = "abTestVersion";
      function F() {
        return { isMobileUiOptimize: !(0, O.Qt)().isSmartPlayer };
      }
      function q() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion;
        return {
          newTTStudioDesignEnabled:
            "v1" ===
            (null != (e = (0, b.qt)(t, "redesign_studio_entry_on_tt_web"))
              ? e
              : "v0"),
        };
      }
      var D = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return [W];
              }, []),
            ).abTestVersion;
          return {
            hasNonPersonalizedMenu:
              "v2" === (null != (e = (0, b.qt)(t, h.W$)) ? e : "v1"),
          };
        },
        U = function (e) {
          var t,
            n,
            r = (0, A.L$)(
              (0, y.W)(function () {
                return [W];
              }, []),
            ).abTestVersion,
            i = null != (t = (0, b.qt)(r, "desktop_ui_reply")) ? t : "v1",
            o =
              null != (n = (0, b.qt)(r, "desktop_avatar_nick_name")) ? n : "v1",
            a = (0, b.TQ)("desktop_ui_opt_debug") && !e,
            u = "v5" === i,
            s = "v6" === i;
          return {
            shouldAvatarShowNickName: "v2" === o,
            shouldOptimizeCta: "v2" === i || u,
            allowRightPanelScroll: u || s,
            shouldOptimizeReply: u || s,
            onlyOptimizeCta: "v2" === i,
            shouldShowCommentsCnt: "v2" === i || "v3" === i || u || s,
            isDesktopUiOptDebugOn: a,
            shouldIncludeV3V4: s,
          };
        };
      function N() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion,
          n = (0, A.L$)(
            (0, w.U)(function () {
              return ["videoPlayerConfig"];
            }, []),
          ).videoPlayerConfig;
        return {
          isUseNativePlayer: null == n ? void 0 : n.fallback,
          adaptBitrateVid:
            null != (e = (0, b.qt)(t, "video_bitrate_adapt")) ? e : "v1",
        };
      }
      function B() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion;
        return null != (e = (0, b.qt)(t, "xg_volume_test")) ? e : "v1";
      }
      function j() {
        var e,
          t,
          n = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion,
          r = null != (e = (0, b.qt)(n, "feed_scroll_opt")) ? e : "v0";
        return {
          hasLimitedItem: "v1" === r,
          hasMultiPlayerIns:
            "v2" ===
            (null != (t = (0, T.S)(n, "multiple_ins_model")) ? t : "v0"),
          hasOptForFeed: "v1" === r,
        };
      }
      function $() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion,
          n = null != (e = (0, b.qt)(t, "multiple_ins_new")) ? e : "v0",
          r = (0, m.fL)().hardwareScore;
        return {
          hasRetainIns: "v4" === n && r > 8.5,
          hasBackupIns:
            "v1" === n ||
            ("v2" === n && r >= 5) ||
            ("v3" === n && r >= 6) ||
            "v4" === n,
        };
      }
      function G() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion,
          n = null != (e = (0, b.qt)(t, "remove_tooltip")) ? e : "v0";
        return {
          removeUploadPop: "v1" === n,
          removeLivePop: "v1" === n,
          removeEditProfilePop: "v1" === n,
          removeOtherPop: "v4" === n,
          removeShortcutPop: "v5" === n,
        };
      }
      function Z() {
        return {
          playerInitHost: (0, A.L$)(
            (0, w.U)(function () {
              return ["xgplayerInitHost"];
            }, []),
          ).xgplayerInitHost,
        };
      }
      function H() {
        var e = (0, A.L$)(
          (0, w.U)(function () {
            return ["videoOrder"];
          }, []),
        ).videoOrder;
        return { videoOrder: null == e ? void 0 : e.videoOrder };
      }
      function K() {
        var e = (0, c.useLocation)().pathname,
          t = (0, R.Ig)() ? "v1" : "v2",
          n = (0, S.Fj)(e),
          r = "v1" !== t,
          i = "v1" !== t;
        return {
          isVideoPlayerOptimization: r,
          hasPip: i,
          isUIOptimization: !1,
          isVideoDetailUIOptimization: !1,
          hasVideoDetailPip: i && n,
          isVideoDetailExperiment: "v1" !== t && n,
          isVideoDetailPlayerExperiment: r && n,
        };
      }
      var Y = function (e) {
          if (!e) return {};
          var t = e.id,
            n = e.type,
            r = e.isClaimed,
            i = e.cityCode,
            o = e.countryCode,
            a = e.ttTypeNameSuper,
            u = e.ttTypeNameMedium,
            s = e.ttTypeNameTiny,
            c = e.ttTypeCode,
            l = e.typeCode;
          return {
            poi_id: t,
            poi_backend_type: n,
            poi_detail_type: _.Af[null != n ? n : 0],
            is_claimed: +!!r,
            poi_city: i,
            poi_region_code: o,
            tt_poi_backend_type: ""
              .concat(a, ",")
              .concat(u, ",")
              .concat(s, "|")
              .concat(c),
            poi_type_code: l,
          };
        },
        Q = function (e) {
          var t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (t = (0, b.qt)(n, "explore_ui_change")) ? t : "v0";
          return {
            isClearUI: "v1" === r && e,
            withCreator: "v1" !== r && "v0" !== r && e,
            withLike: ("v3" === r || "v4" === r) && e,
            withBack: "v4" === r && e,
            withDes: ("v4" === r || "v0" === r) && e,
            withNoLeftInfo: "v2" === r,
          };
        },
        z = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "language"];
              }, []),
            ),
            n = t.abTestVersion,
            r = t.language,
            i =
              null != (e = (0, b.qt)(n, "search_preview_ui_change")) ? e : "v0";
          return (
            ("hu-HU" === r || "hu" === r) && "v3" === i && (i = "v0"),
            {
              withLikeAndCreator: "v1" === i || "v2" === i || "v3" === i,
              removeDesc: "v1" === i,
              withOneLineDesc: "v2" === i || "v3" === i,
              withPublishTime: "v3" === i,
            }
          );
        },
        J = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "foryou_opt")) ? e : "v0";
          return {
            hasFypLoadingOpt1: "v1" === n,
            hasFypLoadingOpt2: "v2" === n,
          };
        },
        X = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "seo_preview_ui_change")) ? e : "v0")
          );
        },
        ee = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, T.S)(t, "perf_blur_background")) ? e : "v0",
            r = (0, s.useMemo)(
              function () {
                return {
                  withBlurBG: "v0" === n,
                  withNoBG: "v1" === n,
                  withLinearGradientBG: "v2" === n || "v3" === n,
                  withLinearGradientBlueBG: "v3" === n,
                  withLinearGradientBlackBG: "v2" === n,
                };
              },
              [n],
            );
          return {
            withBlurBG: r.withBlurBG,
            withNoBG: r.withNoBG,
            withLinearGradientBG: r.withLinearGradientBG,
            withLinearGradientBlueBG: r.withLinearGradientBlueBG,
            withLinearGradientBlackBG: r.withLinearGradientBlackBG,
          };
        };
      function et() {
        var e,
          t = (0, A.L$)(
            (0, y.W)(function () {
              return [W];
            }, []),
          ).abTestVersion,
          n = (0, c.useLocation)().pathname,
          r = null == t ? void 0 : t.versionName.split(",");
        return {
          isInHorizontalBoostUI:
            null != (e = null == r ? void 0 : r.includes("71188781")) &&
            e &&
            ((0, S.tO)(n) || (0, S.gq)(n)),
        };
      }
      var en = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "islands_arch_user_profile"))
                ? e
                : "v0";
          return {
            delayUntilAnyItem: "v1" === n,
            delayUntilFirstItem: "v2" === n,
          };
        },
        er = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            hasCommonVideoFirst:
              "v1" ===
              (null != (e = (0, b.qt)(t, "islands_arch_rest_page")) ? e : "v0"),
          };
        },
        ei = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isOpenNewTab:
              "v2" ===
              (null != (e = (0, b.qt)(t, "webapp_browser_mode_new_tab"))
                ? e
                : "v1"),
          };
        },
        eo = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v2" === (null != (e = (0, b.qt)(t, "sidenav_test")) ? e : "v1")
          );
        },
        ea = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "webapp_auto_refresh")) ? e : "v1";
          return {
            refreshWhenExpireAndEmpty: "v2" === n,
            refreshInAllCase: "v3" === n,
          };
        },
        eu = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            useEnlargedVideoPlayer:
              "v1" !==
              (null != (e = (0, b.qt)(t, "one_column_player_size")) ? e : "v1"),
            useCenterAligned: !1,
            useWiderContainerSize: !1,
          };
        },
        es = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v2" === (null != (e = (0, b.qt)(t, "use_follow_v2")) ? e : "v1")
          );
        },
        ec = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isInWebappPerfPageSwitchExperiment:
              "v0" !==
              (null != (e = (0, b.qt)(t, "webapp_perf_page_switch"))
                ? e
                : "v0"),
          };
        },
        el = function () {
          var e,
            t,
            n = (0, L.B)().isElectronApp,
            r = (0, c.useLocation)().pathname,
            i = (0, I.oN)(r),
            o = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            a = i === p.L.Trending,
            u =
              null !=
              (e = (0, b.qt)(
                o,
                a
                  ? "on_device_ml_player_preload"
                  : "on_device_ml_player_preload_other_pages",
              ))
                ? e
                : { vid: "v0" },
            s = (0, x.qo)().isLowEndDevice,
            l = null != (t = null == u ? void 0 : u.vid) ? t : "v0",
            d = !n && "undefined" != typeof WebAssembly && !s;
          return {
            playerPreloadPredictStrategy: u,
            disablePreloadPredict: "v0" === l,
            enablePlayerPreloadPredict: ("v1" === l || "v2" === l) && d,
            enablePlayerPreloadDowngradePredict:
              "v3" === l || ("v0" !== l && !d),
          };
        },
        ep = function () {
          var e,
            t,
            n,
            i,
            o = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            a = (0, b.qt)(o, "tt_player_reuse") || "v0",
            u = (0, b.qt)(o, "tt_player_openmse") || "v0",
            s = (0, b.qt)(o, "tt_player_hevc") || "v0",
            c = (0, b.qt)(o, "tt_player_event_trigger") || "v0",
            l = el().disablePreloadPredict,
            p = (0, g.PU)(),
            d =
              null != (e = (0, b.qt)(o, "tt_player_preload"))
                ? e
                : {
                    vid: "v0",
                    maxQueueCount: 3,
                    preloadMaxCacheCount: 5,
                    preloadTime: 10,
                    segmentMinDuration: 10,
                    minBufferLength: 10,
                    startPreloadControl: !1,
                    startPreloadMinBuffer: 0,
                    startPreloadMinPosTime: 0,
                  },
            f = l ? d : (0, r._)({}, d, p),
            v =
              null != (t = (0, b.qt)(o, "ttplayer_bitrate_select"))
                ? t
                : {
                    vid: "v0",
                    selector: "default",
                    qualityType: 20,
                    hevcQualityType: 14,
                  },
            _ = (0, b.qt)(o, "ttplayer_bitrate_select_v2"),
            h = (0, b.qt)(o, "ttplayer_audio_equalizer"),
            m =
              null != (n = (0, b.qt)(o, "tt_player_upgrade"))
                ? n
                : { vid: "v0", playerType: "XG" },
            w = (0, b.qt)(o, "tt_player_upgrade_preload"),
            T = (0, b.qt)(o, "tt_player_request"),
            S = (0, b.qt)(o, "tt_player_preview"),
            L = (0, b.qt)(o, "tt_player_stuck"),
            k = (0, b.qt)(o, "tt_player_demux"),
            P = (0, b.qt)(o, "tt_player_sbp"),
            E = (0, b.qt)(o, "tt_player_fallback_eos"),
            C = (0, b.qt)(o, "tt_player_autoseek");
          return {
            playerReuse: a,
            playerPreload: f,
            bitrateSelect: _ || v,
            playerHevc: s,
            playerUpgrade: m,
            playerUpgradePreload: w,
            playerOpenMse: u,
            eventTrigger: c,
            playerDash:
              null != (i = (0, b.qt)(o, "tt_player_dash"))
                ? i
                : { vid: "v0", format: "MP4" },
            audioEqualizer: h,
            playerRequest: T,
            previewConfig: S,
            playerSbp: P,
            playerDemux: k,
            playerStuck: L,
            playerEos: E,
            playerAutoSeek: C,
            preloadType: +(
              "v1" === ((0, b.qt)(o, "tt_player_preload_type") || "v0")
            ),
            playerPoolControl: (0, b.qt)(o, "tt_player_poolcontrol"),
          };
        },
        ed = function () {
          var e;
          return (
            null != (e = (0, b.d)("tt_player_dash"))
              ? e
              : { vid: "v0", format: "MP4" }
          ).format.toLowerCase();
        },
        ef = function () {
          var e;
          return null != (e = (0, b.d)("tt_player_video_play")) ? e : "";
        },
        ev = function () {
          return "v1" === (0, b.d)("preview_progress_disable");
        },
        e_ = function () {
          var e = {};
          return (
            [{ key: "tt_player_h265soft", retKey: "playerH265Soft" }].forEach(
              function (t) {
                var n = (0, k.OW)(t.key, {});
                n.vid && (e[t.retKey] = n);
              },
            ),
            e
          );
        },
        eg = function (e) {
          var t,
            n = e.enterFrom,
            r = e.linkIncludeVid,
            i = (0, A.L$)(
              (0, y.W)(function () {
                return [W];
              }, []),
            ).abTestVersion,
            o =
              null != (t = (0, b.qt)(i, "studio_web_eh_entrance_v3"))
                ? t
                : "v1",
            a =
              "https://effecthouse.tiktok.com/download?utm_source=tiktok_webapp_main";
          return (
            n && (a = "".concat(a, "&enter_from=").concat(n)),
            r && (a = "".concat(a, "&utm_campaign=ttweb_entrance_").concat(o)),
            { showEhEntrance: !0, entranceVariant: o, ehLink: a }
          );
        },
        eh = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isAutoScrollReposition:
              "v0" !==
              (null != (e = (0, b.qt)(t, "autoscroll_reposition")) ? e : "v0"),
          };
        },
        em = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v0" !== (null != (e = (0, b.qt)(t, "banner_ad_enable")) ? e : "v1")
          );
        },
        eA = function () {
          var e = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            t = (0, b.qt)(e, "project_ace_control");
          return "v0" === t || "v1" === t;
        },
        ey = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "add_profile_left_bar")) ? e : "v0";
          return {
            showProfileLeftBar: "v1" === n || "v3" === n,
            enableClickTopRightIcon: "v2" === n || "v3" === n,
          };
        },
        eb = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "user"];
              }, []),
            ),
            n = t.abTestVersion,
            r = t.user;
          return (
            "v1" === (null != (e = (0, b.qt)(n, "friends_tab")) ? e : "v0") &&
            !!r
          );
        },
        ew = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "video_detail_reflow_card")) ? e : "v0")
          );
        },
        eT = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "yml_ui_optimize")) ? e : "v0";
          return {
            isCoverImageChanged: "v1" === n,
            isMetaDataChanged: "v2" === n,
            isCoverImageAndMetaDataChanged: "v3" === n,
          };
        },
        eS = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "guide_user_to_next_video")) ? e : "v0";
          return { isVideoDetailPage: "v1" === n, isFYP: "v2" === n };
        },
        eL = function () {
          var e = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            t = (0, T.S)(e, "video_detail_end_card");
          return {
            toCreatorEndCard: "v1" === t || !t,
            toForyouEndCard: "v2" === t || !t,
            toExploreEndCard: "v3" === t,
          };
        },
        ek = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "detail_to_explore")) ? e : "v0";
          return {
            inExploreEndCardExperiment: "v0" !== n,
            isExploreEndCardFourVideo: "v1" === n || "v2" === n,
            isExploreEndCardCategoryAll: "v2" !== n && "v4" !== n,
          };
        },
        eP = function () {
          var e,
            t,
            n,
            r,
            i = (0, V.wW)(),
            o = null != (n = null == i ? void 0 : i.vidList) ? n : [],
            u = (0, y.W)(function () {
              return ["abTestVersion"];
            }, []),
            s =
              null !=
              (r =
                null == u ||
                null == (t = u.abTestVersion) ||
                null == (e = t.versionName)
                  ? void 0
                  : e.split(","))
                ? r
                : [];
          return (0, a._)(o).concat((0, a._)(s));
        },
        eE = function () {
          var e = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            t = (0, b.qt)(
              e,
              "webapp_causal_inference_auto_scroll_data_collection",
            );
          return { useAutoScrollModelResult: "v2" === t || "v3" === t };
        },
        eC = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "auto_scroll")) ? e : "v1";
          return (
            "v1" === n && (0, P.sc)("auto_scroll"),
            { hasAutoScrollButton: "v1" !== n }
          );
        },
        eI = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, T.S)(t, "preview_cover")) ? e : "v0";
          return (0, s.useMemo)(
            function () {
              return "v1" === n;
            },
            [n],
          );
        },
        eV = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "show_aigc_label_web")) ? e : "v0")
          );
        },
        eO = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v2" ===
            (null != (e = (0, b.qt)(t, "use_profile_avatar")) ? e : "v1")
          );
        },
        eM = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "pc_non_personalized_suggested_account"))
              ? e
              : "v0")
          );
        },
        eR = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "pc_non_personalized_explore"))
              ? e
              : "v0")
          );
        },
        ex = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "use_aligned_copies")) ? e : "v0";
          return {
            default: "v0" === n,
            solution1: "v1" === n,
            solution2: "v2" === n,
          };
        },
        eW = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (e = (0, b.qt)(n, "desktop_web_survey_new")) ? e : "v0",
            i = null != (t = (0, b.qt)(n, "desktop_web_survey_old")) ? t : "v0";
          return {
            shouldShowSurvey: "v0" !== r || "v0" !== i,
            isNewUser: "v0" !== r,
          };
        },
        eF = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "enable_autoscroll_moremenu"))
              ? e
              : "v0")
          );
        },
        eq = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null !=
              (e = (0, b.qt)(t, "enable_video_detail_moremenu_refactor"))
                ? e
                : "v0";
          return {
            enableNewPopover: "v0" !== n,
            moveFullScreenToMoreMenu: "v1" === n || "v2" === n,
            showPopoverRightTopCorner: "v2" === n || "v3" === n,
          };
        },
        eD = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v2" ===
            (null != (e = (0, b.qt)(t, "video_detail_page_video_play"))
              ? e
              : "v1")
          );
        },
        eU = function () {
          var e, t, n, r;
          return {
            isRepostLabelEnabled:
              "v0" !==
              (null != (e = (0, b.d)("webapp_repost_label")) ? e : "v0"),
            isRepostTabEnabled:
              "v0" !== (null != (t = (0, b.d)("webapp_repost_tab")) ? t : "v0"),
            repostActionVid:
              null != (n = (0, b.d)("webapp_repost_action")) ? n : "v0",
            isRepostNoticeEnabled:
              "v0" !==
              (null != (r = (0, b.d)("webapp_repost_notice")) ? r : "v0"),
          };
        },
        eN = function () {
          return eU();
        },
        eB = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "webapp_creator_post_sort")) ? e : "v0";
          return {
            isPostSortBottomLeftEnabled: "v1" === n,
            isPostSortBottomMiddleEnabled: "v2" === n,
            isPostSortRightTwoOptionsEnabled: "v3" === n,
            isPostSortRightMenuEnabled: "v4" === n,
            isPostSortRightThreeOptionsEnabled: "v5" === n,
          };
        },
        ej = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "webapp_creator_just_watched"))
                ? e
                : "v0";
          return {
            isJustWatchedEnabled: "v0" !== n,
            isButtonPrimary: "v1" === n || "v3" === n,
            isButtonSizeLarge: "v3" === n || "v4" === n,
          };
        },
        e$ = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "guest_mode_redesign")) ? e : "v0";
          return {
            showRedesign: "v0" !== n,
            buttonKey: (function (e) {
              switch (e) {
                case "v1":
                default:
                  return "pcWeb_guestLogin_contToVideo";
                case "v2":
                  return "pcWeb_guestLogin_guest";
                case "v3":
                  return "pcWeb_guestLogin_without";
              }
            })(n),
          };
        };
      function eG(e) {
        var t,
          n = (0, A.L$)(
            (0, y.W)(function () {
              return ["abTestVersion"];
            }, []),
          ).abTestVersion,
          r = (0, b.qt)(n, e),
          i = null != (t = (0, b.qt)(n, "delay_guest")) ? t : "2",
          o = u.A.get(M.er) || "";
        if (void 0 !== o && "" !== o) {
          var a = Number(o);
          return isNaN(a)
            ? (console.error("Invalid vv limit: ".concat(o)),
              { vvLimit: Number(i) })
            : { vvLimit: a };
        }
        return void 0 !== r
          ? (u.A.set(M.er, r, M.Ah), { vvLimit: Number(r) })
          : { vvLimit: Number(i) };
      }
      var eZ = function () {
          var e = (0, c.useLocation)().pathname,
            t = {
              delay_guest_fyp: eG("delay_guest_fyp"),
              delay_guest_others_homepage: eG("delay_guest_others_homepage"),
              delay_guest_videos: eG("delay_guest_videos"),
              delay_guest_discover: eG("delay_guest_discover"),
              delay_guest_explore: eG("delay_guest_explore"),
              delay_guest_other: eG("delay_guest_other"),
            };
          return (0, S.tO)(e)
            ? t.delay_guest_fyp
            : (0, S.cj)(e)
              ? t.delay_guest_others_homepage
              : (0, S.Fj)(e)
                ? t.delay_guest_videos
                : (0, S.pz)(e)
                  ? t.delay_guest_discover
                  : (0, S.eD)(e)
                    ? t.delay_guest_explore
                    : t.delay_guest_other;
        },
        eH = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "video_detail_yml_ui")) ? e : "v1";
          return {
            shouldSwapInfo: "v2" === n || "v4" === n,
            shouldListView: "v3" === n || "v4" === n,
          };
        },
        eK = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            hasPip:
              "v1" !==
              (null != (e = (0, b.qt)(t, "video_detail_auto_pip_opt"))
                ? e
                : "v0"),
          };
        },
        eY = function () {
          var e,
            t = "webapp_dynamic_bottom_right",
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (e = (0, T.S)(n, t)) ? e : "v0",
            i = (0, s.useMemo)(
              function () {
                return {
                  isInDynamicBottomRightExperiment:
                    "v0" === r || "v1" === r || "v2" === r,
                  isInDynamicBottomRightControl: "v0" === r,
                  isInDynamicBottomRightFolded: "v1" === r,
                  isInDynamicBottomRightExpanded: "v2" === r,
                };
              },
              [r],
            );
          return {
            baseExpId: t,
            isInDynamicBottomRightExperiment:
              i.isInDynamicBottomRightExperiment,
            isInDynamicBottomRightControl: i.isInDynamicBottomRightControl,
            isInDynamicBottomRightFolded: i.isInDynamicBottomRightFolded,
            isInDynamicBottomRightExpanded: i.isInDynamicBottomRightExpanded,
          };
        },
        eQ = function () {
          var e,
            t = "webapp_auto_dark_mode",
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (e = (0, T.S)(n, t, !0)) ? e : "v0",
            i = (0, s.useMemo)(
              function () {
                return {
                  isInAutoDarkModeExperiment: "v0" === r || "v1" === r,
                  isInAutoDarkModeControl: "v0" === r,
                  isInAutoDarkModeTreatment: "v1" === r,
                };
              },
              [r],
            ),
            o = i.isInAutoDarkModeExperiment;
          return {
            baseExpId: t,
            isInAutoDarkModeControl: i.isInAutoDarkModeControl,
            isInAutoDarkModeTreatment: i.isInAutoDarkModeTreatment,
            isInAutoDarkModeExperiment: o,
          };
        },
        ez = function () {
          var e = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            t = (0, b.qt)(e, "browser_fingerprint_basic"),
            n = (0, b.qt)(e, "browser_fingerprint_verify");
          return {
            isInBasicTreatment: "v1" === t,
            isInVerification: "v0" === n || "v1" === n,
          };
        },
        eJ = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "top_right_button")) ? e : "v0",
            r = (0, c.useLocation)().pathname,
            i = (0, S.tO)(r) || (0, S.gq)(r) || (0, S.K8)(r);
          return {
            isInTopRightButtonTreatment: "v0" !== n && i,
            isInTopRightButtonLeftNavHide: ("v2" === n || "v4" === n) && i,
            isInTopRightButtonProfile: ("v3" === n || "v4" === n) && i,
          };
        },
        eX = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = (0, A.L$)(
              (0, w.U)(function () {
                return ["isMobile"];
              }, []),
            ).isMobile,
            i = null != (e = (0, b.qt)(n, "top_right_button_group")) ? e : "v0",
            o =
              null != (t = (0, b.qt)(n, "top_right_button_group_all"))
                ? t
                : "v0",
            a = (0, c.useLocation)(),
            u = a.pathname,
            s = new URLSearchParams(a.search),
            l = null == s ? void 0 : s.get("scene"),
            p = (0, S.pz)(u),
            d = ((0, S.tO)(u) || (0, S.gq)(u) || (0, S.K8)(u)) && !r,
            f =
              ((0, S.cj)(u) ||
                ((0, S.Fj)(u) && "business" !== l) ||
                (0, S.eD)(u) ||
                (0, S.a1)(u) ||
                (0, S.ie)(u) ||
                (0, S.q$)(u) ||
                (0, S.jD)(u) ||
                (0, S.ZG)(u)) &&
              !r;
          return {
            isInTopRightButtonGroupTreatment:
              ("v0" !== i && d) || ("v0" !== o && f) || p,
            isConnectedActionBar: !0,
            isButtonGroupWithText: "v4" === i && d,
          };
        },
        e0 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = (0, A.L$)(
              (0, w.U)(function () {
                return ["isMobile"];
              }, []),
            ).isMobile;
          return {
            isInTopRightButtonGroupAllTreatment:
              "v0" !==
                (null != (e = (0, b.qt)(t, "top_right_button_group_all"))
                  ? e
                  : "v0") && !n,
          };
        },
        e1 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isInPushHoldout:
              "v1" === (null != (e = (0, b.qt)(t, "push_holdout")) ? e : "v0"),
          };
        },
        e2 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "region"];
              }, []),
            ),
            n = t.abTestVersion,
            r = t.region,
            i =
              null != (e = (0, b.qt)(n, "brazil_12hr_cumulative_play"))
                ? e
                : "v0";
          return { isInBRLoginExperiment: "BR" === r && "v1" === i };
        },
        e3 = function () {
          var e,
            t,
            n,
            r = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "webIdCreatedTime", "region"];
              }, []),
            ),
            i = r.abTestVersion,
            o = r.webIdCreatedTime,
            a = r.region,
            c =
              null != (e = (0, b.qt)(i, "brazil_12hr_cumulative_play"))
                ? e
                : "v0",
            l = (0, s.useMemo)(function () {
              return {
                hasLoginHistory: void 0 !== u.A.get("last_login_method"),
              };
            }, []).hasLoginHistory,
            p = (0, s.useMemo)(function () {
              try {
                var e = (0, P._S)("f_s_1", "{}");
                if (!e || "{}" === e) return { hasExceededLimit: !1 };
                var t = JSON.parse(e),
                  n = 0,
                  r = 0;
                for (var i in t)
                  if (t[i]) {
                    var o = Object.values(t[i])[0];
                    o &&
                      "number" == typeof o.stay_duration &&
                      o.stay_duration > 0 &&
                      ((n += o.stay_duration), r++);
                  }
                if (0 === r) return { hasExceededLimit: !1 };
                return { hasExceededLimit: n > 720 };
              } catch (e) {
                return (
                  console.warn(
                    "Brazil cumulative stay duration calculation failed:",
                    e,
                  ),
                  { hasExceededLimit: !1 }
                );
              }
            }, []).hasExceededLimit,
            d = (0, s.useMemo)(function () {
              try {
                var e = (0, P._S)("br_UUX_math_gate_failed", "");
                return { hasFailedMathGate: !!e && "" !== e };
              } catch (e) {
                return (
                  console.warn("Brazil math gate failed flag read failed:", e),
                  { hasFailedMathGate: !1 }
                );
              }
            }, []).hasFailedMathGate,
            f =
              null != (t = (0, b.qt)(i, "login_reminder_no_history"))
                ? t
                : "v0",
            v =
              null != (n = (0, b.qt)(i, "login_reminder_with_history"))
                ? n
                : "v0",
            _ = void 0 !== u.A.get("last_login_method");
          return "BR" === a && "v1" === c
            ? l || p || d
              ? { isPeriodicLogin: !1, isMandatoryLogin: !0 }
              : { isPeriodicLogin: !1, isMandatoryLogin: !1 }
            : (0, E.m)(o)
              ? { isPeriodicLogin: !1, isMandatoryLogin: !1 }
              : {
                  isPeriodicLogin: ("v1" === f && !_) || ("v1" === v && _),
                  isMandatoryLogin: ("v2" === f && !_) || ("v2" === v && _),
                };
        },
        e4 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "keyboard_shortcut")) ? e : "v0",
            r = (0, c.useLocation)().pathname,
            i = (0, S.tO)(r) || (0, S.gq)(r) || (0, S.K8)(r);
          return {
            isInKeyboardShortcutTreatment: "v0" !== n && i,
            isInKeyboardShortcutV1: "v1" === n && i,
            isInKeyboardShortcutV2: "v2" === n && i,
          };
        },
        e7 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "use_container_exp")) ? e : "v0";
          return {
            isInProductHoldout: "v1" === n || "v3" === n,
            isInPerformanceHoldout: "v2" === n || "v3" === n,
          };
        },
        e5 = function (e, t) {
          var n,
            r = (0, A.L$)(
              (0, y.W)(function () {
                return [W];
              }, []),
            ).abTestVersion,
            i = null != (n = (0, b.qt)(r, "tteh_effect_anchor_v1")) ? n : "v1",
            o = [l.g.Trending, l.g.Effect, l.g.Video],
            a = "v1" !== i && o.includes(null != t ? t : l.g.Unknown),
            u = e;
          return (
            a || (u = []),
            { shouldShowEhEffectAnchor: a, effectAnchors: u, abVariant: i }
          );
        },
        e9 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "video_detail_yml_creator")) ? e : "v0";
          return { useCreatorFeed: "v0" !== n, showPinnedVideos: "v2" === n };
        },
        e6 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "user"];
              }, []),
            ),
            n = t.abTestVersion,
            r = t.user,
            i =
              null != (e = (0, b.qt)(n, "video_detail_author_card")) ? e : "v0";
          return (
            r && (i = "v0"),
            {
              useAuthorCard: "v0" !== i,
              useLargeCard: "v3" === i,
              withCountDown: "v2" === i,
            }
          );
        },
        e8 = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (e = (0, b.qt)(n, "video_detail_nav_opt")) ? e : "v0",
            i =
              null != (t = (0, b.qt)(n, "video_detail_nav_shortcut"))
                ? t
                : "v0";
          return {
            pushHistory: "v1" === r || "v3" === r,
            newTabAndShortcut: "v1" === i || "v4" === i,
            enableShortcutFocusAddressBar: "v2" === i || "v4" === i,
            enableShortcutRefreshAndCopy: "v3" === i || "v4" === i,
            enableAllShortcut: "v4" === i,
          };
        },
        te = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r =
              null !=
              (e = (0, b.qt)(n, "video_details_player_redesign_engagement"))
                ? e
                : "v0",
            i =
              null != (t = (0, b.qt)(n, "video_details_player_redesign_player"))
                ? t
                : "v0",
            o = "v0" !== r || "v3" === i,
            a = (o && "v1" !== r) || "v3" === i,
            u = "v0" !== i;
          return {
            showCurvedPlayerEdges: "v0" !== i || "v0" !== r,
            showFYPButtonStyle: o,
            moveCreatorIcon: a,
            moveEngagementPanel: (a && "v2" !== r) || "v3" === i,
            updateButtonPanel: u,
            updatePlayerControls: u && "v1" !== i,
          };
        },
        tt = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "search_top_author_card")) ? e : "v0";
          return { withFollowButton: "v0" !== n, withVideoList: "v2" === n };
        },
        tn = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "search_photo")) ? e : "v0";
          return {
            showPhotoInSearch: "v1" === n || "v3" === n,
            hasTopLikedLabel: "v2" === n || "v3" === n,
          };
        },
        tr = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            count:
              null !=
              (t = { v0: 10, v1: 5, v2: 8, v3: 12 }[
                null != (e = (0, b.qt)(n, "search_yml_guess_count")) ? e : "v0"
              ])
                ? t
                : 10,
          };
        },
        ti = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "user"];
              }, []),
            ),
            n = t.abTestVersion,
            r = t.user,
            i =
              null != (e = (0, b.qt)(n, "use_navigation_refactor")) ? e : "v0";
          return {
            showUpload: !("v5" === i && !r),
            condenseProfileDropdown: "v5" === i,
          };
        },
        to = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion", "user"];
              }, []),
            ),
            r = n.abTestVersion,
            i = !!n.user;
          return {
            enableUploadRefactor:
              (null != (e = (0, b.qt)(r, "enable_upload_refactor"))
                ? e
                : "v0") === "v1" && i,
            enableMessageRefactor:
              (null != (t = (0, b.qt)(r, "enable_message_refactor"))
                ? t
                : "v0") === "v1" && i,
          };
        },
        ta = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "use_left_navigation_refactor"))
                ? e
                : "v0";
          return {
            showNewLiveIcon: "v1" === n || "v3" === n,
            isCollapsibleFooter: "v2" === n || "v3" === n,
          };
        },
        tu = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "video_detail_responsive_ui"))
                ? e
                : "v0";
          return { responsiveUi: "v0" !== n, showUserInfo: "v2" === n };
        },
        ts = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            showOnHot:
              "v0" !==
              (null != (e = (0, b.qt)(n, "new_guest_mode_hot")) ? e : "v0"),
            showOnRest:
              "v0" !==
              (null != (t = (0, b.qt)(n, "new_guest_mode_other")) ? t : "v0"),
          };
        },
        tc = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return null != (e = (0, b.qt)(t, "webapp_explore_nav_order"))
            ? e
            : "v0";
        },
        tl = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return null != (e = (0, b.qt)(t, "webapp_explore_video_info"))
            ? e
            : "v0";
        },
        tp = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "islands_arch_explore")) ? e : "v0";
          return {
            delayAfterRender: "v1" === n,
            delayAfterVideoPlay: "v2" === n,
          };
        },
        td = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            hasTrendingCard:
              "v1" ===
              (null != (e = (0, b.qt)(t, "explore_trending_topics"))
                ? e
                : "v0"),
          };
        },
        tf = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "video_resolution_auto")) ? e : "v0",
            r = (0, C.Zo)();
          return {
            allowSelectResolution: "v0" !== n && r,
            defaultAuto: "v1" === n,
            useStoredResolution: "v2" === n,
            shouldResetResolution: "v0" === n,
          };
        },
        tv = function () {
          var e;
          return (
            "v0" !==
            (null != (e = (0, b.d)("webapp_collection_profile")) ? e : "v0")
          );
        },
        t_ = function () {
          var e;
          return (
            "v0" !==
            (null != (e = (0, b.d)("webapp_collection_adder")) ? e : "v0")
          );
        },
        tg = function () {
          var e;
          switch (
            null != (e = (0, b.d)("webapp_collection_adder")) ? e : "v0"
          ) {
            case "v2":
              return { toastTheme: "dark", toastDuration: 5e3 };
            case "v3":
              return { toastTheme: "dark", toastDuration: 8e3 };
            default:
              return { toastTheme: "default", toastDuration: 3e3 };
          }
        },
        th = function () {
          return (0, s.useMemo)(function () {
            return (0, r._)(
              {
                isCollectionEnabled: tv(),
                isAddToCollectionEnabled: t_(),
                popoverTriggerType: "bottomToast",
              },
              tg(),
            );
          }, []);
        },
        tm = function () {
          return (0, s.useMemo)(function () {
            var e,
              t = null != (e = (0, b.d)("fyf_profile_uj")) ? e : "v0";
            return {
              isFyfProfileUjEnabled: "v0" !== t,
              cacheRange: "v2" === t ? "after" : "v3" === t ? "all" : "one",
              shouldCacheIndex: "v3" === t,
            };
          }, []);
        },
        tA = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            showNewCommentDesign:
              "v0" !==
              (null != (e = (0, b.qt)(t, "detail_page_comments_redesign"))
                ? e
                : "v0"),
          };
        },
        ty = function () {
          var e,
            t,
            n = (0, V.wW)(),
            r =
              null !=
              (t =
                null == n || null == (e = n.parameters.seo_pc_traffic)
                  ? void 0
                  : e.vid)
                ? t
                : "v0",
            i = (0, A.L$)(
              (0, w.U)(function () {
                return ["isSearchEngineBot"];
              }, []),
            ).isSearchEngineBot;
          return {
            useInfoCard: ["v1", "v3"].includes(r) && void 0 !== i && i,
            useHtmlTag: ["v2", "v3"].includes(r),
            useOnlineVersion: "v0" === r,
          };
        },
        tb = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isInPageStabilityOptExperiment:
              "v0" !==
              (null != (e = (0, b.qt)(t, "page_stability_opt")) ? e : "v0"),
          };
        },
        tw = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "page_stability_strategy")) ? e : "v0";
          return { isWithStrategy1: "v1" === n, isWithStrategy2: "v2" === n };
        },
        tT = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "fyp_on_detail")) ? e : "v0";
          return {
            fypOnDetail: "v2" === n || "v3" === n || "v4" === n || "v5" === n,
            isFypContent: "v1" === n || "v4" === n || "v5" === n,
            hasAnimation: "v3" === n || "v5" === n,
            endCardCloseShowNext: "v0" === n,
          };
        },
        tS = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            inWebappFypCacheExperiment:
              "v1" ===
              (null != (e = (0, b.qt)(t, "webapp_fyp_cache")) ? e : "v0"),
          };
        },
        tL = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            hasNewShareMenu:
              "v0" !==
              (null != (e = (0, b.qt)(t, "revamp_share_menu")) ? e : "v0"),
          };
        },
        tk = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isInAppStyleShareExperiment:
              "v0" !==
              (null != (e = (0, b.qt)(t, "app_style_share")) ? e : "v0"),
          };
        },
        tP = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v0" !==
            (null != (e = (0, b.qt)(t, "remove_disclaimer")) ? e : "v0")
          );
        },
        tE = function () {
          var e,
            t = null != (e = (0, b.d)("webapp_inapp_notice")) ? e : "v0";
          return {
            isInAppNotificationEnabled: "v0" !== t,
            placement: "v1" === t || "v2" === t ? "topEnd" : "bottomEnd",
            layoutType:
              "v1" === t || "v3" === t ? "withoutHeader" : "withHeader",
          };
        },
        tC = function () {
          var e = (0, c.useLocation)(),
            t = e.pathname,
            n = e.search;
          return (0, s.useMemo)(
            function () {
              var e = tE();
              return (
                (0, S.Pz)(t, n) || (e.isInAppNotificationEnabled = !1),
                e
              );
            },
            [t, n],
          );
        },
        tI = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "nav_phase_3")) ? e : "v0",
            r = "v1" === (0, b.qt)(t, "enable_dm_side_nav"),
            i = "v1" === (0, b.qt)(t, "enable_setting_side_nav"),
            u = [
              d.OZ.feedback,
              d.OZ.feedbackReport,
              d.OZ.feedbackHistory,
              d.OZ.upload,
              f.vI.kycSubmission,
              f.vI.kyc,
              f.vI.kycLoading,
              f.vI.kycPoa,
              v.tH.loginHome,
              v.tH.signupHome,
              d.OZ.download,
            ].concat(
              (0, a._)(d.OZ.downloadWithLang),
              [d.OZ.downloadVideo],
              (0, a._)(d.OZ.downloadVideoWithLang),
              (0, a._)(r ? [] : [d.OZ.messages]),
              (0, a._)(
                i
                  ? []
                  : Object.entries(d.OZ)
                      .filter(function (e) {
                        var t = (0, o._)(e, 2),
                          n = t[0];
                        return (t[1], n.startsWith("setting"));
                      })
                      .flatMap(function (e) {
                        var t = (0, o._)(e, 2);
                        return (t[0], t[1]);
                      }),
              ),
            ),
            s = (0, c.useLocation)().pathname;
          return {
            vid: n,
            isInNavPhase3: "v0" !== n,
            showFullSideNav:
              !(0, c.matchPath)(s, { path: u, exact: !0 }) && "v0" !== n,
          };
        },
        tV = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r =
              null != (e = (0, b.qt)(n, "feed_change_optimize_image"))
                ? e
                : "v0",
            i =
              null != (t = (0, b.qt)(n, "feed_change_optimize_ff")) ? t : "v0",
            o = e7().isInProductHoldout;
          return {
            enableFeedChangeImageOptimize: "v1" === r,
            enableFeedChangeFirstFrameOptimize: "v1" === i && !o,
          };
        },
        tO = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "enable_dm_side_nav")) ? e : "v0",
            r = (0, R.Ig)();
          return "v0" !== n && !r;
        },
        tM = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v0" !==
            (null != (e = (0, b.qt)(t, "global_web_footer")) ? e : "v0")
          );
        },
        tR = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "guest_mode_interest")) ? e : "v0";
          return {
            showGuestModeInterestSelector: "v0" !== n,
            showContinueButton: "v2" !== n,
          };
        },
        tx = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = (
              null !=
              (e = (0, w.U)(function () {
                return ["isMobile"];
              }, []))
                ? e
                : {}
            ).isMobile,
            i = "undefined" == typeof window,
            o = null != (t = (0, b.qt)(n, "login_popup_visual")) ? t : "v0",
            a = i ? "v0" : o,
            u = i ? "" : window.location.pathname,
            s =
              /(?:^|\/)(login|signup|link-phone-or-email|oauth|oauthLine|account-delete)(?:\/|$)/.test(
                u,
              );
          return {
            showUpdatedLoginUI: !r && !s && "v0" !== a,
            showDynamicLoginTitle: !r && !s && "v2" === a,
          };
        },
        tW = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = null != (e = (0, T.S)(n, "dual_user")) ? e : "v0";
          try {
            t = u.A.get("last_login_method");
          } catch (e) {
            (console.error("Failed to get last_login_method cookie:", e),
              (t = void 0));
          }
          var i = "QRcode" === t;
          return {
            showLoginOptionSlider: i && "v0" !== r,
            showLoginOptionButton: !1,
            showPopupWhenInitiallyLand: i && ("v2" === r || "v3" === r),
            isForcedLogin: i && "v3" === r,
            isInRedesignLoginPopupControl: "v0" === r,
            isInRedesignLoginPopupTreatment: i && "v0" !== r,
          };
        },
        tF = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = (0, A.L$)(
              (0, w.U)(function () {
                return ["isAndroid"];
              }, []),
            ).isAndroid,
            r =
              null != (e = (0, b.qt)(t, "mobile_android_jump_optimization"))
                ? e
                : "v0";
          return (0, s.useMemo)(
            function () {
              return n
                ? {
                    experimentalUseAppLink: "v0" !== r,
                    experimentalUseBetterAppLink: "v2" === r,
                  }
                : {};
            },
            [n, r],
          );
        },
        tq = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v0" !==
            (null != (e = (0, b.qt)(t, "video_auto_play_optimize")) ? e : "v0")
          );
        },
        tD = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v2" ===
            (null != (e = (0, b.qt)(t, "web_dm_group_chat")) ? e : "v1")
          );
        },
        tU = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = (
              null !=
              (e = (0, w.U)(function () {
                return ["isMobile", "isAndroid"];
              }, []))
                ? e
                : {}
            ).isAndroid,
            o = void 0 !== n && n,
            a = null == t ? void 0 : t.parameters.download_page_apk;
          return a
            ? (0, i._)((0, r._)({}, a), {
                apps: a.apps.filter(function (e) {
                  return o
                    ? "android" === e.os || "both" === e.os
                    : "ios" === e.os || "both" === e.os;
                }),
              })
            : a;
        },
        tN = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "pns_communication_service_sdk"))
              ? e
              : "v0")
          );
        },
        tB = function () {
          var e,
            t = null != (e = (0, b.d)("side_nav_preload_cache")) ? e : "v0";
          return {
            enableSideNavPreloadAndCache: "v4" === t,
            enableFYPSideNavPreloadAndCache:
              "v1" === t || "v2" === t || "v3" === t,
            cacheRange: "v1" === t ? 1 : 2 * ("v2" === t),
            cacheAfter: "v3" === t,
          };
        },
        tj = function () {
          return (0, s.useMemo)(function () {
            var e,
              t = null != (e = (0, b.d)("side_nav_cache")) ? e : "v0";
            return {
              enableFYPCache: "v0" !== t && "v5" !== t,
              enableFYPPreload: "v1" === t || "v3" === t || "v5" === t,
              cacheRange: 2 * ("v1" === t || "v2" === t),
              cacheAfter: "v3" === t || "v4" === t,
            };
          }, []);
        },
        t$ = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return (
            "v1" ===
            (null != (e = (0, b.qt)(t, "enable_creator_comments")) ? e : "v0")
          );
        },
        tG = function () {
          return (0, s.useMemo)(function () {
            var e;
            return {
              isRefactorGroup:
                "v0" !==
                (null != (e = (0, b.d)("page_init_refactor")) ? e : "v0"),
            };
          }, []);
        },
        tZ = function () {
          var e;
          return {
            isPreloadPrioritize:
              "v0" !== (null != (e = (0, b.d)("preload_priority")) ? e : "v0"),
          };
        },
        tH = function () {
          var e;
          return {
            isRefactorGroup:
              "v0" !==
              (null != (e = (0, b.d)("browser_mode_refactor")) ? e : "v0"),
          };
        },
        tK = function () {
          var e,
            t = null != (e = (0, b.d)("browser_mode_premount")) ? e : "v0";
          return {
            isPremountGroup: "v0" !== t,
            isDirectPremount: "v1" === t,
            isIdlePremount: "v2" === t,
          };
        },
        tY = function () {
          var e,
            t = null != (e = (0, b.d)("one_col_slide_opt")) ? e : "v0";
          return {
            isSwitchOptGroup: "v0" !== t,
            enableSwitchOnLandingOnly: "v1" === t,
            enableSwitchWithOpt: "v2" === t,
            enableSwitchWithInstant: "v3" === t,
          };
        },
        tQ = function () {
          var e;
          return (
            "v0" !== (null != (e = (0, b.d)("one_col_slide_opt_2")) ? e : "v0")
          );
        },
        tz = function () {
          var e,
            t,
            n = null != (e = (0, b.d)("preload_expiration_extend")) ? e : "v0",
            r = null != (t = { v1: 7, v2: 15, v3: 30 }[n]) ? t : 5;
          return { shouldExtendExpiration: "v0" !== n, extendDays: r };
        },
        tJ = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            retainVideoAfterLogin:
              "v1" ===
              (null != (e = (0, b.qt)(t, "login_video_retention")) ? e : "v0"),
          };
        },
        tX = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "login_popup_timing")) ? e : "v0",
            r = "v0" !== n;
          return {
            inLoginPopupTimingExperiment: r,
            loginPopupLimit: r ? { v1: 2, v2: 4, v3: 7 }[n] : 1 / 0,
          };
        },
        t0 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "remove_logout_entrance")) ? e : "v0";
          return {
            removeLogoutEntranceLeft: "v1" === n,
            removeLogoutEntranceRight: "v2" === n,
          };
        },
        t1 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "browser_mode_scroll")) ? e : "v0";
          return { fixLastRef: "v1" === n, scrollOPT: "v2" === n };
        },
        t2 = function () {
          return (0, s.useMemo)(function () {
            var e;
            return {
              withMultiInstance:
                "v0" !==
                (null != (e = (0, b.d)("browser_mode_multi")) ? e : "v0"),
            };
          }, []);
        },
        t3 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "webapp_picture_comments")) ? e : "v0";
          return {
            isInPictureCommentsExperiment: "v0" !== n,
            isPictureCommentsV1: "v1" === n,
          };
        },
        t4 = function () {
          var e;
          return {
            isInTiktokStoriesExperiment:
              "v0" !== (null != (e = (0, b.d)("tiktok_stories")) ? e : "v0"),
            shouldStoryDetailRedirect: !1,
          };
        },
        t7 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["user", "abTestVersion"];
              }, []),
            ),
            n = t.user,
            r = t.abTestVersion,
            i = !!n,
            o = null != (e = (0, b.qt)(r, "wwa_mdp_metric")) ? e : "v0";
          return {
            enableInOverlayPlayer: i && ["v2", "v3"].includes(o),
            enableInForYou: i && ["v1", "v3"].includes(o),
          };
        },
        t5 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["user", "abTestVersion"];
              }, []),
            ),
            n = t.user,
            r = t.abTestVersion,
            i =
              null != (e = (0, b.qt)(r, "push_authorization_refactor"))
                ? e
                : "v0",
            o = !n || "v0" === i;
          return o
            ? {
                shouldSkipPush: !0,
                isPushAuthLoginTriggered: !1,
                isPushAuthActionTriggered: !1,
                showPushNotice: !1,
                showPushAuthDirectly: !1,
                showPushMask: !1,
              }
            : {
                shouldSkipPush: o,
                isPushAuthLoginTriggered:
                  "v1" === i || "v2" === i || "v3" === i,
                isPushAuthActionTriggered:
                  "v4" === i || "v5" === i || "v6" === i,
                showPushNotice:
                  "v2" === i || "v3" === i || "v5" === i || "v6" === i,
                showPushAuthDirectly: "v1" === i || "v4" === i,
                showPushMask: "v2" === i || "v5" === i,
              };
        },
        t9 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["region", "abTestVersion"];
              }, []),
            ),
            n = t.region,
            r = t.abTestVersion,
            i = null != (e = (0, b.qt)(r, "webapp_add_shop")) ? e : "v0",
            o = "US" === n && "v0" !== i;
          return { vid: i, shouldShowNotification: o, shouldShowShop: o };
        },
        t6 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "webapp_fyp_cache_login")) ? e : "v0";
          return {
            isInWebappFypCacheLoginExperiment: "v0" !== n,
            isWebappFypCacheLoginV1: "v1" === n,
            isWebappFypCacheLoginV2: "v2" === n,
          };
        },
        t8 = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isInChangeActivityTabNameExperiment:
              "v0" !==
              (null != (e = (0, b.qt)(t, "change_activity_tab_name"))
                ? e
                : "v0"),
          };
        },
        ne = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            isIn3DotMenuConsistencyExperiment:
              "v0" !==
              (null != (e = (0, b.qt)(t, "3_dot_menu_consistency")) ? e : "v0"),
          };
        },
        nt = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "ai_comment_analysis")) ? e : "v0";
          return {
            isInAiCommentAnalysisExperiment: "v0" !== n,
            isAiCommentAnalysisV1: "v1" === n,
          };
        },
        nn = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "webapp_comment_length")) ? e : "v0";
          return {
            maxCommentLength: "v0" !== n ? 2200 : 150,
            shouldFixCommentInputBugs: "v0" !== n,
            isCommentExpandable: ["v2", "v4"].includes(n),
            isNewCommentInput: ["v3", "v4"].includes(n),
          };
        },
        nr = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "explore_chips_unify_experiment"))
                ? e
                : "v0";
          return {
            isInExploreChipsExperiment: "v0" !== n,
            isExploreChipsQuiet: "v2" === n,
            isExploreChipsAlwaysSticky: "v3" === n,
            isExploreChipsAlwaysStickyQuiet: "v4" === n,
          };
        },
        ni = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "nuj_interest_selector")) ? e : "v0";
          return {
            isNujInterestSelectorControl: "v0" === n,
            isNujInterestSelectorWithLoginButton: "v1" === n,
            isNujInterestSelectorWithLoginBubble: "v2" === n,
          };
        },
        no = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            enableBrazil12hCumulativePlay:
              "v1" ===
              (null != (e = (0, b.qt)(t, "brazil_12hr_cumulative_play"))
                ? e
                : "v0"),
          };
        },
        na = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "default_volume")) ? e : "v0";
          return {
            isInDefaultVolumeExperiment: "v0" !== n,
            isDefaultVolumeV1: "v1" === n,
            isDefaultVolumeV2: "v2" === n,
            isDefaultVolumeV3: "v3" === n,
            isDefaultVolumeV4: "v4" === n,
          };
        },
        nu = function () {
          var e,
            t,
            n = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            r = (
              null !=
              (e = (0, w.U)(function () {
                return ["isMobile"];
              }, []))
                ? e
                : {}
            ).isMobile,
            i = "undefined" == typeof window,
            o = null != (t = (0, b.qt)(n, "login_popup_visual_P2")) ? t : "v0",
            a = i ? "v0" : o,
            u = i ? "" : window.location.pathname,
            s =
              /(?:^|\/)(login|signup|link-phone-or-email|oauth|oauthLine|account-delete)(?:\/|$)/.test(
                u,
              );
          return {
            displayQRLoginPopup: !r && !s && "v0" !== a,
            displayLiveLoginTitle: !r && !s && "v4" === a,
          };
        },
        ns = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, b.qt)(t, "autoplay_unmute")) ? e : "v0";
          return {
            isInAutoplayUnmuteExperiment: "v0" !== n,
            isHoverUnmuteTooltip: "v2" === n,
            isBothUnmuteTooltip: "v3" === n,
          };
        },
        nc = function () {
          var e;
          return {
            isSearchCoreContentAB:
              "v0" !==
              (null != (e = (0, b.d)("search_core_content")) ? e : "v0"),
          };
        };
      function nl() {
        var e,
          t = (0, V.wW)(),
          n = (0, A.L$)(
            (0, y.W)(function () {
              return ["abTestVersion"];
            }, []),
          ).abTestVersion,
          r = (0, b.qt)(n, "smartui_new_arch");
        return (
          (null == t || null == (e = t.parameters.smartui_new_arch)
            ? void 0
            : e.vid) ||
          r ||
          "v0"
        );
      }
      var np = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "FYP_Comment_Pannel_Enhance"))
                ? e
                : "v0";
          return {
            isFYPCommentPannelUIEnhanced: "v1" === n,
            isFYPCommentPannelDislike: "v2" === n,
            isFYPCommentPannelLoginUI: "v3" === n,
            isFYPCommentPannelFullEnhance: "v4" === n,
          };
        },
        nd = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "browser_comment_pannel_enhance"))
                ? e
                : "v0";
          return {
            enableBrowserCommentPannelUI: "v1" === n,
            enableBrowserCommentPannelLogin: "v2" === n,
          };
        },
        nf = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion;
          return {
            enablePhotoCommentEnhance:
              "v1" ===
              (null != (e = (0, b.qt)(t, "photo_comment_enhance")) ? e : "v0"),
          };
        },
        nv = function () {
          var e,
            t = (0, A.L$)(
              (0, y.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n =
              null != (e = (0, b.qt)(t, "webapp_following_accts_left_nav"))
                ? e
                : "v0";
          return {
            isInWebappFollowingAcctsLeftNavExperiment: "v0" !== n,
            isWebappFollowingAcctsLeftNavV1: "v1" === n,
            isWebappFollowingAcctsLeftNavV2: "v2" === n,
            isWebappFollowingAcctsLeftNavV3: "v3" === n,
          };
        };
    },
    70721: function (e, t, n) {
      n.d(t, {
        $X: function () {
          return f;
        },
        Ah: function () {
          return B;
        },
        BP: function () {
          return L;
        },
        CV: function () {
          return j;
        },
        DK: function () {
          return s;
        },
        F3: function () {
          return d;
        },
        HF: function () {
          return U;
        },
        Iw: function () {
          return S;
        },
        J3: function () {
          return A;
        },
        Ju: function () {
          return E;
        },
        Kt: function () {
          return a;
        },
        LA: function () {
          return I;
        },
        Ly: function () {
          return O;
        },
        M2: function () {
          return q;
        },
        Nd: function () {
          return $;
        },
        Nj: function () {
          return k;
        },
        O_: function () {
          return b;
        },
        Qi: function () {
          return _;
        },
        S0: function () {
          return m;
        },
        Sw: function () {
          return W;
        },
        Uw: function () {
          return M;
        },
        VD: function () {
          return x;
        },
        Z3: function () {
          return c;
        },
        _: function () {
          return g;
        },
        _2: function () {
          return v;
        },
        dj: function () {
          return K;
        },
        er: function () {
          return P;
        },
        f8: function () {
          return C;
        },
        fm: function () {
          return p;
        },
        gM: function () {
          return h;
        },
        iJ: function () {
          return w;
        },
        n9: function () {
          return N;
        },
        rd: function () {
          return V;
        },
        se: function () {
          return H;
        },
        sj: function () {
          return y;
        },
        tS: function () {
          return D;
        },
        v1: function () {
          return o;
        },
        vt: function () {
          return u;
        },
        vu: function () {
          return R;
        },
        xE: function () {
          return F;
        },
        xl: function () {
          return T;
        },
        z3: function () {
          return l;
        },
      });
      var r,
        i = n(32864),
        o = "webapp-pwa-expanded",
        a = "webapp-live-nav-click",
        u = "webapp_showed_profile_tip",
        s = "search_login",
        c = "search_history_list",
        l = "webapp_showed_explore_new_label",
        p = "showed_desktop_app_download",
        d = "time_of_last_prediction",
        f = "timeOfLastPopup",
        v = "periodic_login_reminder",
        _ = "br_ag",
        g = "pc_app_auto_tip",
        h = "suggest_account_bind_last_show",
        m = "last_watch_live_on_pc",
        A = "story_notice",
        y = "p_f_s_g_s",
        b = "webapp_launch_mode",
        w = "webapp_tiktok_open",
        T = "webapp_tiktok_privious",
        S = "webapp_open_edit_profile_modal_from",
        L = "popup_profile_toast",
        k = "watch_live_on_pc",
        P = "delay_guest_mode_vid",
        E = "passport_csrf_token",
        C = "passport_csrf_token_default",
        I = 3e4,
        V = 9,
        O = 9,
        M = 9,
        R = 30,
        x = 30,
        W = "Sorry, something wrong with the server, please try again.",
        F = 1988,
        q = 12,
        D = "tiktok_webapp_theme",
        U = "tiktok_webapp_theme_manual",
        N = "tiktok_webapp_theme_source",
        B = { secure: !0, expires: 300, domain: "www.tiktok.com" },
        j = (((r = {}).DarkTheme = "dark"), (r.LightTheme = "light"), r),
        $ = i.$m.concat(["CH", "US", "GB"]),
        G =
          "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/",
        Z = "https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/",
        H = {
          ROW: {
            remScript: "".concat(G, "tiktok/static/nginx/rem-script.js"),
            slardarWeb: "".concat(G, "slardar/sdk-pre/browser.web.pre.js"),
            serviceWorker: "".concat(
              G,
              "tiktok/static/nginx/service-worker.js",
            ),
          },
          TTP: {
            remScript: "".concat(Z, "tiktok/static/nginx/rem-script.js"),
            slardarWeb:
              "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/tiktok-infra/csp/sdk-pre/slardar.web.pre.js",
            serviceWorker: "".concat(
              Z,
              "tiktok/static/nginx/service-worker.js",
            ),
          },
        },
        K = "swiper-no-swiping";
    },
    16892: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r,
        i = (((r = {}).EcomEmail = "ecom_email"), (r.Business = "business"), r);
    },
    50211: function (e, t, n) {
      n.d(t, {
        Gu: function () {
          return r;
        },
        yH: function () {
          return i;
        },
      });
      var r = "tiktok_webapp",
        i = "tiktok_webapp_login";
    },
    45312: function (e, t, n) {
      n.d(t, {
        Ao: function () {
          return s;
        },
        Pv: function () {
          return u;
        },
        bA: function () {
          return l;
        },
        dG: function () {
          return c;
        },
      });
      var r = n(21987),
        i = n(90432),
        o = n(72701),
        a = r.l.getInstance(o.V$);
      function u(e, t) {
        (i.f.event("feed_top_cache", { valid: e }),
          a.context({ use_data_prefetched: e }),
          a.emitEvent(
            "feed_top_cache",
            { count: 1 },
            { status: String(e), pageName: t },
          ));
      }
      function s(e, t) {
        (i.f.event("feed_top_cache_invalid", {
          check_count: e,
          invalid_count: t,
          allInvalid: +(t >= e),
        }),
          a.emitEvent(
            "feed_top_cache_invalid",
            { count: 1 },
            {
              checkCount: String(e),
              invalidCount: String(t),
              allInvalid: t >= e ? "1" : "0",
            },
          ));
      }
      function c(e) {
        i.f.event("feed_fetch_error", { error_code: e });
      }
      function l(e) {
        a.emitEvent(
          "feed_cache_fetch",
          { count: 1 },
          { statusCode: String(e) },
        );
      }
    },
    13965: function (e, t, n) {
      n.d(t, {
        n2: function () {
          return r;
        },
      });
      var r = "perf_feed_cache";
    },
    33235: function (e, t, n) {
      n.d(t, {
        Mc: function () {
          return c;
        },
        Rv: function () {
          return s;
        },
        _1: function () {
          return l;
        },
      });
      var r,
        i = n(54333),
        o = n(88999),
        a = n(19742),
        u = n(67500),
        s =
          (((r = {})[(r.CacheValid = 0)] = "CacheValid"),
          (r[(r.CacheExpired = 1)] = "CacheExpired"),
          (r[(r.NoCache = 2)] = "NoCache"),
          (r[(r.UserChange = 3)] = "UserChange"),
          (r[(r.CacheUpdateSuccess = 4)] = "CacheUpdateSuccess"),
          (r[(r.NoCacheWithUpdatedPush = 8)] = "NoCacheWithUpdatedPush"),
          (r[(r.FetchThroughRPC = 9)] = "FetchThroughRPC"),
          r);
      function c(e) {
        var t,
          n,
          r,
          i,
          s,
          c,
          l,
          p,
          d,
          f = e.itemList,
          v = e.cacheUid,
          _ = e.uid,
          g = e.cacheWid,
          h = e.wid,
          m = (0, a.YI)("webapp.updated-items"),
          A = (0, o.x)().abTestVersion,
          y = null != (c = (0, u.V7)(A, "use_container_exp")) ? c : "v0",
          b = "v1" === y || "v3" === y;
        b &&
          (m =
            null !=
            (l =
              null == m
                ? void 0
                : m.filter(function (e) {
                    return !e.imagePost;
                  }))
              ? l
              : []);
        var w =
            null != (p = (0, u.V7)(A, "preload_expiration_extend")) ? p : "v0",
          T = null != (d = (0, u.V7)(A, "login_video_retention")) ? d : "v0";
        if (m && ("v0" !== w || "v1" === T))
          return { status: 9, validItemList: m };
        if (!f || 0 === f.length)
          if (m) return { status: 8, validItemList: m };
          else return { status: 2, validItemList: [] };
        if (
          ((n = (t = { cacheUid: v, cacheWid: g, wid: h, uid: _ }).cacheUid),
          (r = t.cacheWid),
          (i = t.wid),
          (s = t.uid),
          r !== i || (n && n !== s))
        )
          return { status: 3, validItemList: [] };
        var S = f.filter(function (e) {
          var t,
            n = null == (t = e.video) ? void 0 : t.cover,
            r = /x-expires=(\d+)/.exec(n),
            i = r && Date.now() < (Number(r[1]) - 60) * 1e3,
            o = b && e.imagePost;
          return i && !o;
        });
        if (0 === S.length)
          if (m) return { status: 4, validItemList: m };
          else return { status: 1, validItemList: [] };
        return { status: 0, validItemList: S };
      }
      function l(e) {
        if (0 === e.length) return 0;
        var t,
          n = e.map(function (e) {
            var t, n, r;
            return (
              (n = null == (t = e.video) ? void 0 : t.cover),
              (r = /x-expires=(\d+)/.exec(n)) ? 1e3 * Number(r[1]) : 0
            );
          });
        return (t = Math).min.apply(t, (0, i._)(n));
      }
    },
    3437: function (e, t, n) {
      n.d(t, {
        g9: function () {
          return c;
        },
        li: function () {
          return s;
        },
      });
      var r = n(69513),
        i = n(73628),
        o = n(82761),
        a = n(22481),
        u = (0, o.$)("ModalContext@tiktok/fe-shared")({
          counterRef: { current: 0 },
          scrollWidthRef: { current: 0 },
          subscribeRef: { current: [] },
          setCounter: r.A,
          setScrollWidth: r.A,
          subscribeModalChange: function () {
            return r.A;
          },
        });
      function s() {
        var e = (0, i.useRef)(0),
          t = (0, i.useRef)(0),
          n = (0, i.useRef)([]),
          r = (0, i.useCallback)(function (t) {
            e.current = t;
          }, []),
          o = (0, i.useCallback)(function (e) {
            t.current = e;
          }, []),
          a = (0, i.useCallback)(function (e) {
            return (
              n.current.push(e),
              function () {
                var t = n.current.indexOf(e);
                n.current.splice(t);
              }
            );
          }, []),
          s = (0, i.useMemo)(
            function () {
              return {
                counterRef: e,
                subscribeRef: n,
                scrollWidthRef: t,
                setCounter: r,
                setScrollWidth: o,
                subscribeModalChange: a,
              };
            },
            [a, r, o],
          );
        return { GlobalModalProvider: u.Provider, value: s };
      }
      function c() {
        var e = (0, i.useContext)(u),
          t = e.counterRef,
          n = e.setCounter,
          r = e.setScrollWidth,
          o = e.subscribeRef,
          s = e.scrollWidthRef,
          c = e.subscribeModalChange,
          l = (0, i.useCallback)(
            function (e) {
              o.current.forEach(function (t) {
                t({ hasModal: e, scrollWidth: s.current });
              });
            },
            [s, o],
          );
        return {
          showModal: (0, i.useCallback)(
            function (e, i) {
              if (((0, a.Lm)() || e) && !i) {
                var o = t.current;
                if ((n(o + 1), 0 === o)) {
                  var u = (0, a.aP)();
                  (r(u),
                    (document.body.style.paddingRight = "".concat(u, "px")),
                    (document.body.className += " hidden"),
                    l(!0));
                }
              }
            },
            [t, l, n, r],
          ),
          hideModal: (0, i.useCallback)(
            function () {
              var e = Math.max(0, t.current - 1);
              (n(e),
                0 === e &&
                  (r(0),
                  (document.body.className = document.body.className.replace(
                    /\s?hidden/g,
                    "",
                  )),
                  (document.body.style.paddingRight = "0px"),
                  l(!1)));
            },
            [t, l, n, r],
          ),
          subscribeModalChange: c,
        };
      }
    },
    33772: function (e, t, n) {
      n.d(t, {
        id: function () {
          return u;
        },
        qo: function () {
          return a;
        },
      });
      var r = n(88999),
        i = n(83368),
        o = n(6075),
        a = function () {
          var e,
            t,
            n,
            a,
            u,
            s = (0, r.x)().abTestVersion,
            c =
              null !=
              (a =
                null == s ||
                null == (t = s.parameters) ||
                null == (e = t.ff_avg_duration_portrait)
                  ? void 0
                  : e.vid)
                ? a
                : { vid: "v0" },
            l = null != (u = null == c ? void 0 : c.vid) ? u : "v0",
            p =
              "undefined" != typeof navigator
                ? null == (n = navigator)
                  ? void 0
                  : n.hardwareConcurrency
                : 4,
            d = (0, i.BX)(function (e) {
              var t;
              return (
                (null == (t = e.ff_duration_avg) ? void 0 : t.target) ===
                o.L.Low
              );
            });
          return { isLowEndDevice: "v0" !== l && (d || p < 4) };
        },
        u = function () {
          var e,
            t,
            n,
            i,
            o,
            a = (0, r.x)().abTestVersion,
            u =
              null !=
              (i =
                null == a ||
                null == (t = a.parameters) ||
                null == (e = t.vv_avg_per_day_portrait)
                  ? void 0
                  : e.vid)
                ? i
                : { vid: "v0" },
            s =
              null == a || null == (n = a.parameters.change_list_length_new)
                ? void 0
                : n.vid;
          return {
            enableVVAvgPerDayStrategy:
              "v0" !== (null != (o = null == u ? void 0 : u.vid) ? o : "v0"),
            defaultRecommendFetchCount: Number(s),
          };
        };
    },
    3660: function (e, t, n) {
      n.d(t, {
        Ig: function () {
          return c;
        },
        XJ: function () {
          return l;
        },
        _Y: function () {
          return p;
        },
      });
      var r = n(89485),
        i = n(10874),
        o = n(3595),
        a = n(37099),
        u = n(9602),
        s = n(16892),
        c = function () {
          return (
            new URLSearchParams((0, i.useLocation)().search).get("scene") ===
            s.Z.Business
          );
        },
        l = function () {
          return (
            "true" ===
            new URLSearchParams((0, i.useLocation)().search).get("allow_label")
          );
        },
        p = function (e) {
          var t = (0, a.VR)(function (e) {
              return e.businessPermission;
            }, r.bN),
            n = (0, u.B)().isElectronApp;
          return {
            path: t.message
              ? "/business-suite/messages?from=homepage&lang=".concat(e)
              : "".concat(o.OZ.messages, "?lang=").concat(e),
            target: n && t.message ? "_blank" : void 0,
          };
        };
    },
    73100: function (e, t, n) {
      n.d(t, {
        P: function () {
          return P;
        },
      });
      var r = n(79066),
        i = n(5377),
        o = n(45996),
        a = n(72516),
        u = n(73628),
        s = n(10874),
        c = n(58409),
        l = n(80660),
        p = n(10449),
        d = n(67500),
        f = n(95086),
        v = n(22481),
        _ = n(21708),
        g = n(21057),
        h = n(12442),
        m = n(65341),
        A = n(70721),
        y = n(48975),
        b = n(53048),
        w = n(45875),
        T = ["homepage_hot", "others_homepage"],
        S = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            r = (0, v._S)(A.F3);
          return !r || Date.now() - parseInt(r, 10) >= 1e3
            ? ((0, v.AP)(A.F3, Date.now().toString()), !0)
            : (w.w.handleInferenceDisqualify({
                enter_method: e,
                model_name: t,
                reason: "api_rate_control",
                page_name: n,
              }),
              !1);
        },
        L = function () {
          var e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          return e ? "segment_1" : (!T.includes(t), "segment_default");
        },
        k = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 6e4,
            t = (0, v._S)(A.$X);
          return !t || Date.now() - parseInt(t, 10) >= e;
        };
      function P() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = (0, c.b1)();
        if (
          ((0, u.useEffect)(function () {
            t && n.setCheckPredictionLogin({ showLoginOnLoad: !1 });
          }, []),
          t)
        )
          return { loginPredictionHandler: function () {} };
        var w = (0, l.L$)(
            (0, p.W)(function () {
              return ["user", "wid", "abTestVersion", "webIdCreatedTime"];
            }, []),
          ),
          T = w.user,
          P = w.abTestVersion,
          E = w.webIdCreatedTime,
          C = (0, d.qt)(P, "webapp_login_prediction_full"),
          I = (0, d.qt)(P, "webapp_login_prediction_reverse"),
          V = (0, d.qt)(P, "webapp_login_causal_inference_validation"),
          O = (0, s.useLocation)().pathname,
          M = (0, f.m)(E),
          R = !!V && "v1" !== V,
          x = (0, h._y)().getPriorityPopup,
          W = (0, h.lz)(function (e) {
            return {
              popupPriority: e.priority,
              isReady: e.isReadyList[m.H.LoginPopup],
            };
          }).popupPriority,
          F = (0, u.useMemo)(
            function () {
              return x(m.H.LoginPopup);
            },
            [x],
          ),
          q = F.handlePopoverInitial,
          D = F.handlePopoverEnd,
          U = function () {
            var t;
            (null == (t = e.closeCallback) || t.call(e), D());
          },
          N = (0, g.G)({
            modalConfig: (0, o._)(
              (0, i._)(
                {
                  closeable: !1,
                  isGuestMode: !1,
                  query: { enter_method: "model_based" },
                },
                e,
              ),
              { closeCallback: U },
            ),
          }),
          B = (0, g.G)({
            modalConfig: (0, o._)(
              (0, i._)(
                {
                  query: { enter_method: "guest_mode" },
                  isGuestMode: !1,
                  isGuestModeUI: !0,
                },
                e,
              ),
              { closeCallback: U },
            ),
          }),
          j = (0, u.useCallback)(
            function (e, t, i) {
              return (0, r._)(function () {
                var e;
                return (0, a.__generator)(this, function (r) {
                  return (
                    T ||
                      ((e = void 0 !== t && -1 >= t),
                      e &&
                        k(i) &&
                        W === m.H.LoginPopup &&
                        ((0, v.AP)(A.$X, Date.now().toString()), B(), q()),
                      n.setCheckPredictionLogin({ showLoginOnLoad: !1 })),
                    [2]
                  );
                });
              })();
            },
            [T, C || I, R, V, W, n, N, q, B],
          );
        return {
          loginPredictionHandler: (0, u.useCallback)(
            function () {
              var e = L(M, (0, v.Hd)(A.iJ)),
                t = [
                  {
                    expId: "webapp_login_prediction_full",
                    segmentId: e,
                    versionId: C,
                    propertyList: ["prediction_threshold"],
                  },
                  {
                    expId: "webapp_login_prediction_reverse",
                    segmentId: e,
                    versionId: I,
                    propertyList: ["prediction_threshold"],
                  },
                ],
                r = (0, y.J)(b.a, t),
                i = r.prediction_threshold,
                o = r.guest_mode_threshold,
                a = r.popup_interval;
              !T && (void 0 !== i || void 0 !== o || V)
                ? !S("app_load", "", "") ||
                  (0, _.mQ)(O) ||
                  (0, _.FJ)(O) ||
                  j(i, o, a)
                : n.setCheckPredictionLogin({ showLoginOnLoad: !1 });
            },
            [M, C, I, T, V, O, j, n],
          ),
        };
      }
    },
    53048: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      var r = {
        online: {
          segment_default: {
            v1: [{ name: "popup_interval", value: 432e5, priority: 0 }],
          },
        },
        webapp_mobile_web2app_cta_guide: {
          segment_default: {
            v1: [{ name: "prediction_threshold", value: 0.001, priority: 1 }],
            v2: [{ name: "prediction_threshold", value: 0.009, priority: 1 }],
            v3: [{ name: "prediction_threshold", value: 0.03, priority: 1 }],
            v4: [{ name: "prediction_threshold", value: 0.07, priority: 1 }],
          },
        },
        webapp_login_prediction: {
          segment_default: {
            v2: [
              { name: "prediction_threshold", value: 0.602572, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v3: [
              { name: "prediction_threshold", value: 0.261145, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v4: [
              { name: "prediction_threshold", value: 0.114536, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v5: [
              { name: "prediction_threshold", value: 0.067758, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v6: [
              { name: "prediction_threshold", value: 0.031474, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v7: [
              { name: "prediction_threshold", value: 0.018922, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v8: [
              { name: "prediction_threshold", value: 0.012345, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v9: [
              { name: "prediction_threshold", value: 0.008136, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
          },
        },
        webapp_causal_inference_periodic_popup_validation: {
          segment_default: {
            v1: [{ name: "popup_interval", value: 432e5, priority: 1 }],
            v2: [{ name: "popup_interval", value: 36e5, priority: 1 }],
            v3: [{ name: "popup_interval", value: 36e5, priority: 1 }],
            v4: [{ name: "popup_interval", value: 36e5, priority: 1 }],
            v5: [{ name: "popup_interval", value: 432e5, priority: 1 }],
            v6: [{ name: "popup_interval", value: 432e5, priority: 1 }],
            v7: [{ name: "popup_interval", value: 432e5, priority: 1 }],
          },
        },
        webapp_login_prediction_full: {
          segment_1: {
            v1: [
              { name: "prediction_threshold", value: 0.012345, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v2: [
              { name: "prediction_threshold", value: 0.012345, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
          },
          segment_2: {
            v1: [
              { name: "prediction_threshold", value: 0.114536, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
            v2: [
              { name: "prediction_threshold", value: 0.114536, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
          },
        },
        webapp_login_prediction_reverse: {
          segment_1: {
            v1: [
              { name: "prediction_threshold", value: 0.012345, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
          },
          segment_2: {
            v1: [
              { name: "prediction_threshold", value: 0.114536, priority: 1 },
              { name: "popup_interval", value: -1, priority: 1 },
            ],
          },
        },
        webapp_guest_mode: {
          segment_default: {
            v2: [
              { name: "cta_style", value: "default", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !1, priority: 0 },
            ],
            v3: [
              { name: "cta_style", value: "default", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !0, priority: 0 },
            ],
            v4: [
              { name: "cta_style", value: "default", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !1 },
            ],
            v5: [
              { name: "cta_style", value: "default", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !0 },
            ],
            v6: [
              { name: "cta_style", value: "line", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !1, priority: 0 },
            ],
            v7: [
              { name: "cta_style", value: "line", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !0, priority: 0 },
            ],
            v8: [
              { name: "cta_style", value: "line", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !1 },
            ],
            v9: [
              { name: "cta_style", value: "line", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !0 },
            ],
            v10: [
              { name: "cta_style", value: "primary", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !1, priority: 0 },
            ],
            v11: [
              { name: "cta_style", value: "primary", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !0, priority: 0 },
            ],
            v12: [
              { name: "cta_style", value: "primary", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !1 },
            ],
            v13: [
              { name: "cta_style", value: "primary", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !0 },
            ],
            v14: [
              { name: "cta_style", value: "text", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !1, priority: 0 },
            ],
            v15: [
              { name: "cta_style", value: "text", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_without",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_withoutSignup",
                priority: 0,
              },
              { name: "close_icon", value: !0, priority: 0 },
            ],
            v16: [
              { name: "cta_style", value: "text", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !1 },
            ],
            v17: [
              { name: "cta_style", value: "text", priority: 0 },
              {
                name: "login_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              {
                name: "signup_text",
                value: "pcWeb_guestLogin_guest",
                priority: 0,
              },
              { name: "close_icon", value: !0 },
            ],
          },
        },
        mobile_predictive_data: {
          segment_default: {
            v0: [{ name: "vv_count", value: -1, priority: 0 }],
            v1: [{ name: "vv_count", value: 3, priority: 0 }],
            v2: [{ name: "vv_count", value: 4, priority: 0 }],
            v3: [{ name: "vv_count", value: 5, priority: 0 }],
            v4: [{ name: "vv_count", value: 6, priority: 0 }],
            v5: [{ name: "vv_count", value: 7, priority: 0 }],
            v6: [{ name: "vv_count", value: 8, priority: 0 }],
            v7: [{ name: "vv_count", value: 9, priority: 0 }],
            v8: [{ name: "vv_count", value: 10, priority: 0 }],
            v9: [{ name: "vv_count", value: 11, priority: 0 }],
            v10: [{ name: "vv_count", value: 12, priority: 0 }],
            v11: [{ name: "vv_count", value: 13, priority: 0 }],
            v12: [{ name: "vv_count", value: 14, priority: 0 }],
            v13: [{ name: "vv_count", value: 15, priority: 0 }],
            v14: [{ name: "vv_count", value: 16, priority: 0 }],
            v15: [{ name: "vv_count", value: 17, priority: 0 }],
            v16: [{ name: "vv_count", value: 18, priority: 0 }],
            v17: [{ name: "vv_count", value: 19, priority: 0 }],
            v18: [{ name: "vv_count", value: 20, priority: 0 }],
            v19: [{ name: "vv_count", value: 21, priority: 0 }],
            v20: [{ name: "vv_count", value: 22, priority: 0 }],
            v21: [{ name: "vv_count", value: 23, priority: 0 }],
            v22: [{ name: "vv_count", value: 24, priority: 0 }],
            v23: [{ name: "vv_count", value: 25, priority: 0 }],
            v24: [{ name: "vv_count", value: 26, priority: 0 }],
            v25: [{ name: "vv_count", value: 27, priority: 0 }],
            v26: [{ name: "vv_count", value: 28, priority: 0 }],
            v27: [{ name: "vv_count", value: 29, priority: 0 }],
            v28: [{ name: "vv_count", value: 30, priority: 0 }],
            v29: [{ name: "vv_count", value: 31, priority: 0 }],
          },
        },
      };
    },
    48975: function (e, t, n) {
      n.d(t, {
        J: function () {
          return i;
        },
      });
      var r = n(6586);
      function i(e, t) {
        var n = {},
          i = t.reduce(function (e, t) {
            var n = t.expId,
              r = t.segmentId,
              i = t.versionId,
              o = t.propertyList;
            return (
              n &&
                r &&
                i &&
                o.forEach(function (t) {
                  ((e[t] = e[t] || []),
                    e[t].push({
                      expId: n,
                      segmentId: r,
                      versionId: i,
                      propertyName: t,
                    }));
                }),
              e
            );
          }, {}),
          o = !0,
          a = !1,
          u = void 0;
        try {
          for (
            var s, c = Object.entries(i)[Symbol.iterator]();
            !(o = (s = c.next()).done);
            o = !0
          ) {
            var l = (0, r._)(s.value, 2),
              p = l[0],
              d = l[1],
              f = (function (e, t) {
                var n = t
                  .map(function (t) {
                    return (function (e, t) {
                      var n = t.expId,
                        r = t.segmentId,
                        i = t.versionId,
                        o = t.propertyName,
                        a = e[n];
                      if (!a)
                        return void console.error(
                          "Error. Experiment: ".concat(n, " not found!"),
                        );
                      var u = a[r];
                      if (u && i) {
                        var s = u[i];
                        if (s)
                          return s.find(function (e) {
                            return e.name === o;
                          });
                      }
                    })(e, t);
                  })
                  .filter(function (e) {
                    return void 0 !== e;
                  });
                if (0 !== n.length)
                  return n.reduce(function (e, t) {
                    return t.priority > e.priority ? t : e;
                  }).value;
              })(e, d);
            n[p] = f;
          }
        } catch (e) {
          ((a = !0), (u = e));
        } finally {
          try {
            o || null == c.return || c.return();
          } finally {
            if (a) throw u;
          }
        }
        return n;
      }
    },
    93017: function (e, t, n) {
      (n.d(t, {
        $b: function () {
          return c;
        },
        HZ: function () {
          return l;
        },
        Pl: function () {
          return d;
        },
        QA: function () {
          return p;
        },
        dg: function () {
          return s;
        },
      }),
        n(44471));
      var r,
        i,
        o = n(88062),
        a = n(82761),
        u = n(58034);
      (0, a.$)("SlardarControlContext@tiktok/fe-shared")(!1);
      var s = {
          plugins: {
            ajax: {
              ignoreUrls: [
                ".byteoversea.com",
                /mcs.*\.tiktok[vw]?\.(com|us|eu)/,
                ".tiktokcdn.com",
                ".tiktokcdn-us.com",
                "mon.tiktokv.(com|us|eu)",
                "ttwid/check",
                "passport/token/beat/web",
                /.*-webapp-prime\.(.*\.)?tiktok\.com/,
              ],
            },
            fetch: {
              ignoreUrls: [
                ".tiktokcdn.com",
                ".tiktokcdn-us.com",
                "mon.tiktokv.(com|us|eu)",
                "policy/notice",
                "feedback/v1/newest_reply",
                "ba/business/suite/permission/list",
                /.*-webapp-prime\.(.*\.)?tiktok\.com/,
              ],
            },
            jsError: {
              ignoreErrors: [
                "Blocked a frame with origin",
                "__msg_type",
                "vid_mate_check is not defined",
                "ResizeObserver loop limit exceeded",
                'Video playback error: {"errorCode":',
                "Object Not Found Matching Id",
                "The play method is not allowed by the user agent",
                "The play() request was interrupted",
                "Failed to load because no supported source was found",
                "The request is not allowed by the user agent or the platform in the current context",
                "Fetch is aborted",
                "The operation was aborted",
              ],
            },
            resource: { slowSessionThreshold: 1e5 },
            fmp: !1,
            tti: !1,
            pageview: { sendInit: !0, routeMode: "manual" },
          },
          sample: {
            sample_rate: 1,
            sample_granularity: "session",
            include_users: [],
            rules: {
              resource: {
                enable: !0,
                sample_rate: 0.01,
                conditional_sample_rules: [],
              },
              resource_error: {
                enable: !0,
                sample_rate: 0.05,
                conditional_sample_rules: [],
              },
              performance_longtask: {
                enable: !0,
                sample_rate: 0.001,
                conditional_sample_rules: [],
              },
            },
          },
          env: "production",
          release: "2.5.0.252",
          slardarClient: "SlardarClient",
          manual: 1,
          sdkUrl: o.Qn.row,
          pluginPathPrefix: o.tz.row,
        },
        c =
          (((r = {}).P0 = "fatal"),
          (r.P1 = "error"),
          (r.P2 = "warning"),
          (r.P3 = "info"),
          (r.P4 = "debug"),
          (r.P5 = "critical"),
          r),
        l = ["lcp", "fp", "fid", "ttfb", "mpfid", "fcp", "actual_fmp"],
        p = new Set([u.ey.OneColumn, u.ey.ThreeColumn, u.ey.VideoDetail]),
        d =
          (((i = {}).TTAPPluginInfo = "ttapplugin_info"),
          (i.TTAPPluginFirstScreenRequest = "ttapplugin_first_screen_request"),
          (i.TTAPPluginEffectiveOpenPage = "ttapplugin_effective_open_page"),
          (i.TTAPPluginCustomRequest = "ttapplugin_custom_request"),
          (i.actualFMP = "actual_fmp"),
          (i.LoginClickToNotifyDuration = "login_click_to_notify_duration"),
          (i.UiTrimmingEvent = "ui_trimming_kep_event"),
          (i.actualTTI = "actual_tti"),
          i);
    },
    70099: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      var r = (0, n(54333)._)([
        "live_im_sdk_socket_link",
        "live_www_host",
        "live_room_container_upgrade",
        "live_room_container_upgrade_gift_more",
        "webapp_live_desktop_gulux",
        "live_un_logged_in_definition_client",
        "live_wallet_pc_live_room_recharge",
        "fyp_live_highlight_preview_opt",
        "live_highlight_preview_expand",
        "live_room_prerender",
        "live-ring-stroke",
        "live_feed_checkalive_interval_20vs5_exp",
        "live_chunk_load_err_opt",
        "live_chat_comment_tray",
        "live_full_screen_comment",
        "live_chat_input_focus_opt",
        "webapp_live_discover_feed_prefetch",
      ]).concat([
        "image_fetch_priority",
        "user_bundle_opt",
        "sharing_video_first",
        "live_recharge_login_sdk",
        "page_loading_tiny_changes",
        "react_upgrade_experiment",
        "kep_streaming",
        "user_ssg",
        "organic_video_streaming",
        "mobile_micro_frontend_all_pages",
        "mobile_micro_frontends",
        "smartui_new_arch",
        "live_react_v18",
        "sharing_video_streaming",
        "kep_cta_style",
        "vanilla_js_kep",
        "kep_inp_inspect",
        "desktop_rspack",
        "streaming_legacy_optimization",
        "desktop_bundle_opt",
        "desktop_landing_opt",
        "page_stability_opt",
        "page_stability_strategy",
        "tt_player_event_trigger",
        "webmssdk_update",
        "tt_player_event_trigger",
        "ui_trimming_kep",
        "ui_trimming_kep_mixed",
        "ui_trimming_kep_device",
        "ui_trimming_kep_network",
        "ui_trimming_kep_region",
        "login_vmok",
        "webapp_nu_rpc_opt",
        "webapp_nu_rpc_count",
        "sharing_rsbuild",
        "sharing_rerender_optimize",
        "sharing_bundle_opt",
        "kep_lottie_animation",
      ]);
    },
    72701: function (e, t, n) {
      n.d(t, {
        Yr: function () {
          return D;
        },
        V$: function () {
          return q;
        },
        ng: function () {
          return U;
        },
      });
      var r = n(48748),
        i = n(95170),
        o = n(35383),
        a = n(36925),
        u = n(45899),
        s = n(7120),
        c = n(41386),
        l = n(5377),
        p = n(45996),
        d = n(6586),
        f = n(79262),
        v = n(3452),
        _ = n.n(v),
        g = n(45545),
        h = n(97623),
        m = n(43274),
        A = n(21987),
        y = n(15377),
        b = n(37633),
        w = n(90432),
        T = n(58034),
        S = n(89134),
        L = n(71053),
        k = n(50211),
        P = n(93017),
        E = n(54333),
        C = n(60065),
        I = n(93085),
        V = n(88062),
        O = n(40832),
        M = n(96073),
        R = n(70099),
        x = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.message,
            n = e.defaultResult;
          return function (e, r, i) {
            var o = i.value;
            return (
              (i.value = function () {
                for (var i = arguments.length, a = Array(i), u = 0; u < i; u++)
                  a[u] = arguments[u];
                try {
                  var s = o.apply(this, a);
                  if (
                    (s && (0, c._)(s, Promise)) ||
                    (((void 0 === s ? "undefined" : (0, f._)(s)) === "object" ||
                      "function" == typeof s) &&
                      "function" == typeof s.then &&
                      "function" == typeof s.catch)
                  )
                    return s.catch(function (i) {
                      return (
                        console.error(
                          ""
                            .concat(e.constructor.name, ".")
                            .concat(r.toString())
                            .concat(t ? " ".concat(t) : "", ": ")
                            .concat(i),
                        ),
                        n
                      );
                    });
                  return s;
                } catch (i) {
                  return (
                    console.error(
                      ""
                        .concat(e.constructor.name, ".")
                        .concat(r.toString())
                        .concat(t ? " ".concat(t) : "", ": ")
                        .concat(i),
                    ),
                    n
                  );
                }
              }),
              i
            );
          };
        };
      function W(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, f._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function F(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, f._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      ("undefined" == typeof window ? "undefined" : (0, f._)(window)) !==
        "object" ||
        window.__$vmok_bundle$__ ||
        (0, S.fU)() ||
        g.O.setGlobalSlardarName("SlardarClient");
      var q = (function () {
        function e() {
          ((0, i._)(this, e),
            (this.cachePreBid = ""),
            (this._isPvFirstlyReported = !1),
            (this._config = null),
            (this._extraInfo = null),
            (this._hasStart = !1),
            (this._lastReadyKey = ""),
            (this._slardar = g.O));
        }
        var t = e.prototype;
        return (
          (t.hasStarted = function () {
            return this._hasStart;
          }),
          (t.mountBeforeSendEvent = function () {
            var e = this;
            this._slardar.on("beforeSend", function (t) {
              try {
                if (
                  ("performance" === t.ev_type &&
                    ("metrics" in t.payload
                      ? t.payload.metrics.forEach(e.collectSlardarMetricsToTea)
                      : e.collectSlardarMetricsToTea(
                          t.payload,
                          null == (n = t.common) ? void 0 : n.pid,
                        )),
                  "performance_timing" === t.ev_type)
                ) {
                  var n,
                    r,
                    i,
                    o,
                    a = null != (i = t.payload.timing) ? i : {},
                    u = a.responseEnd,
                    s = a.responseStart,
                    c = a.domContentLoadedEventEnd,
                    l = a.fetchStart,
                    p = a.navigationStart,
                    d =
                      null !=
                      (o = null == (r = t.payload.common) ? void 0 : r.pid)
                        ? o
                        : "unknown",
                    f = c - l,
                    v = u - s,
                    _ = s - p;
                  (w.f.event("slardar_perf_domready", {
                    metric_duration: f && f > 0 ? f.toString() : -1,
                    pid: d,
                  }),
                    w.f.event("slardar_perf_response", {
                      metric_duration: v && v > 0 ? v.toString() : -1,
                      pid: d,
                    }),
                    w.f.event("slardar_perf_ttfb", {
                      metric_duration: _ && _ > 0 ? _.toString() : -1,
                      pid: d,
                    }));
                }
                if (
                  "custom" === t.ev_type &&
                  (null == (g = t.payload) ? void 0 : g.name) ===
                    "video_play_end"
                ) {
                  var g,
                    h,
                    m = (null != (h = t.common.context) ? h : {}).idc;
                  t.common.context = m ? { idc: m } : {};
                }
              } catch (e) {}
              return t;
            });
          }),
          (t.init = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = arguments.length > 3 ? arguments[3] : void 0;
            if (((this._option = r), t)) return void this.preserveConfig(e);
            this._slardar.init((0, l._)({ ttap: (0, l._)({}, n) }, e));
          }),
          (t.start = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            (this._config &&
              e &&
              !this._hasStart &&
              (this.init((0, p._)((0, l._)({}, this._config), { pid: e })),
              (this._hasStart = !0),
              this._extraInfo && this.config(this._extraInfo)),
              this._slardar.start());
          }),
          (t.config = function (e) {
            ("pid" in e &&
              !this._isPvFirstlyReported &&
              ((this._isPvFirstlyReported = !0),
              this.context({ isLandingPage: 0 })),
              this._slardar.config(e));
          }),
          (t.registerImageXPlugin = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0.01;
            return e ? [_().imageReport({ debug: !1, sample_rate: t })] : [];
          }),
          (t.toggleLoginSlardar = function (e) {
            var t, n;
            (null != (t = this._option) && t.disableToggleLoginSlardar) ||
              (e
                ? ((null == (n = this._slardar.config()) ? void 0 : n.bid) &&
                    (this.cachePreBid = this._slardar.config().bid),
                  this.config({ bid: k.yH }))
                : this.config({ bid: this.cachePreBid }));
          }),
          (t.context = function (e) {
            var t = this;
            Object.entries(e).forEach(function (e) {
              var n = (0, d._)(e, 2),
                r = n[0],
                i = n[1];
              t._slardar.context((0, o._)({}, r, i));
            });
          }),
          (t.captureMessage = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = arguments.length > 1 ? arguments[1] : void 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = arguments.length > 3 ? arguments[3] : void 0;
            this._slardar.captureException(
              "string" == typeof e ? Error(e) : e,
              t ? (0, p._)((0, l._)({}, n), { level: t }) : n,
              r,
            );
          }),
          (t.emitEvent = function (e, t, n) {
            this._slardar.sendEvent({ name: e, categories: n, metrics: t });
          }),
          (t.reportI18nLoadedFailed = function (e, t) {
            this.emitEvent(
              "I18nLoadFailed",
              { count: 1 },
              { staringName: e, lang: t },
            );
          }),
          (t.sendLog = function (e, t, n) {
            this._slardar.sendLog({ content: e, level: t, extra: n });
          }),
          (t.sendPV = function (e) {
            this._slardar.rawInstance()("sendPageview", e);
          }),
          (t.previousPid = function () {
            var e;
            return null == (e = this._slardar.config()) ? void 0 : e.pid;
          }),
          (t.sendCustomPerfMetric = function (e, t) {
            var n = null != t ? t : performance.now();
            this._slardar.sendCustomPerfMetric({
              name: e,
              value: n,
              isCustom: !0,
            });
          }),
          (t.preserveConfig = function (e) {
            this._config = e;
          }),
          (t.preserveExtraInfo = function (e) {
            this._extraInfo = e;
          }),
          (t.collectSlardarMetricsToTea = function (e, t) {
            if (e.isSupport || e.isPolyfill) {
              var n = e.name.toLowerCase();
              P.HZ.includes(n) &&
                w.f.event("slardar_perf_".concat(n), {
                  metric_duration: e.value.toString(),
                  pid: null != t ? t : "unknown",
                  is_support: e.isSupport ? "1" : "0",
                });
            }
          }),
          (t.reportActualFMP = function () {
            return this._slardar.reportActualFMP();
          }),
          (t.reportRenderStart = function () {
            return this._slardar.reportRenderStart();
          }),
          (t.reportRenderEnd = function () {
            return this._slardar.reportRenderEnd();
          }),
          (t.reportFirstScreenRequest = function (e, t) {
            this._slardar.reportFirstScreenRequest(e, t);
          }),
          (t.reportCustomRequest = function (e) {
            var t,
              n,
              r,
              i = e.name,
              o = e.startTime,
              a = e.endTime,
              u =
                (null == (n = performance) || null == (t = n.timing)
                  ? void 0
                  : t.navigationStart) ||
                (null == (r = performance) ? void 0 : r.timeOrigin);
            this._slardar.reportCustomRequest(i, null != o ? o : u, a);
          }),
          (t.reportPageReady = function (e) {
            if (!e || P.QA.has(e)) {
              var t,
                n = w.f.commonParams.page_name,
                r = null == (t = location) ? void 0 : t.pathname,
                i = e === T.ey.OneColumn ? n : r;
              void 0 !== i &&
                i !== this._lastReadyKey &&
                ((this._lastReadyKey = i), this._slardar.reportPageReady());
            }
          }),
          (t.reportStabilityEvent = function (e) {
            this._slardar.reportStabilityEvent(e);
          }),
          (t.reportStabilityStack = function (e) {
            this._slardar.reportStabilityStack(e);
          }),
          (t.reportRouteRenderStart = function () {
            this._slardar.reportRouteRenderStart();
          }),
          (t.reportRouteRenderEnd = function () {
            this._slardar.reportRouteRenderEnd();
          }),
          (t.reportPageCrash = function (e) {
            this._slardar.reportPageCrash(e);
          }),
          (t.reportComponentCrash = function (e) {
            this._slardar.reportComponentCrash(e);
          }),
          (t.reportFeatureCrash = function (e) {
            this._slardar.reportCrash(
              (0, p._)((0, l._)({}, e), {
                customErrorName: "FeatureUnavailableError",
              }),
            );
          }),
          e
        );
      })();
      ((q.start = function (e, t) {
        var n,
          r,
          i,
          o,
          a = t.bid,
          u = t.initLocation,
          s = t.appContext,
          c = t.bizContext,
          d = t.reportImage,
          f = t.slardarConfig,
          v = t.ttapOption,
          _ = t.disableToggleLoginSlardar,
          g = t.extractPid,
          h =
            void 0 === g
              ? function (e) {
                  return e;
                }
              : g,
          m = t.customContext,
          A = t.beforeStart,
          y = t.customMountBeforeSendEvent,
          b = null != s ? s : {},
          w = b.abTestVersion,
          T = b.env,
          L = b.botType,
          k = b.user,
          x = b.wid,
          W = b.region,
          F = null != c ? c : {},
          q = F.isMobile,
          D = F.isTTP,
          U = F.domains,
          N = F.idc,
          B = F.config,
          j =
            !!d ||
            (null == w || null == (n = w.parameters.enable_slardar_image)
              ? void 0
              : n.vid) === "v2",
          $ = function (e) {
            var t = h(e);
            return t === O.L.DelayStartUntilManuallyCalled ? O.L.Unknown : t;
          };
        return (
          e.context(
            (0, l._)(
              (0, p._)(
                (0, l._)(
                  {
                    region: null != W ? W : "",
                    botType: null != L ? L : "",
                    isMobile: (!!q).toString(),
                    isDowngrade: (0, S.qk)().toString(),
                    isLogin: (!!k).toString(),
                    isPPE: (null == T ? void 0 : T.type) === "ppe",
                    isLandingPage: 1,
                    isSSGPage: (0, S.$y)(),
                    launchMode: (0, S.fU)() ? "" : (0, M.o7)(),
                  },
                  (0, C.A)(
                    (0, I.A)(
                      null != (i = null == w ? void 0 : w.parameters) ? i : {},
                      function (e) {
                        return null == e ? void 0 : e.vid;
                      },
                    ),
                    function (e, t) {
                      return R.s.includes(t);
                    },
                  ),
                ),
                {
                  uid: null != (o = null == k ? void 0 : k.uid) ? o : "",
                  idc: null != N ? N : "unknown",
                },
              ),
              m,
            ),
          ),
          e.mountBeforeSendEvent(),
          null == y || y(e._slardar),
          e.init(
            (0, l._)(
              (0, p._)(
                (0, l._)(
                  (0, p._)((0, l._)({}, P.dg), {
                    bid: a,
                    env:
                      (null == T ? void 0 : T.type) === "boe" ||
                      (null == T ? void 0 : T.type) === "ppe"
                        ? "test"
                        : "production",
                    domain:
                      (null == B || null == (r = B.featureFlags)
                        ? void 0
                        : r.slardar_sg_domain) && "SG" === W
                        ? "mon-sg.tiktokv.com"
                        : null == U
                          ? void 0
                          : U.slardar,
                    useLocalConfig:
                      (null == T ? void 0 : T.type) === "ppe" ||
                      (null == T ? void 0 : T.type) === "boe",
                    integrations: (0, E._)(
                      e.registerImageXPlugin(
                        j,
                        d && "boolean" != typeof d ? d.sample : void 0,
                      ),
                    ),
                  }),
                  D ? { sdkUrl: V.Qn.us, pluginPathPrefix: V.tz.us } : {},
                ),
                { pid: $("string" == typeof u ? u : u.pathname), userId: x },
              ),
              void 0 === f ? {} : f,
            ),
            !1,
            (0, l._)({ isSpa: !0 }, void 0 === v ? {} : v),
            { disableToggleLoginSlardar: void 0 !== _ && _ },
          ),
          "function" == typeof A
            ? A()
                .finally(function () {
                  e.start();
                })
                .catch(function (e) {
                  console.error("beforeStart failed", e);
                })
            : e.start(),
          {
            handleLocationChange: function (t) {
              var n = $("string" == typeof t ? t : t.pathname);
              (e.context({ isLandingPage: 0 }), e.sendPV(n));
            },
            slardar: e,
          }
        );
      }),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "mountBeforeSendEvent",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof Partial ? Object : Partial,
              void 0,
              Object,
              "undefined" == typeof SlardarServiceOption
                ? Object
                : SlardarServiceOption,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "init",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [String]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "start",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof Partial ? Object : Partial,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "config",
          null,
        ),
        W(
          [
            x({ defaultResult: [] }),
            F("design:type", Function),
            F("design:paramtypes", [Boolean, void 0]),
            F("design:returntype", Object),
          ],
          q.prototype,
          "registerImageXPlugin",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Boolean]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "toggleLoginSlardar",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof Record ? Object : Record,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "context",
          null,
        ),
        W(
          [
            x({ message: "capture exception error" }),
            F("design:type", Function),
            F("design:paramtypes", [
              Object,
              void 0 === P.$b ? Object : P.$b,
              "undefined" == typeof Record ? Object : Record,
              "undefined" == typeof ReactInfo ? Object : ReactInfo,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "captureMessage",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              String,
              "undefined" == typeof Record ? Object : Record,
              "undefined" == typeof Record ? Object : Record,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "emitEvent",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [String, String]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportI18nLoadedFailed",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              String,
              String,
              "undefined" == typeof Record ? Object : Record,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "sendLog",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [String]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "sendPV",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "previousPid",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [void 0 === P.Pl ? Object : P.Pl, Number]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "sendCustomPerfMetric",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof Partial ? Object : Partial,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "preserveConfig",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof Record ? Object : Record,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "preserveExtraInfo",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof PerformancePayload
                ? Object
                : PerformancePayload,
              Object,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "collectSlardarMetricsToTea",
          null,
        ),
        W(
          [
            x({ defaultResult: 0 }),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", Number),
          ],
          q.prototype,
          "reportActualFMP",
          null,
        ),
        W(
          [
            x({ defaultResult: 0 }),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", Number),
          ],
          q.prototype,
          "reportRenderStart",
          null,
        ),
        W(
          [
            x({ defaultResult: 0 }),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", Number),
          ],
          q.prototype,
          "reportRenderEnd",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Number, Number]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportFirstScreenRequest",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Object]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportCustomRequest",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [void 0 === T.ey ? Object : T.ey]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportPageReady",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof CommonStabilityEventProps
                ? Object
                : CommonStabilityEventProps,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportStabilityEvent",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [
              "undefined" == typeof CommonStabilityStackProps
                ? Object
                : CommonStabilityStackProps,
            ]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportStabilityStack",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportRouteRenderStart",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", []),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportRouteRenderEnd",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Object]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportPageCrash",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Object]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportComponentCrash",
          null,
        ),
        W(
          [
            x(),
            F("design:type", Function),
            F("design:paramtypes", [Object]),
            F("design:returntype", void 0),
          ],
          q.prototype,
          "reportFeatureCrash",
          null,
        ),
        (q = W([(0, h._q)({ name: "SlardarService@tiktok/fe-shared" })], q)));
      var D = function (e) {
          var t = "createIsolatedSlardarService_".concat(
            e,
            "@tiktok/fe-shared",
          );
          return (0, b.U)("instanceof_".concat(t), function () {
            var n,
              o = (0, b.U)(t, function () {
                return new m.n(e);
              });
            A.l.addProvider({ provide: o, useClass: q });
            var d = { provide: o, useExisting: o },
              f = (function (t) {
                function n() {
                  var t;
                  return (
                    (0, i._)(this, n),
                    ((t = (0, r._)(this, n))._slardar = g.O.create(e)),
                    t
                  );
                }
                (0, s._)(n, t);
                var o = n.prototype;
                return (
                  (o.reportActualFMP = function () {
                    return 0;
                  }),
                  (o.reportFirstScreenRequest = function () {}),
                  (o.reportRenderEnd = function () {
                    return 0;
                  }),
                  (o.reportRenderStart = function () {
                    return 0;
                  }),
                  (o.reportCustomRequest = function () {}),
                  (o.reportRouteRenderEnd = function () {}),
                  (o.reportRouteRenderStart = function () {}),
                  (o.emitEvent = function (e, t, r) {
                    var i = L.nf.getTrackingInfo();
                    (0, a._)((0, u._)(n.prototype), "emitEvent", this).call(
                      this,
                      e,
                      t,
                      (0, l._)({}, r, i),
                    );
                  }),
                  n
                );
              })(q);
            return (
              (f = W(
                [
                  (0, h._q)({
                    name: "IsolatedSlardarService@tiktok/fe-shared",
                  }),
                  F("design:type", Function),
                  F("design:paramtypes", []),
                ],
                f,
              )),
              {
                inject: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : f;
                  A.l.addProvider({ provide: o, useClass: e });
                },
                getInstance: function () {
                  return A.l.getInstance(d);
                },
                useInstance: function () {
                  return (0, y.Nj)(d);
                },
                isIsolated: function () {
                  return (0, c._)(A.l.getInstance(d), f);
                },
                start: function (e) {
                  var t,
                    r = A.l.getInstance(d);
                  if ((0, c._)(r, f)) {
                    if (n) return n.handleLocationChange(e.initLocation);
                    n = q.start(
                      r,
                      (0, p._)((0, l._)({}, e), {
                        slardarConfig: (0, p._)((0, l._)({}, e.slardarConfig), {
                          plugins: (0, l._)(
                            (0, p._)((0, l._)({}, P.dg.plugins), {
                              performance: !1,
                            }),
                            null == (t = e.slardarConfig) ? void 0 : t.plugins,
                          ),
                        }),
                      }),
                    );
                  }
                },
                handleLocationChange: function (e) {
                  null == n || n.handleLocationChange(e);
                },
                INJECTION_TOKEN: o,
              }
            );
          });
        },
        U = A.l.getInstance(q);
    },
    77288: function (e, t, n) {
      n.d(t, {
        Du: function () {
          return P;
        },
        Gg: function () {
          return C;
        },
        LT: function () {
          return E;
        },
        ct: function () {
          return k;
        },
        tF: function () {
          return S;
        },
        ym: function () {
          return L;
        },
      });
      var r = n(5377),
        i = n(45996),
        o = n(16327),
        a = n(26869),
        u = n(73628),
        s = n(10874),
        c = n(15377),
        l = n(72326),
        p = n(90432),
        d = n(66917),
        f = n(4115),
        v = n(38456),
        _ = n(42684),
        g = n(59070),
        h = n(80660),
        m = n(10449),
        A = n(81047),
        y = n(89134),
        b = n(21708),
        w = n(73100),
        T = n(26045);
      function S(e, t) {
        var n,
          o = (0, h.L$)(
            (0, m.W)(function () {
              return [
                "region",
                "user",
                "wid",
                "abTestVersion",
                "language",
                "odinId",
              ];
            }, []),
          ),
          a = (0, h.L$)(
            (0, A.U)(function () {
              return ["domains", "vgeo"];
            }, []),
          ),
          u = o.abTestVersion,
          s = o.user,
          c = (0, g.mx)(u, null != (n = null == s ? void 0 : s.uid) ? n : "");
        (0, l.W0)(
          (0, r._)({}, a, o),
          function () {
            return (0, i._)((0, r._)({}, e()), {
              is_downgrade: (0, y.qk)(),
              is_non_personalized: c ? "1" : "0",
            });
          },
          t,
        );
      }
      function L(e, t) {
        var n = (0, w.P)(e, t).loginPredictionHandler;
        (0, u.useEffect)(
          function () {
            n();
          },
          [n],
        );
      }
      function k(e) {
        var t,
          n,
          i = e.eParams,
          c =
            null !=
            (t = (0, m.W)(function () {
              return ["botType", "webIdCreatedTime"];
            }, []))
              ? t
              : {},
          l = c.botType,
          p = c.webIdCreatedTime,
          d = (
            null !=
            (n = (0, A.U)(function () {
              return ["isMobile"];
            }, []))
              ? n
              : {}
          ).isMobile,
          v = (0, s.useLocation)(),
          _ = v.search,
          g = v.pathname,
          h = (0, a.parse)(_);
        return (0, u.useCallback)(
          function () {
            var e,
              t = i || {},
              n = t.is_from_webapp,
              a = (0, o._)(t, ["is_from_webapp"]),
              u = h.sender_web_id
                ? {
                    sender_device: h.sender_device,
                    sender_web_id: h.sender_web_id,
                  }
                : {},
              s =
                d ||
                (0, b.tO)(g) ||
                ((e = "#".concat(location.pathname)),
                /^#\/@.*\/video\/\d+$/.test(e)) ||
                location.search.indexOf("item_id") > -1
                  ? (0, r._)(
                      {
                        is_from_webapp:
                          n || ["v1", "v2", "v3"].indexOf(h.is_from_webapp) > -1
                            ? h.is_from_webapp
                            : "0",
                      },
                      u,
                    )
                  : {},
              c = {
                browser_height:
                  "undefined" != typeof window ? window.innerHeight : 0,
                browser_width:
                  "undefined" != typeof window ? window.innerWidth : 0,
              },
              v = (0, r._)(
                {
                  bot_type: null != l ? l : "others",
                  keyword: h.keyword,
                  sub_keyword: h.sub_keyword,
                  duration: performance.now(),
                  webIdCreatedTime: p,
                },
                a,
                s,
                c,
              );
            f.O.handlePageView(v);
          },
          [
            i,
            h.sender_web_id,
            h.sender_device,
            h.is_from_webapp,
            d,
            h.keyword,
            h.sub_keyword,
            g,
            l,
          ],
        );
      }
      function P(e) {
        var t = (0, s.useLocation)().pathname,
          n = (0, c.Nj)(v.AU);
        (0, u.useEffect)(
          function () {
            var e = (0, T.N2)(t);
            (n.handleRouteChange(t),
              n.updateCurrentPage(e),
              n.setCurrentPageReport(!1),
              n.resetExist(),
              n.reportVideoAdditionStart({
                startTime: Date.now(),
                situation: v.uT.AdditionFirstLoad,
              }));
          },
          [n, e, t],
        );
      }
      function E() {
        var e = (0, c.Nj)(_.Gs);
        (0, u.useEffect)(
          function () {
            e.reset();
          },
          [e],
        );
      }
      function C() {
        var e = (0, h.L$)(
            (0, m.W)(function () {
              return ["region", "user", "wid", "abTestVersion", "language"];
            }, []),
          ),
          t = (0, h.L$)(
            (0, A.U)(function () {
              return ["domains", "vgeo"];
            }, []),
          ),
          n = (0, u.useMemo)(
            function () {
              return (0, r._)({}, e, t);
            },
            [e, t],
          ),
          o = n.user,
          a = n.region,
          s = n.wid,
          c = n.domains,
          f = n.vgeo;
        return (0, u.useCallback)(
          function (e) {
            var t,
              u,
              v = { page_name: e, enter_from: e, is_downgrade: (0, y.qk)() },
              _ = (0, l.U3)(v),
              g = (0, l.fT)(n, v);
            p.f.config({
              initConfig: {
                channel_domain: c.tea,
                channel_type: null != (t = c.teaChannelType) ? t : "tcpy",
                channel: c.teaChannel,
                ab_channel_domain: c.libraWebSDK,
                id: 1988,
              },
              commonHeaderConfig: {
                region: a,
                user_id: null != (u = null == o ? void 0 : o.uid) ? u : "",
                user_is_login: !!o,
                user_unique_id: s,
                device_id: s,
                user_type: 12,
                "header.custom": g,
              },
              commonEventParams: (0, i._)((0, r._)({}, _), {
                data_collection_enabled: +!!(0, d.uh)(f, !!o),
              }),
            });
          },
          [n, c, a, o, f, s],
        );
      }
    },
    53535: function (e, t, n) {
      n.d(t, {
        $S: function () {
          return f;
        },
        BO: function () {
          return l;
        },
        Hw: function () {
          return g;
        },
        RS: function () {
          return d;
        },
        Zr: function () {
          return _;
        },
        i0: function () {
          return p;
        },
        lH: function () {
          return s;
        },
        qY: function () {
          return v;
        },
      });
      var r,
        i = n(35383),
        o = n(56680),
        a = n(50870),
        u = n(6785);
      function s(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 99,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "99+";
        return e > t ? n : String(e);
      }
      function c(e) {
        var t, n;
        return null !=
          (n =
            null == e || null == (t = e.url_list)
              ? void 0
              : t.find(function (e) {
                  return !/\.webp/.test(e);
                }))
          ? n
          : "";
      }
      function l(e) {
        var t;
        return void 0 === e
          ? ""
          : e.url_list && (null == (t = e.url_list) ? void 0 : t.length) > 0
            ? e.url_list[0]
            : "";
      }
      var p =
        ((r = {}),
        (0, i._)(r, o.m33.FollowRelationUnknown, a.yf.UNKNOW),
        (0, i._)(r, o.m33.NoRelationStatus, a.yf.NONE),
        (0, i._)(r, o.m33.FollowingStatus, a.yf.FOLLOW),
        (0, i._)(r, o.m33.FollowEachOtherStatus, a.yf.MUTAL),
        (0, i._)(r, o.m33.FollowRequestStatus, a.yf.FOLLOWING_REQUEST),
        r);
      function d(e) {
        var t = e.avatar_medium,
          n = e.avatar_thumb,
          r = e.uid,
          i = e.short_id,
          o = e.unique_id,
          u = e.sec_uid,
          s = e.nickname,
          l = e.is_block,
          d = e.follow_status,
          f = e.signature,
          v = e.custom_verify,
          _ = e.enterprise_verify_reason,
          g = e.follower_status;
        return {
          avatarLarger: "",
          avatarMedium: c(t),
          avatarThumb: c(n),
          id: r,
          shortId: i,
          uniqueId: null != o ? o : "",
          secUid: null != u ? u : "",
          nickname: s,
          relation: (function (e) {
            var t = e.is_block,
              n = e.is_blocked,
              r = e.follow_status;
            if (null != r) return t ? a.yf.BLOCK : n ? a.yf.BLOCKED : p[r];
          })({ is_block: l, is_blocked: void 0, follow_status: d }),
          signature: f,
          verified: !!(v || _),
          createTime: 0,
          extraInfo: { followerStatus: g },
        };
      }
      function f(e) {
        var t = e.id_str,
          n = e.title,
          r = e.play_url,
          i = e.cover_medium,
          o = e.cover_large,
          a = e.cover_thumb,
          u = e.is_original,
          s = e.duration,
          c = e.author;
        return {
          id: String(t),
          title: n,
          duration: s,
          keyToken: "",
          playUrl: l(r),
          coverMedium: l(i),
          coverLarge: l(o),
          coverThumb: l(a),
          original: null != u && u,
          authorName: c,
        };
      }
      function v(e, t) {
        if (!e) return !0;
        var n = e.commentSetting,
          r = e.relation,
          i = e.id;
        return n === u.v.FRIENDS_ONLY && r !== a.yf.MUTAL && t !== i;
      }
      function _(e) {
        return e.replace(/\n(\n)*( )*(\n)*\n/g, "\n");
      }
      function g(e, t) {
        var n,
          r = e.duration,
          i = e.width,
          o = e.height,
          a = e.ratio,
          u = e.cover,
          s = e.play_addr,
          c = e.bit_rate,
          p =
            null == c
              ? void 0
              : c.map(function (e) {
                  return {
                    GearName: e.gear_name,
                    Bitrate: e.bit_rate,
                    QualityType: e.quality_type,
                    PlayAddr: { Uri: "", UrlList: [l(e.play_addr)] },
                    CodecType: "adapt_h264",
                  };
                });
        return {
          id: t,
          height: o,
          width: i,
          duration: null != r ? r : 0,
          ratio: null != a ? a : "720p",
          cover: l(u),
          originCover: l(u),
          playAddr: l(s),
          bitrate: null == c || null == (n = c[0]) ? void 0 : n.bit_rate,
          bitrateInfo: p,
          encodedType: "normal",
        };
      }
    },
    75813: function (e, t, n) {
      n.d(t, {
        Bv: function () {
          return u;
        },
        LU: function () {
          return p;
        },
        MX: function () {
          return s;
        },
        PC: function () {
          return c;
        },
        _w: function () {
          return o;
        },
        bc: function () {
          return i;
        },
        lA: function () {
          return a;
        },
        lL: function () {
          return l;
        },
      });
      var r = n(97126),
        i = new r.w1("frequency-control-config", "local"),
        o = new r.w1("flip-control-config", "local"),
        a = new r.w1("webapp-video-mute", "local"),
        u = new r.w1("keyboard-shortcut-config", "local"),
        s = new r.w1("webapp-comment-url", "session"),
        c = new r.w1("search-entry-block-map-storage", "local"),
        l = new r.w1("fyp-feed-cache", "local"),
        p = new r.w1("search_history_map", "local");
      new r.w1("multi-account-info", "local");
    },
    26045: function (e, t, n) {
      n.d(t, {
        AF: function () {
          return h;
        },
        Am: function () {
          return A;
        },
        N2: function () {
          return _;
        },
        Q2: function () {
          return g;
        },
        Sn: function () {
          return y;
        },
        m1: function () {
          return m;
        },
        oN: function () {
          return d;
        },
        rE: function () {
          return w;
        },
        sN: function () {
          return b;
        },
      });
      var r = n(10874),
        i = n(40832),
        o = n(89959),
        a = n(3595),
        u = n(12499),
        s = n(19904),
        c = n(21708),
        l = n(44928),
        p = n(13788);
      function d(e) {
        var t, n, u, s;
        if (e.length > 1e3) return "";
        if ((0, c.tO)(e)) return i.L.Trending;
        if (/^\/@(.*?)\/video\/(.*?)/.test(e)) return i.L.Video;
        if (/^\/@(.*?)\/photo\/(.*?)/.test(e)) return i.L.PhotoVideo;
        if (/^\/@(.*?)/.test(e)) return i.L.User;
        if (/^\/music\//.test(e)) return i.L.Music;
        if (/^\/effect\//.test(e)) return i.L.Effect;
        if (/^\/tag\//.test(e)) return i.L.Challenge;
        if (/^\/following/.test(e)) return i.L.Following;
        if (/^\/explore/.test(e)) return i.L.Explore;
        if ((null == (t = (0, o.uZ)(e)) ? void 0 : t.name) === "expansion")
          return i.L.Expansion;
        if (/^\/channel\/.+/.test(e)) return i.L.Channel;
        if ((null == (n = (0, a.kv)(e)) ? void 0 : n.name) === "discover")
          return i.L.Discover;
        if (/^\/profile/.test(e)) return i.L.Profile;
        if (/^\/topics/.test(e)) {
          var l = e.slice(1).split("/")[1];
          return "".concat(i.L.Topics, "_").concat(l);
        }
        return /^\/inbox/.test(e)
          ? i.L.Inbox
          : /^\/report/.test(e)
            ? i.L.Report
            : /^\/ad-report/.test(e)
              ? i.L.ReportAd
              : /^\/feedback\/report/.test(e)
                ? i.L.FeedbackReport
                : /^\/feedback\/history/.test(e)
                  ? i.L.FeedbackHistory
                  : /^\/feedback/.test(e)
                    ? i.L.Feedback
                    : (0, r.matchPath)(e, { path: a.OZ.searchHome, exact: !0 })
                      ? i.L.GeneralSearch
                      : (0, r.matchPath)(e, {
                            path: a.OZ.searchUser,
                            exact: !0,
                          })
                        ? i.L.SearchUser
                        : (0, r.matchPath)(e, {
                              path: a.OZ.searchVideo,
                              exact: !0,
                            })
                          ? i.L.SearchVideo
                          : (0, r.matchPath)(e, {
                                path: a.OZ.searchPhoto,
                                exact: !0,
                              })
                            ? i.L.SearchPhoto
                            : /^\/playlist-music/.test(e)
                              ? i.L.Playlist
                              : /^\/messages/.test(e)
                                ? i.L.Messages
                                : /^\/setting/.test(e)
                                  ? i.L.Setting
                                  : /^\/place/.test(e)
                                    ? i.L.Poi
                                    : /^\/@(.*?)\/collection\/(.*?)/.test(e)
                                      ? i.L.Collection
                                      : /^\/@(.*?)\/playlist\/(.*?)/.test(e)
                                        ? i.L.VideoPlaylist
                                        : /^\/download/.test(e)
                                          ? i.L.Download
                                          : /^\/download-video/.test(e)
                                            ? i.L.DownloadVideo
                                            : /^\/miniapk\/download/.test(e)
                                              ? i.L.MiniApk
                                              : (null == (u = (0, o.uZ)(e))
                                                    ? void 0
                                                    : u.name) ===
                                                    "trendingDetail" ||
                                                  (null == (s = (0, o.uZ)(e))
                                                    ? void 0
                                                    : s.name) ===
                                                    "trendingDetailWithinDiscover"
                                                ? i.L.TrendingDetail
                                                : "";
      }
      function f(e) {
        return e.length > 1e3
          ? ""
          : /^\/@(.*?)\/live\/(.*?)/.test(e)
            ? i.L.Live
            : (0, r.matchPath)(e, { path: u.vI.liveGoLive, exact: !0 })
              ? i.L.GoLive
              : (0, c.U0)(e)
                ? i.L.LiveDiscover
                : (0, c.j)(e)
                  ? i.L.LiveEvent
                  : (0, c.RR)(e)
                    ? i.L.LiveEventAggregation
                    : (0, r.matchPath)(e, {
                          path: u.vI.liveRoomEmbed,
                          exact: !0,
                        })
                      ? i.L.LiveEmbedDetail
                      : (0, r.matchPath)(e, { path: u.vI.liveRoom, exact: !0 })
                        ? i.L.Live
                        : "";
      }
      function v(e) {
        return (0, r.matchPath)(e, { path: s.tH.loginHome, exact: !1 }) ||
          (0, r.matchPath)(e, { path: s.tH.oauth, exact: !1 }) ||
          (0, r.matchPath)(e, { path: s.tH.oauthLine, exact: !1 })
          ? i.L.Login
          : (0, r.matchPath)(e, { path: s.tH.signupHome, exact: !1 })
            ? i.L.Signup
            : "";
      }
      function _(e) {
        for (var t = 0, n = [d, f, v]; t < n.length; t++) {
          var r = (0, n[t])(e);
          if (r) return r;
        }
        return "unknown";
      }
      function g() {
        return location.pathname.startsWith(a.OZ.musicPlaylist.split(":")[0]) &&
          location.pathname.length <= 1e3
          ? ""
              .concat(location.origin)
              .concat(location.pathname.replace(/%23|%3F|%2F/g, ""))
              .concat(location.search)
          : location.href;
      }
      function h() {
        return location.pathname.startsWith(a.OZ.musicPlaylist.split(":")[0]) &&
          location.pathname.length <= 1e3
          ? ""
              .concat(location.origin)
              .concat(location.pathname.replace(/%23|%3F|%2F/g, ""))
          : "".concat(location.origin).concat(location.pathname);
      }
      function m(e, t) {
        return "https://www.tiktok.com".concat(A(e, t));
      }
      function A(e, t, n) {
        return "/place/"
          .concat((0, l.zp)(t), "-")
          .concat(e)
          .concat(n ? "?language=".concat(n) : "");
      }
      function y(e, t) {
        var n, r, i, o;
        return (0, p.Rj)(
          "https://www.tiktok.com".concat(
            (0, l.G2)({
              uniqueId:
                null !=
                (i = null == e || null == (n = e.owner) ? void 0 : n.display_id)
                  ? i
                  : "",
              secUid:
                null !=
                (o = null == e || null == (r = e.owner) ? void 0 : r.sec_uid)
                  ? o
                  : "",
            }),
          ),
          null != t ? t : {},
        );
      }
      function b(e, t) {
        return "https://www.tiktok.com/tns-inapp/pages/ai-generated-content?hide_nav_bar=1"
          .concat(e ? "&enter_from=".concat(e) : "")
          .concat(t ? "&lang=".concat(t) : "");
      }
      function w(e, t) {
        return "/effect/"
          .concat(encodeURIComponent(e.replace(/\s+/g, "-")), "-")
          .concat(t);
      }
    },
    18940: function (e, t, n) {
      n.d(t, {
        W: function () {
          return g;
        },
      });
      var r = n(51070),
        i = n(73628),
        o = n(15377),
        a = n(85220),
        u = n(85161),
        s = n(72701),
        c = n(30418),
        l = n(4085),
        p = (0, c.default)("div", {
          target: "e1jj6n0n0",
          label: "7937d88b--DivErrorContainer",
        })(
          function (e) {
            return e.isFullScreen ? { flex: "1 1 auto" } : null;
          },
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "0 auto",
          },
        ),
        d = (0, c.default)("p", {
          target: "e1jj6n0n1",
          label: "7937d88b--PTitle",
        })(function (e) {
          var t = e.theme,
            n = t.typography,
            r = t.fontWeights,
            i = t.fontFamilies,
            o = t.colors;
          return [
            n.H4,
            {
              fontFamily: i.TikTokDisplayFont,
              fontWeight: r.bold,
              color: o.TextPrimary,
              marginTop: "24px",
            },
          ];
        }),
        f = (0, c.default)("p", {
          target: "e1jj6n0n2",
          label: "7937d88b--PDesc",
        })(function (e) {
          var t = e.theme,
            n = t.typography,
            r = t.fontWeights,
            i = t.fontFamilies,
            o = t.colors;
          return [
            n.P2,
            {
              fontFamily: i.TikTokFont,
              fontWeight: r.normal,
              color: o.TextSecondary,
              marginTop: "8px",
            },
          ];
        }),
        v = (0, c.default)("div", {
          target: "e1jj6n0n3",
          label: "7937d88b--DivButton",
        })("margin-top:24px;"),
        _ = (0, c.default)(l.y, {
          target: "e1jj6n0n4",
          label: "7937d88b--StyledButton",
        })({ marginTop: "24px" }),
        g = function (e) {
          var t = e.iconElem,
            n = e.title,
            c = e.desc,
            l = e.buttonText,
            g = e.button,
            h = e.isFullScreen,
            m = e.style,
            A = e.brightness,
            y = void 0 === A ? u.YQ.Bright : A,
            b = e.e2eTitle,
            w = e.e2eDesc,
            T = e.e2eButton,
            S = e.onButtonShow,
            L = e.ignoreErrorReport,
            k = void 0 !== L && L,
            P = (0, o.Nj)(s.V$);
          return (
            (0, i.useEffect)(
              function () {
                ((l || g) && (null == S || S()),
                  k ||
                    (P.emitEvent("handled_error_report", {}, {}),
                    a.T.handleRenderErrorEvent()));
              },
              [l, g, S, k, P],
            ),
            (0, r.FD)(p, {
              isFullScreen: h,
              style: m,
              children: [
                t,
                n && (0, r.Y)(d, { "data-e2e": b, brightness: y, children: n }),
                c && (0, r.Y)(f, { "data-e2e": w, brightness: y, children: c }),
                g && (0, r.Y)(v, { "data-e2e": T, children: g }),
                !g &&
                  !!l &&
                  (0, r.Y)(_, {
                    type: "button",
                    onClick: e.onButtonClick,
                    buttonTheme: "default",
                    size: "large",
                    e2eTag: T,
                    children: l,
                  }),
              ],
            })
          );
        };
    },
    71698: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      var r = function () {
        return (
          (window.location.href = "/404?fromUrl=".concat(
            encodeURIComponent(window.location.pathname),
          )),
          null
        );
      };
    },
    15753: function (e, t, n) {
      n.d(t, {
        J: function () {
          return v;
        },
      });
      var r = n(51070),
        i = n(74422),
        o = n(80660),
        a = n(10449),
        u = n(67500),
        s = n(81047),
        c = [
          "//v16.tiktokcdn.com",
          "//p16-va.tiktokcdn.com",
          "//s20.tiktokcdn.com",
        ],
        l = [
          "https://p16-sign-va.tiktokcdn.com",
          "https://p16-sign-sg.tiktokcdn.com",
          "https://p77-sign-va.tiktokcdn.com",
          "https://sf16-website.neutral.ttwstatic.com",
          "https://v16-webapp-prime.tiktok.com",
          "https://v19-webapp-prime.tiktok.com",
        ],
        p = [
          "https://p16-pu-sign-useast8.tiktokcdn-us.com",
          "https://p19-pu-sign-useast8.tiktokcdn-us.com",
          "https://lf16-cdn-tos.tiktokcdn-us.com",
          "https://p16-sign.tiktokcdn-us.com",
          "https://p19-sign.tiktokcdn-us.com",
          "https://v16-webapp-prime.us.tiktok.com",
          "https://v19-webapp-prime.us.tiktok.com",
        ],
        d = [
          "https://p16-sign-useast2a.tiktokcdn.com",
          "https://p16-pu-sign-no.tiktokcdn-eu.com",
          "https://p77-sign-sg.tiktokcdn.com",
          "https://v16-webapp-prime.tiktok.com",
          "https://v19-webapp-prime.tiktok.com",
        ],
        f = {
          "Singapore-Central": l,
          "US-East": l,
          "US-EastRed": d,
          "US-TTP": p,
          "US-TTP2": p,
          "EU-TTP": d,
          "EU-TTP2": d,
        },
        v = function () {
          var e,
            t,
            n = (0, o.L$)(
              (0, a.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            l =
              null != (e = (0, u.qt)(n, "page_loading_tiny_changes"))
                ? e
                : "v0",
            p = (0, o.L$)(
              (0, s.U)(function () {
                return ["vregion"];
              }, []),
            ).vregion,
            d = c;
          return (
            ("v1" === l || "v4" === l) && p && (d = null != (t = f[p]) ? t : c),
            (0, r.Y)(i.Helmet, {
              children: d.map(function (e, t) {
                return (0, r.Y)(
                  "link",
                  { rel: "dns-prefetch", href: e },
                  "prefetch-".concat(t + 1),
                );
              }),
            })
          );
        };
    },
    21057: function (e, t, n) {
      n.d(t, {
        G: function () {
          return u;
        },
        K: function () {
          return s;
        },
      });
      var r = n(54333),
        i = n(73628),
        o = n(58409),
        a = n(10449);
      function u(e) {
        var t = e.actionWhenUserLoggedIn,
          n = e.modalConfig,
          u = void 0 === n ? {} : n,
          s = e.reportClickEvent,
          c = e.openModalWhenUserLoggedIn,
          l = (0, a.W)(function () {
            return ["user"];
          }, []),
          p = (0, o.b1)();
        return (0, i.useCallback)(
          function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            null == s || s.apply(void 0, (0, r._)(n));
            var o = "function" == typeof u ? u() : u;
            return (null == l ? void 0 : l.user) && !c
              ? o.isLinkPhoneOrEmail
                ? void p.openModal(o)
                : null == t
                  ? void 0
                  : t.apply(void 0, (0, r._)(n))
              : void p.openModal(o);
          },
          [t, null == l ? void 0 : l.user, p, u, s, c],
        );
      }
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return u({
          modalConfig: "function" == typeof e ? e() : e,
          reportClickEvent: t,
          openModalWhenUserLoggedIn: n,
        });
      }
    },
    65341: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
        N: function () {
          return u;
        },
      });
      var r,
        i = n(95170),
        o = n(54333),
        a =
          (((r = {})[(r.None = 0)] = "None"),
          (r[(r.PromotePopupTip = 1)] = "PromotePopupTip"),
          (r[(r.LoginPopup = 2)] = "LoginPopup"),
          (r[(r.LoginPopupRedesign = 3)] = "LoginPopupRedesign"),
          (r[(r.LoginPopupPeriodic = 4)] = "LoginPopupPeriodic"),
          (r[(r.Done = 5)] = "Done"),
          r),
        u = new ((function () {
          function e() {
            ((0, i._)(this, e),
              (this.priorityKeys = []),
              (this.endPriorityKeys = []));
          }
          var t = e.prototype;
          return (
            (t.start = function (e) {
              this.endPriorityKeys = this.endPriorityKeys.filter(function (t) {
                return t !== e;
              });
            }),
            (t.end = function (e) {
              var t = this;
              if (!this.endPriorityKeys.includes(e)) {
                this.endPriorityKeys.push(e);
                var n = this.priorityKeys.find(function (e) {
                  return !t.endPriorityKeys.includes(e);
                });
                if (n) return n;
              }
              return null;
            }),
            (t.remove = function (e) {
              this.priorityKeys = this.priorityKeys.filter(function (t) {
                return t !== e;
              });
            }),
            (t.add = function (e) {
              this.priorityKeys.includes(e) ||
                (this.priorityKeys = (0, o._)(this.priorityKeys)
                  .concat([e])
                  .sort(function (e, t) {
                    return e - t;
                  }));
            }),
            (t.clean = function () {
              ((this.priorityKeys = []), (this.endPriorityKeys = []));
            }),
            e
          );
        })())();
    },
    12442: function (e, t, n) {
      n.d(t, {
        _y: function () {
          return v;
        },
        lz: function () {
          return _;
        },
      });
      var r,
        i = n(35383),
        o = n(5377),
        a = n(45996),
        u = n(66905),
        s = n(10625),
        c = n(65341),
        l =
          ((r = {}),
          (0, i._)(r, c.H.None, !0),
          (0, i._)(r, c.H.PromotePopupTip, !1),
          (0, i._)(r, c.H.LoginPopupPeriodic, !1),
          (0, i._)(r, c.H.LoginPopup, !1),
          r),
        p = (0, s.p)("popupPriorityAtom@tiktok/fe-shared", {
          priority: c.H.None,
          isReadyList: l,
        }),
        d = (0, s.p)("isAllReadyAtom@tiktok/fe-shared", function (e) {
          return Object.values(e(p).isReadyList).reduce(function (e, t) {
            return e && t;
          });
        }),
        f = (0, u.i)(p, function (e, t) {
          return {
            setIsPopupPriorityReady: function (n) {
              var r = e(p);
              if (
                (t(
                  p,
                  (0, a._)((0, o._)({}, r), {
                    isReadyList: (0, a._)(
                      (0, o._)({}, r.isReadyList),
                      (0, i._)({}, n, !0),
                    ),
                  }),
                ),
                e(d))
              ) {
                var u = c.N.end(c.H.None);
                u
                  ? t(p, (0, a._)((0, o._)({}, e(p)), { priority: u }))
                  : c.N.clean();
              }
            },
            clearReadyListOnRouteChange: function () {
              var n = e(p);
              (t(
                p,
                (0, a._)((0, o._)({}, n), {
                  isReadyList: l,
                  priority: c.H.None,
                }),
              ),
                c.N.clean());
            },
            getPriorityPopup: function (n) {
              return {
                handlePopoverInitial: function () {
                  c.N.start(n);
                },
                handlePopoverEnd: function () {
                  if (n !== e(p).priority) c.N.remove(n);
                  else {
                    var r = c.N.end(n);
                    r
                      ? t(p, (0, a._)((0, o._)({}, e(p)), { priority: r }))
                      : (c.N.clean(),
                        t(
                          p,
                          (0, a._)((0, o._)({}, e(p)), { priority: c.H.Done }),
                        ));
                  }
                },
                handlePopoverAdd: function () {
                  if ((c.N.add(n), e(d))) {
                    var r = c.N.end(c.H.None);
                    r && t(p, (0, a._)((0, o._)({}, e(p)), { priority: r }));
                  }
                },
              };
            },
          };
        }),
        v = (f.useAtomService, f.useServiceDispatchers),
        _ = f.useServiceState;
    },
    87825: function (e, t, n) {
      (n.d(t, {
        Qt: function () {
          return a;
        },
      }),
        n(73628),
        n(10874));
      var r = n(2475),
        i = n(80660),
        o = n(81047);
      function a() {
        var e = (0, i.L$)(
            (0, o.U)(function () {
              return ["playerInfo"];
            }, []),
          ).playerInfo,
          t = (0, i.L$)(e),
          n = t.name,
          a = void 0 === n ? "" : n,
          u = t.isSmartPlayer,
          s = t.type,
          c = void 0 === s ? r.al.Normal : s,
          l = t.loop,
          p = t.replyComment,
          d = t.hideNavBar;
        return {
          brand: a,
          isEchoShow: "echoshow" === a,
          isTtincar: "ttincar" === a,
          launchType: c,
          isSmartPlayer: void 0 !== u && u,
          loop: void 0 !== l && l,
          replyComment: void 0 === p || p,
          hideNavBar: void 0 !== d && d,
        };
      }
    },
    60770: function (e, t, n) {
      n.d(t, {
        PD: function () {
          return l;
        },
        t6: function () {
          return c;
        },
      });
      var r,
        i,
        o = n(79066),
        a = n(6586),
        u = n(72516),
        s = !1,
        c = function () {
          return (0, o._)(function () {
            return (0, u.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    (0, o._)(function () {
                      var e;
                      return (0, u.__generator)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [
                              4,
                              Promise.all([
                                (i ||
                                  (i = new Promise(function (e) {
                                    "undefined" == typeof window && e(!1);
                                    var t = new Image();
                                    ((t.onload = function () {
                                      ((window.__support_avif__ =
                                        (null == t ? void 0 : t.width) === 1),
                                        e(
                                          (null == t ? void 0 : t.width) === 1,
                                        ));
                                    }),
                                      (t.onerror = function () {
                                        ((window.__support_avif__ = !1), e(!1));
                                      }),
                                      (t.src =
                                        "data:image/avif;base64,AAAALGZ0eXBhdmlzAAAAAGF2aWZhdmlzbXNmMWlzbzhtaWYxbWlhZk1BMUEAAAElbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAiaWxvYwAAAABEQAABAAIAAAAABgAAAQAAACUAAAAYAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAAAxpcmVmAAAAAAAAAI1pcHJwAAAAbmlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAAA5waXhpAAAAAAEIAAAADGF2MUOBABwAAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAXaXBtYQAAAAAAAAABAAIEAQKDBAAABKdtb292AAAAbG12aGQAAAAA4GrKgOBqyoAAAABkAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGXRyYWsAAABcdGtoZAAAAAHgasqA4GrL+AAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAQAAAAEAAAAAAbVtZGlhAAAAIG1kaGQAAAAA4GrKgOBqyoAAAABkAAAAZFXEAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAABZW1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAASVzdGJsAAAAlXN0c2QAAAAAAAAAAQAAAIVhdjAxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAQBIAAAASAAAAAAAAAABCkFPTSBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAADGF2MUOBIAAAAAAAE2NvbHJuY2x4AAEADQAGgAAAABBjY3N0AAAAAHwAAAAAAAAYc3R0cwAAAAAAAAABAAAAAgAAADIAAAAUc3RzcwAAAAAAAAABAAAAAQAAAChzdHNjAAAAAAAAAAIAAAABAAAAAQAAAAEAAAACAAAAAQAAAAEAAAAcc3RzegAAAAAAAAAAAAAAAgAAACUAAAAaAAAAGHN0Y28AAAAAAAAAAgAABgAAAAY9AAACGnRyYWsAAABcdGtoZAAAAAHgasqA4GrL+AAAAAIAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAQAAAAEAAAAAABR0cmVmAAAADGF1eGwAAAABAAABom1kaWEAAAAgbWRoZAAAAADgasqA4GrKgAAAAGQAAABkVcQAAAAAAChoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAbGliYXZpZgAAAAFSbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABEnN0YmwAAACCc3RzZAAAAAAAAAABAAAAcmF2MDEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQABAEgAAABIAAAAAAAAAAEKQU9NIENvZGluZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAMYXYxQ4EAHAAAAAAQY2NzdAAAAAB8AAAAAAAAGHN0dHMAAAAAAAAAAQAAAAIAAAAyAAAAFHN0c3MAAAAAAAAAAQAAAAEAAAAoc3RzYwAAAAAAAAACAAAAAQAAAAEAAAABAAAAAgAAAAEAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAAYAAAAEAAAABhzdGNvAAAAAAAAAAIAAAYlAAAGVwAAAG9tZGF0EgAKCyAAAAAAffyQENBpMhQQALAAAAJAAAAAeUzeCGsZI8iw4BIACggAAAAAAH38lTIKEACAAAAY3qKVUBIAMhYwA8CAAABGsAAAAkAAIAAeeln6XS7gEgAyDDADwIAAAEaABACRkAAAAENmcmVlSXNvTWVkaWEgRmlsZSBQcm9kdWNlZCB3aXRoIEdQQUMgMi4yLXJldjAtZ2FiMDEyYmJmLW1hc3RlcgA="));
                                  })),
                                i),
                                (r ||
                                  (r = new Promise(function (e) {
                                    "undefined" == typeof window && e(!1);
                                    var t = new Image();
                                    ((t.onload = function () {
                                      ((window.__support_webp__ =
                                        (null == t ? void 0 : t.height) ===
                                        160),
                                        e(
                                          (null == t ? void 0 : t.height) ===
                                            160,
                                        ));
                                    }),
                                      (t.onerror = function () {
                                        ((window.__support_webp__ = !1), e(!1));
                                      }),
                                      (t.src =
                                        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvn8AnAAdQiUpUov+BiOh/AAA="));
                                  })),
                                r),
                              ]),
                            ];
                          case 1:
                            return [
                              2,
                              {
                                supportAvif: (e = a._.apply(void 0, [
                                  t.sent(),
                                  2,
                                ]))[0],
                                supportWebp: e[1],
                              },
                            ];
                        }
                      });
                    })(),
                  ];
                case 1:
                  return (e.sent(), (s = !0), [2]);
              }
            });
          })();
        },
        l = function () {
          return s
            ? {
                supportAvif: window.__support_avif__,
                supportWebp: window.__support_webp__,
              }
            : (console.warn(
                "VideoCoverViewer: can not use `getCoverFormat` before `coverFormatCheck",
              ),
              {});
        };
    },
    49432: function (e, t, n) {
      n.d(t, {
        Nh: function () {
          return a;
        },
        b5: function () {
          return c;
        },
        bl: function () {
          return o;
        },
      });
      var r = n(95170),
        i = n(2909),
        o = Symbol.for("side-nav-hover"),
        a = Symbol.for("video-content-more-hover"),
        u = (function () {
          function e() {
            ((0, r._)(this, e), (this.eventName = o), (this.updated = !1));
          }
          return (
            (e.prototype.updateLoadEvent = function () {
              this.updated || (i.PD.emit(this.eventName), (this.updated = !0));
            }),
            e
          );
        })(),
        s = (function () {
          function e() {
            ((0, r._)(this, e), (this.eventName = a), (this.updated = !1));
          }
          return (
            (e.prototype.updateLoadEvent = function () {
              this.updated || (i.PD.emit(this.eventName), (this.updated = !0));
            }),
            e
          );
        })(),
        c = new u();
      new s();
    },
    96187: function (e, t, n) {
      n.d(t, {
        C8: function () {
          return b;
        },
        DE: function () {
          return T;
        },
        DT: function () {
          return P;
        },
        KE: function () {
          return S;
        },
        Qd: function () {
          return k;
        },
        TN: function () {
          return E;
        },
        UX: function () {
          return I;
        },
        bu: function () {
          return w;
        },
        eq: function () {
          return C;
        },
      });
      var r,
        i,
        o = n(73515),
        a = n(37551),
        u = n(64064),
        s = n(88999),
        c = n(19742),
        l = n(89134),
        p = n(67500),
        d = n(21708),
        f = n(49432),
        v = n(31842),
        _ = { resourceStrategy: "preload" },
        g = {
          resourceStrategy: "custom",
          loadEvent: v.bL,
          defaultProps: {
            renderStrategy: "custom",
            renderEvent: v.bL,
            raceTime: 6e3,
          },
        },
        h = {
          resourceStrategy: "custom",
          loadEvent: v.bL,
          defaultProps: {
            renderStrategy: "custom",
            renderEvent: v.bL,
            raceTime: 1e4,
          },
        },
        m = {
          resourceStrategy: "custom",
          loadEvent: f.bl,
          defaultProps: {
            renderStrategy: "custom",
            renderEvent: f.bl,
            raceTime: 8e3,
          },
        },
        A = {
          resourceStrategy: "custom",
          loadEvent: f.Nh,
          defaultProps: {
            renderStrategy: "custom",
            renderEvent: f.Nh,
            raceTime: 8e3,
          },
        };
      function y() {
        var e = !1;
        if (!(0, l.fU)()) {
          var t,
            n = (0, c.YI)(a.Ow),
            r = "v0";
          (n &&
            ((0, s.D)(n),
            (r = null != (t = (0, p.d)("desktop_bundle_opt")) ? t : "v0")),
            (e = ["v1"].includes(r)));
        }
        return e;
      }
      var b = y() ? m : _,
        w = y() ? A : _,
        T =
          "v0" !==
          (function () {
            if (!(0, l.fU)())
              try {
                var e,
                  t = (0, c.YI)(a.Ow),
                  n = "v0";
                return (
                  t &&
                    ((0, s.D)(t),
                    (n =
                      null != (e = (0, p.d)("island_by_device")) ? e : "v0")),
                  n
                );
              } catch (e) {}
            return "v0";
          })()
            ? h
            : y()
              ? g
              : _,
        S =
          (v.uM,
          v.uM,
          (function () {
            var e = !1,
              t = !1;
            if (!(0, l.fU)())
              try {
                var n,
                  r,
                  i,
                  o,
                  f,
                  v,
                  m,
                  A = (0, c.YI)(a.Ow),
                  y = "v0",
                  b = "v0",
                  w = "v0",
                  T = "v0",
                  S = "v0",
                  L = "v0",
                  k = "v0";
                A &&
                  ((0, s.D)(A),
                  (y =
                    null != (n = (0, p.d)("islands_arch_phase2")) ? n : "v0"),
                  (b =
                    null != (r = (0, p.d)("islands_arch_video_detail"))
                      ? r
                      : "v0"),
                  (w =
                    null != (i = (0, p.d)("islands_arch_explore")) ? i : "v0"),
                  (T =
                    null != (o = (0, p.d)("webapp_perf_page_switch"))
                      ? o
                      : "v0"),
                  (S =
                    null != (f = (0, p.d)("islands_arch_rest_page"))
                      ? f
                      : "v0"),
                  (L = null != (v = (0, p.d)("foryou_opt")) ? v : "v0"),
                  (k = null != (m = (0, p.d)("island_by_device")) ? m : "v0"));
                var P = window.location.pathname,
                  E = window.location.search,
                  C = (0, d.tO)(P),
                  I = new URLSearchParams(E).get("scene"),
                  V = "business" === I,
                  O = (0, d.Fj)(P),
                  M = (0, d.eD)(P),
                  R = (0, d.cj)(P),
                  x = (0, d.M5)(P),
                  W = !!u.c.find(function (e) {
                    return Number(x) === e.pageType;
                  });
                ((e =
                  ("v0" !== y && C) ||
                  ("v0" !== b && O && !V) ||
                  ("v0" !== w && M) ||
                  ("v0" !== T && R) ||
                  ("v0" !== S && W) ||
                  ("v0" !== L && C)),
                  (t = "v1" === k && (C || (O && !V) || M || R || W)));
              } catch (e) {}
            return t ? h : e ? g : _;
          })());
      !(function () {
        var e = !1;
        if (!(0, l.fU)())
          try {
            var t,
              n = (0, c.YI)(a.Ow),
              r = "v0";
            n &&
              ((0, s.D)(n),
              (r =
                null != (t = (0, p.d)("explore_trending_topics")) ? t : "v0"));
            var i = window.location.pathname,
              o = (0, d.eD)(i);
            e = "v0" !== r && o;
          } catch (e) {}
      })();
      var L =
          null !=
          (r = (function () {
            if (!(0, l.fU)())
              try {
                var e,
                  t = (0, c.YI)(a.Ow),
                  n = "v0";
                return (
                  t &&
                    ((0, s.D)(t),
                    (n =
                      null != (e = (0, p.d)("desktop_landing_opt"))
                        ? e
                        : "v0")),
                  n
                );
              } catch (e) {}
            return "v0";
          })())
            ? r
            : "v0",
        k = ["v2", "v3"].includes(L) ? g : _,
        P = ["v1", "v3"].includes(L) ? g : _,
        E = ["v2", "v3"].includes(L) ? {} : _,
        C = !(function () {
          if (!(0, l.fU)())
            try {
              var e,
                t = (0, c.YI)(a.Ow),
                n = "v0";
              return (
                t &&
                  ((0, s.D)(t),
                  (n =
                    null != (e = (0, p.d)("page_stability_strategy"))
                      ? e
                      : "v0")),
                "v0" !== n
              );
            } catch (e) {}
          return !1;
        })()
          ? _
          : g;
      ["v1"].includes(
        null !=
          (i = (function () {
            if (!(0, l.fU)())
              try {
                var e,
                  t = (0, c.YI)(a.Ow),
                  n = "v0";
                return (
                  t &&
                    ((0, s.D)(t),
                    (n =
                      null != (e = (0, p.d)("search_core_content"))
                        ? e
                        : "v0")),
                  n
                );
              } catch (e) {}
            return "v0";
          })())
          ? i
          : "v0",
      );
      var I = [
        o.g.Challenge,
        o.g.Poi,
        o.g.Collection,
        o.g.SearchResult,
        o.g.Effect,
        o.g.SearchVideoResult,
        o.g.SearchPhotoResult,
        o.g.Music,
      ];
    },
    31842: function (e, t, n) {
      n.d(t, {
        aY: function () {
          return u;
        },
        bL: function () {
          return o;
        },
        uM: function () {
          return a;
        },
      });
      var r = n(95170),
        i = n(2909),
        o = Symbol.for("first-video-loaded"),
        a = Symbol.for("explore-custom-loaded"),
        u = new ((function () {
          function e() {
            ((0, r._)(this, e),
              (this.loadEvent = o),
              (this.updated = !1),
              (this.updatedDetail = !1),
              (this.updatedExplore = !1),
              (this.updatedUserProfile = !1),
              (this.updatedCommon = !1));
          }
          var t = e.prototype;
          return (
            (t.updateVideoLoadEvent = function () {
              this.updated || (i.PD.emit(this.loadEvent), (this.updated = !0));
            }),
            (t.updateVideoDetailLoadEvent = function () {
              this.updatedDetail ||
                (i.PD.emit(this.loadEvent), (this.updatedDetail = !0));
            }),
            (t.updateExploreVideoLoadEvent = function () {
              this.updatedExplore ||
                (i.PD.emit(this.loadEvent), (this.updatedExplore = !0));
            }),
            (t.updateUserProfileLoadEvent = function () {
              this.updatedUserProfile ||
                (i.PD.emit(this.loadEvent), (this.updatedUserProfile = !0));
            }),
            (t.updateCommonLoadEvent = function () {
              this.updatedCommon ||
                (i.PD.emit(this.loadEvent), (this.updatedCommon = !0));
            }),
            (t.reset = function () {
              ((this.updated = !1),
                (this.updatedDetail = !1),
                (this.updatedExplore = !1),
                (this.updatedUserProfile = !1),
                (this.updatedCommon = !1),
                i.PD.resetEvent(this.loadEvent));
            }),
            e
          );
        })())();
      new ((function () {
        function e() {
          ((0, r._)(this, e), (this.exploreCustomLoadEvent = a));
        }
        return (
          (e.prototype.updateExploreCustomLoadEvent = function () {
            i.PD.emit(this.exploreCustomLoadEvent);
          }),
          e
        );
      })())();
    },
    15658: function (e, t, n) {
      n.d(t, {
        K8: function () {
          return A;
        },
        Sd: function () {
          return w;
        },
        W3: function () {
          return b;
        },
        _j: function () {
          return y;
        },
        gG: function () {
          return T;
        },
        sy: function () {
          return S;
        },
      });
      var r = n(79066),
        i = n(6586),
        o = n(54333),
        a = n(72516),
        u = n(73628),
        s = n(10874),
        c = n(44404),
        l = n.n(c),
        p = n(42351),
        d = n(22481),
        f = n(80660),
        v = n(10449),
        _ = n(67500),
        g = n(21708),
        h = n(9602),
        m = n(70721),
        A = function () {
          var e = (0, d.Hd)(m.O_);
          return [p.N.Pwa, p.N.MSFT, p.N.TWA].includes(e);
        },
        y = function () {
          var e,
            t = (0, f.L$)(
              (0, v.W)(function () {
                return ["abTestVersion"];
              }, []),
            ).abTestVersion,
            n = null != (e = (0, _.qt)(t, "desktop_app_test")) ? e : "v1";
          return {
            desktopAppTestVid: n,
            isDesktopTestV1: "v1" === n,
            isDesktopTestV2: "v2" === n,
          };
        },
        b = function () {
          var e = (0, i._)((0, u.useState)(!0), 2),
            t = e[0],
            n = e[1];
          return (
            (0, u.useEffect)(function () {
              var e, t;
              n(
                (null == (t = window) || null == (e = t.TTE_ENV)
                  ? void 0
                  : e.windowName) === "MAIN_WINDOW",
              );
            }, []),
            t
          );
        },
        w = function () {
          var e = (0, s.useLocation)().pathname;
          return (0, g.tO)(e) || (0, g.gq)(e) || (0, g.U0)(e) || (0, g.eD)(e);
        },
        T = function () {
          var e = (0, h.B)().isElectronApp;
          (0, u.useEffect)(
            function () {
              if (e) {
                var t = Element.prototype.requestFullscreen;
                Element.prototype.requestFullscreen = function () {
                  for (
                    var e = arguments.length, n = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    n[i] = arguments[i];
                  return (0, r._)(function () {
                    var e;
                    return (0, a.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, l().app.setFullScreenable(!0)];
                        case 1:
                          return (
                            r.sent(),
                            (e = t).call.apply(e, [this].concat((0, o._)(n))),
                            [2]
                          );
                      }
                    });
                  }).call(this);
                };
              }
            },
            [e],
          );
        },
        S = function () {
          var e,
            t,
            n,
            r,
            o = (0, i._)(
              (0, u.useState)(
                "undefined" != typeof window &&
                  null !=
                    (r =
                      null == (n = window) ||
                      null == (t = n.matchMedia) ||
                      null == (e = t.call(n, "(prefers-color-scheme: dark)"))
                        ? void 0
                        : e.matches) &&
                  r,
              ),
              2,
            ),
            a = o[0],
            s = o[1],
            c = function (e) {
              var t;
              s(null != (t = null == e ? void 0 : e.matches) && t);
            };
          return (
            (0, u.useEffect)(function () {
              var e,
                t,
                n =
                  null == (t = window) || null == (e = t.matchMedia)
                    ? void 0
                    : e.call(t, "(prefers-color-scheme: dark)");
              return (
                n.addListener(c),
                function () {
                  return n.removeListener(c);
                }
              );
            }, []),
            a
          );
        };
    },
    11567: function (e, t, n) {
      n.d(t, {
        m: function () {
          return o;
        },
      });
      var r = n(80660),
        i = n(10449),
        o = function () {
          var e = (0, r.L$)(
            (0, i.W)(function () {
              return ["language"];
            }, []),
          ).language;
          return { isRTL: "ar" === e || "ur" === e || "he-IL" === e };
        };
    },
    2058: function (e, t, n) {
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var r = n(36646),
        i = n(20458);
      function o() {
        return (0, r.P)(i.L);
      }
    },
    20458: function (e, t, n) {
      n.d(t, {
        L: function () {
          return E;
        },
      });
      var r = n(79066),
        i = n(48748),
        o = n(95170),
        a = n(7120),
        u = n(5377),
        s = n(45996),
        c = n(16327),
        l = n(6586),
        p = n(54333),
        d = n(79262),
        f = n(72516),
        v = n(46657),
        _ = n(23999),
        g = n(19293),
        h = n(24451),
        m = n(62564),
        A = n(35572),
        y = n(68710),
        b = n(74690),
        w = n(80339),
        T = n(78990),
        S = n(82379),
        L = n(95092);
      function k(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, d._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function P(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, d._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var E = (function (e) {
        function t() {
          for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (0, o._)(this, t),
            ((e = (0, i._)(this, t, (0, p._)(r))).defaultState = {
              appContext: null,
              initialized: !1,
              lang: "en",
              sideNavActive: !1,
            }),
            e
          );
        }
        (0, a._)(t, e);
        var n = t.prototype;
        return (
          (n.setSideNavActive = function (e, t) {
            return (0, s._)((0, u._)({}, e), { sideNavActive: t });
          }),
          (n.toggleSideNav = function (e) {
            var t = this;
            return e.pipe(
              (0, h.E)(this.state$),
              (0, m.T)(function (e) {
                var n = (0, l._)(e, 2),
                  r = (n[0], n[1]);
                return t.getActions().setSideNavActive(!r.sideNavActive);
              }),
            );
          }),
          (n.setAppContext = function (e, t) {
            var n = t.statusCode,
              r = (0, c._)(t, ["statusCode"]);
            return 0 !== n ? e : (0, s._)((0, u._)({}, e), { appContext: r });
          }),
          (n.setInitialized = function (e, t) {
            return (0, s._)((0, u._)({}, e), { initialized: t });
          }),
          (n.setLang = function (e, t) {
            return (0, s._)((0, u._)({}, e), { lang: t });
          }),
          (n.init = function (e) {
            var t = this;
            return e.pipe(
              (0, h.E)(this.state$),
              (0, A.p)(function (e) {
                var n = (0, l._)(e, 2),
                  r = n[0].appContext;
                return n[1].initialized
                  ? v.w
                  : (0, _.of)(
                      (0, s._)((0, u._)({}, r), { statusCode: 0 }),
                    ).pipe(
                      (0, y.Z)(function (e) {
                        return (0, _.of)(
                          t.getActions().setAppContext(e),
                          t.getActions().setLang(r.language),
                        );
                      }),
                      (0, b.Z)(t.getActions().setInitialized(!1)),
                      (0, w.q)(
                        t.getActions().setInitialized(!0),
                        t.terminate(),
                      ),
                    );
              }),
            );
          }),
          t
        );
      })(T.E);
      (k(
        [
          (0, S.HI)(),
          P("design:type", Function),
          P("design:paramtypes", [
            "undefined" == typeof AppContextModuleState
              ? Object
              : AppContextModuleState,
            Boolean,
          ]),
          P(
            "design:returntype",
            "undefined" == typeof AppContextModuleState
              ? Object
              : AppContextModuleState,
          ),
        ],
        E.prototype,
        "setSideNavActive",
        null,
      ),
        k(
          [
            (0, S.Mj)(),
            P("design:type", Function),
            P("design:paramtypes", [void 0 === g.c ? Object : g.c]),
            P("design:returntype", void 0),
          ],
          E.prototype,
          "toggleSideNav",
          null,
        ),
        k(
          [
            (0, S.HI)(),
            P("design:type", Function),
            P("design:paramtypes", [
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
              "undefined" == typeof BaseAppContextResponse
                ? Object
                : BaseAppContextResponse,
            ]),
            P(
              "design:returntype",
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
            ),
          ],
          E.prototype,
          "setAppContext",
          null,
        ),
        k(
          [
            (0, S.HI)(),
            P("design:type", Function),
            P("design:paramtypes", [
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
              Boolean,
            ]),
            P(
              "design:returntype",
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
            ),
          ],
          E.prototype,
          "setInitialized",
          null,
        ),
        k(
          [
            (0, S.HI)(),
            P("design:type", Function),
            P("design:paramtypes", [
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
              String,
            ]),
            P(
              "design:returntype",
              "undefined" == typeof AppContextModuleState
                ? Object
                : AppContextModuleState,
            ),
          ],
          E.prototype,
          "setLang",
          null,
        ),
        k(
          [
            (0, S.Mj)({
              payloadGetter: function (e) {
                return (0, r._)(function () {
                  return (0, f.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.service.baseContext.getBaseContext()];
                      case 1:
                        return [2, { appContext: t.sent() }];
                    }
                  });
                })();
              },
            }),
            P("design:type", Function),
            P("design:paramtypes", [void 0 === g.c ? Object : g.c]),
            P("design:returntype", void 0),
          ],
          E.prototype,
          "init",
          null,
        ),
        (E = k([(0, L.nV)("AppContext")], E)));
    },
    98519: function (e, t, n) {
      n.d(t, {
        o: function () {
          return _;
        },
      });
      var r = n(79066),
        i = n(95170),
        o = n(79262),
        a = n(72516),
        u = n(23378),
        s = n(97623),
        c = n(36200),
        l = n(90432),
        p = n(54149),
        d = n(10987),
        f = n(70721);
      function v(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, o._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var _ = (function () {
        function e(t) {
          var n = this;
          ((0, i._)(this, e),
            (this.fetch = t),
            (this.initTargetIdcRequest = function () {
              var e = (0, c.qm)();
              return n.fetch.get("/passport/web/account/info/", {
                credentials: "include",
                baseUrlType: p.Z4.FixedWww,
                query: { locale: e, app_language: e.split("-")[0], aid: 1459 },
              });
            }));
        }
        return (
          (e.prototype.checkTTwid = function () {
            return (0, r._)(function () {
              var e, t;
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    ((e = new u.TtWid({
                      aid: f.xE,
                      service: "www.tiktok.com",
                      union: !1,
                      unionHost: "",
                      needFid: !1,
                    })),
                      (n.label = 1));
                  case 1:
                    return (n.trys.push([1, 3, , 4]), [4, e.checkWebId()]);
                  case 2:
                    return (n.sent(), [3, 4]);
                  case 3:
                    return (
                      (t = n.sent()),
                      l.f.sendEvent("check_ttwid_error", { error_msg: t }),
                      console.error(t),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            })();
          }),
          e
        );
      })();
      _ = (function (e, t, n, r) {
        var i,
          a = arguments.length,
          u =
            a < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, o._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          u = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (u = (a < 3 ? i(u) : a > 3 ? i(t, n, u) : i(t, n)) || u);
        return (a > 3 && u && Object.defineProperty(t, n, u), u);
      })(
        [
          (0, s._q)(),
          v("design:type", Function),
          v("design:paramtypes", [void 0 === d.p ? Object : d.p]),
        ],
        _,
      );
    },
    71053: function (e, t, n) {
      n.d(t, {
        BL: function () {
          return _;
        },
        MM: function () {
          return v;
        },
        nf: function () {
          return f;
        },
      });
      var r = n(95170),
        i = n(85943),
        o = n(41939),
        a = n(22481),
        u = n(37633),
        s = {
          METHOD: "last_login_success_method",
          TIMESTAMP: "last_login_success_timestamp",
          TRACKING_INFO: "last_login_success_tracking_info",
          ENTER_TYPE: "last_login_enter_type",
        },
        c = "login_tracking_resume_data",
        l = "login_tracking_resume_timestamp",
        p = "login_tracking_resume_source",
        d = (function () {
          function e() {
            ((0, r._)(this, e),
              (this.MAX_CLICK_TIMESTAMP_THRESHOLD_SECONDS = 1e4),
              (this.hasDurationSinceClickTimestampUsed = !1),
              (this.MAX_RESUME_VALID_DURATION_THRESHOLD_SECONDS = 1e4));
          }
          var t = e.prototype;
          return (
            (t.populateTrackingInfoFromSessionStorage = function () {
              var e,
                t,
                n = (0, a.Qy)("login_btn_click_timestamp") || void 0,
                r = n ? Number(n) : void 0,
                i =
                  void 0 !== r &&
                  Date.now() - r > this.MAX_CLICK_TIMESTAMP_THRESHOLD_SECONDS,
                o = (0, a.Qy)("login_tracking_info") || void 0,
                u = (0, a.Qy)("login_send_info_back_after_success") || void 0,
                s = (0, a.Qy)(c) || void 0,
                d = (0, a.Qy)(l) || void 0,
                f = d ? Number(d) : void 0,
                v =
                  void 0 !== f &&
                  Date.now() - f <=
                    this.MAX_RESUME_VALID_DURATION_THRESHOLD_SECONDS,
                _ = (0, a.Qy)(p) || void 0;
              if (o) {
                try {
                  e = JSON.parse(o);
                } catch (e) {
                  console.log(
                    "Parse tracking info from session storage failed",
                    e,
                  );
                }
                return !e || i
                  ? this.resetTrackingProps()
                  : (this.setTrackingInfo(e),
                    this.setClickToLoginTimestamp(r),
                    this.setHasDurationSinceClickTimestampUsed(!1),
                    this.setSendInfoBackAfterLoginSuccess("1" === u),
                    void this.setResumeDataSource(void 0));
              }
              if (s && _) {
                try {
                  t = JSON.parse(s);
                } catch (e) {
                  console.log(
                    "Parse resume data from session storage failed",
                    e,
                  );
                }
                return t && v
                  ? this.batchSetResumeInfo(t, _)
                  : this.resetTrackingProps();
              }
              return this.resetTrackingProps();
            }),
            (t.batchSetResumeInfo = function (e, t) {
              (this.setTrackingInfo(e.trackingInfo),
                this.setClickToLoginTimestamp(e.clickToLoginTimestamp),
                this.setHasDurationSinceClickTimestampUsed(
                  e.hasDurationSinceClickTimestampUsed,
                ),
                this.setSendInfoBackAfterLoginSuccess(
                  e.sendInfoBackAfterLoginSuccess,
                ),
                this.setLoginSuccessPlatform(e.loginSuccessPlatform),
                this.setLoginSuccessEnterType(e.loginSuccessEnterType),
                this.setResumeDataSource(t));
            }),
            (t.setTrackingInfo = function (e) {
              this.trackingInfo = e;
            }),
            (t.getTrackingInfo = function () {
              return this.trackingInfo;
            }),
            (t.getResumeDataSource = function () {
              return this.resumeDataSource;
            }),
            (t.setClickToLoginTimestamp = function (e) {
              this.clickToLoginTimestamp = e;
            }),
            (t.setLoginSuccessPlatform = function (e) {
              this.loginSuccessPlatform = e;
            }),
            (t.setLoginSuccessEnterType = function (e) {
              this.loginSuccessEnterType = e;
            }),
            (t.setResumeDataSource = function (e) {
              this.resumeDataSource = e;
            }),
            (t.getClickToLoginTimestamp = function () {
              return this.clickToLoginTimestamp;
            }),
            (t.setSendInfoBackAfterLoginSuccess = function (e) {
              this.sendInfoBackAfterLoginSuccess = e;
            }),
            (t.getSendInfoBackAfterLoginSuccess = function () {
              return this.sendInfoBackAfterLoginSuccess;
            }),
            (t.resetTrackingProps = function () {
              ((this.trackingInfo = void 0),
                (this.clickToLoginTimestamp = void 0),
                (this.sendInfoBackAfterLoginSuccess = void 0),
                (this.hasDurationSinceClickTimestampUsed = !1),
                (this.loginSuccessPlatform = void 0),
                (this.loginSuccessEnterType = void 0),
                (this.resumeDataSource = void 0));
            }),
            (t.prepareResumeData = function (e) {
              if (this.trackingInfo) {
                var t = JSON.stringify({
                  trackingInfo: this.trackingInfo,
                  clickToLoginTimestamp: this.clickToLoginTimestamp,
                  sendInfoBackAfterLoginSuccess:
                    this.sendInfoBackAfterLoginSuccess,
                  hasDurationSinceClickTimestampUsed:
                    this.hasDurationSinceClickTimestampUsed,
                  loginSuccessEnterType: this.loginSuccessEnterType,
                  loginSuccessPlatform: this.loginSuccessPlatform,
                });
                ((0, a.J2)(c, t),
                  (0, a.J2)(l, Date.now().toString()),
                  (0, a.J2)(p, e));
              }
            }),
            (t.clearResumeData = function () {
              ((0, a.X)(c), (0, a.X)(l), (0, a.X)(p));
            }),
            (t.setHasDurationSinceClickTimestampUsed = function (e) {
              this.hasDurationSinceClickTimestampUsed = e;
            }),
            (t.getDurationSinceClickTimestampOnce = function () {
              if (!this.hasDurationSinceClickTimestampUsed)
                return (
                  (this.hasDurationSinceClickTimestampUsed = !0),
                  void 0 !== this.clickToLoginTimestamp
                    ? Date.now() - this.clickToLoginTimestamp
                    : void 0
                );
            }),
            (t.saveLoginSuccessInfo = function (e) {
              var t = e.teaPlatform,
                n = e.isSignUp;
              this.trackingInfo &&
                ((this.loginSuccessPlatform = t),
                (this.loginSuccessEnterType = n
                  ? o.TZ.ClickSignUp
                  : o.TZ.ClickLogin));
            }),
            (t.getLoginSuccessE2ETrackingProps = function () {
              if (this.trackingInfo && this.sendInfoBackAfterLoginSuccess)
                return {
                  trackingInfo: this.trackingInfo,
                  successTimestamp: Date.now(),
                  successEnterType: this.loginSuccessEnterType,
                  successMethod: this.loginSuccessPlatform,
                };
            }),
            (t.setUpLoginSuccessE2ETracking = function () {
              if (this.trackingInfo && this.sendInfoBackAfterLoginSuccess) {
                var e = s.TIMESTAMP,
                  t = s.METHOD,
                  n = s.TRACKING_INFO,
                  r = s.ENTER_TYPE;
                ((0, a.J2)(e, Date.now().toString()),
                  (0, a.J2)(n, JSON.stringify(this.trackingInfo)),
                  this.loginSuccessEnterType &&
                    (0, a.J2)(r, this.loginSuccessEnterType),
                  this.loginSuccessPlatform &&
                    (0, a.J2)(t, this.loginSuccessPlatform),
                  i.A.set("TT_rp_login_track_pram", "1", {
                    path: "/",
                    domain: "tiktok.com",
                    secure: !1,
                    sameSite: "lax",
                    "max-age": "4",
                  }));
              }
            }),
            e
          );
        })(),
        f = (0, u.U)(
          "LoginTrackingUtilsInstance@tiktok/fe-shared",
          function () {
            return new d();
          },
        ),
        v = {
          CLICK_TIMESTAMP: "logout_btn_click_timestamp",
          TRACKING_INFO: "logout_tracking_info",
        },
        _ = new ((function () {
          function e() {
            ((0, r._)(this, e),
              (this.MAX_CLICK_TIMESTAMP_THRESHOLD_SECONDS = 1e4));
          }
          var t = e.prototype;
          return (
            (t.populateTrackingInfoFromSessionStorage = function () {
              var e,
                t = (0, a.Qy)(v.CLICK_TIMESTAMP) || void 0,
                n = t ? Number(t) : void 0,
                r =
                  void 0 !== n &&
                  Date.now() - n > this.MAX_CLICK_TIMESTAMP_THRESHOLD_SECONDS,
                i = (0, a.Qy)(v.TRACKING_INFO) || void 0;
              if (!r) {
                if (i)
                  try {
                    e = JSON.parse(i);
                  } catch (e) {
                    console.log(
                      "Parse logout tracking info from session storage failed",
                      e,
                    );
                  }
                this.trackingInfo = e;
              }
            }),
            (t.getTrackingInfo = function () {
              return this.trackingInfo;
            }),
            e
          );
        })())();
    },
    94279: function (e, t, n) {
      n.d(t, {
        i: function () {
          return u;
        },
      });
      var r = n(67114),
        i = n(22481),
        o = n(71053),
        a = n(75813),
        u = function (e, t, n) {
          if ((a.LU.removeAll(), n)) {
            n.logoutSubmit(null != t ? t : {});
            var u,
              s = null == (u = n.getCommonTrackingInfo) ? void 0 : u.call(n);
            s &&
              ((0, i.J2)(o.MM.TRACKING_INFO, JSON.stringify(s)),
              (0, i.J2)(o.MM.CLICK_TIMESTAMP, Date.now().toString()));
          } else r.z.logoutSubmit(null != t ? t : {});
          var c = "https://www.tiktok.com/logout";
          (e && (c += "?redirect_url=".concat(encodeURIComponent(e))),
            (window.location.href = c));
        };
    },
    47605: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      var r = (0, n(82761).$)("SeoABTestContext@tiktok/fe-shared")(null);
    },
    84063: function (e, t, n) {
      n.d(t, {
        F: function () {
          return R;
        },
        R: function () {
          return O;
        },
      });
      var r = n(5377),
        i = n(6586),
        o = n(51070),
        a = n(73628),
        u = n(98971),
        s = n(80754),
        c = n(89485),
        l = n(24113),
        p = n(10874),
        d = n(92540),
        f = n(3595),
        v = n(3297),
        _ = n(79178),
        g = n(31133),
        h = n(10855),
        m = n(47605),
        A = n(79066),
        y = n(72516),
        b = n(71111),
        w = n(73721),
        T = n(44957),
        S = n(71952),
        L = (0, w.M)({
          csr: function (e) {
            return (0, A._)(function () {
              var t;
              return (0, y.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = e.url),
                      [
                        4,
                        T.h.get("/api/seo/redirection/", { query: { url: t } }),
                      ]
                    );
                  case 1:
                    return [2, n.sent()];
                }
              });
            })();
          },
          ssr: function () {
            return Promise.resolve({ statusCode: S.s.Ok, redirectURL: void 0 });
          },
        }),
        k = { needRedirect: !1 },
        P = (0, u.z)({
          initState: k,
          rehydrationDataKey: "shared.seo.pageRedirect",
          fetchAction: function (e, t) {
            return (0, A._)(function () {
              var e, n, r, i;
              return (0, y.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    ((e = t.url), (o.label = 1));
                  case 1:
                    return (o.trys.push([1, 3, , 4]), [4, L(t)]);
                  case 2:
                    return ((n = o.sent()), [3, 4]);
                  case 3:
                    return (o.sent(), [2, { needRedirect: !1, loadedURL: e }]);
                  case 4:
                    return [
                      2,
                      {
                        pageRedirectURL: (i =
                          void 0 === (r = n.redirectURL) ? void 0 : r),
                        loadedURL: e,
                        needRedirect: void 0 !== i,
                      },
                    ];
                }
              });
            })();
          },
        }),
        E = (0, c.pj)(P),
        C = (0, b.atom)(null, function (e, t) {
          t(E, k);
        }),
        I = n(41557),
        V = (0, r._)({}, f.OZ, v.Ob);
      function O(e, t) {
        return function (n) {
          var c = (0, i._)((0, u.I)(P), 2),
            f = c[0].atomState,
            v = c[1],
            _ = f.pageRedirectURL,
            g = f.loadedURL,
            h = f.needRedirect,
            m = (0, s.useSetAtom)(C),
            A = (0, p.useHistory)(),
            y = (0, p.useLocation)(),
            b = "".concat(d.C).concat(decodeURIComponent(y.pathname)),
            w = y.search;
          return (
            (0, l.useIsomorphicEffect)(
              function () {
                return [
                  v({ url: b }),
                  function () {
                    m();
                  },
                ];
              },
              [b],
            ),
            (0, a.useEffect)(
              function () {
                if (_) {
                  var e,
                    t = new URL(_);
                  decodeURIComponent(t.pathname) !==
                    decodeURIComponent(y.pathname) &&
                    (((e = t.pathname),
                    Object.values(V).some(function (t) {
                      return null !== (0, p.matchPath)(e, { path: t });
                    }))
                      ? A.push("".concat(t.pathname).concat(w || ""))
                      : (window.location.href = _));
                }
              },
              [_, A, y.pathname, w],
            ),
            g !== b || h
              ? (0, o.Y)(o.FK, { children: t })
              : (0, o.Y)(o.FK, { children: (0, o.Y)(e, (0, r._)({}, n)) })
          );
        };
      }
      var M = 1;
      function R(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t
          ? function (t) {
              var n = (0, p.useLocation)().pathname,
                u = "".concat(d.C).concat(n),
                s = (0, i._)((0, _.S)(I.p), 2),
                f = s[0].abtest,
                v = s[1],
                A = (0, i._)(
                  (0, g.ZC)(
                    function (e) {
                      return e.abtest;
                    },
                    { equalityFn: c.bN },
                  ),
                  2,
                ),
                y = A[0],
                b = A[1];
              return (
                (0, l.useIsomorphicEffect)(
                  function () {
                    return b.setAbtest(u);
                  },
                  [v, u],
                ),
                (0, a.useEffect)(
                  function () {
                    y && !f && v.setAbTest(y);
                  },
                  [y, f],
                ),
                (0, a.useMemo)(
                  function () {
                    return (
                      (0, h.u)("SEOABTest Render Times:", M++, f),
                      f
                        ? (0, o.Y)(m.K.Provider, {
                            value: f,
                            children: (0, o.Y)(e, (0, r._)({}, t)),
                          })
                        : null
                    );
                  },
                  [f, t],
                )
              );
            }
          : function (t) {
              var n = (0, p.useLocation)().pathname,
                u = "".concat(d.C).concat(n),
                s = (0, i._)((0, _.S)(I.p), 2),
                f = s[0].abtest,
                v = s[1],
                A = (0, i._)(
                  (0, g.ZC)(
                    function (e) {
                      return e.abtest;
                    },
                    { equalityFn: c.bN },
                  ),
                  2,
                ),
                y = A[0],
                b = A[1];
              return (
                (0, l.useIsomorphicEffect)(
                  function () {
                    return b.setAbtest(u);
                  },
                  [v, u],
                ),
                (0, a.useEffect)(
                  function () {
                    y && !f && v.setAbTest(y);
                  },
                  [y, f],
                ),
                (0, h.u)("SEOABTest Render Times:", M++, f),
                f
                  ? (0, o.Y)(m.K.Provider, {
                      value: f,
                      children: (0, o.Y)(e, (0, r._)({}, t)),
                    })
                  : null
              );
            };
      }
    },
    238: function (e, t, n) {
      n.d(t, {
        M0: function () {
          return T;
        },
        Nk: function () {
          return E;
        },
        O9: function () {
          return y;
        },
        Tx: function () {
          return S;
        },
        dY: function () {
          return k;
        },
        lF: function () {
          return b;
        },
        wW: function () {
          return P;
        },
        yq: function () {
          return L;
        },
      });
      var r = n(5377),
        i = n(45996),
        o = n(73628),
        a = n(89485),
        u = n(73515),
        s = n(61779),
        c = n(79178),
        l = n(36646),
        p = n(49865),
        d = n(31133),
        f = n(89134),
        v = n(67500),
        _ = n(38577),
        g = n(80660),
        h = n(81047),
        m = n(5462),
        A = n(41557),
        y = function (e, t, n) {
          if (!(!e || e === t || (0, f.fU)()) && n !== u.g.TrendingDetail) {
            var o = location.pathname.replace(/[^\/]+$/, e),
              a = "".concat(o).concat(location.search),
              s = (0, i._)((0, r._)({}, history.state), { as: a });
            window.history.replaceState(s, "format_kap_page", a);
          }
        },
        b = function (e) {
          var t = P();
          return (0, s.zh)(e, t);
        },
        w = function (e) {
          var t = e.keyword,
            n = e.keywordList,
            r = e.removeRelatedKeywords,
            i = e.t,
            o = (0, s.zh)(t),
            a = "".concat(
              i("seo_serp_expansion_num1", { expansion_keywords: o }),
            );
          if (r) return a;
          var u = (0, s.gW)(n),
            c = u
              ? " ".concat(
                  i("seo_aggre_metadesc2", { related_search_keywords: u }),
                )
              : "";
          return "".concat(a).concat(c);
        },
        T = function (e) {
          var t = e.keyword,
            n = e.relatedWordList,
            r = (0, v.TQ)("kep_remove_desc_keywords"),
            i = (0, _.s)();
          return (0, o.useMemo)(
            function () {
              return w({
                keyword: t,
                keywordList: n.map(function (e) {
                  return e.formattedWord;
                }),
                t: i,
                removeRelatedKeywords: r,
              });
            },
            [t, i, n],
          );
        };
      function S(e) {
        var t = e.pageType,
          n = e.topic,
          r = e.language,
          i = void 0 === r ? "en" : r,
          a = (0, c.w)(m.E);
        (0, o.useEffect)(
          function () {
            a.setFeedSEOProps({ pageType: t, topic: n, language: i });
          },
          [a, t, n, i],
        );
      }
      function L() {
        return (0, o.useMemo)(function () {
          return (0, p.pZ)();
        }, []);
      }
      function k() {
        return (0, o.useMemo)(function () {
          return (0, p.qA)();
        }, []);
      }
      function P() {
        var e = (0, l.P)(A.p, {
          selector: function (e) {
            return e.abtest;
          },
          dependencies: [],
        });
        return (
          (0, d.d7)(
            function (e) {
              return e.abtest;
            },
            { equalityFn: a.bN },
          ) || e
        );
      }
      function E() {
        return !!(0, g.L$)(
          (0, h.U)(function () {
            return ["isBot"];
          }, []),
        ).isBot;
      }
    },
    5462: function (e, t, n) {
      n.d(t, {
        E: function () {
          return G;
        },
      });
      var r,
        i = n(79066),
        o = n(48748),
        a = n(95170),
        u = n(7120),
        s = n(5377),
        c = n(45996),
        l = n(6586),
        p = n(54333),
        d = n(79262),
        f = n(72516),
        v = n(72828),
        _ = n.n(v),
        g = n(80339),
        h = n(95719),
        m = n(23999),
        A = n(63700),
        y = n(19293),
        b = n(68710),
        w = n(35572),
        T = n(20259),
        S = n(62564),
        L = n(24451),
        k = n(17354),
        P = n(72916),
        E = n(82379),
        C = n(95092),
        I = n(2999),
        V = n(73515),
        O = n(92540),
        M = n(3595),
        R = n(12499),
        x = n(21282),
        W = n(4076),
        F = n(71952),
        q = n(16020),
        D = n(51501),
        U = n(29779),
        N = n(41557);
      function B(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, d._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function j(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, d._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var $ = (0, p._)(x.TN).concat((0, p._)(x.Wq)),
        G = (function (e) {
          function t(e, n, r, i) {
            var u;
            return (
              (0, a._)(this, t),
              ((u = (0, o._)(this, t)).stateModule = e),
              (u.service = n),
              (u.sharingMeta = r),
              (u.t = i),
              (u.defaultState = {}),
              u
            );
          }
          (0, u._)(t, e);
          var n = t.prototype;
          return (
            (n.updateSEOState = function (e) {
              var t = e.metaParams,
                n = e.jsonldList,
                r = e.disableAlternateLink,
                i = e.generateAlternateWithCanonical;
              this.stateModule.updateAtom({
                metaParams: void 0 === t ? {} : t,
                jsonldList: void 0 === n ? [] : n,
                disableAlternateLink: void 0 !== r && r,
                generateAlternateWithCanonical: i,
              });
            }),
            (n.setPCMusicSEOProps = function (e) {
              var t = this;
              return e.pipe(
                (0, b.Z)(function (e) {
                  var n = e.response,
                    r = e.language,
                    i = e.appType;
                  return t
                    .setMusicSEOProps(n, { language: r }, i)
                    .pipe((0, g.q)(t.terminate("setPCMusicSEOProps")));
                }),
              );
            }),
            (n.setFeedSEOProps = function (e) {
              var t = this;
              return e.pipe(
                (0, w.p)(function (e) {
                  var n = e.pageType,
                    r = e.topic,
                    i = e.topicType,
                    o = e.language;
                  return t.service
                    .fetchSEOProps(
                      {
                        seoProps: { pageId: "", pageType: n },
                        topic: r,
                        topicType: i,
                        language: o,
                      },
                      $,
                    )
                    .pipe(
                      (0, h.M)(function (e) {
                        return t.updateSEOState(e);
                      }),
                      (0, b.Z)(function () {
                        return (0, m.of)(t.terminate());
                      }),
                      (0, T.W)(function (e) {
                        return (0, m.of)(t.noop(), t.terminate());
                      }),
                    );
                }),
              );
            }),
            (n.setGoLiveSEOProps = function (e) {
              var t = this;
              return e.pipe(
                (0, w.p)(function (e) {
                  var n = e.language,
                    r = e.user,
                    i = {
                      seoProps: { pageId: "", pageType: V.g.GoLive },
                      user: r,
                      language: n,
                      t: t.t,
                    };
                  return t.service.fetchSEOProps(i, $).pipe(
                    (0, h.M)(function (e) {
                      return t.updateSEOState(e);
                    }),
                    (0, b.Z)(function () {
                      return (0, m.of)(t.terminate());
                    }),
                    (0, T.W)(function () {
                      return (0, m.of)(t.noop());
                    }),
                  );
                }),
              );
            }),
            (n.setHomeSEOProps = function (e) {
              var t = this;
              return this.service
                .fetchSEOProps(
                  { seoProps: { pageId: "", pageType: V.g.Home }, language: e },
                  $,
                )
                .pipe(
                  (0, h.M)(function (e) {
                    return t.updateSEOState(e);
                  }),
                  (0, b.Z)(function () {
                    return (0, A.h)(
                      (0, m.of)(
                        t.sharingMeta.setSharingMetaState({ "og:image": O.U }),
                      ),
                    );
                  }),
                );
            }),
            (n.setForyouSEOProps = function (e, t) {
              var n = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var r = (0, c._)((0, s._)({}, e, t), {
                seoProps: { pageType: V.g.Trending },
                t: this.t,
              });
              return this.service.fetchSEOProps(r, $).pipe(
                (0, h.M)(function (e) {
                  return n.updateSEOState(e);
                }),
                (0, S.T)(function () {
                  return n.noop();
                }),
              );
            }),
            (n.setVideoSEOProps = function (e, t, n, r, i) {
              var o,
                a,
                u,
                p,
                d,
                f,
                v,
                _,
                g = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var y =
                  null !=
                  (v =
                    null == e ||
                    null == (a = e.itemInfo) ||
                    null == (o = a.itemStruct)
                      ? void 0
                      : o.id)
                    ? v
                    : "",
                w =
                  null !=
                  (_ =
                    null == e ||
                    null == (f = e.itemInfo) ||
                    null == (d = f.itemStruct) ||
                    null == (p = d.author) ||
                    null == (u = p.bioLink)
                      ? void 0
                      : u.link)
                    ? _
                    : "";
              return (0, m.of)(e).pipe(
                (0, L.E)(
                  this.stateModule.state$.pipe(
                    (0, k.p)(function (e) {
                      return void 0 !== e.abtest;
                    }),
                  ),
                ),
                (0, b.Z)(function (o) {
                  var a = (0, l._)(o, 2),
                    u = (a[0], a[1]),
                    p = (0, c._)((0, s._)({}, e, t), {
                      transcriptContent: i,
                      bioLink: w,
                      seoProps: {
                        pageId: y,
                        pageType: V.g.Video,
                        abtest: u.abtest,
                      },
                      t: g.t,
                    });
                  return g.service.fetchSEOProps(p, $).pipe(
                    (0, h.M)(function (e) {
                      return g.updateSEOState(e);
                    }),
                    (0, P.n)(function (t) {
                      return (0, A.h)(
                        g.sharingMeta.setVideoSharingMeta(t, e, n, r),
                      );
                    }),
                  );
                }),
              );
            }),
            (n.setCollectionSEOProps = function (e, t, n, r, i) {
              var o,
                a,
                u,
                l = this,
                p = (0, c._)((0, s._)({}, e, t), {
                  seoProps: {
                    pageId:
                      null !=
                      (u =
                        null == (a = e.collectionInfo) ||
                        null == (o = a.collectionId)
                          ? void 0
                          : o.toString())
                        ? u
                        : "",
                    pageType: V.g.Collection,
                  },
                  t: this.t,
                  items: i,
                });
              return this.service.fetchSEOProps(p, $).pipe(
                (0, h.M)(function (e) {
                  return l.updateSEOState(e);
                }),
                (0, P.n)(function () {
                  var t, i, o;
                  return (0, A.h)(
                    r
                      ? (0, m.of)(l.noop())
                      : l.sharingMeta.setCollectionSharingMeta(
                          e,
                          n,
                          null !=
                            (o =
                              null == e ||
                              null == (i = e.collectionInfo) ||
                              null == (t = i.collectionId)
                                ? void 0
                                : t.toString())
                            ? o
                            : "",
                        ),
                  );
                }),
              );
            }),
            (n.setSearchSharingSEOProps = function (e, t, n, r) {
              var i = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var o = (0, c._)((0, s._)({}, e, t), {
                seoProps: { pageType: V.g.SearchReflow },
                eventName: n,
                t: this.t,
              });
              return this.service.fetchSEOProps(o, $).pipe(
                (0, h.M)(function (e) {
                  return i.updateSEOState(e);
                }),
                (0, b.Z)(function (t) {
                  return (0, A.h)(
                    i.sharingMeta.setSearchSharingMeta(t, e, n, r),
                  );
                }),
              );
            }),
            (n.setQuestionSEOProps = function (e, t, n, r, i, o) {
              var a,
                u = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var l = (0, c._)((0, s._)({}, e, t), {
                seoProps: {
                  pageId: null == (a = e.questionInfo) ? void 0 : a.id,
                  pageType: V.g.Question,
                },
                answers: n,
                t: this.t,
                items: o,
              });
              return this.service.fetchSEOProps(l, $).pipe(
                (0, h.M)(function (e) {
                  return u.updateSEOState(e);
                }),
                (0, b.Z)(function () {
                  return (0, m.of)(
                    u.sharingMeta.setQuestionSharingMeta(e, n[0], r, i),
                  );
                }),
              );
            }),
            (n.setVideoPlaylistSEOProps = function (e, t, n, r) {
              var i,
                o = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var a = (0, c._)((0, s._)({}, e, n), {
                itemList: t,
                seoProps: {
                  pageId: null == (i = e.mixInfo) ? void 0 : i.id,
                  pageType: V.g.VideoPlayerList,
                },
                t: this.t,
              });
              return this.service.fetchSEOProps(a, $).pipe(
                (0, h.M)(function (e) {
                  return o.updateSEOState(e);
                }),
                (0, b.Z)(function () {
                  return (0, m.of)(
                    o.sharingMeta.setVideoPlaylistSharingMeta(e, t, r),
                  );
                }),
              );
            }),
            (n.setUserSEOProps = function (e, t, n, r) {
              var i,
                o,
                a,
                u = this,
                p = e.userInfo,
                d = e.statusCode,
                f =
                  (null == (a = this.stateModule.state.abtest) ||
                  null == (o = a.parameters) ||
                  null == (i = o.user_og_image)
                    ? void 0
                    : i.vid) === "v1";
              return d === F.s.UnknownError || f
                ? (0, m.of)(this.noop())
                : (0, m.of)(e).pipe(
                    (0, L.E)(this.stateModule.state$),
                    (0, b.Z)(function (i) {
                      var o,
                        a,
                        d = (0, l._)(i, 2),
                        f = (d[0], d[1]),
                        v = (0, c._)((0, s._)({}, e, t), {
                          seoProps: {
                            pageId:
                              null !=
                              (a =
                                null == p || null == (o = p.user)
                                  ? void 0
                                  : o.id)
                                ? a
                                : "",
                            pageType: V.g.User,
                            abtest: f.abtest,
                          },
                          t: u.t,
                          items: r,
                        });
                      return u.service.fetchSEOProps(v, $).pipe(
                        (0, h.M)(function (e) {
                          return u.updateSEOState(e);
                        }),
                        (0, P.n)(function (t) {
                          return (0, A.h)(
                            u.sharingMeta.setUserSharingMeta(t, e, n),
                          );
                        }),
                      );
                    }),
                  );
            }),
            (n.setChallengeSEOProps = function (e, t, n, r, i) {
              var o,
                a = this,
                u = e.statusCode;
              if (u === F.s.UnknownError) return (0, m.of)(this.noop());
              var l = (0, c._)((0, s._)({}, e, t), {
                statusCode: u,
                seoProps: {
                  pageId:
                    null == (o = e.challengeInfo) ? void 0 : o.challenge.id,
                  pageType: V.g.Challenge,
                },
                t: this.t,
                items: r,
                relatedChallengeList: i,
              });
              return this.service.fetchSEOProps(l, $).pipe(
                (0, h.M)(function (e) {
                  return a.updateSEOState(e);
                }),
                (0, P.n)(function (t) {
                  return (0, A.h)(
                    a.sharingMeta.setChallengeSharingMeta(t, e, n),
                  );
                }),
              );
            }),
            (n.setMusicSEOProps = function (e, t, n, r) {
              var i,
                o = this,
                a = e.statusCode;
              if (a === F.s.UnknownError) return (0, m.of)(this.noop());
              var u = (0, c._)((0, s._)({}, e, t), {
                statusCode: a,
                seoProps: {
                  pageId: null == (i = e.musicInfo) ? void 0 : i.music.id,
                  pageType: V.g.Music,
                },
                items: r,
                t: this.t,
              });
              return this.service.fetchSEOProps(u, $).pipe(
                (0, h.M)(function (e) {
                  return o.updateSEOState(e);
                }),
                (0, P.n)(function (t) {
                  return (0, A.h)(o.sharingMeta.setMusicSharingMeta(t, e, n));
                }),
              );
            }),
            (n.setMusicPlaylistSEOProps = function (e, t, n) {
              var r,
                i = this,
                o = e.status_code;
              if (o === F.s.UnknownError) return (0, m.of)(this.noop());
              var a = (0, c._)((0, s._)({}, e, t), {
                status_code: o,
                seoProps: {
                  pageId: null == (r = e.mc_info) ? void 0 : r.id_str,
                  pageType: V.g.MusicPlaylist,
                },
                t: this.t,
              });
              return this.service.fetchSEOProps(a, $).pipe(
                (0, h.M)(function (e) {
                  return i.updateSEOState(e);
                }),
                (0, b.Z)(function (t) {
                  return (0, A.h)(
                    i.sharingMeta.setMusicPlaylistSharingMeta(t, e, n),
                  );
                }),
              );
            }),
            (n.setSearchSEOProps = function (e, t, n) {
              var r = this;
              if (e.status_code === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var i = (0, c._)((0, s._)({}, e, t, n), {
                seoProps: { pageId: "", pageType: V.g.SearchResult },
                t: this.t,
              });
              return this.service.fetchSEOProps(i, $).pipe(
                (0, h.M)(function (e) {
                  return r.updateSEOState(e);
                }),
                (0, S.T)(function () {
                  return r.noop();
                }),
              );
            }),
            (n.setLiveRoomSEOProps = function (e, t, n) {
              var r,
                i = this,
                o = e.userInfo,
                a = e.statusCode,
                u = (0, c._)((0, s._)({}, e, t), {
                  seoProps: {
                    pageId:
                      null != (r = null == o ? void 0 : o.user.id) ? r : "",
                    pageType: V.g.LiveRoom,
                  },
                  t: this.t,
                });
              return a === F.s.UnknownError
                ? (0, m.of)(this.noop())
                : this.service.fetchSEOProps(u, $).pipe(
                    (0, h.M)(function (e) {
                      return i.updateSEOState(e);
                    }),
                    (0, b.Z)(function (t) {
                      return (0, A.h)(
                        i.sharingMeta.setLiveRoomSharingMeta(t, e, n),
                      );
                    }),
                  );
            }),
            (n.setFollowingSEOProps = function (e, t, n) {
              var r = this;
              if (e.statusCode === F.s.UnknownError)
                return (0, m.of)(this.noop());
              var i = (0, c._)((0, s._)({}, e, t), {
                seoProps: { pageType: V.g.Following },
                t: this.t,
              });
              return this.service.fetchSEOProps(i, $).pipe(
                (0, h.M)(function (e) {
                  return r.updateSEOState(e);
                }),
                (0, b.Z)(function (e) {
                  return (0, A.h)(r.sharingMeta.setFollowingSharingMeta(e, n));
                }),
              );
            }),
            (n.setPoiSEOProps = function (e, t, n, r) {
              var i,
                o,
                a = this,
                u = e.statusCode;
              if (u === F.s.UnknownError) return (0, m.of)(this.noop());
              var l = (0, c._)(
                (0, s._)(
                  (0, c._)((0, s._)({}, e, t), {
                    statusCode: u,
                    seoProps: {
                      pageId:
                        null == (o = e.poiInfo) || null == (i = o.poi)
                          ? void 0
                          : i.id,
                      pageType: V.g.Poi,
                    },
                  }),
                  r,
                ),
                { t: this.t },
              );
              return this.service.fetchSEOProps(l, $).pipe(
                (0, h.M)(function (e) {
                  return a.updateSEOState(e);
                }),
                (0, b.Z)(function (t) {
                  return (0, A.h)(a.sharingMeta.setPoiSharingMeta(t, e, n));
                }),
              );
            }),
            (n.setPoiCategorySEOProps = function (e, t, n, r) {
              var i,
                o,
                a = this,
                u = e.statusCode;
              if (u === F.s.UnknownError) return (0, m.of)(this.noop());
              var l = (0, c._)(
                (0, s._)(
                  (0, c._)((0, s._)({}, e, t), {
                    statusCode: u,
                    seoProps: {
                      pageId:
                        null == (o = e.poiInfo) || null == (i = o.poi)
                          ? void 0
                          : i.id,
                      pageType: V.g.PoiCategory,
                    },
                  }),
                  r,
                ),
                { t: this.t },
              );
              return this.service.fetchSEOProps(l, $).pipe(
                (0, h.M)(function (e) {
                  return a.updateSEOState(e);
                }),
                (0, b.Z)(function (t) {
                  return (0, A.h)(a.sharingMeta.setPoiSharingMeta(t, e, n));
                }),
              );
            }),
            (n.setEventDetailSEOProps = function (e) {
              var t = this;
              return e.pipe(
                (0, w.p)(function (e) {
                  var n = e.eventTitle,
                    r = e.eventId,
                    i = e.subscriberCount,
                    o = e.language,
                    a = {
                      seoProps: { pageId: "", pageType: V.g.LiveEvent },
                      t: t.t,
                      eventTitle: n,
                      language: void 0 === o ? "en" : o,
                      eventId: r,
                      subscriberCount: i,
                    };
                  return t.service.fetchSEOProps(a, $).pipe(
                    (0, h.M)(function (e) {
                      return t.updateSEOState(e);
                    }),
                    (0, b.Z)(function () {
                      return (0, m.of)(t.terminate());
                    }),
                    (0, T.W)(function () {
                      return (0, m.of)(t.noop());
                    }),
                  );
                }),
              );
            }),
            (n.reportImpressionByEventbus = function (e) {
              return this.service.reportImpressionByEventbus(e);
            }),
            (n.reportImpressionByRpc = function (e) {
              return this.service.reportImpressionByRpc(e);
            }),
            t
          );
        })(W.E);
      (B(
        [
          (0, E.Mj)(),
          j("design:type", Function),
          j("design:paramtypes", [void 0 === y.c ? Object : y.c]),
          j("design:returntype", void 0),
        ],
        G.prototype,
        "setPCMusicSEOProps",
        null,
      ),
        B(
          [
            (0, E.Mj)({
              payloadGetter: function (e, t) {
                var n = e.i18n.getLanguage();
                return _()(M.no.following).test(e.path)
                  ? { pageType: V.g.Following, language: n }
                  : _()(M.no.topics).test(e.path)
                    ? { pageType: V.g.Topic, language: n }
                    : _()(M.no.discover).test(e.path)
                      ? { pageType: V.g.Discover, language: n }
                      : _()(R.pj.liveDiscover).test(e.path)
                        ? { pageType: V.g.LiveDiscover, language: n }
                        : _()(R.pj.liveEvent).test(e.path)
                          ? { pageType: V.g.LiveEvent, language: n }
                          : t;
              },
            }),
            j("design:type", Function),
            j("design:paramtypes", [void 0 === y.c ? Object : y.c]),
            j("design:returntype", void 0),
          ],
          G.prototype,
          "setFeedSEOProps",
          null,
        ),
        B(
          [
            (0, E.Mj)({
              payloadGetter: function (e, t) {
                return (0, i._)(function () {
                  var n, r, i;
                  return (0, f.__generator)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!_()(R.pj.liveGoLive).test(e.path)) return [3, 2];
                        return [4, e.service.baseContext.getBaseContext()];
                      case 1:
                        return (
                          (r = (n = o.sent()).language),
                          (i = n.user),
                          [2, { pageType: V.g.GoLive, language: r, user: i }]
                        );
                      case 2:
                        return [2, t];
                    }
                  });
                })();
              },
            }),
            j("design:type", Function),
            j("design:paramtypes", [void 0 === y.c ? Object : y.c]),
            j("design:returntype", void 0 === y.c ? Object : y.c),
          ],
          G.prototype,
          "setGoLiveSEOProps",
          null,
        ),
        B(
          [
            (0, E.Mj)(),
            j("design:type", Function),
            j("design:paramtypes", [void 0 === y.c ? Object : y.c]),
            j("design:returntype", void 0 === y.c ? Object : y.c),
          ],
          G.prototype,
          "setEventDetailSEOProps",
          null,
        ),
        (G = B(
          [
            (0, C.nV)("SEO"),
            ((r = (0, I.y)(q.hp)),
            function (e, t) {
              r(e, t, 3);
            }),
            j("design:type", Function),
            j("design:paramtypes", [
              void 0 === N.p ? Object : N.p,
              void 0 === U.F ? Object : U.F,
              void 0 === D.e ? Object : D.e,
              "undefined" == typeof I18NTranslate ? Object : I18NTranslate,
            ]),
          ],
          G,
        )));
    },
    29779: function (e, t, n) {
      n.d(t, {
        F: function () {
          return b;
        },
      });
      var r,
        i = n(95170),
        o = n(5377),
        a = n(45996),
        u = n(79262),
        s = n(69513),
        c = n(23999),
        l = n(97623),
        p = n(2999),
        d = n(86810),
        f = n(59714),
        v = n(19742),
        _ = n(74426),
        g = n(96073),
        h = n(54149),
        m = n(16020),
        A = n(10987);
      function y(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, u._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var b = (function () {
        function e(t, n) {
          ((0, i._)(this, e), (this.t = t), (this.fetch = n));
        }
        var t = e.prototype;
        return (
          (t.fetchSEOProps = function (e, t) {
            e.t = this.t;
            var n,
              r,
              i,
              u,
              s =
                null !=
                (i =
                  null == (n = (0, f.y)(e, t).seoProps) ? void 0 : n.metaParams)
                  ? i
                  : {},
              l =
                null !=
                (u =
                  null == (r = (0, f.d)(e, t).seoProps) ? void 0 : r.jsonldList)
                  ? u
                  : [],
              p = (0, a._)((0, o._)({}, e.seoProps), {
                metaParams: s,
                jsonldList: l,
              });
            return (0, c.of)(p);
          }),
          (t.getUA = function () {
            return window.navigator.userAgent;
          }),
          (t.getTrafficType = function () {
            return (0, _.q)();
          }),
          (t.getLaunchMode = function () {
            return (0, g.o7)();
          }),
          (t.fetchABTest = function (e) {
            var t = (0, v.YI)(d.X);
            return t
              ? (0, c.of)(t)
              : (0, c.of)({ pageId: "-1", vidList: [], parameters: {} });
          }),
          (t.reportImpressionByEventbus = function (e) {}),
          (t.reportImpressionByRpc = function (e) {
            this.fetch
              .post("/api/discover/client_impression/", {
                body: JSON.stringify({
                  timestamp: e.Timestamp,
                  visitPageUrl: e.VisitPageUrl,
                  urls: e.Urls,
                  module: e.Module,
                  trafficType: e.TrafficType,
                }),
                headers: { "content-type": "application/json" },
                baseUrlType: h.Z4.FixedWww,
              })
              .subscribe(s.A);
          }),
          e
        );
      })();
      b = (function (e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, u._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      })(
        [
          (0, l._q)(),
          ((r = (0, p.y)(m.hp)),
          function (e, t) {
            r(e, t, 0);
          }),
          y("design:type", Function),
          y("design:paramtypes", [
            "undefined" == typeof I18NTranslate ? Object : I18NTranslate,
            void 0 === A.p ? Object : A.p,
          ]),
        ],
        b,
      );
    },
    41557: function (e, t, n) {
      n.d(t, {
        p: function () {
          return O;
        },
      });
      var r,
        i = n(48748),
        o = n(95170),
        a = n(7120),
        u = n(5377),
        s = n(45996),
        c = n(79262),
        l = n(46657),
        p = n(23999),
        d = n(19293),
        f = n(72916),
        v = n(74690),
        _ = n(80339),
        g = n(11483),
        h = n(78990),
        m = n(82379),
        A = n(95092),
        y = n(2999),
        b = n(73515),
        w = n(80561),
        T = n(86810),
        S = n(92540),
        L = n(19742),
        k = n(18672),
        P = n(29779);
      function E(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, c._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function C(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, c._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var I = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          try {
            return decodeURI(e);
          } catch (t) {
            return e;
          }
        },
        V = (function () {
          if ("undefined" == typeof window)
            return { abtest: void 0, canonical: void 0 };
          var e = (0, L.YI)(T.X);
          return { abTest: e, canonical: null == e ? void 0 : e.canonical };
        })(),
        O = (function (e) {
          function t(e, n) {
            var r;
            return (
              (0, o._)(this, t),
              ((r = (0, i._)(this, t)).service = e),
              (r.jotaiStore = n),
              (r.defaultState = {
                abtest: V.abtest,
                loading: !1,
                canonical: V.canonical,
                pageType: b.g.Unknown,
              }),
              r
            );
          }
          (0, a._)(t, e);
          var n = t.prototype;
          return (
            (n.updateAtom = function (e) {
              this.jotaiStore.set(k.b, e);
            }),
            (n.setSEOState = function (e, t) {
              return (0, s._)((0, u._)({}, e), {
                metaParams: t.metaParams,
                jsonldList: t.jsonldList,
              });
            }),
            (n.setAbTest = function (e, t) {
              return (0, s._)((0, u._)({}, e), { abtest: t });
            }),
            (n.setLoading = function (e, t) {
              return (0, s._)((0, u._)({}, e), { loading: t });
            }),
            (n.setCanonical = function (e, t) {
              return (0, s._)((0, u._)({}, e), { canonical: t });
            }),
            (n.setRouterLoading = function (e, t) {
              return (0, s._)((0, u._)({}, e), { routerLoading: t });
            }),
            (n.fetchAbTest = function (e) {
              var t = this;
              return e.pipe(
                (0, f.n)(function (e) {
                  return I(e) === I(t.state.canonical)
                    ? l.w
                    : t.service.fetchABTest(e).pipe(
                        (0, f.n)(function (n) {
                          return (0, p.of)(
                            t.getActions().setAbTest(n),
                            t.getActions().setCanonical(e),
                            t.terminate(),
                          );
                        }),
                        (0, v.Z)(t.getActions().setLoading(!0)),
                        (0, _.q)(t.getActions().setLoading(!1)),
                      );
                }),
              );
            }),
            t
          );
        })(h.E);
      (E(
        [
          (0, m.HI)(),
          C("design:type", Function),
          C("design:paramtypes", [
            void 0 === w.k || void 0 === w.k.GatewaySEOProps
              ? Object
              : w.k.GatewaySEOProps,
            void 0 === w.k || void 0 === w.k.GatewaySEOProps
              ? Object
              : w.k.GatewaySEOProps,
          ]),
          C(
            "design:returntype",
            void 0 === w.k || void 0 === w.k.GatewaySEOProps
              ? Object
              : w.k.GatewaySEOProps,
          ),
        ],
        O.prototype,
        "setSEOState",
        null,
      ),
        E(
          [
            (0, m.HI)(),
            C("design:type", Function),
            C("design:paramtypes", [
              void 0 === w.k || void 0 === w.k.GatewaySEOProps
                ? Object
                : w.k.GatewaySEOProps,
              Object,
            ]),
            C(
              "design:returntype",
              void 0 === w.k || void 0 === w.k.GatewaySEOProps
                ? Object
                : w.k.GatewaySEOProps,
            ),
          ],
          O.prototype,
          "setAbTest",
          null,
        ),
        E(
          [
            (0, m.HI)(),
            C("design:type", Function),
            C("design:paramtypes", [
              "undefined" == typeof State ? Object : State,
              Boolean,
            ]),
            C(
              "design:returntype",
              "undefined" == typeof State ? Object : State,
            ),
          ],
          O.prototype,
          "setLoading",
          null,
        ),
        E(
          [
            (0, m.HI)(),
            C("design:type", Function),
            C("design:paramtypes", [
              "undefined" == typeof State ? Object : State,
              String,
            ]),
            C(
              "design:returntype",
              "undefined" == typeof State ? Object : State,
            ),
          ],
          O.prototype,
          "setCanonical",
          null,
        ),
        E(
          [
            (0, m.HI)(),
            C("design:type", Function),
            C("design:paramtypes", [
              "undefined" == typeof State ? Object : State,
              Boolean,
            ]),
            C(
              "design:returntype",
              "undefined" == typeof State ? Object : State,
            ),
          ],
          O.prototype,
          "setRouterLoading",
          null,
        ),
        E(
          [
            (0, m.Mj)({
              payloadGetter: function (e) {
                return "".concat(S.C).concat(e.path);
              },
            }),
            C("design:type", Function),
            C("design:paramtypes", [void 0 === d.c ? Object : d.c]),
            C("design:returntype", void 0),
          ],
          O.prototype,
          "fetchAbTest",
          null,
        ),
        (O = E(
          [
            (0, A.nV)("SEOState"),
            ((r = (0, y.y)(g.J7)),
            function (e, t) {
              r(e, t, 1);
            }),
            C("design:type", Function),
            C("design:paramtypes", [
              void 0 === P.F ? Object : P.F,
              "undefined" == typeof JotaiStoreType ? Object : JotaiStoreType,
            ]),
          ],
          O,
        )));
    },
    51501: function (e, t, n) {
      n.d(t, {
        e: function () {
          return P;
        },
      });
      var r,
        i = n(48748),
        o = n(95170),
        a = n(35383),
        u = n(7120),
        s = n(5377),
        c = n(45996),
        l = n(6586),
        p = n(79262),
        d = n(68710),
        f = n(23999),
        v = n(80339),
        _ = n(19293),
        g = n(82379),
        h = n(95092),
        m = n(2999),
        A = n(73515),
        y = n(4076),
        b = n(16020),
        w = n(53535),
        T = n(5146),
        S = n(76614);
      function L(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, p._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function k(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, p._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var P = (function (e) {
        function t(e, n) {
          var r;
          return (
            (0, o._)(this, t),
            ((r = (0, i._)(this, t)).t = e),
            (r.stateModule = n),
            (r.defaultState = {}),
            r
          );
        }
        (0, u._)(t, e);
        var n = t.prototype;
        return (
          (n.setSharingMetaStateEffect = function (e) {
            var t = this;
            return e.pipe(
              (0, d.Z)(function (e) {
                return (0, f.of)(t.setSharingMetaState(e)).pipe(
                  (0, v.q)(t.terminate("setSharingMetaStateEffect")),
                );
              }),
            );
          }),
          (n.setSharingMetaState = function (e) {
            return this.stateModule.getActions().setSharingMetaState(e);
          }),
          (n.setVideoSharingMetaEffect = function (e) {
            var t = this;
            return e.pipe(
              (0, d.Z)(function (e) {
                var n = e.seoProps,
                  r = e.response,
                  i = e.appType,
                  o = e.query;
                return t
                  .setVideoSharingMeta(n, r, i, o)
                  .pipe((0, v.q)(t.terminate("setVideoSharingMetaEffect")));
              }),
            );
          }),
          (n.setVideoSharingMeta = function (e, t, n, r) {
            var i,
              o,
              u,
              l,
              p,
              d,
              v,
              _,
              g,
              h,
              m,
              y,
              b,
              w,
              T,
              L,
              k,
              P,
              E,
              C,
              I,
              V,
              O = null == (i = t.itemInfo) ? void 0 : i.itemStruct,
              M = null == O ? void 0 : O.video,
              R = null == O ? void 0 : O.imagePost,
              x = (0, S.QJ)(n).protocal,
              W = !!(null == O ? void 0 : O.story),
              F = ""
                .concat(x)
                .concat(W ? "story/detail" : "aweme/detail", "/")
                .concat(
                  null == (o = t.itemInfo) ? void 0 : o.itemStruct.id,
                  "?",
                )
                .concat(r),
              q = (0, S.r1)({
                schema: F,
                metaParams: e.metaParams,
                pageType: A.g.Video,
                shareMeta: null == t ? void 0 : t.shareMeta,
                response: t,
                appType: n,
              }),
              D =
                (null == M || null == (u = M.shareCover) ? void 0 : u[0]) ||
                (null !=
                (w = R
                  ? null == (d = R.shareCover) ||
                    null == (p = d.imageURL) ||
                    null == (l = p.urlList)
                    ? void 0
                    : l[0]
                  : null == M || null == (v = M.shareCover)
                    ? void 0
                    : v[1])
                  ? w
                  : ""),
              U =
                null !=
                (L =
                  null !=
                  (T = String(
                    null == R || null == (_ = R.shareCover)
                      ? void 0
                      : _.imageWidth,
                  ))
                    ? T
                    : null == M
                      ? void 0
                      : M.width)
                  ? L
                  : "",
              N =
                null !=
                (P =
                  null !=
                  (k = String(
                    null == R || null == (g = R.shareCover)
                      ? void 0
                      : g.imageHeight,
                  ))
                    ? k
                    : null == M
                      ? void 0
                      : M.height)
                  ? P
                  : "",
              B = (0, c._)(
                (0, s._)({}, q),
                ((E = {}),
                (0, a._)(E, "og:image", D),
                (0, a._)(E, "twitter:image", D),
                (0, a._)(E, "og:image:width", U),
                (0, a._)(E, "og:image:height", N),
                E),
              ),
              j =
                null == (b = e.jsonldList) ||
                null ==
                  (y = b.find(function (e) {
                    return "VideoObject" === e[0];
                  })) ||
                null == (m = y[1]) ||
                null == (h = m.thumbnailUrl)
                  ? void 0
                  : h[0];
            return (
              j &&
                Object.assign(
                  B,
                  ((V = {}),
                  (0, a._)(V, "og:image", j),
                  (0, a._)(
                    V,
                    "og:image:width",
                    String(null != (C = null == M ? void 0 : M.width) ? C : ""),
                  ),
                  (0, a._)(
                    V,
                    "og:image:height",
                    String(
                      null != (I = null == M ? void 0 : M.height) ? I : "",
                    ),
                  ),
                  V),
                ),
              (0, f.of)(this.stateModule.getActions().setSharingMetaState(B))
            );
          }),
          (n.setUserSharingMetaEffect = function (e) {
            var t = this;
            return e.pipe(
              (0, d.Z)(function (e) {
                var n = e.seoProps,
                  r = e.response,
                  i = e.appType;
                return t
                  .setUserSharingMeta(n, r, i)
                  .pipe((0, v.q)(t.terminate("setUserSharingMetaEffect")));
              }),
            );
          }),
          (n.setUserSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p = (0, S.QJ)(n).protocal,
              d = (0, S.r1)({
                response: t,
                pageType: A.g.User,
                schema: "".concat(p, "user/profile/"),
                metaParams: e.metaParams,
                appType: n,
              }),
              v = null == (r = t.userInfo) ? void 0 : r.user,
              _ =
                null !=
                (u =
                  null != (o = null == v ? void 0 : v.avatarMedium)
                    ? o
                    : null == v
                      ? void 0
                      : v.avatarThumb)
                  ? u
                  : S.Zw,
              g = (0, c._)(
                (0, s._)({}, d),
                ((l = {}),
                (0, a._)(l, "og:image", _),
                (0, a._)(l, "twitter:image", _),
                (0, a._)(l, "og:image:width", "360"),
                (0, a._)(l, "og:image:height", "360"),
                (0, a._)(
                  l,
                  "og:image:alt",
                  null == (i = e.metaParams) ? void 0 : i.title,
                ),
                l),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(g),
            );
          }),
          (n.setMusicSharingMetaEffect = function (e) {
            var t = this;
            return e.pipe(
              (0, d.Z)(function (e) {
                var n = e.seoProps,
                  r = e.response,
                  i = e.appType;
                return t
                  .setMusicSharingMeta(n, r, i)
                  .pipe((0, v.q)(t.terminate("setMusicSharingMetaEffect")));
              }),
            );
          }),
          (n.setMusicSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p,
              d,
              v = null == (r = t.musicInfo) ? void 0 : r.music,
              _ = (0, S.QJ)(n).protocal,
              g = (0, S.r1)({
                response: t,
                pageType: A.g.Music,
                schema: ""
                  .concat(_, "user/profile/")
                  .concat(null == v ? void 0 : v.id),
                metaParams: e.metaParams,
                appType: n,
              }),
              h =
                null !=
                (u =
                  null != (o = null == v ? void 0 : v.coverMedium)
                    ? o
                    : null == v
                      ? void 0
                      : v.coverThumb)
                  ? u
                  : "https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/music-default.png",
              m = null != (l = null == v ? void 0 : v.title) ? l : "",
              y = null != (p = null == v ? void 0 : v.authorName) ? p : "",
              b = (0, c._)(
                (0, s._)({}, g),
                ((d = {}),
                (0, a._)(d, "og:image", h),
                (0, a._)(d, "twitter:image", h),
                (0, a._)(d, "og:image:width", "720"),
                (0, a._)(d, "og:image:height", "720"),
                (0, a._)(
                  d,
                  "og:image:alt",
                  null == (i = e.metaParams) ? void 0 : i.title,
                ),
                (0, a._)(d, "music:duration", "0"),
                (0, a._)(d, "music:album:track", m),
                (0, a._)(d, "music:musician", y),
                d),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(b),
            );
          }),
          (n.setMusicPlaylistSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p = t.mc_info,
              d = (0, S.QJ)(n).protocal,
              v = (0, S.r1)({
                schema: ""
                  .concat(d, "assmusic/category/")
                  .concat(null == p ? void 0 : p.id_str, "?name=")
                  .concat(
                    encodeURIComponent(
                      null != (u = null == p ? void 0 : p.name) ? u : "",
                    ),
                    "&previous_page=reflow_playlist&enter_method=reflow_return",
                  ),
                metaParams: (0, c._)((0, s._)({}, e.metaParams), {
                  title:
                    null == p || null == (r = p.share_info)
                      ? void 0
                      : r.share_title,
                  description:
                    null == p || null == (i = p.share_info)
                      ? void 0
                      : i.share_desc,
                }),
                appType: n,
              }),
              _ = (null == p ? void 0 : p.share_cover)
                ? (0, w.BO)(null == p ? void 0 : p.share_cover)
                : "https://p19-aop-sg.tiktokcdn.com/tos-alisg-i-yzb763657w-sg/d2f2b037e19646ad5f2bbd779a550302.png~tplv-yzb763657w-resize:800:800.jpeg",
              g = (0, c._)(
                (0, s._)({}, v),
                ((l = {}),
                (0, a._)(l, "og:image", _),
                (0, a._)(l, "twitter:image", _),
                (0, a._)(l, "og:image:width", "720"),
                (0, a._)(l, "og:image:height", "720"),
                (0, a._)(
                  l,
                  "og:image:alt",
                  null == (o = e.metaParams) ? void 0 : o.title,
                ),
                l),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(g),
            );
          }),
          (n.setStickerSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p = (0, S.QJ)(n).protocal,
              d = null == (r = t.stickerInfo) ? void 0 : r.sticker,
              v = (0, S.r1)({
                pageType: A.g.Challenge,
                response: t,
                schema: ""
                  .concat(p, "sticker/detail/")
                  .concat(null == d ? void 0 : d.id),
                metaParams: e.metaParams,
                appType: n,
              }),
              _ =
                null == d ||
                null == (o = d.coverUrls) ||
                null == (i = o.urlList)
                  ? void 0
                  : i[0],
              g = (0, c._)(
                (0, s._)({}, v),
                ((l = {}),
                (0, a._)(l, "og:image", _),
                (0, a._)(l, "twitter:image", _),
                (0, a._)(l, "og:image:width", "720"),
                (0, a._)(l, "og:image:height", "720"),
                (0, a._)(
                  l,
                  "og:image:alt",
                  null == (u = e.metaParams) ? void 0 : u.title,
                ),
                l),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(g),
            );
          }),
          (n.setChallengeSharingMetaEffect = function (e) {
            var t = this;
            return e.pipe(
              (0, d.Z)(function (e) {
                var n = e.seoProps,
                  r = e.response,
                  i = e.appType;
                return t
                  .setChallengeSharingMeta(n, r, i)
                  .pipe((0, v.q)(t.terminate("setChallengeSharingMetaEffect")));
              }),
            );
          }),
          (n.setChallengeSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p = (0, S.QJ)(n).protocal,
              d = null == (r = t.challengeInfo) ? void 0 : r.challenge,
              v = (0, S.r1)({
                pageType: A.g.Challenge,
                response: t,
                schema: ""
                  .concat(p, "challenge/detail/")
                  .concat(null == d ? void 0 : d.id),
                metaParams: e.metaParams,
                appType: n,
              }),
              _ =
                null !=
                (u =
                  null != (o = null == d ? void 0 : d.profileMedium)
                    ? o
                    : null == d
                      ? void 0
                      : d.profileThumb)
                  ? u
                  : "https://lf16-tiktok-web.ttwstatic.com/obj/ttfe-malisg/tiktok_web/amp/m-hashtag-default.png",
              g = (0, c._)(
                (0, s._)({}, v),
                ((l = {}),
                (0, a._)(l, "og:image", _),
                (0, a._)(l, "twitter:image", _),
                (0, a._)(l, "og:image:width", "720"),
                (0, a._)(l, "og:image:height", "720"),
                (0, a._)(
                  l,
                  "og:image:alt",
                  null == (i = e.metaParams) ? void 0 : i.title,
                ),
                l),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(g),
            );
          }),
          (n.setCollectionSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p,
              d,
              v,
              _ = (0, S.QJ)(t).protocal,
              g = e.shareMeta,
              h = (0, S.r1)({
                pageType: A.g.Collection,
                response: e,
                schema: ""
                  .concat(_, "collection/detail?collection_id=")
                  .concat(n, "&page_name=reflow_collection"),
                metaParams: {
                  title:
                    null != (l = null == g ? void 0 : g.title)
                      ? l
                      : this.t(
                          "TikTok | Make Your Day",
                          {},
                          "TikTok | Make Your Day",
                        ),
                  description:
                    null != (p = null == g ? void 0 : g.desc)
                      ? p
                      : this.t(
                          "SEO_homepage_desc",
                          {},
                          "TikTok - trends start here. On a device or on the web, viewers can watch and discover millions of personalized short videos. Download the app to get started.",
                        ),
                },
                appType: t,
              }),
              m =
                null !=
                (d =
                  null == e ||
                  null == (o = e.collectionInfo) ||
                  null == (i = o.cover) ||
                  null == (r = i.urlList)
                    ? void 0
                    : r[0])
                  ? d
                  : "https://sf-static.tiktokcdn.com/obj/tiktok-web-common-sg/mtact/static/images/tiktok-logo/poster-square.png",
              y = (0, c._)(
                (0, s._)({}, h),
                ((v = {}),
                (0, a._)(v, "og:image", m),
                (0, a._)(v, "twitter:image", m),
                (0, a._)(v, "og:image:width", "720"),
                (0, a._)(v, "og:image:height", "720"),
                (0, a._)(
                  v,
                  "og:image:alt",
                  null == (u = e.shareMeta) ? void 0 : u.title,
                ),
                v),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(y),
            );
          }),
          (n.setSearchSharingMeta = function (e, t, n, r) {
            var i,
              o,
              u,
              l,
              p,
              d = (0, S.QJ)(r).protocal,
              v = (0, S.r1)({
                schema: ""
                  .concat(d, "search?keyword=")
                  .concat(
                    null !=
                      (u =
                        null == t || null == (i = t.contentInfo)
                          ? void 0
                          : i.query)
                      ? u
                      : n,
                  ),
                metaParams: e.metaParams,
                appType: r,
              }),
              _ =
                null !=
                (l =
                  null == t || null == (o = t.contentInfo)
                    ? void 0
                    : o.thirdPartyPreviewImg)
                  ? l
                  : "https://sf-static.tiktokcdn.com/obj/search-static-maliva/maliva/ugvonpsj1631257573250",
              g = (0, c._)(
                (0, s._)({}, v),
                ((p = {}),
                (0, a._)(p, "og:image", _),
                (0, a._)(p, "twitter:image", _),
                (0, a._)(p, "og:image:width", "1200"),
                (0, a._)(p, "og:image:height", "678"),
                p),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(g),
            );
          }),
          (n.setLiveRoomSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              l,
              p,
              d,
              v,
              _ = (0, S.QJ)(n).protocal,
              g = (0, S.r1)({
                schema: ""
                  .concat(_, "live?room_id=")
                  .concat(
                    null == (i = t.userInfo) || null == (r = i.user)
                      ? void 0
                      : r.roomId,
                  ),
                metaParams: e.metaParams,
                pageType: A.g.LiveRoom,
                appType: n,
              }),
              h = null == (o = t.userInfo) ? void 0 : o.user,
              m =
                null !=
                (p =
                  null != (l = null == h ? void 0 : h.avatarMedium)
                    ? l
                    : null == h
                      ? void 0
                      : h.avatarThumb)
                  ? p
                  : S.Zw,
              y =
                null != (d = null == h ? void 0 : h.nickname)
                  ? d
                  : null == h
                    ? void 0
                    : h.uniqueId,
              b = null == h ? void 0 : h.uniqueId,
              w = (0, c._)(
                (0, s._)({}, g),
                ((v = {}),
                (0, a._)(v, "og:image", m),
                (0, a._)(v, "og:image:secure_url", m),
                (0, a._)(v, "og:image:width", "360"),
                (0, a._)(v, "og:image:height", "360"),
                (0, a._)(
                  v,
                  "og:image:alt",
                  null == (u = e.metaParams) ? void 0 : u.title,
                ),
                (0, a._)(v, "twitter:creator", y),
                (0, a._)(v, "twitter:creator:id", b),
                v),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(w),
            );
          }),
          (n.setQuestionSharingMeta = function (e, t, n, r) {
            var i,
              o,
              u,
              l,
              p,
              d,
              f,
              v,
              _,
              g,
              h,
              m = (0, S.QJ)(n).protocal,
              y = (0, S.r1)({
                schema: ""
                  .concat(m, "qna/detail/")
                  .concat(null == (i = e.questionInfo) ? void 0 : i.id),
                metaParams: {
                  title: null == (o = e.shareMeta) ? void 0 : o.title,
                  description: null == (u = e.shareMeta) ? void 0 : u.desc,
                },
                pageType: A.g.Question,
                response: e,
                appType: n,
              }),
              b =
                (null == r ? void 0 : r.scene) === "qna"
                  ? ((f = {}),
                    (0, a._)(
                      f,
                      "og:title",
                      this.t(
                        "qaoop_title",
                        {},
                        "Hi friends, I\u2019m inviting you to answer a question on #TikTok!",
                      ),
                    ),
                    (0, a._)(
                      f,
                      "og:description",
                      this.t("qaoop_desc", {}, "Share your wisdom!"),
                    ),
                    f)
                  : void 0,
              w =
                null !=
                (_ =
                  null !=
                  (v =
                    null == t || null == (l = t.video.shareCover)
                      ? void 0
                      : l[1])
                    ? v
                    : null == t || null == (p = t.video.shareCover)
                      ? void 0
                      : p[0])
                  ? _
                  : S.Zw,
              T = (0, s._)(
                (0, c._)(
                  (0, s._)({}, y),
                  ((h = {}),
                  (0, a._)(h, "og:image", w),
                  (0, a._)(h, "twitter:image", w),
                  (0, a._)(
                    h,
                    "og:image:alt",
                    null != (g = null == (d = e.shareMeta) ? void 0 : d.title)
                      ? g
                      : "the cover of first video",
                  ),
                  h),
                ),
                b,
              );
            return this.stateModule.getActions().setSharingMetaState(T);
          }),
          (n.setVideoPlaylistSharingMeta = function (e, t, n) {
            var r,
              i,
              o,
              u,
              p,
              d,
              f,
              v,
              _,
              g,
              h = (0, S.QJ)(n).protocal,
              m = "@".concat(
                null == (i = e.mixInfo) || null == (r = i.creator)
                  ? void 0
                  : r.nickname,
              ),
              y =
                null != (f = null == (o = e.mixInfo) ? void 0 : o.name)
                  ? f
                  : "Untitled playlist",
              b = (0, S.r1)({
                schema: ""
                  .concat(h, "mix/detail?id=")
                  .concat(
                    null != (v = null == (u = e.mixInfo) ? void 0 : u.id)
                      ? v
                      : "nan",
                  ),
                metaParams: {
                  title: this.t(
                    "playlist_share_title",
                    { Playlist_name: y, username: m },
                    "Playlist ".concat(y, " created by ").concat(m),
                  ),
                  description: this.t(
                    "playlist_share_desc",
                    {},
                    "Enjoy a curated video list and find more videos on TikTok!",
                  ),
                },
                pageType: A.g.VideoPlayerList,
                response: e,
                appType: n,
              }),
              w = (0, l._)(null != t ? t : [], 1)[0],
              T =
                null !=
                (_ =
                  null == w || null == (p = w.video.shareCover) ? void 0 : p[1])
                  ? _
                  : null == w || null == (d = w.video.shareCover)
                    ? void 0
                    : d[0],
              L = (0, c._)(
                (0, s._)({}, b),
                ((g = {}),
                (0, a._)(g, "og:image", T),
                (0, a._)(g, "twitter:image", T),
                (0, a._)(g, "og:image:alt", "first video of ".concat(y)),
                g),
              );
            return this.stateModule.getActions().setSharingMetaState(L);
          }),
          (n.setFollowingSharingMeta = function (e, t) {
            var n,
              r = (0, S.r1)({ metaParams: e.metaParams, appType: t }),
              i = (0, c._)(
                (0, s._)({}, r),
                ((n = {}),
                (0, a._)(n, "og:title", this.t("serp_following_title")),
                (0, a._)(n, "og:description", this.t("serp_following_desc")),
                (0, a._)(n, "og:image", S.Zw),
                (0, a._)(n, "twitter:image", S.Zw),
                (0, a._)(n, "twitter:title", this.t("SEO_following_title")),
                (0, a._)(
                  n,
                  "twitter:description",
                  this.t("SEO_following_desc"),
                ),
                n),
              );
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(i),
            );
          }),
          (n.setPoiSharingMeta = function (e, t, n) {
            var r,
              i = (0, S.QJ)(n).protocal,
              o = null == (r = t.poiInfo) ? void 0 : r.poi,
              a = (0, S.r1)({
                pageType: A.g.Poi,
                response: t,
                schema: ""
                  .concat(i, "poi/detail?poi_id=")
                  .concat(null == o ? void 0 : o.id),
                metaParams: e.metaParams,
                appType: n,
              });
            return (0, f.of)(
              this.stateModule.getActions().setSharingMetaState(a),
            );
          }),
          t
        );
      })(y.E);
      (L(
        [
          (0, g.Mj)(),
          k("design:type", Function),
          k("design:paramtypes", [void 0 === _.c ? Object : _.c]),
          k("design:returntype", void 0),
        ],
        P.prototype,
        "setSharingMetaStateEffect",
        null,
      ),
        L(
          [
            (0, g.Mj)(),
            k("design:type", Function),
            k("design:paramtypes", [void 0 === _.c ? Object : _.c]),
            k("design:returntype", void 0),
          ],
          P.prototype,
          "setVideoSharingMetaEffect",
          null,
        ),
        L(
          [
            (0, g.Mj)(),
            k("design:type", Function),
            k("design:paramtypes", [void 0 === _.c ? Object : _.c]),
            k("design:returntype", void 0),
          ],
          P.prototype,
          "setUserSharingMetaEffect",
          null,
        ),
        L(
          [
            (0, g.Mj)(),
            k("design:type", Function),
            k("design:paramtypes", [void 0 === _.c ? Object : _.c]),
            k("design:returntype", void 0),
          ],
          P.prototype,
          "setMusicSharingMetaEffect",
          null,
        ),
        L(
          [
            (0, g.Mj)(),
            k("design:type", Function),
            k("design:paramtypes", [void 0 === _.c ? Object : _.c]),
            k("design:returntype", void 0),
          ],
          P.prototype,
          "setChallengeSharingMetaEffect",
          null,
        ),
        (P = L(
          [
            (0, h.nV)("SharingMeta"),
            ((r = (0, m.y)(b.hp)),
            function (e, t) {
              r(e, t, 0);
            }),
            k("design:type", Function),
            k("design:paramtypes", [
              "undefined" == typeof I18NTranslate ? Object : I18NTranslate,
              void 0 === T.J ? Object : T.J,
            ]),
          ],
          P,
        )));
    },
    5146: function (e, t, n) {
      n.d(t, {
        J: function () {
          return h;
        },
      });
      var r = n(48748),
        i = n(95170),
        o = n(35383),
        a = n(7120),
        u = n(54333),
        s = n(79262),
        c = n(96579),
        l = n(78990),
        p = n(82379),
        d = n(95092),
        f = n(41040),
        v = n(76614);
      function _(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, s._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (i = e[u]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
      }
      function g(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, s._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var h = (function (e) {
        function t() {
          for (var e, n = arguments.length, o = Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (0, i._)(this, t),
            ((e = (0, r._)(this, t, (0, u._)(o))).defaultState = { value: {} }),
            e
          );
        }
        return (
          (0, a._)(t, e),
          (t.prototype.setSharingMetaState = function (e, t) {
            var n, r;
            e.value = (0, c.A)(
              t,
              ((r = {}),
              (0, o._)(r, "og:image", v.Zw),
              (0, o._)(
                r,
                "twitter:image",
                null != (n = t["og:image"]) ? n : v.Zw,
              ),
              r),
            );
          }),
          t
        );
      })(l.E);
      (_(
        [
          (0, p.h5)(),
          g("design:type", Function),
          g("design:paramtypes", [
            "undefined" == typeof SharingMetaModuleState
              ? Object
              : SharingMetaModuleState,
            void 0 === f.r || void 0 === f.r.SharingMetaStateStruct
              ? Object
              : f.r.SharingMetaStateStruct,
          ]),
          g("design:returntype", void 0),
        ],
        h.prototype,
        "setSharingMetaState",
        null,
      ),
        (h = _([(0, d.nV)("SharingMetaState")], h)));
    },
    76614: function (e, t, n) {
      n.d(t, {
        QJ: function () {
          return s;
        },
        Zw: function () {
          return l;
        },
        r1: function () {
          return c;
        },
      });
      var r = n(35383),
        i = n(5377),
        o = n(2475),
        a = n(41040),
        u = n(73515);
      function s(e) {
        var t = e === o.uC.MUSICALLY;
        return { isM: t, protocal: t ? "snssdk1233://" : "snssdk1180://" };
      }
      function c(e) {
        var t,
          n,
          o,
          c,
          l,
          p,
          d,
          f = e.schema,
          v = void 0 === f ? "" : f,
          _ = e.pageType,
          g = e.shareMeta,
          h = e.metaParams,
          m = s(e.appType).isM,
          A = a.r.APP_INFO,
          y = m ? A.M_NAME : A.T_NAME,
          b = m ? A.M_STORE : A.T_STORE,
          w = m ? A.M_PACKAGE : A.T_PACKAGE,
          T =
            _ === u.g.Video
              ? null != (t = null == g ? void 0 : g.title)
                ? t
                : ""
              : null != (n = null == h ? void 0 : h.title)
                ? n
                : "",
          S =
            _ === u.g.Video
              ? null != (o = null == g ? void 0 : g.desc)
                ? o
                : ""
              : null != (c = null == h ? void 0 : h.description)
                ? c
                : "",
          L =
            ((l = {}),
            (0, r._)(l, "al:ios:url", v),
            (0, r._)(l, "al:android:url", v),
            (0, r._)(l, "al:ios:app_store_id", b),
            (0, r._)(l, "al:ios:app_name", y),
            (0, r._)(l, "al:android:app_name", y),
            (0, r._)(l, "al:android:package", w),
            l),
          k =
            ((p = {}),
            (0, r._)(p, "og:site_name", "TikTok"),
            (0, r._)(p, "og:type", "website"),
            (0, r._)(p, "og:title", T),
            (0, r._)(p, "og:description", S),
            (0, r._)(p, "fb:app_id", m ? A.M_FACEBOOK_ID : A.T_FACEBOOK_ID),
            p),
          P =
            ((d = {}),
            (0, r._)(d, "twitter:app:id:iphone", b),
            (0, r._)(d, "twitter:app:id:googleplay", w),
            (0, r._)(d, "twitter:card", "summary"),
            (0, r._)(d, "twitter:site", "TikTok"),
            (0, r._)(d, "twitter:title", T),
            (0, r._)(d, "twitter:description", S),
            d);
        return (0, i._)({}, L, k, P);
      }
      var l =
        "https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png";
    },
    98402: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(69513),
        i = n(43274),
        o = {
          provide: (0, n(37633).U)(
            "FirstVideoCover@tiktok/fe-shared",
            function () {
              return new i.n("FirstVideoCover");
            },
          ),
          useValue: r.A,
        };
    },
    73120: function (e, t, n) {
      n.d(t, {
        j: function () {
          return m;
        },
      });
      var r = n(95170),
        i = n(5377),
        o = n(45996),
        a = n(79262),
        u = n(25572),
        s = n(20259),
        c = n(97623),
        l = n(75127),
        p = n(54149),
        d = n(95878),
        f = n(72665),
        v = n(10987),
        _ = n(72701),
        g = n(98402);
      function h(e, t) {
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, a._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      var m = (function () {
        function e(t, n) {
          ((0, r._)(this, e), (this.fetch = t), (this.slardar = n));
        }
        var t = e.prototype;
        return (
          (t.getCollectionList = function (e) {
            return this.fetch.get("/api/collection/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getRecommendList = function (e) {
            var t = this,
              n = (0, d.t)("recommendItemList");
            if (n) return (0, u.H)(n);
            var r = (0, f.DV)("recommendItemList");
            return r
              ? (this.slardar.emitEvent(
                  "consume_prefetch_data",
                  { now: performance.now() },
                  { status: "unknown", from: "recommendItemList" },
                ),
                (0, u.H)(r).pipe(
                  (0, s.W)(function () {
                    return (
                      t.slardar.emitEvent(
                        "consume_prefetch_data",
                        { now: performance.now() },
                        { status: "fail", from: "recommendItemList" },
                      ),
                      t.fetch.get("/api/recommend/item_list/", {
                        query: (0, o._)((0, i._)({}, e), {
                          clientABVersions: (0, l.v)().join(","),
                        }),
                        baseUrlType: p.Z4.FixedWww,
                      })
                    );
                  }),
                ))
              : this.fetch.get("/api/recommend/item_list/", {
                  query: (0, o._)((0, i._)({}, e), {
                    clientABVersions: (0, l.v)().join(","),
                  }),
                  baseUrlType: p.Z4.FixedWww,
                });
          }),
          (t.getTopicList = function (e) {
            return this.fetch.get("/api/topic/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getFollowingList = function (e) {
            return this.fetch.get("/api/following/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getFriendsList = function (e) {
            return this.fetch.get("/api/friends/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getQuestionList = function (e) {
            return this.fetch.get("/api/question/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getPlaylistVideoList = function (e) {
            return this.fetch.get("/api/mix/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getChallengeList = function (e) {
            return this.fetch.get("/api/challenge/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getUserPostList = function (e) {
            var t = this,
              n = (0, d.t)("userPostList");
            if (n) return (0, u.H)(n);
            var r = (0, f.DV)("userPostList");
            return r
              ? (this.slardar.emitEvent(
                  "consume_prefetch_data",
                  { now: performance.now() },
                  { status: "unknown", from: "userPostList" },
                ),
                (0, u.H)(r).pipe(
                  (0, s.W)(function (n) {
                    return (
                      console.log("-===error", n),
                      t.slardar.emitEvent(
                        "consume_prefetch_data",
                        { now: performance.now() },
                        { status: "fail", from: "userPostList" },
                      ),
                      t.fetch.get("/api/post/item_list/", {
                        query: (0, o._)((0, i._)({}, e), {
                          clientABVersions: (0, l.v)().join(","),
                        }),
                        baseUrlType: p.Z4.FixedWww,
                      })
                    );
                  }),
                ))
              : this.fetch.get("/api/post/item_list/", {
                  query: (0, o._)((0, i._)({}, e), {
                    clientABVersions: (0, l.v)().join(","),
                  }),
                  baseUrlType: p.Z4.FixedWww,
                });
          }),
          (t.getUserPostListByType = function (e) {
            return this.fetch.get("/api/post/item_list/v1/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getUserPostListBiDirection = function (e) {
            return this.fetch.get("/api/creator/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getUserLikedList = function (e) {
            return this.fetch.get("/api/favorite/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getUserFavoriteList = function (e) {
            return this.fetch.get("/api/user/collect/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getPoiList = function (e) {
            return this.fetch.get("/api/poi/item_list/", {
              query: (0, o._)((0, i._)({}, e), {
                clientABVersions: (0, l.v)().join(","),
              }),
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.getExploreList = function (e) {
            var t = this,
              n = (0, f.DV)("exploreItemList");
            return n
              ? (this.slardar.emitEvent(
                  "consume_prefetch_data",
                  { now: performance.now() },
                  { status: "unknown", from: "exploreItemList" },
                ),
                (0, u.H)(n).pipe(
                  (0, s.W)(function () {
                    return (
                      t.slardar.emitEvent(
                        "consume_prefetch_data",
                        { now: performance.now() },
                        { status: "fail", from: "exploreItemList" },
                      ),
                      t.fetch.get("/api/explore/item_list/", {
                        query: e,
                        baseUrlType: p.Z4.FixedWww,
                      })
                    );
                  }),
                ))
              : this.fetch.get("/api/explore/item_list/", {
                  query: e,
                  baseUrlType: p.Z4.FixedWww,
                });
          }),
          (t.getFeedCacheList = function (e) {
            return this.fetch.get("/api/preload/item_list/", {
              query: e,
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          (t.checkItemValidation = function (e) {
            return this.fetch.get("/api/item/availability/", {
              query: e,
              baseUrlType: p.Z4.FixedWww,
            });
          }),
          e
        );
      })();
      m = (function (e, t, n, r) {
        var i,
          o = arguments.length,
          u =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if (
          ("undefined" == typeof Reflect ? "undefined" : (0, a._)(Reflect)) ===
            "object" &&
          "function" == typeof Reflect.decorate
        )
          u = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (u = (o < 3 ? i(u) : o > 3 ? i(t, n, u) : i(t, n)) || u);
        return (o > 3 && u && Object.defineProperty(t, n, u), u);
      })(
        [
          (0, c._q)({ providers: [g.t] }),
          h("design:type", Function),
          h("design:paramtypes", [
            void 0 === v.p ? Object : v.p,
            void 0 === _.V$ ? Object : _.V$,
          ]),
        ],
        m,
      );
    },
    27648: function (e, t, n) {
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(74426),
        i = function () {
          return /google|yahoo|yandex|bing|naver|duckduckgo/gi.test((0, r.q)());
        };
    },
    10855: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i;
        },
      });
      var r = n(11356),
        i = n.n(r)()("kep:rerender").extend("provider");
    },
  },
]);
