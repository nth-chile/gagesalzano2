$(document).ready(function(){

//** GLOBALS **//

	var rowsSet = false;

	var $grid = $('.grid');

	var gridItemContents = $('.no-masonry.grid__item').map(function(i) {
			return $($($(this)[0]).html());
		});

	gridItemContents = gridItemContents.toArray();

	var masonryOptions = {
			itemSelector: '.grid__item__wrap',
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

	//each time slick is re-initialized, $('.slide.slick-active').attr('aria-describedby').slice(-2) increases by ten -_-
	var slickFix = -10;

//** DO STUFF **//
	setTileZIndex();
	displayRandomQuote();
	createTooltips();

	//resize throttler
	(function() {window.addEventListener("resize", resizeThrottler, false);var resizeTimeout;function resizeThrottler() {if ( !resizeTimeout ) {resizeTimeout = setTimeout(function() {resizeTimeout = null;actualResizeHandler();}, 66);}}

	function actualResizeHandler() {
		var layoutShouldChange = false;
		if (window.matchMedia("(max-width: 479.9px)").matches && layout != 'mini') {
			layout = 'mini';
			layoutShouldChange = true;
		}
		else if (window.matchMedia("(min-width: 480px) and (max-width: 599.9px)").matches && layout != 'medium--1') {
			layout = 'medium--1';
			layoutShouldChange = true;
		} else if (window.matchMedia("(min-width: 600px) and (max-width: 699.9px)").matches && layout != 'medium--2') {
			layout = 'medium--2';
			layoutShouldChange = true;
		} else if (window.matchMedia("(min-width: 600px) and (max-width: 799.9px)").matches && layout != 'medium--2') {
			layout = 'medium--2';
			layoutShouldChange = true;
		} else if (window.matchMedia("(min-width: 800px)").matches && layout != 'full') {
			layout = 'full';
			layoutShouldChange = true;
		}

		if (layoutShouldChange) {
			if (layout == 'mini') {
				if ( $('.slick').length > 0 ) { //if article page
					slickFix += 10;
					doSlick();
					assignFullHeightContainerClass();
					centerFullHeightClass();
					darkDots();
				}
			} else if (layout == 'medium--1' || layout == 'medium--2') {
				if($('.home-wrap').length > 0) {
					buildTinyGrid();
				} else if ($('.slick').length > 0 ) {
					$('.slick').slick('slickUnfilter');
					$('html').css('position', 'static');
					if(!rowsSet) { //if these functions haven't been called
						setColumnItemHeight();
						setRowItemWidths();
					}
				}
			}

			removeLoadScreen();
			setTileZIndex();
		}
	}
	}());

	$('article.slick a').attr('target', '_blank');
	//if a 'div' comes after an 'article p', give the paragraph bottom padding
	$('.slick p').each( function(index, elt) {
		if ($(elt).next('div').length !== 0 || $(elt).next('figure').length !== 0)
			$(elt).css('padding-bottom', '5rem');
	});

//** MEDIA QUERIES (ON PAGE LOAD) **//
	if (window.matchMedia("(max-width: 479.9px)").matches) {
		var layout = 'mini';
		if ( $('.slick').length > 0 ) {
			doSlick();
			assignFullHeightContainerClass();
			centerFullHeightClass();
			slickFix += 10;
			darkDots();
		}
	} else if (window.matchMedia("(min-width: 480px) and (max-width: 799.9px)").matches) {
		var layout = 'medium';
		if($('.home-wrap').length > 0) {
			buildTinyGrid();
		} else if ($('.slick').length > 0 ) {
			setRowItemWidths();
			setColumnItemHeight();
		}
	}
	else if (window.matchMedia("(min-width: 800px)").matches) {
		var layout = 'full';
		if ($('.slick').length > 0 ) {
			setColumnItemHeight();
			setRowItemWidths();
		}
	}
	removeLoadScreen();

//** FUNCTION DEFINITIONS **//
	function buildTinyGrid() {
		var $img = $('.grid__item').find('img');
		$img.one('load', function() {
			if($(this).height() / $(this).width() < $(this).closest('.grid__item').height() / $(this).closest('.grid__item').width())
				if($(this).hasClass('stretchfix') == false) $(this).addClass('stretchfix');
		})
		.each(function() {
			if(this.complete) $(this).trigger('load');
		});
	}
	//on mobile 'slide' view, make article images with class of 'full-height' fill screen
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
				$(this).addClass('full-height--centered-x')
			} else {
				$(this).addClass('full-height--centered-y')
			}
		})
		.each(function() {
			if(this.complete) $(this).trigger('load');
		});
	}
	function assignFullHeightContainerClass() {
		$('.full-height').parent('div').addClass('full-height__container');
	}

	function createTooltips() {
		//tooltip(type, target, image, caption, captionBgColor);
		tooltip_img(
			'#me',
			'assets/images/tooltips/me.jpg',
			'Photo by <a href="https://www.instagram.com/smmonson/">Shannon</a>',
			'Me'
		);
		tooltip_img_boxBottom(
			'#stealth-gaming',
			'assets/images/tooltips/stealthgaming.png',
			'This is the only decent screenshot from the Wayback Machine that I could grab of one the many schemes me and friends in high school dreamed up. I was usually the graphics guy because I wasn’t nearly as smart as everyone else, and this is the type of stuff I would come up with... 😂',
			'Project with friends back in the day',
			'rgb(66, 90, 131)'
		);
		tooltip_img(
			'#clickingaway',
			'assets/images/tooltips/clickingaway.png',
			'Clicking away, every day.<br />Photo by <a href="https://dribbble.com/joshliston" target="_blank">Josh</a>.'
		);
		tooltip_text(
			'#work-experience',
			'<b>Work Experience:</b>',
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
	function darkDots(disconnect) {
			var darkSlideIndexes = [];
			$('.slick .slide').each( function(index) {
				if ($(this).find('.bg-dark').length > 0) {
					darkSlideIndexes.push(index) //< 9 ? '0' + index : index);
				}
			});
			var target = document.querySelector('.slick-track');
			var observer = new MutationObserver(function(mutations, instance) {
				var slideNumber = $('.slide.slick-active').attr('aria-describedby');
				if ( slideNumber != undefined && darkSlideIndexes.includes(slideNumber.slice(-2) - slickFix) ) {
					if (!$('.slick-dots').hasClass('slick-dots--dark'))
						$('.slick-dots').addClass('slick-dots--dark');
				}
				else {
					if ( $('.slick-dots').hasClass('slick-dots--dark') )
						$('.slick-dots').removeClass('slick-dots--dark');
				}
			});
			var config = {attributes: true}
			observer.observe(target, config);
	}
	function displayRandomQuote() {
		var max = $('a.quote__quote').length;
  		var index = Math.floor(Math.random() * max);
  		var $p = $($('a.quote__quote')[index]);

  		$p.css('display', 'inline');
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
					breakpoint: 479.9,
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

		$('.slick').on('edge', function(event, slick, direction) {
			if (direction == 'left')
				var url = document.querySelector('.next').href;
			else if (direction == 'right')
				var url = document.querySelector('.prev').href;
			window.location.href = url;
		});
	}
	function removeLoadScreen(){
		$('#loading').remove();
		$('html, body').css('overflow', 'visible');
		if (document.getElementsByClassName('home-wrap').length > 0)
			$('html, body').css('height', '100%');
		else
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
		cptn.className = 'tooltip__figcaption';
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
		cptn.className = 'tooltip__figcaption';
		fig.appendChild(img);
		fig.appendChild(cptn);
		div.appendChild(fig);
		document.body.appendChild(div);
		$(img).load(function() {
			$(fig).width($(img).width());
		})
		.each(function() {
		  if(this.complete) $(this).trigger('load');
		});
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
		cptn.className = 'tooltip__figcaption';
		fig.appendChild(img);
		fig.appendChild(cptn);
		div.appendChild(fig);
		document.body.appendChild(div);
		$(img).load(function() {
			$(fig).height($(img).height());
			$(cptn).width($(img).width());
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
	//for article pages, divs in a 'div.column' are equal height
	function setColumnItemHeight() {
		$('.column').children().each(function() {
			$(this).outerHeight(
				100 / $(this).parent().children().length + '%'
			)
		})
	}
	// So that hovered grid items overlap properly when they grow
	function setTileZIndex() {
		var $tiles = $('.grid__item');
		var coords = [];
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
	//this function needs help! there must be a better way to size images in a '.row' so their edges are flush
	function setRowItemWidths() {
		rowsSet = true; //set global to declare that this function has been called!
		var maxWidth = $(window).width();
		$('.row').each(function() {
			var total = 0; //the sum of image widths when they have all been set to an equal height
			var imagesInRow = $(this).find('img').length;
			$(this).find('img').one('load', function() {
				//give each image the same height, say 400px ... only to compare them!
				if($(this).closest('.column').length > 0) {
					$(this).height(400 / $(this).closest('.column').children().length);
				} else
					$(this).height(400);
				//total the widths of images except for ones not first child of column, since those shuoldn't make the row wider
				if ($(this).parent().is('div:first-child') || $(this).closest('.column').length == 0)
					total += $(this).width() + 6;
				imagesInRow--;
				if (imagesInRow == 0) { //after last image is loaded ...
					$(this).closest('.row').find('img').each(function() {
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
	// show tooltips at mouse position
	function showOnHover(elt, target) {
		$('body').on('mouseenter', target, function(e) {

			var paddingBottom = parseInt($(elt).css('padding-bottom').slice(0, -2));
			var paddingTop = parseInt($(elt).css('padding-top').slice(0, -2));

			// Set top pos
			if ( e.clientY - ($(elt).height() + 20 + paddingBottom + paddingTop) / 2 < 0 ) {
				elt.style.top = e.pageY + 20 - paddingBottom + paddingTop + 'px';
			}
			else {
				elt.style.top = e.pageY - ($(elt).height() + 20 ) - (paddingBottom + paddingTop) + 'px';
			}

			// Set left pos
			if ( e.pageX - $(elt).width() / 2 < 0 )
				elt.style.left = 0;
			else if ( e.pageX + $(elt).width() / 2 > $(window).width() )
				elt.style.left = $(window).width() - $(elt).width() + 'px';
			else
				elt.style.left = e.pageX - $(elt).width() / 2 + 'px';
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