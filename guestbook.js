// 获取表单和消息区域
const form = document.getElementById('guestbook-form');
const messageInput = document.getElementById('message');
const messagesContainer = document.getElementById('messages');

// 初始化留言数据（模拟存储）
let messages = [];

// 提交留言
form.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止表单提交
    const messageText = messageInput.value.trim();

    if (messageText) {
        // 添加留言到数组
        messages.push(messageText);

        // 更新留言板
        updateMessages();

        // 清空输入框
        messageInput.value = '';
    }
});

// 更新留言板显示
function updateMessages() {
    messagesContainer.innerHTML = ''; // 清空之前内容
    messages.forEach((msg, index) => {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.textContent = `${index + 1}. ${msg}`;
        messagesContainer.appendChild(messageItem);
    });
}

// 初始化留言板
updateMessages();
