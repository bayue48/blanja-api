# blanja-api

Simple, easy implementation of the private web API.

## About The Project

API build in [Express.js](https://expressjs.com/) and [MySQL](https://www.mysql.com/) for [bayue48/blanja-web](https://github.com/bayue48/blanja-web)

### Prerequisites

- [npm](https://nodejs.org/en/download/)
  ```sh
  npm install npm@latest -g
  ```

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

```js 
host: YOUR_HOSTNAME,
user: YOUR_DBUSERNAME,
password: YOUR_DBPASSWORD,
database: YOUR_DBNAME,
```

### Usage

`node index` OR `nodemon start` OR `npm start`

Runs the app in the development mode.<br>
Open [http://yourhostname:8000/api/v2/](http://yourhostname:8000/api/v2/) to view it in the browser.

### Endpoint

- Get All Products
```sh
GET
/api/v2/products
```
- Get Single Products
```sh
GET
/api/v2/products/:id
```
- Add New Products
```sh
POST
/api/v2/products
```
- Edit Existing Products
```sh
PATCH
/api/v2/products/:id
```
- Delete Products
```sh
DELETE
/api/v2/products/:id
```

## License

Distributed under the MIT License.