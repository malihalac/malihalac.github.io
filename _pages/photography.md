---
layout: archive
title: "Photography"
permalink: /photography/
author_profile: true
entries_layout: grid
collection: photography
---
{% include base_path %}

{% for post in site.photography %}
  {% include archive-single.html %}
{% endfor %}
