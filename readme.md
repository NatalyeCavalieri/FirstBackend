<h1 align="center">RocketNotes Backend</h1>

Welcome to the RocketNotes backend - Your amazing note-taking application!

> Status: developing 🚧

## Project Overview

The RocketNotes backend is responsible for managing storage, authentication, and data manipulation related to user notes.

## Directory Structure

- **src/controllers**: Controllers for data manipulation (Notes, Tags, Sessions, User Avatar, User).
- **src/database**: Configurations and scripts related to the database (Knex and SQLite).
- **src/configs, src/middleware, src/providers, src/routes, src/utils**: Various configurations and utilities for the project.
- **src/uploads**: Location for storing uploads (user avatars, for example).
- **src/tmp**: Temporary folder for storing temporary files.

## Technologies Used

- **Express**: Web framework for Node.js.
- **Knex**: SQL query builder.
- **SQLite and SQLite3**: Database used for local storage.
- **Axios, Bcryptjs, Cors, Jsonwebtoken, Multer**: Packages for various functionalities (HTTP requests, encryption, CORS control, authentication, file manipulation).

## API Endpoints

- **/api/signin**: Route for user authentication.
- **/api/signup**: Route for user registration.
- **/api/notes**: Route for note manipulation.
- **/api/tags**: Route for tag manipulation.
- **/api/profile/avatar**: Route for user avatar manipulation.
- **/api/profile**: Route for user profile information.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the ISC License. See the LICENSE.md file for more details.
