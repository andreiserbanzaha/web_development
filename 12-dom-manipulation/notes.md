
- browser receives the HTML and CSS
- browser then create the DOM (document object model) -> "document" object

- we can manipulate HTML and CSS through the DOM (through JS)

- browsers have JS engine (e.g. V8 on chrome, Spider Monkey on Firefox etc.)

- "document" is the 'screen' that we see in the browser
- "document" is a javascript object

- "window" is "document"'s parent object

- "window" is the biggest parent
- by default, calling methods without specifying the parent -> "window"

- better practice to use "querySelector()/querySelectorAll()" instead of
	getElementsById()
