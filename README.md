# blanja-api

Simple, easy implementation of the private web API.

## About The Project

API build in Express.js and mySQL for [yae48/blanja-web](https://github.com/yae48/blanja-web)

### Built With

* [Express.js](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

### Prerequisites

* [npm](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yae48/blanja-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   This will install the dependencies inside `node_modules`

### MySQL configuration

Please create database and make the changes in the `/src/config/mySQL.js` file.

### Usage

```sh node index
``` 
OR 
```sh nodemon start
``` 
OR 
```sh npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## License

Distributed under the MIT License. See `LICENSE` for more information.
