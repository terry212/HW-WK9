function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

# Installation

${data.installation}

# Usage

${data.usage}

# Author

${data.author}

# Contribution

${data.contributing}
`;
}

module.exports = generateMarkdown;
