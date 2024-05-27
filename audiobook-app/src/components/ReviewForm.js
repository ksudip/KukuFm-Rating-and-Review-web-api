import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ audiobookId }) {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = { user, rating: Number(rating), comment };
    axios.post(`https://kukufm-rating-and-review-web-api.onrender.com/audiobooks/${audiobookId}/reviews`, review)
      .then(response => {
        console.log('Review submitted', response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} style={{"alignContent" : "centre"}} className='ReviewForm'>
      <h3>Submit a Review</h3>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
