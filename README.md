# 18--social-network-API

## Description

This application was created as the start of a full stack social network application using a MongoDB database, Express.js routing, and the Mongoose ODM. It sets up the initial CRUD API routes for said application which allow users to be created, searched for, updated, and deleted. Users can also share their thoughts, react to friends' thoughts, create a friend list, and subsequently delete thoughts, reactions, friends, and themselves as a user. Although this application is still at the ground floor of its full potential, the MongoDB database and API middleware routing is an integral first step in leaning about the potential of MongoDB and the Mongoose ODM.

Some of the main challenges I encountered when creating this application were that although MongoDB is much more fluid and loose than Sequel (SQL) when it comes to how data is queried and added to the database, I did notice that the errors were much more elusive creating troubleshooting much more difficult. Also finding the most efficient ways to delete data on cascade and join tables was a challenge. Since MongoDB seems to require less code than SQL, there was a bit of a learning curve since there is a lot happening under the hood that I still have yet to fully understand.

With the exception of the challenges faced, I did learn yet another powerful tool within the MERN stack to add to my knowledge of full stack development. With this application I hope to continue its development adding a full-front end UI with React, in turn creating a full stack application strictly through the use of MERN.

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Links

[Github](https://github.com/xjessycaz12X/18--social-network-API)
