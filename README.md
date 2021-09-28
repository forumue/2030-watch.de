# 2030-watch.de -> now deployed under 2030watch-modellprojekt.de

[![Netlify Status](https://api.netlify.com/api/v1/badges/aa0260cd-91c0-4f16-bd85-11373bdeeb2b/deploy-status)](https://app.netlify.com/sites/2030watch-modellprojekt/deploys)

## Setup

### Requirements
[Node.js and npm](https://nodejs.org/en/download/package-manager/) (included in Node.js)

### Build

``` bash
nvm use 14

# Install dependencies
npm install

# Generate data files and move them into the data folder
node data/load-data.js && mv indiNav.json sdgs.json indicators.json ./data/

# Serve with hot reload at localhost:3010
npm run dev

```


## (Automatic) deployment

After pushing/merging your feature branch into the master branch GitHub Actions build the static files and deploy them to the gh-pages branch. Changes there are captured and deployed by Netlify.  

``` bash
# Load and assemble the current data
node data/load-data.js

# Move the generated files into the data folder
mv indiNav.json sdgs.json indicators.json ./data/

# Generate the static files
npm run generate:gh-pages
```
