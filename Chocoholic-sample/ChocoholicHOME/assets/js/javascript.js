function toggleMenu() {
    var navRightItems = document.getElementById('nav-right-items');
    navRightItems.classList.toggle('show');
  }
  console.log('javascript is OK');


  // SEARCH OUR OFFER BUTTON
$(document).ready(function() {
    console.log('jQuery is loaded');
  
    // URLのクエリパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const showModal = urlParams.get('modal');
  
    if (showModal === 'true') {
      console.log('Modal Opening');
      openModal();
    }
  
    $('#close').click(function(e) {
      e.preventDefault();
      closeModal();
    });
  
    function openModal() {
      $('#modal').addClass('show');  
      $('.main-offer').animate({
        top: 0,
        opacity: 1
      }, 2000);
    }
      function closeModal() {
      $('#modal').removeClass('show');  
      $('.main-offer').animate({
        top: '-900px',
        opacity: 0
      }, 2000);
      window.location.href = 'index.html';
    }
  });
  
   


$(document).ready(function() {
    console.log('jQuery is loaded');
  });
      

  window.onload = function() {
    console.log('All resources loaded');
  };