//show tab2
$ ('.tab2').click(function() {
  $ ('.infoTab1').hide('fast');
  $ ('.infoTab2').show('fast');
  $ ('.tab1').removeAttr('id');
  $ ('.tab2').attr('id', 'activeTab');
  $ ('img[src="src/images/inactiveStar.svg"]').attr('src','src/images/star.svg');
  $ ('img[src="src/images/smile.svg"]').attr('src','src/images/inactiveSmile.svg');
});

//show tab1
$ ('.tab1').click(function() {
  $ ('.infoTab2').hide('fast');
  $ ('.infoTab1').show('fast');
  $ ('.tab2').removeAttr('id');
  $ ('.tab1').attr('id', 'activeTab');
  $ ('img[src="src/images/star.svg"]').attr('src','src/images/inactiveStar.svg');
  $ ('img[src="src/images/inactiveSmile.svg"]').attr('src','src/images/smile.svg');
})

//fix responsive tabs
$(window).resize(function() {
  if ($(window).width()>=768) {
    $('.infoTab1').show();
    $('.infoTab2').show();
  }
  else {
  }
});

//show moreItems
$ ('.showMore').click(function() {
  $('#invisibleItem').attr('id','visibleItem');
  $('#invisibleItem').attr('id','visibleItem');
  $('#invisibleItem').attr('id','visibleItem');
  $('#invisibleItem').attr('id','visibleItem');
  $('#invisibleItem').attr('id','visibleItem');
  $('.showMore').hide('fast');
});

//show/hide smileOnHover
$ ('td').mouseover(function (){
  $(this).find('#smileHover').show('fast');
});

$ ('td').mouseleave(function (){
  $('td').children('#smileHover').hide('fast');
});
