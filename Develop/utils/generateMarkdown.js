// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Github
${data.github}
## Email
${data.email}
`;
}

module.exports = generateMarkdown;
