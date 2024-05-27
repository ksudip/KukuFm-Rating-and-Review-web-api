// scripts/generateSampleData.js
const mongoose = require('mongoose');
const Audiobook = require('../models/audiobook');
require('dotenv').config();
mongoose.connect("mongodb+srv://sudip:hNNZmvUzOsMD6Bp9@cluster0.c7lmfqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

const sampleAudiobooks = [
    { title: 'AudioBook11', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733810/kukuFM/jp8ns3lovpzpzkltbcxq.mp3", author: 'Author 11', 
    genre: 'fiction', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801137/kukuFM/pzj4dr89xaefni2aewq2.jpg', 
    rating: 2 
},
    { title: 'AudioBook12', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733804/kukuFM/ac1fmrl4ttzghioq2ten.mp3", author: 'Author 12', 
    genre: 'Science Fiction', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801123/kukuFM/sjz2r41u6ybtnbvugwi6.jpg', 
    rating: 3 
},
    { title: 'AudioBook13',
     audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733804/kukuFM/yuup3ufhnbuhabwe4ht9.mp3", author: 'Author 13', 
     genre: 'Thriller', 
     description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
     coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801123/kukuFM/vperkduc4frk7sahjedv.png', 
     rating: 1 
    },
    { title: 'AudioBook14', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733800/kukuFM/gi5cj94ytlqrfvkvfpac.mp3", author: 'Author 14', 
    genre: 'Science Fiction', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801122/kukuFM/e8zbls0jeymskwap9yzu.png', 
    rating: 5 },
    { title: 'AudioBook15', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733788/kukuFM/o7a2ysjglrffzzsk3s5a.mp3", author: 'Author 15', 
    genre: 'Mystery', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801122/kukuFM/kllrtorxjejrnsfgs7hr.jpg', 
    rating: 2 
},
    { title: 'AudioBook16', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733810/kukuFM/jp8ns3lovpzpzkltbcxq.mp3", author: 'Author 16', 
    genre: 'Fantasy', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716801122/kukuFM/cxqfvok7ruzohyctvphi.jpg', 
    rating: 2 
},
    { title: 'AudioBook17', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733804/kukuFM/ac1fmrl4ttzghioq2ten.mp3", author: 'Author 17', 
    genre: 'Science Fiction', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716665086/kukuFM/xhvifabisxvzqf3wjpn7.jpg', 
    rating: 3 
},
    { title: 'AudioBook18', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733804/kukuFM/yuup3ufhnbuhabwe4ht9.mp3", author: 'Author 17', 
    genre: 'Thriller', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716665079/kukuFM/lmzjhwatmcqlghc2capk.jpg', 
    rating: 1 
},
    { title: 'AudioBook19', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733800/kukuFM/gi5cj94ytlqrfvkvfpac.mp3", author: 'Author 19', 
    genre: 'Science Fiction', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716665077/kukuFM/p0g7uwiopqk45w3hzxtc.png', 
    rating: 5 
},
    { title: 'AudioBook12', 
    audio: "https://res.cloudinary.com/dvqc0gjdf/video/upload/v1716733788/kukuFM/o7a2ysjglrffzzsk3s5a.mp3", author: 'Author 20', 
    genre: 'Non', 
    description: "An audiobook allows a person to listen to a recording of the text of the book, rather than read the text of the book.While these have dramatically risen in popularity over the last few years alone, they’re not exactly new. Audiobooks, or “talking books,\" as they were often referred to in the past, emerged during the 1930s. Unlike the digital versions we enjoy today, however, they often came in the physical form of a cassette tape or vinyl record and were mostly used for educational purposes at schools or libraries\.", 
    coverImage: 'https://res.cloudinary.com/dvqc0gjdf/image/upload/v1716665067/kukuFM/pdk1x8v8ve3msbjpdkg5.jpg', rating: 2 
},
    // Add more sample audiobooks
];

Audiobook.insertMany(sampleAudiobooks)
    .then(() => {
        console.log('Sample data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting sample data', err);
        mongoose.connection.close();
    });
