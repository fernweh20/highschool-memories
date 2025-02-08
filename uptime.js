document.addEventListener("DOMContentLoaded", function () {
    // 设定网站启动的时间（请修改为实际的启动日期）
    const siteLaunchDate = new Date("2025-02-08T18:00:00");

    function updateUptime() {
        const now = new Date();
        const diff = now - siteLaunchDate; // 计算时间差（毫秒）

        // 转换为天、小时、分钟、秒
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // 更新 HTML 显示
        document.getElementById("uptime").innerHTML =
            `本站已正常运行：<strong>${days}</strong> 天 <strong>${hours}</strong> 小时 <strong>${minutes}</strong> 分钟 <strong>${seconds}</strong> 秒`;
    }

    // 立即执行一次
    updateUptime();
    // 每秒更新
    setInterval(updateUptime, 1000);
});
