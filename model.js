  // Get modal and close button elements
  var modal = document.getElementById("myModal");
  var openButton = document.getElementById("openModalButton");
  var closeButton = document.getElementById("closeModalButton");
  var closeFooterButton = document.getElementById("closeModalFooterButton");

  // Function to open modal
  openButton.onclick = function() {
    modal.style.display = "block";
  };

  // Function to close modal
  closeButton.onclick = function() {
    modal.style.display = "none";
  };

  // Close modal with footer button
  closeFooterButton.onclick = function() {
    modal.style.display = "none";
  };

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };