# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. A pre-existing API is used to build a frontend user experience for users to interact with photos!

# Getting Started
* [Clone](https://github.com/neridkmn/photolabs) onto your local device.
* Navigate to `photolabs` directory
* Install dependencies using the `npm install` command.
* Start the web server using the `npm start` command. The app will be served at http://localhost:3000/.
* Go to http://localhost:3000/ in your browser.

# Notes:
Two different servers will be running during development:

  1- Client-side Webpack development server 
  
  2- API server to provide photo data

  ## Final Product 

### Home page
<img width="1437" alt="Screenshot 2023-09-23 at 7 42 07 PM" src="https://github.com/neridkmn/photolabs/assets/128938408/3152622f-655c-4089-9846-25dbf1241eae">

### Notification if a photo is selected 
<img width="1437" alt="Screenshot 2023-09-23 at 7 47 06 PM" src="https://github.com/neridkmn/photolabs/assets/128938408/00496135-b48b-44de-b076-9c6bcea01a93">

### Modal
<img width="1437" alt="Screenshot 2023-09-23 at 7 48 14 PM" src="https://github.com/neridkmn/photolabs/assets/128938408/d52f8d3d-856e-483e-a55c-a0b00df8819e">

### Topics
<img width="1437" alt="Screenshot 2023-09-23 at 7 49 27 PM" src="https://github.com/neridkmn/photolabs/assets/128938408/e97ef2e4-7bee-4052-9569-16a63f388273">

### Overview
https://github.com/neridkmn/photolabs/assets/128938408/e5dd4859-7996-455b-a6a5-f7683acd12ff




## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

Dependencies:

Front-end:
* "testing-library/jest-dom": "^5.16.5",
* "@testing-library/react": "^13.4.0",
* "@testing-library/user-event": "^13.5.0",
* "react": "^18.2.0",
* "react-dom": "^18.2.0",
* "react-scripts": "5.0.1",
* "web-vitals": "^2.1.4"

Back-end:
* "body-parser": "^1.18.3",
* "cors": "^2.8.5",
* "dotenv": "^7.0.0",
* "express": "^4.16.4",
* "helmet": "^3.18.0",
* "pg": "^8.5.0",
* "socket.io": "^2.2.0",
* "ws": "^7.0.0"
* "jest": "^24.8.0",
* "supertest": "^4.0.2"


## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend

npm start
```
Project Outcomes:

* A user can view photos from the homepage loaded from the API.
* The user can navigate to different photo categories, also called topics.
* The user can click on a photo to view a larger version of the photo and relevant/similar photos.
* The user can like a photo from anywhere within the application where the photo is displayed.
* The user can view a heart icon with a notification in the navigation if there are liked photos.
* The navigation will consist of different topics and a heart icon.
* The client-side application will make API requests to load and persist data.

