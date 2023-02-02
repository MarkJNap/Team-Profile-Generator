const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMemberData = [];

const questions = async () => {
  const basicAns = await inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the employee?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is their role?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern",],
    },
  ]);
  console.log(basicAns);
  if (basicAns.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is their office number",
        name: "officeNumber",
      },
    ]);
    console.log(managerAns);
    const newManager = new Manager(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      managerAns.officeNumber
    );
    teamMemberData.push(newManager);
    console.log(teamMemberData);

  } else if (basicAns.role === "Engineer") {
    const engineerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is their GitHub username?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      engineerAns.github
    );
    teamMemberData.push(newEngineer);
    console.log(teamMemberData);

  } else if (basicAns.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What university did they attend?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      basicAns.name,
      basicAns.id,
      basicAns.email,
      internAns.school
    );
    teamMemberData.push(newIntern);
  }
};

async function initQuestions() {
  await questions();
  const newTeamMember = await inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add more team members?",
      name: "addMember",
      choices: ["Yes, add more members", "No, my team is complete"],
    },
  ]);

  if (newTeamMember.addMember === "Yes, add more members") {
    return initQuestions();
  }
  return console.log(teamMemberData);
}

initQuestions();
