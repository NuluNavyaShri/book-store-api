# 📚 Book Store REST API

A simple RESTful API for managing a book store, built with Node.js and Express. Data is stored in a local JSON file.

## 🔧 Tech Stack
- Node.js
- Express.js
- JSON file (for data storage)

## 📦 Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /books           | Get all books       |
| POST   | /books           | Add a new book      |
| PUT    | /books/:id       | Update a book       |
| DELETE | /books/:id       | Delete a book       |

## 🧪 Testing

You can test the API using Postman. The collection includes:
- GET all books
- POST a new book
- PUT to update a book
- DELETE a book

## 🚀 How to Run

```bash
npm install
node server.js
