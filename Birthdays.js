document.addEventListener("DOMContentLoaded", function() {
    fetch("birthdays.json")
        .then(response => response.json())
        .then(data => {
            let today = new Date();
            let todayFormatted = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            
            let todayBirthdays = data.filter(person => person.solar === todayFormatted);
            let birthdayList = document.getElementById("birthday-list");

            data.forEach(person => {
                let row = `<tr>
                    <td>${person.solar}（农历 ${person.lunar}）</td>
                    <td>${person.name}</td>
                    <td>${person.wish}</td>
                </tr>`;
                birthdayList.innerHTML += row;
            });

            if (todayBirthdays.length > 0) {
                let birthdayMessage = todayBirthdays.map(person =>
                    `<p>🎉 祝 <b>${person.name}</b> 生日快乐！ ${person.wish}</p>`
                ).join("");
                document.getElementById("today-birthday").innerHTML = birthdayMessage;

                // 显示动画 & 播放音乐
                playBirthdayEffect();
                <audio id="birthday-music" src="https://www.bensound.com/birthday-song.mp3" preload="auto"></audio>
            }
        });
});

function playBirthdayEffect() {
    let audio = new Audio("happy-birthday.mp3");
    audio.play();
    alert("🎉 今天有同学生日，快去送上祝福吧！");
}
