# Sample Angular Web application

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3
* Firebase function project was generated with [Firebase CLI](https://firebase.google.com/docs/cli/)
* It uses [Angular](https://angular.io) javascript framework version 5.x
* It uses [Angular Material 2](https://material.angular.io) components, styles, fonts and icons
* It uses [Angular Flex Layout](https://github.com/angular/flex-layout/wiki) for Responsive layout
* Node 8.10.0 or higher and NPM 5.6.0 or higher dependencies are required

### Run locally

```
Angular App
 yarn install
 yarn start
 npm run api

Firebase function
 npm run compile-functions   (compile only)
 npm run deploy-functions    (compile and deploy)
```

```
npm shrinkwrap
npm shrinkwrap --dev
```

### Tested with

```
Node: 8.10.0
NPM: 5.6.0
Yarn: 1.5.1
Angular CLI: 1.7.3
Angular: 5.2.4
OS: win32 x64
```

### Quick Installation Instructions

```
npm install -g @angular/cli@latest
npm install -g yarn
ng set --global packageManager=yarn
```

### Upgrade Angular CLI to the latest version

```
npm install -g @angular/cli@latest
```

Or uninstall and re-install

```
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```

Depending on your system, you may need to prefix the above commands with sudo.

### Update Angular CLI for local project

```
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

### Update Yarn CLI

```
npm install -g yarn
```

### Steps for creating this application

```
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
 npm install --save vis
 npm install --save-dev json-server

Creating new components
 ng generate component components/home --module app
 ng generate component components/about --module app
 ng generate component components/tags --module app
 ng generate component components/networkgraph --module app
 ng generate component components/product --module app

Creating new services
 ng generate service services/category --module app --spec false
 ng generate service services/question --module app --spec false
 ng generate service services/tag --module app --spec false
 ng generate service services/product --module app --spec false

 ng generate class model/category --spec false
 ng generate class model/department --spec false
```

### Add Apollo/GraphQL to the Application

```
Installing npm package dependencies
 cd sample-app
 npm install apollo-angular apollo-angular-link-http apollo-client apollo-cache-inmemory --save
 npm install graphql-tag graphql --save

Apollo codegen
 npm install -g apollo-codegen
 npm install -g graphql-code-generator

 apollo-codegen introspect-schema http://localhost:8080/graphql --output schema.json
 gql-gen --file schema.json --template typescript
```

### Create Docker image for static site

```
Build Docker image
 docker build -t sample-app .  
Run Docker Image
 docker run --name sample-app -p 80:80 -d sample-app
Run Bash Shell
 docker exec -it sample-app bash
```

### VSCode hot keys

```
Windows:
 (Ctrl+Shift+P) Open Command Palette
 (Ctrl+K Ctrl+S) Keyboard Shortcuts
 (Ctrl+K V) Markdown: Open Preview to the Side

Mac:
```

### Adding project to Github

```
git init
git add .
git commit -m "initial commit"
git remote add origin git@github.com:ketangit/sample-app.git
git push -u origin master
```

### Add below in package.json for firebase functions

```
  npm install -g firebase-tools

  "compile-functions": "rmdir /s/q functions\\lib & tsc --project functions"
  "dependencies": {
    "express": "^4.16.2",
    "firebase-admin": "^5.8.2",
    "firebase-functions": "^0.8.1",
    "fs-extra": "^5.0.0"
  },
  "devDependencies": {
    "@types/express": "^4.11.1",
    "tslint": "^5.8.0",
    "typescript": "^2.6.1"
  }
```

### API Endpoints (sample data)

* https://us-central1-sample-app-3.cloudfunctions.net/api/data/categories
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/questions
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/tagList
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/departments
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/engines
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/tasks
* https://us-central1-sample-app-3.cloudfunctions.net/api/data/jobs

### Credit / Prior Art

* https://www.sitepoint.com/beginners-guide-node-package-manager/
* https://zavoloklom.github.io/material-design-iconic-font/icons.html
* https://material2-demoapp.firebaseapp.com/
* [Real World Angular App Github source](https://github.com/anihalaney/rwa-trivia)
* https://blog.realworldfullstack.io/real-world-angular-part-2-its-a-material-world-2d70238ef8ef
* https://alligator.io/angular/angular-material-2/
* https://coursetro.com/posts/code/29/Working-with-Angular-2-Material
* https://loiane.com/2017/09/continuous-integration-with-angular-cli-travis-ci-firebase-greenkeeper-github/
* https://blog.angular-university.io/angular-material-data-table/
* https://stackblitz.com/edit/angular-material2-table?file=app%2Fapp.component.html
* https://firebase.google.com/docs/functions/typescript
* https://codeburst.io/graphql-server-on-cloud-functions-for-firebase-ae97441399c0
