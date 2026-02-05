import React, { useEffect, useState } from 'react';
import './App.css';

// 1. BACKUP DATA WITH IMAGES (Safety Net)
const MOCK_DB = [
    { id: 1, title: "Stranger Things", imageUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments." },
    { id: 2, title: "Money Heist", imageUrl: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", description: "An unusual group of robbers attempt the most perfect robbery in Spanish history." },
    { id: 3, title: "The Witcher", imageUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny." },
    { id: 4, title: "Dark", imageUrl: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXkFbk1Z8.jpg", description: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families." },
    { id: 5, title: "Breaking Bad", imageUrl: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", description: "A high school chemistry teacher turned meth producer navigates the criminal underworld." },
    { id: 6, title: "Lucifer", imageUrl: "https://image.tmdb.org/t/p/w500/ekZobS2yOfuNL1mWHVkB016o5uS.jpg", description: "The Devil settles in Los Angeles, opening a nightclub and forming a connection with a homicide detective." },
    { id: 7, title: "Squid Game", imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games." },
    { id: 8, title: "Friends", imageUrl: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg", description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan." }
];

function App() {
  const [movies, setMovies] = useState(MOCK_DB); 
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => {
          console.log("Connected to Backend!");
          if(data.length > 0) setMovies(data);
      })
      .catch(err => {
          console.log("Backend offline, using backup data.");
      });
  }, []);

  const scrollLeft = () => {
    document.querySelector(".card-container").scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    document.querySelector(".card-container").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="main">
        <nav>
          <div className="logo">
            <svg viewBox="0 0 111 30" version="1.1" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2">
              <g>
                <path fill="#E50914" d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
          <div className="side-buttons">
            <select>
              <option value="">English</option>
              <option value="">हिन्दी</option>
              <option value="">తెలుగు</option>
            </select>
            <a className="sign-in" href="/">Sign In</a>
          </div>
        </nav>
        
        <div className="hero">
          <h1>Unlimited movies,<br />TV shows and <br />more</h1>
          <p>Starts at ₹149. Cancel at any time.</p>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="center-buttons">
            <input type="email" placeholder="Email Address" />
            <button className="button-gs">Get Started</button>
          </div>
        </div>
        <div className="box"></div>
      </div>
      
      <div className="bottom-curve"></div>

      <div className="card-section">
        <h3>Trending Now</h3>
        <div className="card-wrapper">
          <div className="scroll-btn left" onClick={scrollLeft}>
             <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="m8.414 12 7.293 7.293-1.414 1.414-8-8a1 1 0 0 1 0-1.414l8-8 1.414 1.414z" clipRule="evenodd"></path></svg>
          </div>

          <div className="responsive-wrapper">
             <div className="card-container">
               {movies.length > 0 ? movies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="main-card"
                    onClick={() => setSelectedMovie(movie)} 
                  >
                      {/* IMAGE TAG ADDED HERE */}
                      <img src={movie.imageUrl} alt={movie.title} className="movie-poster" />
                  </div>
               )) : <p style={{color:'white'}}>Loading...</p>}
             </div>
          </div>

          <div className="scroll-btn right" onClick={scrollRight}>
             <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z" clipRule="evenodd"></path></svg>
          </div>
        </div>
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>×</button>
            <h2 style={{color: 'white', fontSize: '2.5rem', marginBottom: '10px'}}>
              {selectedMovie.title}
            </h2>
            <p style={{color: '#46d369', fontWeight: 'bold', marginBottom: '10px'}}>98% Match</p>
            <p style={{color: '#999', fontSize: '1rem'}}>
              {selectedMovie.description || "Description not available."}
            </p>
            <button className="modal-play-btn" onClick={() => alert("Playing " + selectedMovie.title)}>
              Play
            </button>
          </div>
        </div>
      )}

      <div className="more_reasons">
        <h2>More reasons to join</h2>
        <div className="info-cards">
          <div className="info-card">
            <h4>Enjoy on your TV</h4>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="info-card">
            <h4>Download your shows to watch offline</h4>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
          <div className="info-card">
            <h4>Watch everywhere</h4>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="info-card">
            <h4>Create profiles for kids</h4>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
          </div>
        </div>
      </div>
      <div className="responsive-wrapper">
        <section className="faq-section">
          <h2 className="faq-title">Frequently asked questions</h2>
          {[
            { q: "What is Netflix?", a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more-on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad-all for one low monthly price." },
            { q: "How much does Netflix cost?", a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month." },
            { q: "Where can I watch?", a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device." },
            { q: "How do I cancel?", a: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
            { q: "What can I watch on Netflix?", a: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more." },
            { q: "Is Netflix good for Kids?", a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space." }
          ].map((item, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {item.q}
              </button>
              <div className="faq-answer" style={{ display: openFaqIndex === index ? 'block' : 'none' }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}
export default App;