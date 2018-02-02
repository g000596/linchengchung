(function ($) {
    var scrollDis = 0
        , scrollTop = 0
        , preScrollTop = -1
        , rootElem = !!window.WebKitCSSMatrix ? $('body') : $('html')
        , $win = $(window);
    var affixNav = function () {
        var navWrapper = $('#J-nav')
//            , duration = 600
            , triggers = navWrapper.find('.J-nav-a')
            , triggersLen = triggers.length
            , items = $('.J-main-c')
            , itemSelectedClass = 'gs-ov'
            , topbtn = $('#J-top')
            , selected = -1
            , _offset = 0;
        scrollTimerID = null;

        function scrollToContent() {
            triggers.each(function (idx) {
                $(this).click(function () {
                    return switchContent(idx);
                })
            })
        }

        function init() {
            scrollToContent();
            topbtn.click(function () {
                rootElem.stop(true).animate({
                    scrollTop: 0
                }, duration)
            });
        }

        function setMenuSelected() {
            if (scrollTimerID) {
                clearTimeout(scrollTimerID);
            }
            scrollTimerID = setTimeout(function () {
                var idx = 0
                    , _len = triggersLen - 1;
                for (var i = 0; i < triggersLen; i++) {
                    if (scrollTop >= parseInt(items.eq(i).offset().top - _offset)) {
                        idx = i;
                    }
                    if (i == _len && idx != selected) {
                        // console.log(idx)
                        switchTrigger(idx);
                    }
                };
                scrollTimerID = null;
            }, 60)
        }

        function switchTrigger(idx) {
            triggers.eq(idx).addClass(itemSelectedClass);
            if (selected != -1) {
                triggers.eq(selected).removeClass(itemSelectedClass);
            }
            selected = idx;
        }

        function switchContent(idx) {
            var pos = parseInt(items.eq(idx).offset().top - _offset);
            if (pos != scrollTop) {
                rootElem.stop(true).animate({
                    scrollTop: pos
                }, duration)
            }
            return false;
        }
        return {
            init: init
            , setMenuSelected: setMenuSelected
        }
    }();
    $win.scroll(function () {
        scrollTop = $win.scrollTop();
    });
    affixNav.init();
    setInterval(function () {
        if (preScrollTop != scrollTop) {
            affixNav.setMenuSelected();
            preScrollTop = scrollTop;
        }
    }, 16);
})(jQuery);


        $(document).ready(function () {
            $("a").click(function () {
                console.log($(this).attr("href"))
                var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({
                    scrollTop: $($(this).attr("href")).offset().top + "px"
                }, {
                    easing: "swing"
                });
                return false;
            });
        });