// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Content
  ## Decription
  ${data.description} 
  github https://github.com/${data.gitUser};


`;
}

module.exports = generateMarkdown;
