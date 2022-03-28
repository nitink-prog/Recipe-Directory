# Recipe Directory - Firebase Version

A React app that displays a list of recipes pulled from a Firebase Firestore database. Combines many React practices into a realistic webapp.

## Studies

### React Hooks

- useState
- useEffect
- useRef

### React Router Hooks

- useParams
- useHistory

### Firebase Firestore Database

- Connection to cloud stored backend database.
- Efficient configuration of database.
- Pulling real-time data and handling errors.
  - Changes to any recipe are instantly reflected in the Home page and the Recipe page.
- Search for recipes in the directory.

### APIs

- Handling returned data safely with Loading state and Error handling.
- Mapping data for visually appealing table display.
- Dropdown menu for displaying data based on particular building.

### Component Tree

- Separation of pages and components.
  - `<Navbar />` is always rendered, with components rendered underneath depending on current route.
  - `<Recipe />` component is reused.
- Passing children templates.

## Upcoming Features

- Form for updating document (recipe) data

## Outline

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── assets
    │   ├── darkmode-icon.svg
    │   └── delete-icon.svg
    ├── components
    │   ├── Navbar.css
    │   ├── Navbar.jsx
    │   ├── RecipeList.css
    │   ├── RecipeList.jsx
    │   ├── Searchbar.css
    │   ├── Searchbar.jsx
    │   ├── ThemeSelector.css
    │   └── ThemeSelector.jsx
    ├── context
    │   └── ThemeContext.jsx
    ├── firebase
    │   └── config.jsx
    ├── hooks
    │   ├── useFetch.jsx
    │   └── useTheme.jsx
    └── pages
        ├── create
        │   ├── Create.css
        │   └── Create.jsx
        ├── home
        │   ├── Home.css
        │   └── Home.jsx
        ├── recipe
        │   ├── Recipe.css
        │   └── Recipe.jsx
        └── search
            ├── Search.css
            └── Search.jsx
```
