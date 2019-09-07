# Estate Agents Property Portal (POC)
> Add, View and Update your property listings with ease 🏠

## Build information
* ⚛️ [Preact](https://github.com/preactjs/preact) via [Preact CLI](https://github.com/preactjs/preact-cli) 😺
* 🌶 [unistore](https://github.com/developit/unistore) to act as global state container with actions
* ⛑ [unissist](https://github.com/DonnieWest/unissist) helper to persist data in localStorage

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```
## TODOs

- [ ] Meaningful tests, test and more tests!
- [ ] Bug fixes!
- [ ] Sortable tables to enable filtering by column
- [ ] Effective search on all data (not just address)
- [ ] Enable property features
- [ ] Enable property scheduled publishing
- [ ] Enable selected portals
- [ ] Add ability to upload photos and floor plans
- [ ] Proper form validation for user feedback on the fly
- [ ] Responsive tables for those Agents on the go
 
 ## Proposed project structure 
- Enable node-sass with PostCSS and cssnano (helps scalability and maintainability)
- Create a directory structure that will see CSS, JS and tests located together

 ```
src
│   README.md
│   package.json 
│
└───components
│   │
│   └───list
│       │   list.js
│       │   list.spec.js
│       │   list.scss
│   │
│   └───filters
│       │   filters.js
│       │   filters.spec.js
│       │   filters.scss
│
└───utils
│   │
│   └───price
│       │   price.js
│       │   price.spec.js
```

## Architecture considerations

* Authentication (complexities with agencies and their staff)
* Server-side rendering is an absolute must!
* Replace any 'state' related updates with direct API calls
* Containers to ease deployment and consistent conditions for testing
* Pattern library (Storybook)
* Unit testing (Jest)
* Accessibility testing (Pa11y)
* End-to-end testing (Cypress)
* Visual testing (BackstopJS or Percy)
* CloudFormation or Deployment Manager templates
* Image optimisation and host microservice
* Generate suitable APIs for external ingestion
