const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.name = school;
  }

  getSchool() {
      return this.school
  };
  getrole() {
      return 'Intern'
  };
}

module.exports = Intern;