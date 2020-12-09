
((function() {
    if (window.document.documentMode) {
        var script = document.createElement('script');
        var script2 = document.createElement('script');
        function onScriptLoad() {
            window.Swal.fire({
                title: 'Attention!',
                icon: 'warning',
                html: '<p>Internet Explorer 11 is very old and suffers from numerous flaws and bugs. Support is rapidly being dropped across many sites.</p><p>Please use a modern browser like '
                    + '<a href="https://www.mozilla.org/en-CA/firefox/new/">Firefox</a>, <a href="https://www.microsoft.com/en-us/edge">Edge</a>, or <a href="https://www.google.com/intl/en_ca/chrome/">Chrome</a> to ensure that you do not experience issues.</p>'
                    + '<p>If you choose to continue interacting with this page in IE11, be aware that some things may not function properly, and you may receive a degraded experience as a result of missing features.</p>'
            })
        };
        script.onload = function() {
            script2.src = "https://cdn.jsdelivr.net/npm/sweetalert2@10";
            document.head.appendChild(script2);
        };
        script2.onload = onScriptLoad;
        script.src = 'https://cdn.jsdelivr.net/npm/promise-polyfill@7.1.0/dist/promise.min.js';
        document.head.appendChild(script);
        
    }
    
})());