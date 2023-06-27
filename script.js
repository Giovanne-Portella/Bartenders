document.addEventListener('DOMContentLoaded', function() {
    var modalTriggers = document.getElementsByClassName('modal-trigger');
    var modals = document.getElementsByClassName('modal');
    var closeButtons = document.getElementsByClassName('close');
  
    for (var i = 0; i < modalTriggers.length; i++) {
      (function(index) {
        modalTriggers[index].addEventListener('click', function(e) {
          e.preventDefault();
          modals[index].style.display = 'block';
        });
  
        closeButtons[index].addEventListener('click', function() {
          modals[index].style.display = 'none';
        });
      })(i);
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var modalTriggers = document.getElementsByClassName('modal-trigger1');
    var modals = document.getElementsByClassName('modal1');
    var closeButtons = document.getElementsByClassName('close1');
  
    for (var i = 0; i < modalTriggers.length; i++) {
      (function(index) {
        modalTriggers[index].addEventListener('click', function(e) {
          e.preventDefault();
          modals[index].style.display = 'block';
        });
  
        closeButtons[index].addEventListener('click', function() {
          modals[index].style.display = 'none';
        });
      })(i);
    }
  });