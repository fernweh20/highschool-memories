// 本地搜索数据
const sitePages = [
    { title: "首页", url: "index.html", content: "欢迎来到我们的高中回忆录。这里有同学录、老师介绍、留言板等内容。" },
    { title: "老师介绍", url: "teachers.html", content: "这里是老师的介绍页面，包括数学老师、语文老师、英语老师等。" },
    { title: "关于我们", url: "about.html", content: "本网站记录了我们的高中时光，包括照片、故事和留言。" },
    { title: "留言板", url: "guestbook.html", content: "在这里，你可以给同学和老师留言，分享你的回忆和感想。" }
];

// 搜索功能
function searchSite() {
    const query = document.getElementById("searchBox").value.toLowerCase(); // 获取搜索框输入
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // 清空旧的搜索结果

    if (query.length === 0) {
        resultsContainer.style.display = "none";
        return;
    }

    let results = sitePages.filter(page => 
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>没有找到匹配的内容。</p>";
    } else {
        results.forEach(result => {
            resultsContainer.innerHTML += `<p><a href="${result.url}">${result.title}</a></p>`;
        });
    }

    resultsContainer.style.display = "block";
}
