var imageUrls = [
    "https://yt3.googleusercontent.com/wjmKAGXOPp2PTe8OLHclmo2Ugz1ceLid3mN_YO0Xi9uoKOik23bbCCBQPMGl7jF7QXO7kR3BU7A=s176-c-k-c0x00ffffff-no-rj-mo",
    "https://pbs.twimg.com/media/FweKLe0aEAAN9vM.jpg"
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