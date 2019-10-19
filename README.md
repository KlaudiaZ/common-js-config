# Vanilla JavaScript & ReactJS config package

## Usage:

### Babel:
Require the config file in babel.rc file in your project.

### Eslint:
1. Require either eslintBase.config or eslintReact.config in eslint.rc file in your project. 
2. Call the config function (optionally pass config parameters) and assign to module.exports.

#### Options:
##### eslintBase:
- (number) ecmaVersion (default: 6)
- (object) env: { browser: boolean (default: true), node: boolean (default: false) }

##### eslintReact:
- (number) ecmaVersion (default: 6)
- (boolean) jsx (default: true)
- (object) env: { browser: boolean (default: true), node: boolean (default: false) }

### Webpack:
1. Import desired config file as a function
2. Specify your app directory
3. Create an Aliases file containing a map of aliases, if you wish so
3. Call the imported config passing environtmental variables, the APP_DIR, and, optionally, aliases.

## Example usage:
https://github.com/KlaudiaZ/webpack-react-starter


## Planned features:
- Adding style linter