
# Sample AngularJS Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
Node 6.9.0 or higher and NPM 3 or higher dependencies are required

## Installation 
~~~
npm install -g @angular/cli
npm install -g yarn
ng set --global packageManager=yarn
~~~

### Create new sample-app
~~~
ng new sample-app --prefix sample --style scss --routing
~~~

## Installing Dependencies 
~~~
cd sample-app
npm install --save @angular/material @angular/animations @angular/cdk
npm install --save @angular/flex-layout
npm install --save hammerjs
npm install --save-dev json-server

ng generate component home --module app
ng generate component about --module app
~~~

## Start Development server
~~~
yarn start
npm run api
~~~

## Used below sites for 
* https://material2-demoapp.firebaseapp.com/
* https://rwa-trivia.firebaseapp.com/
* https://blog.realworldfullstack.io/real-world-angular-part-2-its-a-material-world-2d70238ef8ef
* https://alligator.io/angular/angular-material-2/
* https://coursetro.com/posts/code/29/Working-with-Angular-2-Material
