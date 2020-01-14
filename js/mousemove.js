$(function() {
  var oXArr = [];
  var oYArr = [];
  var rightArr = [];
  var leftArr = [];
  var topArr = [];
  var downArr = [];
  var rightMoveL;
  var leftMoveL;
  var downMoveL;
  var upMoveL;

  var oTop = $('.box-top');
  var oBot = $('.box-bot');
  var mouse = $('.mouse');
  $(".banner1").mousemove(function(e) {
      var obxX = e.pageX;
      var obxY = e.pageY;
      oXArr.unshift(obxX);
      oYArr.unshift(obxY);
      oXArr.splice(2, 1);
      oYArr.splice(2, 1);

      // tfo();
      function tfo() {

          if (oXArr[0] > oXArr[1]) {
              // console.log("向右");
              leftArr = [];
              rightArr.push(obxX);
              rightMoveL = Math.abs(rightArr[rightArr.length - 1] - rightArr[0]);

              oTop.html("鼠标向右" + rightMoveL);

              return true;
          } else {
              // console.log("向左");
              rightArr = [];
              leftArr.push(obxX);
              leftMoveL = Math.abs(leftArr[leftArr.length - 1] - leftArr[0]);

              oTop.html("鼠标向左" + leftMoveL);
              return false;
          }
      }
      // tfw();
      function tfw() {
          if (oYArr[0] > oYArr[1]) {
              // console.log("向下");
              topArr = [];
              downArr.push(obxY);
              downMoveL = Math.abs(downArr[downArr.length - 1] - downArr[0]);
              oBot.html("鼠标向下" + downMoveL);
              return true;
          } else {
              // console.log("向上");
              downArr = [];
              topArr.push(obxY);
              upMoveL = Math.abs(topArr[topArr.length - 1] - topArr[0]);
              oBot.html("鼠标向上" + upMoveL);
              return false;
          }
      }
      if (tfo() && tfw()) {
          //右下
          mouse.html("鼠标向右下");
      } else if (tfo() && !tfw()) {
          //右上
          mouse.html("鼠标向右上");
      } else if (!tfo() && tfw()) {
          //左下
          mouse.html("鼠标向左下");
      } else if (!tfo() && !tfw()) {
          //左上
          mouse.html("鼠标向左上");
      }
  });
});