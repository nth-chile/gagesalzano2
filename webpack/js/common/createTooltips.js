import showOnHover from './showOnHover'

export default function createTooltips() {
  tooltip_img_boxBottom(
    '#stealth-gaming',
    'assets/images/stealthgaming.png',
    'This is the only decent screenshot from the Wayback Machine that I could grab of one the many schemes me and friends in high school dreamed up. I was usually the graphics guy because I wasn’t nearly as smart as everyone else, and this is the type of stuff I would come up with... 😂',
    'Project with friends back in the day',
    'rgb(66, 90, 131)'
  );
  tooltip_text(
    '#work-experience',
    '<b>Work Experience:</b>',
    '<ul><li>— <b>Current:</b> Independent</li><li>— <b>Nelson Cash:</b> Sr. Designer, 6 years</li><li>— <b>Doejo:</b> Sr. Designer, 1 year</li><li>— <b>Smith Brothers Advertising:</b> Designer, 1 year</li><li>— <b>Mind Over Media:</b> Designer, 1 year</li></ul>'
  );
  tooltip_img_boxRight(
    '#edinboro',
    'assets/images/edinboro.png',
    '<div style="color:rgb(162, 157, 157);padding-bottom:.5rem"><b>EDUCATION:<br />— Edinboro Univ. of PA</b><br /><span style="padding-left:15px">BFA, 2008</span></div>This picture sums up what it was like to walk on campus most of the year. I experienced lake-effect snowstorms, amazing friendships and lots of late nights at the studio.',
    'Edinboro University of Pennsylvania',
    'rgb(46, 43, 43)'
  );
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
  $(img).load(function () {
    $(fig).width($(img).width());
  })
    .each(function () {
      if (this.complete) $(this).trigger('load');
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
  $(img).load(function () {
    $(fig).height($(img).height());
    $(cptn).width($(img).width());
  })
    .each(function () {
      if (this.complete) $(this).trigger('load');
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