
// need a function to get the lincece badge


// need sg to put the lincence badge into generated readme
// function to generate markdown for 
// README
// function to render badge if license exits
function renderLicenseBadge(license) {
  if (license === 'No license') {
    return``;
  } else {
    return `{${license} license} ((https://img.shields.io/badge/License-${license}-blue.svg))`
  }
}

// function to render license content for readme file
function renderLicenseContent(license) {
  if (license === 'No license') {
    return``;
  } else {
    return `## License
    This project is covered under ${license} license.`
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Content
  ## Decription
  ${data.description} 

  ## github [https://github.com/${data.gitUser}]

  ${renderLicenseContent(data.license)}


`;
}

module.exports = generateMarkdown;
