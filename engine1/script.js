// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_rotate(i,h,a){var d=jQuery;var g=d(this);var e=d(".ws_list",a);var b={position:"absolute",left:0,top:0};var f=d("<div>").addClass("ws_effect ws_rotate").css(b).css({height:"100%",width:"100%",overflow:"hidden"}).appendTo(a);var c;this.go=function(j,k){var m=d(h[0]);m={width:m.width(),height:m.height(),marginTop:parseFloat(m.css("marginTop")),marginLeft:parseFloat(m.css("marginLeft")),maxHeight:"none",maxWidth:"none",};if(c){c.stop(true,true)}c=d(h.get(j)).clone().css(b).css(m).appendTo(f);if(!i.noCross){var l=d(h.get(k)).clone().css(b).css(m).appendTo(f);wowAnimate(l,{opacity:1,rotate:0,scale:1},{opacity:0,rotate:i.rotateOut||180,scale:i.scaleOut||10},i.duration,"easeInOutExpo",function(){l.remove()})}wowAnimate(c,{opacity:1,rotate:-(i.rotateIn||180),scale:i.scaleIn||10},{opacity:1,rotate:0,scale:1},i.duration,"easeInOutExpo",function(){c.remove();c=0;g.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"rotate",prev:"",next:"",duration:22*100,delay:23*100,width:800,height:600,autoPlay:true,autoPlayVideo:true,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"parallax",controls:false,controlsThumb:false,responsive:2,fullScreen:false,gestures:2,onBeforeStep:0,images:[{src:"./img_20170921_124038.jpg",title:"IMG_20170921_124038"},{src:"./img_20170904_182451.jpg",title:"IMG_20170904_182451"},{src:"./img_20170904_185851.jpg",title:"IMG_20170904_185851"},{src:"./img_20170904_190233.jpg",title:"IMG_20170904_190233"},{src:"./img_20170917_184715effects.jpg",title:"IMG_20170917_184715-EFFECTS"},{src:"./img_20170917_1837171.jpg",title:"IMG_20170917_183717(1)"},{src:"./img_20170904_195313.jpg",title:"IMG_20170904_195313"},{src:"./img_20170903_182817.jpg",title:"IMG_20170903_182817"},{src:"./img_20171206_180906.jpg",title:"IMG_20171206_180906"},{src:"./img_20170904_200506.jpg",title:"IMG_20170904_200506"},{src:"./imag2657.jpg",title:"IMAG2657"},{src:"./imag2593.jpg",title:"IMAG2593"},{src:"./imag2629.jpg",title:"IMAG2629"},{src:"./imag2618.jpg",title:"IMAG2618"},{src:"./imag2582pano.jpg",title:"IMAG2582-PANO"},{src:"./img20170923wa0002.jpg",title:"IMG-20170923-WA0002"},{src:"./img20170921wa0000.jpg",title:"IMG-20170921-WA0000"},{src:"./img20170923wa0021.jpg",title:"IMG-20170923-WA0021",href:"http://wowslider.net"},{src:"./img20171007wa0003.jpg",title:"IMG-20171007-WA0003"}]});