// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  
  1. [ Description. ](#Description)
  2. [ Usage tips. ](#Usage)
  
  ## Description
  
  ${data.description}
  
  ## License
  
  ${data.license}
  
  ## Installation
  
  ${data.installation}
  
  ## Test
  
  ${data.test}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributors
  
  ${data.contributers}
  
  ## Email
  
  ${data.email}
  
  ## Github
  
  ${data.github}
  

`;
}

module.exports = generateMarkdown;
