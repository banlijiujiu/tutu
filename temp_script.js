
        (function() {
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            var isStandalone = window.navigator.standalone === true;
            var isDisplayModeStandalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
            
            if (isStandalone || isDisplayModeStandalone) {
                document.documentElement.classList.add('ios-standalone');
            }
            
            // 只设置一次初始高度，之后不再改变
            // 这是解决键盘黑屏的关键：不让JavaScript在键盘弹出时调整任何高度
            function initViewport() {
                var height = window.innerHeight;
                var width = window.innerWidth;
                var vh = height * 0.01;
                var vw = width * 0.01;
                
                document.documentElement.style.setProperty('--vh', vh + 'px');
                document.documentElement.style.setProperty('--vw', vw + 'px');
                
                // 只在初始化时设置一次高度
                if (document.body) {
                    document.body.style.height = height + 'px';
                }
                
                var container = document.querySelector('.phone-container');
                if (container) {
                    container.style.height = height + 'px';
                }
            }
            
            // 只在页面加载时执行一次
            initViewport();
            
            // 方向改变时重新计算（这是唯一需要重新计算的情况）
            window.addEventListener('orientationchange', function() {
                setTimeout(initViewport, 300);
            });
        })();
    