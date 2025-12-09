const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001; 


app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/StarWarsDB')
  .then(() => console.log('Połączono z MongoDB (baza StarWarsDB)'))
  .catch(err => console.error('Błąd połączenia z MongoDB:', err));

const movieSchema = new mongoose.Schema({
  episode: Number,
  title: String,
  director: String,
  release_year: Number,
  poster: String
}, { 
  collection: 'StarWarsDB' 
});

const Movie = mongoose.model('Movie', movieSchema);


app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    
    console.log(`Znaleziono ${movies.length} filmów.`);
    
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});