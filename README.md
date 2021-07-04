# Ngrx2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

////////////////////////////////// ngrx /////////////////////////////////////////
install @ngrx/store

install @ngrx/store-devtools

install @ngrx/schematics

install effects
ng add @ngrx/effects@latest

//Generate store at root 
ng generate store store --module=app.module.ts --root=true --statePath=store --stateInterface=AppState

generate action
ng g action store/actions/customer-support --api=true --skip-tests

generate reducer
ng g reducer store/reducers/customer-support --api=true --skipTests=true --reducers=../index.ts

generate selector
ng g selector store/selectors/customer-support --skipTests=true

generate effect
ng g effect store/effects/customer-support --module=app.module.ts --root=true --api=true --skipTests=true