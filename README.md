# Phone Gallery

Sample project made for an interview test.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli), but its scaffolding was customized in the likes of the developer.
Some design decisions are inherited from the test requirements.

## Prerequisites

1. Install node
2. Install globally `@angular/cli nodemon` for local development
3. Install docker for dockerized development/deployment

## Installation

Avoid this step if using Docker.

```bash
git clone https://github.com/aelesfer/phone-gallery
cd \phone-gallery\
cd .\backend\
npm i
cd ..
cd .\frontend\
npm i
```

## Docker development

Easilly start your local enviroment using Docker Compose.

```bash
docker-compose up
```

## Local server with hot code swap

If docker is not used, you need to execute two terminals or use `concurrently` to execute frontend and backend commands at same time.

```bash
cd .\frontend\
ng serve
```

```bash
cd .\backend\
npm start
```

## Build

Run `ng build` to build the front project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```bash
cd .\frontend\
ng build --prod
```
