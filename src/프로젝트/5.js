var imageUrls = [
    "https://cdn.discordapp.com/attachments/1064184323617599488/1106590738826920016/download-removebg-preview.png"
  ];
  var currentIndex = 0;

  function changeImage(direction) {
    var boxImage = document.getElementById('box-image');
    if (direction === 'previous') {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    } else if (direction === 'next') {
      currentIndex = (currentIndex + 1) % imageUrls.length;
    }
    boxImage.src = imageUrls[currentIndex];
  }