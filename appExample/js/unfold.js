   var _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   var _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var _block_height = Math.round(_height / 9);
   var _block_width = Math.ceil(_width / 16);
   var _animation_delay = 0.03;
   var _blocks = "<div id='unfold-block'><st" + "yle> .unfold-box{ width:" + _block_width + "px;" + "height:" + _block_height + "px; } </st" + "yle>";
   for (var i = 0; i < 9; i++) {
     for (var j = 0; j < 15; j++) {
       _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;'></div>"
       _animation_delay += 0.03;
     }
     _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;width:"+ ( _width - (_block_width * 15)) + "px;'></div>";
     _animation_delay += 0.03;
   }


   _blocks += "<div id='loader'><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>";
   document.getElementsByTagName("html")[0].insertAdjacentHTML('beforeend', _blocks);
document.getElementsByTagName("html")[0].style.overflow = "hidden";
   setTimeout(function() {

      //alert("selecting al boxes");
     var _blocksDOM = document.querySelectorAll(".unfold-box");
     for (var k = 0; k < _blocksDOM.length; k++) {
       var block = _blocksDOM[k];
       block.classList.add("clear");
     }
      //alert("adding to wrap");
     document.getElementById("unfold-block").classList.add("clearing");
   }, 2000);

   setTimeout(function() {
      //alert("adding to loader");
     document.getElementById('loader').classList.add('clearing');
   }, 4000);

   setTimeout(function() {
      //alert("removing wrqap");
     document.getElementById("unfold-block").remove();
     document.getElementsByTagName("html")[0].style.overflow = "auto";
   }, 7000);
