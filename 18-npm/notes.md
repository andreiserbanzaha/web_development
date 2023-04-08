
### Notes

- *npm* - node package manager
- *yarn* - pretty much the same as npm

- *module* -> libraries for nodejs (files or folders)
	- *module1*.js, *module2*.js etc
	- e.g.: Circle.js, Rectangle.js etc

- *package* -> one or more modules grouped in a package
	- *packageName* -> *module1*.js, *module2*.js etc
	- e.g.: Shapes(package name) -> Circle.js, Rectangle.js etc

- *semver* -> semantic versioning
	- version x.y.z
		- x: major release (major features)
		- y: minor release (new small features)
		- z: patch version (bug fixes etc)

- *node_modules* 
	- folder where are the dependency modules are stored in a project
	- never add to git - each developer will add them locally after cloning
		using *npm install*


### Commands

- *npm init* 
	- creates *package.json* file

- *npm install "package_name"*
	- install package locally

- *npm install -g "package_name"*
	- install package globally

- *npm run "script_name"*
	- runs script with the name specified
	- script is defined in *package.json* file
	- example: "build" : "browserify script.js > bundle.js && live-server"
		- *npm run build* -> creates bundle and runs live-server


### Packages

- *live-server*
	- creates 'fake' server on localhost
	- watches for changes and updates the project

- *lodash*
	- modern JavaScript utility library

- *browserify*
	- module bundler (bundles modules together) -> update browserify bundle.js
	- usage: *browserify script.js > bundle.js*


### package.json file

- "dependencies"
	- project package dependencies (that are inside *node_modules*)

- "scripts"
	- define scripts for *npm run "script_name"*
