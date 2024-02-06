
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
    return`No licence`;
  } else  {
    return `This project is covered under ${license} license.`
  }
}

// function to render installation if answer added
function renderInstallationContent(installation) {
  if (!installation) {
    return `N/A`;
  } else {
    return `${installation}`
  }
}
// function to render usage if answer added
function renderUsageContent(usage) {
  if (!usage) {
    return `N/A`;
  } else {
    return `${usage}`
  }
}
// function to render contributing if answer added
function renderContributingContent(contributing) {
  if (!contributing) {
    return `N/A`;
  } else {
    return `${contributing}`
  }
}
// function to render tests if answer added
function renderTestContent(test) {
  if (!test) {
    return `N/A`;
  } else {
    return `${test}`
  }
}
function renderQuestionContent(questions) {
  if (!questions) {
    return `Contact me on github!`;
  } else {
    return `Contact me via email: [${questions}]`
  }
}
//     ---------------------------------------
//     | function to generate readme content |
//     ---------------------------------------
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  * [Descritption](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Author](#author)
  * [Questions](#questions)


  ## Decription
  ${data.description} 

  ## Installation
  ${renderInstallationContent(data.installation)}

  ## Usage
  ${renderUsageContent(data.usage)}

  ## License
  ${renderLicenseContent(data.license)}

  ## Contribution
  ${renderContributingContent(data.contributing)}

  ## Tests
  ${renderTestContent(data.test)}

  ## Author 
  github[https://github.com/${data.gitUser}]

  ## Questions
  ${renderQuestionContent(data.questions)}

`;
}

module.exports = generateMarkdown;
