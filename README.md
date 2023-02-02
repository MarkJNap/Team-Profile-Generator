[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

# Team Profile Generator

## Description
The team profile generator I've created here allows you to generate a team profile using a node.js command line application. In developing this application I learnt a lot of skills involving inquirer and jest. On top of that I also created tests to ensure my classes work properly and generate the HTML document correctly. This application is a simple and easy tool to quickly create a team profile landing page with team roles and important contact information.

## Installation
* Node.js v16
* GitBash or equivalent

After cloning repository and navigating to correct folder in GitBash the user needs to run `npm install` to ensure it downloads all needed packages/dependencies.

## Usage

To use this app type the command `node index.js` in GitBash you will then be prompted to answer a set of questions for each team member. 
- What is the name of the employee?
- What is their ID number?
- What is their email?
- What is their role

At the selection of a role you will be asked further questions depending of the selected role.
- What is their office number? (Manager)
- What is their GitHub username? (Engineer)
- What university did they attend? (Intern)

When you reach the end of the questions for their role you will be asked if you would like to add more team members or if you have finished building your team.
At this point using all the given information an `index.html` file will be generated and be stored in the `dist` folder.


Link to Demo Video: https://drive.google.com/file/d/1QrLeJH5NVaLrEdphOBKfPysAo4h1oDeL/view

## Credits

Mark Napolitano

## License

ISC License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


## Tests

Run tests with jest by using `npm install` and then `npm test`

---