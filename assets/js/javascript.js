function toggleMenu() {
    var navRightItems = document.getElementById('nav-right-items');
    navRightItems.classList.toggle('show');
  }
  console.log('javascript is OK');


  // SEARCH OUR OFFER BUTTON
$(document).ready(function() {
    console.log('jQuery is loaded');

    

 //  ページに応じてリンクにクラスを追加する処理
 const path = window.location.pathname.split('/').pop(); // 例: "contact.html"
 const links = document.querySelectorAll('.nav-right a');

 links.forEach(link => {
   const href = link.getAttribute('href');

   // HOMEページ判定は「hrefが#かつpathが空のとき」
   if (href === path || (href === "#" && (path === "" || path === "index.html"))) {
     const pageName = href.replace('.html', '').replace('#', 'home');
     link.classList.add(`${pageName}-link`);
   }
 });



  
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