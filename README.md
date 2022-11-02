# cs-5744-project-1
Virginia Tech - CS 5744 - Project 1 - HokieRide

## Development

Step 1: Clone the Repository

Step 2: Install the dependencies

```
cd cs-5744-project-1/website
yarn install
```

Step 3: Modify pages (in `docs` folder)

Step 4: Run local server

```
yarn start
```

## Deploy to GitHub Pages

From the `website` folder:

```
yarn build
```

```
GIT_USER=USERNAME CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages # SSH
# or
GIT_USER=USERNAME CURRENT_BRANCH=master npm run publish-gh-pages # HTTPS
```
