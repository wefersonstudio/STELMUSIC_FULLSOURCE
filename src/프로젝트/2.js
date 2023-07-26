var imageUrls = [
    "https://pbs.twimg.com/media/FovkQQfagAE9--s.jpg",
    "https://pbs.twimg.com/media/FovkQQfagAE9--s.jpg",
    "https://pbs.twimg.com/media/FovkQQfagAE9--s.jpg"
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