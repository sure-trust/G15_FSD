
const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db("BookInventory").collection("books");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// API Routes
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/upload-book', async (req, res) => {
  const booksCollections = await connectToDatabase();
  const data = req.body;
  const result = await booksCollections.insertOne(data);
  res.send(result);
});

router.get('/all-books', async (req, res) => {
  const booksCollections = await connectToDatabase();
  let query = {};
  if (req.query?.book_title) {
    query = { book_title: req.query.book_title };
  }
  const books = await booksCollections.find(query).toArray();
  res.send(books);
});

router.patch('/book/:id', async (req, res) => {
  const booksCollections = await connectToDatabase();
  const id = req.params.id;
  const updateBookData = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      ...updateBookData,
    },
  };
  const result = await booksCollections.updateOne(filter, updateDoc);
  res.send(result);
});

router.delete('/book/:id', async (req, res) => {
  const booksCollections = await connectToDatabase();
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await booksCollections.deleteOne(filter);
  res.send(result);
});

router.get('/book/:id', async (req, res) => {
  const booksCollections = await connectToDatabase();
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await booksCollections.findOne(filter);
  res.send(result);
});

module.exports = router;

