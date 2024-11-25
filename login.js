window.onload = function() {
    const username = 'test';
    const password = '7357';

    let inputUsername = prompt('아이디를 입력하세요:');
    let inputPassword = prompt('비밀번호를 입력하세요:');

    if (inputUsername === username && inputPassword === password) {
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
        window.location.href = 'about:blank';
    }

    document.getElementById('fbButton').addEventListener('click', function() {
        window.location.href = '/fb/index.html';
    });
    document.getElementById('igButton').addEventListener('click', function() {
        window.location.href = '/ig/index.html';
    });
};
