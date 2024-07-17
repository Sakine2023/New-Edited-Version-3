window.onerror = function (message, source, lineno, colno, error) {
    // می‌توانید خطاها را به یک سرور برای بررسی گزارش کنید
    console.log("Error caught: ", message, source, lineno, colno, error);
    return true; // از نمایش پیغام خطا در مرورگر جلوگیری می‌کند
};
