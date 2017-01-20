$('html').css('overflow','hidden');
  var _height = $(window).height();
  var _width = $(window).width();

  var _block_height = (_height / 9);
  var _block_width = (_width / 16);
  
  var _animation_delay = 0.05;
  var _x_pos = 0;
  var _y_pos = 0;
  
  var _blocks = "<div id='unfold-block'><st"+"yle> .unfold-box{ width:"+ _block_width + "px;" + "height:" + _block_height +"px; } </st"+"yle>";
  
  for (i = 0; i < 9; i++) {
  _x_pos = 0;
    for (j = 0; j < 16; j++) {
    
    _blocks += "<div class='unfold-box' style='top:"+ _y_pos + "px;left:"+ _x_pos + "px;transition-delay:"+ _animation_delay + "s;'></div>"
    
    _animation_delay += 0.05; 
    _x_pos += _block_width;
    }
    _y_pos += _block_height;
  }
_blocks += "</div>";

$('html').append(_blocks);

//setTimeout(function(){
//$('.unfold-box').css('transform','scale(0.5)');
//
//},1000);

