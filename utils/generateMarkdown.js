
// need a function to get the lincece badge


// need sg to put the lincence badge into generated readme
// function to generate markdown for 
// README
// function to render badge if license exits
function renderLicenseBadge(license) {
  if (license === 'No license') {
    return``;
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === 'Boost Software License') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'Creative common Zero') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse Publik Licence')
  return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
}

// function to render license content for readme file
function renderLicenseContent(license) {
  if (license === 'No license') {
    return``;
  } else  {
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
