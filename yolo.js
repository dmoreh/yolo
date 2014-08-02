var submitButtons = document.querySelectorAll('[type=submit]');
var YOLO_STRING = 'YOLO';

for (var i = 0; i < submitButtons.length; ++i) {
  var item = submitButtons[i];
  if (item.tagName === 'INPUT') {
    item.value = YOLO_STRING;
  } else {
    item.innerHTML = YOLO_STRING;
  }
}

