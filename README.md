# Movies App

Welcome to the Movies App! This is a full-stack application that allows users to search for movies, view details, and keep track of their search history. The app is built with a React frontend, a Node.js/Express backend, and uses a MongoDB database. The project demonstrates a complete workflow from frontend to backend, showcasing my skills in full-stack development.

## Live Demo

Check out the live version of the app [here](https://movies-app-j7xn.onrender.com).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/movies-app.git
    cd movies-app
    ```

2. **Set up the backend:**

    ```bash
    cd movies-app-api
    npm install
    ```

3. **Set up the frontend:**

    ```bash
    cd ../movies-app-webclient
    npm install
    ```

4. **Set up the database:**

    Ensure you have Docker installed and running. Then, in the root directory of the project:

    ```bash
    docker-compose up -d
    ```

5. **Run the application:**

    - In one terminal, start the backend:

      ```bash
      cd movies-app-api
      npm start
      ```

    - In another terminal, start the frontend:

      ```bash
      cd movies-app-webclient
      npm start
      ```

6. **Access the app:**

    Open your browser and go to `http://localhost:3000`.

## Usage

Once the app is running, you can use the search bar to find movies by title. Clicking on a movie will show detailed information about it. Your search history is saved and displayed below the search bar.

## Features

- **Search for Movies:** Find movies by their title.
- **Movie Details:** View detailed information about each movie.
- **Search History:** Keep track of your recent searches.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React
  - CSS

- **Backend:**
  - Node.js
  - Express

- **Database:**
  - MongoDB
  - Mongoose

- **Miscellaneous:**
  - Docker
  - Docker Compose

## Project Structure

```plaintext
movies-app/
├── docker-compose.yml
├── movie-app-db/                  # MongoDB setup
│   └── Dockerfile
├── movies-app-api/                # Backend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js                  # Express server
│   └── build/                     # Frontend build files
├── movies-app-webclient/          # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── assets/                # Images and other assets
│   │   ├── api/                   # API calls
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
└── .gitignore
```
##License
This project is licensed under the MIT License. See the LICENSE file for details.

###This project was created as a demonstration of my full-stack development skills. I hope you find it useful and inspiring. Feel free to reach out if you have any questions or feedback!

Happy coding!
