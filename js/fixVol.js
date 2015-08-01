document.getElementById('cta-vol-1').attachEvent("onclick", function() {
  document.getElementById('vol-content').style.display = "inline-block";
});
document.getElementById('cta-vol-2').attachEvent("onclick", function() {
  document.getElementById('vol-content').style.display = "inline-block";
});
document.getElementById('vol-close').attachEvent("onclick", function() {
  document.getElementById('vol-content').style.display = "none";
});
document.getElementById('vol-form').attachEvent("onsubmit", function() {
  document.getElementById('vol-form-qtns').style.display = "none";
  document.getElementById('vol-subhead').style.display = "none";
  document.getElementById('vol-submt-btn').style.display = "none";
  document.getElementById('vol-thanks').style.display = "block";
});