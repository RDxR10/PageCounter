var sP = 0;
var dP = 0;

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  var link = links[i].href;
  if (link.indexOf('?') === -1) {
    sP++;
  } else {
    dP++;
  }
}

alert('Static Pages: ' + sP + '\nDynamic Pages: ' + dP);
