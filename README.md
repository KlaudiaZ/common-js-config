# Vanilla JavaScript & ReactJS config package

## Usage:

### Babel, esLint:
Simply require each of the config files you need in its respective .rc file in your project.

### Webpack:
1. Import desired config file as a function
2. Specify your app directory
3. Create an Aliases file containing a map of aliases, if you wish so
3. Call the imported config passing environtmental variables, the APP_DIR, and, optionally, aliases.

## Example usage:
https://github.com/KlaudiaZ/webpack-react-starter


## Planned features:
- Adding style linter