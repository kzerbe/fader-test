# FaderTest

This Angular 7 SPA can be used for performance tests of many progress bars or faders.
The application shows pages containing up to several hundred faders which get streamed data in high 
sample rates as typically 50 ms.

The page render the faders via CSS, SVG and HTML-5 canvas. The pages get dynamically
layouted via Twitter Bootstrap 4. The purpose of the application is to measure the
performance and resource limits on different browsers and mobile devices.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.
Screen layout is done with Twitter Bootstrap 4.

## NEW Branch "reactive"
Besides the "main" branch a new branch "reactive" is using observable streams 
to build and stream fader data (avoiding legacy JS code).

## Demo installation

An installed release of the app is accessible at https://fader-test.zerbe.cloud/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production Server
Run `npm run serve` for a production server. Navigate to `http://localhost:3000/`.

## Create Docker Image
The project contains a Dockerfile and a docker image can be created with 
the command `npm run build-image`

## Run Docker Container
After creating an image, you can run a docker container with the command
`npm run container`. The container will host the application via port 3000.

## Changing Commands
You can modify the commands above by editing the `scripts` section in 
file `package.json`.
