# Hungry Hungry Duckos

## Prerequisites
- NodeJs
- NPM
- MySQL 

## Getting started

Clone the repository 

```bash
git clone git@github.com:charlottedibb/hungry-hungry-duckos.git && cd hungry-hungry-duckos
```

### Backend setup

From server directory, run npm install

```bash
cd server && npm install
```
Copy the .env.example file

```bash
cp .env.example .env
```
Create a local database and fill in the .env file with your database credentials

Run database migration

```bash
npm run migrate
```

Run database seeds

```bash
npm run seed
```

Start up the api server

```
npm run dev
```

### Frontend setup

In a separate terminal window run npm install inside the client directory

```
cd client && npm install
```

Copy the .env.example file - no need to fill anything in as it already contains the api localhost address

```bash
cp .env.example .env
```

Start up the react app

```bash
npm start
```

Go to http://localhost:8080/ to view the app in your browser
