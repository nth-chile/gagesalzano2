$(document).ready(function(){

//** VARIABLES **//

	var rowsSet = false;

	var $grid = $('.grid');
	
	var gridItemContents = $('.no-masonry.grid__item').map(function(i) {
			return $($($(this)[0]).html());
		});
	
	gridItemContents = gridItemContents.toArray();

	var masonryOptions = {
			itemSelector: '.grid__item__wrap',
			//columnWidth: 1,
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
		if (window.matchMedia("(max-width: 479px)").matches && layout == 'full') {
			layout = 'mini';
			layoutShouldChange = true;
		} else if (window.matchMedia("(min-width: 480px)").matches && layout == 'mini') {
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
				} else if ( $('.slick').length > 0 ) {
					//$('.row div').width('100%');
					doSlick();
					centerFullHeightClass();
				}
			} else if (layout == 'full') {
				if($('.home-wrap').length > 0) {
					buildGrid();
					if($('.tooltip').length == 0) createTooltips();
				} else if ($('.slick').length > 0 ) {
					$('.slick').slick('slickUnfilter');
					$('html').css('position', 'static');
					if(!rowsSet) {
						setColumnItemHeight();
						setRowItemWidths();
					}
				}
			}
			removeLoadScreen();
		}
	}
	}());

	//give article a target='_blank'
	$('article.slick a').attr('target', '_blank');
	//if a 'div' comes after a '.slick p', give 'article p' bottom padding
	$('.slick p').each( function(index, elt) {
		if ($(elt).next('div').length !== 0)
			$(elt).css('padding-bottom', '5rem');
	});


//** MEDIA QUERIES (ON LOAD) **//	


	if (window.matchMedia("(max-width: 479px)").matches) {
		var layout = 'mini';
		if ( $('.slick').length > 0 ) {
			//$('.row div').width('100%');
			doSlick();
			centerFullHeightClass();
		}
	} else if (window.matchMedia("(min-width: 480px)").matches) {
		var layout = 'full';
		if($('.home-wrap').length > 0) {
			buildGrid();
			if($('.tooltip').length == 0) createTooltips();
		} else if ($('.slick').length > 0 ) {
			setRowItemWidths();
			setColumnItemHeight();
		}
	}
	removeLoadScreen();



//** FUNCTION DEFINITIONS **//

	function buildGrid() {
		$grid.html('');
		$grid.masonry(masonryOptions);
		msnryItems.forEach(function(item) {
			$grid.append(item)
				.masonry('appended', item)
				.masonry();
		});
		$grid.on('layoutComplete', setTileZIndex);
	}
	function centerFullHeightClass() {
		$('.full-height').one('load', function() {
			var imgRatio = (
				($(this).height() * $('.slick').width()) /
				($(this).width() * $('.slick').height())
			);
			var articleRatio = (
				($('.slick').height() * $(this).width()) /
				($('.slick').width() * $(this).height())
			);
			if (imgRatio < articleRatio) {
				var leftValue = 0 - ($(this).width() / 2 - $(window).width() / 2);
				$(this).css('left', leftValue);
			} else {
				$(this).css({
					'width': '100%',
					'height': 'auto',
					'left': '0'					
				});
				var topValue = $(this).height() / 2 - $(window).height() / 2;
				if (topValue > 0) topValue = 0 - topValue;
				$(this).css('top', topValue);
			}
		})
		.each(function() {
			if(this.complete) $(this).trigger('load');
		});;
	}
	function createTooltips() {
		//tooltip(type, target, image, caption, captionBgColor);
		tooltip_img(
			'#me',
			'assets/images/tooltips/me.jpg',
			'This is a picture of me my friend <a href="http://www.ismellpaper.com/" target="_blank">Liz</a> took.',
			'Me'
		);
		tooltip_img_boxBottom(
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
			'<b>WORK EXPERIENCE:</b>',
			'<ul><li>— <b>Current:</b> Independent</li><li>— <b>Nelson Cash:</b> Sr. Designer, 6 years</li><li>— <b>Doejo:</b> Sr. Designer, 1 year</li><li>— <b>Smith Brothers Advertising:</b> Designer, 1 year</li><li>— <b>Mind Over Media:</b> Designer, 1 year</li></ul>'
		);
		tooltip_img_boxRight(
			'#edinboro',
			'assets/images/tooltips/edinboro.png',
			'<div style="color:rgb(162, 157, 157);padding-bottom:.5rem"><b>EDUCATION:<br />— Edinboro Univ. of PA</b><br /><span style="padding-left:15px">BFA, 2008</span></div>This picture sums up what it was like to walk on campus most of the year. I experienced lake-effect snowstorms, amazing friendships and lots of late nights at the studio.',
			'Edinboro University of Pennsylvania',
			'rgb(46, 43, 43)'
		);
	}
	function displayRandomQuote() {
		var counter = 0;
		$('p.quote').each(function() {
			counter++;
		});
  		var index = Math.floor(Math.random() * (counter));
  		var $p = $($('a.quote__quote')[index]);

  		var $startQuote = $('<span>&ldquo;</span>')
  		$startQuote.addClass('desktop quotation-mark quote__quote')
  					  .css('display', 'inline');
  		
  		var $endQuote = $('<span>&rdquo;</span>')
  		$endQuote.addClass('desktop quotation-mark quote__quote')
  					  .css('display', 'inline');
  		
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
		$('.slick').slick('slickFilter', ':not(.desktop)');
		$('html').css({'position': 'absolute',
						'top': '0',
						'right': '0',
						'bottom': '0',
						'left': '0'
		});
		$('body').css('overflow', 'hidden');
		$('.slick-track').height($(window).height() - 56);
		$('.slick-dots').find('button').text('');
	}
	function removeLoadScreen(){
		$('.loading').remove();
		$('html, body').css('overflow', 'visible');
		$('html, body').css('height', 'auto');
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
	function tooltip_img_boxBottom(target, image, caption, alt, captionBgColor) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-img-box--bottom';
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
	function tooltip_img_boxRight(target, image, caption, alt, captionBgColor) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-img-box--right';
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
		$(img).load(function() {
			$(fig).height($(img).height());
		})
		.each(function() {
		  if(this.complete) $(this).trigger('load');
		});
		showOnHover(div, target);
	}
	function tooltip_text(target, title, text) {
		var div = document.createElement('div');
		div.className = 'tooltip tooltip-text';
		var titleElt = document.createElement('h4');
		var textElt = document.createElement('h4');
		titleElt.innerHTML = title;
		textElt.innerHTML = text;
		div.appendChild(titleElt);
		div.appendChild(textElt);
		document.body.appendChild(div);
		showOnHover(div, target);
	}
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
		rowsSet = true;
		var maxWidth = $(window).width();
		$('.row').each(function() {
			var total = 0;
			var imagesInRow = $(this).find('img').length;
			$(this).find('img').one('load', function() {
				//set heights of each image to 400
				if($(this).closest('.column').length > 0) {
					$(this).height(400 / $(this).closest('.column').children().length);
				} else
					$(this).height(400);
				//add up widths of images except for ones not first child of column
				if ($(this).parent().is('div:first-child') || $(this).closest('.column').length == 0)
					total += $(this).width() + 6;
				//after last image is loaded ...
				imagesInRow--;
				if (imagesInRow == 0) {
					$(this).closest('.row').find('img').each(function() {
						//var px = $(this).width() / (total / maxWidth);
						//var percent = (px / $(this).closest('.row').width()) * 100 + '%';
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
			.each(function() {
			  if(this.complete) $(this).trigger('load');
			});
		});
	};
	function showOnHover(elt, target) {
		$('body').on('mouseenter', target, function(e) {
			var x;
			var y;
			if(e.pageX || e.pageY) {
				x = e.pageX;
				y = e.pageY;
			}
			else if (e.clientX || e.clientY) {
				x = e.clientX + document.body.scrollLeft
					+ document.documentElement.scrollLeft;
				y = e.clientY + document.body.scrollTop
					+ document.documentElement.scrollTop;
			}
			var paddingBottom = parseInt($(elt).css('padding-bottom').slice(0, -2));
			var paddingTop = parseInt($(elt).css('padding-top').slice(0, -2));
			elt.style.top = y - ($(elt).height() + 20 ) - (paddingBottom + paddingTop) + 'px';
			if ( x - $(elt).width() / 2 < 0 )
				elt.style.left = 0;
			else if ( x + $(elt).width() / 2 > $(window).width() ) {
				console.log ($(window).width(), $(elt).width());
				elt.style.left = $(window).width() - $(elt).width() + 'px';
			}
			else
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