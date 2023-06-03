import React,{useEffect, useState, } from 'react'
import "../App";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Book_Details } from '../API';

   const BookDetails = () => {
   const [book, setBook ] = useState({});

const {id} = useParams();

   useEffect(() => {
    axios
    .get(`${Book_Details}/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => { console.log(err);
      });
  }, [id])
  return (<div className='book-details'>  
  <div className='book-image'>
  <h2>{book?.title}</h2>
<img src={book?.image_url} alt="#" />
  </div>
  <div className='book-info'>
  <h2 className='des'>Description</h2>
    <p >{book?.description}</p>
    <div><h3>Authors</h3>
    <p>{book?.authors}</p>
    <h3>Genres</h3>
    <p>{book?.genres}</p>
    <h3>Number of Paiges</h3>
    <p> {book?.num_pages}</p>
    </div>
    </div>    
  </div>
  )
}

export default BookDetails