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
<img src={book.image_url} alt="#" />
  </div>
  <div className='book-info'>
    <h2>Description</h2>
    <p>{book?.description}</p>
    <h2>Authors</h2>
    <p>{book?.authors}</p>
    </div>    
  </div>
  )
}

export default BookDetails