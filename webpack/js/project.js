$(document).ready(function () {
  /////////////////
  // Definitions //
  /////////////////

  //this function needs help! there must be a better way to size images in a '.row' so their edges are flush
  function setRowItemWidths() {
    rowsSet = true; //set global to declare that this function has been called!
    $('.row').each(function () {
      var total = 0; //the sum of image widths when they have all been set to an equal height
      var imagesInRow = $(this).find('img').length;
      $(this).find('img').one('load', function () {
        //give each image the same height, say 400px ... only to compare them!
        if ($(this).closest('.column').length > 0) {
          $(this).height(400 / $(this).closest('.column').children().length);
        } else
          $(this).height(400);
        //total the widths of images except for ones not first child of column, since those shuoldn't make the row wider
        if ($(this).parent().is('div:first-child') || $(this).closest('.column').length == 0)
          total += $(this).width() + 6;
        imagesInRow--;
        if (imagesInRow == 0) { //after last image is loaded ...
          $(this).closest('.row').find('img').each(function () {
            var percent = $(this).width() / total * 100 + '%';
            $(this).css('width', '100%');
            if ($(this).closest('.column').length > 0) {
              $(this).closest('.column').css('width', percent);
            }
            else {
              $(this).parent().css('width', percent);
            }
            $(this).css('height', 'auto');
          })
        }
      })
        .each(function () {
          if (this.complete) $(this).trigger('load');
        });
    });
  };



  ////////
  // Do //
  ////////
})