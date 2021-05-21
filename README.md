To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`



## Backend Server

 The  file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Steps made in this project
divided app into 
    - CurrentlyReading.js
    - WantToRead.js
    - Read.js
    - Search.js

Added Book Component to display single books

Added react routers

Configured Search and main page routes so now we can navigate between search and main page

Cleaned the state from fixed values and used getAll method from the api to display persisted data

Added support to change book shelf on main page

Added support to add books to shelf from search

Added support to show search result even if books have no thumbnail

Added functionality of displaying the book current shelf in search result and handled invalid queries

fixed the issue where books change shelf only on reload

Refactored some components to be functional components as they are stateless