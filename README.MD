https://jeremeychat.herokuapp.com/

## Project

A real-time chat messaging system with user authentication 

## Purpose

The project was designed as a learning experience to dive deeper with developing a backend

## Features
* Real-time messaging system
* User login
* User registration
* Edit/delete user messages
* Many users can be connected concurrently

## Front End

The front end was made with React and Ant Design. 

The messages displayed to the user are stored both in a MongoDB database and in a Redux store. 

### TODO
 
* Design a better looking UI for the messaging application. The current design is very dull and lacks character. There can be more improvements made here.
* Create a better UX by adding more feeedback when actions failed such as using the wrong login information or registering with the wrong data. 
* Refactor applicable states to be a part of the Redux store

## Back End

The back end was designed using Node.JS and Express. In addition, in order to be able to display data to all users in real time, Socket.io was used establish a bi-directional communication channel between the client and the server.
Originally, the messages were displayed by updating a Redux store each time a POST request was made to send the message to the server from the client. However, this posed a problem when multiple users connected. The state of the redux store was different for each user. Therefore the backend had to be redesigned to use sockets rather than HTTP requests.

The database was built on MongoDB. However, since the schema for the messages and the users are not dynamic, a SQL database could have been used as well. The main concern right now is the scalability of the messaging app. Since every single message is stored in a single collection. It is possible that over time the message collection would get too large. One way around this would be to create a new message collection for each user.

The user loging process does involve a JWT sign, but the JWT is not used anywhere else. The next step would be to incorporate JWT verification when a user tries to delete/edit their messages.

### TODO
* Implement horizontal scaling for the database and create a new message collection for each user rather than storing all messages from all users in one collection
* Implement JWT verification for when trying to edit/delete messages
* Refactor Index.js to have more modular and individual components. Currently, everything is stored inside of Index.js apart from the database schemas and models.