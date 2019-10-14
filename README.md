# Track my energy usage

Graph to show my next energy usage based on estimated usage.


## Run

```bash
$ yarn dev

# Open a new terminal in the /api directory

$ yarn dev
```

## Test

```bash
$ yarn test

# Open a new terminal in the /api directory

$ yarn test
```

## Deploy

Deploys both frontend and api.

```bash
$ yarn deploy

# If this is the first deploy, you must provide login details for
# www.now.sh
```

#### GitHub Action

I added a GitHub action to build/test/lint the project and will deploy it to Now.sh if everything passes!
Check it out: https://energy-usage.harrymt.now.sh/



Based on a starting template for React, NextJS, TypeScript: https://github.com/alepacheco/landing-template