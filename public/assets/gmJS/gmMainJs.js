// function preventDefault(e) {
//     e = e || window.event;
//     if (e.preventDefault) {
//         e.preventDefault();
//     } else {
//         e.returnValue = false;
//     }
// }
//
// function myKeyDownHandler(e) {
//
//     preventDefault(e);
//     return false;
// }


var rgb = [255, 0, 0];

setInterval(function() {
  var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  (o > 125) ? $('.gmMain').css('color', 'black'): $('.gmMain').css('color', 'white'); //http://www.w3.org/TR/AERT#color-contrast
  $('.gmMain').css('background-color', c);
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);
}, 1000);
