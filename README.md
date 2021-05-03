# PetTrax (group-project-2)

Application Deployed on Heroku:

Demo URL:


## Description
`PetTrax` is a Full-Stack web application conceived and executed collaboratively using agile methodologies and project management tools to build a pet tracker app that runs in a web browser and is accessible from any computer or mobile device. `Petrax` has a responsive design and intuitive UI that is simple to use and easily accessible on smaller screens.

This application follows the `Model-View-Controller` Paradigm and ultilizes back-end development principles and technologies for the UI design and functionality. `MySQL` was used to store data related to a user's pet that is compiled into a daily log, which can be viewed, monitored, or shared with other users. The accruacy of the log is dependent on user input for three specific events: pee, poo, food. The date & time of each event is stored within the applicaion and accessible for multiple user-sessions. 

`Node.js` and `Express.js` create a RESTful API with GET and POST routes called for retrieving and adding new event data. A `Sequelize` ORM protects API Keys (Object-Relational Mapping) and sensitive information with environment variables. This application is hosted and deployed on `Heroku: Cloud Application Platform` . 

<!-- at least one new library, package, or technology: -->

## User Story

```md
AS A pet owner, 
I WANT an app to track my pet’s daily rhythms: pottie breaks & food schedule.
SO THAT I can keep an accurate log of my pet's health & wellness.

```


## Acceptance Criteria

```md

GIVEN a Pet Tracker App. WHEN I visit the site for the first time. THEN I am prompted to either sign up or sign in. WHEN I choose to sign up. THEN I am prompted to create a username and password. WHEN I click on the sign-up button. THEN my user credentials are saved and I am logged into the site. WHEN I revisit the site at a later time and choose to sign in. THEN I am prompted to enter my username and password. WHEN I am signed in to the site. THEN I see navigation links for the, the dashboard, and the option to log out. 

```

## Contributors

[Kelsie Cummings](https://github.com/kelsie-c)

[Darrin Hunter](https://github.com/)

[Edita Pesa](https://github.com)

[Ryan Evans](https://github.com/rdevans87)


## Technologies/Frameworks

[Lucidchart](https://www.lucidchart.com/pages/) Flow chart for relationship visualization 

[Adobe Photoshop](https://www.adobe.com/) Design and Layout

[Bootstrap](https://getbootstrap.com/) CSS Front-End Framework 

[express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for Views.

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models, and create an Express.js API for Controllers.

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords.

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.




## Mock-up
The following animations demonstrates the application functionality: 

Animation cycles through signing into the app, clicking on buttons, and adding a new event.

PetTrax Homepage:
    -Sign in
    -Sign Up 

Creating a PetTrax Profile:
    -User/Pet Profile

    -Vet contact info 

    -Emergency contact info

    -"care groups"

PetTrax Dashboard:

    -Pee/Poop/Food

    -TimeStamp

PetTrax Log
    -organized list of tracked data for each pet.






