# Recipe Directory - Firebase Version

An intermediate level React app that displays a list of recipes pulled from a Firebase Firestore database. Combines many React practices into a realistic webapp.

## Studies

### React Hooks

- useState
- useEffect
- useRef

### Custom React Hooks

- useFetch - general-purpose hook for GETting and POSTing data

### React Router Hooks

- useParams
- useHistory

### APIs

- Handling returned data safely with Loading state and Error handling.
- Mapping data for visually appealing table display.
- Dropdown menu for displaying data based on particular building.

### Firebase Firestore Database

- Connection to cloud stored backend database
- Efficient configuration of database
- Pulling live data and handling errors

### Component Tree

- Separation of pages and components.
  - `<Navbar />` is always rendered, with components rendered underneath depending on current route.
  - `<Recipe />` component is reusable.
- Passing children templates.

## Outline

```
.
├── README.md
├── package-lock.json
├── package.json
├── data
│   └── db.json
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
    ├── components
    │   ├── Navbar.css
    │   ├── Navbar.jsx
    │   ├── RecipeList.css
    │   └── RecipeList.jsx
    ├── hooks
    │   └── useFetch.jsx
    ├── index.css
    ├── index.js
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
