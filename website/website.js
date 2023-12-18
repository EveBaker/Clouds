function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Event listener for the scroll event to check for elements in the viewport
  document.addEventListener('scroll', function () {
    document.querySelectorAll('.reveal').forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  });

  //zooom
  document.getElementById('museumImage').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.5s ease';
  });

  document.getElementById('museumImage').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
