 
// TODO: Create a function that returns a license badge based on which 
//       license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {
    return '';
  }
  else {
    return `![badge](https://img.shields.io/badge/license-${data.license.toUpperCase()}-green})`;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.license) {
    return '';
  }
  else {

    if (data.license === `GNU AGPLv3`) {
      data.license = `agpl-3.0`;
    }
    else if (data.license === `GNU GPLv3`) {
      data.license = `gpl-3.0`;
    }
    else if (data.license === `GNU LGPLv3`) {
      data.license = `lgpl-3.0`;
    }
    else if (data.license === `Mozilla Public`) {
      data.license = `mpl-2.0`;
    }
    else if (data.license === `Apache`) {
      data.license = `apache-2.0`;
    }
    else if (data.license === `MIT`) {
      data.license = `mit`;
    }
    else if (data.license === `Boost Software`) {
      data.license = `bsl-1.0`;
    }
    else if (data.license === `The Unlicense`) {
      data.license = `unlicense`;
    }
    else if (data.license === `Other`) {
      data.license = ``;//otherLicense;
    }

    return `https://choosealicense.com/license/${data.license}/`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
}

function renderLicenseSection(data) {
  if (!data.license) {
    return '';
  }
   return `# License
   - This project uses a [${data.license}](${renderLicenseLink(data)}) license. For more information click the link.
   - ${renderLicenseBadge(data)}
   `;

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Table Of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaborations](#collaborations)
  * [License](#license)
  * [Features](#features)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Collaborations
  ${data.collaborations}

  ${renderLicenseSection(data)}

  ## Features
  ${data.features}

  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}

  ## Questions
  For further questions, you can reach me at [${data.email}](${data.email}) .
  You may also view some of my other projects at my github page: [${data.userName}](https://github.com/${data.userName}).
  `
    
}

module.exports = generateMarkdown;
