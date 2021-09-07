const Employee = require("../employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new Employee object
  describe("Initialization", () => {
    it("should create an object with a name, ID and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 3, "sarah@gmail.com");

      // Verify that the new object has the correct properties
      expect(Employee.name).toEqual("Sarah");
      expect(Employee.id).toEqual(3);
      expect(Employee.email).toEqual("sarah@gmail.com");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Employee();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an id", () => {
      const cb = () => new Employee("Sarah");

      // Define the error message that is expected to be thrown
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("Sarah", "2");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const cb = () => new Employee("Sarah", -1);
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});
