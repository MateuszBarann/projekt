const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ======== POŁĄCZENIE Z MONGODB =========
// !!! TU WSTAWISZ SWOJE CONNECTION STRING !!!
mongoose.connect(
  "mongodb://localhost:27017/starwars",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ======== SCHEMAT I MODEL FILMÓW =========
const movieSchema = new mongoose.Schema({
  title: String,
  episode_id: Number,
  release_date: String,
  director: String
});

const Movie = mongoose.model("Movie", movieSchema);

// ======== ROUTE: ZWRÓĆ WSZYSTKIE FILMY =========
app.get("/api/movies", async (req, res) => {
  const movies = await Movie.find().sort({ episode_id: 1 });
  res.json(movies);
});

// ======== URUCHOMIENIE SERVERA =========
const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
