# eslint-config-danbriggs5-base
ESLint config that builds on top of [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Installation
```shell
# Install
npm install --save-dev --save-exact eslint-config-danbriggs5-base

# Install peer deps
npm install --save-dev --save-exact eslint@5.16.0
npm install --save-dev --save-exact eslint-plugin-import@2.16.0
```

## Sample usage
Create a .eslintrc.js file
```shell
touch .eslintrc.js
open .eslintrc.js
```
Paste this snippet in your file
```javascript
module.exports = {
	extends: ['danbriggs5-base'],
};
```
## License
MIT
