import { init } from "@paralleldrive/cuid2";
import { z } from "zod";
import { kebabCase } from "change-case";

const createId = init({
  length: 24,
});

/**
 * Returns a unique ID string based on the cuid2 library, defaulting to 24
 * characters (excluding any prefix).
 *
 * The optional prefix supplied will be separated by an underscore, i.e.
 *
 * ```ts
 * id('user') // 'user_abc123...'
 * ```
 *
 * @param prefix Optional prefix string to prepend to the ID, useful for human
 * readability and dismabiguation
 * @returns
 */
export function id(prefix?: string): Id {
  return (prefix ? kebabCase(prefix) + "_" + createId() : createId()) as Id;
}

class Brand<T extends string> {
  private __brand!: T;
}

/**
 * An opaque/branded type representing an ID string
 */
export type Id = string & Brand<"Id">;

/**
 * A zod schema for validating an ID type. If no prefix is provided, it simply
 * validates that it's a string. If a prefix is provided, it ensures the ID has
 * that prefix.
 *
 * @param prefix
 * @returns
 */
export const IdSchema: (prefix?: string) => z.Schema<Id> = (prefix) =>
  (prefix
    ? z.string().refine((id) => id.startsWith(prefix + "_"))
    : z.string()) as unknown as z.Schema<Id>;
