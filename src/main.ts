import { init } from "@paralleldrive/cuid2";
import { z } from "zod";
import { kebabCase } from "change-case";

const createId = init({
  length: 24,
});

export function id(prefix?: string): Id {
  return (prefix ? kebabCase(prefix) + "_" + createId() : createId()) as Id;
}

class Brand<T extends string> {
  private __brand!: T;
}

export type Id = string & Brand<"Id">;

export const IdSchema: (prefix?: string) => z.Schema<Id> = (prefix) =>
  (prefix
    ? z.string().refine((id) => id.startsWith(prefix + "_"))
    : z.string()) as unknown as z.Schema<Id>;
