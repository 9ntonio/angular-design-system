# Flinks Design System

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.17.

## Notes on using `cf-content-types-generator`

`npx cf-content-types-generator -s [Space-ID] -t [Contentful-Personal-Token] -o projects/public-library/src/lib/contentfulmodels/contentful-types.ts -X -r`

The `-X` flag creates TypeScript types that are compatible with contentful.js v10. When you use this flag, the generator will produce types specifically formatted to work with version 10 of the Contentful JavaScript SDK.

This is particularly useful because the v10 version of the Contentful SDK has a different typing system compared to earlier versions. The v10 types include features like:

-   Support for chain modifiers
-   Built-in localization support (making the --localized flag unnecessary when using v10 types)
-   Different structure for defining content type skeletons

This flag is usually used together with the `-r` flag when you want to generate response types as well, which is another feature specific to v10 compatibility.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build public-library` to build the library when you've added or changed anything within it. If you `DO NOT` build from your changes, the application will `NOT` see the changes.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
