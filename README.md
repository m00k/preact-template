# Preact starter project

## Documentation

-   This is a TypeScript version of the default template for
    [preact-cli](https://github.com/developit/preact-cli).
-   [For Preact](https://preactjs.com/): General information about how to work
    with Preact, not specific to this template

## Usage

```bash
$ npx preact-cli create m00k/preact-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on
your machine it will start the development server on a random port.

## Commands
-   `npm install`: Installs dependencies

-   `npm run dev`: Run a development, HMR server

-   `npm run serve`: Run a production-like server

-   `npm run build`: Production-ready build

-   `npm run lint`: Pass TypeScript files using ESLint

-   `npm run test`: Run Jest and Preact Testing Library

### How to Test

The `typescript` template provides a basic test setup with Jest, and [Preact Testing Library](https://testing-library.com/docs/preact-testing-library/intro).

You can run all additional Jest CLI commands with the `npm run test` command as
described in the
[Jest docs](https://facebook.github.io/jest/docs/en/cli.html#using-with-npm-scripts).
For example, running jest in watch mode would be :

-   `npm run test -- --watch` instead of `jest --watch`
