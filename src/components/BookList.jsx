import React,{useEffect, useState, } from 'react'
import '../App' ;
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
   const [books,setBooks ]= useState([]);
   useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();



  return (<div className='book-list'>
      {books.map((book) => (
        <div key={book.id} className='book'>
                <div className='title'><h4>{book.title}</h4></div>
                <div className='book-image1'><img src={book.image_url} alt='#' onClick={()=>navigate(`/book/${book.id}`)}/></div>

      </div> ))}
      </div>
  )
} 

export default BookList