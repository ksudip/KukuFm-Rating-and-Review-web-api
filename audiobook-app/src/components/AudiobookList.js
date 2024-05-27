import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import LinearProgress from '@mui/material/LinearProgress';

function AudiobookList({ searchQuery, selectedGenre, selectedAuthor, selectedRating }) {
  const [audiobooks, setAudiobooks] = useState([]);
  const [playingBookId, setPlayingBookId] = useState(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // console.log(process.env.BASE_URL)

  useEffect( () => {
     (async()=>{
      try{
        // let url = process.env.BASE_URL+'/audiobooks';
        // console.log("https://kukufm-rating-and-review-web-api.onrender.com/audiobooks");
        const {data} = await  axios.get("https://kukufm-rating-and-review-web-api.onrender.com/audiobooks")
        console.log("RESPONSE AudioBook List",data);
        setAudiobooks(data);
      } catch(error){
        console.log("ERROR WHILE CALLING GET AUDIO BOOK API",error);
      }
     })();
  }, []);

  const filteredAudiobooks = audiobooks.filter(audiobook =>{
    const matchesQuery = audiobook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audiobook.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || audiobook.genre === selectedGenre;
    const matchesAuthor = selectedAuthor === 'All' || audiobook.author === selectedAuthor;
    const matchesRating = selectedRating ==="None"    ||audiobook.rating >= parseInt(selectedRating);

    return matchesQuery && matchesGenre && matchesAuthor && matchesRating;
  });

  const handlePlayPause = (id, audio) => {
    if (playingBookId === id) {
      audioRef.current.pause();
      setPlayingBookId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audio);
      audioRef.current.play();
      setPlayingBookId(id);
      setProgress(0);

      audioRef.current.ontimeupdate = () => {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      };

      audioRef.current.onended = () => {
        setPlayingBookId(null);
        setProgress(0);
      };
    }
  };

  return (
    <div className='AudioBookList' >
      <h1 style={{"textAlign": "center", "marginTop": "20px"}}>Audiobooks</h1>
      <ul className='AudioList_ul' style={{"display": "grid","justifyContent": "space-between","gridTemplateColumns": "auto auto auto auto", "columnGap": "5px", "rowGap": "5px"}}>
        {
        filteredAudiobooks.map(audiobook => (
          <div className="card" style={{"width":"95%", "margin": "10px"}} key={audiobook._id}>
             <Link to={`/audiobooks/${audiobook._id}`}>
                <img src={audiobook.coverImage} className="card-img-top" alt={audiobook.title} style={{"height": "15rem"}}/>
                <div className="card-body"> 
                  <h2 className="card-title">{audiobook.title}</h2>
                  <p className="card-text">{audiobook.author}</p>
                  {/* <p>Rating: {audiobook.rating}</p> */}
                  <ReactStars
                          count={5}
                          value= {audiobook.rating}
                          size={24}
                          edit={false}
                          color2={'#ffd700'} />
                </div>
              </Link>
                          
                  {/* <div href="#" className="btn btn-primary">Listen AudioBook</div> */}
                  <div className="audioIcon" >
                      <IconButton onClick={() => handlePlayPause(audiobook._id, audiobook.audio)}>
                        {playingBookId === audiobook._id ? <PauseIcon /> : <PlayArrowIcon />}
                      </IconButton>
                      {playingBookId === audiobook._id && (
                        <Box sx={{ width: '80%', margin: '0 0 10px 10px', alignItems: 'center' }}>
                          <LinearProgress variant="determinate" value={progress} />
                        </Box>
                      )}
              </div>
           </div>
        ))}
      </ul>
    </div>
  );
}

export default AudiobookList;
