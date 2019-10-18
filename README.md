# Track my energy usage

Graph to show my next energy usage based on estimated usage.


## Run

```bash
$ yarn dev
```

## Test

```bash
$ yarn test
```

## Deploy

```bash
$ yarn deploy

# If this is the first deploy, you must provide login details for
# www.now.sh
```

#### GitHub Actions

I added a GitHub action to build/test/lint the project and will deploy it to Now.sh if everything passes!
Check it out: https://energy-usage.harrymt.now.sh/

#### TODO

- Basic Cypress tests for e2e tests
- Acceptance test for the endpoints
- Unit tests for estimate usage algorithm


Based on a starting template for React, NextJS, TypeScript: https://github.com/alepacheco/landing-template