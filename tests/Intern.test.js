const Intern = require('../lib/Intern');
 
describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
      it("should create an object with a schoolname and role if provided valid arguments", () => {
  
  const Intern = new Intern("schoolName", "intern" )
     // Verify that the new object has the correct properties
    
      expect(Intern.schoolName).toEqual("UW");
      expect(Intern.role).toEqual("intern");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Intern();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Intern();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided a schoolname", () => {
      const cb = () => new Intern("UW");

      // Define the error message that is expected to be thrown
      const err = new Error("Expected parameter 'schoolname' to be a non-negative number");

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'schoolName' is not a string", () => {
        const cb = () => new Intern(3, 2);
        const err = new Error("Expected parameter 'schoolName' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

    it("should throw an error if 'role' is not a string", () => {
      const cb = () => new Intern(3, 2);
      const err = new Error("Expected parameter 'role' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
});