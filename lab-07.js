class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  function throwGenericError() {
    throw new Error("Generic error");
  }
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  try {
    console.log("Force generic error");
    console.log("Generic error try block");
    throwGenericError();
  } catch (error) {
    console.log("Generic error catch block");
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Generic error finally block");
  }
  try {
    console.log("Force custom error");
    console.log("Custom error try block");
    throwCustomError();
  } catch (error) {
    console.log("Custom error catch block");
    console.log(`${error.name}: ${error.message}`);
  } finally {
    console.log("Custom error finally block");
  }