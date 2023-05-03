const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "An book must have a title"], trim: true },
  author: { type: String, required: [true, "An book must have an artist"] },
  price: { type: Number, required: [true, "An book must have a price"] },
  edition: { type: Number },
  language: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
