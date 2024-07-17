// مدیریت خطاهای جاوا اسکریپت و جلوگیری از نمایش آنها
window.onerror = function(message, source, lineno, colno, error) {
    console.log("JavaScript error: ", message, " at ", source, ":", lineno, ":", colno);
    return true; // از نمایش پیام خطا جلوگیری می‌کند
};

window.addEventListener('error', function(event) {
    event.preventDefault(); // از نمایش پیام خطا جلوگیری می‌کند
});

window.addEventListener('unhandledrejection', function(event) {
    console.log("Unhandled promise rejection: ", event.reason);
    event.preventDefault(); // از نمایش پیام خطا جلوگیری می‌کند
});

// جلوگیری از خطاهای منابع خارجی
document.addEventListener('DOMContentLoaded', function() {
    var errorElements = document.querySelectorAll('script, link, img');
    errorElements.forEach(function(element) {
        element.addEventListener('error', function(event) {
            event.preventDefault();
            console.log("Resource error: ", event);
        });
    });
});

// بارگذاری مجدد مدیریت خطاهای تلگرام در زمان بارگذاری مجدد صفحه
window.addEventListener('load', function() {
    suppressTelegramErrors();
    setTimeout(suppressTelegramErrors, 1000); // تلاش مجدد پس از 1 ثانیه
    setTimeout(suppressTelegramErrors, 5000); // تلاش مجدد پس از 5 ثانیه
});
