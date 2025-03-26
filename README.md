# OptraEth Mern

## Overview

OptraEth Mern is a full-stack blockchain application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Reown(WalletConnect) functionality to connect with the Ethereum blockchain.
Currently this app allows you to join the waitlist of OptraEth which is a Opinion Trading based application. This guide provides instructions on how to set up and run the application locally.

## Prerequisites

**Before you begin, ensure you have the following things installed and configured:**

- **[Node.js](https://nodejs.org/)** : Download and install Nodejs.
- **[Git](https://git-scm.com/downloads)** : Download and install Git.
- **[Visual Studio Code](https://code.visualstudio.com/)** : Download and install Visual Studio Code.
- **[MongoDB](https://www.mongodb.com/try/download/community)** : Download and install MongoDB Community Server. (Uncheck download MongoDB Compass option during Server installation and install Compass separately)
- **[MongoDB Compass](https://www.mongodb.com/try/download/compass)** : Download and install MongoDB Compass. Open MongoDB Compass and create a new connection locally, you will obtain a connection string as 
  `mongodb://localhost:27017/`, you will need this connection string while setting up environment variables for the backend.
- **[Reown(WalletConnect)](https://cloud.reown.com/sign-up)** : Sign up and create account on Reown (previously known as WalletConnect). After account creation, create a new project,
select `AppKit` as project type and select a frontend framework of your choice. After successful creation of a project, you will get a ProjectID, you will need this ProjectID while setting environment variables
for the frontend.

## Running The App
 
**Follow these steps to run the app on your local machine:**

***1) Open your terminal and run the following command in the terminal to download and open the repository in Visual Studio Code.***
```
git clone https://github.com/CrazzyPhoton/OptraEth_Mern.git
cd OptraEth_Mern
code .
```

***2) Once the repository opens in VS Code, open a new terminal inside VS Code and navigate to the*** `backend` ***folder.***
```
cd backend
```
- Run the above command in VS Code terminal.

***3) Install backend dependencies.***
```
npm install
```
- Run the above command in VS Code terminal.
- Once dependencies are installed a new `node_modules` folder would be created in the backend folder.

***4) Create a file named*** `.env` ***in the backend folder and then create the following varible in the file.***
```
MONGO_URI
```
- Set the obtained MongoDB connection string as its value, for example `MONGO_URI = mongodb://localhost:27017/`, and then save the `.env` file.

***5) Navigate to the*** `frontend` ***folder.***
```
cd ../frontend
```
- Run the above command in VS Code terminal.

***6) Install frontend dependencies.***
```
npm install
```
- Run the above command in VS Code terminal.
- Once dependencies are installed a new `node_modules` folder would be created in the frontend folder.


