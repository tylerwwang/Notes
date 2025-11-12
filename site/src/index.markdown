---
layout: default
permalink: /
---
# {{site.site-title}} 

Here, I will post my notes of various classes that I've taught.
I've desigened these coureses in a way that gives students a more fundemental understanding of the concepts that goes beyond just memorizing formulas, or mindlessly running through computation.

{% for page in site.menu-pages %}
- [{{page}}]({{site.url}}/{{site.baseurl}}{{page}})
{% endfor %}
