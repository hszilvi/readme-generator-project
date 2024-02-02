// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Content
  ## Decription
  ${data.description} 


`;
}

module.exports = generateMarkdown;
