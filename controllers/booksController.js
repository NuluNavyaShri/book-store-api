const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const filePath = './books.json';

const readBooks = () => JSON.parse(fs.readFileSync(filePath));
const writeBooks = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

exports.getBooks = (req, res) => {
  const books = readBooks();
  res.json(books);
};

exports.addBook = (req, res) => {
  const { title, author, price, publishedDate } = req.body;
  const books = readBooks();
  const newBook = { id: uuidv4(), title, author, price, publishedDate };
  books.push(newBook);
  writeBooks(books);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, price, publishedDate } = req.body;
  const books = readBooks();
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books[index] = { id, title, author, price, publishedDate };
  writeBooks(books);
  res.json(books[index]);
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  const books = readBooks();
  const newBooks = books.filter((b) => b.id !== id);
  if (books.length === newBooks.length)
    return res.status(404).json({ message: 'Book not found' });
  writeBooks(newBooks);
  res.status(204).send();
};
