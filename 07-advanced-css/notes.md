# Critical render path

## Steps for a browser to load a web page:
- request page's HTML
- reads html's "head" tag
	- if there are links in the head(CSS, fonts etc) -> request to the server

- web page can be rendered only using HTML and CSS, but it may not display text
	if the font is not available yet

- CSS/fonts can be a render blocking! ( can these be setup if yes or no? )

- minify css -> remove whitespaces etc, so that it ocupies less space

