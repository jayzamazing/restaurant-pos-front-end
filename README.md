#Restaurant POS [![Build Status](https://travis-ci.org/jayzamazing/Restaurant-POS.svg?branch=master)](https://travis-ci.org/jayzamazing/Restaurant-POS)

This project is a mock restaurant pos system.

![image](<./github/Screenshot.png>)

###How to run
This project can either be run using the following commands:
> For production

1. docker-compose -f production.yml -f docker-compose.yml build
2. docker-compose -f production.yml -f docker-compose.yml up -d

> For Testing

1. docker-compose -f test.yml -f docker-compose.yml build
2. docker-compose -f test.yml -f docker-compose.yml up

###Background
I built this application to emulate a point of sale business application. This application would be similar to a POS system used by servers at a restaurant but available for use on any device with access to the web.

###Use Case
This application would be useful in any restaurant. It allows a logged in user to select a table, add various checks to a table, add orders to a specific check, delete empty checks, and cash out a check.

###Initial UX
The initial web and mobile wireframes are shown below:
![image](<./github/Page_1.png>)
![image](<./github/Page_2.png>)
![image](<./github/Page_3.png>)
![image](<./github/Page_4.png>)

###Prototype
You can see the application in action at the following link:
http://restaurantpos.jayzamazing.com/

###Technical
This project uses FeathersJS for the backend framework which uses Express for the Node.js web framework, Passport for authentication, and Bcrypt for hashing the passwords. The data is stored inside MongoDB using Mongoose. The frontend is done using Html, Less, Javascript, Angular, and Jquery. Responsive design is done using Bootstrap. To build the web application Babel, Uglify-js, and Webpack are used. Testing is done using Mocha and Chai.

###Development Roadmap
This is v4.1.0 of the app. Future enhancements can be seen below:
* Need to add logout button in the nav area.
* Expire users login after 15 minutes.
* Table order section will allow modification of order and splitting of table.
* Add error page for failed authentication.
* Add manager portal to add / remove / reorganize tables.
