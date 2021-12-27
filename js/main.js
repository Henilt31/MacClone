var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var rtime = function() {
    var time = new Date();
    $('#timer').text(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}
setInterval(rtime, 1000);
console.log('%c By Erick Vinicios', 'color: #00ff75; font-size: 40px;');
console.log('%c https://github.com/erickvinicios', 'color: #6812f4; font-size: 16x;');