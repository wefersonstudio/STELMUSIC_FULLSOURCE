window.addEventListener('scroll', function(e) {
    // 수평 스크롤 위치를 0으로 설정하여 좌우 스크롤을 막습니다.
    window.scrollTo(0, window.pageYOffset);
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" && event.ctrlKey) {
      displayMessage();
    } else if (event.key === "ArrowDown" && event.ctrlKey) {
      displayMessage();
    } else if (event.key === "ArrowLeft" && event.ctrlKey) {
      displayMessage();
    } else if (event.key === "ArrowRight" && event.ctrlKey) {
      displayMessage();
    }
  });

  function displayMessage() {
    var messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    messageBox.innerText = "앞으로도 힘내겠습니다!";
    document.body.appendChild(messageBox);

    setTimeout(function() {
      messageBox.classList.add("hide");
      setTimeout(function() {
        messageBox.remove();
      }, 1000);
    }, 5000);
  }