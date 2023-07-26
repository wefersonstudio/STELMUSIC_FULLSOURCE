window.addEventListener('load', function() {
    var popupBox = document.getElementById('popup-box');
    var closeButton = document.getElementById('close-button');
    var dontShowCheckbox = document.getElementById('dont-show-checkbox');

    // "하루동안 열지 않기" 체크 여부 확인 후 팝업 박스를 숨김
    function hidePopupBox() {
        if (dontShowCheckbox.checked) {
            var date = new Date();
            date.setDate(date.getDate() + 1);
            document.cookie = "popupClosed=true; expires=" + date.toUTCString() + "; path=/";
        }
        popupBox.style.display = 'none';
    }

    // 팝업 박스 닫기 버튼 클릭 시 이벤트 처리
    closeButton.addEventListener('click', function() {
        hidePopupBox();
    });

    // 쿠키 확인하여 팝업 박스 표시 여부 결정
    var popupClosed = document.cookie.replace(/(?:(?:^|.*;\s*)popupClosed\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (popupClosed !== "true") {
        popupBox.style.display = 'block';
    }
});