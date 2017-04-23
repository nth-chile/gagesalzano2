$(document).ready(function(){

//** VARIABLES **//

	var $grid = $('.grid');
	
	var gridItemContents = $('.no-masonry.grid__item').map(function(i) {
			return $($($(this)[0]).html());
		});
	
	gridItemContents = gridItemContents.toArray();

	var masonryOptions = {
			itemSelector: '.grid__item__wrap',
			columnWidth: 1,
			originTop: false
		};

	var msnryItems = (function() {
			var counter = gridItemContents.length - 1;
			return (
				GRID_DATA.map(function(item, i) {
					var $block = $(item); 
					if ($($block.children()[0]).hasClass('ghost') == false && counter >= 0 ) {
						$($block.children()[0]).append(gridItemContents[counter]);
						counter--;
					}
					return $($block.prop('outerHTML'));
				})
			);
		}());

//** DO STUFF **//

	displayRandomQuote();
	//resize throttler
	(function() {window.addEventListener("resize", resizeThrottler, false);var resizeTimeout;function resizeThrottler() {if ( !resizeTimeout ) {resizeTimeout = setTimeout(function() {resizeTimeout = null;actualResizeHandler();}, 66);}}

	function actualResizeHandler() {
		var layoutShouldChange = false;
		if (window.matchMedia("(max-width: 500px)").matches && layout == 'full') {
			layout = 'mini';
			layoutShouldChange = true;
		} else if (window.matchMedia("(min-width: 501px)").matches && layout == 'mini') {
			layout = 'full';
			layoutShouldChange = true;
		}
		if (layoutShouldChange) {
			if (layout == 'mini') {
				if ($('.home-wrap').length > 0) {
					$grid.masonry('destroy');
					$grid.html('');
					gridItemContents.forEach(function(item) {
						$grid.append(
							$(
								$('<div>').attr('class', 'no-masonry grid__item')
							).html(item)
						)
					});
				} else if ( $('.slick').length > 0 ) doSlick();
			} else if (layout == 'full') {
				if($('.home-wrap').length > 0) {
					buildGrid();
					if($('.tooltip').length == 0) createTooltips();
				} else if ($('.slick').length > 0 ) {
					//setColumnHeight();
					setColumnItemHeight();
					setRowItemWidths();
				}
			}
		}
	}

	}());

	//give article a target='_blank'
	$('article.slick a').attr('target', '_blank');


//** MEDIA QUERIES (ON LOAD) **//	


	if (window.matchMedia("(max-width: 500px)").matches) {
		var layout = 'mini';
		if ( $('.slick').length > 0 ) doSlick();	
	} else if (window.matchMedia("(min-width: 501px)").matches) {
		var layout = 'full';
		if($('.home-wrap').length > 0) {
			buildGrid();
			if($('.tooltip').length == 0) createTooltips();
		} else if ($('.slick').length > 0 ) {
			//setColumnHeight();
			setRowItemWidths();
			setColumnItemHeight();
		}
	}



//** FUNCTION DEFINITIONS **//

	function applyHover() {
		[].slice.call(document.querySelectorAll('.grid__item a')).forEach(function(stackEl) {
			new VegaFx(stackEl);
		});
	}
	function buildGrid() {
		$grid.html('');
		$grid.masonry(masonryOptions);
		msnryItems.forEach(function(item) {
			$grid.append(item)
				.masonry('appended', item)
				.masonry();
		});
		$grid.on('layoutComplete', setTileZIndex);
		applyHover();
	}
	function createTooltips() {
		//tooltip(type, target, image, caption, captionBgColor);
		tooltip_img(
			'#me',
			'assets/images/tooltips/me.png',
			'This is a picture of me my friend <a href="http://www.ismellpaper.com/" target="_blank">Liz</a> took.',
			'Me'
		);
		tooltip_img_box(
			'#stealth-gaming',
			'assets/images/tooltips/stealthgaming.png',
			'<b>Stealth Gaming</b>, 2000<br />Project with friends back in the day',
			'Project with friends back in the day',
			'rgb(66, 90, 131)'
		);
		tooltip_img(
			'#clickingaway',
			'assets/images/tooltips/clickingaway.png',
			'Clicking away, every day.<br />Photo by <a href="https://www.behance.net/joshuaslisd3b0" target="_blank">Josh</a>.'
		);
		tooltip_text(
			'#work-experience',
			'WORK EXPERIENCE:',
			'<ul><li>— <b>Current</b> Freelance</li><li>— <b>Nelson Cash</b> Sr. Designer, 6 years</li><li>— <b>Doejo</b> Sr. Designer, 1 year</li><li>— <b>Smith Brothers Advertising</b> Designer, 1 year</li><li>— <b>Mind Over Media</b> Designer, 1 year</li></ul>'
		);
	}
	function displayRandomQuote() {
		var counter = 0;
		$('p.quote').each(function() {
			counter++;
		});
  		var index = Math.floor(Math.random() * (counter));
  		var $p = $($('a.quote__quote')[index]);

  		var $startQuote = $('<p>&ldquo;</p>')
  		$startQuote.addClass('desktop quotation-mark')
  					  .css('display', 'inline-block');
  		
  		var $endQuote = $('<p>&rdquo;</p>')
  		$endQuote.addClass('desktop quotation-mark')
  					  .css('display', 'inline-block');
  		
  		$p.css('display', 'inline');
  		$p.before($startQuote);
  		$p.after($endQuote);
  		$($('h4.quote__source')[index]).addClass('chosen')
  									   .css('display', 'block');
	}
	function doSlick() {
		$('.slick').slick({
			arrows: false,
			dots: true,
			infinite: false,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 500,
					settings: 'unslick'
				}
			],
			slide: '.slide'
		});
		$(document).height('100vh');
		$('body').css('overflow', 'hidden');
		$('.slick-track').height($(window).height() - 56);
		$('.slick-dots').find('button').text('');
	}
	function tooltip_img(target, image, caption, alt) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-img';
		var fig = document.createElement('figure');
		var img = document.createElement('img');
		img.src = image;
		if (arguments.length = 4) img.alt = alt;
		var cptn = document.createElement('figcaption');
		cptn.innerHTML = caption;
		fig.appendChild(img);
		fig.appendChild(cptn);
		div.appendChild(fig);
		document.body.appendChild(div);
		showOnHover(div, target);
		
	}
	function tooltip_img_box(target, image, caption, alt, captionBgColor) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-img-box';
		var fig = document.createElement('figure');
		var img = document.createElement('img');
		img.src = image;
		if (arguments.length = 5) img.alt = alt;
		var cptn = document.createElement('figcaption');
		cptn.style.backgroundColor = captionBgColor;
		cptn.innerHTML = caption;
		fig.appendChild(img);
		fig.appendChild(cptn);
		div.appendChild(fig);
		document.body.appendChild(div);
		showOnHover(div, target);
	}
	function tooltip_text(target, title, text) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-text';
		var h5 = document.createElement('h5');
		var h4 = document.createElement('h4');
		h5.innerHTML = title;
		h4.innerHTML = text;
		div.appendChild(h5);
		div.appendChild(h4);
		document.body.appendChild(div);
		showOnHover(div, target);
	}
	// function setColumnHeight() {
	// 	$('.column').each(function() {
	// 		$(this).outerHeight(
	// 			'100%'//$(this).parent().height() + 'px'
	// 		)
	// 	})
	// }
	function setColumnItemHeight() {
		$('.column').children().each(function() {
			$(this).outerHeight(
				100 / $(this).parent().children().length + '%'
			)
		})
	}
	function setTileZIndex() {
		var $tiles = $('.grid__item__wrap');
		var coords = [];
		//var z = 9999;
		$tiles.each(function(index) {
			var topLeft = $(this).offset();
			var obj = {
				bottom: topLeft.top + $(this).height(),
				left: topLeft.left,
				top: topLeft.top,
				right: topLeft.left + $(this).width(),
				$this: $(this),
				z: 9999
			};
			coords.push(obj);
		});
		coords.forEach(function(a) {
			coords.forEach(function(b) {
				if (a.bottom < b.top)
					b.z += 4;
				if (a.left > b.right)
					b.z += 1;
			})
		});
		
		coords.forEach(function(elt) {
			elt.$this.css('z-index', elt.z);
		});
	}
	function setRowItemWidths() {
		var maxWidth = $(window).width() - 230;
		$('.row').each(function() {
			var total = 0;
			var imagesInRow = $(this).find('img').length;
			$(this).find('img').one('load', function() {
				if($(this).closest('.column').length > 0) {
					$(this).height(400 / $(this).closest('.column').children().length);
				} else
					$(this).height(400);

				if ($(this).parent().is('div:first-child') || $(this).closest('.column').length == 0)
					total += $(this).width() + 6;
				
				imagesInRow--;
				if (imagesInRow == 0) {
					$(this).closest('.row').find('img').each(function() {
						var px = $(this).width() / (total / maxWidth);
						var percent = (px / $(this).closest('.row').width()) * 100 + '%';
						$(this).css('width', '100%');
						if ($(this).closest('.column').length > 0)
							$(this).closest('.column').css('width', percent);
						else
							$(this).parent().css('width', percent);
						$(this).css('height', 'auto');
					})
				}
			})
			.each(function() {
			  if(this.complete) $(this).trigger('load');
			});
		});
	};
	function showOnHover(elt, target) {
		$('body').on('mouseenter', target, function(e) {
			var x = e.clientX;
			var y = e.clientY + document.body.scrollTop;
			var paddingBottom = parseInt($(elt).css('padding-bottom').slice(0, -2));
			var paddingTop = parseInt($(elt).css('padding-top').slice(0, -2));
			elt.style.top = y - ($(elt).height() + 20) - (paddingBottom + paddingTop) + 'px';
			elt.style.left = x - $(elt).width() / 2 + 'px';
		});
		$('body').on('mouseleave', target, function(e) {
			setTimeout(function(){
				if(!$(elt).is(':hover'))
					elt.style.left = '-9999px';
				else {
					$(elt).mouseleave(function(e) {
						elt.style.left = '-9999px';
					});
				}
			}, 150);
		});
		
	}
});