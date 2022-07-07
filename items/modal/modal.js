  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // function bindModal(trigger, modal, close) {
  //   trigger = document.querySelector(trigger),
  //   modal = document.querySelector(modal),
  //   close = document.querySelector(close),
  //   trigger.addEventListener('click', e => {
  //     e.preventDefault();
  //     modal.style.display = 'flex';
  //   });
  //   close.addEventListener('click', () => {
  //     modal.style.display = 'none';
  //   });
  //   modal.addEventListener('click', e => {
  //     if (e.target == modal) {
  //       modal.style.display = 'none';
  //     }
  //   });
  // }
  // bindModal('.modal__btn', 'modal', 'modal__close');