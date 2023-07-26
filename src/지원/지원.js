function redirectToBugReport() {
    window.open("https://cafe.naver.com/tteokbokk1/172694", "_blank");
  }
  
  function redirectToFeedback() {
    window.open("https://cafe.naver.com/tteokbokk1/172694", "_blank");
  }

  // function redirectToaddmusic() {
  //   window.open("https://docs.google.com/spreadsheets/d/163mg-Uo3vgAZE8vblcvrgUv-qtAfBDgV3zQlkZUXgyg/edit?usp=sharing", "_blank");
  // }
  
  let count = 0;

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      count++;
      if (count >= 10) {
        createFloatingText();
        count = 0;
      }
    }
  }
  
  function createFloatingText() {
    const textElement = document.createElement("div");
    textElement.textContent = "스텔라이브 화이팅!";
    textElement.style.position = "fixed";
    textElement.style.top = "50%";
    textElement.style.left = "50%";
    textElement.style.transform = "translate(-50%, -50%)";
    textElement.style.fontSize = "90px";
    textElement.style.fontWeight = "bold";
    textElement.style.color = "white";
    textElement.style.zIndex = "9999";
    document.body.appendChild(textElement);
  
    animateFloatingText(textElement);
  }
  
  function animateFloatingText(element) {
    let angle = 0;
    let radius = 100;
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
  
    function updatePosition() {
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      angle += 0.05;
      requestAnimationFrame(updatePosition);
    }
  
    updatePosition();
  }
  
  document.addEventListener("keydown", handleKeyPress);
  
//   let counter = 0;

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     counter++;
//     if (counter === 10) {
//       showFightingText();
//       counter = 0;
//     }
//   } else {
//     counter = 0;
//   }
// });

// function showFightingText() {
//   const textElement = document.createElement('div');
//   textElement.textContent = '스텔라이브 화이팅!';
//   textElement.style.position = 'fixed';
//   textElement.style.top = '50%';
//   textElement.style.left = '50%';
//   textElement.style.transform = 'translate(-50%, -50%)';
//   textElement.style.fontSize = '100px';
//   textElement.style.fontWeight = 'bold';
//   textElement.style.color = 'white';
//   textElement.style.zIndex = '9999';
//   textElement.style.pointerEvents = 'none';

//   document.body.appendChild(textElement);

//   animateText(textElement);
// }

// function animateText(textElement) {
//   let rotation = 0;

//   function rotateText() {
//     rotation += 2;
//     textElement.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
//     requestAnimationFrame(rotateText);
//   }

//   rotateText();
// }