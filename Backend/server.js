require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. SCHEMA - Now includes 'imageUrl'
const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    imageUrl: String, // Stores the link to the poster
    description: String
});

const Movie = mongoose.model('Movie', movieSchema);

// 2. REAL MOVIE DATA (With Poster Links)
const BACKUP_MOVIES = [
    { id: 1, title: "Stranger Things", imageUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments." },
    { id: 2, title: "Money Heist", imageUrl: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", description: "An unusual group of robbers attempt the most perfect robbery in Spanish history." },
    { id: 3, title: "The Witcher", imageUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny." },
    { id: 4, title: "Dark", imageUrl: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXkFbk1Z8.jpg", description: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families." },
    { id: 5, title: "Breaking Bad", imageUrl: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", description: "A high school chemistry teacher turned meth producer navigates the criminal underworld." },
    { id: 6, title: "Lucifer", imageUrl: "https://image.tmdb.org/t/p/w500/ekZobS2yOfuNL1mWHVkB016o5uS.jpg", description: "The Devil settles in Los Angeles, opening a nightclub and forming a connection with a homicide detective." },
    { id: 7, title: "Squid Game", imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games." },
    { id: 8, title: "Friends", imageUrl: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg", description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan." }
];

// 3. CONNECTION LOGIC
// I replaced '@' with '%40' in the password so it works!
const MONGO_URI = "mongodb+srv://raghav:Raghavsai12@cluster0.kw2afgd.mongodb.net/netflix_clone?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
    family: 4 // Force IPv4 to bypass DNS blocks
})
.then(async () => {
    console.log("✅ MongoDB Connected Successfully!");
    
    // AUTO-POPULATE: If DB is empty, fill it with our new image data
    const count = await Movie.countDocuments();
    if (count === 0) {
        await Movie.insertMany(BACKUP_MOVIES);
        console.log("✅ Database was empty, added Movie Posters automatically.");
    }
})
.catch(err => {
    console.log("❌ CONNECTION FAILED!");
    console.log("Error Details:", err.message); // This will tell us WHY
});
// 4. API
app.get('/api/movies', async (req, res) => {
    if (mongoose.connection.readyState === 1) {
        try {
            const movies = await Movie.find();
            res.json(movies);
        } catch (err) { res.status(500).json({ error: err.message }); }
    } else {
        res.json(BACKUP_MOVIES);
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));