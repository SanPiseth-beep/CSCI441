# CSCI441
This repo is the group project for CSCI441 Software Engineering

Project Proposal: Bike Rental System

Professor: Dr.Mike Mireku Kwakye
CSCI441: Software Engineering

Group: Team B
Sep 1, 2024


Repository URL:
https://github.com/SanPiseth-beep/CSCI441

Team B Group Members:

Angel Cervantes-Ramos
Nillin Lay
Ndeye Anta Mbaye
Pisteh San

# Project Description

The project is a bike rental system that allows users to rent bikes for a certain period of time. The system will have the following features:

- User registration and login
- Bike rental
- Bike return
- Payment processing

# Git Commands

This section will provide you with the basic git commands that you will need to use to work on the project.

## git pull
```
git checkout main
git pull origin main
```
This will pull the latest changes from the main branch to your local main branch when there is a completed feature branch that is ready to be merged to the main branch.


## git merge
```
git checkout main
git pull origin main
git checkout branch_name
git merge main
```
This will pull the latest changes from the main branch to your local main branch and then merge the changes from the main branch to the feature branch. This is done when you have completed a feature branch and you want to merge it to the main branch.

***important:*** you will have to do this when there a completed feature branch that is ready to be merged to the main branch.

## git push
```
git add .
git commit -m "message"
git push origin branch_name
```

This will push the changes from your local main branch to the remote main branch. This is done after you have completed a feature branch and merged it to the main branch.

***important:*** you can use the UI on vs to push the changes to the remote branch.

# running the project

To run the project, you will need to have the following installed on your machine:

- Node.js
- npm

To run the project, you will need to run the following commands:

```
npm install
npm start
```

you can also run the project using the following command:

```
npm run dev
```

***important:*** you may need to npm everytime there is a completed feature branch that is ready to be merged to the main branch.

# Docker instructions

docker instructions will be added later.



