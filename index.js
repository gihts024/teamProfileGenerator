const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const Manager= require ('./lib/Manager'); 
const Intern = require("./lib/Intern");
const Engineer = require('./lib/Engineer');
const Employee = require("./lib/employee");
const path = require('path')
const render = require('./template.js')
const dir = path.resolve(__dirname, "output")
const filePath = path.join(dir, "team.html")


const writeFileAsync = util.promisify(fs.writeFile);

const teamCreated = [];
const role = ["manager", "engineer", "intern", "generateHTML"];


// Prompt the team creation process. 
// This is a promise if confirmed creates the team

const start = () => {
    inquirer
    .prompt([
      {
        name: "createTeam",
        type: "confirm",
        message: "Do you want te create a team?",
      },
    ])
    .then((answer) => {
      console.log(answer.createTeam);
         if (answer.createTeam==false) {
          throw new Error('enter your team');
        }
          if (answer.createTeam==true) {
             console.log('lets build your team')
          return teamMember();
         }
        })
   
}


// it adds team members to the team
// It generates the html and the team members
const teamMember = ()=>{
    inquirer
    .prompt([{
        type: 'list',
        name: 'title',
        message: 'please select the team member role ? ',
        choices: role,
        default: "manager",
    }])
    .then((answer)=>{
        if (answer.title === "manager"){
            return managerQ();
        }
    // initiate Engineer questions
        if (answer.title === "engineer"){
            return engineerQ();
        }
        // Iniate Intern questions
        if (answer.title === "intern"){
            return internQ();
        }
        if (answer.title === "generateHTML"){
            console.log('lets generate your team');
            fs.writeFileSync('index.html', render(teamCreated));
            console.log('Successfully wrote to index.html');
            return generateHTML();
        }
       else {
        console.log("we dont have a team")
        }
        
    })    
};

// These are the questions based on the team member selected
const managerQ = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter your name?',
      },
      {
        type: 'number',
        name: 'ID',
        message: 'what is your ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'please enter your email?',
      },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter officeNumber'
    }])
    .then((answers)=>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamCreated.push(manager);
        return teamMember();
    })
    
}
const engineerQ = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter your name?',
      },
      {
        type: 'number',
        name: 'ID',
        message: 'what is your ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'please enter your email?',
      },
        {
        type: 'input',
        name: 'githubName',
        message: 'Please enter engineer github username'
    }])
    .then((response)=>{
        const engineer = new Engineer(response.name, response.id, response.email, response.githubName)
        teamCreated.push(engineer);
        return teamMember();
    })
}

const internQ = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter your name?',
      },
      {
        type: 'number',
        name: 'ID',
        message: 'what is your ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'please enter your email?',
      },
        {
        type: 'input',
        name: 'school',
        message: 'Please enter your school'
    }])
    .then((responses)=>{
        const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
        teamCreated.push(intern);
        return teamMember();
    })


    
}
function generateHTML() {
    if (!fs.existsSync(dir))
    {
      fs.mkdirSync(dir)
    } 
      fs.writeFileSync(filePath, render(teamCreated), "utf-8")
  
  }
// This throws in the html file
// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//   ${generateTeam(team)}
//     <h1 class="display-4">Hi! My employee id is ${manager.name}</h1>
//     <h1 class="display-4">Hi! My name is ${intern}</h1>
//     <p class="lead">My Email address ${engineer}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${engineerQ.github}</li>
//       <li class="list-group-item">LinkedIn: ${internQ.school}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;



start();

