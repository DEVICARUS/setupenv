const inquirer = require('inquirer');
const fs = require('fs');

module.exports = (questions) => {
	inquirer
		.prompt(
            questions.map((question) => {
                return {
                    ...question,
                    type: 'input'
                }
            })
		)
		.then((answers) => {
			var output = questions.map(question => {
                return `${question.name}=${answers[question.name]}`
            })
            
            fs.writeFileSync("../../" + __dirname + "/.env", output.join("\n"))
		});
};
