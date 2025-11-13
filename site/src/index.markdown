---
layout: default
permalink: /
---
# {{site.site-title}} 

Here, I will post my notes of various classes that I've taught.
I've designed these courses in a way that gives students a more fundamental understanding of the concepts that goes beyond just memorizing formulas, or mindlessly running through computation.
Some notes may include some corrections and additions after the conclusion of the class to ensure the content is accurate for future students.

{% for page in site.menu-pages %}
- [{{page}}]({{site.url}}/{{site.baseurl}}{{page}})
{% endfor %}
