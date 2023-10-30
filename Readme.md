<h1 align="center">node-library-boilerplate</h1>

Basic setup for a Typescript Node.js (or runtime agnostic) library.

## Usage

To start developing:

1. Clone the repo
2. Rename all references to `node-library-boilerplate`
3. `pnpm install`

To release:

1. `hub create [repo name]`
2. Update `private: true/false` in package.json as needed
3. Run `pnpm dlx semantic-release-cli setup`
4. Remove these instructions, update package.json description
