import { ValidationError } from "./customErrrors";

export function validateGetMoviesParameters(input: unknown) {
  if (typeof input !== "string" || input.length < 3) {
    throw new ValidationError("Invalid Input!");
  }
  return input;
}
