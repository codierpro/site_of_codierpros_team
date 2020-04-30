(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');
    var aScrollDown1_1 = document.querySelector('#frame1_1');
    var aScrollDown1_2 = document.querySelector('#frame1_2');
    var aScrollDown2_2 = document.querySelector('#frame2_2');
    var aScrollDown3_1 = document.querySelector('#frame3_1');
    var aScrollDown2_1 = document.querySelector('#frame2_1');
    var aScrollDown2_1_1 = document.querySelector('#frame2_1_1');
    var aScrollDown3_2 = document.querySelector('#frame3_2');
    var aScrollDown3_2_1 = document.querySelector('#frame3_2_1');

    var btnScrollUp = document.querySelector('#scroll_up');
    var btnScrollUp2 = document.querySelector('#scroll_up2');
    var btnScrollUp3 = document.querySelector('#scroll_up3');
    var btnScrollUp4 = document.querySelector('#scroll_up4');
    var btnScrollUp5 = document.querySelector('#scroll_up5');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
       
        (function scroll() {
            if (Math.ceil(window.pageYOffset) < Math.ceil(windowCoords)) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 4);
            }
             if (Math.ceil(window.pageYOffset) > Math.ceil(windowCoords)) {
                 window.scrollTo(0, Math.ceil(windowCoords));
            }
        })();
    };
    function scrollDown1_1() {
        var windowCoords1_1 = Math.ceil(document.documentElement.clientHeight);
        windowCoords1_1 *= 2;
        
        (function scroll() {
            if (Math.ceil(window.pageYOffset) < windowCoords1_1) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 4);
            }
            if (Math.ceil(window.pageYOffset) > windowCoords1_1) {
                window.scrollTo(0, windowCoords1_1);
            }
        })();
    };
    function scrollDown1_2() {
        var windowCoords1_2 = Math.ceil(document.documentElement.clientHeight);
        windowCoords1_2 *= 3;
        
        (function scroll() {
            if (Math.ceil(window.pageYOffset) < Math.ceil(windowCoords1_2)) {
                window.scrollBy(0, 15);
                setTimeout(scroll, 4);
            }
            if (Math.ceil(window.pageYOffset) > Math.ceil(windowCoords1_2)) {
                window.scrollTo(0, Math.ceil(windowCoords1_2));
            }
        })();
    };
    function scrollDown2_1() {
        var windowCoords2_1 = document.documentElement.clientHeight;
        windowCoords2_1 *= 4;
        
        (function scroll() {
            if (window.pageYOffset < windowCoords2_1) {
                window.scrollBy(0, 15);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset > windowCoords2_1) {
                window.scrollTo(0, windowCoords2_1);
            }
        })();
    };
    function scrollDown2_1_1() {
        var windowCoords2_1_1 = document.documentElement.clientHeight;
        windowCoords2_1_1 *= 4;
        
        (function scroll() {
            if (window.pageYOffset < windowCoords2_1_1) {
                window.scrollBy(0, 15);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset > windowCoords2_1_1) {
                window.scrollTo(0, windowCoords2_1_1);
            }
        })();
    };
    function scrollDown2_2() {
        var windowCoords2_2 = document.documentElement.clientHeight;
        windowCoords2_2 *= 3;
        
        (function scroll() {
            if (window.pageYOffset < windowCoords2_2) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 4);
            }
            if (Math.round(window.pageYOffset) > windowCoords2_2) {
                window.scrollTo(0, windowCoords2_2);
            }
        })();
    };       
    function scrollDown3_1() {
        var windowCoords3_1 = document.documentElement.clientHeight;
        windowCoords3_1 *= 2;
        
        (function scroll() {
            if (window.pageYOffset > windowCoords3_1) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            
            if (window.pageYOffset < windowCoords3_1) {
                window.scrollTo(0, windowCoords3_1);
            }
        })();
    };
    function scrollDown3_2() {
        var windowCoords3_2 = document.documentElement.clientHeight;
        windowCoords3_2 *= 5;
        
        (function scroll() {
            if (window.pageYOffset < windowCoords3_2) {
                window.scrollBy(0, 15);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset > windowCoords3_2) {
                window.scrollTo(0, windowCoords3_2);
            }
        })();
    };
    function scrollDown3_2_1() {
        var windowCoords3_2_1 = document.documentElement.clientHeight;
        windowCoords3_2_1 *= 5;
        
        (function scroll() {
            if (window.pageYOffset < windowCoords3_2_1) {
                window.scrollBy(0, 15);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset > windowCoords3_2_1) {
                window.scrollTo(0, windowCoords3_2_1);
            }
        })();
    };

    function scrollUp() {
        var scrollUp = document.documentElement.clientHeight;
        scrollUp *= 0;
        
        console.log(Math.ceil(scrollUp));
        var offse = window.pageYOffset;
        console.log(Math.ceil(offse));

        (function scroll() {
            if (Math.ceil(window.pageYOffset) > Math.ceil(scrollUp)) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            if (Math.ceil(window.pageYOffset) < Math.ceil(scrollUp)) {
                window.scrollTo(0, Math.ceil(scrollUp));
            }
        })();
    };
    function scrollUp2() {
        var scrollUp = document.documentElement.clientHeight;
        scrollUp *= 1;
        
        (function scroll() {
            if (window.pageYOffset > scrollUp) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset < scrollUp) {
                window.scrollTo(0, scrollUp);
            }
        })();
    };
    function scrollUp3() {
        var scrollUp = document.documentElement.clientHeight;
        scrollUp *= 2;
        
        (function scroll() {
            if (window.pageYOffset > scrollUp) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset < scrollUp) {
                window.scrollTo(0, scrollUp);
            }
        })();
    };
    function scrollUp4() {
        var scrollUp = document.documentElement.clientHeight;
        scrollUp *= 1;
        
        (function scroll() {
            if (window.pageYOffset > scrollUp) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset < scrollUp) {
                window.scrollTo(0, scrollUp);
            }
        })();
    };
    function scrollUp5() {
        var scrollUp = document.documentElement.clientHeight;
        scrollUp *= 1;
        
        (function scroll() {
            if (window.pageYOffset > scrollUp) {
                window.scrollBy(0, -10);
                setTimeout(scroll, 4);
            }
            if (window.pageYOffset < scrollUp) {
                window.scrollTo(0, scrollUp);
            }
        })();
    };

    btnScrollDown.addEventListener('click', scrollDown);
    aScrollDown1_1.addEventListener('click', scrollDown1_1);
    aScrollDown1_2.addEventListener('click', scrollDown1_2);
    aScrollDown2_2.addEventListener('click', scrollDown2_2);
    aScrollDown3_1.addEventListener('click', scrollDown3_1);
    aScrollDown2_1.addEventListener('click', scrollDown2_1);
    aScrollDown2_1_1.addEventListener('click', scrollDown2_1_1);
    aScrollDown3_2.addEventListener('click', scrollDown3_2);
    aScrollDown3_2_1.addEventListener('click', scrollDown3_2_1);

    btnScrollUp.addEventListener('click', scrollUp);
    btnScrollUp2.addEventListener('click', scrollUp2);
    btnScrollUp3.addEventListener('click', scrollUp3);
    btnScrollUp4.addEventListener('click', scrollUp4);
    btnScrollUp5.addEventListener('click', scrollUp5);
})();