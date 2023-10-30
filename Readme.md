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
