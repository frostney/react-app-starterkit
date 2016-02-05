# react-app-starterkit
My personal (opiniated) template for React projects. This is very much geared towards what I need in my React project, so it may not fit your use case.

Btw: I really love red rectangles.

This is not universal/isomorphic.

This based on the Yeoman React Webpack generator, but uses Ryan Florence's guide for component structure and does not include any Flux-relevant stubs.

Includes:
- Webpack (with webpack-dev-server and several loaders)
- React
- React-Router
- CSS Modules

### Getting started
Prerequisite: Node.js needs to be installed.

1. Clone this repository
2. Navigate into this repository and do `npm install`.
3. `npm start` starts the development server (with hot module reloading and those kind of things...)
4. `npm run build` does a minified build of everything.

### Conventions

##### Filenames
Export name = Filename

##### Component structure
- Folder name like
- `index.js` as the entry point to the component which combines the component itself with the styles
- `MyComponent.js` is the component itself and should export the React component
- `styles.less` that contains the stylesheets for the component

#### Tests
Coverage with `babel-istanbul`, Karma, Mocha, Chai, Enzyme

##### Loader naming
`babel` instead of `babel-loader`

### Where I want to improve
- I don't like `index.js` files with `req.keys`. It's too Webpack-specific and relies on the fact that everything will be transformed into CommonJS modules
- I kinda want a generator/template for components. I know there was something similar like Yeoman but on a project basis, but I couldn't find it right now
- Use `react-proxy` or something similar to enable code splitting for React component and/or screens

### License
MIT
