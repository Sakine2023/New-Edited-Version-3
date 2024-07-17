window.onerror = function (message, source, lineno, colno, error) {
    // جلوگیری از نمایش پیام خطا
    return true;
};

window.addEventListener('error', function (event) {
    event.preventDefault();
});
