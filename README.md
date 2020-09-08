# Code-Lauderdale is build with React/TypeScript/Express/MySQL and few others
This project is built in order to accumulate simple, yet useful code snippets in a blog format for all to read. 

There are 2 different Webpack configurations. One for the server and one for the client.

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000), or once deployed I will provide a live link.

Thank you!
