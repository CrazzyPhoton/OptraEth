# OptraEth

## Overview

OptraEth is a full-stack blockchain application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Reown(WalletConnect) functionality to connect with the Ethereum blockchain.
Currently this app allows you to join the waitlist of OptraEth which is a Opinion Trading based application.

Visit the app hosted on Vercel: https://optra-eth-mern-frontend.vercel.app/

The below guide provides instructions on how to set up and run the application locally.

## Prerequisites

**Before running the app, ensure you have the following things installed and configured:**

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

***2) Once the repository opens in VS Code, open a new terminal inside VS Code and navigate to the*** `frontend` ***folder.***
```
cd frontend
```
- Run the above command in VS Code terminal.

***3) Install frontend dependencies.***
```
npm install
```
- Run the above command in VS Code terminal.
- Once dependencies are installed a new `node_modules` folder would be created in the `frontend` folder.

***4) Create a file named*** `.env` ***in the*** `frontend` ***folder and then create the following environment variables in the file.***
```
VITE_REACT_APP_BACKEND_BASEURL
```
and
```
VITE_REOWN_PROJECT_ID
```
- Set `VITE_REACT_APP_BACKEND_BASEURL = "http://localhost:5000"`
- Set the value of `VITE_REOWN_PROJECT_ID` as the ProjectID obtained after creating a project in Reown, for example `VITE_REOWN_PROJECT_ID = "c2578d873ce930b4bc9faca48321968e"`, and then save the `.env` file.

***5) Navigate to the*** `backend` ***folder.***
```
cd ../backend
```
- Run the above command in VS Code terminal.

***6) Install backend dependencies.***
```
npm install
```
- Run the above command in VS Code terminal.
- Once dependencies are installed a new `node_modules` folder would be created in the `backend` folder.

***7) Create a file named*** `.env` ***in the*** `backend` ***folder and then create the following environment variable in the file.***
```
MONGO_URI
```
- Set the obtained MongoDB connection string as its value, for example `MONGO_URI = "mongodb://localhost:27017/"`, and then save the `.env` file.

***8) Run the backend***
```
node index.js
```
- Run the above command in VS Code terminal.
- The following messages `Server running on port 5000` and `Connected to MongoDB` would be displayed in the VS code terminal once the backend starts running successfully.
- This terminal will have the backend running now, you will have to open a new VS Code terminal to run the frontend.

***9) Open a new VS Code terminal and navigate to the frontend***
```
cd frontend
```
- Run the above command in the new VS Code terminal.

***10) Run the frontend***
```
npm run dev
```
- Run the above command in the new VS Code terminal.
- The following link `http://localhost:5173/` would be displayed in the new VS Code terminal once the frontend starts running successfully.
- Visit the link `http://localhost:5173/` to view and interact with app.



