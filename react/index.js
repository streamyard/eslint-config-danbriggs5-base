const base = require('eslint-config-streamyard-base');

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	// Extends base config. We could use 'extends' but then the consuming code would
	// need to install it as a peer-dep. Better to add it manually.
	extends: [...base.extends.map(require.resolve), 'plugin:react/recommended'],
	parserOptions: Object.assign({}, base.parserOptions, { jsx: true }),
	plugins: ['import', 'react', 'react-hooks'],
	rules: Object.assign({}, base.rules, {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	}),
	settings: {
		react: {
			version: '16.9',
		},
	},
};
