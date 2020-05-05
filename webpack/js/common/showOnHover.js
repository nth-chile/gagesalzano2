export default function showOnHover(elt, target) {
  $('body').on('mouseenter', target, function (e) {

    var paddingBottom = parseInt($(elt).css('padding-bottom').slice(0, -2));
    var paddingTop = parseInt($(elt).css('padding-top').slice(0, -2));

    // Set top pos
    if (e.clientY - ($(elt).height() + 20 + paddingBottom + paddingTop) / 2 < 0) {
      elt.style.top = e.pageY + 20 - paddingBottom + paddingTop + 'px';
    }
    else {
      elt.style.top = e.pageY - ($(elt).height() + 20) - (paddingBottom + paddingTop) + 'px';
    }

    // Set left pos
    if (e.pageX - $(elt).width() / 2 < 0)
      elt.style.left = 0;
    else if (e.pageX + $(elt).width() / 2 > $(window).width())
      elt.style.left = $(window).width() - $(elt).width() + 'px';
    else
      elt.style.left = e.pageX - $(elt).width() / 2 + 'px';
  });
  $('body').on('mouseleave', target, function (e) {
    setTimeout(function () {
      if (!$(elt).is(':hover'))
        elt.style.left = '-9999px';
      else {
        $(elt).mouseleave(function (e) {
          elt.style.left = '-9999px';
        });
      }
    }, 150);
  });
}