# react-app-starterkit
My personal (opiniated) template for React projects

This is not universal/isomorphic.

This based on the Yeoman React Webpack generator, but uses Ryan Florence's guide for component structure and does not include any Flux-relevant stubs.

Includes:
- Webpack (with webpack-dev-server and several loaders)
- React
- React-Router

### Conventions

##### Filenames
Export name = Filename

##### Component structure
- Folder name like
- `index.js` as the entry point to the component which combines the component itself with the styles
- `MyComponent.js` is the component itself and should export the React component
- `styles.less` that contains the stylesheets for the component

#### Tests


##### Loader naming
`babel` instead of `babel-loader`
