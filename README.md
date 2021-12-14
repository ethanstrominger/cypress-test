# todolist 
Todolist app based on [this github Cypress Testing Tutorial repository](https://github.com/daydreamheart/cypress-testing-tutorial) which is used in [this tutorial](https://medium.com/the-web-tub/getting-started-with-cypress-98970de1e7e6).  The app in the tutorial was created with Vue.js and Bootstrap5 📅. Additional example tests added during the [Boston Software Crafters Meetup on 13-Dec-2021](https://www.meetup.com/Boston-Software-Crafters/events/gtrhhsyccqbrb/)).

- Main branch - Contains: 
  - a sample application used for the testing the local todoistlist app, 
  - some tests for the local app in cypress/integration_tests/cypress-tests-for-current-app, and
  - sample tests shipped as part of Cypress for a todolist app on cypress.io.
- Cypress branch - Contains the sample application without additional tests and the Cypress testing files.

## How project was created
- Followed [Step-by-step tutorial](https://medium.com/the-web-tub/getting-started-with-cypress-98970de1e7e6), except used yarn to install Cypress:
```
yarn add cypress
npx serve # same as instructions
yarn run cypress open
```
## How to add Cypress to an existing project
```
yarn add cypress
yarn run cypress open
```

## How to set up project
- Clone project
- From the terminal:
```
yarn
npx serve
yarn run cypress open
```

## Other Resources
- [Documentation](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
- https://codelikethis.com/lessons/javascript/cypress
- https://docs.cypress.io/guides/getting-started/installing-cypress
- https://www.mikenikles.com/blog/develop-cypress-end-to-end-tests-on-gitpod-io-virtual-desktop-included
- https://docs.cypress.io/guides/core-concepts/introduction-to-cypress
- https://example.cypress.io/
