const airbnb = require('eslint-config-airbnb-base');

module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true,
	},
	// Extends airbnb config. We could use 'extends' but then the consuming code would
	// need to install it as a peer-dep. Better to add it manually.
	extends: airbnb.extends.map(require.resolve),
	parserOptions: airbnb.parserOptions,
	plugins: ['import'],
	rules: Object.assign({}, airbnb.rules, {
		// Don't required parentheses on arrow functions with 1 arg
		'arrow-parens': ['error', 'as-needed'],
		// Allow require('fileName') or require('fileName.js')
		'import/extensions': 'off',
		indent: [
			'error',
			'tab',
			{
				CallExpression: {
					arguments: 1,
				},
				FunctionDeclaration: {
					body: 1,
					parameters: 2,
				},
				FunctionExpression: {
					body: 1,
					parameters: 2,
				},
				SwitchCase: 1,
			},
		],
		'no-console': 'error',
		'no-tabs': 'off',
	}),
};
