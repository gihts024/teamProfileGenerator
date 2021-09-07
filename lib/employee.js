// const employee = require (./)
class Employee {
    constructor(name, id, email,role) {
      this.name = name;
      // if (typeof name !== "string" || !name.trim().length) {
      //   throw new Error("Expected parameter 'name' to be a non-empty string");
      // }
      this.id = id;
      // if (typeof id!== "number" || isNaN(id) || id < 0) {
      //   throw new Error("Expected parameter 'age' to be a non-negative number");
      // }
      this.email = email;
      this.role = role;
      // if (typeof email !== "string" || !email.trim().length) {
      //   throw new Error("Expected parameter 'name' to be a non-empty string");
      // }
    }
  
    getName(){
     
      return this.name;
    };

    getId() {
     
      return this.id;
    };
    
    getEmail(){
      return this.email
    };
    getRole(){
      return this.role
    };
    
    
    
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`id: ${this.id}`);
      console.log(`id: ${this.this.email}`);
    }
  }
  
  module.exports = Employee;
  