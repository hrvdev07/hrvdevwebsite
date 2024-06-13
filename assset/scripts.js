// scripts.js
function showToastWithIcon(message, iconClass) {
  var toast = document.getElementById('toast');
  var toastIcon = document.getElementById('toastIcon');
  var toastMessage = document.getElementById('toastMessage');
  
  toastIcon.innerHTML = '<i class="' + iconClass + '"></i>';
  toastMessage.innerHTML = message;
  toast.className = "toast show";
  
  setTimeout(function() {
      toast.className = toast.className.replace("show", "");
  }, 5000); // Hiển thị toast trong 5 giây
}
