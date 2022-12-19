# Image processing API

![image](https://user-images.githubusercontent.com/35667900/208327714-b46debbd-e11a-4450-8a6d-bb003f2c75ae.png)

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Steps to run the Project](#steps-to-run-the-project)
  - [Installing The Project in **_Development Mode_**](#installing-the-project-in-development-mode)
  - [Scripts available](#scripts-available)
- [License](#license)

### About the Project

- **Image processing API** is a Udacity Full-Stack Nanodegree project which demonstrates the capabilites of using Nodejs and Express to create a server and to start building APIs that serve puropses.
- The project is a tool for image processing that can resize _jpg_ images into thumbnails using prespecified parameters (filename, width, height)
- All you have to do is inserting any jpg image under `assets/full` directory and use the **filename** in the query parameters with specifying **width** & **height** like so `http://localhost:3000/api/images?filename={filename}&width={width}&height={height}`
- You might find the newly resized image under `assets/thumb` directory if it has been successfully resolved.

### Technologies used

- **_NodeJs_** as the backend language
- **_Express_** to create and manipulate the server
- **_Typescript_**
- **_prettier_** and **_eslint_** for formatting and linting
- _**Jasmine**_ for unit testing
- _**Sharp**_ for manipluating images

### Steps to Run The Project

#### Installing The Project in **_Development Mode_**

1. Clone the repository by running this command
   `git clone https://github.com/MalakJoseph/image-processing-api.git`.
2. Go to the project directory `cd image-processing-api`.
3. Install packages with `npm install`.
4. Run in development mode `npm run dev`.
5. switch to `localhost:3000`

#### Scripts available

1. `"start"` to run the production version from the build folder.
2. `"dev"` to run the development version using **nodemon**.
3. `"test"` for testing using **Jasmine**.
4. `"lint"` for linting with **eslint**.
5. `"prettier"` formatting.

### License

This project is licensed under the terms of the ISC license.
