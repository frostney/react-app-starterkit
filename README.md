# react-app-starterkit

[![Dependency Status](https://david-dm.org/frostney/react-app-starterkit.svg)](https://david-dm.org/frostney/react-app-starterkit)
[![devDependency Status](https://david-dm.org/frostney/react-app-starterkit/dev-status.svg)](https://david-dm.org/frostney/react-app-starterkit#info=devDependencies)

My personal (opiniated) template for React projects. This is very much geared towards what I need in my React project, so it may not fit your use case.

Btw: I really love red rectangles.

This is not universal/isomorphic.

This based on the [Yeoman React Webpack generator](https://github.com/newtriks/generator-react-webpack), but uses Ryan Florence's [guide for component structure](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346) with a focus on a flat structure and does not include any Flux-relevant stubs.

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

### Decisions
- No `req.keys` for dynamically loading files. It's too Webpack-specific and relies on the fact that everything will be transformed into CommonJS modules. It won't work with Webpack 2's tree shaking and while manually taking care of the dependencies feels like a hassle, it's safer (and can be internally optimized by bundlers) in the long run.

### Where I want to improve
- I kinda want a generator/template for components. I know there was something similar like Yeoman but on a project basis, but I couldn't find it right now
- Use `react-proxy` or something similar to enable code splitting for React component and/or screens
- Put tests into component/screen folder (What to do with the `.eslintrc.yml` file in the tests folder then?)
- Put `README` into each component/screen folder with usage example

### License
MIT
