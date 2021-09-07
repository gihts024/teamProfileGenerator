const Engineer = require('../lib/Engineer');
 
describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe("Initialization", () => {
      it("should create an object with a github username, and role if provided valid arguments", () => {
  
  const engineer = new Engineer("githubUname", "engineer" )
     // Verify that the new object has the correct properties
    
      expect(Engineer.githubUname).toEqual("sarah");
      expect(Engineer.role).toEqual("engineer");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Engineer();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Engineer();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided a github Username", () => {
      const cb = () => new Engineer("Sarah");

      // Define the error message that is expected to be thrown
      const err = new Error("Expected parameter 'github username' to be a non-negative number");

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'role' is not a string", () => {
      const cb = () => new Engineer(3, 2);
      const err = new Error("Expected parameter 'role' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});