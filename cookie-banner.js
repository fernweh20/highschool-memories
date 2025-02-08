// 检查 Cookie 同意状态
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookieButton = document.getElementById('accept-cookie');

    // 检查是否已接受 Cookie
    if (!localStorage.getItem('cookieAccepted')) {
        // 显示 Cookie 请求弹窗
        cookieBanner.style.display = 'block';
    }

    // 用户点击 "接受" 按钮
    acceptCookieButton.addEventListener('click', function () {
        // 设置 LocalStorage 标记
        localStorage.setItem('cookieAccepted', 'true');
        // 隐藏 Cookie 请求弹窗
        cookieBanner.style.display = 'none';
    });
});
