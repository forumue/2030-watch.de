# 2030Watch

[![Build Status](https://travis-ci.org/okfde/2030watch.svg?branch=master)](https://travis-ci.org/okfde/2030watch)


## Local setup

``` bash

# Install dependencies
$ npm install

# Generate data files and move them into the data folder
$ node data/load-data.js && mv indiNav.json sdgs.json indicators.json ./data/

# Serve with hot reload at localhost:3010
$ npm run dev

```


## Automatic deployment

After pushing/merging your feature branch into the master branch Travis CI builds the static files and deploys them to GitHub Pages. For this Travis executes the followings steps:

```
node data/load-data.js // load and assemble the current data
mv indiNav.json sdgs.json indicators.json ./data/ // move the generated files into the data folder
npm run generate:gh-pages // generate the static files
```


## Manual deployment (not done anymore)

### Generate the dist folder for publishing with GitHub Pages

``` bash

$ npm run generate:gh-pages

```

### Move and push the generated files and folders to the gh-pages branch
