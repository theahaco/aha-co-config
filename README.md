<div align="center">
  <a
    alt="The Aha Co"
    href="https://theaha.co"
  >
    <img
      width="300px"
      src="logo.svg"
    />
  </a>
</div>

# @aha-co/config

Standardized set of configuration files for TypeScript projects so we don't have
to think about them. Heavily inspired by
[@epic-web/config](https://github.com/epicweb-dev/config).

## Usage

These are a set of defaults and everything can be overridden as needed per
project.

```
npm install @aha-co/config
```

### TypeScript

Create a `tsconfig.json` file in the project root and
[extend this config file](https://www.typescriptlang.org/tsconfig/#extends):

```json
{
	"extends": ["@aha-co/config/typescript"],
	"include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
	"compilerOptions": {
		// override here
	}
}
```

Create a `reset.d.ts` file:

```ts
import "@aha-co/config/reset.d.ts"
```

### ESLint

Create a `eslint.config.js` file in the project root and
[extend this config file](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs):

```js
import { config } from "@aha-co/config/eslint"

/** @type {import("eslint").Linter.Config[]} */
export default [
	...config,
	// override here
]
```

### Prettier

Add a line in `package.json` to point to this config file:

```json
  "prettier": "@aha-co/config/prettier",
```

You can add a `.prettierignore` file to your project root if needed.
