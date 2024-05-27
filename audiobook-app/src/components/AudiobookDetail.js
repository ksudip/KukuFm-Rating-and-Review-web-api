import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactStars from 'react-stars'

function AudiobookDetail() {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);

  const [showReviews, setShowReviews] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleReadReviewsClick = () => {
    setShowReviews(!showReviews)  
  };

  const handleAddReviewClick = () => {
    setShowReviewForm(!showReviewForm);
  };

  useEffect(() => {
    (async () => {
      try {
        // let url=process.env.BASE_URL
        const { data } = await axios.get(
          `http://localhost:5000/audiobooks/${id}`
        );
        console.log("RESPONSE", data);
        setAudiobook(data);
      } catch (error) {
        console.log("ERROR IN LOADING DETAILS");
      }
    })();
  }, [id]);

  if (!audiobook) return <div>Loading...</div>;

  return (
    <div>
      <div
        className="AudioDetails"
      >
        <div style={{ "display": "flex", "justifyContent": "center" }}>
              <img className="DetailImage" src={audiobook.coverImage} alt={audiobook.title} />
        </div>
        <h2 style={{"fontSize": "16pt"}} >{audiobook.title}</h2>
        <p>Author: {audiobook.author}</p>
        <p>{audiobook.description}</p>
        <div style={{ "display": "flex", "justifyContent": "space-between" }}>
          <p>{audiobook.genre}</p>
          <ReactStars
              count={5}
              value= {audiobook.rating}
              size={20}
              edit={false}
              color2={'#ffd700'} />
        </div>
        <div>
        <AudioPlayer
              autoPlay
              src={audiobook.audio}
              onPlay={e => console.log("onPlay")}
               // other props here
        />
        </div>
        <div style={{ "display": "flex", "justifyContent": "space-between"}}>
            <button className="read_review" onClick={handleReadReviewsClick}>
              {showReviews ? "Hide Reviews" : "Read Reviews"}
            </button>
            <button className="add_review" onClick={handleAddReviewClick}>
              {showReviewForm ? "Close Review Form" : "Add Review"}
            </button>
        </div>
        {showReviews && (
          <div>
            <h3>Reviews:</h3>
            {audiobook.reviews?.map((review, index) => (
              <div key={index}>
                <div style={{ "display": "flex", "justifyContent": "space-between" }} >
                    <p>User Name: {review.user} </p>
                    <p>Rating: {review.rating}</p>
                    <ReactStars
                        count={5}
                        value= {review.rating}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />
                </div>

                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        {showReviewForm && <ReviewForm audiobookId={id} />}
      </div>
    </div>
  );
}

export default AudiobookDetail;
