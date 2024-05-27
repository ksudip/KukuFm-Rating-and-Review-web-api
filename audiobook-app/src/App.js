import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetail from './components/AudiobookDetail';
import NavBar from './components/NavBar';
import Login from './components/login';
import SignUp from './components/signUp';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedRating, setSelectedRating] = useState('None');
  const [authors, setAuthors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');


  useEffect(() => {
    (async()=>{
      try {
        const {data} = await axios.get('https://kukufm-rating-and-review-web-api.onrender.com/audiobooks')
        let List = new Set([]);
        for(let x in data){
          List.add(data[x].author);
        }
        let AuthorList = Array.from(List);

        console.log("Unique Authors response: ",AuthorList);
        setAuthors(AuthorList);
      } catch(error){
        console.log("ERROR WHILE FINDING UNIQUE AUTHORS",error);
      }
    })();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleAuthorChange = (author) => {
    setSelectedAuthor(author);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSelectedAuthor('All');
    setSelectedRating('None');
  };

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div>
        <NavBar 
          onSearchChange={handleSearchChange} 
          onGenreChange={handleGenreChange} 
          onAuthorChange={handleAuthorChange}
          authorList={authors}
          onRatingChange={handleRatingChange}
          onkukufmclick={handleResetFilters}
        />
        <Routes>
          <Route path="/" element={
            <AudiobookList 
              searchQuery={searchQuery} 
              selectedGenre={selectedGenre} 
              selectedAuthor={selectedAuthor} 
              selectedRating={selectedRating}
            />} 
          />
          <Route path="/audiobooks/:id" element={<AudiobookDetail />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {token && (
        <button onClick={handleLogout}>Logout</button>
      )}
      </div>
    </Router>
  );
}

export default App;








// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedGenre, setSelectedGenre] = useState('');

//   const handleSearchChange = (query) => {
//     setSearchQuery(query);
//   };

//   const handleGenreChange = (genre) => {
//     setSelectedGenre(genre);
//   };

//   return (
//     <Router>
//       <div>
//         <NavBar onSearchChange={handleSearchChange} onGenreChange={handleGenreChange} />
//         <Routes>
//           <Route path="/" element={<AudiobookList searchQuery={searchQuery} selectedGenre={selectedGenre} />} />
//           <Route path="/audiobooks/:id" element={<AudiobookDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;
