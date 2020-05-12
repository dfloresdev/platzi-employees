# Platzi Employees :smiley:

In this project you can see a CRUD about employees

## You can view the project in the next URL or [live demo](https://platzi-master.dflores.dev/):

#### `https://platzi-master.dflores.dev/`

## Description :open_book:

All app have [Routers](https://reacttraining.com/react-router/) to redirect or navegate to others sections. Also it's hosted by [Firebase](https://firebase.google.com/?hl=es-419&gclid=EAIaIQobChMInJGMkamv6QIVQwnnCh0PrATwEAAYASAAEgLom_D_BwE) and one API deployed in [Google App Engine](https://cloud.google.com/appengine?hl=es)

### 1. Home :house:

Only is a landing Page
![](./.readme-statics/home.png)

### 2. Login :door:

This section have different methods to login, the provider it's firebase. The routes are protected to start session
![](./.readme-statics/login.png)

### 3. Dashboard :chart_with_downwards_trend:

The [carnita](https://www.google.com/search?q=tacos+de+carnitas&tbm=isch&ved=2ahUKEwiLiMP_q6_pAhXUYqwKHXbvB6QQ2-cCegQIABAA&oq=tacos+de+carnitas&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BggAEAcQHlCGJVjELmD3L2gAcAB4AIABqAGIAb0JkgEDMC45mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=JB-7XovmFtTFsQX23p-gCg&bih=598&biw=1366#imgrc=WaXBLD3kyd5tsM) of the app, in this section you will see the all employees and you can play creating, deleting or modified that employees.
Use [Redux](https://redux.js.org/basics/usage-with-react) for the state and actions to call differents function with the backend

![](./.readme-statics/dashboard.png)

### 4. Backend :sunglasses:

You can see the magic in [this link](https://platzi-master-23c57.wl.r.appspot.com/api-docs/)

## Feedback

I love the feedback
if you wish contribuit

### How to use the project?

- **Step 1**
  Run the next command in your terminal

#### `npm run install`

- **Step 2**
  run the project

#### `npm run start`

- **Build**
  If you want change the code, you must recompile

#### `npm run build`

## Follow me [dflores.dev](https://dflores.dev)

### Anywhere @dfloresdev

### Project Structure

```
├── package.json
├── package-lock.json
├── public
│   ├── favicon-1.ico
│   ├── favicon.ico
│   ├── index.html
│   ├── logo-192.png
│   ├── logo192.png
│   ├── logo-512.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── APIS
    │   └── apis.js
    ├── assets
    │   ├── more
    │   └── statics
    │       ├── elephant.png
    │       ├── logoB.png
    │       ├── logo.png
    │       └── social-network
    │           └── github.svg
    ├── components
    │   ├── cardCategories
    │   │   ├── CardCategories.jsx
    │   │   └── CardCategories.scss
    │   ├── cardEmployee
    │   │   ├── CardEmployee.jsx
    │   │   └── CardEmployee.scss
    │   ├── footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.scss
    │   ├── header
    │   │   ├── Header.jsx
    │   │   └── Header.scss
    │   ├── hero
    │   │   ├── Hero.jsx
    │   │   └── Hero.scss
    │   ├── layout
    │   │   └── Layout.jsx
    │   ├── listEmployees
    │   │   ├── ListEmployees.jsx
    │   │   └── ListEmployees.scss
    │   ├── modal
    │   │   ├── Delete
    │   │   │   ├── Delete.jsx
    │   │   │   └── Delete.scss
    │   │   ├── FormEditEmployee
    │   │   │   ├── FormEditEmployee.jsx
    │   │   │   └── FormEditEmployee.scss
    │   │   ├── FormEmployee
    │   │   │   ├── FormEmployee.jsx
    │   │   │   └── FormEmployee.scss
    │   │   ├── Modal
    │   │   │   ├── Modal.jsx
    │   │   │   └── Modal.scss
    │   │   └── Success
    │   │       ├── Success.jsx
    │   │       └── Success.scss
    │   └── subHeader
    │       ├── SubHeader.jsx
    │       └── SubHeader.scss
    ├── containers
    │   ├── Dashboard
    │   │   ├── Dashboard.jsx
    │   │   └── Dashboard.scss
    │   ├── Home.jsx
    │   ├── Login
    │   │   ├── Login.jsx
    │   │   └── Login.scss
    │   └── NotFound.jsx
    ├── firebase.example.js
    ├── hooks
    │   ├── useDeleteEmployee.js
    │   ├── useGetCategories.js
    │   └── useGetEmployees.js
    ├── index.js
    ├── logo.svg
    ├── redux
    │   ├── categoriesDuck.js
    │   ├── employeesDuck.js
    │   ├── login.js
    │   ├── store.js
    │   └── userDuck.js
    ├── routes
    │   └── App.js
    ├── serviceWorker.js
    ├── setupTests.js
    ├── styles
    │   ├── App.css
    │   ├── index.scss
    │   └── variables.scss
    ├── __test__
    │   └── App.test.js
    └── utils
        ├── icons
        │   └── svgIcons.js
        └── more
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
