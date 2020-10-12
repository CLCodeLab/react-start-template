# react-start-template

Basic React start template which includes all necessary components and packages used to begin a quick project (minus all the crap included with npx create-react-app)

> This repo is updated regularly with new and latest npm packages.

## _public_ Folder

### index.html

#### Title

Change `NewApp` to your desired App name

```html
<title>NewApp</title>
````

#### Name and description

Change `name` and `content` to your specific application name and description.

```html
<meta name="New App" content="Welcome to my New App" />
```

#### Fonts

Replace the `href` to your specific font link (normally Google Fonts).

```html
<link
	href="https://fonts.googleapis.com/css?family=Public+Sans:300,400,400i,700,700i&display=swap"
	rel="stylesheet"
/>
```

> Delete if not required.

#### Bootsrap Included

```html
<link
	rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous"
/>
```

#### Fontawesome Included

```html
<script
	defer
	src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"
	integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0"
	crossorigin="anonymous"
></script>
```

### favicon.ico

Change this file to your App or Company Logo

## _src_ Folder

Folder includes:

- **index.js**: Main React index file. no changes are normally made to this file.
- **App.js**: Top level React component that holds all application application. Top level methods should be included in this file, such as _routing_, wrapping application component with _context providers_, etc...
- **App.css**: Application CSS file.
- **component** folder: Contains all application componenents.
- **context** folder: Contains React _Context_ accessed by React's _useContext_ hook.
- **images** folder: Contains all images (.png, .gif, .jpeg, etc...)
- **svg** folder: Contains SVG files.
- **utils** folder: Contains files which include global supplementary functions used throughout the application.

## NPM Packages Used

1. axios
2. immer
3. normalize.css
4. react-dnd
5. react-dnd-html5-backend
6. react-markdown
7. react-router-dom
8. react-tooltip
9. react-transition-group
10. styled-components
11. use-immer

> Delete the packages that will not be used in your app before running `npm install`
