
These instructions are for setting up this project from scratch. If you've cloned this repo, just run npm install and npm start.

## Initial Setup 

**Repository setup**

- create new repo on github and select 'node' option for gitignore'
- clone repo to local machine

## Database setup 

Assuming psql is installed, 

`CREATE DATABASE database_name OWNER dev_user`


## Express App Setup

**Initialize Node project**

`npm init -y`

**Dependencies to install**

- express - web framwork to build the server
- ejs - template engine for rendering dynamic HTML views
- psql - PostgresSQL client for database connections
- prisma - ORM for database queries
- dotenv – load environment variables from .env file

**Install dependencies**

`npm install express ejs pg prisma dotenv`

**Create app.js file**

    This is your main Express server fil

**Add start up script to package.json**

To allow you to run the app from any directory of your repository, instead of having to be in the root directory, add this to the 'scripts' section of your package.json

`"start": "node --watch app.js"

Run your app with `npm start`

## Prisma setup

Following the Prisma ORM lesson from the Odin Projet for detailed instructions on setting up Prisma: https://www.theodinproject.com/lessons/nodejs-prisma-orm

Prisma usually runs with typescript by default but the Odin Project includes instructions for setting up Prisma so that it works with javascript.




