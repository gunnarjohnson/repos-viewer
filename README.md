# Pinned Repos Viewer
**A React app that uses the GitHub REST API to display a user's pinned repositories**

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Project Instructions](#project-instructions)
* [Related Documentation](#related-documentation)
* [License](#license)

## Installation

### Get App
Choose from the following options:
* **Clone:** `git clone https://github.com/gunnarjohnson/pinned-repos-viewer.git`
* [**Download**](https://github.com/gunnarjohnson/pinned-repos-viewer/archive/master.zip)
* [**Fork**](https://github.com/gunnarjohnson/pinned-repos-viewer/fork)

### Install Dependencies
```
npm install
```
Installs the dependencies in the local `node_modules` directory.

## Usage

### Development
```
npm run dev
```
Runs the app in Webpack's development mode using `webpack-serve`. Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

### Deployment
```
npm run build
```
Builds the app in Webpack's production mode to the `dist` directory.

## Technologies

* [Babel](https://github.com/babel/babel)
* [PostCSS](https://github.com/postcss/postcss)
* [React](https://github.com/facebook/react)
* [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate)
* [Webpack](https://github.com/webpack/webpack)

## Project Instructions

### Assignment

**_Create a React project that uses the GitHub REST API to show a user’s “pinned” repositories._**

**You should be able to search a user’s name in an input field and have the pinned repositories update.**

**It should handle and display some sort of “loading” state while fetching data.**

**It should handle errors if the username doesn’t return anything on GitHub**

**The list of repositories should include details such as the repository’s name, description, and the languages it uses.**

**Clicking on a repository should take you to a secondary page with additional details, such as the README or other information.**

### Requirements

**You may use “starters” such as create-react-app or NextJS, but do not use boilerplates that contain significant amounts of already-written code.**

**Avoid using any external packages or component libraries such as Material-UI, React Bootstrap, etc.**

**For API requests, please only use the Fetch API.**

**Try to generally display the data in a neat, organized way.**

## Related Documentation

* [GitHub REST API](https://developer.github.com/v3/)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## License

Pinned Repos Viewer is open source software, built with [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate), and [licensed as MIT](https://github.com/gunnarjohnson/pinned-repos-viewer/blob/master/LICENSE.txt).
