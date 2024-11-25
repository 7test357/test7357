window.onload = function() {
    const username = 'test';
    const password = '7357';

    // 사용자에게 로그인 정보를 입력받기
    let inputUsername = prompt('아이디를 입력하세요:');
    let inputPassword = prompt('비밀번호를 입력하세요:');

    if (inputUsername === username && inputPassword === password) {
        // 로그인 성공 시 메인 콘텐츠 표시
        document.getElementById('mainContent').style.display = 'block';
    } else {
        // 로그인 실패 시 경고 메시지
        alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
        window.location.href = 'about:blank'; // 로그인 실패 시 빈 페이지로 이동
    }

    // 각 버튼 클릭 시 페이지 이동
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
