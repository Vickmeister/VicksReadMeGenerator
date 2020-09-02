// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

[Title](#title)
[Description](#description)
[Table of contents](#tableofcontents)
[Usage](#usage)
[License])(#license)
[Contributions](#contributions)
[Tests](#tests)
[Questions](#questions)

## Description
${data.description}

## Table of contents
${data.tableofcontents}

## Usage
${data.usage}

## License
${data.license}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
