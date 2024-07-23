## Description

App for automatic process. 

## Installation

```bash
$ npm install
```

## How to run

1. Create database and add in .env
```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

2. Sync schema prisma with database 
```bash
$ npx prisma db push
```

3. Run app (server)
```bash
$ npm run start:dev
```