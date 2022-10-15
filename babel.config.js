// Конфиг для bable loader
module.exports = {
	"presets": [
		[
			"@babel/preset-env",
			{
				"modules":     false,
				"useBuiltIns": 'entry',
				"corejs":      {
					"version":   3,
					"proposals": false
				},
				"targets":     {
					"browsers":  ["ie >= 11"],
					"esmodules": true
				}
			}
		]
	],
	"plugins": [
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-nullish-coalescing-operator"
	]
};
