// license badge img info
// const licenseBadges = {
//   "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
//   "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
//   "GPL": "[![License: GPL](https://img.shields.io/badge/License-GPL%20ver2%2Fver3-orange)](https://opensource.org/licenses/gpl-license)",
//   "Mozilla": "[![License: MIT](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-red)](https://opensource.org/licenses/MPL-2.0)"
// }
// ${licenseBadges[matchedLicense]}
// to look at the keys in licenseBadges and create a linked badge
// function match(input, obj){ 
//   let matched = Object.keys(obj).find(key => input.toLowerCase().search(key) > -1);
//   return obj[matched] || "No licenses were used for this project";
// }

// creates the README markdown format
function generateMarkdown(data) {

  // variables for the data recieved from the user
  let username = data.username;
  let title = data.title;
  let description = data.description;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let contributer = data.contributer;
  let tests = data.tests;
  let email = data.email;
  let technology = data.technology;
  let contact = data.contact;
  let url = data.url;
  // let matchedLicense = match(license, licenseBadges);

  return `  
  # ${title}
  
## Description
 ${description}
 
 \nThis project was created using:  ${technology}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#Questions)

  ## Installation
  This application is installed by doing the following: ${installation}

  ## Usage
  ${usage}

  \n![CLI README App Demo](Assets/utils/CLI-App_Demo.gif)

  ## License
  ${license}

  ## Contributors
  ${contributer}

  ## Tests
  ${tests}

  # Contact
  \n![Badge](https://img.shields.io/badge/Github-${username}-green) 
  \n![Profile Image](https://github.com/${username}.png?size=200)
  \n**Contact email:** ${email}
  \n**GitHub Username:**  https://github.com/${username}
  \n**Best form of contact:** ${contact}
  \nG**GitHub Project link:** ${url}
  

  `

}

module.exports = generateMarkdown;
