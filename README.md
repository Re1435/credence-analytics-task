# Movie API

This is a simple Express-based backend API for managing movies. It allows you to create, read, update, and delete movie details using MongoDB as the database.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Re1435/credence-analytics-task.git
cd credence-analytics-task
```

2. Install dependencies:

`npm install`

3. Create a `.env` file in the root directory and add your MongoDB URI:

### Running the Server

Start the server with `nodemon`:

```bash
nodemon server.js
```

The server will run on `http://localhost:3001`.

## API Endpoints

### Create a Movie

- **URL:** `/movies/add-movie`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Movie Name",
    "img": "Image URL",
    "summary": "Movie Summary"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "_id": "movie_id",
      "name": "Movie Name",
      "img": "Image URL",
      "summary": "Movie Summary",
      "__v": 0
    }
    ```

### Get All Movies

- **URL:** `/movies/all-movies`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of movie objects

### Update a Movie

- **URL:** `/movies/update-movie/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Updated Name",
    "img": "Updated Image URL",
    "summary": "Updated Summary"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "message": "Movie updated successfully"
    }
    ```

### Delete a Movie

- **URL:** `/movies/delete-movie/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "message": "Movie deleted successfully"
    }
    ```

## Error Handling

- **500 Internal Server Error:**
  - **Content:**
    ```json
    {
      "message": "Server error"
    }
    ```
- **404 Not Found:**
  - **Content:**
    ```json
    {
      "message": "movie details not found"
    }
    ```
