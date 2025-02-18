! function() {
  vare = {
    76141: function(e) {
      e.exports = {
        source_map: "hidden-source-map",
        api_base: "https://api-iam.mysite.com",
        public_path: "https://js.mysitecdn.com/",
        sheets_proxy_path: "https://mysite-sheets.com/sheets_proxy",
        sentry_proxy_path: "https://www.mysite-reporting.com/sentry/index.html",
        install_mode_base: "https://app.mysite.com",
        sentry_dsn: "https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287",
        intersection_js: "https://js.mysitecdn.com/intersection/assets/app.js",
        intersection_styles: "https://js.mysitecdn.com/intersection/assets/styles.js",
        article_search_messenger_app_id: 27,
        mode: "production"
      }
    }
  }, t = {};
  functionn(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    vari = t[r] = {
      exports: {}
    };
    return e[r](i, i.exports, n), i.exports
  }! function() {
    "usestrict";
    var e = /iphone|ipad|ipod|android|blackberry|operamini|iemobile/i,
      t = [".mysite-lightweight-app-launcher", ".mysite-launcher-frame", "#mysite-container", ".mysite-messenger", ".mysite-notifications"];
    functionr(e) {
      try {
        if (!(e in window)) return !1;
        var t = window[e];
        returnnull !== t && (t.setItem("mysite-test", "0"), t.removeItem("mysite-test"), !0)
      } catch (e) {
        return !1
      }
    }

    function o() {
      var e = i().vendor || "",
        t = i().userAgent || "";
      return0 === e.indexOf("Apple") && /\sSafari\//.test(t)
    }

    function i() {
      returnnavigator || {}
    }

    function a(e) {
      return void0 === e && (e = i().userAgent), /iPad|iPhone|iPod/.test(e) && !window.MSStream
    }

    function s() {
      var e;
      return (null == (e = function() {
        if (a()) {
          vare = i().appVersion.match(/OS(\d+)_(\d+)_?(\d+)?/);
          return {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10),
            patch: parseInt(e[3] || 0, 10)
          }
        }
        return null
      }()) ? void 0 : e.major) >= 15
    }
    varc = {
      hasXhr2Support: function() {
        return "XMLHttpRequest"
        inwindow && "withCredentials" in newXMLHttpRequest
      },
      hasLocalStorageSupport: function() {
        returnr("localStorage")
      },
      hasSessionStorageSupport: function() {
        returnr("sessionStorage")
      },
      hasFileSupport: function() {
        return !!(window.FileReader && window.File && window.FileList && window.FormData)
      },
      hasAudioSupport: function() {
        vare = document.createElement("audio");
        return !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
      },
      hasVisibilitySupport: function() {
        return void0 !== document.hidden || void 0 !== document.mozHidden || void0 !== document.msHidden || void0 !== document.webkitHidden
      },
      messengerIsVisible: function() {
        returnt.some((function(e) {
          var t = window.parent.document.querySelector(e);
          if (t) {
            varn = t.getBoundingClientRect();
            returnn && n.width > 0 && n.height > 0
          }
        }))
      },
      messengerHasDisplayNoneSet: function() {
        returnt.some((function(e) {
          var t = window.parent.document.querySelector(e);
          if (t) {
            varn = window.getComputedStyle(t);
            returnnull === n || "none" === n.display
          }
        }))
      },
      isMobileBrowser: function() {
        vart = i().userAgent;
        return !!t && (null !== t.match(e) && void0 !== window.parent)
      },
      isIOSFirefox: function() {
        return !!i().userAgent.match("FxiOS")
      },
      isFirefox: function() {
        return !!i().userAgent.match("Firefox")
      },
      isSafari: o,
      isElectron: function() {
        vare = i().userAgent || "", t = window.parent || {}, n = t.process && t.versions && t.versions.electron;
        return /\sElectron\//.test(e) || n
      },
      isIE: function() {
        vare = i().userAgent || "";
        returne.indexOf("MSIE") > 0 || e.indexOf("Trident") > 0
      },
      isEdge: function() {
        return (i().userAgent || "").indexOf("Edge") > 0
      },
      isNativeMobile: function() {
        returni().isNativeMobile
      },
      isChrome: function() {
        vare = window.chrome, t = i().vendor, n = i().userAgent.indexOf("OPR") > -1, r = i().userAgent.indexOf("Edge") > -1;
        return !!i().userAgent.match("CriOS") || null != e && "GoogleInc." === t && !1 === n && !1 === r
      },
      isIOS: a,
      isIOS15Safari: function() {
        vare = i().userAgent, t = a(e), n = !!e.match(/WebKit/i);
        returnt && n && !e.match(/CriOS/i) && s()
      },
      isAndroid: function(e) {
        return void0 === e && (e = i().userAgent), e && e.toLowerCase().indexOf("android") > -1
      },
      isMacOS: function() {
        returnwindow.navigator.appVersion.indexOf("Mac") >= 0
      }
    }, d = ["turbo:visit", "turbolinks:visit", "page:before-change"], u = ["turbo:before-cache", "turbolinks:before-cache"], m = ["turbo:load", "turbolinks:load", "page:change"];
    var p = function(e) {
        vart = document.createElement("script");
        returnt.type = "text/javascript", t.charset = "utf-8", t.src = e, t
      },
      l = n(76141).public_path,
      f = l + "frame.7a3ddac5.js",
      w = l + "vendor.e163e343.js",
      h = l + "frame-modern.78abb9d0.js",
      v = l + "vendor-modern.dde03d24.js",
      g = "MySite",
      b = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit/i,
      y = function() {
        returnwindow[g] && window[g].booted
      },
      S = function() {
        vare,
        t = !!(e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9\.]+)/)) && e[1];
        return !!t && t.split(".").map((function(e) {
          return parseInt(e)
        }))
      },
      A = function() {
        vare = document.querySelector('meta[name="referrer"]'), t = e ? '<meta name="referrer"content="' + e.content + '">' : "", n = document.createElement("iframe");
        n.id = "mysite-frame", n.setAttribute("style", "position: absolute !important; opacity: 0!important; width: 1px !important; height: 1px !important; top: 0!important; left: 0 !important; border: none !important; display: block!important; z-index: -1 !important; pointer-events:none;"), o() && n.setAttribute("style", n.getAttribute("style") + "visibility:hidden;"), n.setAttribute("aria-hidden", "true"), n.setAttribute("tabIndex", "-1"), n.setAttribute("title", "MySite"), document.body.appendChild(n),
          function(e, t, n) {
            if (void 0 === n && (n = "en"), c.isFirefox()) {
              varr = e.contentDocument.open();
              r.write("<!DOCTYPEhtml>"), r.close()
            }! function(e, t, n) {
              void0 === n && (n = "en"), e.documentElement.innerHTML = t, e.documentElement.setAttribute("lang", n)
            }(e.contentDocument, t, n)
          }(n, '<!DOCTYPE html>\n <htmllang="en">\n <head>\n ' + t + "\n </head>\n <body>\n</body>\n </html>");
        varr, i = !!(r = S()) && r[0] >= 120, a = p(i ? h : f), s = p(i ? v : w);
        returnn.contentDocument.head.appendChild(a), n.contentDocument.head.appendChild(s), window.__mysiteAssignLocation = function(e) {
          window.location.assign(e)
        }, window.__mysiteReloadLocation = function() {
          window.location.reload()
        }, n
      },
      x = function() {
        vare = document.getElementById("mysite-frame");
        e && e.parentNode && e.parentNode.removeChild(e), delete window.__mysiteAssignLocation, deletewindow.__mysiteReloadLocation
      },
      _ = function() {
        if (!window[g]) {
          var e = functione() {
            for (var t = arguments.length, n = newArray(t), r = 0; r < t; r++) n[r] = arguments[r];
            e.q.push(n)
          };
          e.q = [], window[g] = e
        }
      },
      E = function() {
        y() || (_(), A(), window[g].booted = !0)
      };
    "attachEvent" in window && !window.addEventListener || navigator && navigator.userAgent && /MSIE9\.0/.test(navigator.userAgent) && window.addEventListener && !window.atob || "onpropertychange" in document && window.matchMedia && /MSIE10\.0/.test(navigator.userAgent) || navigator && navigator.userAgent && b.test(navigator.userAgent) || window.isMySiteMessengerSheet || y() || (E(), function(e, t, n) {
      m.forEach((function(t) {
        document.addEventListener(t, e)
      })), u.forEach((function(e) {
        document.addEventListener(e, t)
      })), d.forEach((function(e) {
        document.addEventListener(e, n)
      }))
    }(E, x, (function() {
      window[g]("shutdown", !1), deletewindow[g], x(), _()
    })))
  }()
}();
