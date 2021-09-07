const Employee = require("./lib/employee");
const path = require('path');
const fs = require('fs');

const templates = path.resolve(__dirname,"./templates")

const render = (team) => {
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        )

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
        )

        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => createEngineer(engineer))
            .join("")
            )
            return html.join("")
            
};

const createManager = (manager) =>{

	return ` <div class="col">
	<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
	  <div class="card-body">
		<h5 class="manager">Manager</h5>
		<h3> Name:  ${manager.getName()}</h3>
		<p class="card-text">
		  <ul>
			<li>Manager ID: ${manager.getId()}</li>
			<li>Manager Name: ${manager.getName()}</li>
			<li>Manager Email: ${manager.getEmail()}</li>
			<li>Manager Role: ${manager.getRole()}</li>
		  </ul>
		</p>
	  </div>
	</div>
  </div>`
}

const createEngineer = (engineer) => {
	
	return `<div class="col">
	<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
	  <div class="card-body">
		<h5 class="engineer">Engineer</h5>
		<h3> Engineer Name: ${engineer.getName()} </h3>
		<p class="card-text">
		  <ul>
			<li>Engineer ID: ${engineer.getId()}</li>
			<li>Engineer Name: ${engineer.getName()}</li>
			<li>Engineer Email: ${engineer.getEmail()}</li>
			<li>Engineer Role: ${engineer.getRole()}</li>
			<li>Engineer gitHub: ${engineer.getHub()}</li>
		  </ul>
		</p>
	  </div>
	</div>
  </div>`;
};

const createIntern = (intern) => {
	
	return `<div class="col">
	<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
	  <div class="card-body">
		<h5 class="intern">Intern</h5>
		<h3> Name: ${intern.getName()} </h3>
		<p class="card-text">
		  <ul>
			<li>Intern ID: ${intern.getId()}</li>
			<li>Intern Name: ${intern.getName()}</li>
			<li>Intern Email: ${intern.getEmail()}</li>
			<li>Intern Role: ${intern.getRole()}</li>
			<li>Intern School: ${intern.getSchool()}</li>
		  </ul>
		</p>
	  </div>
	</div>
  </div>`;
};

const renderMain = (html) => {
	const template = fs.readFileSync(path.resolve(templates, 'main.html'), 'utf8');
	return replacePlaceholders(template, 'team', html);
};

const replacePlaceholders = (template, placeholder, value) => {
	const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm');
	return template.replace(pattern, value);
};

module.exports = render;