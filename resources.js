document.addEventListener("DOMContentLoaded", loadResources);

let isAdmin = true; // 是否为管理员（实际可结合登录系统）

// 资源数据存储（网盘链接）
let resources = [
    { category: "数学", name: "高等数学教材", uploader: "张三", link: "https://pan.baidu.com/s/example", approved: true },
    { category: "英语", name: "四六级词汇", uploader: "李四", link: "https://drive.google.com/file/d/example", approved: true },
    { category: "化学", name: "有机化学讲义", uploader: "王五", link: "https://1drv.ms/u/s/example", approved: false } // 需审核
];

// 加载资源列表
function loadResources() {
    let tableBody = document.getElementById("resourceList");
    tableBody.innerHTML = "";

    resources.forEach((resource, index) => {
        if (resource.approved || isAdmin) {
            let row = tableBody.insertRow();
            row.innerHTML = `
                <td>${resource.category}</td>
                <td>${resource.name}</td>
                <td>${resource.uploader}</td>
                <td><a href="${resource.link}" target="_blank">📥 下载</a></td>
                ${isAdmin ? `<td><button onclick="approveResource(${index})">✔️ 审核</button></td>` : ""}
            `;
        }
    });

    // 仅管理员可见上传表单
    if (isAdmin) {
        document.getElementById("uploadSection").style.display = "block";
    }
}

// 提交新资源（仅管理员可操作）
function submitResource() {
    let category = document.getElementById("category").value;
    let resourceName = document.getElementById("resourceName").value;
    let resourceLink = document.getElementById("resourceLink").value;

    if (!resourceName || !resourceLink) {
        alert("请填写完整信息！");
        return;
    }

    // 新资源加入列表（默认未审核）
    resources.push({
        category,
        name: resourceName,
        uploader: "管理员",
        link: resourceLink,
        approved: false
    });

    alert("资源提交成功，等待管理员审核！");
    loadResources();
}

// 管理员审核资源
function approveResource(index) {
    resources[index].approved = true;
    alert("资源已通过审核！");
    loadResources();
}

// 搜索资源
function searchResources() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let tableRows = document.getElementById("resourceTable").getElementsByTagName("tr");

    for (let i = 1; i < tableRows.length; i++) {
        let rowText = tableRows[i].innerText.toLowerCase();
        tableRows[i].style.display = rowText.includes(input) ? "" : "none";
    }
}
