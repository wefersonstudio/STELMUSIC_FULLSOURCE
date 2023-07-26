window.addEventListener('scroll', function(e) {
  window.scrollTo(0, window.pageYOffset);
});



// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
  var isFirstVisit = localStorage.getItem("isFirstVisit");

  if (isFirstVisit === null) {
    localStorage.setItem("isFirstVisit", "true");
  } else {
    var surveyBox = document.getElementById("survey-box");
    surveyBox.style.display = "none";
  }
};

function saveSurvey() {
  var surveyText = document.getElementById("survey-text").value;

  var link = "mailto:wefersonstudio@gmail.com?subject=스텔뮤직 1차 사전조사&body=" + encodeURIComponent(surveyText);
  window.location.href = link;

  var surveyBox = document.getElementById("survey-box");
  surveyBox.innerHTML = "<p>사전조사에 응해주셔서 감사합니다.</p>";

  setTimeout(function() {
    surveyBox.style.opacity = "0";
    surveyBox.style.visibility = "hidden";
  }, 3000);
}
