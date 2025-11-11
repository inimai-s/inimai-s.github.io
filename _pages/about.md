---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a fourth year undergraduate student at [MIT EECS](https://www.eecs.mit.edu/), where I am grateful to be under the guidance of Professor [Nir Shavit](https://www.csail.mit.edu/person/nir-shavit) as a member of the [Shavit Lab](https://shavitlab.csail.mit.edu/). I have also conducted research with Professor [Ila Fiete](https://mcgovern.mit.edu/profile/ila-fiete/) as part of the [Fiete Lab](https://fietelab.mit.edu/) and at NASA's [Jet Propulsion Laboratory](https://www.jpl.nasa.gov/) under Dr. [Tom Lu](https://www.jpl.nasa.gov/site/research/thomaslu/) and Dr. [Ed Chow](https://www.jpl.nasa.gov/go/nsta/ed-chow/). I am a recipient of the 2025 MIT [Peter J. Eloranta Summer Undergraduate Research Fellowship](https://urop.mit.edu/students/resources/eloranta/prior-recipients/).

I am curious about how structured computation emerges within and across layers of artificial and biological neural systems. I approach these questions through the lens of mechanistic interpretability—analyzing how circuits form, specialize, and scale—with the goal of uncovering principles that make large models more modular, efficient, and transparent.

News
======

- November 2025: My self-proposed first-author work <strong><i><a href="/publication/2025-cca">Multi-View Canonical Correlation Analysis for Cross-Lingual Fake News Detection</a></i></strong> was accepted to the <strong>MIT Undergraduate Research Journal (MURJ) vol. 50, Fall 2025</strong>
- October 2025: My first-author work <strong><i><a href="/publication/2025-expand">Expand Neurons, Not Parameters</a></i></strong> is on Arxiv and submitted to <strong>ICLR 2026</strong>
- May 2025: I served as a first author of a proposal selected for an <strong><i><a href="https://urop.mit.edu/students/resources/eloranta/">MIT Peter J. Eloranta Summer Undergraduate Research Fellowship</a></i></strong> to support my self-led original research.
- October 2024: I was selected as a <strong>[Cerebras Research Fellow](https://www.cerebras.ai/fellows)</strong>
- April 2024: I gave a talk on my work <strong><i><a href="/talks/2024-gnn">Intelligent knowledge base search tool using large language model and graph neural network</a></i></strong> at the <strong>2024 SPIE Defense + Commercial Sensing Conference</strong> in National Harbor, MD.
- March 2024: My work <strong><i><a href="/publication/2024-gnn">Intelligent knowledge base search tool using large language model and graph neural network</a></i></strong> was accepted into <strong>SPIE Defense + Commercial Sensing 2024</strong> as an <strong>Invited Paper and Oral Presentation</strong>

Selected Works  
======

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}
<div class="wordwrap"><em>* denotes equal contribution, † denotes co-correspondence</em></div>

{% for post in site.publications reversed %}
  {% if post.selected %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}


{% comment %}
A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over - just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.

{% endcomment %}