export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class ExternalApiCallError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ExternalApiCallError";
  }
}
