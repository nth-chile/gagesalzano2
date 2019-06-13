---
layout: page
---

{% capture about %}{% include about.md %}{% endcapture %}
<div class='about'>{{ about | markdownify }}</div>
{% include footer.html %}