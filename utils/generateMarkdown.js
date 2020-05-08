function generateMarkdown(data) {
  return `
# ${data.title}
\n
${data.description}
\n\n
# Installation
\n
${data.installation}
\n\n
# Usage
\n
${data.usage}
\n
# Author
${data.author}
\n\n
# Contribution
\n
${data.contributing}
`;
}

module.exports = generateMarkdown;
