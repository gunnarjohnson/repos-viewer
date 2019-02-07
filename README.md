# Repos Viewer
**A React app that uses the GitHub REST API to display a user's repositories**

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
* **Clone:** `git clone https://github.com/gunnarjohnson/repos-viewer.git`
* [**Download**](https://github.com/gunnarjohnson/repos-viewer/archive/master.zip)
* [**Fork**](https://github.com/gunnarjohnson/repos-viewer/fork)

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
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
* [PostCSS](https://github.com/postcss/postcss)
* [React](https://github.com/facebook/react)
* [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate)
* [Webpack](https://github.com/webpack/webpack)

## Project Instructions

### Assignment

**_Create a React project that uses the GitHub REST API to show a user’s repositories._**

**You should be able to search a user’s name in an input field and have the repositories update.**
> The `Search` component handles the username search input and passes it to the `withGitHubData` higher-order component (HOC) to get the repositories.

**It should handle and display some sort of “loading” state while fetching data.**
> The `Repos` component displays a loading message while the `withGitHubData` HOC fetches the data. 

**It should handle errors if the username doesn’t return anything on GitHub**
> The `Repos` component displays an error message if the `withGitHubData` HOC is unable to fetch the data. Additionally, the error is written to the console.

**The list of repositories should include details such as the repository’s name, description, and the languages it uses.**
> The `ReposView` component sets the view for the list of repositories and adds details via the `Card` component, including the repository's name, description, and languages. The `withGitHubData` HOC fetches the data for the `Languages` component.

**Clicking on a repository should take you to a secondary page with additional details, such as the README or other information.**
> The `ReposView` component also sets the view for the secondary page, which displays the repository's contents. The `withGitHubData` HOC fetches the data for the `RepoContents` component, and the contents are added via the `Items` component. 

### Requirements

**You may use “starters” such as create-react-app or NextJS, but do not use boilerplates that contain significant amounts of already-written code.**
> I built this app with my own starter, `React Boilerplate`.

**Avoid using any external packages or component libraries such as Material-UI, React Bootstrap, etc.**
> No packages or libraries of this type were used.

**For API requests, please only use the Fetch API.**
> I built the `withGitHubData` HOC for the API calls. It utilizes the **Fetch API** to get the data.

**Try to generally display the data in a neat, organized way.**
> I used `PostCSS` to style the app and selected colors with the [Material Design Color Palette Generator](https://www.materialpalette.com/).

## Related Documentation

* [GitHub REST API](https://developer.github.com/v3/)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## License

Repos Viewer is open source software, built with [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate), and [licensed as MIT](https://github.com/gunnarjohnson/repos-viewer/blob/master/LICENSE.txt).
