var doIt = function() {
  var items = $('.yt-shelf-grid-item');
  for(var f=0; f < items.length; f++) {
    var timeBits = $('.video-time', items[f]).text().split(':');
    var hours = 0;
    var mins = 0;
    var seconds = 0;
    if(timeBits.length===3) {
      hours = parseInt(timeBits[0]);
      mins = parseInt(timeBits[1]);
      seconds = parseInt(timeBits[2]);
    }
    if(timeBits.length===2) {
      mins = parseInt(timeBits[0]);
      seconds = parseInt(timeBits[1]);
    }
    mins += hours * 60;
    if(mins < 30) {
      items[f].remove();
    }
  }
  window.setTimeout(doIt, 2000);
};
doIt();