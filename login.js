window.onload = function() {
    const username = 'test';
    const password = '7357';

    document.getElementById('loginButton').addEventListener('click', function() {
        let inputUsername = document.getElementById('username').value;
        let inputPassword = document.getElementById('password').value;

        if (inputUsername === username && inputPassword === password) {
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('loginForm').style.display = 'none';
        } else {
            alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
        }
    });

    document.getElementById('fbButton').addEventListener('click', function() {
        window.location.href = '/fb/index.html';
    });
    document.getElementById('igButton').addEventListener('click', function() {
        window.location.href = '/ig/index.html';
    });
    document.getElementById('googleButton').addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
};
