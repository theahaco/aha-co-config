import { type Linter } from "eslint"

/**
 * Check if a package is installed by attempting to resolve it
 * @param pkg - The package name to check
 * @returns True if the package is installed, false otherwise
 */
export declare const has: (pkg: string) => boolean

/**
 * ESLint configuration for Aha projects
 */
export declare const config: Linter.Config[]

export default config
