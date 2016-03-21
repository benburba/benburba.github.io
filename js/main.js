$(function() {
  $(".con h1").typed({
    strings: ["Hey there,", "We are Benburba."],
    typeSpeed: 0,
    showCursor: false,
    callback: function(){
      $('.con .sayhi').removeClass('hidden');
    }
  });
});