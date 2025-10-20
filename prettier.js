/** @type {import("prettier").Config} */
export const config = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "always",
	quoteProps: "as-needed",
	requirePragma: false,
	semi: false,
	singleAttributePerLine: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	overrides: [
		// formatting the package.json with anything other than spaces will cause
		// issues when running install...
		{
			files: ["**/package.json"],
			options: {
				useTabs: false,
			},
		},
	],
}

export default config
