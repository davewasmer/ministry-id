<h1 align="center">@ministry/id</h1>

Common unique ID utilities:

```ts
import { id, IdSchema, type Id } from "@ministry/id";

// Generate ids
id(); // "pfh0haxfpzowht3oi213cqos"
id("user"); // "user_pfh0haxfpzowht3oi213cqos"

// Validate ids
IdSchema().parse("any random string will work");
IdSchema("user").parse("user_ ensure string starts with supplied prefix");

// Opaque type
id() satisfies Id;
```

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
