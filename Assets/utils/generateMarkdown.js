// license badge img info
const licenseBadges = {
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GPL": "[![License: GPL](https://img.shields.io/badge/License-GPL%20ver2%2Fver3-orange)](https://opensource.org/licenses/gpl-license)",
  "Mozilla": "[![License: MIT](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-red)](https://opensource.org/licenses/MIT)"
}


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

  return `
  [![Contributors](https://img.shields.io/github/contributors/${username}/${title})](https://github.com/${username}/${title}/graphs/contributors)
  
  # ${title}
  
  ## Description
    ${description}
    \nThis project was created using:
    * ${technology}

    ### License
    ${licenseBadges[license]}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#Questions)

  ## Installation
  The application will be invoked with the following command: 
  node index.js
  Packages required to run this program are: ${installation}

  ## Usage
  ${usage}
  ![Image Alt Text](/assets/video.gif)

  ## License
  ${license}

  ## Contributors
  ${contributer}

  ## Tests
  To test, run the following command: ${tests}

  ## Contact
  \n![Badge](https://img.shields.io/badge/Github-${username}-green) 
  \nGitHub Username: https://github.com/${username}
  \n![Profile Image](https://github.com/${username}.png?size=200)
  \nBest form of contact: ${contact}
  \nGitHub Project link: ${url}
  \nContact email: ${email}

  `

}

module.exports = generateMarkdown;
