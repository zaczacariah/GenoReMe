
const licenses = {
    apache: {
        name: "Apache 2.0",
        link: "https://opensource.org/licenses/Apache-2.0",
        svg: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    },
    gnu: {
        name: "GNU",
        link: "https://www.gnu.org/licenses/gpl-3.0",
        svg: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    },
    bsd2: {
        name: "BSD 2.0",
        link: "https://opensource.org/licenses/BSD-2-Clause",
        svg: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    },
    bsd3: {
        name: "BSD 3.0",
        link: "https://opensource.org/licenses/BSD-3-Clause",
        svg: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    },
    mit: {
        name: "MIT",
        link: "https://opensource.org/licenses/MIT",
        svg: "https://img.shields.io/badge/License-MIT-yellow.svg",
    }
}

class License{

   constructor(license){

    if(license == "" || !license){ // Default to Apache License if not specified
        this.name = licenses["apache"].name;
        this.svg = licenses["apache"].svg;
         this.link = licenses["apache"].link;
    } else {
        this.name = licenses[license].name;
        this.svg = licenses[license].svg;
        this.link = licenses[license].link;
    }
    
   }


    // TODO: Create a function to generate markdown for README
    generateMarkdown() {
        return `## License 

        This project is licensed under the ${this.name} License.
        [![License: ${this.name}](${this.svg})]
        Find more about this license here: ${this.link}.

        ---
        `;
    }
}

module.exports = License;
