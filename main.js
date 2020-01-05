const inquirer = require('inquirer');
const fs = require('fs');

module.exports = (questions) => {
	inquirer
		.prompt(
            questions.map((question) => {
                switch (question.type) {
                    case String:
                        return {
                            ...question,
                            type: 'input'
                        }

                    case Number:
                        return {
                            ...question,
                            type: 'number'
                        }

                    case Boolean:
                        return {
                            ...question,
                            type: 'confirm'
                        }
                
                    default:
                        throw new Error('Unknown type')
                }
            })
		)
		.then((answers) => {
			var output = questions.map(question => {
                switch (question.type) {
                    case String:
                        return `${question.name}="${answers[question.name]}"`
                
                    default:
                        return `${question.name}=${answers[question.name]}`
                }
            })
            
            fs.writeFileSync(__dirname + "/../../.env", output.join("\n"))
		});
};
