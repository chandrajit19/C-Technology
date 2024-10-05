

    // JavaScript to toggle the class on click
    const hamburgerIcon = document.getElementById('hamburgerButton');
    const hiddenContent=document.getElementById('hidden')

    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('active');
        hiddenContent.classList.toggle('page-content-visible');
       
    });


    
  // Show or hide the scroll button based on scroll position
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const scrollBtn = document.getElementById("scroll-top--btn");
    if (document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Smooth scroll to the top
  function scrollToTop() {
    window.scrollTo(
        {
            top: 0, 
            behavior: 'smooth'
        });
  }



//   AOS
AOS.init();


