# Sample Angular Web application
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8
* It uses [Angular](https://angular.io) javascript framework version 5.x
* It uses [Angular Material 2](https://material.angular.io) components, styles, fonts and icons
* It uses [Angular Flex Layout] (https://github.com/angular/flex-layout/wiki) for Responsive layout
* Node 6.9.0 or higher and NPM 3 or higher dependencies are required


### Run locally
~~~
yarn install
yarn start
npm run api
~~~


### Tested with
~~~
Angular CLI: 1.6.8
Node: 6.11.5
Angular: 5.2.4
Yarn: 1.3.2
OS: win32 x64
~~~


### Quick Installation Instructions
~~~
npm install -g @angular/cli@latest
npm install -g yarn
ng set --global packageManager=yarn
~~~


### Upgrade Angular CLI to the latest version
~~~
npm install -g @angular/cli@latest
~~~
Or uninstall and re-install 
~~~
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
~~~
Depending on your system, you may need to prefix the above commands with sudo.


### Update Angular CLI for local project
~~~
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
~~~

### Update Yarn CLI
~~~
npm install -g yarn
~~~


### Steps for creating this application
~~~
Create new application using ng-cli
 ng new sample-app --prefix sample --style scss --routing

Installing npm package dependencies 
 cd sample-app
 npm install --save @angular/material @angular/animations @angular/cdk
 npm install --save @angular/flex-layout
 npm install --save material-design-icons
 npm install --save typeface-roboto
 npm install --save material-design-iconic-font
 npm install --save hammerjs
 npm install --save-dev json-server
 npm install --save vis

Creating new components
 ng generate component home --module app
 ng generate component about --module app
 ng generate component tags --module app
 ng generate component networkgraph --module app
~~~

### Reference sites
* https://zavoloklom.github.io/material-design-iconic-font/icons.html
* https://material2-demoapp.firebaseapp.com/
* https://rwa-trivia.firebaseapp.com/
* https://blog.realworldfullstack.io/real-world-angular-part-2-its-a-material-world-2d70238ef8ef
* https://alligator.io/angular/angular-material-2/
* https://coursetro.com/posts/code/29/Working-with-Angular-2-Material
* https://loiane.com/2017/09/continuous-integration-with-angular-cli-travis-ci-firebase-greenkeeper-github/
