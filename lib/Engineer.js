const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, githubUname) {
    super(name, id, email);
    this.name = githubUname;
  }

  getGithub() {
      return this.githubUname
  };
  getrole() {
      return 'Engineer'
  };
}

module.exports = Engineer;