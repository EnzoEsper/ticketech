import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    // the string passed to super is only for logs purposes, is never gonna be sent out to users
    super("Route not found");

    // only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Not Found",
      },
    ];
  }
}
