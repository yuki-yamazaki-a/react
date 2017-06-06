# This is Flux-study
This is Flux study.

I think simple, maintenable and scallable.

You can learning...

- How to use es2015 syntax like class based object oriented programming.
- How to develop web application(not SPA) by "react+flux" architecture with minimum depend libraries.
- Change multiple views by single user action.
- Separate the logics for use same on another page.

## How to running
1. install packages
```
$ npm install
```

2. build app
```
$ gulp build
```

3. start server
```
$ npm run server
```
You can test your browser.

## Architecture
### Data flow
![](https://i.imgur.com/fLpA6mw.png)

- using simple flux pattern.
- multiple components in a page(not SPA)
- sharing common logics

### Class dependencies
![](https://i.imgur.com/ozL7SX7.png)

- EntryPoint & Store/ActionCreator depend to page.
- View/Logic shared in multiple pages.

### Directory structure
```
.
├── index.html
├── src
│   └── javascript
│       ├── entrypoint
│       │   └── index.js
│       └── lib
│           ├── actionCreators
│           │   └── IndexActionCreator.js
│           ├── constants
│           │   └── indexActionTypes.js
│           ├── dispatchers
│           │   └── ApplicationDispatcher.js
│           ├── logic
│           │   └── Bar.js
│           ├── stores
│           │   └── IndexStore.js
│           └── views
│               ├── AnotherSummary.js
│               ├── Inputs.js
│               └── Summary.js
└── static
    └── javascript
        └── index.js
```
