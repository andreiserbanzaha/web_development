### Think in components

- atoms < molecules < organisms < templates < pages

### one way data flow

- data flows from top to bottom
    - only children of components know about the change, parents are not affected
    - optimized re-rendering

### Virtual DOM

- minimize the amount of DOM manipulation as possible
    - reduced performance
    - potential bug increase

### Eco system

- large eco-system

### Update react script

- package.json -> replace "react-scripts" with new version -> npm install

### Create react app

- **create-react-app** is a package from npm
- *create-react-app "project_name"* -> create an react app

- alternatively, if we do not want to install *create-react-app* on our machine,
	we can run *npx create-react-app "project_name"*

### React

- has web-pack under the hood -> does the bundle-ing

- "React" is a VIEW library
- "ReactDOM" for websites

### React Lifecycle hooks

- mount
- update
- unmount

