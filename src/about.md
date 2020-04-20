---
layout: page
js_bundle: about
---

<div class="about-wrap">
{% include header.html %}
{% capture about %}{% include about.md %}{% endcapture %}
<div class='about'>{{ about | markdownify }}</div>
{% include footer.html %}
</div>