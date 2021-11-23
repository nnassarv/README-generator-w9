// generateReadme function populating the README.md
function templateForReadMeFile(answers) {
    return `<h1>${answers.title}</h1>
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [Questions](#questions)

## Description
* ${answers.description}

## Installation
* ${answers.installation}

## Usage
* ${answers.usage}

## Contributions
* ${answers.contributions}

## Testing
* ${answers.testing}

## Questions
### Contact Section
* GitHub profile: (https://github.com/${answers.github})

* Email: ${answers.email}
`;
  }  

  module.exports = templateForReadMeFile;