this.Element && function(e) {
    e.matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.msMatchesSelector || function(e) {
        for (var t = (this.parentNode || this.document).querySelectorAll(e), a = -1; t[++a] && t[a] != this;);
        return !!t[a]
    }
}(Element.prototype), this.Element && function(e) {
    e.closest = e.closest || function(e) {
        for (var t = this; t.matches && !t.matches(e);) t = t.parentNode;
        return t.matches ? t : null
    }
}(Element.prototype), this.Element && function(e) {
    e.matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.msMatchesSelector || function(e) {
        for (var t = (this.parentNode || this.document).querySelectorAll(e), a = -1; t[++a] && t[a] != this;);
        return !!t[a]
    }
}(Element.prototype),
function() {
    for (var e = 0, t = ["webkit", "moz"], a = 0; a < t.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[t[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[a] + "CancelAnimationFrame"] || window[t[a] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var a = (new Date).getTime(),
            n = Math.max(0, 16 - (a - e)),
            o = window.setTimeout(function() {
                t(a + n)
            }, n);
        return e = a + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function(e) {
    e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function() {
            var e = Array.prototype.slice.call(arguments),
                t = document.createDocumentFragment();
            e.forEach(function(e) {
                var a = e instanceof Node;
                t.appendChild(a ? e : document.createTextNode(String(e)))
            }), this.insertBefore(t, this.firstChild)
        }
    })
}), window.mUtilElementDataStore = {}, window.mUtilElementDataStoreID = 0, window.mUtilDelegatedEventHandlers = {}, window.noZensmooth = !0;
var mUtil = function() {
var e = [],
    t = {
        sm: 544,
        md: 768,
        lg: 1024,
        xl: 1200
    };
return {
    init: function(a) {
        var n;
        a && a.breakpoints && (t = a.breakpoints), n = !1, window.addEventListener("resize", function() {
            clearTimeout(n), n = setTimeout(function() {
                ! function() {
                    for (var t = 0; t < e.length; t++) e[t].call()
                }()
            }, 250)
        })
    },
    addResizeHandler: function(t) {
        e.push(t)
    },
    runResizeHandlers: function() {
        _runResizeHandlers()
    },
    getURLParam: function(e) {
        var t, a, n = window.location.search.substring(1).split("&");
        for (t = 0; t < n.length; t++)
            if ((a = n[t].split("="))[0] == e) return unescape(a[1]);
        return null
    },
    isMobileDevice: function() {
        return this.getViewPort().width < this.getBreakpoint("lg")
    },
    isDesktopDevice: function() {
        return !mUtil.isMobileDevice()
    },
    getViewPort: function() {
        var e = window,
            t = "inner";
        return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
            width: e[t + "Width"],
            height: e[t + "Height"]
        }
    },
    isInResponsiveRange: function(e) {
        var t = this.getViewPort().width;
        return "general" == e || "desktop" == e && t >= this.getBreakpoint("lg") + 1 || "tablet" == e && t >= this.getBreakpoint("md") + 1 && t < this.getBreakpoint("lg") || "mobile" == e && t <= this.getBreakpoint("md") || "desktop-and-tablet" == e && t >= this.getBreakpoint("md") + 1 || "tablet-and-mobile" == e && t <= this.getBreakpoint("lg") || "minimal-desktop-and-below" == e && t <= this.getBreakpoint("xl")
    },
    getUniqueID: function(e) {
        return e + Math.floor(Math.random() * (new Date).getTime())
    },
    getBreakpoint: function(e) {
        return t[e]
    },
    isset: function(e, t) {
        var a;
        if (-1 !== (t = t || "").indexOf("[")) throw new Error("Unsupported object path notation.");
        t = t.split(".");
        do {
            if (void 0 === e) return !1;
            if (a = t.shift(), !e.hasOwnProperty(a)) return !1;
            e = e[a]
        } while (t.length);
        return !0
    },
    getHighestZindex: function(e) {
        for (var t, a, n = mUtil.get(e); n && n !== document;) {
            if (("absolute" === (t = mUtil.css(n, "position")) || "relative" === t || "fixed" === t) && (a = parseInt(mUtil.css(n, "z-index")), !isNaN(a) && 0 !== a)) return a;
            n = n.parentNode
        }
        return null
    },
    hasFixedPositionedParent: function(e) {
        for (; e && e !== document;) {
            if (position = mUtil.css(e, "position"), "fixed" === position) return !0;
            e = e.parentNode
        }
        return !1
    },
    sleep: function(e) {
        for (var t = (new Date).getTime(), a = 0; a < 1e7 && !((new Date).getTime() - t > e); a++);
    },
    getRandomInt: function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    },
    isAngularVersion: function() {
        return void 0 !== window.Zone
    },
    deepExtend: function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            if (a)
                for (var n in a) a.hasOwnProperty(n) && ("object" == typeof a[n] ? e[n] = mUtil.deepExtend(e[n], a[n]) : e[n] = a[n])
        }
        return e
    },
    extend: function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var a in arguments[t]) arguments[t].hasOwnProperty(a) && (e[a] = arguments[t][a]);
        return e
    },
    get: function(e) {
        var t;
        return e === document ? document : e && 1 === e.nodeType ? e : (t = document.getElementById(e)) ? t : (t = document.getElementsByTagName(e)) ? t[0] : (t = document.getElementsByClassName(e)) ? t[0] : null
    },
    hasClasses: function(e, t) {
        if (e) {
            for (var a = t.split(" "), n = 0; n < a.length; n++)
                if (0 == mUtil.hasClass(e, mUtil.trim(a[n]))) return !1;
            return !0
        }
    },
    hasClass: function(e, t) {
        if (e) return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    },
    addClass: function(e, t) {
        if (e && void 0 !== t) {
            var a = t.split(" ");
            if (e.classList)
                for (var n = 0; n < a.length; n++) a[n] && a[n].length > 0 && e.classList.add(mUtil.trim(a[n]));
            else if (!mUtil.hasClass(e, t))
                for (n = 0; n < a.length; n++) e.className += " " + mUtil.trim(a[n])
        }
    },
    removeClass: function(e, t) {
        if (e) {
            var a = t.split(" ");
            if (e.classList)
                for (var n = 0; n < a.length; n++) e.classList.remove(mUtil.trim(a[n]));
            else if (mUtil.hasClass(e, t))
                for (n = 0; n < a.length; n++) e.className = e.className.replace(new RegExp("\\b" + mUtil.trim(a[n]) + "\\b", "g"), "")
        }
    },
    triggerCustomEvent: function(e, t, a) {
        if (window.CustomEvent) var n = new CustomEvent(t, {
            detail: a
        });
        else(n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, a);
        e.dispatchEvent(n)
    },
    trim: function(e) {
        return e.trim()
    },
    eventTriggered: function(e) {
        return !!e.currentTarget.dataset.triggered || (e.currentTarget.dataset.triggered = !0, !1)
    },
    remove: function(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    },
    find: function(e, t) {
        return e.querySelector(t)
    },
    findAll: function(e, t) {
        return e.querySelectorAll(t)
    },
    insertAfter: function(e, t) {
        return t.parentNode.insertBefore(e, t.nextSibling)
    },
    parents: function(e, t) {
        function a(e, t) {
            for (var a = 0, n = e.length; a < n; a++)
                if (e[a] == t) return !0;
            return !1
        }
        return function(e, t) {
            for (var n = document.querySelectorAll(t), o = e.parentNode; o && !a(n, o);) o = o.parentNode;
            return o
        }(e, t)
    },
    children: function(e, t, a) {
        if (e && e.childNodes) {
            for (var n = [], o = 0, i = e.childNodes.length; o < i; ++o) 1 == e.childNodes[o].nodeType && mUtil.matches(e.childNodes[o], t, a) && n.push(e.childNodes[o]);
            return n
        }
    },
    child: function(e, t, a) {
        var n = mUtil.children(e, t, a);
        return n ? n[0] : null
    },
    matches: function(e, t, a) {
        var n = Element.prototype,
            o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(e) {
                return -1 !== [].indexOf.call(document.querySelectorAll(e), this)
            };
        return !(!e || !e.tagName) && o.call(e, t)
    },
    data: function(e) {
        return e = mUtil.get(e), {
            set: function(t, a) {
                void 0 === e.customDataTag && (mUtilElementDataStoreID++, e.customDataTag = mUtilElementDataStoreID), void 0 === mUtilElementDataStore[e.customDataTag] && (mUtilElementDataStore[e.customDataTag] = {}), mUtilElementDataStore[e.customDataTag][t] = a
            },
            get: function(t) {
                return this.has(t) ? mUtilElementDataStore[e.customDataTag][t] : null
            },
            has: function(t) {
                return !(!mUtilElementDataStore[e.customDataTag] || !mUtilElementDataStore[e.customDataTag][t])
            },
            remove: function(t) {
                this.has(t) && delete mUtilElementDataStore[e.customDataTag][t]
            }
        }
    },
    outerWidth: function(e, t) {
        if (!0 === t) {
            var a = parseFloat(e.offsetWidth);
            return a += parseFloat(mUtil.css(e, "margin-left")) + parseFloat(mUtil.css(e, "margin-right")), parseFloat(a)
        }
        return parseFloat(e.offsetWidth)
    },
    offset: function(e) {
        var t = e.getBoundingClientRect();
        return {
            top: t.top + document.body.scrollTop,
            left: t.left + document.body.scrollLeft
        }
    },
    height: function(e) {
        return mUtil.css(e, "height")
    },
    visible: function(e) {
        return !(0 === e.offsetWidth && 0 === e.offsetHeight)
    },
    attr: function(e, t, a) {
        if (void 0 != (e = mUtil.get(e))) return void 0 === a ? e.getAttribute(t) : void e.setAttribute(t, a)
    },
    hasAttr: function(e, t) {
        if (void 0 != (e = mUtil.get(e))) return !!e.getAttribute(t)
    },
    removeAttr: function(e, t) {
        void 0 != (e = mUtil.get(e)) && e.removeAttribute(t)
    },
    animate: function(e, t, a, n, o, i) {
        var l = {
            linear: function(e, t, a, n) {
                return a * e / n + t
            }
        };
        if ("number" == typeof e && "number" == typeof t && "number" == typeof a && "function" == typeof n) {
            "string" == typeof o && l[o] && (o = l[o]), "function" != typeof o && (o = l.linear), "function" != typeof i && (i = function() {});
            var r = window.requestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                },
                s = t - e;
            n(e);
            var d = window.performance && window.performance.now ? window.performance.now() : +new Date;
            r(function l(c) {
                var m = (c || +new Date) - d;
                m >= 0 && n(o(m, e, s, a)), m >= 0 && m >= a ? (n(t), i()) : r(l)
            })
        }
    },
    actualCss: function(e, t, a) {
        var n;
        if (e instanceof HTMLElement != 0) return e.getAttribute("m-hidden-" + t) && !1 !== a ? parseFloat(e.getAttribute("m-hidden-" + t)) : (e.style.cssText = "position: absolute; visibility: hidden; display: block;", "width" == t ? n = e.offsetWidth : "height" == t && (n = e.offsetHeight), e.style.cssText = "", e.setAttribute("m-hidden-" + t, n), parseFloat(n))
    },
    actualHeight: function(e, t) {
        return mUtil.actualCss(e, "height", t)
    },
    actualWidth: function(e, t) {
        return mUtil.actualCss(e, "width", t)
    },
    getScroll: function(e, t) {
        return t = "scroll" + t, e == window || e == document ? self["scrollTop" == t ? "pageYOffset" : "pageXOffset"] || browserSupportsBoxModel && document.documentElement[t] || document.body[t] : e[t]
    },
    css: function(e, t, a) {
        if (e = mUtil.get(e))
            if (void 0 !== a) e.style[t] = a;
            else {
                var n = (e.ownerDocument || document).defaultView;
                if (n && n.getComputedStyle) return t = t.replace(/([A-Z])/g, "-$1").toLowerCase(), n.getComputedStyle(e, null).getPropertyValue(t);
                if (e.currentStyle) return t = t.replace(/\-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                }), a = e.currentStyle[t], /^\d+(em|pt|%|ex)?$/i.test(a) ? (o = a, i = e.style.left, l = e.runtimeStyle.left, e.runtimeStyle.left = e.currentStyle.left, e.style.left = o || 0, o = e.style.pixelLeft + "px", e.style.left = i, e.runtimeStyle.left = l, o) : a
            } var o, i, l
    },
    slide: function(e, t, a, n, o) {
        if (!(!e || "up" == t && !1 === mUtil.visible(e) || "down" == t && !0 === mUtil.visible(e))) {
            a = a || 600;
            var i = mUtil.actualHeight(e),
                l = !1,
                r = !1;
            mUtil.css(e, "padding-top") && !0 !== mUtil.data(e).has("slide-padding-top") && mUtil.data(e).set("slide-padding-top", mUtil.css(e, "padding-top")), mUtil.css(e, "padding-bottom") && !0 !== mUtil.data(e).has("slide-padding-bottom") && mUtil.data(e).set("slide-padding-bottom", mUtil.css(e, "padding-bottom")), mUtil.data(e).has("slide-padding-top") && (l = parseInt(mUtil.data(e).get("slide-padding-top"))), mUtil.data(e).has("slide-padding-bottom") && (r = parseInt(mUtil.data(e).get("slide-padding-bottom"))), "up" == t ? (e.style.cssText = "display: block; overflow: hidden;", l && mUtil.animate(0, l, a, function(t) {
                e.style.paddingTop = l - t + "px"
            }, "linear"), r && mUtil.animate(0, r, a, function(t) {
                e.style.paddingBottom = r - t + "px"
            }, "linear"), mUtil.animate(0, i, a, function(t) {
                e.style.height = i - t + "px"
            }, "linear", function() {
                n(), e.style.height = "", e.style.display = "none"
            })) : "down" == t && (e.style.cssText = "display: block; overflow: hidden;", l && mUtil.animate(0, l, a, function(t) {
                e.style.paddingTop = t + "px"
            }, "linear", function() {
                e.style.paddingTop = ""
            }), r && mUtil.animate(0, r, a, function(t) {
                e.style.paddingBottom = t + "px"
            }, "linear", function() {
                e.style.paddingBottom = ""
            }), mUtil.animate(0, i, a, function(t) {
                e.style.height = t + "px"
            }, "linear", function() {
                n(), e.style.height = "", e.style.display = "", e.style.overflow = ""
            }))
        }
    },
    slideUp: function(e, t, a) {
        mUtil.slide(e, "up", t, a)
    },
    slideDown: function(e, t, a) {
        mUtil.slide(e, "down", t, a)
    },
    show: function(e, t) {
        e.style.display = t || "block"
    },
    hide: function(e) {
        e.style.display = "none"
    },
    addEvent: function(e, t, a, n) {
        void 0 !== (e = mUtil.get(e)) && e.addEventListener(t, a)
    },
    removeEvent: function(e, t, a) {
        (e = mUtil.get(e)).removeEventListener(t, a)
    },
    on: function(e, t, a, n) {
        if (t) {
            var o = mUtil.getUniqueID("event");
            return mUtilDelegatedEventHandlers[o] = function(a) {
                for (var o = e.querySelectorAll(t), i = a.target; i && i !== e;) {
                    for (var l = 0, r = o.length; l < r; l++) i === o[l] && n.call(i, a);
                    i = i.parentNode
                }
            }, mUtil.addEvent(e, a, mUtilDelegatedEventHandlers[o]), o
        }
    },
    off: function(e, t, a) {
        e && mUtilDelegatedEventHandlers[a] && (mUtil.removeEvent(e, t, mUtilDelegatedEventHandlers[a]), delete mUtilDelegatedEventHandlers[a])
    },
    one: function(e, t, a) {
        (e = mUtil.get(e)).addEventListener(t, function(e) {
            return e.target.removeEventListener(e.type, arguments.callee), a(e)
        })
    },
    hash: function(e) {
        var t, a = 0;
        if (0 === e.length) return a;
        for (t = 0; t < e.length; t++) a = (a << 5) - a + e.charCodeAt(t), a |= 0;
        return a
    },
    animateClass: function(e, t, a) {
        mUtil.addClass(e, "animated " + t), mUtil.one(e, "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            mUtil.removeClass(e, "animated " + t)
        }), a && mUtil.one(e.animationEnd, a)
    },
    animateDelay: function(e, t) {
        for (var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0; n < a.length; n++) mUtil.css(e, a[n] + "animation-delay", t)
    },
    animateDuration: function(e, t) {
        for (var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0; n < a.length; n++) mUtil.css(e, a[n] + "animation-duration", t)
    },
    scrollTo: function(e, t, a) {
        a || (a = 600), zenscroll.toY(e, a)
    },
    scrollToViewport: function(e, t) {
        t || (t = 1200), zenscroll.intoView(e, t)
    },
    scrollToCenter: function(e, t) {
        t || (t = 1200), zenscroll.center(e, t)
    },
    scrollTop: function(e) {
        e || (e = 600), zenscroll.toY(0, e)
    },
    isArray: function(e) {
        return e && Array.isArray(e)
    },
    ready: function(e) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? e(): document.addEventListener("DOMContentLoaded", e)
    },
    isEmpty: function(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    },
    numberString: function(e) {
        for (var t = (e += "").split("."), a = t[0], n = t.length > 1 ? "." + t[1] : "", o = /(\d+)(\d{3})/; o.test(a);) a = a.replace(o, "$1,$2");
        return a + n
    }
}
}();
mUtil.ready(function() {
mUtil.init()
});

var mApp = function() {
    var e = {
            brand: "#716aca",
            metal: "#c4c5d6",
            light: "#ffffff",
            accent: "#00c5dc",
            primary: "#5867dd",
            success: "#34bfa3",
            info: "#36a3f7",
            warning: "#ffb822",
            danger: "#f4516c",
            focus: "#9816f4"
        },
        t = function(e) {
            e.data("skin") && e.data("skin"), e.data("width"), e.data("trigger") && e.data("trigger")
        },
        a = function() {
            $('[data-toggle="m-tooltip"]').each(function() {
                t($(this))
            })
        },
        n = function(e) {
            var t = e.data("skin") ? "m-popover--skin-" + e.data("skin") : "",
                a = e.data("trigger") ? e.data("trigger") : "hover";
            e.popover({
                trigger: a,
                template: '            <div class="m-popover ' + t + ' popover" role="tooltip">                <div class="arrow"></div>                <h3 class="popover-header"></h3>                <div class="popover-body"></div>            </div>'
            })
        },
        o = function() {
            $('[data-toggle="m-popover"]').each(function() {
                n($(this))
            })
        },
        i = function(e, t) {
            e = $(e), new mPortlet(e[0], t)
        },
        l = function() {
            $('[m-portlet="true"]').each(function() {
                var e = $(this);
                !0 !== e.data("portlet-initialized") && (i(e, {}), e.data("portlet-initialized", !0))
            })
        },
        r = function() {
            $("[data-tab-target]").each(function() {
                1 != $(this).data("tabs-initialized") && ($(this).click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        a = t.closest('[data-tabs="true"]'),
                        n = $(a.data("tabs-contents")),
                        o = $(t.data("tab-target"));
                    a.find(".m-tabs__item.m-tabs__item--active").removeClass("m-tabs__item--active"), t.addClass("m-tabs__item--active"), n.find(".m-tabs-content__item.m-tabs-content__item--active").removeClass("m-tabs-content__item--active"), o.addClass("m-tabs-content__item--active")
                }), $(this).data("tabs-initialized", !0))
            })
        };
    return {
        init: function(t) {
            t && t.colors && (e = t.colors), mApp.initComponents()
        },
        initComponents: function() {
            jQuery.event.special.touchstart = {
                setup: function(e, t, a) {
                    "function" == typeof this && (t.includes("noPreventDefault") ? this.addEventListener("touchstart", a, {
                        passive: !1
                    }) : this.addEventListener("touchstart", a, {
                        passive: !0
                    }))
                }
            }, jQuery.event.special.touchmove = {
                setup: function(e, t, a) {
                    "function" == typeof this && (t.includes("noPreventDefault") ? this.addEventListener("touchmove", a, {
                        passive: !1
                    }) : this.addEventListener("touchmove", a, {
                        passive: !0
                    }))
                }
            }, jQuery.event.special.wheel = {
                setup: function(e, t, a) {
                    "function" == typeof this && (t.includes("noPreventDefault") ? this.addEventListener("wheel", a, {
                        passive: !1
                    }) : this.addEventListener("wheel", a, {
                        passive: !0
                    }))
                }
            }, $('[data-scrollable="true"]').each(function() {
                var e, t, a = $(this);
              //  mUtil.isInResponsiveRange("tablet-and-mobile") ? (e = a.data("mobile-max-height") ? a.data("mobile-max-height") : a.data("max-height"), t = a.data("mobile-height") ? a.data("mobile-height") : a.data("height")) : (e = a.data("max-height"), t = a.data("max-height")), e && a.css("max-height", e), t && a.css("height", t), mApp.initScroller(a, {})
            }), a(), o(), $("body").on("click", "[data-close=alert]", function() {
                $(this).closest(".alert").hide()
            }), l(), $(".custom-file-input").on("change", function() {
                var e = $(this).val();
                $(this).next(".custom-file-label").addClass("selected").html(e)
            }), r()
        },
        initCustomTabs: function() {
            r()
        },
        initTooltips: function() {
            a()
        },
        initTooltip: function(e) {
            t(e)
        },
        initPopovers: function() {
            o()
        },
        initPopover: function(e) {
            n(e)
        },
        initPortlet: function(e, t) {
            i(e, t)
        },
        initPortlets: function() {
            l()
        },
        scrollTo: function(e, t) {
            el = $(e);
            var a = el && el.length > 0 ? el.offset().top : 0;
            a += t || 0, jQuery("html,body").animate({
                scrollTop: a
            }, "slow")
        },
        scrollToViewport: function(e) {
            var t = $(e).offset().top,
                a = e.height(),
                n = t - (mUtil.getViewPort().height / 2 - a / 2);
            jQuery("html,body").animate({
                scrollTop: n
            }, "slow")
        },
        scrollTop: function() {
            mApp.scrollTo()
        },
        
        alert: function(e) {
            e = $.extend(!0, {
                container: "",
                place: "append",
                type: "success",
                message: "",
                close: !0,
                reset: !0,
                focus: !0,
                closeInSeconds: 0,
                icon: ""
            }, e);
            var t = mUtil.getUniqueID("App_alert"),
                a = '<div id="' + t + '" class="custom-alerts alert alert-' + e.type + ' fade in">' + (e.close ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' : "") + ("" !== e.icon ? '<i class="fa-lg fa fa-' + e.icon + '"></i>  ' : "") + e.message + "</div>";
            return e.reset && $(".custom-alerts").remove(), e.container ? "append" == e.place ? $(e.container).append(a) : $(e.container).prepend(a) : 1 === $(".page-fixed-main-content").size() ? $(".page-fixed-main-content").prepend(a) : ($("body").hasClass("page-container-bg-solid") || $("body").hasClass("page-content-white")) && 0 === $(".page-head").size() ? $(".page-title").after(a) : $(".page-bar").size() > 0 ? $(".page-bar").after(a) : $(".page-breadcrumb, .breadcrumbs").after(a), e.focus && mApp.scrollTo($("#" + t)), e.closeInSeconds > 0 && setTimeout(function() {
                $("#" + t).remove()
            }, 1e3 * e.closeInSeconds), t
        },
        block: function(e, t) {
            var a, n, o, i = $(e);
            if ("spinner" == (t = $.extend(!0, {
                    opacity: .03,
                    overlayColor: "#000000",
                    state: "brand",
                    type: "loader",
                    size: "lg",
                    centerX: !0,
                    centerY: !0,
                    message: "",
                    shadow: !0,
                    width: "auto"
                }, t)).type ? o = '<div class="m-spinner ' + (a = t.skin ? "m-spinner--skin-" + t.skin : "") + " " + (n = t.state ? "m-spinner--" + t.state : "") + '"></div' : (a = t.skin ? "m-loader--skin-" + t.skin : "", n = t.state ? "m-loader--" + t.state : "", size = t.size ? "m-loader--" + t.size : "", o = '<div class="m-loader ' + a + " " + n + " " + size + '"></div'), t.message && t.message.length > 0) {
                var l = "m-blockui " + (!1 === t.shadow ? "m-blockui-no-shadow" : "");
                html = '<div class="' + l + '"><span>' + t.message + "</span><span>" + o + "</span></div>", i = document.createElement("div"), mUtil.get("body").prepend(i), mUtil.addClass(i, l), i.innerHTML = "<span>" + t.message + "</span><span>" + o + "</span>", t.width = mUtil.actualWidth(i) + 10, mUtil.remove(i), "body" == e && (html = '<div class="' + l + '" style="margin-left:-' + t.width / 2 + 'px;"><span>' + t.message + "</span><span>" + o + "</span></div>")
            } else html = o;
            var r = {
                message: html,
                centerY: t.centerY,
                centerX: t.centerX,
                css: {
                    top: "30%",
                    left: "50%",
                    border: "0",
                    padding: "0",
                    backgroundColor: "none",
                    width: t.width
                },
                overlayCSS: {
                    backgroundColor: t.overlayColor,
                    opacity: t.opacity,
                    cursor: "wait",
                    zIndex: "10"
                },
                onUnblock: function() {
                    i && (mUtil.css(i, "position", ""), mUtil.css(i, "zoom", ""))
                }
            };
            "body" == e ? (r.css.top = "50%", $.blockUI(r)) : (i = $(e)).block(r)
        },
        unblock: function(e) {
            e && "body" != e ? $(e).unblock() : $.unblockUI()
        },
        blockPage: function(e) {
            return mApp.block("body", e)
        },
        unblockPage: function() {
            return mApp.unblock("body")
        },
        progress: function(e, t) {
            var a = "m-loader m-loader--" + (t && t.skin ? t.skin : "light") + " m-loader--" + (t && t.alignment ? t.alignment : "right") + " m-loader--" + (t && t.size ? "m-spinner--" + t.size : "");
            mApp.unprogress(e), $(e).addClass(a), $(e).data("progress-classes", a)
        },
        unprogress: function(e) {
            $(e).removeClass($(e).data("progress-classes"))
        },
        getColor: function(t) {
            return e[t]
        }
    }
}();
$(document).ready(function() {
        mApp.init({})
    });


var mDropdown = function(e, t) {
var a = this,
    n = mUtil.get(e),
    o = mUtil.get("body");
if (n) {
    var i = {
            toggle: "click",
            hoverTimeout: 300,
            skin: "light",
            height: "auto",
            maxHeight: !1,
            minHeight: !1,
            persistent: !1,
            mobileOverlay: !0
        },
        l = {
            construct: function(e) {
                return mUtil.data(n).has("dropdown") ? a = mUtil.data(n).get("dropdown") : (l.init(e), l.setup(), mUtil.data(n).set("dropdown", a)), a
            },
            init: function(e) {
                a.options = mUtil.deepExtend({}, i, e), a.events = [], a.eventHandlers = {}, a.open = !1, a.layout = {}, a.layout.close = mUtil.find(n, ".m-dropdown__close"), a.layout.toggle = mUtil.find(n, ".m-dropdown__toggle"), a.layout.arrow = mUtil.find(n, ".m-dropdown__arrow"), a.layout.wrapper = mUtil.find(n, ".m-dropdown__wrapper"), a.layout.defaultDropPos = mUtil.hasClass(n, "m-dropdown--up") ? "up" : "down", a.layout.currentDropPos = a.layout.defaultDropPos, "hover" == mUtil.attr(n, "m-dropdown-toggle") && (a.options.toggle = "hover")
            },
            setup: function() {
                a.options.placement && mUtil.addClass(n, "m-dropdown--" + a.options.placement), a.options.align && mUtil.addClass(n, "m-dropdown--align-" + a.options.align), a.options.width && mUtil.css(a.layout.wrapper, "width", a.options.width + "px"), "1" == mUtil.attr(n, "m-dropdown-persistent") && (a.options.persistent = !0), "hover" == a.options.toggle && mUtil.addEvent(n, "mouseout", l.hideMouseout), l.setZindex()
            },
            toggle: function() {
                return a.open ? l.hide() : l.show()
            },
            setContent: function(e) {
                return e = mUtil.find(n, ".m-dropdown__content").innerHTML = e, a
            },
            show: function() {
                if ("hover" == a.options.toggle && mUtil.hasAttr(n, "hover")) return l.clearHovered(), a;
                if (a.open) return a;
                if (a.layout.arrow && l.adjustArrowPos(), l.eventTrigger("beforeShow"), l.hideOpened(), mUtil.addClass(n, "m-dropdown--open"), mUtil.isMobileDevice() && a.options.mobileOverlay) {
                    var e = mUtil.css(n, "z-index") - 1,
                        t = mUtil.insertAfter(document.createElement("DIV"), n);
                    mUtil.addClass(t, "m-dropdown__dropoff"), mUtil.css(t, "z-index", e), mUtil.data(t).set("dropdown", n), mUtil.data(n).set("dropoff", t), mUtil.addEvent(t, "click", function(e) {
                        l.hide(), mUtil.remove(this), e.preventDefault()
                    })
                }
                return n.focus(), n.setAttribute("aria-expanded", "true"), a.open = !0, l.eventTrigger("afterShow"), a
            },
            clearHovered: function() {
                var e = mUtil.attr(n, "timeout");
                mUtil.removeAttr(n, "hover"), mUtil.removeAttr(n, "timeout"), clearTimeout(e)
            },
            hideHovered: function(e) {
                if (!0 === e) {
                    if (!1 === l.eventTrigger("beforeHide")) return;
                    l.clearHovered(), mUtil.removeClass(n, "m-dropdown--open"), a.open = !1, l.eventTrigger("afterHide")
                } else {
                    if (!0 === mUtil.hasAttr(n, "hover")) return;
                    if (!1 === l.eventTrigger("beforeHide")) return;
                    var t = setTimeout(function() {
                        mUtil.attr(n, "hover") && (l.clearHovered(), mUtil.removeClass(n, "m-dropdown--open"), a.open = !1, l.eventTrigger("afterHide"))
                    }, a.options.hoverTimeout);
                    mUtil.attr(n, "hover", "1"), mUtil.attr(n, "timeout", t)
                }
            },
            hideClicked: function() {
                !1 !== l.eventTrigger("beforeHide") && (mUtil.removeClass(n, "m-dropdown--open"), mUtil.data(n).remove("dropoff"), a.open = !1, l.eventTrigger("afterHide"))
            },
            hide: function(e) {
                return !1 === a.open ? a : (mUtil.isDesktopDevice() && "hover" == a.options.toggle ? l.hideHovered(e) : l.hideClicked(), "down" == a.layout.defaultDropPos && "up" == a.layout.currentDropPos && (mUtil.removeClass(n, "m-dropdown--up"), a.layout.arrow.prependTo(a.layout.wrapper), a.layout.currentDropPos = "down"), a)
            },
            hideMouseout: function() {
                mUtil.isDesktopDevice() && l.hide()
            },
            hideOpened: function() {
                for (var e = mUtil.findAll(o, ".m-dropdown.m-dropdown--open"), t = 0, a = e.length; t < a; t++) {
                    var n = e[t];
                    mUtil.data(n).get("dropdown").hide(!0)
                }
            },
            adjustArrowPos: function() {
                var e = mUtil.outerWidth(n),
                    t = mUtil.hasClass(a.layout.arrow, "m-dropdown__arrow--right") ? "right" : "left",
                    o = 0;
                a.layout.arrow && (mUtil.isInResponsiveRange("mobile") && mUtil.hasClass(n, "m-dropdown--mobile-full-width") ? (o = mUtil.offset(n).left + e / 2 - Math.abs(parseInt(mUtil.css(a.layout.arrow, "width")) / 2) - parseInt(mUtil.css(a.layout.wrapper, "left")), mUtil.css(a.layout.arrow, "right", "auto"), mUtil.css(a.layout.arrow, "left", o + "px"), mUtil.css(a.layout.arrow, "margin-left", "auto"), mUtil.css(a.layout.arrow, "margin-right", "auto")) : mUtil.hasClass(a.layout.arrow, "m-dropdown__arrow--adjust") && (o = e / 2 - Math.abs(parseInt(mUtil.css(a.layout.arrow, "width")) / 2), mUtil.hasClass(n, "m-dropdown--align-push") && (o += 20), "right" == t ? (mUtil.css(a.layout.arrow, "left", "auto"), mUtil.css(a.layout.arrow, "right", o + "px")) : (mUtil.css(a.layout.arrow, "right", "auto"), mUtil.css(a.layout.arrow, "left", o + "px"))))
            },
            setZindex: function() {
                var e = 101,
                    t = mUtil.getHighestZindex(n);
                t >= e && (e = t + 1), mUtil.css(a.layout.wrapper, "z-index", e)
            },
            isPersistent: function() {
                return a.options.persistent
            },
            isShown: function() {
                return a.open
            },
            eventTrigger: function(e, t) {
                for (var n = 0; n < a.events.length; n++) {
                    var o = a.events[n];
                    o.name == e && (1 == o.one ? 0 == o.fired && (a.events[n].fired = !0, o.handler.call(this, a, t)) : o.handler.call(this, a, t))
                }
            },
            addEvent: function(e, t, n) {
                a.events.push({
                    name: e,
                    handler: t,
                    one: n,
                    fired: !1
                })
            }
        };
    return a.setDefaults = function(e) {
        i = e
    }, a.show = function() {
        return l.show()
    }, a.hide = function() {
        return l.hide()
    }, a.toggle = function() {
        return l.toggle()
    }, a.isPersistent = function() {
        return l.isPersistent()
    }, a.isShown = function() {
        return l.isShown()
    }, a.setContent = function(e) {
        return l.setContent(e)
    }, a.on = function(e, t) {
        return l.addEvent(e, t)
    }, a.one = function(e, t) {
        return l.addEvent(e, t, !0)
    }, l.construct.apply(a, [t]), a
}
};

mUtil.on(document, '[m-dropdown-toggle="click"] .m-dropdown__toggle', "click", function(e) {
var t = this.closest(".m-dropdown");
t && ((mUtil.data(t).has("dropdown") ? mUtil.data(t).get("dropdown") : new mDropdown(t)).toggle(), e.preventDefault())
}), mUtil.on(document, '[m-dropdown-toggle="hover"] .m-dropdown__toggle', "click", function(e) {
if (mUtil.isDesktopDevice()) "#" == mUtil.attr(this, "href") && e.preventDefault();
else if (mUtil.isMobileDevice()) {
    var t = this.closest(".m-dropdown");
    t && ((mUtil.data(t).has("dropdown") ? mUtil.data(t).get("dropdown") : new mDropdown(t)).toggle(), e.preventDefault())
}
}), mUtil.on(document, '[m-dropdown-toggle="hover"]', "mouseover", function(e) {
mUtil.isDesktopDevice() && this && ((mUtil.data(this).has("dropdown") ? mUtil.data(this).get("dropdown") : new mDropdown(this)).show(), e.preventDefault())
}), document.addEventListener("click", function(e) {
var t, a = mUtil.get("body"),
    n = e.target;
if (t = a.querySelectorAll(".m-dropdown.m-dropdown--open"))
    for (var o = 0, i = t.length; o < i; o++) {
        var l = t[o];
        if (!1 === mUtil.data(l).has("dropdown")) return;
        var r = mUtil.data(l).get("dropdown"),
            s = mUtil.find(l, ".m-dropdown__toggle");
        mUtil.hasClass(l, "m-dropdown--disable-close") && (e.preventDefault(), e.stopPropagation()), s && n !== s && !1 === s.contains(n) && !1 === n.contains(s) ? !0 === r.isPersistent() ? !1 === l.contains(n) && r.hide() : r.hide() : !1 === l.contains(n) && r.hide()
    }
});
var mHeader = function(e, t) {
    var a = this,
        n = mUtil.get(e),
        o = mUtil.get("body");
    if (void 0 !== n) {
        var i = {
                classic: !1,
                offset: {
                    mobile: 150,
                    desktop: 200
                },
                minimize: {
                    mobile: !1,
                    desktop: !1
                }
            },
            l = {
                construct: function(e) {
                    return mUtil.data(n).has("header") ? a = mUtil.data(n).get("header") : (l.init(e), l.build(), mUtil.data(n).set("header", a)), a
                },
                init: function(e) {
                    a.events = [], a.options = mUtil.deepExtend({}, i, e)
                },
                build: function() {
                    var e = 0;
                    !1 === a.options.minimize.mobile && !1 === a.options.minimize.desktop || window.addEventListener("scroll", function() {
                        var t, n, i, l = 0;
                        mUtil.isInResponsiveRange("desktop") ? (l = a.options.offset.desktop, t = a.options.minimize.desktop.on, n = a.options.minimize.desktop.off) : mUtil.isInResponsiveRange("tablet-and-mobile") && (l = a.options.offset.mobile, t = a.options.minimize.mobile.on, n = a.options.minimize.mobile.off), i = window.pageYOffset, mUtil.isInResponsiveRange("tablet-and-mobile") && a.options.classic && a.options.classic.mobile || mUtil.isInResponsiveRange("desktop") && a.options.classic && a.options.classic.desktop ? i > l ? (mUtil.addClass(o, t), mUtil.removeClass(o, n)) : (mUtil.addClass(o, n), mUtil.removeClass(o, t)) : (i > l && e < i ? (mUtil.addClass(o, t), mUtil.removeClass(o, n)) : (mUtil.addClass(o, n), mUtil.removeClass(o, t)), e = i)
                    })
                },
                eventTrigger: function(e, t) {
                    for (var n = 0; n < a.events.length; n++) {
                        var o = a.events[n];
                        o.name == e && (1 == o.one ? 0 == o.fired && (a.events[n].fired = !0, o.handler.call(this, a, t)) : o.handler.call(this, a, t))
                    }
                },
                addEvent: function(e, t, n) {
                    a.events.push({
                        name: e,
                        handler: t,
                        one: n,
                        fired: !1
                    })
                }
            };
        return a.setDefaults = function(e) {
            i = e
        }, a.on = function(e, t) {
            return l.addEvent(e, t)
        }, l.construct.apply(a, [t]), a
    }
},
mMenu = function(e, t) {
    var a = this,
        n = !1,
        o = mUtil.get(e),
        i = mUtil.get("body");
    if (o) {
        var l = {
                autoscroll: {
                    speed: 1200
                },
                accordion: {
                    slideSpeed: 200,
                    autoScroll: !0,
                    autoScrollSpeed: 1200,
                    expandAll: !0
                },
                dropdown: {
                    timeout: 500
                }
            },
            r = {
                construct: function(e) {
                    return mUtil.data(o).has("menu") ? a = mUtil.data(o).get("menu") : (r.init(e), r.reset(), r.build(), mUtil.data(o).set("menu", a)), a
                },
                init: function(e) {
                    a.events = [], a.eventHandlers = {}, a.options = mUtil.deepExtend({}, l, e), a.pauseDropdownHoverTime = 0, a.uid = mUtil.getUniqueID()
                },
                reload: function() {
                    r.reset(), r.build()
                },
                build: function() {
                    a.eventHandlers.event_1 = mUtil.on(o, ".m-menu__toggle", "click", r.handleSubmenuAccordion), ("dropdown" === r.getSubmenuMode() || r.isConditionalSubmenuDropdown()) && (a.eventHandlers.event_2 = mUtil.on(o, '[m-menu-submenu-toggle="hover"]', "mouseover", r.handleSubmenuDrodownHoverEnter), a.eventHandlers.event_3 = mUtil.on(o, '[m-menu-submenu-toggle="hover"]', "mouseout", r.handleSubmenuDrodownHoverExit), a.eventHandlers.event_4 = mUtil.on(o, '[m-menu-submenu-toggle="click"] > .m-menu__toggle, [m-menu-submenu-toggle="click"] > .m-menu__link .m-menu__toggle', "click", r.handleSubmenuDropdownClick), a.eventHandlers.event_5 = mUtil.on(o, '[m-menu-submenu-toggle="tab"] > .m-menu__toggle, [m-menu-submenu-toggle="tab"] > .m-menu__link .m-menu__toggle', "click", r.handleSubmenuDropdownTabClick)), a.eventHandlers.event_6 = mUtil.on(o, ".m-menu__item:not(.m-menu__item--submenu) > .m-menu__link:not(.m-menu__toggle):not(.m-menu__link--toggle-skip)", "click", r.handleLinkClick)
                },
                reset: function() {
                    mUtil.off(o, "click", a.eventHandlers.event_1), mUtil.off(o, "mouseover", a.eventHandlers.event_2), mUtil.off(o, "mouseout", a.eventHandlers.event_3), mUtil.off(o, "click", a.eventHandlers.event_4), mUtil.off(o, "click", a.eventHandlers.event_5), mUtil.off(o, "click", a.eventHandlers.event_6)
                },
                getSubmenuMode: function(e) {
                    return mUtil.isInResponsiveRange("desktop") ? e && mUtil.hasAttr(e, "m-menu-submenu-toggle") ? mUtil.attr(e, "m-menu-submenu-toggle") : mUtil.isset(a.options.submenu, "desktop.state.body") ? mUtil.hasClass(i, a.options.submenu.desktop.state.body) ? a.options.submenu.desktop.state.mode : a.options.submenu.desktop.default : mUtil.isset(a.options.submenu, "desktop") ? a.options.submenu.desktop : void 0 : mUtil.isInResponsiveRange("tablet") && mUtil.isset(a.options.submenu, "tablet") ? a.options.submenu.tablet : !(!mUtil.isInResponsiveRange("mobile") || !mUtil.isset(a.options.submenu, "mobile")) && a.options.submenu.mobile
                },
                isConditionalSubmenuDropdown: function() {
                    return !(!mUtil.isInResponsiveRange("desktop") || !mUtil.isset(a.options.submenu, "desktop.state.body"))
                },
                handleLinkClick: function(e) {
                    !1 === r.eventTrigger("linkClick", this) && e.preventDefault(), ("dropdown" === r.getSubmenuMode(this) || r.isConditionalSubmenuDropdown()) && r.handleSubmenuDropdownClose(e, this)
                },
                handleSubmenuDrodownHoverEnter: function(e) {
                    "accordion" !== r.getSubmenuMode(this) && !1 !== a.resumeDropdownHover() && ("1" == this.getAttribute("data-hover") && (this.removeAttribute("data-hover"), clearTimeout(this.getAttribute("data-timeout")), this.removeAttribute("data-timeout")), r.showSubmenuDropdown(this))
                },
                handleSubmenuDrodownHoverExit: function(e) {
                    if (!1 !== a.resumeDropdownHover() && "accordion" !== r.getSubmenuMode(this)) {
                        var t = this,
                            n = a.options.dropdown.timeout,
                            o = setTimeout(function() {
                                "1" == t.getAttribute("data-hover") && r.hideSubmenuDropdown(t, !0)
                            }, n);
                        t.setAttribute("data-hover", "1"), t.setAttribute("data-timeout", o)
                    }
                },
                handleSubmenuDropdownClick: function(e) {
                    if ("accordion" !== r.getSubmenuMode(this)) {
                        var t = this.closest(".m-menu__item");
                        "accordion" != t.getAttribute("m-menu-submenu-mode") && (!1 === mUtil.hasClass(t, "m-menu__item--hover") ? (mUtil.addClass(t, "m-menu__item--open-dropdown"), r.showSubmenuDropdown(t)) : (mUtil.removeClass(t, "m-menu__item--open-dropdown"), r.hideSubmenuDropdown(t, !0)), e.preventDefault())
                    }
                },
                handleSubmenuDropdownTabClick: function(e) {
                    if ("accordion" !== r.getSubmenuMode(this)) {
                        var t = this.closest(".m-menu__item");
                        "accordion" != t.getAttribute("m-menu-submenu-mode") && (0 == mUtil.hasClass(t, "m-menu__item--hover") && (mUtil.addClass(t, "m-menu__item--open-dropdown"), r.showSubmenuDropdown(t)), e.preventDefault())
                    }
                },
                handleSubmenuDropdownClose: function(e, t) {
                    if ("accordion" !== r.getSubmenuMode(t)) {
                        var a = o.querySelectorAll(".m-menu__item.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)");
                        if (a.length > 0 && !1 === mUtil.hasClass(t, "m-menu__toggle") && 0 === t.querySelectorAll(".m-menu__toggle").length)
                            for (var n = 0, i = a.length; n < i; n++) r.hideSubmenuDropdown(a[0], !0)
                    }
                },
                handleSubmenuAccordion: function(e, t) {
                    var n, o = t || this;
                    if ("dropdown" === r.getSubmenuMode(t) && (n = o.closest(".m-menu__item")) && "accordion" != n.getAttribute("m-menu-submenu-mode")) e.preventDefault();
                    else {
                        var i = o.closest(".m-menu__item"),
                            l = mUtil.child(i, ".m-menu__submenu, .m-menu__inner");
                        if (!mUtil.hasClass(o.closest(".m-menu__item"), "m-menu__item--open-always") && i && l) {
                            e.preventDefault();
                            var s = a.options.accordion.slideSpeed;
                            if (!1 === mUtil.hasClass(i, "m-menu__item--open")) {
                                if (!1 === a.options.accordion.expandAll) {
                                    var d = o.closest(".m-menu__nav, .m-menu__subnav"),
                                        c = mUtil.children(d, ".m-menu__item.m-menu__item--open.m-menu__item--submenu:not(.m-menu__item--expanded):not(.m-menu__item--open-always)");
                                    if (d && c)
                                        for (var m = 0, u = c.length; m < u; m++) {
                                            var p = c[0],
                                                f = mUtil.child(p, ".m-menu__submenu");
                                            f && mUtil.slideUp(f, s, function() {
                                                mUtil.removeClass(p, "m-menu__item--open")
                                            })
                                        }
                                }
                                mUtil.slideDown(l, s, function() {
                                    r.scrollToItem(o)
                                }), mUtil.addClass(i, "m-menu__item--open")
                            } else mUtil.slideUp(l, s, function() {
                                r.scrollToItem(o)
                            }), mUtil.removeClass(i, "m-menu__item--open")
                        }
                    }
                },
                scrollToItem: function(e) {
                    mUtil.isInResponsiveRange("desktop") && a.options.accordion.autoScroll && "1" !== o.getAttribute("m-menu-scrollable") && mUtil.scrollToCenter(e, a.options.accordion.autoScrollSpeed)
                },
                hideSubmenuDropdown: function(e, t) {
                    t && (mUtil.removeClass(e, "m-menu__item--hover"), mUtil.removeClass(e, "m-menu__item--active-tab")), e.removeAttribute("data-hover"), e.getAttribute("m-menu-dropdown-toggle-class") && mUtil.removeClass(i, e.getAttribute("m-menu-dropdown-toggle-class"));
                    var a = e.getAttribute("data-timeout");
                    e.removeAttribute("data-timeout"), clearTimeout(a)
                },
                showSubmenuDropdown: function(e) {
                    var t = o.querySelectorAll(".m-menu__item--submenu.m-menu__item--hover, .m-menu__item--submenu.m-menu__item--active-tab");
                    if (t)
                        for (var a = 0, n = t.length; a < n; a++) {
                            var l = t[a];
                            e !== l && !1 === l.contains(e) && !1 === e.contains(l) && r.hideSubmenuDropdown(l, !0)
                        }
                    r.adjustSubmenuDropdownArrowPos(e), mUtil.addClass(e, "m-menu__item--hover"), e.getAttribute("m-menu-dropdown-toggle-class") && mUtil.addClass(i, e.getAttribute("m-menu-dropdown-toggle-class"))
                },
                createSubmenuDropdownClickDropoff: function(e) {
                    var t, a = (t = mUtil.child(e, ".m-menu__submenu") ? mUtil.css(t, "z-index") : 0) - 1,
                        n = document.createElement('<div class="m-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + a + '"></div>');
                    i.appendChild(n), mUtil.addEvent(n, "click", function(t) {
                        t.stopPropagation(), t.preventDefault(), mUtil.remove(this), r.hideSubmenuDropdown(e, !0)
                    })
                },
                adjustSubmenuDropdownArrowPos: function(e) {
                    var t = mUtil.child(e, ".m-menu__submenu"),
                        a = mUtil.child(t, ".m-menu__arrow.m-menu__arrow--adjust");
                    if (mUtil.child(t, ".m-menu__subnav"), a) {
                        var n = 0;
                        mUtil.child(e, ".m-menu__link"), mUtil.hasClass(t, "m-menu__submenu--classic") || mUtil.hasClass(t, "m-menu__submenu--fixed") ? mUtil.hasClass(t, "m-menu__submenu--right") ? (n = mUtil.outerWidth(e) / 2, mUtil.hasClass(t, "m-menu__submenu--pull") && (n += Math.abs(parseFloat(mUtil.css(t, "margin-right")))), n = parseInt(mUtil.css(t, "width")) - n) : mUtil.hasClass(t, "m-menu__submenu--left") && (n = mUtil.outerWidth(e) / 2, mUtil.hasClass(t, "m-menu__submenu--pull") && (n += Math.abs(parseFloat(mUtil.css(t, "margin-left"))))) : (mUtil.hasClass(t, "m-menu__submenu--center") || mUtil.hasClass(t, "m-menu__submenu--full")) && (n = mUtil.offset(e).left - (mUtil.getViewPort().width - parseInt(mUtil.css(t, "width"))) / 2, n += mUtil.outerWidth(e) / 2), mUtil.css(a, "left", n + "px")
                    }
                },
                pauseDropdownHover: function(e) {
                    var t = new Date;
                    a.pauseDropdownHoverTime = t.getTime() + e
                },
                resumeDropdownHover: function() {
                    return (new Date).getTime() > a.pauseDropdownHoverTime
                },
                resetActiveItem: function(e) {
                    for (var t, n, i = 0, l = (t = o.querySelectorAll(".m-menu__item--active")).length; i < l; i++) {
                        var r = t[0];
                        mUtil.removeClass(r, "m-menu__item--active"), mUtil.hide(mUtil.child(r, ".m-menu__submenu"));
                        for (var s = 0, d = (n = mUtil.parents(r, ".m-menu__item--submenu")).length; s < d; s++) {
                            var c = n[i];
                            mUtil.removeClass(c, "m-menu__item--open"), mUtil.hide(mUtil.child(c, ".m-menu__submenu"))
                        }
                    }
                    if (!1 === a.options.accordion.expandAll && (t = o.querySelectorAll(".m-menu__item--open")))
                        for (i = 0, l = t.length; i < l; i++) mUtil.removeClass(n[0], "m-menu__item--open")
                },
                setActiveItem: function(e) {
                    r.resetActiveItem(), mUtil.addClass(e, "m-menu__item--active");
                    for (var t = mUtil.parents(e, ".m-menu__item--submenu"), a = 0, n = t.length; a < n; a++) mUtil.addClass(t[a], "m-menu__item--open")
                },
                getBreadcrumbs: function(e) {
                    var t, a = [],
                        n = mUtil.child(e, ".m-menu__link");
                    a.push({
                        text: t = mUtil.child(n, ".m-menu__link-text") ? t.innerHTML : "",
                        title: n.getAttribute("title"),
                        href: n.getAttribute("href")
                    });
                    for (var o = mUtil.parents(e, ".m-menu__item--submenu"), i = 0, l = o.length; i < l; i++) {
                        var r = mUtil.child(o[i], ".m-menu__link");
                        a.push({
                            text: t = mUtil.child(r, ".m-menu__link-text") ? t.innerHTML : "",
                            title: r.getAttribute("title"),
                            href: r.getAttribute("href")
                        })
                    }
                    return a.reverse()
                },
                getPageTitle: function(e) {
                    return mUtil.child(e, ".m-menu__link-text") ? (void 0).innerHTML : ""
                },
                eventTrigger: function(e, t) {
                    for (var n = 0; n < a.events.length; n++) {
                        var o = a.events[n];
                        o.name == e && (1 == o.one ? 0 == o.fired && (a.events[n].fired = !0, o.handler.call(this, a, t)) : o.handler.call(this, a, t))
                    }
                },
                addEvent: function(e, t, n) {
                    a.events.push({
                        name: e,
                        handler: t,
                        one: n,
                        fired: !1
                    })
                }
            };
        return a.setDefaults = function(e) {
            l = e
        }, a.setActiveItem = function(e) {
            return r.setActiveItem(e)
        }, a.reload = function() {
            return r.reload()
        }, a.getBreadcrumbs = function(e) {
            return r.getBreadcrumbs(e)
        }, a.getPageTitle = function(e) {
            return r.getPageTitle(e)
        }, a.getSubmenuMode = function(e) {
            return r.getSubmenuMode(e)
        }, a.hideDropdown = function(e) {
            r.hideSubmenuDropdown(e, !0)
        }, a.pauseDropdownHover = function(e) {
            r.pauseDropdownHover(e)
        }, a.resumeDropdownHover = function() {
            return r.resumeDropdownHover()
        }, a.on = function(e, t) {
            return r.addEvent(e, t)
        }, a.one = function(e, t) {
            return r.addEvent(e, t, !0)
        }, r.construct.apply(a, [t]), mUtil.addResizeHandler(function() {
            n && a.reload()
        }), n = !0, a
    }
};


var mOffcanvas = function(e, t) {
    var a = this,
        n = mUtil.get(e),
        o = mUtil.get("body");

},


mQuicksearch = function(e, t) {
    var a = this,
        n = mUtil.get(e),
        o = mUtil.get("body");
   
},


mWizard = function(e, t) {
    var a = this,
        n = mUtil.get(e);
   
};

var mLayout = function() {
var e, t, a, n, o;
return {
    init: function() {
        this.initHeader(), this.initAside()
    },
    initHeader: function() {
        var t, a, o;
        a = mUtil.get("m_header"), o = {
            offset: {},
            minimize: {}
        },  e = new mMenu("m_header_menu", {
            submenu: {
                desktop: "dropdown",
                tablet: "accordion",
                mobile: "accordion"
            }
        })
    },
   
    
    closeMobileAsideMenuOffcanvas: function() {
        mUtil.isMobileDevice() && a.hide()
    },
    closeMobileHorMenuOffcanvas: function() {
        mUtil.isMobileDevice() && n.hide()
    }
}
}();
$(document).ready(function() {
!1 === mUtil.isAngularVersion() && mLayout.init()
});