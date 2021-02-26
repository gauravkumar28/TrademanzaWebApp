var $jscomp$this = this;
var openNav = function () {};
var closeNav = function () {};
var openRecommendedMenu = function () {
    $(".recommended_menu").addClass("expanded");
    $(".recommended_menu_items").show()
};
$(document).ready(function () {
    var sideNav = $("#mySidenav");
    var sideNavWidth = sideNav.width();
    var layer = $(".layer");
    var content = $("#content");
    var body = document.body;
    openNav = function () {
        sideNav.css("left", 0);
        body.style.overflow = "hidden";
        layer.show()
    };
    closeNav = function () {
        sideNav.css("left", -sideNavWidth);
        body.style.overflow = "";
        layer.hide();
        content.off("touchmove").off("touchend")
    };
    openRecommendedMenu();
    layer.on("touchend", closeNav);
    content.on("touchstart", function (ev) {
        var touch = ev.touches[0] || ev.changedTouches[0];
        if (touch.pageX <= 20) {
            $(this).on("touchmove", function (ev) {
                var touch = ev.touches[0] || ev.changedTouches[0];
                var pos = touch.pageX - sideNavWidth;
                if (pos > 0) pos = 0;
                sideNav.css("left", pos)
            });
            $(this).on("touchend", function (ev) {
                var touch = ev.touches[0] || ev.changedTouches[0];
                if (touch.pageX >= sideNavWidth / 4) {
                    layer.show();
                    sideNav.css("left", 0)
                } else closeNav()
            })
        }
    });
    $(function () {
        $(".dropdown-hover").hover(function () {
            $(".dropdown-menu", this).stop(true, true).show();
            $(this).toggleClass("open")
        }, function () {
            $(".dropdown-menu",
                this).stop(true, true).hide();
            $(this).toggleClass("open")
        })
    });
    $(function () {
        $(".profile-hover").hover(function () {
            $(".profile-dropdown", this).stop(true, true).show();
            $(this).toggleClass("open")
        }, function () {
            $(".profile-dropdown", this).stop(true, true).hide();
            $(this).toggleClass("open")
        })
    });
    $(function () {
        $(".ham_title").click(function () {
            var ham_menu_items = $(this).parent();
            ham_menu_items.toggleClass("expanded");
            ham_menu_items.find(".ham_submenu_items").toggle()
        })
    });
    if ($("#ribbon").length) {
        var _this_ = $("#ribbon");
        if (_this_.data("ribbon-type") === "timer") {
            var timerEnded = false;
            var timer = setInterval(function () {
                var remainingTime = getRemainingTime(_this_.data("ribbon-end-datetime"));
                if (remainingTime === "00h: 00m: 00s") timerEnded = true;
                if (!timerEnded) _this_.find("#timer").html(remainingTime);
                else {
                    _this_.find("#timer").html("00h: 00m: 00s");
                    clearInterval(timer);
                    setTimeout(function () {
                        _this_.parent().slideUp()
                    }, 2E3)
                }
            }, 1E3)
        }
    }
    var getRemainingTime = function (end_datetime) {
        var now = (new Date).getTime();
        var timeDifference = end_datetime *
            1E3 - now;
        return breakTimeDifference(timeDifference)
    };
    var breakTimeDifference = function (timeDifference) {
        var _second = 1E3;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var days = Math.floor(timeDifference / _day);
        var hours = Math.floor(timeDifference % _day / _hour);
        var minutes = Math.floor(timeDifference % _hour / _minute);
        var seconds = Math.floor(timeDifference % _minute / _second);
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        var days_d = days <= 0 ? "" : days + "d: ";
        return days_d + hours + "h: " + minutes + "m: " + seconds + "s"
    }
});
(function (global, factory) {
    factory(global.ReactCommon = {})
})(this, function (exports) {
    var COOKIE_NAMES = {
        CSRF: "csrf_cookie_name"
    };
    Object.freeze(COOKIE_NAMES);
    var MODAL_MODES = {
        SUCCESS: 1,
        ERROR: 0
    };
    Object.freeze(MODAL_MODES);
    var ENV = {
        AXIOS_REQUEST_INTERCEPT: 0,
        AXIOS_RESPONSE_INTERCEPT: 0,
        CONSOLE_LOG: 0
    };
    Object.freeze(ENV);
    var showNotification = function (message, mode) {
        var content = "<div>" + message + "</div>";
        var ribbonDiv = $("#error_notification");
        ribbonDiv.removeClass("success").removeClass("error");
        console.log(mode);
        var className = mode === MODAL_MODES.SUCCESS ? "success" : "error";
        ribbonDiv.addClass(className).html(content).slideDown(500);
        ribbonDiv.parent().removeClass("d-none");
        setTimeout(function () {
            ribbonDiv.slideUp(300, function () {
                return $($jscomp$this).addClass("d-none")
            })
        }, 3E3)
    };
    var logger = function (data) {
        if (ENV.CONSOLE_LOG) console.log(data)
    };
    var errorHandler = function (e) {
        try {
            if (e.status === 599) {
                var response = {};
                if (typeof e.data == "undefined" && typeof e.responseText != "undefined") response = JSON.parse(e.responseText);
                else response =
                    e.data;
                if (response.code === 599 && response.message === "redirect" && typeof response.url != "undefined") {
                    var url = encodeURIComponent(response.url);
                    $.ajax("/ddos/index/ajax_" + url, {
                        data: {},
                        success: function () {},
                        error: function () {},
                        type: "POST"
                    });
                    return false
                }
            } else if (e.status === 0) console.log("xhr cancelled");
            else showNotification("Please try again after some time!", MODAL_MODES.ERROR)
        } catch (ex) {
            showNotification("Please try again after some time!", MODAL_MODES.ERROR)
        }
    };
    var getCookie = function (cname) {
        var name = cname +
            "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
        }
        return ""
    };
    var isEmailValid = function (str) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str.toLowerCase())
    };
    var isPhoneValid = function (str) {
        var re =
            /^[0-9]{10}$/;
        return re.test(str)
    };
    var isNameValid = function (str) {
        var re = /^[a-zA-Z ]+$/;
        return re.test(str.toLowerCase())
    };
    var isCountryCodeValid = function (str) {
        var re = /^(\+?\d{1,3}|\d{1,4})$/;
        return re.test(str)
    };
    var capitalize = function (s) {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1)
    };
    var showModal = function (message, MODE) {
        var modalContainer = $("#info-modal");
        var successModalContainer = $("#info-success-modal");
        switch (MODE) {
            case MODAL_MODES.ERROR:
                $("#info-modal-body").html('<div class="col--2"><i class="fa fa-times-circle err-icon"/></div> <div class="col err-data my-auto ">' +
                    message + "</div>");
                modalContainer.modal("show");
                break;
            case MODAL_MODES.SUCCESS:
                $("#info-success-modal-body").html('<div class="col success-data my-auto ">' + message + "</div>");
                successModalContainer.modal("show");
                break
        }
    };
    var showRibbon = function (message, mode) {
        console.log(message)
    };
    var globalAxios = axios.create();
    globalAxios.interceptors.response.use(function (response) {
        if (ENV.AXIOS_RESPONSE_INTERCEPT) console.log({
            type: "Response",
            url: response.config.url,
            method: response.config.method,
            headers: response.headers,
            data: response.data
        });
        return response
    }, function (error) {
        errorHandler(error);
        return Promise.reject({
            message: "ERROR"
        })
    });
    globalAxios.interceptors.request.use(function (config) {
        if (ENV.AXIOS_REQUEST_INTERCEPT) console.log({
            type: "Request",
            url: config.url,
            method: config.method,
            headers: config.headers,
            data: config.data
        });
        return config
    }, function (error) {
        return Promise.reject(error)
    });
    exports.COOKIE_NAMES = COOKIE_NAMES;
    exports.MODAL_MODES = MODAL_MODES;
    exports.getCookie = getCookie;
    exports.isEmailValid = isEmailValid;
    exports.isPhoneValid =
        isPhoneValid;
    exports.isNameValid = isNameValid;
    exports.isCountryCodeValid = isCountryCodeValid;
    exports.capitalize = capitalize;
    exports.showModal = showModal;
    exports.showRibbon = showRibbon;
    exports.showNotification = showNotification;
    exports.logger = logger;
    exports.globalAxios = globalAxios
});
$("document").ready(function () {
    var isMobileDevice = $(window).width() <= 768;
    setTimeout(function () {
        $(window).bind("load", function () {
            if ($(location).attr("hash") === "#help_center") {
                $("#faqs-content-container").collapse("show");
                $("html, body").animate({
                    scrollTop: $("#course-faq-section").offset().top - $(".signup-nav").height() + 30
                }, 500)
            }
            return
        })
    }, 100);
    $(".signup-btn").on("click", function () {
        if (document.getElementById("signup-form")) {
            $("html, body").animate({
                scrollTop: $(window).width() < 1200 ? $($(this).attr("href")).offset().top -
                    $(".signup-nav").height() - 40 : $($(this).attr("href")).offset().top - 20
            }, 500);
            return false
        }
        return true
    });
    $(".signup-nav .nav-item").on("click", function () {
        $(window).off("scroll.handleScroll");
        var topMenu = $(".signup-nav");
        topMenu.find(".nav-item").removeClass("active");
        $(this).addClass("active");
        if (isMobileDevice) {
            var topMenuScrollLeft = topMenu.scrollLeft();
            var topMenuWidth = topMenu.width();
            var activeElementOffsetLeft = $(this).offset().left;
            var activeElementWidth = $(this).outerWidth();
            if (activeElementOffsetLeft <
                0) topMenu.stop().animate({
                scrollLeft: topMenuScrollLeft + activeElementOffsetLeft
            }, 200);
            else if (activeElementOffsetLeft + activeElementWidth > topMenuWidth) topMenu.stop().animate({
                scrollLeft: topMenuScrollLeft + activeElementOffsetLeft + activeElementWidth - topMenuWidth
            }, 200)
        }
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - topMenu.outerHeight()
        }, 500, function () {
            $(window).on("scroll.handleScroll", handleScroll)
        });
        return false
    });
    var pageSections = $($(".content-container").children("section").get().reverse());
    var previousPageSectionId = "banner-section";
    var pageSectionTimer = new Date;
    var topMenu = $(".signup-nav");
    var bottomMenu = $(".bottom-nav");
    var topMenuHeight = topMenu.outerHeight() + 15;
    var offsetThreshold = isMobileDevice ? $("#course-highlights-section").offset().top : 300;

    function trackPageSections(currentSectionId, previousSectionId) {
        if (currentSectionId !== previousSectionId) {
            var section = previousSectionId;
            previousPageSectionId = currentSectionId;
            var seconds = (new Date - pageSectionTimer) / 1E3;
            pageSectionTimer = new Date;
            if (seconds >= 2) window.dataLayer.push({
                "event": "timeSpentOnEachSection",
                "section": section,
                "time": seconds
            })
        }
    }
    var handleScroll = function () {
        if ($(this).scrollTop() + topMenuHeight < offsetThreshold) {
            if (topMenu.hasClass("show")) topMenu.removeClass("show").addClass("hide");
            if (bottomMenu.hasClass("show")) {
                bottomMenu.removeClass("show").addClass("hide");
                $("#footer").removeClass("footer-mb")
            }
        } else {
            if (topMenu.hasClass("hide")) topMenu.removeClass("hide").addClass("show");
            if (bottomMenu.hasClass("hide")) {
                bottomMenu.removeClass("hide").addClass("show");
                $("#footer").addClass("footer-mb")
            }
            var menuItems = topMenu.find(".nav-item");
            var scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) return item
            });
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop) return this
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            menuItems.not("[href='#" + id + "']").removeClass("active");
            var activeElement = menuItems.filter("[href='#" + id + "']");
            activeElement.addClass("active");
            if (isMobileDevice && activeElement.offset()) {
                var topMenuScrollLeft = topMenu.scrollLeft();
                var topMenuWidth = topMenu.width();
                var activeElementOffsetLeft = activeElement.offset().left;
                var activeElementWidth = activeElement.outerWidth();
                if (activeElementOffsetLeft < 0) topMenu.stop().animate({
                    scrollLeft: topMenuScrollLeft + activeElementOffsetLeft
                }, 100);
                else if (activeElementOffsetLeft + activeElementWidth > topMenuWidth) topMenu.stop().animate({
                        scrollLeft: topMenuScrollLeft + activeElementOffsetLeft + activeElementWidth - topMenuWidth
                    },
                    100)
            }
        }
    };
    $(window).on("scroll.handleScroll", handleScroll);
    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        pageSections.each(function () {
            if ($(this).offset().top < fromTop) {
                trackPageSections(this.id, previousPageSectionId);
                return false
            }
        })
    });
    var customCarousel = $(".custom-carousel");
    customCarousel.touch();
    customCarousel.on("swipeLeft", function () {
        $(this).find(".control.right").trigger("click")
    });
    customCarousel.on("swipeRight", function () {
        $(this).find(".control.left").trigger("click")
    });
    $(".custom-carousel .control").on("click", function () {
        if ($(this).hasClass("disabled")) return;
        var slider = $(this).parents(".custom-carousel").find(".slider");
        if (slider.hasClass("in-transition")) return;
        else slider.addClass("in-transition");
        var items = slider.find(".slider-item");
        var totalItems = items.length;
        var sliderWidth = slider.outerWidth();
        var itemWidth = items.first().outerWidth(true);
        var itemsPerSlide = Math.round(sliderWidth / itemWidth);
        var currentLeftOffset = parseInt(-items.first().position().left);
        var currentItemIndex =
            Math.round(currentLeftOffset / itemWidth) + 1;
        if ($(this).hasClass("left")) {
            var newItemIndex = currentItemIndex - 1;
            var leftOffset = currentLeftOffset - itemWidth
        } else {
            if (currentItemIndex + (itemsPerSlide - 1) === totalItems) return;
            var newItemIndex = currentItemIndex + 1;
            var leftOffset = currentLeftOffset + itemWidth
        }
        if (newItemIndex > 1) slider.parent().find(".control.left").removeClass("disabled");
        else slider.parent().find(".control.left").addClass("disabled");
        if (newItemIndex + (itemsPerSlide - 1) >= totalItems) slider.parent().find(".control.right").addClass("disabled");
        else slider.parent().find(".control.right").removeClass("disabled");
        var activeIndicator = slider.parent().find(".active-indicator");
        activeIndicator.animate({
            left: parseInt(newItemIndex - 1) * 20 + "px"
        }, 600);
        items.animate({
            left: -leftOffset
        }, 600, function () {
            slider.removeClass("in-transition")
        })
    });
    $("#demo-video-modal").on("show.bs.modal", function (event) {
        var button = $(event.relatedTarget);
        var vimeo_id = button.data("demo-video-id");
        $(this).find("#vimeo-video").attr("src", "https://player.vimeo.com/video/" + vimeo_id +
            "?autoplay=1&autopause=1&quality=auto")
    });
    if (isMobileDevice) $("#demo-video-modal").attr("data-backdrop", "static");
    $("#demo-video-modal").on("hide.bs.modal", function (event) {
        var button = $(event.relatedTarget);
        $(this).find("#vimeo-video").attr("src", "")
    });
    (function () {
        var elm = document.querySelector(".pinch");
        var hammerInstance = new Hammer(elm, {});
        hammerInstance.get("pinch").set({
            enable: true
        });
        var posX = 0,
            posY = 0,
            scale = 1,
            last_scale = 1,
            last_posX = 0,
            last_posY = 0,
            max_pos_x = 0,
            max_pos_y = 0,
            transform = "",
            el = elm;
        hammerInstance.on("pan pinch panend pinchend",
            function (ev) {
                if (scale != 1) {
                    posX = last_posX + ev.deltaX;
                    posY = last_posY + ev.deltaY;
                    max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
                    max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
                    if (posX > max_pos_x) posX = max_pos_x;
                    if (posX < -max_pos_x) posX = -max_pos_x;
                    if (posY > max_pos_y) posY = max_pos_y;
                    if (posY < -max_pos_y) posY = -max_pos_y
                }
                if (ev.type === "pinch") scale = Math.max(.999, Math.min(last_scale * ev.scale, 4));
                else if (ev.type === "pinchend") last_scale = scale;
                else if (ev.type === "panend") {
                    last_posX = posX < max_pos_x ? posX : max_pos_x;
                    last_posY =
                        posY < max_pos_y ? posY : max_pos_y
                }
                if (scale != 1) transform = "translate3d(" + posX + "px," + posY + "px, 0) " + "scale3d(" + scale + ", " + scale + ", 1)";
                if (transform) el.style.webkitTransform = transform
            });
        $("#certificate-modal").on("hide.bs.modal", function () {
            posX = 0;
            posY = 0;
            scale = 1;
            last_scale = 1;
            last_posX = 0;
            last_posY = 0;
            max_pos_x = 0;
            max_pos_y = 0;
            transform = "";
            el = elm;
            $(this).find(".certificate-image-container .pinch").css({
                "transform": "translate3d(0,0,0) scale3d(1,1,1)"
            })
        })
    })();
    (function lazyLoadingImgs() {
        var lazyLoadedImgPlaceholders =
            document.querySelectorAll(".lazy-load");
        var config = {
            threshold: 0,
            rootMargin: "1200px"
        };
        if (!("IntersectionObserver" in window)) {
            lazyLoadedImgPlaceholders.forEach(function (placeHolder) {
                setTimeout(function () {
                    preLoadImage(placeHolder)
                }, 0)
            });
            return
        }
        var observer = new IntersectionObserver(function load(entries, observer) {
            entries.forEach(function (entry) {
                var src = entry.target.getAttribute("data-src");
                if (entry.isIntersecting)
                    if (src.includes("teacher") || src.includes("feedback")) lazyLoadedImgPlaceholders.forEach(function (placeHolder) {
                        if (placeHolder.getAttribute("data-src").includes("teacher") ||
                            placeHolder.getAttribute("data-src").includes("feedback") && placeHolder != entry.target) setTimeout(function () {
                            preLoadImage(placeHolder, observer)
                        }, 0)
                    });
                    else setTimeout(function () {
                        preLoadImage(entry.target, observer)
                    }, 0)
            })
        }, config);
        lazyLoadedImgPlaceholders.forEach(function (placeHolder) {
            observer.observe(placeHolder)
        });

        function loadImage(img, placeHolder) {
            placeHolder.insertAdjacentElement("beforebegin", img);
            placeHolder.classList.remove("lazy-load");
            placeHolder.remove()
        }

        function preLoadImage(placeHolder, observer) {
            var img =
                new Image;
            img.src = placeHolder.getAttribute("data-src");
            img.classList.add("image");
            img.addEventListener("load", function (event) {
                loadImage(event.target, placeHolder)
            }, {
                once: true
            });
            if (observer) observer.unobserve(placeHolder)
        }
    })()
});

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
        });
        keys.push.apply(keys, symbols)
    }
    return keys
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
    }
    return target
}

function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2
}

function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var SignUpForm = function SignUpForm(props) {
    var FTU_MESSAGE = "Must be at least 6 characters";
    var NOT_FTU_MESSAGE = "Enter Internshala password";
    var GUEST = "guest";
    var API_URLS = {
        verifyCoupon: "/signup/verify_coupon",
        verifyEmail: "/signup/verify_email",
        ftuStatus: "/signup/user_ftu_status",
        signupSubmit: "/signup/signup_submit/"
    };
    var _React$useState = React.useState({
            user_ftu: props.initialData.info.ftu.user_ftu,
            course_ftu: props.initialData.info.ftu.course_ftu,
            discount: props.initialData.info.ftu.discount,
            end: props.initialData.info.ftu.end
        }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        ftu = _React$useState2[0],
        setFtu = _React$useState2[1];
    var _React$useState3 = React.useState({
            base: props.initialData.info.price.base,
            go_to_price: props.initialData.info.price.slab.amount,
            coupon_discount: 0,
            message: props.initialData.info.price.slab ? "Valid till ".concat(props.initialData.info.price.slab.end_date) : "Registration Fee"
        }),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        price = _React$useState4[0],
        setPrice = _React$useState4[1];
    var _React$useState5 =
        React.useState({
            course_url: {
                value: props.course_url,
                error: null
            },
            first_name: {
                value: "",
                error: null
            },
            last_name: {
                value: "",
                error: null
            },
            password: {
                value: "",
                error: null
            },
            email: {
                value: "",
                error: null
            },
            phone_primary: {
                value: props.initialData.info.phone_primary,
                error: null
            },
            country_code: {
                value: "+91",
                error: null
            },
            batch: {
                value: "",
                error: null
            },
            coupon_code: {
                value: props.initialData.info.auto_apply_coupon,
                error: null
            },
            objective_of_learning: {
                value: "",
                error: null
            },
            utm_campaign: {
                value: "",
                error: null
            },
            suggested_email: {
                value: "",
                error: null
            }
        }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        formState = _React$useState6[0],
        setFormState = _React$useState6[1];
    var _React$useState7 = React.useState(true),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        isInternshalaUser = _React$useState8[0],
        setInternshalaUser = _React$useState8[1];
    React.useEffect(function () {
        if (formState.coupon_code.value) verifyCoupon(formState.coupon_code.value);
        if (ftu.course_ftu && ftu.user_ftu) {
            setPrice(_objectSpread({}, price, {
                message: "Valid till today"
            }));
            updateMessageForGlobalDom()
        }
        setInternshalaUser(props.initialData.main_role ===
            "guest")
    }, []);
    var generateBatch = function generateBatch(batchArr) {
        var batches = [];
        batchArr.forEach(function (ele) {
            return batches.push(React.createElement("option", {
                value: ele.id,
                key: ele.id
            }, "Starting ", ele.start_date))
        });
        return batches
    };
    var updateGlobalPriceDom = function updateGlobalPriceDom(p) {
        var elements = document.getElementsByClassName("dynamic-price");
        for (var i = 0; i < elements.length; i++) elements[i].innerHTML = "".concat(p, "/-")
    };
    var updateMessageForGlobalDom = function updateMessageForGlobalDom() {
        var elements =
            document.getElementsByClassName("dynamic-message");
        for (var i = 0; i < elements.length; i++) elements[i].innerHTML = "Valid till today"
    };
    var showEmailInvalid = function showEmailInvalid() {
        return formState.email.error ? React.createElement("small", {
            className: "form-text text-muted"
        }, "Enter a valid email") : ""
    };
    var showPasswordInvalid = function showPasswordInvalid() {
        return formState.password.error ? React.createElement("small", {
            className: "form-text text-muted"
        }, "Enter at least 6 characters") : ""
    };
    var showCouponInvalid =
        function showCouponInvalid() {
            return price.coupon_discount > 0 ? React.createElement("small", {
                className: "form-text coupon-success"
            }, "You saved additional Rs. ", price.coupon_discount, "/-") : formState.coupon_code.error ? React.createElement("small", {
                className: "form-text coupon-err"
            }, "Invalid Coupon") : ""
        };
    var showPhoneInvalid = function showPhoneInvalid() {
        return formState.phone_primary.error ? React.createElement("small", {
            className: "form-text text-muted"
        }, "Enter a valid mobile number") : ""
    };
    var showErrorIconForId =
        function showErrorIconForId(id) {
            return formState[id].error ? React.createElement("span", {
                className: "fa fa-exclamation-circle error-icon",
                "aria-hidden": "true"
            }) : ""
        };
    var handleFieldChange = function handleFieldChange(e) {
        var target = e.target;
        var newFormState = _objectSpread({}, formState);
        newFormState[target.name].value = target.value;
        if (target.name === "email") newFormState["suggested_email"].error = false;
        setFormState(newFormState);
        showSuggestedEmail(target.value.trim())
    };
    var handleFieldBlur = function handleFieldBlur(e) {
        var target =
            e.target;
        if (target.name in formState) {
            var newFormState = _objectSpread({}, formState);
            switch (target.name) {
                case "email":
                    newFormState[target.name].error = !ReactCommon.isEmailValid(target.value);
                    handleEmailBlur(target.value.trim());
                    break;
                case "password":
                    newFormState[target.name].error = target.value.toString().length < 6;
                    break;
                case "phone_primary":
                    newFormState[target.name].error = !ReactCommon.isPhoneValid(target.value);
                    break;
                case "first_name":
                case "last_name":
                    newFormState[target.name].error = !ReactCommon.isNameValid(target.value);
                    break;
                case "coupon_code":
                    newFormState[target.name].error = false;
                    handleCouponBlur(e);
                    break;
                case "country_code":
                    newFormState[target.name].error = !ReactCommon.isCountryCodeValid(target.value);
                    break;
                default:
                    newFormState[target.name].error = target.value.length < 1
            }
            newFormState[target.name].value = target.value;
            setFormState(newFormState)
        }
    };
    var handleCouponBlur = function handleCouponBlur(e) {
        var value = e.target.value;
        verifyCoupon(value)
    };
    var showSuggestedEmail = function showSuggestedEmail(email) {
        var regex = /^[a-zA-Z0-9]+(\.{1}[a-zA-Z0-9]*)+$/;
        if (email.split("@").length == 2 && email.split("@")[0].length > 0 && email.split("@")[1].length < 20) {
            var domain = email.split("@")[1];
            if (domain != "" && domain.match(regex)) {
                domain = domain.toLowerCase();
                var domainList = ["gmail.com", "hotmail.com", "yahoo.com", "yahoo.co.in", "outlook.com"];
                var domainSuffix = domain.split(".");
                if (domainSuffix.length == 2) {
                    if (domainSuffix[1].length < 3) return
                } else if (domainSuffix.length == 3)
                    if (domainSuffix[1].length < 2 || domainSuffix[2].length < 2) return;
                var stringDistanceArray = [];
                for (var i = 0; i < domainList.length; i++) {
                    stringDistanceArray[i] =
                        lev(domain, domainList[i]);
                    if (stringDistanceArray[i] === 0) return
                }
                var minimumLevDistanceIndex = stringDistanceArray.indexOf(Math.min.apply(Math, stringDistanceArray));
                if (stringDistanceArray[minimumLevDistanceIndex] <= 3) setSuggestedEmail(email, domainList[minimumLevDistanceIndex])
            }
        }
    };
    var lev = function lev(a, b) {
        if (a.length == 0) return b.length;
        if (b.length == 0) return a.length;
        var matrix = [];
        var i;
        for (i = 0; i <= b.length; i++) matrix[i] = [i];
        var j;
        for (j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (i = 1; i <= b.length; i++)
            for (j = 1; j <=
                a.length; j++)
                if (b.charAt(i - 1) == a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
                else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
        return matrix[b.length][a.length]
    };
    var setSuggestedEmail = function setSuggestedEmail(email, suggestedDomainName) {
        var newFormState = _objectSpread({}, formState);
        newFormState["suggested_email"].value = email.split("@")[0].length <= 26 ? email.split("@")[0] + "@" + suggestedDomainName : "@" + suggestedDomainName;
        newFormState["suggested_email"].error = true;
        setFormState(newFormState)
    };
    var handleSuggestion = function handleSuggestion() {
        var newFormState = _objectSpread({}, formState);
        var email = formState["email"].value;
        email.split("@")[0].length > 26 ? newFormState["email"].value = email.split("@")[0] + formState["suggested_email"].value : newFormState["email"].value = formState["suggested_email"].value;
        newFormState["suggested_email"].value = "";
        newFormState["suggested_email"].error = false;
        setFormState(newFormState);
        newFormState["email"].error = !ReactCommon.isEmailValid(formState["email"].value);
        handleEmailBlur(formState["email"].value)
    };
    var verifyCoupon = function verifyCoupon(value) {
        if (value.length < 1) {
            setFormState(_objectSpread({}, formState, {
                coupon_code: _objectSpread({}, formState.coupon_code, {
                    error: false
                })
            }));
            setPrice(_objectSpread({}, price, {
                coupon_discount: 0
            }));
            updateGlobalPriceDom(price.go_to_price - ftu.discount);
            return
        }
        var couponData = new FormData;
        couponData.set("coupon", value);
        couponData.set("course_url", props.course_url);
        couponData.set("go_to_price", price.go_to_price - ftu.discount);
        ReactCommon.globalAxios({
            method: "post",
            url: API_URLS.verifyCoupon,
            data: couponData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(function (response) {
            var coupon_discount = 0;
            if (response.data.status === "valid") {
                coupon_discount = response.data["coupon_discount"];
                var coupon_code = _objectSpread({}, formState.coupon_code, {
                    error: false
                });
                setFormState(_objectSpread({}, formState, {
                    coupon_code: coupon_code
                }))
            } else {
                var _coupon_code = _objectSpread({}, formState.coupon_code, {
                    error: true
                });
                setFormState(_objectSpread({}, formState, {
                    coupon_code: _coupon_code
                }))
            }
            setPrice(_objectSpread({}, price, {
                coupon_discount: coupon_discount
            }));
            var final_price = price.go_to_price - ftu.discount - coupon_discount;
            updateGlobalPriceDom(final_price)
        })
    };
    var handleEmailBlur = function handleEmailBlur(email) {
        if (!ReactCommon.isEmailValid(email)) return;
        var userFormData = new FormData;
        userFormData.set("email", email);
        userFormData.set("course_url", window.location.pathname.split("-training")[0].substring(1));
        ReactCommon.globalAxios({
            method: "post",
            url: API_URLS.verifyEmail,
            data: userFormData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(function (response) {
            setInternshalaUser(!response.data.success);
            if (response.data.success && response.data.student) {
                var data = response.data.student;
                setFormState(_objectSpread({}, formState, {
                    first_name: {
                        value: data.first_name,
                        error: false
                    },
                    last_name: {
                        value: data.last_name,
                        error: false
                    },
                    phone_primary: {
                        value: data.phone_primary,
                        error: false
                    }
                }))
            } else if (!response.data.success && response.data.errorMessage)
                if (response.data.errorMessage === "Employer") {
                    ReactCommon.showModal("This email id has already been used to create an employer account on Internshala. Please register with an alternate id to register as a student for the training.",
                        ReactCommon.MODAL_MODES.SUCCESS);
                    var newFormState = _objectSpread({}, formState);
                    newFormState.email = {
                        value: "",
                        error: true
                    };
                    newFormState.suggested_email = {
                        value: "",
                        error: false
                    };
                    setFormState(newFormState)
                } else {
                    ReactCommon.showModal(response.data.errorMessage, ReactCommon.MODAL_MODES.ERROR);
                    var _newFormState = _objectSpread({}, formState);
                    _newFormState.email = {
                        value: "",
                        error: true
                    };
                    _newFormState.suggested_email = {
                        value: "",
                        error: false
                    };
                    setFormState(_newFormState)
                } if (ftu.course_ftu && ftu.user_ftu) ReactCommon.globalAxios({
                method: "get",
                url: API_URLS.ftuStatus
            }).then(function (response) {
                if (response.data.ftu.status == false) {
                    setFtu(_objectSpread({}, ftu, {
                        user_ftu: 0,
                        discount: 0
                    }));
                    document.getElementById("ribbon").innerHTML = "Looks like you are not a first time user. Please write to trainings@internshala.com for any queries.";
                    var ftu_discount = 0;
                    var final_price = price.go_to_price - ftu_discount - price.coupon_discount;
                    updateGlobalPriceDom(final_price)
                }
            })
        })
    };
    var signupSubmit = function signupSubmit() {
        var elements_to_verify = {
            phone_primary: "",
            objective_of_learning: "",
            batch: ""
        };
        if (props.initialData.main_role === GUEST) {
            elements_to_verify.first_name = "";
            elements_to_verify.last_name = "";
            elements_to_verify.password = "";
            elements_to_verify.email = ""
        }
        var newFormState = _objectSpread({}, formState);
        var isErrorFound = false;
        for (var key in formState) {
            if (key in elements_to_verify && !formState[key].value) newFormState[key].error = true;
            if (!["coupon_code", "suggested_email"].includes(key) && formState[key].error) isErrorFound = true
        }
        if (!isErrorFound) {
            var progressBar = NProgress.configure({
                showSpinner: false
            });
            progressBar.start();
            var formData = new FormData;
            for (var _key in formState) formData.append(_key, formState[_key].value);
            formData.append("go_to_price", price.go_to_price - ftu.discount - price.coupon_discount);
            formData.append("csrf_test_name", ReactCommon.getCookie(ReactCommon.COOKIE_NAMES.CSRF));
            formData.append("variant", "treatment");
            if (window.device_id != undefined) formData.append("device_id", window.device_id);
            ReactCommon.globalAxios({
                method: "post",
                url: API_URLS.signupSubmit,
                data: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then(function (response) {
                progressBar.done();
                if (response.data.success) window.location.href = response.data.successPage;
                else if (response.data.errorMessage) ReactCommon.showModal(response.data.errorMessage, ReactCommon.MODAL_MODES.ERROR)
            })
        } else {
            setFormState(newFormState);
            if (document.getElementById("signup-form")) {
                var scrollTop = 0;
                if (jQuery(window).width() < 1200) scrollTop = jQuery("#signup-form").offset().top - jQuery(".signup-nav").height() - 40;
                jQuery("html, body").animate({
                    "scrollTop": scrollTop
                }, 500);
                return false
            }
        }
    };
    var generatePrice = function generatePrice() {
        return React.createElement("p", {
            className: "price-container d-flex flex-row"
        }, React.createElement("p", null, React.createElement("i", {
            className: "fa fa-inr",
            "aria-hidden": "true"
        })), React.createElement("p", {
            className: price.base > price.go_to_price ? "strike-price" : ""
        }, price.base, "/-"), price.base > price.go_to_price ? React.createElement("p", {
            className: "final-price"
        }, price.go_to_price - price.coupon_discount - ftu.discount, "/-") : React.createElement("p", null), React.createElement("p", {
                className: "price-message"
            }, price.base > price.go_to_price ? price.message :
            ""))
    };
    var showSuggestion = formState.suggested_email.error ? formState["email"].value.split("@")[0].length > 26 ? React.createElement("div", {
        className: "suggestion"
    }, React.createElement("span", {
        className: "suggestion-text",
        onClick: handleSuggestion
    }, "Did you mean "), React.createElement("u", {
        onClick: handleSuggestion,
        className: "suggested-email"
    }, React.createElement("b", null, formState.suggested_email.value)), React.createElement("span", {
            className: "suggestion-text",
            onClick: handleSuggestion
        }, " instead of ", formState["email"].value.split("@")[1].trim(),
        "?")) : React.createElement("div", {
        className: "suggestion"
    }, React.createElement("span", {
        className: "suggestion-text",
        onClick: handleSuggestion
    }, "Did you mean: "), React.createElement("u", {
        onClick: handleSuggestion,
        className: "suggested-email"
    }, React.createElement("b", null, formState.suggested_email.value))) : "";
    return React.createElement("form", null, React.createElement("input", {
            type: "email",
            name: "email",
            className: "d-none"
        }), React.createElement("input", {
            type: "password",
            name: "password",
            className: "d-none"
        }), props.initialData.main_role ===
        GUEST ? React.createElement("div", {
            autofocus: true
        }, React.createElement("div", {
                className: "form-group ".concat(formState.suggested_email.error ? "email-input" : "")
            }, React.createElement("label", {
                htmlFor: "email"
            }, "Email:", showEmailInvalid()), React.createElement("input", {
                type: "text",
                className: "form-control ".concat(formState.email.error ? "is-invalid" : ""),
                name: "email",
                "aria-describedby": "emailErr",
                placeholder: "john@example.com",
                value: formState.email.value,
                onChange: handleFieldChange,
                onBlur: handleFieldBlur
            }), showErrorIconForId("email"),
            showSuggestion), React.createElement("div", {
                className: "form-group ".concat(formState.suggested_email.error ? "password" : "")
            }, React.createElement("label", {
                htmlFor: "password"
            }, "Password:", showPasswordInvalid()), React.createElement("input", {
                type: "password",
                value: formState.password.value,
                className: "form-control ".concat(formState.password.error ? "is-invalid" : ""),
                name: "password",
                autocomplete: "new-password",
                placeholder: isInternshalaUser ? FTU_MESSAGE : NOT_FTU_MESSAGE,
                onBlur: handleFieldBlur,
                onChange: handleFieldChange
            }),
            showErrorIconForId("password"), !isInternshalaUser ? React.createElement("small", {
                className: "forgot-password"
            }, React.createElement("a", {
                href: "/forgot_password/index/".concat(window.requestUri ? window.requestUri : formState.course_url.value, "/").concat(encodeURIComponent(formState.email.value)),
                className: "float-right"
            }, "Forgot Password?")) : ""), React.createElement("div", {
            className: "d-flex flex-row"
        }, React.createElement("div", {
            className: "form-group flex1 mr-1"
        }, React.createElement("label", {
                htmlFor: "first_name"
            },
            "First Name:"), React.createElement("input", {
            type: "test",
            placeholder: "John",
            name: "first_name",
            value: formState.first_name.value,
            className: "form-control ".concat(formState.first_name.error ? "is-invalid" : ""),
            onBlur: handleFieldBlur,
            onChange: handleFieldChange
        }), showErrorIconForId("first_name")), React.createElement("div", {
            className: "form-group flex1 ml-1"
        }, React.createElement("label", {
            htmlFor: "last_name"
        }, "Last Name:"), React.createElement("input", {
            type: "text",
            placeholder: "Doe",
            value: formState.last_name.value,
            name: "last_name",
            autoComplete: "off",
            onBlur: handleFieldBlur,
            onChange: handleFieldChange,
            className: "form-control ".concat(formState.last_name.error ? "is-invalid" : "")
        }), showErrorIconForId("last_name")))) : React.createElement("div", null), React.createElement("div", {
            className: "form-group mb-0"
        }, React.createElement("label", {
            htmlFor: "country_code",
            className: "control-label"
        }, "Mobile Number:", showPhoneInvalid()), React.createElement("div", {
            className: "d-flex phone-number",
            id: "mobile_number_container"
        }, React.createElement("div", {
            className: "country-code"
        }, React.createElement("input", {
            type: "text",
            value: formState.country_code.value,
            className: "form-control ".concat(formState.country_code.error ? "is-invalid" : ""),
            autoComplete: "new-password",
            name: "country_code",
            placeholder: "+91",
            onBlur: handleFieldBlur,
            onChange: handleFieldChange
        }), showErrorIconForId("country_code")), React.createElement("div", {
            className: "number ml-1"
        }, React.createElement("input", {
            type: "text",
            className: "form-control ".concat(formState.phone_primary.error ? "is-invalid" :
                ""),
            name: "phone_primary",
            value: formState.phone_primary.value,
            placeholder: "8586080747",
            onBlur: handleFieldBlur,
            onChange: handleFieldChange
        }), showErrorIconForId("phone_primary")))), React.createElement("div", {
            className: "d-flex flex-row mt-3"
        }, React.createElement("div", {
            className: "form-group flex1 mr-1 ".concat(formState.suggested_email.error ? "batch-coupon" : "")
        }, React.createElement("label", {
            htmlFor: "batch",
            className: "control-label"
        }, "Batch:"), React.createElement("select", {
            name: "batch",
            className: "custom-select pr-4 custom-select-padding ".concat(formState.batch.error ?
                "is-invalid custom-select-error" : ""),
            onBlur: handleFieldBlur,
            onChange: handleFieldChange,
            value: formState.batch.value
        }, React.createElement("option", {
            value: "",
            selected: true,
            hidden: true
        }, "Choose batch"), generateBatch(props.initialData.info.batches)), showErrorIconForId("batch")), React.createElement("div", {
            className: "form-group flex1 ml-1 ".concat(formState.suggested_email.error ? "batch-coupon" : "")
        }, React.createElement("label", {
            htmlFor: "coupon_code",
            className: "control-label"
        }, "Coupon code:"), React.createElement("input", {
            type: "text",
            name: "coupon_code",
            value: formState.coupon_code.value,
            onBlur: handleFieldBlur,
            placeholder: "Optional",
            onChange: handleFieldChange,
            className: "form-control ".concat(formState.coupon_code.error ? "is-invalid" : "")
        }), showErrorIconForId("coupon_code"), showCouponInvalid())), React.createElement("div", {
            className: "form-group ".concat(formState.suggested_email.error ? "objective_of_learning" : "")
        }, React.createElement("label", {
                htmlFor: "objective_of_learning",
                className: "control-label"
            }, "I want to learn ",
            props.initialData.course_name, " to:"), React.createElement("select", {
            name: "objective_of_learning",
            className: "custom-select ".concat(formState.objective_of_learning.error ? "is-invalid custom-select-error" : ""),
            onBlur: handleFieldBlur,
            onChange: handleFieldChange,
            value: formState.objective_of_learning.value
        }, React.createElement("option", {
            value: "",
            selected: true,
            hidden: true
        }, "Choose your objective"), React.createElement("option", {
            value: "gain_a_new_skill"
        }, "Gain a new skill"), React.createElement("option", {
                value: "build_my_own_project"
            },
            "Build my own project"), React.createElement("option", {
            value: "get_an_internship_job_in_future"
        }, "Get an internship/job in future"), React.createElement("option", {
            value: "get_a_certificate"
        }, "Get a certificate"), React.createElement("option", {
            value: "fulfil_college_requirement"
        }, "Fulfil college requirement")), showErrorIconForId("objective_of_learning")), React.createElement("div", null, generatePrice()), React.createElement("div", {
            className: "form-group mb-0"
        }, React.createElement("button", {
            className: "btn btn-primary contest_register_now",
            onClick: function onClick(e) {
                e.preventDefault();
                signupSubmit()
            }
        }, "SIGN UP")))
};

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
        });
        keys.push.apply(keys, symbols)
    }
    return keys
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
    }
    return target
}

function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2
}

function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var HelpForm = function HelpForm(props) {
    var API_URLS = {
        helpCenter: "/home/send_help_center_query"
    };
    var _React$useState = React.useState({
            email: {
                value: null,
                error: null
            },
            name: {
                value: null,
                error: null
            },
            selected_subject_title: {
                value: null,
                error: null
            },
            message: {
                value: null,
                error: null
            },
            mail_attachment: {
                value: [],
                error: null
            }
        }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        formState = _React$useState2[0],
        setFormState = _React$useState2[1];
    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3,
            2),
        isRequestOngoing = _React$useState4[0],
        setIsRequestOngoing = _React$useState4[1];
    React.useEffect(function () {}, []);
    var handleFieldChange = function handleFieldChange(e) {
        var target = e.target;
        if (target.name in formState) {
            var newFormState = _objectSpread({}, formState);
            newFormState[target.name].value = target.value;
            switch (target.name) {
                case "email":
                    newFormState[target.name].error = !ReactCommon.isEmailValid(target.value);
                    break;
                case "name":
                    newFormState[target.name].error = !ReactCommon.isNameValid(target.value);
                    break;
                case "mail_attachment":
                    newFormState[target.name] = setFilesToUpload(e.target);
                    break;
                default:
                    newFormState[target.name].error = target.value.length < 1
            }
            setFormState(newFormState)
        }
    };
    var showErrorIconForId = function showErrorIconForId(id) {
        return formState[id].error ? React.createElement("span", {
            className: "fa fa-exclamation-circle error-icon",
            "aria-hidden": "true"
        }) : ""
    };
    var setFilesToUpload = function setFilesToUpload(element) {
        var files = [];
        var fileError = undefined;
        if (element.files.length > 4) {
            fileError = "You can upload a maximum of 4 files.";
            ReactCommon.showRibbon(fileError)
        }
        for (var i = 0; i < element.files.length; i++) {
            var file = element.files[i];
            var type = file.type.split("/")[1];
            var size = file.size / 1024 / 1024;
            if (type !== "png" && type !== "jpg" && type !== "jpeg" && type !== "pdf") {
                fileError = element.files.length > 1 ? "Please upload files with a valid file extension (PNG, JPEG, PDF)." : "Please upload a file with a valid file extension (PNG, JPEG, PDF).";
                ReactCommon.showRibbon(fileError);
                break
            }
            if (size > 5) {
                fileError = element.files.length > 1 ? "Some of the files exceed file size limit. Please upload files with size less than 5 Mb each." :
                    "File size exceeded. Please upload a file with size less than 5 Mb.";
                ReactCommon.showRibbon(fileError);
                break
            }
            files.push(file)
        }
        return {
            value: files,
            error: fileError
        }
    };
    var fileShortName = function fileShortName(file) {
        var type = file.type.split("/")[1];
        return file.name.split(".")[0].substring(0, 24) + "...." + type
    };
    var generateFileHTML = function generateFileHTML() {
        var fileHTML = [];
        formState.mail_attachment.value.forEach(function (file) {
            fileHTML.push(React.createElement("span", {
                "data-toggle": "tooltip",
                title: "Screenshot 2020-03-12 at 5.58.42 PM.png",
                className: "file-types"
            }, fileShortName(file)))
        });
        return fileHTML
    };
    var submitHelp = function submitHelp(e) {
        e.preventDefault();
        if (isRequestOngoing) return;
        var elements_to_verify = {
            email: "",
            name: "",
            selected_subject_title: "",
            message: ""
        };
        var newFormState = _objectSpread({}, formState);
        var isErrorFound = false;
        for (var key in elements_to_verify)
            if (key in elements_to_verify && !formState[key].value) {
                newFormState[key].error = true;
                isErrorFound = true
            } if (!isErrorFound) {
            setIsRequestOngoing(true);
            var progressBar = NProgress.configure({
                showSpinner: false
            });
            progressBar.start();
            var formData = new FormData;
            for (var _key in elements_to_verify) formData.append(_key, formState[_key].value);
            if (formState.mail_attachment.value.length > 0)
                for (var i = 0; i < formState.mail_attachment.value.length; i++) formData.append("mail_attachment_" + i, formState.mail_attachment.value[i]);
            formData.append("csrf_test_name", ReactCommon.getCookie(ReactCommon.COOKIE_NAMES.CSRF));
            formData.append("query_posted_from", props.initialData.course_name);
            ReactCommon.globalAxios({
                method: "post",
                url: API_URLS.helpCenter,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryvGu2Q9etG5t0uDR9"
                }
            }).then(function (response) {
                progressBar.done();
                setIsRequestOngoing(false);
                if (response.data.success) ReactCommon.showNotification("We have received your query", ReactCommon.MODAL_MODES.SUCCESS)
            })
        } else setFormState(newFormState)
    };
    return React.createElement("form", null, React.createElement("div", {
            className: "form-group"
        }, React.createElement("label", {
            htmlFor: "email"
        }, "Email: "), React.createElement("input", {
            type: "email",
            className: "form-control ".concat(formState.email.error ? "is-invalid" : ""),
            name: "email",
            "aria-describedby": "emailErr",
            placeholder: "Enter email",
            value: formState.email.value,
            onChange: handleFieldChange
        }), showErrorIconForId("email")), React.createElement("div", {
            className: "form-group"
        }, React.createElement("label", {
            htmlFor: "first_name"
        }, "Name:"), React.createElement("input", {
            type: "test",
            placeholder: "John",
            name: "name",
            value: formState.name.value,
            className: "form-control ".concat(formState.name.error ?
                "is-invalid" : ""),
            onChange: handleFieldChange
        }), showErrorIconForId("name")), React.createElement("div", {
            className: "form-group"
        }, React.createElement("label", {
            htmlFor: "topicSelected",
            className: "control-label"
        }, "Subject:"), React.createElement("select", {
            name: "selected_subject_title",
            required: "required",
            onChange: handleFieldChange,
            className: "form-control ".concat(formState.selected_subject_title.error ? "is-invalid custom-select" : "custom-select")
        }, React.createElement("option", {
                value: "",
                selected: "selected",
                disabled: "true"
            },
            "Choose subject"), React.createElement("option", {
            value: "Training Prerequisite"
        }, "Regarding Training Prerequisite"), React.createElement("option", {
            value: "Time & Mode of Delivery"
        }, "Regarding Time & Mode of Delivery"), React.createElement("option", {
            value: "Certificate"
        }, "Regarding Certificate"), React.createElement("option", {
            value: "Placement Assistance"
        }, "Regarding Placement Assistance"), React.createElement("option", {
            value: "Payment"
        }, "Regarding Payment"), React.createElement("option", {
            value: "other"
        }, "Other"))),
        React.createElement("div", {
            className: "form-group"
        }, React.createElement("label", {
            htmlFor: "message",
            className: "control-label"
        }, "Query:"), React.createElement("textarea", _defineProperty({
            placeholder: "Please type your query here",
            name: "message",
            className: "form-control",
            onChange: handleFieldChange
        }, "className", "form-control ".concat(formState.message.error ? "is-invalid" : "")))), React.createElement("div", {
            className: "file-types"
        }, "File type - PNG, JPEG, PDF. Max size - 5 Mb each."), React.createElement("div", {
            className: "d-flex flex-row justify-content-end mt-4"
        }, React.createElement("div", {
            className: "helpcenter_attachments"
        }, generateFileHTML()), formState.mail_attachment.error ? React.createElement("div", {
            className: "helpcenter_attachments danger"
        }, formState.mail_attachment.error) : "", React.createElement("div", {
            className: "forum_controls"
        }, React.createElement("label", {
            "tooltip-enable": "true",
            "uib-tooltip": "Attach files (PNG, JPEG, PDF). Max size - 5 Mb each.",
            className: "file-label"
        }, React.createElement("input", {
            type: "file",
            multiple: true,
            accept: "image/x-png, image/jpg, image/jpeg, application/pdf ",
            className: "d-none",
            onChange: handleFieldChange,
            name: "mail_attachment"
        }), React.createElement("img", {
            src: "/static/images/icons/attach.png",
            alt: ""
        }))), React.createElement("div", null, React.createElement("button", {
            className: "btn btn-primary",
            tabIndex: "3",
            onClick: submitHelp
        }, "Send"))))
};
var course_url = window.location.pathname.split("-training")[0].substring(1);
var signupFormDom = document.getElementById("signup-form");
var helpFormDom = document.getElementById("signup-help-form");
axios.get("/signup/get_signup_form_data?course_url=".concat(course_url)).then(function (response) {
    if (signupFormDom) ReactDOM.render(React.createElement(SignUpForm, {
        initialData: response.data,
        course_url: course_url
    }), signupFormDom);
    if (helpFormDom) ReactDOM.render(React.createElement(HelpForm, {
        initialData: response.data
    }), helpFormDom)
});