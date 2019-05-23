$(document).ready(function() {
    function showCookie(name) {
        if (document.cookie !== "") {
                const cookies = document.cookie.split(/; */);

                for (let i=0; i<cookies.length; i++) {
                        const cookieName = cookies[i].split("=")[0];
                        const cookieVal = cookies[i].split("=")[1];
                        if (cookieName === decodeURIComponent(name)) {
                                return decodeURIComponent(cookieVal);
                        }
                }
        }
    }

    if (showCookie('hideAlert')) {
        document.getElementById('cookies-alert').classList.add('no-display');
    }
});

const cookiesBtn = document.getElementById('accept-btn-id');
cookiesBtn.addEventListener('click', function(){
    setCookie('hideAlert', 'true');
    document.getElementById('cookies-alert').classList.add('no-display');
});

//cookies alert

function setCookie(name, val, days, path, domain, secure) {
if (navigator.cookieEnabled) { //czy ciasteczka są włączone
   const cookieName = encodeURIComponent(name);
   const cookieVal = encodeURIComponent(val);
   let cookieText = cookieName + "=" + cookieVal;
   document.cookie = cookieText;
}
}