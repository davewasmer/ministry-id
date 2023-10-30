# @ministry/id

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

1. Clone the repo
2. Rename all references to `node-library-boilerplate`
3. Run `pnpm run prepare` to install husky hooks
4. Remove and reinitialize .git
5. Run `pnpm dlx semantic-release-cli setup`
